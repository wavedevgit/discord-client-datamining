package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f47659a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47660b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f47661c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f47662d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f47663e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f47606a;
        this.f47659a = ieVar;
        this.f47660b = null;
        bool = u3Var.f47607b;
        this.f47661c = bool;
        this.f47662d = null;
        whVar = u3Var.f47608c;
        this.f47663e = whVar;
    }

    public final ie a() {
        return this.f47659a;
    }

    public final wh b() {
        return this.f47663e;
    }

    public final Boolean c() {
        return this.f47661c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f47659a, w3Var.f47659a) && gf.o.a(null, null) && gf.o.a(this.f47661c, w3Var.f47661c) && gf.o.a(null, null) && gf.o.a(this.f47663e, w3Var.f47663e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f47659a, null, this.f47661c, null, this.f47663e);
    }
}
