package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f44920a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f44921b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f44922c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f44923d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f44797a;
        this.f44920a = p9Var;
        num = o9Var.f44798b;
        this.f44921b = num;
        this.f44922c = null;
        this.f44923d = null;
    }

    public final p9 a() {
        return this.f44920a;
    }

    public final Integer b() {
        return this.f44921b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (hf.o.a(this.f44920a, r9Var.f44920a) && hf.o.a(this.f44921b, r9Var.f44921b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f44920a, this.f44921b, null, null);
    }
}
