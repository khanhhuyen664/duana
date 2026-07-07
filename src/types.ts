/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Candidate {
  id: string;
  fullName: string;
  phoneNumber: string;
  status: 'IN_PROGRESS' | 'COMPLETED';
  tabViolations: number;
  startTime: string; // ISO string
  endTime: string | null; // ISO string
  answers: Record<string, any>;
  writingGrades?: Record<string, { score: number; comment: string }>;
  speakingFeedback?: {
    part1?: {
      correctCount: number;
      totalCount: number;
      mispronounced: string[];
      details: {
        s_ending: boolean;
        t_ending: boolean;
        k_ending: boolean;
        syllable1: boolean;
        syllable2: boolean;
        syllable3: boolean;
        syllable4: boolean;
      };
    };
  };
  speakingFiles?: Record<string, string>; // base64 or file paths
  durationSeconds: number;
}

export interface Question {
  id: string;
  type: 'mcq' | 'text' | 'table-blank';
  questionText: string;
  options?: { key: string; text: string }[];
  hint?: string;
  correctAnswer?: string; // Stored server-side only to prevent cheating
}

export interface TestSection {
  id: string;
  title: string;
  questions: Question[];
}
