package mg;

import java.util.AbstractSet;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v0 extends AbstractSet {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ y0 f38703d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(y0 y0Var) {
        this.f38703d = y0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        this.f38703d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        return this.f38703d.containsKey(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        y0 y0Var = this.f38703d;
        Map o10 = y0Var.o();
        if (o10 != null) {
            return o10.keySet().iterator();
        }
        return new o0(y0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        Object B;
        Object obj2;
        Map o10 = this.f38703d.o();
        if (o10 == null) {
            B = this.f38703d.B(obj);
            obj2 = y0.f38818u;
            if (B == obj2) {
                return false;
            }
            return true;
        }
        return o10.keySet().remove(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f38703d.size();
    }
}
