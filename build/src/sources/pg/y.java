package pg;

import java.util.AbstractSet;
import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends AbstractSet {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ c0 f45905d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(c0 c0Var) {
        this.f45905d = c0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        this.f45905d.clear();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean contains(Object obj) {
        return this.f45905d.containsKey(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        c0 c0Var = this.f45905d;
        Map o10 = c0Var.o();
        if (o10 != null) {
            return o10.keySet().iterator();
        }
        return new s(c0Var);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        Object B;
        Object obj2;
        Map o10 = this.f45905d.o();
        if (o10 == null) {
            B = this.f45905d.B(obj);
            obj2 = c0.f45139u;
            if (B == obj2) {
                return false;
            }
            return true;
        }
        return o10.keySet().remove(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final int size() {
        return this.f45905d.size();
    }
}
