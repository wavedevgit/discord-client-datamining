package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f44919a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f44920b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f44921c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f44922d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f44796a;
        this.f44919a = p9Var;
        num = o9Var.f44797b;
        this.f44920b = num;
        this.f44921c = null;
        this.f44922d = null;
    }

    public final p9 a() {
        return this.f44919a;
    }

    public final Integer b() {
        return this.f44920b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (hf.o.a(this.f44919a, r9Var.f44919a) && hf.o.a(this.f44920b, r9Var.f44920b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f44919a, this.f44920b, null, null);
    }
}
