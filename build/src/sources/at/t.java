package at;

import at.w;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.channels.ProducerScope;
import ys.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends h implements ProducerScope {
    public t(CoroutineContext coroutineContext, g gVar) {
        super(coroutineContext, gVar, true, true);
    }

    @Override // kotlinx.coroutines.a
    protected void W0(Throwable th2, boolean z10) {
        if (!d1().v(th2) && !z10) {
            a0.a(getContext(), th2);
        }
    }

    @Override // kotlinx.coroutines.a, kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public boolean a() {
        return super.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.a
    /* renamed from: e1 */
    public void X0(Unit unit) {
        w.a.a(d1(), null, 1, null);
    }

    @Override // kotlinx.coroutines.channels.ProducerScope
    public /* bridge */ /* synthetic */ w h() {
        return c1();
    }
}
