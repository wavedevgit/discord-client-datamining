package oi;

import java.util.AbstractCollection;
import java.util.Collection;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends AbstractCollection {

        /* renamed from: d  reason: collision with root package name */
        final Collection f41844d;

        /* renamed from: e  reason: collision with root package name */
        final ni.n f41845e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(Collection collection, ni.n nVar) {
            this.f41844d = collection;
            this.f41845e = nVar;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean add(Object obj) {
            ni.m.d(this.f41845e.apply(obj));
            return this.f41844d.add(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean addAll(Collection collection) {
            for (Object obj : collection) {
                ni.m.d(this.f41845e.apply(obj));
            }
            return this.f41844d.addAll(collection);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            v.f(this.f41844d, this.f41845e);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean contains(Object obj) {
            if (i.c(this.f41844d, obj)) {
                return this.f41845e.apply(obj);
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean containsAll(Collection collection) {
            return i.a(this, collection);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean isEmpty() {
            return !v.a(this.f41844d, this.f41845e);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return w.g(this.f41844d.iterator(), this.f41845e);
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean remove(Object obj) {
            if (contains(obj) && this.f41844d.remove(obj)) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean removeAll(Collection collection) {
            Iterator it = this.f41844d.iterator();
            boolean z10 = false;
            while (it.hasNext()) {
                Object next = it.next();
                if (this.f41845e.apply(next) && collection.contains(next)) {
                    it.remove();
                    z10 = true;
                }
            }
            return z10;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean retainAll(Collection collection) {
            Iterator it = this.f41844d.iterator();
            boolean z10 = false;
            while (it.hasNext()) {
                Object next = it.next();
                if (this.f41845e.apply(next) && !collection.contains(next)) {
                    it.remove();
                    z10 = true;
                }
            }
            return z10;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            int i10 = 0;
            for (Object obj : this.f41844d) {
                if (this.f41845e.apply(obj)) {
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
        ni.m.j(collection);
        try {
            return collection.contains(obj);
        } catch (ClassCastException | NullPointerException unused) {
            return false;
        }
    }
}
