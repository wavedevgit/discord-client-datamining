package wm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f52419a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f52420b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = ks.l0.a(initialValue);
        this.f52419a = a10;
        this.f52420b = ks.g.m(a10, 1);
    }

    @Override // wm.t
    public Flow a() {
        return this.f52420b;
    }

    @Override // wm.t
    public String b() {
        return (String) this.f52419a.getValue();
    }

    @Override // wm.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f52419a.setValue(value);
    }
}
