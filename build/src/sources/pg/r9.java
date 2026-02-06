package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f44689a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f44690b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f44691c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f44692d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f44566a;
        this.f44689a = p9Var;
        num = o9Var.f44567b;
        this.f44690b = num;
        this.f44691c = null;
        this.f44692d = null;
    }

    public final p9 a() {
        return this.f44689a;
    }

    public final Integer b() {
        return this.f44690b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (gf.o.a(this.f44689a, r9Var.f44689a) && gf.o.a(this.f44690b, r9Var.f44690b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f44689a, this.f44690b, null, null);
    }
}
