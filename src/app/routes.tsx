import { Navigate } from 'react-router'
import type { RouteObject } from 'react-router'

import { CalendarPage } from '../pages/CalendarPage'
import { FamilyPage } from '../pages/FamilyPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { OverviewPage } from '../pages/OverviewPage'
import { PetPage } from '../pages/PetPage'
import { TokenPage } from '../pages/TokenPage'
import { AppLayout } from './AppLayout'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="/overview" /> },
      { path: 'overview', element: <OverviewPage /> },
      { path: 'pets/:petId', element: <PetPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'family', element: <FamilyPage /> },
      { path: 'ui-kit', element: <TokenPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
