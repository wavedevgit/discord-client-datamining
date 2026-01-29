package og;

import java.io.Serializable;
import java.util.AbstractMap;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f0 extends AbstractMap implements Serializable {

    /* renamed from: u  reason: collision with root package name */
    private static final Object f43002u = new Object();

    /* renamed from: d  reason: collision with root package name */
    private transient Object f43003d;

    /* renamed from: e  reason: collision with root package name */
    transient int[] f43004e;

    /* renamed from: i  reason: collision with root package name */
    transient Object[] f43005i;

    /* renamed from: o  reason: collision with root package name */
    transient Object[] f43006o;

    /* renamed from: p  reason: collision with root package name */
    private transient int f43007p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f43008q;

    /* renamed from: r  reason: collision with root package name */
    private transient Set f43009r;

    /* renamed from: s  reason: collision with root package name */
    private transient Set f43010s;

    /* renamed from: t  reason: collision with root package name */
    private transient Collection f43011t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f0(int i10) {
        q(12);
    }

    private final void A(int i10) {
        this.f43007p = ((32 - Integer.numberOfLeadingZeros(i10)) & 31) | (this.f43007p & (-32));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int[] B() {
        int[] iArr = this.f43004e;
        iArr.getClass();
        return iArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] a() {
        Object[] objArr = this.f43005i;
        objArr.getClass();
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] b() {
        Object[] objArr = this.f43006o;
        objArr.getClass();
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ int d(f0 f0Var) {
        int i10 = f0Var.f43008q;
        f0Var.f43008q = i10 - 1;
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object i(f0 f0Var, int i10) {
        return f0Var.a()[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object l(f0 f0Var, int i10) {
        return f0Var.b()[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object m(f0 f0Var) {
        Object obj = f0Var.f43003d;
        obj.getClass();
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void o(f0 f0Var, int i10, Object obj) {
        f0Var.b()[i10] = obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int w() {
        return (1 << (this.f43007p & 31)) - 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int x(Object obj) {
        if (s()) {
            return -1;
        }
        int a10 = h0.a(obj);
        int w10 = w();
        Object obj2 = this.f43003d;
        obj2.getClass();
        int c10 = g0.c(obj2, a10 & w10);
        if (c10 == 0) {
            return -1;
        }
        int i10 = ~w10;
        int i11 = a10 & i10;
        do {
            int i12 = c10 - 1;
            int i13 = B()[i12];
            if ((i13 & i10) == i11 && ze.a(obj, a()[i12])) {
                return i12;
            }
            c10 = i13 & w10;
        } while (c10 != 0);
        return -1;
    }

    private final int y(int i10, int i11, int i12, int i13) {
        Object d10 = g0.d(i11);
        int i14 = i11 - 1;
        if (i13 != 0) {
            g0.e(d10, i12 & i14, i13 + 1);
        }
        Object obj = this.f43003d;
        obj.getClass();
        int[] B = B();
        for (int i15 = 0; i15 <= i10; i15++) {
            int c10 = g0.c(obj, i15);
            while (c10 != 0) {
                int i16 = c10 - 1;
                int i17 = B[i16];
                int i18 = ((~i10) & i17) | i15;
                int i19 = i18 & i14;
                int c11 = g0.c(d10, i19);
                g0.e(d10, i19, c10);
                B[i16] = ((~i14) & i18) | (c11 & i14);
                c10 = i17 & i10;
            }
        }
        this.f43003d = d10;
        A(i14);
        return i14;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object z(Object obj) {
        if (s()) {
            return f43002u;
        }
        int w10 = w();
        Object obj2 = this.f43003d;
        obj2.getClass();
        int b10 = g0.b(obj, null, w10, obj2, B(), a(), null);
        if (b10 == -1) {
            return f43002u;
        }
        Object obj3 = b()[b10];
        r(b10, w10);
        this.f43008q--;
        p();
        return obj3;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final void clear() {
        if (s()) {
            return;
        }
        p();
        Map n10 = n();
        if (n10 != null) {
            this.f43007p = p1.a(size(), 3, 1073741823);
            n10.clear();
            this.f43003d = null;
            this.f43008q = 0;
            return;
        }
        Arrays.fill(a(), 0, this.f43008q, (Object) null);
        Arrays.fill(b(), 0, this.f43008q, (Object) null);
        Object obj = this.f43003d;
        obj.getClass();
        if (obj instanceof byte[]) {
            Arrays.fill((byte[]) obj, (byte) 0);
        } else if (obj instanceof short[]) {
            Arrays.fill((short[]) obj, (short) 0);
        } else {
            Arrays.fill((int[]) obj, 0);
        }
        Arrays.fill(B(), 0, this.f43008q, 0);
        this.f43008q = 0;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsKey(Object obj) {
        Map n10 = n();
        if (n10 != null) {
            return n10.containsKey(obj);
        }
        if (x(obj) == -1) {
            return false;
        }
        return true;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final boolean containsValue(Object obj) {
        Map n10 = n();
        if (n10 == null) {
            for (int i10 = 0; i10 < this.f43008q; i10++) {
                if (ze.a(obj, b()[i10])) {
                    return true;
                }
            }
            return false;
        }
        return n10.containsValue(obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        Set set = this.f43010s;
        if (set == null) {
            z zVar = new z(this);
            this.f43010s = zVar;
            return zVar;
        }
        return set;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int g() {
        if (isEmpty()) {
            return -1;
        }
        return 0;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object get(Object obj) {
        Map n10 = n();
        if (n10 != null) {
            return n10.get(obj);
        }
        int x10 = x(obj);
        if (x10 == -1) {
            return null;
        }
        return b()[x10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int h(int i10) {
        int i11 = i10 + 1;
        if (i11 < this.f43008q) {
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
        Set set = this.f43009r;
        if (set == null) {
            c0 c0Var = new c0(this);
            this.f43009r = c0Var;
            return c0Var;
        }
        return set;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map n() {
        Object obj = this.f43003d;
        if (obj instanceof Map) {
            return (Map) obj;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void p() {
        this.f43007p += 32;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object put(Object obj, Object obj2) {
        int i10;
        if (s()) {
            c.d(s(), "Arrays already allocated");
            int i11 = this.f43007p;
            int max = Math.max(i11 + 1, 2);
            int highestOneBit = Integer.highestOneBit(max);
            if (max > highestOneBit && (highestOneBit = highestOneBit + highestOneBit) <= 0) {
                highestOneBit = 1073741824;
            }
            int max2 = Math.max(4, highestOneBit);
            this.f43003d = g0.d(max2);
            A(max2 - 1);
            this.f43004e = new int[i11];
            this.f43005i = new Object[i11];
            this.f43006o = new Object[i11];
        }
        Map n10 = n();
        if (n10 != null) {
            return n10.put(obj, obj2);
        }
        int[] B = B();
        Object[] a10 = a();
        Object[] b10 = b();
        int i12 = this.f43008q;
        int i13 = i12 + 1;
        int a11 = h0.a(obj);
        int w10 = w();
        int i14 = a11 & w10;
        Object obj3 = this.f43003d;
        obj3.getClass();
        int c10 = g0.c(obj3, i14);
        if (c10 == 0) {
            if (i13 > w10) {
                w10 = y(w10, g0.a(w10), a11, i12);
            } else {
                Object obj4 = this.f43003d;
                obj4.getClass();
                g0.e(obj4, i14, i13);
            }
            i10 = 1;
        } else {
            int i15 = ~w10;
            int i16 = a11 & i15;
            int i17 = 0;
            while (true) {
                int i18 = c10 - 1;
                int i19 = B[i18];
                i10 = 1;
                int i20 = i19 & i15;
                if (i20 == i16 && ze.a(obj, a10[i18])) {
                    Object obj5 = b10[i18];
                    b10[i18] = obj2;
                    return obj5;
                }
                int i21 = i19 & w10;
                i17++;
                if (i21 == 0) {
                    if (i17 >= 9) {
                        LinkedHashMap linkedHashMap = new LinkedHashMap(w() + 1, 1.0f);
                        int g10 = g();
                        while (g10 >= 0) {
                            linkedHashMap.put(a()[g10], b()[g10]);
                            g10 = h(g10);
                        }
                        this.f43003d = linkedHashMap;
                        this.f43004e = null;
                        this.f43005i = null;
                        this.f43006o = null;
                        p();
                        return linkedHashMap.put(obj, obj2);
                    } else if (i13 > w10) {
                        w10 = y(w10, g0.a(w10), a11, i12);
                    } else {
                        B[i18] = (i13 & w10) | i20;
                    }
                } else {
                    c10 = i21;
                }
            }
        }
        int length = B().length;
        if (i13 > length) {
            int i22 = i10;
            int min = Math.min(1073741823, (Math.max(i22, length >>> 1) + length) | i22);
            if (min != length) {
                this.f43004e = Arrays.copyOf(B(), min);
                this.f43005i = Arrays.copyOf(a(), min);
                this.f43006o = Arrays.copyOf(b(), min);
            }
        }
        B()[i12] = (~w10) & a11;
        a()[i12] = obj;
        b()[i12] = obj2;
        this.f43008q = i13;
        p();
        return null;
    }

    final void q(int i10) {
        this.f43007p = p1.a(12, 1, 1073741823);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void r(int i10, int i11) {
        Object obj = this.f43003d;
        obj.getClass();
        int[] B = B();
        Object[] a10 = a();
        Object[] b10 = b();
        int size = size();
        int i12 = size - 1;
        if (i10 < i12) {
            Object obj2 = a10[i12];
            a10[i10] = obj2;
            b10[i10] = b10[i12];
            a10[i12] = null;
            b10[i12] = null;
            B[i10] = B[i12];
            B[i12] = 0;
            int a11 = h0.a(obj2) & i11;
            int c10 = g0.c(obj, a11);
            if (c10 == size) {
                g0.e(obj, a11, i10 + 1);
                return;
            }
            while (true) {
                int i13 = c10 - 1;
                int i14 = B[i13];
                int i15 = i14 & i11;
                if (i15 != size) {
                    c10 = i15;
                } else {
                    B[i13] = ((i10 + 1) & i11) | (i14 & (~i11));
                    return;
                }
            }
        } else {
            a10[i10] = null;
            b10[i10] = null;
            B[i10] = 0;
        }
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object remove(Object obj) {
        Map n10 = n();
        if (n10 != null) {
            return n10.remove(obj);
        }
        Object z10 = z(obj);
        if (z10 == f43002u) {
            return null;
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean s() {
        if (this.f43003d == null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        Map n10 = n();
        if (n10 != null) {
            return n10.size();
        }
        return this.f43008q;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Collection values() {
        Collection collection = this.f43011t;
        if (collection == null) {
            e0 e0Var = new e0(this);
            this.f43011t = e0Var;
            return e0Var;
        }
        return collection;
    }
}
