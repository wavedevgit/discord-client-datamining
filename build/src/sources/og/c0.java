package og;

import java.util.AbstractSet;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c0 extends AbstractSet {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ f0 f42915d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(f0 f0Var) {
        this.f42915d = f0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        this.f42915d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        return this.f42915d.containsKey(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        f0 f0Var = this.f42915d;
        Map n10 = f0Var.n();
        if (n10 != null) {
            return n10.keySet().iterator();
        }
        return new w(f0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        Object z10;
        Object obj2;
        Map n10 = this.f42915d.n();
        if (n10 == null) {
            z10 = this.f42915d.z(obj);
            obj2 = f0.f43146u;
            if (z10 == obj2) {
                return false;
            }
            return true;
        }
        return n10.keySet().remove(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f42915d.size();
    }
}
