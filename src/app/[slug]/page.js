import React from 'react';
import Layout from '@/components/Layout';
import NextPrevNavigation from '@/components/NextPrevNavigation';
import { topics, getTopicBySlug, getNextPrevTopics } from '@/data/topicsData';
import { notFound } from 'next/navigation';
import AnimatedContent from '@/components/AnimatedContent';

// Generate metadata function
export async function generateMetadata({ params }) {
  // Await params before using its properties
  const resolvedParams = await params;
  const topic = await getTopicBySlug(resolvedParams.slug);

  if (!topic) {
    return { title: 'Topic Not Found', description: 'The requested topic could not be found.' };
  }

  return { title: topic.title, description: topic.shortDescription };
}

// Generate static paths
export function generateStaticParams() {
  return topics.map(topic => ({ slug: topic.slug }));
}

// Main page component
export default async function TopicPage({ params }) {
  // Await params before using its properties
  const resolvedParams = await params;
  const topic = await getTopicBySlug(resolvedParams.slug);

  if (!topic) {
    notFound();
    return null;
  }

  const { prevTopic, nextTopic } = getNextPrevTopics(topic.id);

  return (
    <Layout>
      <AnimatedContent topic={topic} />
      <NextPrevNavigation prevTopic={prevTopic} nextTopic={nextTopic} />
    </Layout>
  );
}