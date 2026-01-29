package mg;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class f0 extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f38176d;

    /* renamed from: e  reason: collision with root package name */
    Collection f38177e;

    /* renamed from: i  reason: collision with root package name */
    final f0 f38178i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f38179o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ i0 f38180p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(i0 i0Var, Object obj, Collection collection, f0 f0Var) {
        Collection collection2;
        this.f38180p = i0Var;
        this.f38176d = obj;
        this.f38177e = collection;
        this.f38178i = f0Var;
        if (f0Var == null) {
            collection2 = null;
        } else {
            collection2 = f0Var.f38177e;
        }
        this.f38179o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f38177e.isEmpty();
        boolean add = this.f38177e.add(obj);
        if (add) {
            i0 i0Var = this.f38180p;
            i0.m(i0Var, i0.i(i0Var) + 1);
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
        boolean addAll = this.f38177e.addAll(collection);
        if (addAll) {
            int size2 = this.f38177e.size();
            i0 i0Var = this.f38180p;
            i0.m(i0Var, i0.i(i0Var) + (size2 - size));
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
        f0 f0Var = this.f38178i;
        if (f0Var != null) {
            f0Var.b();
            return;
        }
        i0 i0Var = this.f38180p;
        i0.l(i0Var).put(this.f38176d, this.f38177e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        f0 f0Var = this.f38178i;
        if (f0Var != null) {
            f0Var.c();
        } else if (this.f38177e.isEmpty()) {
            i0 i0Var = this.f38180p;
            i0.l(i0Var).remove(this.f38176d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f38177e.clear();
        i0 i0Var = this.f38180p;
        i0.m(i0Var, i0.i(i0Var) - size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f38177e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f38177e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f38177e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f38177e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new e0(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f38177e.remove(obj);
        if (remove) {
            i0 i0Var = this.f38180p;
            i0.m(i0Var, i0.i(i0Var) - 1);
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
        boolean removeAll = this.f38177e.removeAll(collection);
        if (removeAll) {
            int size2 = this.f38177e.size();
            i0 i0Var = this.f38180p;
            i0.m(i0Var, i0.i(i0Var) + (size2 - size));
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f38177e.retainAll(collection);
        if (retainAll) {
            int size2 = this.f38177e.size();
            i0 i0Var = this.f38180p;
            i0.m(i0Var, i0.i(i0Var) + (size2 - size));
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f38177e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f38177e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        f0 f0Var = this.f38178i;
        if (f0Var != null) {
            f0Var.zzb();
            f0 f0Var2 = this.f38178i;
            if (f0Var2.f38177e != this.f38179o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f38177e.isEmpty()) {
            i0 i0Var = this.f38180p;
            Collection collection = (Collection) i0.l(i0Var).get(this.f38176d);
            if (collection != null) {
                this.f38177e = collection;
            }
        }
    }
}
