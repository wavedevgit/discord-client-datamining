package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f45893a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45894b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f45895c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f45896d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f45897e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f45840a;
        this.f45893a = ieVar;
        this.f45894b = null;
        bool = u3Var.f45841b;
        this.f45895c = bool;
        this.f45896d = null;
        whVar = u3Var.f45842c;
        this.f45897e = whVar;
    }

    public final ie a() {
        return this.f45893a;
    }

    public final wh b() {
        return this.f45897e;
    }

    public final Boolean c() {
        return this.f45895c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f45893a, w3Var.f45893a) && gf.o.a(null, null) && gf.o.a(this.f45895c, w3Var.f45895c) && gf.o.a(null, null) && gf.o.a(this.f45897e, w3Var.f45897e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45893a, null, this.f45895c, null, this.f45897e);
    }
}
