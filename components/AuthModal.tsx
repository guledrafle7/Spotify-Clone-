"use client";

import Modal from './Modal';
import { useSessionContext, useSupabaseClient} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Auth, MagicLink } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useAuthModal from "@/hooks/useAuthModal";
import React, { useEffect } from 'react';

const AuthModal = () => {
    const { session } = useSessionContext();
    const router = useRouter();
    const { onClose, isOpen } = useAuthModal();
    const supabaseClient = useSupabaseClient();

    useEffect(() => {
        if (session) {
          router.refresh();
          onClose();
        }
      }, [session, router, onClose]);
    
    
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal title="Welcome back" description="Login to your account." isOpen={isOpen} onChange={() => {}} >
      <Auth supabaseClient={supabaseClient} appearance={{theme: ThemeSupa, variables: { default:{colors:{ brand: '#404040', brandAccent: '#22c55e'}}}}}  theme="dark"  providers={["github"]} magicLink/>
    </Modal>
  );
}

export default AuthModal;