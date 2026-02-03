package ym;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f54654b;

    /* renamed from: c  reason: collision with root package name */
    private final String f54655c;

    /* renamed from: d  reason: collision with root package name */
    private final String f54656d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f54654b = wrapped;
        this.f54655c = name;
        if (!StringsKt.k0(name)) {
            this.f54656d = g.f54610a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f54654b;
    }

    @Override // ym.g
    public String c() {
        return this.f54656d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f54654b, nVar.f54654b) && Intrinsics.areEqual(this.f54655c, nVar.f54655c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54654b.hashCode() * 31) + this.f54655c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
