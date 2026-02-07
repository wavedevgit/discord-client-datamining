package qg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class j extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f47186d;

    /* renamed from: e  reason: collision with root package name */
    Collection f47187e;

    /* renamed from: i  reason: collision with root package name */
    final j f47188i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f47189o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ m f47190p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(m mVar, Object obj, Collection collection, j jVar) {
        Collection collection2;
        this.f47190p = mVar;
        this.f47186d = obj;
        this.f47187e = collection;
        this.f47188i = jVar;
        if (jVar == null) {
            collection2 = null;
        } else {
            collection2 = jVar.f47187e;
        }
        this.f47189o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f47187e.isEmpty();
        boolean add = this.f47187e.add(obj);
        if (add) {
            m mVar = this.f47190p;
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
        boolean addAll = this.f47187e.addAll(collection);
        if (addAll) {
            int size2 = this.f47187e.size();
            m mVar = this.f47190p;
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
        j jVar = this.f47188i;
        if (jVar != null) {
            jVar.b();
            return;
        }
        m mVar = this.f47190p;
        m.l(mVar).put(this.f47186d, this.f47187e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        j jVar = this.f47188i;
        if (jVar != null) {
            jVar.c();
        } else if (this.f47187e.isEmpty()) {
            m mVar = this.f47190p;
            m.l(mVar).remove(this.f47186d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f47187e.clear();
        m mVar = this.f47190p;
        m.m(mVar, m.i(mVar) - size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f47187e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f47187e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f47187e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f47187e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new i(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f47187e.remove(obj);
        if (remove) {
            m mVar = this.f47190p;
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
        boolean removeAll = this.f47187e.removeAll(collection);
        if (removeAll) {
            int size2 = this.f47187e.size();
            m mVar = this.f47190p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f47187e.retainAll(collection);
        if (retainAll) {
            int size2 = this.f47187e.size();
            m mVar = this.f47190p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f47187e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f47187e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        j jVar = this.f47188i;
        if (jVar != null) {
            jVar.zzb();
            j jVar2 = this.f47188i;
            if (jVar2.f47187e != this.f47189o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f47187e.isEmpty()) {
            m mVar = this.f47190p;
            Collection collection = (Collection) m.l(mVar).get(this.f47186d);
            if (collection != null) {
                this.f47187e = collection;
            }
        }
    }
}
