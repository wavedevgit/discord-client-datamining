package mg;

import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class k0 implements u1 {

    /* renamed from: d  reason: collision with root package name */
    private transient Set f38324d;

    /* renamed from: e  reason: collision with root package name */
    private transient Map f38325e;

    @Override // mg.u1
    public final Set b() {
        Set set = this.f38324d;
        if (set == null) {
            Set f10 = f();
            this.f38324d = f10;
            return f10;
        }
        return set;
    }

    @Override // mg.u1
    public final Map d() {
        Map map = this.f38325e;
        if (map == null) {
            Map e10 = e();
            this.f38325e = e10;
            return e10;
        }
        return map;
    }

    abstract Map e();

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof u1)) {
            return false;
        }
        return d().equals(((u1) obj).d());
    }

    abstract Set f();

    public final int hashCode() {
        return d().hashCode();
    }

    public final String toString() {
        return d().toString();
    }
}
