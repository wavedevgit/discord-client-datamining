package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wj {

    /* renamed from: a  reason: collision with root package name */
    private final i1 f38763a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wj(uj ujVar, vj vjVar) {
        i1 i1Var;
        i1Var = ujVar.f38704a;
        this.f38763a = i1Var;
    }

    public final i1 a() {
        return this.f38763a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof wj)) {
            return false;
        }
        return gf.o.a(this.f38763a, ((wj) obj).f38763a);
    }

    public final int hashCode() {
        return gf.o.b(this.f38763a);
    }
}
