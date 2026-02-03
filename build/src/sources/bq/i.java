package bq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f6751a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f6752b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f6751a = a10;
        this.f6752b = ms.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f6752b;
    }

    public final Number b() {
        return (Number) this.f6751a.getValue();
    }

    public final void c(Number number) {
        this.f6751a.setValue(number);
    }
}
