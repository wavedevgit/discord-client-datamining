package dt;

import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {
    public static final void a(CoroutineContext coroutineContext, Throwable th2) {
        for (ys.z zVar : f.a()) {
            try {
                zVar.N0(coroutineContext, th2);
            } catch (Throwable th3) {
                f.b(ys.a0.b(th2, th3));
            }
        }
        try {
            as.e.a(th2, new h(coroutineContext));
        } catch (Throwable unused) {
        }
        f.b(th2);
    }
}
