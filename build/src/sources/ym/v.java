package ym;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54708a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54709b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = ms.l0.a(initialValue);
        this.f54708a = a10;
        this.f54709b = ms.g.m(a10, 1);
    }

    @Override // ym.t
    public Flow a() {
        return this.f54709b;
    }

    @Override // ym.t
    public String b() {
        return (String) this.f54708a.getValue();
    }

    @Override // ym.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54708a.setValue(value);
    }
}
