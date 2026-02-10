package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r9 {

    /* renamed from: a  reason: collision with root package name */
    private final p9 f46251a;

    /* renamed from: b  reason: collision with root package name */
    private final Integer f46252b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f46253c;

    /* renamed from: d  reason: collision with root package name */
    private final Boolean f46254d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ r9(o9 o9Var, q9 q9Var) {
        p9 p9Var;
        Integer num;
        p9Var = o9Var.f46128a;
        this.f46251a = p9Var;
        num = o9Var.f46129b;
        this.f46252b = num;
        this.f46253c = null;
        this.f46254d = null;
    }

    public final p9 a() {
        return this.f46251a;
    }

    public final Integer b() {
        return this.f46252b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof r9)) {
            return false;
        }
        r9 r9Var = (r9) obj;
        if (hf.o.a(this.f46251a, r9Var.f46251a) && hf.o.a(this.f46252b, r9Var.f46252b) && hf.o.a(null, null) && hf.o.a(null, null)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(this.f46251a, this.f46252b, null, null);
    }
}
