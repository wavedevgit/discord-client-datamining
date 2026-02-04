package ym;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54705a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54706b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = ms.l0.a(initialValue);
        this.f54705a = a10;
        this.f54706b = ms.g.m(a10, 1);
    }

    @Override // ym.t
    public Flow a() {
        return this.f54706b;
    }

    @Override // ym.t
    public String b() {
        return (String) this.f54705a.getValue();
    }

    @Override // ym.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54705a.setValue(value);
    }
}
