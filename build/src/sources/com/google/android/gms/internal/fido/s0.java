package com.google.android.gms.internal.fido;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s0 {
    public static n0 a(n0 n0Var) {
        if (!(n0Var instanceof q0)) {
            if (n0Var instanceof o0) {
                return n0Var;
            }
            if (n0Var instanceof Serializable) {
                return new o0(n0Var);
            }
            return new q0(n0Var);
        }
        return n0Var;
    }

    public static n0 b(Object obj) {
        return new r0(obj);
    }
}
