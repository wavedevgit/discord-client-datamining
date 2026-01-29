package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final ie f45803a;

    /* renamed from: b  reason: collision with root package name */
    private final Boolean f45804b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f45805c;

    /* renamed from: d  reason: collision with root package name */
    private final rd f45806d;

    /* renamed from: e  reason: collision with root package name */
    private final wh f45807e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w3(u3 u3Var, v3 v3Var) {
        ie ieVar;
        Boolean bool;
        wh whVar;
        ieVar = u3Var.f45750a;
        this.f45803a = ieVar;
        this.f45804b = null;
        bool = u3Var.f45751b;
        this.f45805c = bool;
        this.f45806d = null;
        whVar = u3Var.f45752c;
        this.f45807e = whVar;
    }

    public final ie a() {
        return this.f45803a;
    }

    public final wh b() {
        return this.f45807e;
    }

    public final Boolean c() {
        return this.f45805c;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof w3)) {
            return false;
        }
        w3 w3Var = (w3) obj;
        if (gf.o.a(this.f45803a, w3Var.f45803a) && gf.o.a(null, null) && gf.o.a(this.f45805c, w3Var.f45805c) && gf.o.a(null, null) && gf.o.a(this.f45807e, w3Var.f45807e)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f45803a, null, this.f45805c, null, this.f45807e);
    }
}
