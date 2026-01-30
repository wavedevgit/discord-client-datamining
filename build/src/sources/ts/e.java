package ts;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f49887a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f49887a = directive;
    }

    @Override // ts.o
    public us.e a() {
        return this.f49887a.a();
    }

    @Override // ts.o
    public vs.q b() {
        return this.f49887a.b();
    }

    public final l c() {
        return this.f49887a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f49887a, ((e) obj).f49887a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f49887a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f49887a + ')';
    }
}
