package ji;

import java.io.Serializable;
import java.util.AbstractCollection;
import java.util.Arrays;
import java.util.Collection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q extends AbstractCollection implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private static final Object[] f31906d = new Object[0];

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a extends b {

        /* renamed from: a  reason: collision with root package name */
        Object[] f31907a;

        /* renamed from: b  reason: collision with root package name */
        int f31908b;

        /* renamed from: c  reason: collision with root package name */
        boolean f31909c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(int i10) {
            h.b(i10, "initialCapacity");
            this.f31907a = new Object[i10];
            this.f31908b = 0;
        }

        private void g(int i10) {
            Object[] objArr = this.f31907a;
            if (objArr.length < i10) {
                this.f31907a = Arrays.copyOf(objArr, b.c(objArr.length, i10));
                this.f31909c = false;
            } else if (this.f31909c) {
                this.f31907a = (Object[]) objArr.clone();
                this.f31909c = false;
            }
        }

        @Override // ji.q.b
        public b b(Iterable iterable) {
            if (iterable instanceof Collection) {
                Collection collection = (Collection) iterable;
                g(this.f31908b + collection.size());
                if (collection instanceof q) {
                    this.f31908b = ((q) collection).c(this.f31907a, this.f31908b);
                    return this;
                }
            }
            super.b(iterable);
            return this;
        }

        public a d(Object obj) {
            ii.m.j(obj);
            g(this.f31908b + 1);
            Object[] objArr = this.f31907a;
            int i10 = this.f31908b;
            this.f31908b = i10 + 1;
            objArr[i10] = obj;
            return this;
        }

        public b e(Object... objArr) {
            f(objArr, objArr.length);
            return this;
        }

        final void f(Object[] objArr, int i10) {
            h0.c(objArr, i10);
            g(this.f31908b + i10);
            System.arraycopy(objArr, 0, this.f31907a, this.f31908b, i10);
            this.f31908b += i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {
        b() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static int c(int i10, int i11) {
            if (i11 >= 0) {
                int i12 = i10 + (i10 >> 1) + 1;
                if (i12 < i11) {
                    i12 = Integer.highestOneBit(i11 - 1) << 1;
                }
                if (i12 < 0) {
                    return Integer.MAX_VALUE;
                }
                return i12;
            }
            throw new AssertionError("cannot store more than MAX_VALUE elements");
        }

        public abstract b a(Object obj);

        public b b(Iterable iterable) {
            for (Object obj : iterable) {
                a(obj);
            }
            return this;
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean add(Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean addAll(Collection collection) {
        throw new UnsupportedOperationException();
    }

    public abstract s b();

    abstract int c(Object[] objArr, int i10);

    @Override // java.util.AbstractCollection, java.util.Collection
    public final void clear() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public abstract boolean contains(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public Object[] d() {
        return null;
    }

    int e() {
        throw new UnsupportedOperationException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        throw new UnsupportedOperationException();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean g();

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean remove(Object obj) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean removeAll(Collection collection) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final boolean retainAll(Collection collection) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final Object[] toArray() {
        return toArray(f31906d);
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public final Object[] toArray(Object[] objArr) {
        ii.m.j(objArr);
        int size = size();
        if (objArr.length < size) {
            Object[] d10 = d();
            if (d10 != null) {
                return j0.a(d10, f(), e(), objArr);
            }
            objArr = h0.d(objArr, size);
        } else if (objArr.length > size) {
            objArr[size] = null;
        }
        c(objArr, 0);
        return objArr;
    }
}
