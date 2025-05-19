import React, { useState, useEffect } from 'react';
import { Container, Section, Grid } from '../components/layout';
import DomainCard from '../components/DomainCard';
import { getAllDomainsProgress } from '../services/domainService';

const domainsList = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Master modern web development',
  },
  {
    id: 'dsa',
    name: 'DSA',
    description: 'Learn Data Structures & Algorithms',
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Learn modern DevOps practices',
  },
  {
    id: 'android-dev',
    name: 'Android Dev',
    description: 'Build Android applications',
  },
  {
    id: 'ios-dev',
    name: 'iOS Dev',
    description: 'Create iOS applications',
  },
  {
    id: 'ai-ml',
    name: 'AI/ML',
    description: 'Explore Artificial Intelligence',
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Learn blockchain development',
  },
  {
    id: 'cyber-security',
    name: 'Cyber Security',
    description: 'Master cyber security concepts',
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Analyze and visualize data',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX',
    description: 'Design user experiences',
  },
  {
    id: 'gen-ai',
    name: 'GenAI',
    description: 'Build generative AI applications',
  },
  {
    id: 'game-dev',
    name: 'Game Dev',
    description: 'Create engaging games',
  }
];

const Domains = () => {
  const [startedDomains, setStartedDomains] = useState([]);
  const [availableDomains, setAvailableDomains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const { domainsProgress } = await getAllDomainsProgress();
          // Enhance domain list with progress data
        const started = domainsList
          .filter(d => domainsProgress.some(p => p.domainId === d.id))
          .map(d => {
            const progress = domainsProgress.find(p => p.domainId === d.id);
            return {
              ...d,
              completedTopics: progress.completedTopics,
              totalTopics: progress.totalTopics,
              progress: Math.round((progress.completedTopics / progress.totalTopics) * 100) || 0
            };
          });
        
        const available = domainsList.filter(d => 
          !domainsProgress.some(p => p.domainId === d.id)
        ).map(d => ({
          ...d,
          completedTopics: 0,
          totalTopics: 0,
          progress: 0
        }));

        setStartedDomains(started);
        setAvailableDomains(available);
      } catch (error) {
        console.error('Error fetching domains:', error);
        // Fallback - show all as available
        setAvailableDomains(domainsList);
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, []);

  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Started Domains */}
      {startedDomains.length > 0 && (
        <Section
          title="My Learning Domains"
          description="Track your progress in enrolled domains"
          className="mb-12"
        >
          <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {startedDomains.map(domain => (
              <DomainCard key={domain.id} {...domain} />
            ))}
          </Grid>
        </Section>
      )}

      {/* Available Domains */}
      <Section
        title="Available Domains"
        description="Explore new learning opportunities"
      >
        <Grid cols={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {availableDomains.map(domain => (
            <DomainCard key={domain.id} {...domain} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Domains;