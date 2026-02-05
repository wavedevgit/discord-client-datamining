package eq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ps.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f21775a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f21776b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f21775a = a10;
        this.f21776b = ps.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f21776b;
    }

    public final g b() {
        return (g) this.f21775a.getValue();
    }

    public final void c(g gVar) {
        this.f21775a.setValue(gVar);
    }
}
