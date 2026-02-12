package qq;

import bt.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f45633a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f45634b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f45633a = a10;
        this.f45634b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f45634b;
    }

    public final Number b() {
        return (Number) this.f45633a.getValue();
    }

    public final void c(Number number) {
        this.f45633a.setValue(number);
    }
}
