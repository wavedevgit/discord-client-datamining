package qq;

import bt.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f45631a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f45632b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f45631a = a10;
        this.f45632b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f45632b;
    }

    public final g b() {
        return (g) this.f45631a.getValue();
    }

    public final void c(g gVar) {
        this.f45631a.setValue(gVar);
    }
}
