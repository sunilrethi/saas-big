import type { NodeTypes } from '@xyflow/react';

import { Position } from '@xyflow/react';
import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'a',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: 'wire' }, 
    handles: [
      {
        type: 'target',
        position: Position.Top,
        x: 100 / 2,
        y: 0,
      },
      {
        type: 'source',
        position: Position.Bottom,
        x: 100 / 2,
        y: 50,
      },
    ],
  },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me!" },
    handles: [
      {
        type: 'target',
        position: Position.Top,
        x: 100,
        y: 0,
      },
      {
        type: 'source',
        position: Position.Bottom,
        x: 100,
        y: 50,
      }
    ]
  },
  { 
    id: "c",
    position: { x: 100, y: 100 },
    data: { label: "your ideas" },
    handles: [
      {
        type: 'target',
        position: Position.Top,
        x: 200,
        y: 0,
      },
      {
        type: 'source',
        position: Position.Bottom,
        x: 200,
        y: 50,
      }
    ]
  },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
    handles: [
      {
        type: 'target',
        position: Position.Top,
        x: 300,
        y: 0,
      },
      {
        type: 'source',
        position: Position.Bottom,
        x: 300,
        y: 50,
      }
    ]
  },

];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
