package gq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f25578a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f25579b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f25578a = a10;
        this.f25579b = rs.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f25579b;
    }

    public final g b() {
        return (g) this.f25578a.getValue();
    }

    public final void c(g gVar) {
        this.f25578a.setValue(gVar);
    }
}
