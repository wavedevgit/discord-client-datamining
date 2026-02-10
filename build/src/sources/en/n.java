package en;

import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements g {

    /* renamed from: b  reason: collision with root package name */
    private final Object f21840b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21841c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21842d;

    public n(Object wrapped, String name) {
        Intrinsics.checkNotNullParameter(wrapped, "wrapped");
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21840b = wrapped;
        this.f21841c = name;
        if (!StringsKt.k0(name)) {
            this.f21842d = g.f21796a.a(wrapped, name);
            return;
        }
        throw new IllegalArgumentException("name must not be blank.");
    }

    public final Object a() {
        return this.f21840b;
    }

    @Override // en.g
    public String c() {
        return this.f21842d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof n)) {
            return false;
        }
        n nVar = (n) obj;
        if (Intrinsics.areEqual(this.f21840b, nVar.f21840b) && Intrinsics.areEqual(this.f21841c, nVar.f21841c)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f21840b.hashCode() * 31) + this.f21841c.hashCode();
    }

    public String toString() {
        return super.toString() + ": " + c();
    }
}
