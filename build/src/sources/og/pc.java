package og;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class pc extends la implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient mc f42369e;

    @Override // java.util.Collection, java.util.Set
    public final boolean equals(Object obj) {
        if (obj == this || obj == this) {
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

    public final mc f() {
        mc mcVar = this.f42369e;
        if (mcVar == null) {
            mc g10 = g();
            this.f42369e = g10;
            return g10;
        }
        return mcVar;
    }

    mc g() {
        return mc.g(toArray());
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return b.a(this);
    }
}
