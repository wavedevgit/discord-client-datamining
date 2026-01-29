package pg;

import java.io.Serializable;
import java.util.AbstractMap;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 extends AbstractMap implements Serializable {

    /* renamed from: u  reason: collision with root package name */
    private static final Object f45161u = new Object();

    /* renamed from: d  reason: collision with root package name */
    private transient Object f45162d;

    /* renamed from: e  reason: collision with root package name */
    transient int[] f45163e;

    /* renamed from: i  reason: collision with root package name */
    transient Object[] f45164i;

    /* renamed from: o  reason: collision with root package name */
    transient Object[] f45165o;

    /* renamed from: p  reason: collision with root package name */
    private transient int f45166p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f45167q;

    /* renamed from: r  reason: collision with root package name */
    private transient Set f45168r;

    /* renamed from: s  reason: collision with root package name */
    private transient Set f45169s;

    /* renamed from: t  reason: collision with root package name */
    private transient Collection f45170t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(int i10) {
        s(12);
    }

    private final int A(int i10, int i11, int i12, int i13) {
        int i14 = i11 - 1;
        Object d10 = d0.d(i11);
        if (i13 != 0) {
            d0.e(d10, i12 & i14, i13 + 1);
        }
        Object obj = this.f45162d;
        Objects.requireNonNull(obj);
        int[] a10 = a();
        for (int i15 = 0; i15 <= i10; i15++) {
            int c10 = d0.c(obj, i15);
            while (c10 != 0) {
                int i16 = c10 - 1;
                int i17 = a10[i16];
                int i18 = ((~i10) & i17) | i15;
                int i19 = i18 & i14;
                int c11 = d0.c(d10, i19);
                d0.e(d10, i19, c10);
                a10[i16] = ((~i14) & i18) | (c11 & i14);
                c10 = i17 & i10;
            }
        }
        this.f45162d = d10;
        C(i14);
        return i14;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object B(Object obj) {
        if (!u()) {
            int y10 = y();
            Object obj2 = this.f45162d;
            Objects.requireNonNull(obj2);
            int b10 = d0.b(obj, null, y10, obj2, a(), b(), null);
            if (b10 != -1) {
                Object obj3 = c()[b10];
                t(b10, y10);
                this.f45167q--;
                r();
                return obj3;
            }
        }
        return f45161u;
    }

    private final void C(int i10) {
        this.f45166p = ((32 - Integer.numberOfLeadingZeros(i10)) & 31) | (this.f45166p & (-32));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int[] a() {
        int[] iArr = this.f45163e;
        Objects.requireNonNull(iArr);
        return iArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] b() {
        Object[] objArr = this.f45164i;
        Objects.requireNonNull(objArr);
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] c() {
        Object[] objArr = this.f45165o;
        Objects.requireNonNull(objArr);
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object j(c0 c0Var, int i10) {
        return c0Var.b()[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object l(c0 c0Var) {
        Object obj = c0Var.f45162d;
        Objects.requireNonNull(obj);
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object m(c0 c0Var, int i10) {
        return c0Var.c()[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void q(c0 c0Var, int i10, Object obj) {
        c0Var.c()[i10] = obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int y() {
        return (1 << (this.f45166p & 31)) - 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int z(Object obj) {
        if (u()) {
            return -1;
        }
        int a10 = e0.a(obj);
        int y10 = y();
        Object obj2 = this.f45162d;
        Objects.requireNonNull(obj2);
        int c10 = d0.c(obj2, a10 & y10);
        if (c10 == 0) {
            return -1;
        }
        int i10 = ~y10;
        int i11 = a10 & i10;
        do {
            int i12 = c10 - 1;
            int i13 = a()[i12];
            if ((i13 & i10) == i11 && dl.a(obj, b()[i12])) {
                return i12;
            }
            c10 = i13 & y10;
        } while (c10 != 0);
        return -1;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        if (u()) {
            return;
        }
        r();
        Map o10 = o();
        if (o10 != null) {
            this.f45166p = s1.a(size(), 3, 1073741823);
            o10.clear();
            this.f45162d = null;
            this.f45167q = 0;
            return;
        }
        Arrays.fill(b(), 0, this.f45167q, (Object) null);
        Arrays.fill(c(), 0, this.f45167q, (Object) null);
        Object obj = this.f45162d;
        Objects.requireNonNull(obj);
        if (obj instanceof byte[]) {
            Arrays.fill((byte[]) obj, (byte) 0);
        } else if (obj instanceof short[]) {
            Arrays.fill((short[]) obj, (short) 0);
        } else {
            Arrays.fill((int[]) obj, 0);
        }
        Arrays.fill(a(), 0, this.f45167q, 0);
        this.f45167q = 0;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        Map o10 = o();
        if (o10 != null) {
            return o10.containsKey(obj);
        }
        if (z(obj) == -1) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsValue(Object obj) {
        Map o10 = o();
        if (o10 == null) {
            for (int i10 = 0; i10 < this.f45167q; i10++) {
                if (dl.a(obj, c()[i10])) {
                    return true;
                }
            }
            return false;
        }
        return o10.containsValue(obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        Set set = this.f45169s;
        if (set == null) {
            v vVar = new v(this);
            this.f45169s = vVar;
            return vVar;
        }
        return set;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object get(Object obj) {
        Map o10 = o();
        if (o10 != null) {
            return o10.get(obj);
        }
        int z10 = z(obj);
        if (z10 == -1) {
            return null;
        }
        return c()[z10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int h() {
        if (isEmpty()) {
            return -1;
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int i(int i10) {
        int i11 = i10 + 1;
        if (i11 < this.f45167q) {
            return i11;
        }
        return -1;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set keySet() {
        Set set = this.f45168r;
        if (set == null) {
            y yVar = new y(this);
            this.f45168r = yVar;
            return yVar;
        }
        return set;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map o() {
        Object obj = this.f45162d;
        if (obj instanceof Map) {
            return (Map) obj;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object put(Object obj, Object obj2) {
        int i10;
        if (u()) {
            el.d(u(), "Arrays already allocated");
            int i11 = this.f45166p;
            int max = Math.max(i11 + 1, 2);
            int highestOneBit = Integer.highestOneBit(max);
            if (max > highestOneBit && (highestOneBit = highestOneBit + highestOneBit) <= 0) {
                highestOneBit = 1073741824;
            }
            int max2 = Math.max(4, highestOneBit);
            this.f45162d = d0.d(max2);
            C(max2 - 1);
            this.f45163e = new int[i11];
            this.f45164i = new Object[i11];
            this.f45165o = new Object[i11];
        }
        Map o10 = o();
        if (o10 != null) {
            return o10.put(obj, obj2);
        }
        int[] a10 = a();
        Object[] b10 = b();
        Object[] c10 = c();
        int i12 = this.f45167q;
        int i13 = i12 + 1;
        int a11 = e0.a(obj);
        int y10 = y();
        int i14 = a11 & y10;
        Object obj3 = this.f45162d;
        Objects.requireNonNull(obj3);
        int c11 = d0.c(obj3, i14);
        if (c11 == 0) {
            if (i13 > y10) {
                y10 = A(y10, d0.a(y10), a11, i12);
            } else {
                Object obj4 = this.f45162d;
                Objects.requireNonNull(obj4);
                d0.e(obj4, i14, i13);
            }
            i10 = 1;
        } else {
            int i15 = ~y10;
            int i16 = a11 & i15;
            int i17 = 0;
            while (true) {
                int i18 = c11 - 1;
                int i19 = a10[i18];
                i10 = 1;
                int i20 = i19 & i15;
                if (i20 == i16 && dl.a(obj, b10[i18])) {
                    Object obj5 = c10[i18];
                    c10[i18] = obj2;
                    return obj5;
                }
                int i21 = i19 & y10;
                i17++;
                if (i21 == 0) {
                    if (i17 >= 9) {
                        LinkedHashMap linkedHashMap = new LinkedHashMap(y() + 1, 1.0f);
                        int h10 = h();
                        while (h10 >= 0) {
                            linkedHashMap.put(b()[h10], c()[h10]);
                            h10 = i(h10);
                        }
                        this.f45162d = linkedHashMap;
                        this.f45163e = null;
                        this.f45164i = null;
                        this.f45165o = null;
                        r();
                        return linkedHashMap.put(obj, obj2);
                    } else if (i13 > y10) {
                        y10 = A(y10, d0.a(y10), a11, i12);
                    } else {
                        a10[i18] = (i13 & y10) | i20;
                    }
                } else {
                    c11 = i21;
                }
            }
        }
        int length = a().length;
        if (i13 > length) {
            int i22 = i10;
            int min = Math.min(1073741823, (Math.max(i22, length >>> 1) + length) | i22);
            if (min != length) {
                this.f45163e = Arrays.copyOf(a(), min);
                this.f45164i = Arrays.copyOf(b(), min);
                this.f45165o = Arrays.copyOf(c(), min);
            }
        }
        a()[i12] = (~y10) & a11;
        b()[i12] = obj;
        c()[i12] = obj2;
        this.f45167q = i13;
        r();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void r() {
        this.f45166p += 32;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object remove(Object obj) {
        Map o10 = o();
        if (o10 != null) {
            return o10.remove(obj);
        }
        Object B = B(obj);
        if (B == f45161u) {
            return null;
        }
        return B;
    }

    final void s(int i10) {
        this.f45166p = s1.a(i10, 1, 1073741823);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        Map o10 = o();
        if (o10 != null) {
            return o10.size();
        }
        return this.f45167q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void t(int i10, int i11) {
        Object obj = this.f45162d;
        Objects.requireNonNull(obj);
        int[] a10 = a();
        Object[] b10 = b();
        Object[] c10 = c();
        int size = size();
        int i12 = size - 1;
        if (i10 < i12) {
            int i13 = i10 + 1;
            Object obj2 = b10[i12];
            b10[i10] = obj2;
            c10[i10] = c10[i12];
            b10[i12] = null;
            c10[i12] = null;
            a10[i10] = a10[i12];
            a10[i12] = 0;
            int a11 = e0.a(obj2) & i11;
            int c11 = d0.c(obj, a11);
            if (c11 == size) {
                d0.e(obj, a11, i13);
                return;
            }
            while (true) {
                int i14 = c11 - 1;
                int i15 = a10[i14];
                int i16 = i15 & i11;
                if (i16 != size) {
                    c11 = i16;
                } else {
                    a10[i14] = (i15 & (~i11)) | (i11 & i13);
                    return;
                }
            }
        } else {
            b10[i10] = null;
            c10[i10] = null;
            a10[i10] = 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean u() {
        if (this.f45162d == null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Collection values() {
        Collection collection = this.f45170t;
        if (collection == null) {
            a0 a0Var = new a0(this);
            this.f45170t = a0Var;
            return a0Var;
        }
        return collection;
    }
}
