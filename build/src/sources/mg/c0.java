package mg;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 extends q1 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ i0 f37573e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c0(i0 i0Var, Map map) {
        super(map);
        this.f37573e = i0Var;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final void clear() {
        m1.a(iterator());
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean containsAll(Collection collection) {
        return this.f38027d.keySet().containsAll(collection);
    }

    @Override // java.util.AbstractSet, java.util.Collection, java.util.Set
    public final boolean equals(Object obj) {
        if (this != obj && !this.f38027d.keySet().equals(obj)) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractSet, java.util.Collection, java.util.Set
    public final int hashCode() {
        return this.f38027d.keySet().hashCode();
    }

    @Override // mg.q1, java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    public final Iterator iterator() {
        return new b0(this, this.f38027d.entrySet().iterator());
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public final boolean remove(Object obj) {
        int i10;
        Collection collection = (Collection) this.f38027d.remove(obj);
        if (collection != null) {
            int size = collection.size();
            collection.clear();
            i0 i0Var = this.f37573e;
            i10 = i0Var.f37713o;
            i0Var.f37713o = i10 - size;
            if (size > 0) {
                return true;
            }
            return false;
        }
        return false;
    }
}
