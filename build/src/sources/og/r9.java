package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f43497a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f43498b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f43499c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f43500d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f43374a;
        this.f43497a = p9Var;
        num = o9Var.f43375b;
        this.f43498b = num;
        this.f43499c = null;
        this.f43500d = null;
    }

    public final p9 a() {
        return this.f43497a;
    }

    public final Integer b() {
        return this.f43498b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (gf.o.a(this.f43497a, r9Var.f43497a) && gf.o.a(this.f43498b, r9Var.f43498b) && gf.o.a(null, null) && gf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(this.f43497a, this.f43498b, null, null);
    }
}
