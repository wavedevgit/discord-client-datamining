package yp;

import js.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54955a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54956b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f54955a = a10;
        this.f54956b = js.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f54956b;
    }

    public final g b() {
        return (g) this.f54955a.getValue();
    }

    public final void c(g gVar) {
        this.f54955a.setValue(gVar);
    }
}
