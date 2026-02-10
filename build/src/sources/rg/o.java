package rg;

import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class o implements e1 {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f47032d;

    /* renamed from: e  reason: collision with root package name */
    private transient Map f47033e;

    @Override // rg.e1
    public final Map c() {
        Map map = this.f47033e;
        if (map == null) {
            Map e10 = e();
            this.f47033e = e10;
            return e10;
        }
        return map;
    }

    @Override // rg.e1
    public final Set d() {
        Set set = this.f47032d;
        if (set == null) {
            Set f10 = f();
            this.f47032d = f10;
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
