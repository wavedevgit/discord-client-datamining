package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f43275a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f43276b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f43277c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f43278d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f43279e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f43280f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f43008a;
        this.f43275a = k9Var;
        h9Var = g9Var.f43009b;
        this.f43276b = h9Var;
        l9Var = g9Var.f43010c;
        this.f43277c = l9Var;
        i9Var = g9Var.f43011d;
        this.f43278d = i9Var;
        bool = g9Var.f43012e;
        this.f43279e = bool;
        f10 = g9Var.f43013f;
        this.f43280f = f10;
    }

    public final h9 a() {
        return this.f43276b;
    }

    public final i9 b() {
        return this.f43278d;
    }

    public final k9 c() {
        return this.f43275a;
    }

    public final l9 d() {
        return this.f43277c;
    }

    public final Boolean e() {
        return this.f43279e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f43275a, n9Var.f43275a) && gf.o.a(this.f43276b, n9Var.f43276b) && gf.o.a(this.f43277c, n9Var.f43277c) && gf.o.a(this.f43278d, n9Var.f43278d) && gf.o.a(this.f43279e, n9Var.f43279e) && gf.o.a(this.f43280f, n9Var.f43280f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f43280f;
    }

    public final int hashCode() {
        return gf.o.b(this.f43275a, this.f43276b, this.f43277c, this.f43278d, this.f43279e, this.f43280f);
    }
}
