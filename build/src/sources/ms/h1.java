package ms;

import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class h1 extends kotlinx.coroutines.a {
    public h1(CoroutineContext coroutineContext, boolean z10) {
        super(coroutineContext, true, z10);
    }

    @Override // kotlinx.coroutines.b0
    protected boolean g0(Throwable th2) {
        a0.a(getContext(), th2);
        return true;
    }
}
