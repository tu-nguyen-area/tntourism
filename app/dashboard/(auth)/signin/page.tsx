'use client';

import { AuthTourism } from '@/app/components/custom/auth-tourism';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { signin, type SigninActionState } from '@/app/dashboard/(auth)/actions';

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [state, formAction] = useActionState<SigninActionState, FormData>(
    signin, { status: 'idle', },
  );

  useEffect(() => {
    if(state.status === "failed") {
      alert("Invalid credentials!");
    } else if(state.status === "invalid_data") {
      alert("Failed validating your submission!");
    } else if(state.status === "success") {
      setIsSuccessful(true);
      router.refresh();
    }
  }, [state.status, router]);

  function handleSubmit(formData: FormData) {
    setEmail(formData.get('email') as string);
    formAction(formData);
  };

  return (
  <>

  <section>
    <AuthTourism action={handleSubmit} defaultEmail={email} isSuccessful={isSuccessful} url="/signin" content="">
      <div className="flex justify-center">
        <h1 className="md:p-6 text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent w-fit">Sign In</h1>
      </div>
    </AuthTourism>
  </section>

  </>
  );
}
