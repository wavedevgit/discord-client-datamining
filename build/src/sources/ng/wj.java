package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wj {

    /* renamed from: a  reason: collision with root package name */
    private final i1 f40429a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wj(uj ujVar, vj vjVar) {
        i1 i1Var;
        i1Var = ujVar.f40370a;
        this.f40429a = i1Var;
    }

    public final i1 a() {
        return this.f40429a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof wj)) {
            return false;
        }
        return gf.o.a(this.f40429a, ((wj) obj).f40429a);
    }

    public final int hashCode() {
        return gf.o.b(this.f40429a);
    }
}
