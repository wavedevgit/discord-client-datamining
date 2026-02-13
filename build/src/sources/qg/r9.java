package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f45488a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f45489b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f45490c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f45491d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f45365a;
        this.f45488a = p9Var;
        num = o9Var.f45366b;
        this.f45489b = num;
        this.f45490c = null;
        this.f45491d = null;
    }

    public final p9 a() {
        return this.f45488a;
    }

    public final Integer b() {
        return this.f45489b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (hf.o.a(this.f45488a, r9Var.f45488a) && hf.o.a(this.f45489b, r9Var.f45489b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f45488a, this.f45489b, null, null);
    }
}
