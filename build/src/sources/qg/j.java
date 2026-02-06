package qg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class j extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f47138d;

    /* renamed from: e  reason: collision with root package name */
    Collection f47139e;

    /* renamed from: i  reason: collision with root package name */
    final j f47140i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f47141o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ m f47142p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(m mVar, Object obj, Collection collection, j jVar) {
        Collection collection2;
        this.f47142p = mVar;
        this.f47138d = obj;
        this.f47139e = collection;
        this.f47140i = jVar;
        if (jVar == null) {
            collection2 = null;
        } else {
            collection2 = jVar.f47139e;
        }
        this.f47141o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f47139e.isEmpty();
        boolean add = this.f47139e.add(obj);
        if (add) {
            m mVar = this.f47142p;
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
        boolean addAll = this.f47139e.addAll(collection);
        if (addAll) {
            int size2 = this.f47139e.size();
            m mVar = this.f47142p;
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
        j jVar = this.f47140i;
        if (jVar != null) {
            jVar.b();
            return;
        }
        m mVar = this.f47142p;
        m.l(mVar).put(this.f47138d, this.f47139e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        j jVar = this.f47140i;
        if (jVar != null) {
            jVar.c();
        } else if (this.f47139e.isEmpty()) {
            m mVar = this.f47142p;
            m.l(mVar).remove(this.f47138d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f47139e.clear();
        m mVar = this.f47142p;
        m.m(mVar, m.i(mVar) - size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f47139e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f47139e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f47139e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f47139e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new i(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f47139e.remove(obj);
        if (remove) {
            m mVar = this.f47142p;
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
        boolean removeAll = this.f47139e.removeAll(collection);
        if (removeAll) {
            int size2 = this.f47139e.size();
            m mVar = this.f47142p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f47139e.retainAll(collection);
        if (retainAll) {
            int size2 = this.f47139e.size();
            m mVar = this.f47142p;
            m.m(mVar, m.i(mVar) + (size2 - size));
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f47139e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f47139e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        j jVar = this.f47140i;
        if (jVar != null) {
            jVar.zzb();
            j jVar2 = this.f47140i;
            if (jVar2.f47139e != this.f47141o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f47139e.isEmpty()) {
            m mVar = this.f47142p;
            Collection collection = (Collection) m.l(mVar).get(this.f47138d);
            if (collection != null) {
                this.f47139e = collection;
            }
        }
    }
}
