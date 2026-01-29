package og;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f43301d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43302e;

    /* renamed from: i  reason: collision with root package name */
    final n f43303i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f43304o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f43305p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f43305p = qVar;
        this.f43301d = obj;
        this.f43302e = collection;
        this.f43303i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f43302e;
        }
        this.f43304o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f43302e.isEmpty();
        boolean add = this.f43302e.add(obj);
        if (add) {
            q.i(this.f43305p);
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
        boolean addAll = this.f43302e.addAll(collection);
        if (addAll) {
            q.k(this.f43305p, this.f43302e.size() - size);
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
        n nVar = this.f43303i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f43305p).put(this.f43301d, this.f43302e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f43303i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f43302e.isEmpty()) {
            q.o(this.f43305p).remove(this.f43301d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f43302e.clear();
        q.l(this.f43305p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f43302e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f43302e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f43302e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f43302e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f43302e.remove(obj);
        if (remove) {
            q.j(this.f43305p);
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
        boolean removeAll = this.f43302e.removeAll(collection);
        if (removeAll) {
            q.k(this.f43305p, this.f43302e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f43302e.retainAll(collection);
        if (retainAll) {
            q.k(this.f43305p, this.f43302e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f43302e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f43302e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f43303i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f43303i.f43302e != this.f43304o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f43302e.isEmpty() && (collection = (Collection) q.o(this.f43305p).get(this.f43301d)) != null) {
            this.f43302e = collection;
        }
    }
}
