package qg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class n extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f46055d;

    /* renamed from: e  reason: collision with root package name */
    Collection f46056e;

    /* renamed from: i  reason: collision with root package name */
    final n f46057i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f46058o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ q f46059p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(q qVar, Object obj, Collection collection, n nVar) {
        Collection collection2;
        this.f46059p = qVar;
        this.f46055d = obj;
        this.f46056e = collection;
        this.f46057i = nVar;
        if (nVar == null) {
            collection2 = null;
        } else {
            collection2 = nVar.f46056e;
        }
        this.f46058o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f46056e.isEmpty();
        boolean add = this.f46056e.add(obj);
        if (add) {
            q.i(this.f46059p);
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
        boolean addAll = this.f46056e.addAll(collection);
        if (addAll) {
            q.k(this.f46059p, this.f46056e.size() - size);
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
        n nVar = this.f46057i;
        if (nVar != null) {
            nVar.b();
        } else {
            q.o(this.f46059p).put(this.f46055d, this.f46056e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        n nVar = this.f46057i;
        if (nVar != null) {
            nVar.c();
        } else if (this.f46056e.isEmpty()) {
            q.o(this.f46059p).remove(this.f46055d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f46056e.clear();
        q.l(this.f46059p, size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f46056e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f46056e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f46056e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f46056e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new m(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f46056e.remove(obj);
        if (remove) {
            q.j(this.f46059p);
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
        boolean removeAll = this.f46056e.removeAll(collection);
        if (removeAll) {
            q.k(this.f46059p, this.f46056e.size() - size);
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f46056e.retainAll(collection);
        if (retainAll) {
            q.k(this.f46059p, this.f46056e.size() - size);
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f46056e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f46056e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        Collection collection;
        n nVar = this.f46057i;
        if (nVar != null) {
            nVar.zzb();
            if (this.f46057i.f46056e != this.f46058o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f46056e.isEmpty() && (collection = (Collection) q.o(this.f46059p).get(this.f46055d)) != null) {
            this.f46056e = collection;
        }
    }
}
