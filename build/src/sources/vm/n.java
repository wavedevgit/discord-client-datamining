package vm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f51289b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51290c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51291d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f51289b = wrapped;
        this.f51290c = name;
        if (!StringsKt.k0(name)) {
            this.f51291d = g.f51245a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f51289b;
    }

    @Override // vm.g
    public String c() {
        return this.f51291d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f51289b, nVar.f51289b) && Intrinsics.areEqual(this.f51290c, nVar.f51290c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51289b.hashCode() * 31) + this.f51290c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
