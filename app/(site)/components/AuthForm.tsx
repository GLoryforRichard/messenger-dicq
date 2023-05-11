'use ckient';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoding] = useState(false);
    return(
        <div>Auth Form!</div>
    );
}

export default AuthForm;