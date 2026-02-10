package gn;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f25854b;

    /* renamed from: c  reason: collision with root package name */
    private final String f25855c;

    /* renamed from: d  reason: collision with root package name */
    private final String f25856d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f25854b = wrapped;
        this.f25855c = name;
        if (!StringsKt.k0(name)) {
            this.f25856d = g.f25810a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f25854b;
    }

    @Override // gn.g
    public String c() {
        return this.f25856d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f25854b, nVar.f25854b) && Intrinsics.areEqual(this.f25855c, nVar.f25855c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25854b.hashCode() * 31) + this.f25855c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
