package androidx.datastore.preferences.protobuf;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z0 {

    /* renamed from: c  reason: collision with root package name */
    private static final z0 f3851c = new z0();

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentMap f3853b = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private final e1 f3852a = new g0();

    private z0() {
    }

    public static z0 a() {
        return f3851c;
    }

    public d1 b(Class cls, d1 d1Var) {
        y.b(cls, "messageType");
        y.b(d1Var, "schema");
        return (d1) this.f3853b.putIfAbsent(cls, d1Var);
    }

    public d1 c(Class cls) {
        d1 b10;
        y.b(cls, "messageType");
        d1 d1Var = (d1) this.f3853b.get(cls);
        if (d1Var == null && (b10 = b(cls, (d1Var = this.f3852a.a(cls)))) != null) {
            return b10;
        }
        return d1Var;
    }

    public d1 d(Object obj) {
        return c(obj.getClass());
    }
}
