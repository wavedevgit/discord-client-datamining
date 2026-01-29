package vm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f51273b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51274c;

    /* renamed from: d  reason: collision with root package name */
    private final String f51275d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f51273b = wrapped;
        this.f51274c = name;
        if (!StringsKt.k0(name)) {
            this.f51275d = g.f51229a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f51273b;
    }

    @Override // vm.g
    public String c() {
        return this.f51275d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f51273b, nVar.f51273b) && Intrinsics.areEqual(this.f51274c, nVar.f51274c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51273b.hashCode() * 31) + this.f51274c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
