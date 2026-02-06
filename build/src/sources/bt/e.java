package bt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f7062a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f7062a = directive;
    }

    @Override // bt.o
    public ct.e a() {
        return this.f7062a.a();
    }

    @Override // bt.o
    public dt.q b() {
        return this.f7062a.b();
    }

    public final l c() {
        return this.f7062a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f7062a, ((e) obj).f7062a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f7062a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f7062a + ')';
    }
}
