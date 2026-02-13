package qq;

import bt.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f46199a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f46200b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f46199a = a10;
        this.f46200b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f46200b;
    }

    public final g b() {
        return (g) this.f46199a.getValue();
    }

    public final void c(g gVar) {
        this.f46199a.setValue(gVar);
    }
}
