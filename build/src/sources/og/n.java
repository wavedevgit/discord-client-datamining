package og;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f43151d;

    /* renamed from: e  reason: collision with root package name */
    Collection f43152e;

    /* renamed from: i  reason: collision with root package name */
    final n f43153i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f43154o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f43155p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f43155p = qVar;
        this.f43151d = obj;
        this.f43152e = collection;
        this.f43153i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f43152e;
        }
        this.f43154o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f43152e.isEmpty();
        boolean add = this.f43152e.add(obj);
        if (add) {
            q.i(this.f43155p);
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
        boolean addAll = this.f43152e.addAll(collection);
        if (addAll) {
            q.k(this.f43155p, this.f43152e.size() - size);
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
        n nVar = this.f43153i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f43155p).put(this.f43151d, this.f43152e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f43153i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f43152e.isEmpty()) {
            q.o(this.f43155p).remove(this.f43151d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f43152e.clear();
        q.l(this.f43155p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f43152e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f43152e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f43152e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f43152e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f43152e.remove(obj);
        if (remove) {
            q.j(this.f43155p);
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
        boolean removeAll = this.f43152e.removeAll(collection);
        if (removeAll) {
            q.k(this.f43155p, this.f43152e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f43152e.retainAll(collection);
        if (retainAll) {
            q.k(this.f43155p, this.f43152e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f43152e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f43152e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f43153i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f43153i.f43152e != this.f43154o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f43152e.isEmpty() && (collection = (Collection) q.o(this.f43155p).get(this.f43151d)) != null) {
            this.f43152e = collection;
        }
    }
}
