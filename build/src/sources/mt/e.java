package mt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f36615a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f36615a = directive;
    }

    @Override // mt.o
    public nt.e a() {
        return this.f36615a.a();
    }

    @Override // mt.o
    public ot.q b() {
        return this.f36615a.b();
    }

    public final l c() {
        return this.f36615a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f36615a, ((e) obj).f36615a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f36615a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f36615a + ')';
    }
}
