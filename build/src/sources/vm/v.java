package vm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f51343a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f51344b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = js.l0.a(initialValue);
        this.f51343a = a10;
        this.f51344b = js.g.m(a10, 1);
    }

    @Override // vm.t
    public Flow a() {
        return this.f51344b;
    }

    @Override // vm.t
    public String b() {
        return (String) this.f51343a.getValue();
    }

    @Override // vm.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f51343a.setValue(value);
    }
}
