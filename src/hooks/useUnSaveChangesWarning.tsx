import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line camelcase
import { unstable_usePrompt } from 'react-router-dom';

const useUnSaveChangesWarning = () => {
  const [showExitPrompt, setShowExitPrompt] = useState(false);

  useEffect(() => {
    const handleTabClose = (event: BeforeUnloadEvent) => {
      if (!showExitPrompt) return '';
      event.preventDefault();
      // eslint-disable-next-line no-return-assign
      return (event.returnValue = '');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, [showExitPrompt]);

  unstable_usePrompt({
    when: showExitPrompt,
    message: 'There are unsaved changes. Are you sure you want to leave the page?',
  });

  const variables = useMemo(
    () => ({
      showExitPrompt,
      setShowExitPrompt,
    }),
    [showExitPrompt, setShowExitPrompt],
  );

  return variables;
};

export default useUnSaveChangesWarning;
