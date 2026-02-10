package m3;

import kotlin.coroutines.CoroutineContext;
import ps.j1;
import ps.m0;
import rr.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static final b a() {
        CoroutineContext coroutineContext;
        try {
            coroutineContext = m0.c().e2();
        } catch (IllegalStateException unused) {
            coroutineContext = kotlin.coroutines.e.f31839d;
        } catch (q unused2) {
            coroutineContext = kotlin.coroutines.e.f31839d;
        }
        return new b(coroutineContext.V0(j1.b(null, 1, null)));
    }
}
