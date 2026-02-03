package bq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f6749a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f6750b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f6749a = a10;
        this.f6750b = ms.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f6750b;
    }

    public final g b() {
        return (g) this.f6749a.getValue();
    }

    public final void c(g gVar) {
        this.f6749a.setValue(gVar);
    }
}
