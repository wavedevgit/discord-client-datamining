package hq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ss.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f26489a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f26490b;

    public h(g gVar) {
        MutableStateFlow a10 = l0.a(gVar);
        this.f26489a = a10;
        this.f26490b = ss.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f26490b;
    }

    public final g b() {
        return (g) this.f26489a.getValue();
    }

    public final void c(g gVar) {
        this.f26489a.setValue(gVar);
    }
}
