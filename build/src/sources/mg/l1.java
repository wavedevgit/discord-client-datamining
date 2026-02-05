package mg;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l1 extends d1 implements Set {

    /* renamed from: e  reason: collision with root package name */
    private transient i1 f37874e;

    @Override // java.util.Collection, java.util.Set
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        return e2.b(this, obj);
    }

    public final i1 f() {
        i1 i1Var = this.f37874e;
        if (i1Var == null) {
            i1 g10 = g();
            this.f37874e = g10;
            return g10;
        }
        return i1Var;
    }

    i1 g() {
        Object[] array = toArray();
        int i10 = i1.f37715i;
        return i1.g(array, array.length);
    }

    @Override // java.util.Collection, java.util.Set
    public final int hashCode() {
        return e2.a(this);
    }
}
