package og;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f43445d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43446e;

    /* renamed from: i  reason: collision with root package name */
    final n f43447i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f43448o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f43449p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f43449p = qVar;
        this.f43445d = obj;
        this.f43446e = collection;
        this.f43447i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f43446e;
        }
        this.f43448o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f43446e.isEmpty();
        boolean add = this.f43446e.add(obj);
        if (add) {
            q.i(this.f43449p);
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
        boolean addAll = this.f43446e.addAll(collection);
        if (addAll) {
            q.k(this.f43449p, this.f43446e.size() - size);
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
        n nVar = this.f43447i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f43449p).put(this.f43445d, this.f43446e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f43447i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f43446e.isEmpty()) {
            q.o(this.f43449p).remove(this.f43445d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f43446e.clear();
        q.l(this.f43449p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f43446e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f43446e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f43446e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f43446e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f43446e.remove(obj);
        if (remove) {
            q.j(this.f43449p);
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
        boolean removeAll = this.f43446e.removeAll(collection);
        if (removeAll) {
            q.k(this.f43449p, this.f43446e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f43446e.retainAll(collection);
        if (retainAll) {
            q.k(this.f43449p, this.f43446e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f43446e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f43446e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f43447i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f43447i.f43446e != this.f43448o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f43446e.isEmpty() && (collection = (Collection) q.o(this.f43449p).get(this.f43445d)) != null) {
            this.f43446e = collection;
        }
    }
}
