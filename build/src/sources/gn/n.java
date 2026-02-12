package gn;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f25855b;

    /* renamed from: c  reason: collision with root package name */
    private final String f25856c;

    /* renamed from: d  reason: collision with root package name */
    private final String f25857d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f25855b = wrapped;
        this.f25856c = name;
        if (!StringsKt.k0(name)) {
            this.f25857d = g.f25811a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f25855b;
    }

    @Override // gn.g
    public String c() {
        return this.f25857d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f25855b, nVar.f25855b) && Intrinsics.areEqual(this.f25856c, nVar.f25856c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f25855b.hashCode() * 31) + this.f25856c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
