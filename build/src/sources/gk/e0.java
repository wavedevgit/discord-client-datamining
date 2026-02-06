package gk;

import gk.b0;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e0 implements d0 {
    private static c0 h(Object obj, Object obj2) {
        c0 c0Var = (c0) obj;
        c0 c0Var2 = (c0) obj2;
        if (!c0Var2.isEmpty()) {
            if (!c0Var.i()) {
                c0Var = c0Var.l();
            }
            c0Var.k(c0Var2);
        }
        return c0Var;
    }

    @Override // gk.d0
    public Object a(Object obj, Object obj2) {
        return h(obj, obj2);
    }

    @Override // gk.d0
    public b0.a b(Object obj) {
        return ((b0) obj).a();
    }

    @Override // gk.d0
    public Map c(Object obj) {
        return (c0) obj;
    }

    @Override // gk.d0
    public Object d(Object obj) {
        return c0.d().l();
    }

    @Override // gk.d0
    public Map e(Object obj) {
        return (c0) obj;
    }

    @Override // gk.d0
    public Object f(Object obj) {
        ((c0) obj).j();
        return obj;
    }

    @Override // gk.d0
    public boolean g(Object obj) {
        return !((c0) obj).i();
    }
}
