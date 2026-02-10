package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n9 {

    /* renamed from: a  reason: collision with root package name */
    private final k9 f44753a;

    /* renamed from: b  reason: collision with root package name */
    private final h9 f44754b;

    /* renamed from: c  reason: collision with root package name */
    private final l9 f44755c;

    /* renamed from: d  reason: collision with root package name */
    private final i9 f44756d;

    /* renamed from: e  reason: collision with root package name */
    private final Boolean f44757e;

    /* renamed from: f  reason: collision with root package name */
    private final Float f44758f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ n9(g9 g9Var, m9 m9Var) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        Boolean bool;
        Float f10;
        k9Var = g9Var.f44486a;
        this.f44753a = k9Var;
        h9Var = g9Var.f44487b;
        this.f44754b = h9Var;
        l9Var = g9Var.f44488c;
        this.f44755c = l9Var;
        i9Var = g9Var.f44489d;
        this.f44756d = i9Var;
        bool = g9Var.f44490e;
        this.f44757e = bool;
        f10 = g9Var.f44491f;
        this.f44758f = f10;
    }

    public final h9 a() {
        return this.f44754b;
    }

    public final i9 b() {
        return this.f44756d;
    }

    public final k9 c() {
        return this.f44753a;
    }

    public final l9 d() {
        return this.f44755c;
    }

    public final Boolean e() {
        return this.f44757e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof n9)) {
            return false;
        }
        n9 n9Var = (n9) obj;
        if (hf.o.a(this.f44753a, n9Var.f44753a) && hf.o.a(this.f44754b, n9Var.f44754b) && hf.o.a(this.f44755c, n9Var.f44755c) && hf.o.a(this.f44756d, n9Var.f44756d) && hf.o.a(this.f44757e, n9Var.f44757e) && hf.o.a(this.f44758f, n9Var.f44758f)) {
            return true;
        }
        return false;
    }

    public final Float f() {
        return this.f44758f;
    }

    public final int hashCode() {
        return hf.o.b(this.f44753a, this.f44754b, this.f44755c, this.f44756d, this.f44757e, this.f44758f);
    }
}
