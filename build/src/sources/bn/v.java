package bn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f6650a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f6651b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = ps.l0.a(initialValue);
        this.f6650a = a10;
        this.f6651b = ps.g.m(a10, 1);
    }

    @Override // bn.t
    public Flow a() {
        return this.f6651b;
    }

    @Override // bn.t
    public String b() {
        return (String) this.f6650a.getValue();
    }

    @Override // bn.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f6650a.setValue(value);
    }
}
