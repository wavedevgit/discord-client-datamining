package qg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f45292d;

    /* renamed from: e  reason: collision with root package name */
    Collection f45293e;

    /* renamed from: i  reason: collision with root package name */
    final n f45294i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f45295o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f45296p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f45296p = qVar;
        this.f45292d = obj;
        this.f45293e = collection;
        this.f45294i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f45293e;
        }
        this.f45295o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f45293e.isEmpty();
        boolean add = this.f45293e.add(obj);
        if (add) {
            q.i(this.f45296p);
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
        boolean addAll = this.f45293e.addAll(collection);
        if (addAll) {
            q.k(this.f45296p, this.f45293e.size() - size);
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
        n nVar = this.f45294i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f45296p).put(this.f45292d, this.f45293e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f45294i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f45293e.isEmpty()) {
            q.o(this.f45296p).remove(this.f45292d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f45293e.clear();
        q.l(this.f45296p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f45293e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f45293e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f45293e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f45293e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f45293e.remove(obj);
        if (remove) {
            q.j(this.f45296p);
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
        boolean removeAll = this.f45293e.removeAll(collection);
        if (removeAll) {
            q.k(this.f45296p, this.f45293e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f45293e.retainAll(collection);
        if (retainAll) {
            q.k(this.f45296p, this.f45293e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f45293e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f45293e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f45294i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f45294i.f45293e != this.f45295o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f45293e.isEmpty() && (collection = (Collection) q.o(this.f45296p).get(this.f45292d)) != null) {
            this.f45293e = collection;
        }
    }
}
