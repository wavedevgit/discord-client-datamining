package mg;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j extends c implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient f f37174e;

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

    public final f f() {
        f fVar = this.f37174e;
        if (fVar == null) {
            f g10 = g();
            this.f37174e = g10;
            return g10;
        }
        return fVar;
    }

    f g() {
        Object[] array = toArray();
        int i10 = f.f37152i;
        return f.g(array, array.length);
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return r.a(this);
    }
}
