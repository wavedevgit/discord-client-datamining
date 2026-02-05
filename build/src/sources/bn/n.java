package bn;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f6596b;

    /* renamed from: c  reason: collision with root package name */
    private final String f6597c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6598d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f6596b = wrapped;
        this.f6597c = name;
        if (!StringsKt.k0(name)) {
            this.f6598d = g.f6552a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f6596b;
    }

    @Override // bn.g
    public String c() {
        return this.f6598d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f6596b, nVar.f6596b) && Intrinsics.areEqual(this.f6597c, nVar.f6597c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f6596b.hashCode() * 31) + this.f6597c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
