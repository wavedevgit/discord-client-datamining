package zp;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f56037a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f56038b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f56037a = a10;
        this.f56038b = ks.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f56038b;
    }

    public final Number b() {
        return (Number) this.f56037a.getValue();
    }

    public final void c(Number number) {
        this.f56037a.setValue(number);
    }
}
