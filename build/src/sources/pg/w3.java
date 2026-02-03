package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f45851a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45852b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f45853c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f45854d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f45855e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f45798a;
        this.f45851a = ieVar;
        this.f45852b = null;
        bool = u3Var.f45799b;
        this.f45853c = bool;
        this.f45854d = null;
        whVar = u3Var.f45800c;
        this.f45855e = whVar;
    }

    public final ie a() {
        return this.f45851a;
    }

    public final wh b() {
        return this.f45855e;
    }

    public final Boolean c() {
        return this.f45853c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f45851a, w3Var.f45851a) && gf.o.a(null, null) && gf.o.a(this.f45853c, w3Var.f45853c) && gf.o.a(null, null) && gf.o.a(this.f45855e, w3Var.f45855e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45851a, null, this.f45853c, null, this.f45855e);
    }
}
