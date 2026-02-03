package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f43475a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f43476b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f43477c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f43478d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f43479e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f43480f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f43208a;
        this.f43475a = k9Var;
        h9Var = g9Var.f43209b;
        this.f43476b = h9Var;
        l9Var = g9Var.f43210c;
        this.f43477c = l9Var;
        i9Var = g9Var.f43211d;
        this.f43478d = i9Var;
        bool = g9Var.f43212e;
        this.f43479e = bool;
        f10 = g9Var.f43213f;
        this.f43480f = f10;
    }

    public final h9 a() {
        return this.f43476b;
    }

    public final i9 b() {
        return this.f43478d;
    }

    public final k9 c() {
        return this.f43475a;
    }

    public final l9 d() {
        return this.f43477c;
    }

    public final Boolean e() {
        return this.f43479e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (gf.o.a(this.f43475a, n9Var.f43475a) && gf.o.a(this.f43476b, n9Var.f43476b) && gf.o.a(this.f43477c, n9Var.f43477c) && gf.o.a(this.f43478d, n9Var.f43478d) && gf.o.a(this.f43479e, n9Var.f43479e) && gf.o.a(this.f43480f, n9Var.f43480f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f43480f;
    }

    public final int hashCode() {
        return gf.o.b(this.f43475a, this.f43476b, this.f43477c, this.f43478d, this.f43479e, this.f43480f);
    }
}
