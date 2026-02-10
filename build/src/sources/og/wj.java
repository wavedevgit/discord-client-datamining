package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wj {

    /* renamed from: a  reason: collision with root package name */
    private final i1 f41454a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ wj(uj ujVar, vj vjVar) {
        i1 i1Var;
        i1Var = ujVar.f41395a;
        this.f41454a = i1Var;
    }

    public final i1 a() {
        return this.f41454a;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof wj)) {
            return false;
        }
        return hf.o.a(this.f41454a, ((wj) obj).f41454a);
    }

    public final int hashCode() {
        return hf.o.b(this.f41454a);
    }
}
