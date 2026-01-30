package m3;

import gs.j1;
import gs.m0;
import ir.q;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static final b a() {
        CoroutineContext coroutineContext;
        try {
            coroutineContext = m0.c().f2();
        } catch (q unused) {
            coroutineContext = kotlin.coroutines.e.f33372d;
        } catch (IllegalStateException unused2) {
            coroutineContext = kotlin.coroutines.e.f33372d;
        }
        return new b(coroutineContext.U0(j1.b(null, 1, null)));
    }
}
