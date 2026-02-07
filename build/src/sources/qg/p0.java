package qg;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class p0 extends h0 implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient m0 f47478e;

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

    public final m0 f() {
        m0 m0Var = this.f47478e;
        if (m0Var == null) {
            m0 g10 = g();
            this.f47478e = g10;
            return g10;
        }
        return m0Var;
    }

    m0 g() {
        Object[] array = toArray();
        int i10 = m0.f47425i;
        return m0.g(array, array.length);
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return n1.a(this);
    }
}
