package ls;

import js.a0;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.channels.ProducerScope;
import ls.w;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends h implements ProducerScope {
    public t(CoroutineContext coroutineContext, g gVar) {
        super(coroutineContext, gVar, true, true);
    }

    @Override // kotlinx.coroutines.a
    protected void S0(Throwable th2, boolean z10) {
        if (!X0().s(th2) && !z10) {
            a0.a(getContext(), th2);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.a
    /* renamed from: Z0 */
    public void T0(Unit unit) {
        w.a.a(X0(), null, 1, null);
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    @Override // kotlinx.coroutines.channels.ProducerScope
    public /* bridge */ /* synthetic */ w x() {
        return W0();
    }
}
