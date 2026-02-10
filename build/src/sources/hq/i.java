package hq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ss.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f26491a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f26492b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f26491a = a10;
        this.f26492b = ss.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f26492b;
    }

    public final Number b() {
        return (Number) this.f26491a.getValue();
    }

    public final void c(Number number) {
        this.f26491a.setValue(number);
    }
}
