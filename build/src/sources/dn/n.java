package dn;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f20919b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20920c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20921d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f20919b = wrapped;
        this.f20920c = name;
        if (!StringsKt.k0(name)) {
            this.f20921d = g.f20875a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f20919b;
    }

    @Override // dn.g
    public String c() {
        return this.f20921d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f20919b, nVar.f20919b) && Intrinsics.areEqual(this.f20920c, nVar.f20920c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f20919b.hashCode() * 31) + this.f20920c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
