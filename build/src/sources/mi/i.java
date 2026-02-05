package mi;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends AbstractCollection {

        /* renamed from: d  reason: collision with root package name */
        final Collection f38608d;

        /* renamed from: e  reason: collision with root package name */
        final li.n f38609e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Collection collection, li.n nVar) {
            this.f38608d = collection;
            this.f38609e = nVar;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean add(Object obj) {
            li.m.d(this.f38609e.apply(obj));
            return this.f38608d.add(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean addAll(Collection collection) {
            for (Object obj : collection) {
                li.m.d(this.f38609e.apply(obj));
            }
            return this.f38608d.addAll(collection);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            v.f(this.f38608d, this.f38609e);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean contains(Object obj) {
            if (i.c(this.f38608d, obj)) {
                return this.f38609e.apply(obj);
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean containsAll(Collection collection) {
            return i.a(this, collection);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean isEmpty() {
            return !v.a(this.f38608d, this.f38609e);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return w.g(this.f38608d.iterator(), this.f38609e);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean remove(Object obj) {
            if (contains(obj) && this.f38608d.remove(obj)) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean removeAll(Collection collection) {
            Iterator it = this.f38608d.iterator();
            boolean z10 = false;
            while (it.hasNext()) {
                Object next = it.next();
                if (this.f38609e.apply(next) && collection.contains(next)) {
                    it.remove();
                    z10 = true;
                }
            }
            return z10;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean retainAll(Collection collection) {
            Iterator it = this.f38608d.iterator();
            boolean z10 = false;
            while (it.hasNext()) {
                Object next = it.next();
                if (this.f38609e.apply(next) && !collection.contains(next)) {
                    it.remove();
                    z10 = true;
                }
            }
            return z10;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            int i10 = 0;
            for (Object obj : this.f38608d) {
                if (this.f38609e.apply(obj)) {
                    i10++;
                }
            }
            return i10;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public Object[] toArray() {
            return y.i(iterator()).toArray();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public Object[] toArray(Object[] objArr) {
            return y.i(iterator()).toArray(objArr);
        }
    }

    static boolean a(Collection collection, Collection collection2) {
        for (Object obj : collection2) {
            if (!collection.contains(obj)) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static StringBuilder b(int i10) {
        h.b(i10, "size");
        return new StringBuilder((int) Math.min(i10 * 8, 1073741824L));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(Collection collection, Object obj) {
        li.m.j(collection);
        try {
            return collection.contains(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }
}
