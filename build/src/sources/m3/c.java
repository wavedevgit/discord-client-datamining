package m3;

import as.q;
import kotlin.coroutines.CoroutineContext;
import ys.j1;
import ys.m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static final b a() {
        CoroutineContext coroutineContext;
        try {
            coroutineContext = m0.c().P1();
        } catch (q unused) {
            coroutineContext = kotlin.coroutines.e.f32062d;
        } catch (IllegalStateException unused2) {
            coroutineContext = kotlin.coroutines.e.f32062d;
        }
        return new b(coroutineContext.O0(j1.b(null, 1, null)));
    }
}
