package qq;

import bt.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f45632a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f45633b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f45632a = a10;
        this.f45633b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f45633b;
    }

    public final Number b() {
        return (Number) this.f45632a.getValue();
    }

    public final void c(Number number) {
        this.f45632a.setValue(number);
    }
}
