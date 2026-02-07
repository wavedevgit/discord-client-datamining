package m3;

import kotlin.coroutines.CoroutineContext;
import os.j1;
import os.m0;
import qr.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static final b a() {
        CoroutineContext coroutineContext;
        try {
            coroutineContext = m0.c().f2();
        } catch (IllegalStateException unused) {
            coroutineContext = kotlin.coroutines.e.f32130d;
        } catch (q unused2) {
            coroutineContext = kotlin.coroutines.e.f32130d;
        }
        return new b(coroutineContext.Y0(j1.b(null, 1, null)));
    }
}
