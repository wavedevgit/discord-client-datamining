package hs;

import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a0 {
    public static final void a(CoroutineContext coroutineContext, Throwable th2) {
        if (th2 instanceof j0) {
            th2 = ((j0) th2).getCause();
        }
        try {
            z zVar = (z) coroutineContext.l(z.f27960f);
            if (zVar != null) {
                zVar.V0(coroutineContext, th2);
            } else {
                ms.g.a(coroutineContext, th2);
            }
        } catch (Throwable th3) {
            ms.g.a(coroutineContext, b(th2, th3));
        }
    }

    public static final Throwable b(Throwable th2, Throwable th3) {
        if (th2 == th3) {
            return th2;
        }
        RuntimeException runtimeException = new RuntimeException("Exception while trying to handle coroutine exception", th3);
        jr.e.a(runtimeException, th2);
        return runtimeException;
    }
}
