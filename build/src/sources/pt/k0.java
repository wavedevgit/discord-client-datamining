package pt;

import java.io.Serializable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class k0 extends q implements Comparable, Serializable {
    private m0 I(Object obj) {
        return H().R(obj);
    }

    public abstract int G(k0 k0Var);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract h0 H();

    public k0 J(long j10, Object obj) {
        return K(nt.c.k(j10), obj);
    }

    public k0 K(long j10, Object obj) {
        if (j10 == 0) {
            return (k0) x();
        }
        try {
            return (k0) I(obj).b(x(), j10);
        } catch (IllegalArgumentException e10) {
            ArithmeticException arithmeticException = new ArithmeticException("Result beyond boundaries of time axis.");
            arithmeticException.initCause(e10);
            throw arithmeticException;
        }
    }

    public long L(k0 k0Var, Object obj) {
        return I(obj).a(x(), k0Var);
    }
}
