package gi;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class t extends p implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient s f26936e;

    public static t h() {
        return v.f26942q;
    }

    @Override // java.util.Collection, java.util.Set
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t) {
            ((t) obj).i();
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
        s sVar = this.f26936e;
        if (sVar == null) {
            s g10 = g();
            this.f26936e = g10;
            return g10;
        }
        return sVar;
    }

    abstract s g();

    abstract boolean i();
}
