package ni;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class t extends p implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient s f38498e;

    public static t i() {
        return v.f38504q;
    }

    @Override // java.util.Collection, java.util.Set
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t) {
            ((t) obj).j();
            if (obj.hashCode() != 0) {
                return false;
            }
        }
        if (obj == this) {
            return true;
        }
        if (obj instanceof Set) {
            Set set = (Set) obj;
            try {
                if (size() == set.size()) {
                    if (containsAll(set)) {
                        return true;
                    }
                    return false;
                }
            } catch (ClassCastException | NullPointerException unused) {
            }
        }
        return false;
    }

    public final s f() {
        s sVar = this.f38498e;
        if (sVar == null) {
            s g10 = g();
            this.f38498e = g10;
            return g10;
        }
        return sVar;
    }

    abstract s g();

    abstract boolean j();
}
