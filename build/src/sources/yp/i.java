package yp;

import js.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54957a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54958b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f54957a = a10;
        this.f54958b = js.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f54958b;
    }

    public final Number b() {
        return (Number) this.f54957a.getValue();
    }

    public final void c(Number number) {
        this.f54957a.setValue(number);
    }
}
