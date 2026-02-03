package m3;

import js.j1;
import js.m0;
import kotlin.coroutines.CoroutineContext;
import lr.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static final b a() {
        CoroutineContext coroutineContext;
        try {
            coroutineContext = m0.c().f2();
        } catch (IllegalStateException unused) {
            coroutineContext = kotlin.coroutines.e.f32538d;
        } catch (q unused2) {
            coroutineContext = kotlin.coroutines.e.f32538d;
        }
        return new b(coroutineContext.V0(j1.b(null, 1, null)));
    }
}
