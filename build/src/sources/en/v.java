package en;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f21894a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f21895b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = ss.l0.a(initialValue);
        this.f21894a = a10;
        this.f21895b = ss.g.m(a10, 1);
    }

    @Override // en.t
    public Flow a() {
        return this.f21895b;
    }

    @Override // en.t
    public String b() {
        return (String) this.f21894a.getValue();
    }

    @Override // en.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f21894a.setValue(value);
    }
}
