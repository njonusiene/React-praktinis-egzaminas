import React, { useEffect, useState } from 'react'
import HomeLanding from './HomeLanding'
import Loading from '../../components/Loading'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Clear timeout on component unmount (clean-up)
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? ( <Loading /> ) : (
        <div>
          <HomeLanding/>
        </div>
      )}
    </>
  )
}

export default Home
