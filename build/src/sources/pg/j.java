package pg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class j extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f45378d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45379e;

    /* renamed from: i  reason: collision with root package name */
    final j f45380i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f45381o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ m f45382p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(m mVar, Object obj, Collection collection, j jVar) {
        Collection collection2;
        this.f45382p = mVar;
        this.f45378d = obj;
        this.f45379e = collection;
        this.f45380i = jVar;
        if (jVar == null) {
            collection2 = null;
        } else {
            collection2 = jVar.f45379e;
        }
        this.f45381o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f45379e.isEmpty();
        boolean add = this.f45379e.add(obj);
        if (add) {
            m mVar = this.f45382p;
            m.m(mVar, m.i(mVar) + 1);
            if (isEmpty) {
                b();
                return true;
            }
        }
        return add;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean addAll(Collection collection) {
        if (collection.isEmpty()) {
            return false;
        }
        int size = size();
        boolean addAll = this.f45379e.addAll(collection);
        if (addAll) {
            int size2 = this.f45379e.size();
            m mVar = this.f45382p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            if (size == 0) {
                b();
                return true;
            }
            return addAll;
        }
        return addAll;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b() {
        j jVar = this.f45380i;
        if (jVar != null) {
            jVar.b();
            return;
        }
        m mVar = this.f45382p;
        m.l(mVar).put(this.f45378d, this.f45379e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        j jVar = this.f45380i;
        if (jVar != null) {
            jVar.c();
        } else if (this.f45379e.isEmpty()) {
            m mVar = this.f45382p;
            m.l(mVar).remove(this.f45378d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f45379e.clear();
        m mVar = this.f45382p;
        m.m(mVar, m.i(mVar) - size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f45379e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f45379e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f45379e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f45379e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new i(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f45379e.remove(obj);
        if (remove) {
            m mVar = this.f45382p;
            m.m(mVar, m.i(mVar) - 1);
            c();
        }
        return remove;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean removeAll(Collection collection) {
        if (collection.isEmpty()) {
            return false;
        }
        int size = size();
        boolean removeAll = this.f45379e.removeAll(collection);
        if (removeAll) {
            int size2 = this.f45379e.size();
            m mVar = this.f45382p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f45379e.retainAll(collection);
        if (retainAll) {
            int size2 = this.f45379e.size();
            m mVar = this.f45382p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f45379e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f45379e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        j jVar = this.f45380i;
        if (jVar != null) {
            jVar.zzb();
            j jVar2 = this.f45380i;
            if (jVar2.f45379e != this.f45381o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f45379e.isEmpty()) {
            m mVar = this.f45382p;
            Collection collection = (Collection) m.l(mVar).get(this.f45378d);
            if (collection != null) {
                this.f45379e = collection;
            }
        }
    }
}
