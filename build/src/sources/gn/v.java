package gn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f25908a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f25909b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = bt.l0.a(initialValue);
        this.f25908a = a10;
        this.f25909b = bt.g.m(a10, 1);
    }

    @Override // gn.t
    public Flow a() {
        return this.f25909b;
    }

    @Override // gn.t
    public String b() {
        return (String) this.f25908a.getValue();
    }

    @Override // gn.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f25908a.setValue(value);
    }
}
