package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f47611a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f47612b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f47613c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f47614d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f47615e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f47558a;
        this.f47611a = ieVar;
        this.f47612b = null;
        bool = u3Var.f47559b;
        this.f47613c = bool;
        this.f47614d = null;
        whVar = u3Var.f47560c;
        this.f47615e = whVar;
    }

    public final ie a() {
        return this.f47611a;
    }

    public final wh b() {
        return this.f47615e;
    }

    public final Boolean c() {
        return this.f47613c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f47611a, w3Var.f47611a) && gf.o.a(null, null) && gf.o.a(this.f47613c, w3Var.f47613c) && gf.o.a(null, null) && gf.o.a(this.f47615e, w3Var.f47615e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f47611a, null, this.f47613c, null, this.f47615e);
    }
}
