package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f46085a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f46086b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f46087c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f46088d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f46089e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f46090f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f45818a;
        this.f46085a = k9Var;
        h9Var = g9Var.f45819b;
        this.f46086b = h9Var;
        l9Var = g9Var.f45820c;
        this.f46087c = l9Var;
        i9Var = g9Var.f45821d;
        this.f46088d = i9Var;
        bool = g9Var.f45822e;
        this.f46089e = bool;
        f10 = g9Var.f45823f;
        this.f46090f = f10;
    }

    public final h9 a() {
        return this.f46086b;
    }

    public final i9 b() {
        return this.f46088d;
    }

    public final k9 c() {
        return this.f46085a;
    }

    public final l9 d() {
        return this.f46087c;
    }

    public final Boolean e() {
        return this.f46089e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (hf.o.a(this.f46085a, n9Var.f46085a) && hf.o.a(this.f46086b, n9Var.f46086b) && hf.o.a(this.f46087c, n9Var.f46087c) && hf.o.a(this.f46088d, n9Var.f46088d) && hf.o.a(this.f46089e, n9Var.f46089e) && hf.o.a(this.f46090f, n9Var.f46090f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f46090f;
    }

    public final int hashCode() {
        return hf.o.b(this.f46085a, this.f46086b, this.f46087c, this.f46088d, this.f46089e, this.f46090f);
    }
}
