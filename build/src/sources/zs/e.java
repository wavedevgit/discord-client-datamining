package zs;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f56233a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f56233a = directive;
    }

    @Override // zs.o
    public at.e a() {
        return this.f56233a.a();
    }

    @Override // zs.o
    public bt.q b() {
        return this.f56233a.b();
    }

    public final l c() {
        return this.f56233a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f56233a, ((e) obj).f56233a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f56233a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f56233a + ')';
    }
}
