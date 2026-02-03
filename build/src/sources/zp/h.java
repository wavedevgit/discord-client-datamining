package zp;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f56035a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f56036b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f56035a = a10;
        this.f56036b = ks.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f56036b;
    }

    public final g b() {
        return (g) this.f56035a.getValue();
    }

    public final void c(g gVar) {
        this.f56035a.setValue(gVar);
    }
}
