package m3;

import hs.j1;
import hs.m0;
import jr.q;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static final b a() {
        CoroutineContext coroutineContext;
        try {
            coroutineContext = m0.c().f2();
        } catch (IllegalStateException unused) {
            coroutineContext = kotlin.coroutines.e.f33148d;
        } catch (q unused2) {
            coroutineContext = kotlin.coroutines.e.f33148d;
        }
        return new b(coroutineContext.Z0(j1.b(null, 1, null)));
    }
}
