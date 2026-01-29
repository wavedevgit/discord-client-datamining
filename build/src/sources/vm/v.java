package vm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f51327a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f51328b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = js.l0.a(initialValue);
        this.f51327a = a10;
        this.f51328b = js.g.m(a10, 1);
    }

    @Override // vm.t
    public Flow a() {
        return this.f51328b;
    }

    @Override // vm.t
    public String b() {
        return (String) this.f51327a.getValue();
    }

    @Override // vm.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f51327a.setValue(value);
    }
}
