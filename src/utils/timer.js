const intl = new Intl.DateTimeFormat('fr-FR', {hour: 'numeric', minute: 'numeric', second: 'numeric'})

/**
 * new Date(0) begins at 01/01/1970 01:00:00, we only want to count the hours,
 * so we move 23 hours later, at 02/01/1970 00:00:00.
 */
export const initialTime = 23 * 60 * 60 * 1000
export const second = 1000

export const formatTimer = elapsedTimeAsDate => intl.format(new Date(elapsedTimeAsDate))
