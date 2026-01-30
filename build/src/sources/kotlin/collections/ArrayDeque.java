package kotlin.collections;

import java.util.AbstractList;
import java.util.Collection;
import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ArrayDeque extends f {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final a f33304o = new a(null);

    /* renamed from: p  reason: collision with root package name */
    private static final Object[] f33305p = new Object[0];

    /* renamed from: d  reason: collision with root package name */
    private int f33306d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f33307e = f33305p;

    /* renamed from: i  reason: collision with root package name */
    private int f33308i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final void d(int i10, Collection collection) {
        Iterator it = collection.iterator();
        int length = this.f33307e.length;
        while (i10 < length && it.hasNext()) {
            this.f33307e[i10] = it.next();
            i10++;
        }
        int i11 = this.f33306d;
        for (int i12 = 0; i12 < i11 && it.hasNext(); i12++) {
            this.f33307e[i12] = it.next();
        }
        this.f33308i = size() + collection.size();
    }

    private final void e(int i10) {
        Object[] objArr = new Object[i10];
        Object[] objArr2 = this.f33307e;
        l.k(objArr2, objArr, 0, this.f33306d, objArr2.length);
        Object[] objArr3 = this.f33307e;
        int length = objArr3.length;
        int i11 = this.f33306d;
        l.k(objArr3, objArr, length - i11, 0, i11);
        this.f33306d = 0;
        this.f33307e = objArr;
    }

    private final int f(int i10) {
        if (i10 == 0) {
            return n.a0(this.f33307e);
        }
        return i10 - 1;
    }

    private final void g(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f33307e;
            if (i10 <= objArr.length) {
                return;
            }
            if (objArr == f33305p) {
                this.f33307e = new Object[kotlin.ranges.d.d(i10, 10)];
                return;
            } else {
                e(d.f33332d.e(objArr.length, i10));
                return;
            }
        }
        throw new IllegalStateException("Deque is too big.");
    }

    private final int h(int i10) {
        if (i10 == n.a0(this.f33307e)) {
            return 0;
        }
        return i10 + 1;
    }

    private final int i(int i10) {
        if (i10 < 0) {
            return i10 + this.f33307e.length;
        }
        return i10;
    }

    private final void j(int i10, int i11) {
        if (i10 < i11) {
            l.v(this.f33307e, null, i10, i11);
            return;
        }
        Object[] objArr = this.f33307e;
        l.v(objArr, null, i10, objArr.length);
        l.v(this.f33307e, null, 0, i11);
    }

    private final int k(int i10) {
        Object[] objArr = this.f33307e;
        if (i10 >= objArr.length) {
            return i10 - objArr.length;
        }
        return i10;
    }

    private final void m() {
        ((AbstractList) this).modCount++;
    }

    private final void p(int i10, int i11) {
        int k10 = k(this.f33306d + (i10 - 1));
        int k11 = k(this.f33306d + (i11 - 1));
        while (i10 > 0) {
            int i12 = k10 + 1;
            int min = Math.min(i10, Math.min(i12, k11 + 1));
            Object[] objArr = this.f33307e;
            int i13 = k11 - min;
            int i14 = k10 - min;
            l.k(objArr, objArr, i13 + 1, i14 + 1, i12);
            k10 = i(i14);
            k11 = i(i13);
            i10 -= min;
        }
    }

    private final void q(int i10, int i11) {
        int k10 = k(this.f33306d + i11);
        int k11 = k(this.f33306d + i10);
        int size = size();
        while (true) {
            size -= i11;
            if (size > 0) {
                Object[] objArr = this.f33307e;
                i11 = Math.min(size, Math.min(objArr.length - k10, objArr.length - k11));
                Object[] objArr2 = this.f33307e;
                int i12 = k10 + i11;
                l.k(objArr2, objArr2, k11, k10, i12);
                k10 = k(i12);
                k11 = k(k11 + i11);
            } else {
                return;
            }
        }
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean add(Object obj) {
        addLast(obj);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean addAll(Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        if (elements.isEmpty()) {
            return false;
        }
        m();
        g(size() + elements.size());
        d(k(this.f33306d + size()), elements);
        return true;
    }

    public final void addFirst(Object obj) {
        m();
        g(size() + 1);
        int f10 = f(this.f33306d);
        this.f33306d = f10;
        this.f33307e[f10] = obj;
        this.f33308i = size() + 1;
    }

    public final void addLast(Object obj) {
        m();
        g(size() + 1);
        this.f33307e[k(this.f33306d + size())] = obj;
        this.f33308i = size() + 1;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f33308i;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        d.f33332d.b(i10, size());
        if (i10 == t.n(this)) {
            return removeLast();
        }
        if (i10 == 0) {
            return removeFirst();
        }
        m();
        int k10 = k(this.f33306d + i10);
        Object obj = this.f33307e[k10];
        if (i10 < (size() >> 1)) {
            int i11 = this.f33306d;
            if (k10 >= i11) {
                Object[] objArr = this.f33307e;
                l.k(objArr, objArr, i11 + 1, i11, k10);
            } else {
                Object[] objArr2 = this.f33307e;
                l.k(objArr2, objArr2, 1, 0, k10);
                Object[] objArr3 = this.f33307e;
                objArr3[0] = objArr3[objArr3.length - 1];
                int i12 = this.f33306d;
                l.k(objArr3, objArr3, i12 + 1, i12, objArr3.length - 1);
            }
            Object[] objArr4 = this.f33307e;
            int i13 = this.f33306d;
            objArr4[i13] = null;
            this.f33306d = h(i13);
        } else {
            int k11 = k(this.f33306d + t.n(this));
            if (k10 <= k11) {
                Object[] objArr5 = this.f33307e;
                l.k(objArr5, objArr5, k10, k10 + 1, k11 + 1);
            } else {
                Object[] objArr6 = this.f33307e;
                l.k(objArr6, objArr6, k10, k10 + 1, objArr6.length);
                Object[] objArr7 = this.f33307e;
                objArr7[objArr7.length - 1] = objArr7[0];
                l.k(objArr7, objArr7, 0, 1, k11 + 1);
            }
            this.f33307e[k11] = null;
        }
        this.f33308i = size() - 1;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        if (!isEmpty()) {
            m();
            j(this.f33306d, k(this.f33306d + size()));
        }
        this.f33306d = 0;
        this.f33308i = 0;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean contains(Object obj) {
        if (indexOf(obj) != -1) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object get(int i10) {
        d.f33332d.b(i10, size());
        return this.f33307e[k(this.f33306d + i10)];
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        int i10;
        int k10 = k(this.f33306d + size());
        int i11 = this.f33306d;
        if (i11 < k10) {
            while (i11 < k10) {
                if (Intrinsics.areEqual(obj, this.f33307e[i11])) {
                    i10 = this.f33306d;
                } else {
                    i11++;
                }
            }
            return -1;
        } else if (i11 >= k10) {
            int length = this.f33307e.length;
            while (true) {
                if (i11 < length) {
                    if (Intrinsics.areEqual(obj, this.f33307e[i11])) {
                        i10 = this.f33306d;
                        break;
                    }
                    i11++;
                } else {
                    for (int i12 = 0; i12 < k10; i12++) {
                        if (Intrinsics.areEqual(obj, this.f33307e[i12])) {
                            i11 = i12 + this.f33307e.length;
                            i10 = this.f33306d;
                        }
                    }
                    return -1;
                }
            }
        } else {
            return -1;
        }
        return i11 - i10;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractList, java.util.List
    public int lastIndexOf(Object obj) {
        int a02;
        int i10;
        int k10 = k(this.f33306d + size());
        int i11 = this.f33306d;
        if (i11 < k10) {
            a02 = k10 - 1;
            if (i11 <= a02) {
                while (!Intrinsics.areEqual(obj, this.f33307e[a02])) {
                    if (a02 != i11) {
                        a02--;
                    }
                }
                i10 = this.f33306d;
                return a02 - i10;
            }
            return -1;
        }
        if (i11 > k10) {
            int i12 = k10 - 1;
            while (true) {
                if (-1 < i12) {
                    if (Intrinsics.areEqual(obj, this.f33307e[i12])) {
                        a02 = i12 + this.f33307e.length;
                        i10 = this.f33306d;
                        break;
                    }
                    i12--;
                } else {
                    a02 = n.a0(this.f33307e);
                    int i13 = this.f33306d;
                    if (i13 <= a02) {
                        while (!Intrinsics.areEqual(obj, this.f33307e[a02])) {
                            if (a02 != i13) {
                                a02--;
                            }
                        }
                        i10 = this.f33306d;
                    }
                }
            }
        }
        return -1;
    }

    public final Object n() {
        if (isEmpty()) {
            return null;
        }
        return removeFirst();
    }

    public final Object o() {
        if (isEmpty()) {
            return null;
        }
        return removeLast();
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean remove(Object obj) {
        int indexOf = indexOf(obj);
        if (indexOf == -1) {
            return false;
        }
        remove(indexOf);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean removeAll(Collection elements) {
        int k10;
        Intrinsics.checkNotNullParameter(elements, "elements");
        boolean z10 = false;
        z10 = false;
        z10 = false;
        if (!isEmpty() && this.f33307e.length != 0) {
            int k11 = k(this.f33306d + size());
            int i10 = this.f33306d;
            if (i10 < k11) {
                k10 = i10;
                while (i10 < k11) {
                    Object obj = this.f33307e[i10];
                    if (!elements.contains(obj)) {
                        this.f33307e[k10] = obj;
                        k10++;
                    } else {
                        z10 = true;
                    }
                    i10++;
                }
                l.v(this.f33307e, null, k10, k11);
            } else {
                int length = this.f33307e.length;
                boolean z11 = false;
                int i11 = i10;
                while (i10 < length) {
                    Object[] objArr = this.f33307e;
                    Object obj2 = objArr[i10];
                    objArr[i10] = null;
                    if (!elements.contains(obj2)) {
                        this.f33307e[i11] = obj2;
                        i11++;
                    } else {
                        z11 = true;
                    }
                    i10++;
                }
                k10 = k(i11);
                for (int i12 = 0; i12 < k11; i12++) {
                    Object[] objArr2 = this.f33307e;
                    Object obj3 = objArr2[i12];
                    objArr2[i12] = null;
                    if (!elements.contains(obj3)) {
                        this.f33307e[k10] = obj3;
                        k10 = h(k10);
                    } else {
                        z11 = true;
                    }
                }
                z10 = z11;
            }
            if (z10) {
                m();
                this.f33308i = i(k10 - this.f33306d);
            }
        }
        return z10;
    }

    public final Object removeFirst() {
        if (!isEmpty()) {
            m();
            Object[] objArr = this.f33307e;
            int i10 = this.f33306d;
            Object obj = objArr[i10];
            objArr[i10] = null;
            this.f33306d = h(i10);
            this.f33308i = size() - 1;
            return obj;
        }
        throw new NoSuchElementException("ArrayDeque is empty.");
    }

    public final Object removeLast() {
        if (!isEmpty()) {
            m();
            int k10 = k(this.f33306d + t.n(this));
            Object[] objArr = this.f33307e;
            Object obj = objArr[k10];
            objArr[k10] = null;
            this.f33308i = size() - 1;
            return obj;
        }
        throw new NoSuchElementException("ArrayDeque is empty.");
    }

    @Override // java.util.AbstractList
    protected void removeRange(int i10, int i11) {
        d.f33332d.d(i10, i11, size());
        int i12 = i11 - i10;
        if (i12 == 0) {
            return;
        }
        if (i12 == size()) {
            clear();
        } else if (i12 == 1) {
            remove(i10);
        } else {
            m();
            if (i10 < size() - i11) {
                p(i10, i11);
                int k10 = k(this.f33306d + i12);
                j(this.f33306d, k10);
                this.f33306d = k10;
            } else {
                q(i10, i11);
                int k11 = k(this.f33306d + size());
                j(i(k11 - i12), k11);
            }
            this.f33308i = size() - i12;
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        int k10;
        Intrinsics.checkNotNullParameter(elements, "elements");
        boolean z10 = false;
        z10 = false;
        z10 = false;
        if (!isEmpty() && this.f33307e.length != 0) {
            int k11 = k(this.f33306d + size());
            int i10 = this.f33306d;
            if (i10 < k11) {
                k10 = i10;
                while (i10 < k11) {
                    Object obj = this.f33307e[i10];
                    if (elements.contains(obj)) {
                        this.f33307e[k10] = obj;
                        k10++;
                    } else {
                        z10 = true;
                    }
                    i10++;
                }
                l.v(this.f33307e, null, k10, k11);
            } else {
                int length = this.f33307e.length;
                boolean z11 = false;
                int i11 = i10;
                while (i10 < length) {
                    Object[] objArr = this.f33307e;
                    Object obj2 = objArr[i10];
                    objArr[i10] = null;
                    if (elements.contains(obj2)) {
                        this.f33307e[i11] = obj2;
                        i11++;
                    } else {
                        z11 = true;
                    }
                    i10++;
                }
                k10 = k(i11);
                for (int i12 = 0; i12 < k11; i12++) {
                    Object[] objArr2 = this.f33307e;
                    Object obj3 = objArr2[i12];
                    objArr2[i12] = null;
                    if (elements.contains(obj3)) {
                        this.f33307e[k10] = obj3;
                        k10 = h(k10);
                    } else {
                        z11 = true;
                    }
                }
                z10 = z11;
            }
            if (z10) {
                m();
                this.f33308i = i(k10 - this.f33306d);
            }
        }
        return z10;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        d.f33332d.b(i10, size());
        int k10 = k(this.f33306d + i10);
        Object[] objArr = this.f33307e;
        Object obj2 = objArr[k10];
        objArr[k10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        if (array.length < size()) {
            array = j.a(array, size());
        }
        Object[] objArr = array;
        int k10 = k(this.f33306d + size());
        int i10 = this.f33306d;
        if (i10 < k10) {
            l.p(this.f33307e, objArr, 0, i10, k10, 2, null);
        } else if (!isEmpty()) {
            Object[] objArr2 = this.f33307e;
            l.k(objArr2, objArr, 0, this.f33306d, objArr2.length);
            Object[] objArr3 = this.f33307e;
            l.k(objArr3, objArr, objArr3.length - this.f33306d, 0, k10);
        }
        return s.f(size(), objArr);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        d.f33332d.c(i10, size());
        if (i10 == size()) {
            addLast(obj);
        } else if (i10 == 0) {
            addFirst(obj);
        } else {
            m();
            g(size() + 1);
            int k10 = k(this.f33306d + i10);
            if (i10 < ((size() + 1) >> 1)) {
                int f10 = f(k10);
                int f11 = f(this.f33306d);
                int i11 = this.f33306d;
                if (f10 >= i11) {
                    Object[] objArr = this.f33307e;
                    objArr[f11] = objArr[i11];
                    l.k(objArr, objArr, i11, i11 + 1, f10 + 1);
                } else {
                    Object[] objArr2 = this.f33307e;
                    l.k(objArr2, objArr2, i11 - 1, i11, objArr2.length);
                    Object[] objArr3 = this.f33307e;
                    objArr3[objArr3.length - 1] = objArr3[0];
                    l.k(objArr3, objArr3, 0, 1, f10 + 1);
                }
                this.f33307e[f10] = obj;
                this.f33306d = f11;
            } else {
                int k11 = k(this.f33306d + size());
                if (k10 < k11) {
                    Object[] objArr4 = this.f33307e;
                    l.k(objArr4, objArr4, k10 + 1, k10, k11);
                } else {
                    Object[] objArr5 = this.f33307e;
                    l.k(objArr5, objArr5, 1, 0, k11);
                    Object[] objArr6 = this.f33307e;
                    objArr6[0] = objArr6[objArr6.length - 1];
                    l.k(objArr6, objArr6, k10 + 1, k10, objArr6.length - 1);
                }
                this.f33307e[k10] = obj;
            }
            this.f33308i = size() + 1;
        }
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        d.f33332d.c(i10, size());
        if (elements.isEmpty()) {
            return false;
        }
        if (i10 == size()) {
            return addAll(elements);
        }
        m();
        g(size() + elements.size());
        int k10 = k(this.f33306d + size());
        int k11 = k(this.f33306d + i10);
        int size = elements.size();
        if (i10 < ((size() + 1) >> 1)) {
            int i11 = this.f33306d;
            int i12 = i11 - size;
            if (k11 < i11) {
                Object[] objArr = this.f33307e;
                l.k(objArr, objArr, i12, i11, objArr.length);
                if (size >= k11) {
                    Object[] objArr2 = this.f33307e;
                    l.k(objArr2, objArr2, objArr2.length - size, 0, k11);
                } else {
                    Object[] objArr3 = this.f33307e;
                    l.k(objArr3, objArr3, objArr3.length - size, 0, size);
                    Object[] objArr4 = this.f33307e;
                    l.k(objArr4, objArr4, 0, size, k11);
                }
            } else if (i12 >= 0) {
                Object[] objArr5 = this.f33307e;
                l.k(objArr5, objArr5, i12, i11, k11);
            } else {
                Object[] objArr6 = this.f33307e;
                i12 += objArr6.length;
                int i13 = k11 - i11;
                int length = objArr6.length - i12;
                if (length >= i13) {
                    l.k(objArr6, objArr6, i12, i11, k11);
                } else {
                    l.k(objArr6, objArr6, i12, i11, i11 + length);
                    Object[] objArr7 = this.f33307e;
                    l.k(objArr7, objArr7, 0, this.f33306d + length, k11);
                }
            }
            this.f33306d = i12;
            d(i(k11 - size), elements);
        } else {
            int i14 = k11 + size;
            if (k11 < k10) {
                int i15 = size + k10;
                Object[] objArr8 = this.f33307e;
                if (i15 <= objArr8.length) {
                    l.k(objArr8, objArr8, i14, k11, k10);
                } else if (i14 >= objArr8.length) {
                    l.k(objArr8, objArr8, i14 - objArr8.length, k11, k10);
                } else {
                    int length2 = k10 - (i15 - objArr8.length);
                    l.k(objArr8, objArr8, 0, length2, k10);
                    Object[] objArr9 = this.f33307e;
                    l.k(objArr9, objArr9, i14, k11, length2);
                }
            } else {
                Object[] objArr10 = this.f33307e;
                l.k(objArr10, objArr10, size, 0, k10);
                Object[] objArr11 = this.f33307e;
                if (i14 >= objArr11.length) {
                    l.k(objArr11, objArr11, i14 - objArr11.length, k11, objArr11.length);
                } else {
                    l.k(objArr11, objArr11, 0, objArr11.length - size, objArr11.length);
                    Object[] objArr12 = this.f33307e;
                    l.k(objArr12, objArr12, i14, k11, objArr12.length - size);
                }
            }
            d(k11, elements);
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return toArray(new Object[size()]);
    }
}
