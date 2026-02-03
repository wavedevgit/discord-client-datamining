package wm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f52365b;

    /* renamed from: c  reason: collision with root package name */
    private final String f52366c;

    /* renamed from: d  reason: collision with root package name */
    private final String f52367d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f52365b = wrapped;
        this.f52366c = name;
        if (!StringsKt.k0(name)) {
            this.f52367d = g.f52321a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f52365b;
    }

    @Override // wm.g
    public String c() {
        return this.f52367d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f52365b, nVar.f52365b) && Intrinsics.areEqual(this.f52366c, nVar.f52366c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52365b.hashCode() * 31) + this.f52366c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
