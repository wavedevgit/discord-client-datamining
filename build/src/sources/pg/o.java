package pg;

import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class o implements e1 {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f45604d;

    /* renamed from: e  reason: collision with root package name */
    private transient Map f45605e;

    @Override // pg.e1
    public final Map c() {
        Map map = this.f45605e;
        if (map == null) {
            Map e10 = e();
            this.f45605e = e10;
            return e10;
        }
        return map;
    }

    @Override // pg.e1
    public final Set d() {
        Set set = this.f45604d;
        if (set == null) {
            Set f10 = f();
            this.f45604d = f10;
            return f10;
        }
        return set;
    }

    abstract Map e();

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof e1)) {
            return false;
        }
        return c().equals(((e1) obj).c());
    }

    abstract Set f();

    public final int hashCode() {
        return c().hashCode();
    }

    public final String toString() {
        return c().toString();
    }
}
