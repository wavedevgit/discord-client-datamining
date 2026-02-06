package gq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f25532a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f25533b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f25532a = a10;
        this.f25533b = rs.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f25533b;
    }

    public final Number b() {
        return (Number) this.f25532a.getValue();
    }

    public final void c(Number number) {
        this.f25532a.setValue(number);
    }
}
