package ng;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class f0 extends AbstractCollection {

    /* renamed from: d  reason: collision with root package name */
    final Object f39842d;

    /* renamed from: e  reason: collision with root package name */
    Collection f39843e;

    /* renamed from: i  reason: collision with root package name */
    final f0 f39844i;

    /* renamed from: o  reason: collision with root package name */
    final Collection f39845o;

    /* renamed from: p  reason: collision with root package name */
    final /* synthetic */ i0 f39846p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(i0 i0Var, Object obj, Collection collection, f0 f0Var) {
        Collection collection2;
        this.f39846p = i0Var;
        this.f39842d = obj;
        this.f39843e = collection;
        this.f39844i = f0Var;
        if (f0Var == null) {
            collection2 = null;
        } else {
            collection2 = f0Var.f39843e;
        }
        this.f39845o = collection2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        zzb();
        boolean isEmpty = this.f39843e.isEmpty();
        boolean add = this.f39843e.add(obj);
        if (add) {
            i0 i0Var = this.f39846p;
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
        boolean addAll = this.f39843e.addAll(collection);
        if (addAll) {
            int size2 = this.f39843e.size();
            i0 i0Var = this.f39846p;
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
        f0 f0Var = this.f39844i;
        if (f0Var != null) {
            f0Var.b();
            return;
        }
        i0 i0Var = this.f39846p;
        i0.l(i0Var).put(this.f39842d, this.f39843e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c() {
        f0 f0Var = this.f39844i;
        if (f0Var != null) {
            f0Var.c();
        } else if (this.f39843e.isEmpty()) {
            i0 i0Var = this.f39846p;
            i0.l(i0Var).remove(this.f39842d);
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        int size = size();
        if (size == 0) {
            return;
        }
        this.f39843e.clear();
        i0 i0Var = this.f39846p;
        i0.m(i0Var, i0.i(i0Var) - size);
        c();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean contains(Object obj) {
        zzb();
        return this.f39843e.contains(obj);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean containsAll(Collection collection) {
        zzb();
        return this.f39843e.containsAll(collection);
    }

    @Override // java.util.Collection
    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        zzb();
        return this.f39843e.equals(obj);
    }

    @Override // java.util.Collection
    public final int hashCode() {
        zzb();
        return this.f39843e.hashCode();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public final Iterator iterator() {
        zzb();
        return new e0(this);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        zzb();
        boolean remove = this.f39843e.remove(obj);
        if (remove) {
            i0 i0Var = this.f39846p;
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
        boolean removeAll = this.f39843e.removeAll(collection);
        if (removeAll) {
            int size2 = this.f39843e.size();
            i0 i0Var = this.f39846p;
            i0.m(i0Var, i0.i(i0Var) + (size2 - size));
            c();
        }
        return removeAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        collection.getClass();
        int size = size();
        boolean retainAll = this.f39843e.retainAll(collection);
        if (retainAll) {
            int size2 = this.f39843e.size();
            i0 i0Var = this.f39846p;
            i0.m(i0Var, i0.i(i0Var) + (size2 - size));
            c();
        }
        return retainAll;
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final int size() {
        zzb();
        return this.f39843e.size();
    }

    @Override // java.util.AbstractCollection
    public final String toString() {
        zzb();
        return this.f39843e.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void zzb() {
        f0 f0Var = this.f39844i;
        if (f0Var != null) {
            f0Var.zzb();
            f0 f0Var2 = this.f39844i;
            if (f0Var2.f39843e != this.f39845o) {
                throw new ConcurrentModificationException();
            }
        } else if (this.f39843e.isEmpty()) {
            i0 i0Var = this.f39846p;
            Collection collection = (Collection) i0.l(i0Var).get(this.f39842d);
            if (collection != null) {
                this.f39843e = collection;
            }
        }
    }
}
