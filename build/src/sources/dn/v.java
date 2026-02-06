package dn;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v implements t {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f20973a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f20974b;

    public v(String initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = rs.l0.a(initialValue);
        this.f20973a = a10;
        this.f20974b = rs.g.m(a10, 1);
    }

    @Override // dn.t
    public Flow a() {
        return this.f20974b;
    }

    @Override // dn.t
    public String b() {
        return (String) this.f20973a.getValue();
    }

    @Override // dn.t
    public void c(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f20973a.setValue(value);
    }
}
