package n0;

import a0.q1;
import a0.r1;
import a0.w1;
import a0.x2;
import a0.y2;
import java.util.UUID;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements x2.a {

    /* renamed from: a  reason: collision with root package name */
    private final r1 f39002a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g() {
        this(r1.Z());
    }

    @Override // x.a0
    public q1 a() {
        return this.f39002a;
    }

    @Override // a0.x2.a
    /* renamed from: c */
    public h b() {
        return new h(w1.Y(this.f39002a));
    }

    public g d(y2.b bVar) {
        a().V(x2.B, bVar);
        return this;
    }

    public g e(Class cls) {
        a().V(e0.m.G, cls);
        if (a().e(e0.m.F, null) == null) {
            f(cls.getCanonicalName() + "-" + UUID.randomUUID());
        }
        return this;
    }

    public g f(String str) {
        a().V(e0.m.F, str);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(r1 r1Var) {
        this.f39002a = r1Var;
        Class cls = (Class) r1Var.e(e0.m.G, null);
        if (cls != null && !cls.equals(f.class)) {
            throw new IllegalArgumentException("Invalid target class configuration for " + this + ": " + cls);
        }
        d(y2.b.STREAM_SHARING);
        e(f.class);
    }
}
