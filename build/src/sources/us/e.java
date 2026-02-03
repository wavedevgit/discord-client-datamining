package us;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f50645a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f50645a = directive;
    }

    @Override // us.o
    public vs.e a() {
        return this.f50645a.a();
    }

    @Override // us.o
    public ws.q b() {
        return this.f50645a.b();
    }

    public final l c() {
        return this.f50645a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f50645a, ((e) obj).f50645a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f50645a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f50645a + ')';
    }
}
