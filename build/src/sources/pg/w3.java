package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f45781a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45782b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f45783c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f45784d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f45785e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f45728a;
        this.f45781a = ieVar;
        this.f45782b = null;
        bool = u3Var.f45729b;
        this.f45783c = bool;
        this.f45784d = null;
        whVar = u3Var.f45730c;
        this.f45785e = whVar;
    }

    public final ie a() {
        return this.f45781a;
    }

    public final wh b() {
        return this.f45785e;
    }

    public final Boolean c() {
        return this.f45783c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f45781a, w3Var.f45781a) && gf.o.a(null, null) && gf.o.a(this.f45783c, w3Var.f45783c) && gf.o.a(null, null) && gf.o.a(this.f45785e, w3Var.f45785e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45781a, null, this.f45783c, null, this.f45785e);
    }
}
