package ym;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f54651b;

    /* renamed from: c  reason: collision with root package name */
    private final String f54652c;

    /* renamed from: d  reason: collision with root package name */
    private final String f54653d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f54651b = wrapped;
        this.f54652c = name;
        if (!StringsKt.k0(name)) {
            this.f54653d = g.f54607a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f54651b;
    }

    @Override // ym.g
    public String c() {
        return this.f54653d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f54651b, nVar.f54651b) && Intrinsics.areEqual(this.f54652c, nVar.f54652c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54651b.hashCode() * 31) + this.f54652c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
