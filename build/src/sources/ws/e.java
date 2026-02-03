package ws;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e implements s {

    /* renamed from: a  reason: collision with root package name */
    private final l f52707a;

    public e(l directive) {
        Intrinsics.checkNotNullParameter(directive, "directive");
        this.f52707a = directive;
    }

    @Override // ws.o
    public xs.e a() {
        return this.f52707a.a();
    }

    @Override // ws.o
    public ys.q b() {
        return this.f52707a.b();
    }

    public final l c() {
        return this.f52707a;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof e) && Intrinsics.areEqual(this.f52707a, ((e) obj).f52707a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f52707a.hashCode();
    }

    public String toString() {
        return "BasicFormatStructure(" + this.f52707a + ')';
    }
}
