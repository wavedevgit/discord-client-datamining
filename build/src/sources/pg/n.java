package pg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f44493d;

    /* renamed from: e  reason: collision with root package name */
    Collection f44494e;

    /* renamed from: i  reason: collision with root package name */
    final n f44495i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f44496o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f44497p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f44497p = qVar;
        this.f44493d = obj;
        this.f44494e = collection;
        this.f44495i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f44494e;
        }
        this.f44496o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f44494e.isEmpty();
        boolean add = this.f44494e.add(obj);
        if (add) {
            q.i(this.f44497p);
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
        boolean addAll = this.f44494e.addAll(collection);
        if (addAll) {
            q.k(this.f44497p, this.f44494e.size() - size);
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
        n nVar = this.f44495i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f44497p).put(this.f44493d, this.f44494e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f44495i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f44494e.isEmpty()) {
            q.o(this.f44497p).remove(this.f44493d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f44494e.clear();
        q.l(this.f44497p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f44494e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f44494e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f44494e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f44494e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f44494e.remove(obj);
        if (remove) {
            q.j(this.f44497p);
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
        boolean removeAll = this.f44494e.removeAll(collection);
        if (removeAll) {
            q.k(this.f44497p, this.f44494e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f44494e.retainAll(collection);
        if (retainAll) {
            q.k(this.f44497p, this.f44494e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f44494e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f44494e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f44495i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f44495i.f44494e != this.f44496o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f44494e.isEmpty() && (collection = (Collection) q.o(this.f44497p).get(this.f44493d)) != null) {
            this.f44494e = collection;
        }
    }
}
