package o5;

import java.util.Collections;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q extends a {

    /* renamed from: i  reason: collision with root package name */
    private final Object f42321i;

    public q(y5.c cVar) {
        this(cVar, null);
    }

    @Override // o5.a
    float c() {
        return 1.0f;
    }

    @Override // o5.a
    public Object h() {
        y5.c cVar = this.f42259e;
        Object obj = this.f42321i;
        return cVar.b(0.0f, 0.0f, obj, obj, f(), f(), f());
    }

    @Override // o5.a
    Object i(y5.a aVar, float f10) {
        return h();
    }

    @Override // o5.a
    public void l() {
        if (this.f42259e != null) {
            super.l();
        }
    }

    @Override // o5.a
    public void n(float f10) {
        this.f42258d = f10;
    }

    public q(y5.c cVar, Object obj) {
        super(Collections.EMPTY_LIST);
        o(cVar);
        this.f42321i = obj;
    }
}
