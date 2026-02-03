package og;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f43245d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43246e;

    /* renamed from: i  reason: collision with root package name */
    final n f43247i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f43248o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f43249p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f43249p = qVar;
        this.f43245d = obj;
        this.f43246e = collection;
        this.f43247i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f43246e;
        }
        this.f43248o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f43246e.isEmpty();
        boolean add = this.f43246e.add(obj);
        if (add) {
            q.i(this.f43249p);
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
        boolean addAll = this.f43246e.addAll(collection);
        if (addAll) {
            q.k(this.f43249p, this.f43246e.size() - size);
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
        n nVar = this.f43247i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f43249p).put(this.f43245d, this.f43246e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f43247i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f43246e.isEmpty()) {
            q.o(this.f43249p).remove(this.f43245d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f43246e.clear();
        q.l(this.f43249p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f43246e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f43246e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f43246e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f43246e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f43246e.remove(obj);
        if (remove) {
            q.j(this.f43249p);
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
        boolean removeAll = this.f43246e.removeAll(collection);
        if (removeAll) {
            q.k(this.f43249p, this.f43246e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f43246e.retainAll(collection);
        if (retainAll) {
            q.k(this.f43249p, this.f43246e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f43246e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f43246e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f43247i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f43247i.f43246e != this.f43248o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f43246e.isEmpty() && (collection = (Collection) q.o(this.f43249p).get(this.f43245d)) != null) {
            this.f43246e = collection;
        }
    }
}
