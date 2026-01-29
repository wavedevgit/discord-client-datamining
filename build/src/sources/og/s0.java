package og;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s0 extends k0 implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient p0 f43505e;

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

    public final p0 f() {
        p0 p0Var = this.f43505e;
        if (p0Var == null) {
            p0 g10 = g();
            this.f43505e = g10;
            return g10;
        }
        return p0Var;
    }

    p0 g() {
        return p0.g(toArray());
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return l1.a(this);
    }
}
