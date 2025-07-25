"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyFront = void 0;
exports.bodyFront = [
    // Chest
    {
        slug: "chest-right",
        color: "#cccccc",
        pathArray: [
            "M272.91 422.84c-18.95-17.19-22-57-12.64-78.79 5.57-12.99 26.54-24.37 39.97-25.87q20.36-2.26 37.02.75c9.74 1.76 16.13 15.64 18.41 25.04 3.99 16.48 3.23 31.38 1.67 48.06q-1.35 14.35-2.05 16.89c-6.52 23.5-38.08 29.23-58.28 24.53-9.12-2.12-17.24-4.38-24.1-10.61z",
        ],
    },
    {
        slug: "chest-left",
        color: "#cccccc",
        pathArray: [
            "M416.04 435c-15.12.11-34.46-6.78-41.37-21.48q-1.88-3.99-2.84-12.18c-2.89-24.41-5.9-53.65 8.44-74.79 4.26-6.26 10.49-7.93 18.36-8.56q11.66-.92 23.32-.35c10.58.53 18.02 2.74 26.62 7.87 12.81 7.65 19.73 14.52 22.67 29.75 4.94 25.57.24 64.14-28.21 74.97q-12.26 4.67-26.99 4.77z",
        ],
    },
    // Obliques
    {
        slug: "obliques-left",
        color: "#cccccc",
        pathArray: [
            "M438.7 444.36c-2.09-4.03-.13-6.83 3.63-8.81 10.22-5.36 16.79-11 24.23-18.07a1.71 1.71 0 012.89 1.12c.33 4.74-.81 14.39-5.53 17.22-4.68 2.82-18.74 10.02-24.39 9.14q-.57-.09-.83-.6z",
            "M457.39 466.73c-3.72-1.02-13.2-10.29-16.5-14.49a.52.52 0 01.24-.81q10.94-3.75 21.31-9c3.96-2.01 6.3-5.98 8.57-9.58q.38-.59.55.09c.82 3.33 1.54 6.17.38 9.58-2.55 7.44-7.62 18.79-13.66 24.01a.96.96 0 01-.89.2z",
            "M428.43 487.22c-1.01-1.79-.82-4.55-.71-6.72q.78-15.08.48-30.27-.01-.59.55-.4 1.72.59 3.02 1.64 11.58 9.37 18.82 16.95c3.86 4.05-16.2 17.42-19.56 19.48a1.87 1.86 59.6 01-2.6-.68z",
            "M470.76 456.28a.25.25 0 01.44.13q2.03 19.67-9.8 35.22-.37.48-.6-.08c-1.37-3.29-5.86-16.13-3.51-18.91q6.3-7.47 13.47-16.36z",
            "M452.27 478.5c1.13.49 4.28 12.47 4.78 14.38q.14.5-.23.88-1.29 1.35-2.65 2.41-10.44 8.12-21.76 14.97-1.49.9-2.91 1.33a.81.81 0 01-1.05-.71q-.73-8.62.67-17.15.08-.47.44-.8c1.74-1.6 21.96-15.73 22.34-15.51a.58.03 31 00.37.2z",
            "M428.22 519.14q.11-.36.43-.56 15.3-9.66 28.83-21.69a.43.42-22.6 01.71.29c.51 8.26 2.25 18.67-4.46 25.4q-11.8 11.84-25.03 22.09-.43.34-.49-.2c-.75-6.82-1.97-18.92.01-25.33z",
            "M456.54 524.55a.04.04 0 01.07.02q1.52 13.67.41 27.4-.04.47-.28.88c-4.97 8.3-18.23 19.62-27.88 22.63q-.57.17-.58-.43-.05-10.31-.27-20.53-.1-4.8 2.63-7.09c8.54-7.13 18.56-14.62 25.9-22.88z",
            "M418.89 657.11q-1.12-1.67-.43-3.63 3.27-9.38 4.04-18.23 1.97-22.81 3.58-45.65c.16-2.32.72-6.41 2.84-7.71q14.97-9.23 27.16-21.93.41-.42.71.08 1.29 2.15 1.53 4.2 3.23 27.74 3.13 56.8a1.3 1.28-24.5 01-.33.86q-12.74 13.93-25.55 27.75c-4.8 5.17-9.09 7.87-15.73 7.96q-.61.01-.95-.5z",
        ],
    },
    {
        slug: "obliques-right",
        color: "#cccccc",
        pathArray: [
            "M264.21 435.53c-4.88-3.13-5.75-12.11-5.39-17.36q.03-.53.51-.75 1.8-.84 3.43.85 10.05 10.45 22.57 16.9c3.64 1.89 5.54 3.62 4.79 7.8q-.42 2.35-2.82 1.87-12.45-2.49-23.09-9.31z",
            "M287.33 452.44c-4.05 4.46-10.38 11.38-16.28 14.3a.84.83 51.1 01-.9-.1c-6.29-5.17-12.54-18.97-14.21-25.09q-.91-3.34.85-8.81.12-.39.35-.05c2.41 3.65 4.59 7.74 8.67 9.76q10.18 5.05 21.27 9.01a.61.61 0 01.25.98z",
            "M297.3 487.82c-7.36-4.23-16.68-11.37-20.55-17.57q-.32-.5.09-.92 8.72-9.04 19.84-17.87 1.46-1.17 2.81-1.67a.44.44 0 01.59.43c-.28 10.08-.4 20.42.65 30.43q.34 3.26-.68 6.15a1.9 1.9 0 01-2.75 1.02z",
            "M257.35 456.18l13.68 16.63a1.86 1.82 22.9 01.4.95c.59 5.4-2.02 12.71-3.8 17.56q-.3.84-.84.13-11.85-15.55-9.77-35.17.04-.45.33-.1z",
            "M271.69 494.07a1.53 1.52-61.8 01-.49-1.64l4.2-13.58a.98.98 0 011.51-.5c3.2 2.32 21.89 14.05 22.26 16.7q1.15 8.32.66 16.79a.9.9 0 01-1.34.73q-14.24-8.05-26.8-18.5z",
            "M299.35 544.62c-7.52-6.03-16.15-13.43-24.23-21.24-6.93-6.7-6-17.19-4.88-26.06a.44.44 0 01.72-.28q13.31 11.88 28.41 21.38.43.27.6.75c2.33 6.49.95 18.37-.07 25.23q-.09.59-.55.22z",
            "M299.09 575.53c-7.98-3.65-27.57-15.86-28.06-26.2q-.57-11.91.46-24.3a.36.36 0 01.67-.15q.84 1.36 2.17 2.54 10.59 9.45 21.68 18.31c4.37 3.49 4.34 6.46 4.16 11.74q-.3 8.82-.42 17.64-.01.72-.66.42z",
            "M308.17 657.58c-7.39-.13-12.41-4.13-17.14-9.39q-11.86-13.22-23.92-26.37-.33-.36-.33-.85.09-23.18 1.81-46.22.53-7.13 2.49-14.41a.71.71 0 011.2-.3q11.54 12.06 25.82 21.1 3.36 2.12 3.62 5.17 2.06 23.67 3.86 47.36c.58 7.62 2.31 13.36 4.43 20.82q.47 1.66-.96 2.79-.39.31-.88.3z",
        ],
    },
    // abs
    {
        slug: "abs-upper",
        color: "#cccccc",
        pathArray: [
            "M347.73 429.25c7.46-3.61 10.5 6.27 10.99 11.52.48 5.06 3.46 30.61-2.78 32.93q-4.17 1.55-6.89 3.33-17.56 11.54-35.88 21.46a1.6 1.59-21.9 01-2.3-.98c-2.87-10.41-10.59-43.96 1.66-50.95 11.3-6.45 23.96-11.86 35.2-17.31z",
            "M371.94 473.31c-5.46-2.59-2.97-24.26-2.77-29.56.25-6.8 2.41-18.63 12.64-13.8q16.26 7.67 32.34 15.72 6.18 3.1 7.13 10.05c.58 4.26 1.35 8.49 1.07 12.72q-.84 12.55-4.33 26.56-.54 2.16-1.1 3.44-.25.58-.81.31c-15.78-7.29-30.79-19.08-44.17-25.44z",
            "M311.02 531.71a.23.23 0 01-.19-.21q-.39-10.47 1.9-20.76c1.26-5.69 7.66-9.9 13.1-12.9 9.09-5.01 18.93-11.15 28.56-14.92a1.24 1.21-42.6 01.94.03c3.28 1.52 4.78 3.87 4.82 7.68q.13 13.16-.15 26.31c-.08 3.85.78 8.39-.87 13.1q-.17.46-.59.72-2.65 1.65-4.29 1.82-21.06 2.22-43.23-.87z",
            "M382.57 533.27c-4.17-.18-9.56-.3-13.15-2.69q-.17-.11-.24-.31c-1.82-5.55-.86-11.17-.96-15.66-.18-8.4-.78-17.36.06-25.71.29-2.85 1.88-4.42 4.15-5.79q.42-.26.91-.19 1.71.25 3.21 1.03 12.48 6.44 24.75 13.26c4.96 2.75 12.21 7.02 13.72 12.41q2.93 10.56 2.39 21.49a.77.76-1.8 01-.67.71q-16.89 2.18-34.17 1.45z",
        ],
    },
    {
        slug: "abs-lower",
        color: "#cccccc",
        pathArray: [
            "M321 577.76c-5.17-.33-8.71-.44-10-6.26q-3.2-14.44-.59-27.83.11-.53.64-.63c7.58-1.44 13.62-2.45 22.45-4.56q11.5-2.76 23.94-1.88c3.67.26 3.3 3.46 3.4 6.21q.46 12.55-.33 26.94-.25 4.41-1.81 8.08-.21.49-.73.6-1.39.28-3.22.29-16.89.14-33.75-.96z",
            "M373.75 578.69c-2.47 0-4.31.22-5-2.7-1.8-7.7-3.05-34.29-.19-38.81q.27-.43.77-.47 13.14-1.24 25.77 1.83c8.41 2.04 14.51 3.01 21.85 4.36a1.29 1.28.6 011.05 1.07q2.16 14.12-.73 28.07c-1.08 5.24-5.22 5.26-10.36 5.63q-14.26 1.04-33.16 1.02z",
            "M350.35 712.81c-29.15-9.93-37.98-100.69-39.47-126.61a.99.99 0 01.33-.8c3.58-3.26 27.61-1.47 34.62-.93 4.41.34 15.27 1.31 15.26 7.53-.05 40.77.64 82.05-1.96 122.72a1.29 1.29 0 01-1.86 1.08c-2.3-1.14-4.12-2.04-6.92-2.99z",
            "M416.32 584.73q1.14.41 1.07 1.62c-1.62 26.44-9.96 116.68-40.43 126.74-2.27.75-4.15 2.12-6.35 2.73q-1.18.33-1.3-.89-.86-9.2-1.06-17.75c-.83-35.67-.91-71.2-1.01-106.88q0-.5.31-.89c4.95-6.46 41.69-7.25 48.77-4.68z",
        ],
    },
    // Biceps
    {
        slug: "biceps-left",
        color: "#cccccc",
        pathArray: [
            "M526.69 486.31c-9.9-8.61-17.75-33.21-20.65-47.73-1.41-7.06-1.34-29.61 8.58-32.16 10.33-2.66 23.81 25.34 26.6 32.91q2.6 7.04 3.6 16.13 1.62 14.66 1.66 32.28c.03 11.04-16.45 1.48-19.79-1.43z",
        ],
    },
    {
        slug: "biceps-right",
        color: "#cccccc",
        pathArray: [
            "M189.52 492.51c-2.43.62-7.38.57-7.51-3.08-.56-16.01-.42-35.49 5.11-50.26 3.19-8.54 13.89-30.22 23.27-32.72 10.08-2.68 12.68 16.59 12.6 22.8-.22 15.98-7.51 34.79-15.05 48.71-4.29 7.94-9.95 12.38-18.42 14.55z",
        ],
    },
    // Triceps
    {
        slug: "triceps-right-front",
        color: "#cccccc",
        pathArray: [
            "M206.2 514.2c-5.41-.67-6.55-7.29-4.69-11.42 11.08-24.55 22.84-50.62 30.54-75.51 1.37-4.41 3.08-8.59 3.95-12.45q2.94-13.12 5.79-26.26.42-1.98 1.82-3.39a.52.52 0 01.81.1q1.04 1.69 1.94 4.56 4.63 14.65 5.15 24.92c.57 11.36-5.11 24.55-8.65 35.5q-7.69 23.78-20.25 45.39c-2.45 4.23-11.51 19.18-16.41 18.56z",
        ],
    },
    {
        slug: "triceps-left-front",
        color: "#cccccc",
        pathArray: [
            "M517.69 512.06c-20.07-22.12-28.95-51.73-38.01-79.03-3.27-9.87-3.58-19.18-1.34-29.38 1.29-5.88 2.49-13.03 5.61-18.52q.32-.57.72-.06 1.35 1.67 1.79 3.69c2.67 12.33 5.14 24.49 9.07 36.52 8.25 25.28 18.58 49.8 31.1 77.2q1.42 3.1 1.05 5.33c-.81 4.89-5.46 9.25-9.99 4.25z",
        ],
    },
    // neck
    {
        slug: "neck-right-front",
        color: "#cccccc",
        pathArray: [
            "M354.01 315.07q-3.49-3.65-5.9-8.23c-6.46-12.3-11.03-25.42-16.12-38.77-2.92-7.66-1.98-19.44-1.61-27.6q.03-.58.47-.21c9.06 7.39 11.33 17.46 15.67 27.62 5.4 12.61 15.4 33.31 9.11 46.92a1 .99 35.5 01-1.62.27z",
            "M362.65 290.52q-1.14-1.37-1.86-3.41-5.33-15.15-12.14-29.75c-2.37-5.06-1.07-9.07-7.92-10.99q-1.01-.28.02-.47c5.98-1.08 15.25.91 21.33 2q2.37.42 4.81-.09 10.09-2.13 20.45-2.12a.37.37 0 01.08.73c-6.34 1.46-5.45 5.64-7.57 10.21z",
            "M345.77 316c-4.12-1.96-12.78-6.76-15.07-11.38-4.29-8.65-2.69-16.02-2.28-25.25a1 1 0 011.95-.28c4.29 12.42 10.5 24.4 15.71 36.61q.23.55-.31.3z",
        ],
    },
    {
        slug: "neck-left-front",
        color: "#cccccc",
        pathArray: [
            "M362.65 290.52q-1.14-1.37-1.86-3.41-5.33-15.15-12.14-29.75c-2.37-5.06-1.07-9.07-7.92-10.99q-1.01-.28.02-.47c5.98-1.08 15.25.91 21.33 2q2.37.42 4.81-.09 10.09-2.13 20.45-2.12a.37.37 0 01.08.73c-6.34 1.46-5.45 5.64-7.57 10.21z",
            "M372.75 314.71c-5.78-9.67 1.71-31.17 6.17-40.68 5.95-12.68 8.21-24.68 18.35-33.9a.49.49 0 01.82.35c.28 8.68.84 19.39-1.97 27.72-5.26 15.58-11.39 33.46-21.42 46.62a1.18 1.18 0 01-1.95-.11z",
            "M398.01 278.49a.5.49 35.5 01.87-.14c2.01 2.7 1.62 11.6 1.61 15.13-.04 12.42-8.2 17.45-17.9 22.58a.35.35 0 01-.48-.46c5.51-12.02 11.85-24.46 15.9-37.11z",
        ],
    },
    // Trapezius
    {
        slug: "trapezius-left-front",
        color: "#cccccc",
        pathArray: [
            "M414 311.19c-5.24-.12-7.81-.64-8.9-6.27q-2.33-12.09-1.17-23.94.06-.61.61-.89 1.66-.85 3.65.99 16.12 14.87 33.97 23.63 3.65 1.79-.27 2.89-13.88 3.91-27.89 3.59z",
        ],
    },
    {
        slug: "trapezius-right-front",
        color: "#cccccc",
        pathArray: [
            "M285.01 307.01a.89.89 0 01-.11-1.64q19.44-9.61 35.65-24.8 1.68-1.57 3.31-.31.4.32.45.82 1.25 12.61-1.57 25.41c-.74 3.32-2.55 4.23-5.9 4.48q-16.02 1.24-31.83-3.96z",
        ],
    },
    // Deltoids
    {
        slug: "deltoids-left-front",
        color: "#cccccc",
        pathArray: [
            "M450.39 320.75q-.95-.52-.7-1.58c1.57-6.61 5.8-9.1 12.14-11.9 24.99-11.03 43.76 3.33 60.17 20.74 20.73 21.99 11.81 56.44-14.82 68.19-4.41 1.94-6.79-1.03-9.81-4.51-5.81-6.7-13.46-14.12-15.99-22.8-3.93-13.43 4.32-27.54-9.64-37.62q-8.22-5.93-17.99-9.08-1.84-.59-3.36-1.44z",
        ],
    },
    {
        slug: "deltoids-right-front",
        color: "#cccccc",
        pathArray: [
            "M274.06 311.69q3.94 2.77 4.33 8.14.04.48-.38.73c-9.98 5.88-24.35 7.45-28.82 19.75-2.31 6.36-.97 17.35-1.43 23.68q-.55 7.51-5.73 14.07-10.37 13.11-13.81 16.67c-3.41 3.53-6.81 1.76-10.69-.47-15.42-8.87-24.95-25.45-22.52-43.22 2.05-14.92 12.71-25.79 24.06-35.02 16.99-13.82 35.58-17.99 54.99-4.33z",
        ],
    },
    // Adductors
    {
        slug: "adductors-left-front",
        color: "#cccccc",
        pathArray: [
            "M395.47 779.4c-5.7 1.33-11.34-11.87-12.46-15.86q-.61-2.18-.02-4.65 10.17-42.64 35.06-78.81c9.47-13.77 18.83-22.36 29.85-32.56q.55-.5.4.22-1.12 5.7-3.73 10.83c-19.44 38.38-33.3 79.2-47.77 119.65a1.84 1.83-86.4 01-1.33 1.18z",
            "M453.65 658.99q.67-1.43.23.09-26.73 93.75-48.63 189.74c-1.98 8.7-3.66 17.9-5.44 26.84q-2.19 11.05-2.78 22.43a.15.15 0 01-.3.04c-8.18-24.48-6.74-51.98-1.87-76.86 11.07-56.49 34.44-110.42 58.79-162.28z",
            "M377.91 768.67c1.49.84 1.76 1.49 2.66 2.66q6.16 8.04 12.23 16.13c1.88 2.52 1.97 4.18 1.38 7.45q-4.57 25.23-8.43 50.57-.11.71-.4.05-1.89-4.29-2.54-8.09-5.57-32.28-6.98-65.01-.09-2 .81-3.44a.95.94 30.8 011.27-.32z",
        ],
    },
    {
        slug: "adductors-right-front",
        color: "#cccccc",
        pathArray: [
            "M280.26 647.4c11.65 10.74 22.18 21.04 31.02 34.3 15.82 23.72 27.55 49.72 34.01 77.58 1.34 5.79-6.14 20.34-12.62 20.22q-.52-.01-.72-.49-.67-1.59-1.21-3.13c-14.68-41.71-27.96-79.71-46.87-117.01-1.9-3.74-3.05-7.33-4.06-11.2a.27.27 0 01.45-.27z",
            "M331.64 898.32q-.17.57-.23-.02c-2.23-25.01-8.47-50.09-14.25-74.53q-19.4-82.1-42.46-163.69-.58-2.08.33-.13c19.88 42.53 38.94 86.51 51.64 132.07 9.49 34.06 15.59 71.67 4.97 106.3z",
            "M334.46 789.17c1.56-2.63 14.39-20.38 16.2-20.37a1.71 1.7-89.2 011.7 1.76q-1.12 34.88-7.4 68.95c-.38 2.06-1.41 4.27-2.16 6.23q-.24.62-.34-.04-3.68-25.45-8.44-50.7c-.34-1.79-.63-4 .44-5.83z",
        ],
    },
    // Quadriceps
    {
        slug: "quadriceps-left",
        color: "#cccccc",
        pathArray: [
            "M437.82 933.52c-8.9 14.18-15.15-26.74-15.46-29.25q-5.26-43.04-1.19-86.08c4.9-51.8 26.91-99.32 40.38-150.92q.18-.66.5-.06c17.25 31.67 25.39 68.28 20.54 104.36q-2.29 17.02-8.71 42.76-7.56 30.25-15.2 60.47-6.13 24.25-15.06 47.61-1.83 4.79-5.8 11.11z",
            "M451.79 942.6c-9.95-10.01 4.97-42.91 8.94-55.41q12.55-39.53 19.27-80.47c.49-2.97 2.64-12.34 5.41-13.28a.83.83 0 011.09.64q.74 4 .45 7.92c-1.99 26.52-3.37 58.99-11.01 87.73q-2.53 9.5-7.46 18.8c-4.38 8.24-6.97 16.72-10.08 25.27q-1.66 4.54-4.55 8.63a1.35 1.35 0 01-2.06.17z",
            "M406.69 946.81c-3.24-2.77-1.48-10.64-2.01-14.71q-2.23-17.18-2.57-22.16c-1.75-25.07 3.61-49.11 13.98-71.92q.23-.51.2.05c-1.2 19.15-1.28 38.18.83 57.38q1.68 15.4 3.39 30.8c.43 3.92-.31 9.71-2.09 13.33-1.62 3.28-7.58 10.77-11.73 7.23z",
        ],
    },
    {
        slug: "quadriceps-right",
        color: "#cccccc",
        pathArray: [
            "M292.42 935.6q-.95-.52-1.57-1.4-4.1-5.79-7-13.53-7.8-20.79-13.3-42.33c-9.06-35.53-19.33-71.36-25.03-107.59-5.33-33.86 4-74.19 20.7-103.37q.35-.62.53.07c14.44 55.57 39.03 107.94 41.45 165.34 1.11 26.34.66 52.96-3.6 79.03-.63 3.83-4.73 27.81-12.18 23.78z",
            "M275.11 942.93q-2.42-2.18-3.57-5.24c-3.98-10.61-7.68-21.02-12.81-31.32-7.85-15.76-10.77-34.56-13.2-51.46-2.11-14.63-2.31-31.47-3.93-47.18-.22-2.16-1.04-12.78.46-13.79q1.36-.92 2.08.55c1.5 3.08 3.12 6.12 3.66 9.58q8.21 52.38 26.36 102.15c2.87 7.87 9.98 30.5 1.85 36.74a.71.7-42.5 01-.9-.03z",
            "M322.69 945.72c-3.73 6.14-10.77-2.43-12.6-5.6-3.16-5.47-2.62-14.93-1.78-20.81 4.03-28.09 5.6-52.81 3.48-80.78q-.06-.79.28-.08 15.77 32.83 14.26 68.9c-.4 9.54-2.94 22.48-2.91 34.13q.01 3.02-.73 4.24z",
        ],
    },
    // Knees
    {
        slug: "knees-left",
        color: "#cccccc",
        pathArray: [
            "M430.44 1008.31c-12.92-12.62-14.34-33.49-10.92-50.31.31-1.53 1.09-2.53 2.73-2.86q11.44-2.25 23.08-2.59c14.13-.42 17.31 5.67 14.54 18.63q-3.13 14.69-9.12 30.37c-3.45 9.03-11.63 15.25-20.31 6.76z",
            "M438.96 1059.52q-2.25-1.89-3.8-4.64-20.15-35.92-31.06-75.66-2.11-7.68 1.95-14.16a1.16 1.16 0 011.91-.08c2.26 3.06 3.4 5.4 4.26 9.37 3.98 18.54 10.94 32.53 20.07 51.09 3.51 7.14 11.38 26.16 8.5 33.61a1.16 1.16 0 01-1.83.47z",
        ],
    },
    {
        slug: "knees-right",
        color: "#cccccc",
        pathArray: [
            "M297.69 1008.37c-7.27 7.29-16.34 3.42-19.64-5.18q-6.18-16.11-9.57-30.68c-1.99-8.6-2.24-19.68 9.72-19.91q13.12-.24 26.05 2.15 1.71.32 3.29 1.02a1.17 1.15 4.2 01.63.72c3.17 10.27 2.5 23.36.05 33.69q-2.37 10.01-10.53 18.19z",
            "M288.03 1059.54c-6.99-5.81 13.75-46.43 17.3-53.91q7.3-15.38 10.9-32.01c.74-3.42 2-6.31 4.18-8.64a1.36 1.35 54.7 012.23.39c3.97 9.09 1.66 13.86-1.67 24.65q-10.23 33.19-27.2 63.57-1.8 3.23-4.2 5.84a1.13 1.12-49 01-1.54.11z",
        ],
    },
    // Tibialis
    {
        slug: "tibialis-left",
        color: "#cccccc",
        pathArray: [
            "M463.39 973.68a.7.7 0 011.25-.1c.27.46.64 1.34.68 1.93q1.26 20.88 2.53 41.76.66 10.82.39 19.98-1.23 40.77-7.51 82.25c-3.91 25.87-12.19 51.55-21.96 75.76q-1.13 2.79-3.27 6.13-.29.44-.71.12c-2.68-2.06-2.32-6.7-2.29-10.32.26-31.03 2.71-55.52 8.76-91.4q9.27-55.06 18.94-110.05c.8-4.5.99-10.52 3.19-16.06z",
        ],
    },
    {
        slug: "tibialis-right",
        color: "#cccccc",
        pathArray: [
            "M263.52 973.59a.6.6 0 011.09-.14q1.38 2.22 1.83 5.06c7.87 49.97 18.01 99.59 25 149.68q4.63 33.19 4.31 67.55-.04 3.45-2.15 5.76-.4.44-.75-.03-1.89-2.58-3.08-5.51c-11.63-28.6-20.46-58.12-24.26-88.68q-4.96-39.97-5.72-69.53c-.13-5.27-.17-12.59.35-18.98q1.7-20.77 2.52-41.6c.04-1.16.52-2.43.86-3.58z",
        ],
    },
    // Calves
    {
        slug: "calves-left-front",
        color: "#cccccc",
        pathArray: [
            "M455.5 1231.67c-7.13-5.81-9.23-24.34-8.2-31.86 1.41-10.32 4.63-23.14 7.98-36.33q9.54-37.46 15.15-75.74c2.86-19.5 1.53-40.15.75-59.8-.22-5.67-.98-12.51-1.23-18.75a.97.97 0 011.87-.4c.35.86.92 1.76 1.12 2.68q2.96 14.31 3.31 20.53 2.37 43.28-.49 84.75-1.21 17.42-5.43 35.77-6.33 27.51-12.84 54.98-2.01 8.49-.11 18.36c.36 1.9.11 3.95-.68 5.55a.79.79 0 01-1.2.26z",
            "M412.77 1025.44a.14.14 0 01.27-.04c4.88 11.62 10.93 22.01 17.28 34.78 4.07 8.19 4.71 14.41 4.1 24.25-2.13 34.3-6.27 68.85-8.45 101.59q-.05.69-.31.05-1.48-3.67-2.28-6.75c-4.34-16.75-8.78-38.38-16.39-57.57q-1.4-3.55-2.2-10.11c-1.78-14.73-.2-31.24 2.04-45.88q3.06-20.02 5.94-40.32z",
        ],
    },
    {
        slug: "calves-right-front",
        color: "#cccccc",
        pathArray: [
            "M252.09 1032.57c.24-3.71 2.14-22.17 4.63-24.18a1.03 1.02-17.9 011.67.85c-.45 7.89-1.27 16-1.49 23.45q-.57 18.93-.66 37.88-.02 3.63.34 6.85c2.08 18.76 5.56 37.32 9.3 55.8 3.82 18.84 9.13 37.64 13.11 56.63q2.44 11.68 2.08 17.95c-.32 5.7-3.08 20.49-8.51 23.92a.62.62 0 01-.84-.16q-1.2-1.65-.95-3.55c.92-7.26 1.45-14.15-.3-21.52q-8.25-34.74-13.62-59.06c-1.86-8.44-3.17-17.18-3.93-26.3q-3.69-44.24-.83-88.56z",
            "M315.01 1025.17a.16.16 0 01.32.02c4.06 25.75 8.98 52.72 8.71 77.81q-.13 12.06-5.74 26.31c-7.2 18.3-8.93 38.57-15.95 56.93q-.18.48-.21-.03c-1.87-34.47-5.67-65.91-8.56-103.28q-.97-12.49 4.44-23.14 7.47-14.69 15.14-29.29c.81-1.55 1.35-3.62 1.85-5.33z",
        ],
    },
    // Forearm
    {
        slug: "forearm-left-front",
        color: "#cccccc",
        pathArray: [
            "M600.08 683.04c-5-4.14-8.97-15.46-11.29-21.56-5.82-15.25-11.38-30.55-17.58-45.7q-9.15-22.39-18.02-44.89c-5.58-14.19-7.32-31.42-7.99-46.57-.29-6.44-.68-19.43 2.67-25.02a1.71 1.71 0 012.25-.63c6.72 3.52 11.29 9.96 14.87 16.5q6.25 11.38 12.68 22.66c1.97 3.45 2.93 7.66 3.41 12.06 1.16 10.6 1.55 21.29 3.66 31.65 3.93 19.29 7.38 38.63 11.47 57.92 1.5 7.07 9.3 39.08 5.12 43.5a.91.91 0 01-1.25.08z",
            "M586.58 681.46q-4.35-4.47-6.75-10.61-11.35-28.91-24.59-57.01c-5.72-12.13-14.32-22.86-19.97-35.1-7.1-15.36-12.9-33.32-9.27-50.31a1.44 1.43-87.1 011.23-1.12c7.47-.88 9.29 2.88 11.02 9.2 3.39 12.42 4.76 25.91 9.75 36.7 15.55 33.65 27.61 64.94 39.31 98.42 1.13 3.24 2.05 5.47 1.62 9.04a1.38 1.37 26.3 01-2.35.79z",
            "M579.58 686.43q-3.92-5.77-6.87-12.13-8.05-17.34-19.75-44.5-2.68-6.24-6.46-13.62c-5.14-10.05-13.15-22.36-17.34-31.85q-9.55-21.68-13.66-31.36-1.09-2.58-1.33-5.87-.04-.61.37-1.07l5.24-5.85a.69.69 0 011.2.4q2.74 27.05 15.49 50.75 1.7 3.17 8.26 12.86 7.02 10.39 12.18 21.88 8.71 19.41 20.19 50.1 2.22 5.92 3.13 9.98a.36.36 0 01-.65.28z",
        ],
    },
    {
        slug: "forearm-right-front",
        color: "#cccccc",
        pathArray: [
            "M127.23 683.05c-4.07-2.12 1.27-27.07 2.25-31.57 4.98-23.03 9.17-46.17 13.91-69.25q1.53-7.47 2.13-15.13c.93-12.09.81-22.15 6.23-31.59 7.1-12.33 13.54-29.16 26.1-36.73a1.98 1.97 62.7 012.84.91c1.92 4.48 1.93 8.28 2.06 14.15.44 19.77-1.3 41.04-8.72 59.67-11 27.62-22.22 55.21-32.62 82.91-4.04 10.76-7.56 20.66-12.82 26.39q-.59.65-1.36.24z",
            "M201.5 527.4a.84.84 0 01.67.65c3.98 17.15-2.93 39.36-10.95 54.41-4.6 8.63-13.06 20.43-18.21 31.33q-13.21 27.92-24.58 56.64-2.51 6.35-6.61 11.02a1.43 1.43 0 01-2.5-.81q-.36-3.78.84-7.17 10.31-29.18 21.57-57.99c6.32-16.18 14.55-31.65 20.66-47.87 3.69-9.82 5.36-22.36 7.32-30.62 1.49-6.27 4.19-11.06 11.79-9.59z",
            "M207.33 540.4a.6.59-63.1 011.03-.34l5.38 6.02q.4.45.33 1.06-.52 4.1-1.29 5.84-6.91 15.65-13.69 31.35c-5.41 12.53-16.33 28.4-23.51 44.89-8.3 19.08-16.03 39.32-26.75 57.16a.36.36 0 01-.62 0l-.19-.32q-.17-.28-.06-.59 10.08-29.91 23.05-58.65 2.9-6.42 5.47-11.21c4.62-8.59 10.86-16.17 14.62-23.02q13.23-24.13 16.23-52.19z",
        ],
    },
    // Hand
    {
        slug: "hands-left-front",
        color: "#cccccc",
        pathArray: [
            "M591.31 755.99c-8.06-2.93-8.66-9.76-10.28-17.06q-3.22-14.42-3.1-29.3.04-4.06 1.46-6.55c4.34-7.57 18.16-9.91 25.63-10.35 8.75-.51 18.37 6.96 24.99 12.27q8.92 7.17 10.74 17.52c2.45 13.89-12.11 23.41-22.7 29.04-6.95 3.69-18.63 7.39-26.74 4.43z",
            "M641.97 706.78q10.85 9.65 17.61 21.91c1.63 2.97 9.74 6.76 12.87 8.59 2.9 1.7 3.03 4.81 2.55 8.5q-.06.42-.48.49c-8.16 1.32-11.99-1.93-17.72-7.23-10.35-9.58-10.5-20.33-15.33-31.9q-.54-1.29.5-.36z",
            "M638 760.07c-2.54-3.42-7.52-6.03-5.44-11.11q.18-.44.61-.63l7.41-3.3q1.29-.58 2.05.62 3.33 5.23 5.69 10.04 6.84 13.94 14.71 27.33c1.35 2.29 4.28 10.16 2.25 12.11a1.22 1.22 0 01-1.77-.08c-9.43-10.98-16.85-23.36-25.51-34.98z",
            "M647.83 812.68c-4 .24-7.71-2.87-9.11-6.38q-9.28-23.27-19.74-45.33a2.05 2.05 0 01.92-2.71q4.5-2.28 9.62-1.7a1.09 1.07 83.8 01.89.73q7.5 23.06 16.57 45.5 1.8 4.46 1.5 9.24a.7.7 0 01-.65.65z",
            "M596.17 761.18a.84.84 0 01.62.81c-.01 4.86.95 35.3-2.71 37.67q-.49.32-.82-.17-3.41-5.21-3.51-8.49-.45-15.62-1.16-31.23-.03-.72.66-.52l6.92 1.93z",
            "M621.09 814.28c-4.35 1.91-5.92-3.77-6.5-6.56q-4.52-21.91-8.88-43.95a1.41 1.41 0 011.14-1.66l6.8-1.18a.92.92 0 011.06.76q2.79 16.32 5.09 32.91c.85 6.17 2.2 12.25 1.8 18.95q-.03.52-.51.73z",
        ],
    },
    {
        slug: "hands-right-front",
        color: "#cccccc",
        pathArray: [
            "M100.98 745.85c-9.03-6.62-15.78-13.18-13.3-24.59 2.67-12.29 15.01-20.6 25.37-26.21 7.76-4.21 18.22-1.68 26.15.97 7.14 2.39 11.11 6.16 11.1 13.86q-.04 18.51-4.75 36.37c-5.47 20.76-34.48 6.99-44.57-.4z",
            "M53.81 746.32a.91.91 0 01-.74-.95c.14-2.49-.23-6.34 2.25-7.8 4.66-2.71 11.37-5.53 14.15-10.3q6.32-10.86 16.56-20.3 1.27-1.17.64.44c-1.45 3.73-2.86 7.21-3.87 11.59-2.76 11.9-14.62 30-28.99 27.32z",
            "M87.21 745.05c1.44.46 8.14 2.66 8.61 4.55 1.26 5.12-4.42 8.54-7 12.25-7.73 11.1-15.12 23.38-24.25 33.28a1.22 1.22 0 01-2.11-.86c.11-3.93.38-7.1 2.43-10.65q10.27-17.71 19.31-36.11.32-.65 2.13-2.27.38-.35.88-.19z",
            "M108.11 758.12a2.16 2.16 0 011.07 2.87q-10.49 22.55-19.92 45.81c-1.45 3.56-4.37 5.15-7.82 6.04a1.35 1.34-8.1 01-1.69-1.26c-.11-3.05.37-5.87 1.58-8.9q8.1-20.28 15.15-40.96c.41-1.2.62-3.33 1.69-4.85a1.21 1.21 0 01.91-.49q4.72-.21 9.03 1.74z",
            "M134.09 799.9q-1.16-1.7-1.41-3.73-2.1-17.07-1.18-34.29.03-.6.61-.75l6.93-1.85q.68-.19.65.52-.51 10.9-.85 21.71c-.28 8.58.1 12.65-4.17 18.4a.36.36 0 01-.58-.01z",
            "M108.13 814.65a1.48 1.48 0 01-1.62-1.47c-.02-2.83-.14-5.66.32-8.53q2.9-17.79 5.4-35.65.53-3.84 1.58-7.56a.66.66 0 01.76-.48l7.26 1.24a.97.97 0 01.78 1.14q-4.76 23.96-9.1 46.26-.9 4.64-5.38 5.05z",
        ],
    },
    // Ankle
    {
        slug: "ankles-left-front",
        color: "#cccccc",
        pathArray: [
            "M430.92 1209.12c2.24-1.35 10.54-2.02 6.02 2.65q-9.99 10.32-14.82 23.8a.28.28 0 01-.55-.08c-.52-10.27-.48-20.45 9.35-26.37z",
            "M445.01 1223.26c8.45 6.56 6.46 16.66 9.35 25.59q1.76 5.43 3.47 10.88c3.84 12.26-27.75 21.49-32.21 32.42q-1.02 2.51-2.17.05c-6.91-14.82-6.79-29.36-1.78-44.58q2.82-8.57 8.02-16.04c3.02-4.35 9.61-12.76 15.32-8.32z",
        ],
    },
    {
        slug: "ankles-right-front",
        color: "#cccccc",
        pathArray: [
            "M291.88 1208.11c5.48-1.03 11.85 5.55 13.38 10.37q2.45 7.74 1.47 16.83-.09.83-.45.08c-4.31-9.05-8-16.99-15.39-23.88a1.98 1.98 0 01.99-3.4z",
            "M275.88 1270.94c-4.41-3.87-7.4-7.17-4.91-13.37q4.78-11.92 5.49-21.32.62-8.27 6.22-12.84c9-7.33 20.8 15 23.1 22.1 2.55 7.91 4.83 16.36 4.49 24.5-.31 7.14-2.02 17.4-6.49 23.1q-.3.38-.53-.05c-5.67-10.74-18.6-14.41-27.37-22.12z",
        ],
    },
    // Feet
    {
        slug: "feet-left-front",
        color: "#cccccc",
        pathArray: [
            "M444.66 1337.65q-1.08-1.3-1.28-3.09c-.52-4.48-.73-8.39-2.77-12.64-3.51-7.31-7.06-16.37-4.43-23.19.77-1.99.92-3.79-.76-5.13a1.29 1.28 46.4 01.04-2.04q7.96-5.76 17.59-7.64.46-.1.69.32c7.25 13.1 17.21 24.83 26.45 36.56q1.11 1.41 2.51 3.8a1.17 1.14-51 01.09.95c-1.75 5.01-12.93 7.89-17.77 8.55q-9.87 1.36-19.54 3.82a.82.8-26.2 01-.82-.27z",
            "M426.94 1338.55c-2.01-.34-2.96-5.48-3-7.12-.15-6.02-6.29-11.65-3.12-17.89q4.35-8.53 6.34-17.75a.78.78 0 011.47-.17c2.12 4.52 4.18 9.08 4.35 14.33q.35 10.43 3.97 20.24c1.19 3.22 1.52 5.83.39 8.78a2.32 2.31 19.3 01-2.87 1.38q-3.44-1.09-7.53-1.8z",
        ],
    },
    {
        slug: "feet-right-front",
        color: "#cccccc",
        pathArray: [
            "M264.5 1334.5c-3.98-.34-18.59-4.25-19.04-9.44a1.4 1.4 0 01.27-.94c9.66-13.03 20.9-25.49 28.65-39.78q.25-.47.78-.37 9.76 1.78 17.73 7.65a1.19 1.18 43 01.07 1.86c-1.32 1.11-1.65 2.62-1.06 4.35 2.96 8.57-.92 16.55-4.81 25.34-1.79 4.06-1.76 8.99-2.81 13.62a1.56 1.56 0 01-1.99 1.14q-8.36-2.64-17.79-3.43z",
            "M291.87 1340.12c-2.25-2.64-2.07-5.93-.78-9.35q3.34-8.88 4.02-18.35.43-6.02 1.25-8.74 1.32-4.37 3.45-8.22a.66.65 53.7 011.21.19q1.97 9.26 6.28 17.3c2.59 4.85-.82 11.49-2.92 16.14a1.81 1.78-35.8 00-.16.94q.42 4.3-1.9 7.94-.22.33-.61.43l-8.79 2.06a1.06 1.06 0 01-1.05-.34z",
        ],
    },
    {
        slug: "head-front",
        color: "#cccccc",
        pathArray: [
            "M305,170 a55,75 0 1,0 120,0 a60,75 0 1,0 -120,0",
            "M295,180 a12,20 -43 1,1 30,0 a15,25 0 1,1 -30,0",
            "M405,180 a12,20 43 1,1 30,0 a15,25 0 1,1 -30,0"
        ]
    },
];
