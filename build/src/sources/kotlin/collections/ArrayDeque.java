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
    public static final a f31994o = new a(null);

    /* renamed from: p  reason: collision with root package name */
    private static final Object[] f31995p = new Object[0];

    /* renamed from: d  reason: collision with root package name */
    private int f31996d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f31997e = f31995p;

    /* renamed from: i  reason: collision with root package name */
    private int f31998i;

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
        int length = this.f31997e.length;
        while (i10 < length && it.hasNext()) {
            this.f31997e[i10] = it.next();
            i10++;
        }
        int i11 = this.f31996d;
        for (int i12 = 0; i12 < i11 && it.hasNext(); i12++) {
            this.f31997e[i12] = it.next();
        }
        this.f31998i = size() + collection.size();
    }

    private final void e(int i10) {
        Object[] objArr = new Object[i10];
        Object[] objArr2 = this.f31997e;
        l.k(objArr2, objArr, 0, this.f31996d, objArr2.length);
        Object[] objArr3 = this.f31997e;
        int length = objArr3.length;
        int i11 = this.f31996d;
        l.k(objArr3, objArr, length - i11, 0, i11);
        this.f31996d = 0;
        this.f31997e = objArr;
    }

    private final int f(int i10) {
        if (i10 == 0) {
            return n.a0(this.f31997e);
        }
        return i10 - 1;
    }

    private final void g(int i10) {
        if (i10 >= 0) {
            Object[] objArr = this.f31997e;
            if (i10 <= objArr.length) {
                return;
            }
            if (objArr == f31995p) {
                this.f31997e = new Object[kotlin.ranges.d.d(i10, 10)];
                return;
            } else {
                e(d.f32022d.e(objArr.length, i10));
                return;
            }
        }
        throw new IllegalStateException("Deque is too big.");
    }

    private final int h(int i10) {
        if (i10 == n.a0(this.f31997e)) {
            return 0;
        }
        return i10 + 1;
    }

    private final int i(int i10) {
        if (i10 < 0) {
            return i10 + this.f31997e.length;
        }
        return i10;
    }

    private final void j(int i10, int i11) {
        if (i10 < i11) {
            l.v(this.f31997e, null, i10, i11);
            return;
        }
        Object[] objArr = this.f31997e;
        l.v(objArr, null, i10, objArr.length);
        l.v(this.f31997e, null, 0, i11);
    }

    private final int l(int i10) {
        Object[] objArr = this.f31997e;
        if (i10 >= objArr.length) {
            return i10 - objArr.length;
        }
        return i10;
    }

    private final void n() {
        ((AbstractList) this).modCount++;
    }

    private final void q(int i10, int i11) {
        int l10 = l(this.f31996d + (i10 - 1));
        int l11 = l(this.f31996d + (i11 - 1));
        while (i10 > 0) {
            int i12 = l10 + 1;
            int min = Math.min(i10, Math.min(i12, l11 + 1));
            Object[] objArr = this.f31997e;
            int i13 = l11 - min;
            int i14 = l10 - min;
            l.k(objArr, objArr, i13 + 1, i14 + 1, i12);
            l10 = i(i14);
            l11 = i(i13);
            i10 -= min;
        }
    }

    private final void r(int i10, int i11) {
        int l10 = l(this.f31996d + i11);
        int l11 = l(this.f31996d + i10);
        int size = size();
        while (true) {
            size -= i11;
            if (size > 0) {
                Object[] objArr = this.f31997e;
                i11 = Math.min(size, Math.min(objArr.length - l10, objArr.length - l11));
                Object[] objArr2 = this.f31997e;
                int i12 = l10 + i11;
                l.k(objArr2, objArr2, l11, l10, i12);
                l10 = l(i12);
                l11 = l(l11 + i11);
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
        n();
        g(size() + elements.size());
        d(l(this.f31996d + size()), elements);
        return true;
    }

    public final void addFirst(Object obj) {
        n();
        g(size() + 1);
        int f10 = f(this.f31996d);
        this.f31996d = f10;
        this.f31997e[f10] = obj;
        this.f31998i = size() + 1;
    }

    public final void addLast(Object obj) {
        n();
        g(size() + 1);
        this.f31997e[l(this.f31996d + size())] = obj;
        this.f31998i = size() + 1;
    }

    @Override // kotlin.collections.f
    public int b() {
        return this.f31998i;
    }

    @Override // kotlin.collections.f
    public Object c(int i10) {
        d.f32022d.b(i10, size());
        if (i10 == t.n(this)) {
            return removeLast();
        }
        if (i10 == 0) {
            return removeFirst();
        }
        n();
        int l10 = l(this.f31996d + i10);
        Object obj = this.f31997e[l10];
        if (i10 < (size() >> 1)) {
            int i11 = this.f31996d;
            if (l10 >= i11) {
                Object[] objArr = this.f31997e;
                l.k(objArr, objArr, i11 + 1, i11, l10);
            } else {
                Object[] objArr2 = this.f31997e;
                l.k(objArr2, objArr2, 1, 0, l10);
                Object[] objArr3 = this.f31997e;
                objArr3[0] = objArr3[objArr3.length - 1];
                int i12 = this.f31996d;
                l.k(objArr3, objArr3, i12 + 1, i12, objArr3.length - 1);
            }
            Object[] objArr4 = this.f31997e;
            int i13 = this.f31996d;
            objArr4[i13] = null;
            this.f31996d = h(i13);
        } else {
            int l11 = l(this.f31996d + t.n(this));
            if (l10 <= l11) {
                Object[] objArr5 = this.f31997e;
                l.k(objArr5, objArr5, l10, l10 + 1, l11 + 1);
            } else {
                Object[] objArr6 = this.f31997e;
                l.k(objArr6, objArr6, l10, l10 + 1, objArr6.length);
                Object[] objArr7 = this.f31997e;
                objArr7[objArr7.length - 1] = objArr7[0];
                l.k(objArr7, objArr7, 0, 1, l11 + 1);
            }
            this.f31997e[l11] = null;
        }
        this.f31998i = size() - 1;
        return obj;
    }

    @Override // java.util.AbstractList, java.util.AbstractCollection, java.util.Collection, java.util.List
    public void clear() {
        if (!isEmpty()) {
            n();
            j(this.f31996d, l(this.f31996d + size()));
        }
        this.f31996d = 0;
        this.f31998i = 0;
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
        d.f32022d.b(i10, size());
        return this.f31997e[l(this.f31996d + i10)];
    }

    @Override // java.util.AbstractList, java.util.List
    public int indexOf(Object obj) {
        int i10;
        int l10 = l(this.f31996d + size());
        int i11 = this.f31996d;
        if (i11 < l10) {
            while (i11 < l10) {
                if (Intrinsics.areEqual(obj, this.f31997e[i11])) {
                    i10 = this.f31996d;
                } else {
                    i11++;
                }
            }
            return -1;
        } else if (i11 >= l10) {
            int length = this.f31997e.length;
            while (true) {
                if (i11 < length) {
                    if (Intrinsics.areEqual(obj, this.f31997e[i11])) {
                        i10 = this.f31996d;
                        break;
                    }
                    i11++;
                } else {
                    for (int i12 = 0; i12 < l10; i12++) {
                        if (Intrinsics.areEqual(obj, this.f31997e[i12])) {
                            i11 = i12 + this.f31997e.length;
                            i10 = this.f31996d;
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
        int l10 = l(this.f31996d + size());
        int i11 = this.f31996d;
        if (i11 < l10) {
            a02 = l10 - 1;
            if (i11 <= a02) {
                while (!Intrinsics.areEqual(obj, this.f31997e[a02])) {
                    if (a02 != i11) {
                        a02--;
                    }
                }
                i10 = this.f31996d;
                return a02 - i10;
            }
            return -1;
        }
        if (i11 > l10) {
            int i12 = l10 - 1;
            while (true) {
                if (-1 < i12) {
                    if (Intrinsics.areEqual(obj, this.f31997e[i12])) {
                        a02 = i12 + this.f31997e.length;
                        i10 = this.f31996d;
                        break;
                    }
                    i12--;
                } else {
                    a02 = n.a0(this.f31997e);
                    int i13 = this.f31996d;
                    if (i13 <= a02) {
                        while (!Intrinsics.areEqual(obj, this.f31997e[a02])) {
                            if (a02 != i13) {
                                a02--;
                            }
                        }
                        i10 = this.f31996d;
                    }
                }
            }
        }
        return -1;
    }

    public final Object o() {
        if (isEmpty()) {
            return null;
        }
        return removeFirst();
    }

    public final Object p() {
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
        int l10;
        Intrinsics.checkNotNullParameter(elements, "elements");
        boolean z10 = false;
        z10 = false;
        z10 = false;
        if (!isEmpty() && this.f31997e.length != 0) {
            int l11 = l(this.f31996d + size());
            int i10 = this.f31996d;
            if (i10 < l11) {
                l10 = i10;
                while (i10 < l11) {
                    Object obj = this.f31997e[i10];
                    if (!elements.contains(obj)) {
                        this.f31997e[l10] = obj;
                        l10++;
                    } else {
                        z10 = true;
                    }
                    i10++;
                }
                l.v(this.f31997e, null, l10, l11);
            } else {
                int length = this.f31997e.length;
                boolean z11 = false;
                int i11 = i10;
                while (i10 < length) {
                    Object[] objArr = this.f31997e;
                    Object obj2 = objArr[i10];
                    objArr[i10] = null;
                    if (!elements.contains(obj2)) {
                        this.f31997e[i11] = obj2;
                        i11++;
                    } else {
                        z11 = true;
                    }
                    i10++;
                }
                l10 = l(i11);
                for (int i12 = 0; i12 < l11; i12++) {
                    Object[] objArr2 = this.f31997e;
                    Object obj3 = objArr2[i12];
                    objArr2[i12] = null;
                    if (!elements.contains(obj3)) {
                        this.f31997e[l10] = obj3;
                        l10 = h(l10);
                    } else {
                        z11 = true;
                    }
                }
                z10 = z11;
            }
            if (z10) {
                n();
                this.f31998i = i(l10 - this.f31996d);
            }
        }
        return z10;
    }

    public final Object removeFirst() {
        if (!isEmpty()) {
            n();
            Object[] objArr = this.f31997e;
            int i10 = this.f31996d;
            Object obj = objArr[i10];
            objArr[i10] = null;
            this.f31996d = h(i10);
            this.f31998i = size() - 1;
            return obj;
        }
        throw new NoSuchElementException("ArrayDeque is empty.");
    }

    public final Object removeLast() {
        if (!isEmpty()) {
            n();
            int l10 = l(this.f31996d + t.n(this));
            Object[] objArr = this.f31997e;
            Object obj = objArr[l10];
            objArr[l10] = null;
            this.f31998i = size() - 1;
            return obj;
        }
        throw new NoSuchElementException("ArrayDeque is empty.");
    }

    @Override // java.util.AbstractList
    protected void removeRange(int i10, int i11) {
        d.f32022d.d(i10, i11, size());
        int i12 = i11 - i10;
        if (i12 == 0) {
            return;
        }
        if (i12 == size()) {
            clear();
        } else if (i12 == 1) {
            remove(i10);
        } else {
            n();
            if (i10 < size() - i11) {
                q(i10, i11);
                int l10 = l(this.f31996d + i12);
                j(this.f31996d, l10);
                this.f31996d = l10;
            } else {
                r(i10, i11);
                int l11 = l(this.f31996d + size());
                j(i(l11 - i12), l11);
            }
            this.f31998i = size() - i12;
        }
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public boolean retainAll(Collection elements) {
        int l10;
        Intrinsics.checkNotNullParameter(elements, "elements");
        boolean z10 = false;
        z10 = false;
        z10 = false;
        if (!isEmpty() && this.f31997e.length != 0) {
            int l11 = l(this.f31996d + size());
            int i10 = this.f31996d;
            if (i10 < l11) {
                l10 = i10;
                while (i10 < l11) {
                    Object obj = this.f31997e[i10];
                    if (elements.contains(obj)) {
                        this.f31997e[l10] = obj;
                        l10++;
                    } else {
                        z10 = true;
                    }
                    i10++;
                }
                l.v(this.f31997e, null, l10, l11);
            } else {
                int length = this.f31997e.length;
                boolean z11 = false;
                int i11 = i10;
                while (i10 < length) {
                    Object[] objArr = this.f31997e;
                    Object obj2 = objArr[i10];
                    objArr[i10] = null;
                    if (elements.contains(obj2)) {
                        this.f31997e[i11] = obj2;
                        i11++;
                    } else {
                        z11 = true;
                    }
                    i10++;
                }
                l10 = l(i11);
                for (int i12 = 0; i12 < l11; i12++) {
                    Object[] objArr2 = this.f31997e;
                    Object obj3 = objArr2[i12];
                    objArr2[i12] = null;
                    if (elements.contains(obj3)) {
                        this.f31997e[l10] = obj3;
                        l10 = h(l10);
                    } else {
                        z11 = true;
                    }
                }
                z10 = z11;
            }
            if (z10) {
                n();
                this.f31998i = i(l10 - this.f31996d);
            }
        }
        return z10;
    }

    @Override // java.util.AbstractList, java.util.List
    public Object set(int i10, Object obj) {
        d.f32022d.b(i10, size());
        int l10 = l(this.f31996d + i10);
        Object[] objArr = this.f31997e;
        Object obj2 = objArr[l10];
        objArr[l10] = obj;
        return obj2;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        if (array.length < size()) {
            array = j.a(array, size());
        }
        Object[] objArr = array;
        int l10 = l(this.f31996d + size());
        int i10 = this.f31996d;
        if (i10 < l10) {
            l.p(this.f31997e, objArr, 0, i10, l10, 2, null);
        } else if (!isEmpty()) {
            Object[] objArr2 = this.f31997e;
            l.k(objArr2, objArr, 0, this.f31996d, objArr2.length);
            Object[] objArr3 = this.f31997e;
            l.k(objArr3, objArr, objArr3.length - this.f31996d, 0, l10);
        }
        return s.f(size(), objArr);
    }

    @Override // java.util.AbstractList, java.util.List
    public void add(int i10, Object obj) {
        d.f32022d.c(i10, size());
        if (i10 == size()) {
            addLast(obj);
        } else if (i10 == 0) {
            addFirst(obj);
        } else {
            n();
            g(size() + 1);
            int l10 = l(this.f31996d + i10);
            if (i10 < ((size() + 1) >> 1)) {
                int f10 = f(l10);
                int f11 = f(this.f31996d);
                int i11 = this.f31996d;
                if (f10 >= i11) {
                    Object[] objArr = this.f31997e;
                    objArr[f11] = objArr[i11];
                    l.k(objArr, objArr, i11, i11 + 1, f10 + 1);
                } else {
                    Object[] objArr2 = this.f31997e;
                    l.k(objArr2, objArr2, i11 - 1, i11, objArr2.length);
                    Object[] objArr3 = this.f31997e;
                    objArr3[objArr3.length - 1] = objArr3[0];
                    l.k(objArr3, objArr3, 0, 1, f10 + 1);
                }
                this.f31997e[f10] = obj;
                this.f31996d = f11;
            } else {
                int l11 = l(this.f31996d + size());
                if (l10 < l11) {
                    Object[] objArr4 = this.f31997e;
                    l.k(objArr4, objArr4, l10 + 1, l10, l11);
                } else {
                    Object[] objArr5 = this.f31997e;
                    l.k(objArr5, objArr5, 1, 0, l11);
                    Object[] objArr6 = this.f31997e;
                    objArr6[0] = objArr6[objArr6.length - 1];
                    l.k(objArr6, objArr6, l10 + 1, l10, objArr6.length - 1);
                }
                this.f31997e[l10] = obj;
            }
            this.f31998i = size() + 1;
        }
    }

    @Override // java.util.AbstractList, java.util.List
    public boolean addAll(int i10, Collection elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        d.f32022d.c(i10, size());
        if (elements.isEmpty()) {
            return false;
        }
        if (i10 == size()) {
            return addAll(elements);
        }
        n();
        g(size() + elements.size());
        int l10 = l(this.f31996d + size());
        int l11 = l(this.f31996d + i10);
        int size = elements.size();
        if (i10 < ((size() + 1) >> 1)) {
            int i11 = this.f31996d;
            int i12 = i11 - size;
            if (l11 < i11) {
                Object[] objArr = this.f31997e;
                l.k(objArr, objArr, i12, i11, objArr.length);
                if (size >= l11) {
                    Object[] objArr2 = this.f31997e;
                    l.k(objArr2, objArr2, objArr2.length - size, 0, l11);
                } else {
                    Object[] objArr3 = this.f31997e;
                    l.k(objArr3, objArr3, objArr3.length - size, 0, size);
                    Object[] objArr4 = this.f31997e;
                    l.k(objArr4, objArr4, 0, size, l11);
                }
            } else if (i12 >= 0) {
                Object[] objArr5 = this.f31997e;
                l.k(objArr5, objArr5, i12, i11, l11);
            } else {
                Object[] objArr6 = this.f31997e;
                i12 += objArr6.length;
                int i13 = l11 - i11;
                int length = objArr6.length - i12;
                if (length >= i13) {
                    l.k(objArr6, objArr6, i12, i11, l11);
                } else {
                    l.k(objArr6, objArr6, i12, i11, i11 + length);
                    Object[] objArr7 = this.f31997e;
                    l.k(objArr7, objArr7, 0, this.f31996d + length, l11);
                }
            }
            this.f31996d = i12;
            d(i(l11 - size), elements);
        } else {
            int i14 = l11 + size;
            if (l11 < l10) {
                int i15 = size + l10;
                Object[] objArr8 = this.f31997e;
                if (i15 <= objArr8.length) {
                    l.k(objArr8, objArr8, i14, l11, l10);
                } else if (i14 >= objArr8.length) {
                    l.k(objArr8, objArr8, i14 - objArr8.length, l11, l10);
                } else {
                    int length2 = l10 - (i15 - objArr8.length);
                    l.k(objArr8, objArr8, 0, length2, l10);
                    Object[] objArr9 = this.f31997e;
                    l.k(objArr9, objArr9, i14, l11, length2);
                }
            } else {
                Object[] objArr10 = this.f31997e;
                l.k(objArr10, objArr10, size, 0, l10);
                Object[] objArr11 = this.f31997e;
                if (i14 >= objArr11.length) {
                    l.k(objArr11, objArr11, i14 - objArr11.length, l11, objArr11.length);
                } else {
                    l.k(objArr11, objArr11, 0, objArr11.length - size, objArr11.length);
                    Object[] objArr12 = this.f31997e;
                    l.k(objArr12, objArr12, i14, l11, objArr12.length - size);
                }
            }
            d(l11, elements);
        }
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
    public Object[] toArray() {
        return toArray(new Object[size()]);
    }
}
