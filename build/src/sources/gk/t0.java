package gk;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t0 {

    /* renamed from: c  reason: collision with root package name */
    private static final t0 f25408c = new t0();

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentMap f25410b = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private final y0 f25409a = new a0();

    private t0() {
    }

    public static t0 a() {
        return f25408c;
    }

    public x0 b(Class cls, x0 x0Var) {
        u.b(cls, "messageType");
        u.b(x0Var, "schema");
        return (x0) this.f25410b.putIfAbsent(cls, x0Var);
    }

    public x0 c(Class cls) {
        x0 b10;
        u.b(cls, "messageType");
        x0 x0Var = (x0) this.f25410b.get(cls);
        if (x0Var == null && (b10 = b(cls, (x0Var = this.f25409a.a(cls)))) != null) {
            return b10;
        }
        return x0Var;
    }

    public x0 d(Object obj) {
        return c(obj.getClass());
    }
}
