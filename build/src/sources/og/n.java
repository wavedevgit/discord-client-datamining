package og;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f43317d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43318e;

    /* renamed from: i  reason: collision with root package name */
    final n f43319i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f43320o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f43321p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f43321p = qVar;
        this.f43317d = obj;
        this.f43318e = collection;
        this.f43319i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f43318e;
        }
        this.f43320o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f43318e.isEmpty();
        boolean add = this.f43318e.add(obj);
        if (add) {
            q.i(this.f43321p);
            if (isEmpty) {
                b();
                return true;
            }
            return add;
        }
        return add;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean addAll(Collection collection) {
        if (collection.isEmpty()) {
            return false;
        }
        int size = size();
        boolean addAll = this.f43318e.addAll(collection);
        if (addAll) {
            q.k(this.f43321p, this.f43318e.size() - size);
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
        n nVar = this.f43319i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f43321p).put(this.f43317d, this.f43318e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f43319i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f43318e.isEmpty()) {
            q.o(this.f43321p).remove(this.f43317d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f43318e.clear();
        q.l(this.f43321p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f43318e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f43318e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f43318e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f43318e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f43318e.remove(obj);
        if (remove) {
            q.j(this.f43321p);
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
        boolean removeAll = this.f43318e.removeAll(collection);
        if (removeAll) {
            q.k(this.f43321p, this.f43318e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f43318e.retainAll(collection);
        if (retainAll) {
            q.k(this.f43321p, this.f43318e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f43318e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f43318e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f43319i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f43319i.f43318e != this.f43320o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f43318e.isEmpty() && (collection = (Collection) q.o(this.f43321p).get(this.f43317d)) != null) {
            this.f43318e = collection;
        }
    }
}
