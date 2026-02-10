package ct;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f20217a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f20217a = directive;
    }

    @Override // ct.o
    public dt.e a() {
        return this.f20217a.a();
    }

    @Override // ct.o
    public et.q b() {
        return this.f20217a.b();
    }

    public final l c() {
        return this.f20217a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f20217a, ((e) obj).f20217a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f20217a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f20217a + ')';
    }
}
