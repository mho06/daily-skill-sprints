
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } = '@/hooks/use-toast';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';

interface Sprint {
  id: string;
  title: string;
  content: string;
  sprint_type: string;
  duration_minutes: number;
  order_index: number;
  skill_id: string;
}

interface UserProgress {
  completed: boolean;
  score?: number;
}

const Sprint = () => {
  const { skillId } = useParams();
  const navigate = useNavigate();
  const [sprints, setSprints] = useState<Sprint[]>([]);
  const [currentSprintIndex, setCurrentSprintIndex] = useState(0);
  const [userProgress, setUserProgress] = useState<Record<string, UserProgress>>({});
  const [loading, setLoading] = useState(true);
  const [inProgress, setInProgress] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (skillId) {
      fetchSprints();
      if (user) {
        fetchUserProgress();
      }
    }
  }, [skillId, user]);

  const fetchSprints = async () => {
    try {
      const { data, error } = await supabase
        .from('sprints')
        .select('*')
        .eq('skill_id', skillId)
        .order('order_index');

      if (error) throw error;
      setSprints(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading sprints",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProgress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('sprint_id, completed, score')
        .eq('user_id', user.id);

      if (error) throw error;

      const progressMap: Record<string, UserProgress> = {};
      data?.forEach(item => {
        progressMap[item.sprint_id] = {
          completed: item.completed,
          score: item.score
        };
      });
      setUserProgress(progressMap);
    } catch (error: any) {
      toast({
        title: "Error loading progress",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const startSprint = () => {
    setInProgress(true);
  };

  const completeSprint = async (sprintId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          sprint_id: sprintId,
          completed: true,
          completed_at: new Date().toISOString()
        });

      if (error) throw error;

      setUserProgress(prev => ({
        ...prev,
        [sprintId]: { completed: true }
      }));

      toast({
        title: "Sprint completed!",
        description: "Great job! You've completed this sprint.",
      });

      setInProgress(false);
      
      // Move to next sprint if available
      if (currentSprintIndex < sprints.length - 1) {
        setCurrentSprintIndex(currentSprintIndex + 1);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading sprint...</p>
        </div>
      </div>
    );
  }

  if (sprints.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">No sprints available for this skill.</p>
          <Button onClick={() => navigate('/skills')} className="mt-4">
            Browse Skills
          </Button>
        </div>
      </div>
    );
  }

  const currentSprint = sprints[currentSprintIndex];
  const completedSprints = sprints.filter(sprint => userProgress[sprint.id]?.completed).length;
  const progressPercentage = (completedSprints / sprints.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/skills')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Skills
          </Button>
          <div className="flex-1">
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-sm text-gray-600 mt-1">
              {completedSprints} of {sprints.length} sprints completed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sprint List */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Sprint Progress</h3>
            <div className="space-y-2">
              {sprints.map((sprint, index) => (
                <div
                  key={sprint.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    index === currentSprintIndex
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : userProgress[sprint.id]?.completed
                      ? 'bg-green-100'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setCurrentSprintIndex(index)}
                >
                  <div className="flex items-center gap-2">
                    {userProgress[sprint.id]?.completed ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    )}
                    <span className="text-sm font-medium">{sprint.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sprint Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {currentSprint.title}
                  <span className="text-sm text-gray-600">
                    {currentSprint.duration_minutes} min
                  </span>
                </CardTitle>
                <CardDescription>
                  Sprint {currentSprintIndex + 1} of {sprints.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!inProgress ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ready to start?</h3>
                    <p className="text-gray-600 mb-6">
                      This sprint will take approximately {currentSprint.duration_minutes} minutes to complete.
                    </p>
                    <Button onClick={startSprint} size="lg">
                      Start Sprint
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="prose max-w-none mb-8">
                      <div className="whitespace-pre-wrap text-gray-700">
                        {currentSprint.content}
                      </div>
                    </div>
                    
                    {currentSprint.sprint_type === 'code' && (
                      <div className="bg-gray-100 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold mb-2">Practice Exercise</h4>
                        <p className="text-gray-700">
                          Try implementing the concepts you've learned. Write your code and test it out!
                        </p>
                      </div>
                    )}

                    <div className="flex justify-center">
                      <Button
                        onClick={() => completeSprint(currentSprint.id)}
                        disabled={!user}
                        size="lg"
                      >
                        {user ? 'Complete Sprint' : 'Sign in to Complete'}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
