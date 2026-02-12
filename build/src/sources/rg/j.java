package rg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class j extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f46759d;

    /* renamed from: e  reason: collision with root package name */
    Collection f46760e;

    /* renamed from: i  reason: collision with root package name */
    final j f46761i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f46762o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ m f46763p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(m mVar, Object obj, Collection collection, j jVar) {
        Collection collection2;
        this.f46763p = mVar;
        this.f46759d = obj;
        this.f46760e = collection;
        this.f46761i = jVar;
        if (jVar == null) {
            collection2 = null;
        } else {
            collection2 = jVar.f46760e;
        }
        this.f46762o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f46760e.isEmpty();
        boolean add = this.f46760e.add(obj);
        if (add) {
            m mVar = this.f46763p;
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
        boolean addAll = this.f46760e.addAll(collection);
        if (addAll) {
            int size2 = this.f46760e.size();
            m mVar = this.f46763p;
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
        j jVar = this.f46761i;
        if (jVar != null) {
            jVar.b();
            return;
        }
        m mVar = this.f46763p;
        m.l(mVar).put(this.f46759d, this.f46760e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        j jVar = this.f46761i;
        if (jVar != null) {
            jVar.c();
        } else if (this.f46760e.isEmpty()) {
            m mVar = this.f46763p;
            m.l(mVar).remove(this.f46759d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f46760e.clear();
        m mVar = this.f46763p;
        m.m(mVar, m.i(mVar) - size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f46760e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f46760e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f46760e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f46760e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new i(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f46760e.remove(obj);
        if (remove) {
            m mVar = this.f46763p;
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
        boolean removeAll = this.f46760e.removeAll(collection);
        if (removeAll) {
            int size2 = this.f46760e.size();
            m mVar = this.f46763p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f46760e.retainAll(collection);
        if (retainAll) {
            int size2 = this.f46760e.size();
            m mVar = this.f46763p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f46760e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f46760e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        j jVar = this.f46761i;
        if (jVar != null) {
            jVar.zzb();
            j jVar2 = this.f46761i;
            if (jVar2.f46760e != this.f46762o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f46760e.isEmpty()) {
            m mVar = this.f46763p;
            Collection collection = (Collection) m.l(mVar).get(this.f46759d);
            if (collection != null) {
                this.f46760e = collection;
            }
        }
    }
}
