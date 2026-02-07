package ng;

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
public final class y0 extends AbstractMap implements Serializable {

    /* renamed from: u  reason: collision with root package name */
    private static final Object f40488u = new Object();

    /* renamed from: d  reason: collision with root package name */
    private transient Object f40489d;

    /* renamed from: e  reason: collision with root package name */
    transient int[] f40490e;

    /* renamed from: i  reason: collision with root package name */
    transient Object[] f40491i;

    /* renamed from: o  reason: collision with root package name */
    transient Object[] f40492o;

    /* renamed from: p  reason: collision with root package name */
    private transient int f40493p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f40494q;

    /* renamed from: r  reason: collision with root package name */
    private transient Set f40495r;

    /* renamed from: s  reason: collision with root package name */
    private transient Set f40496s;

    /* renamed from: t  reason: collision with root package name */
    private transient Collection f40497t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(int i10) {
        s(12);
    }

    private final int A(int i10, int i11, int i12, int i13) {
        int i14 = i11 - 1;
        Object d10 = z0.d(i11);
        if (i13 != 0) {
            z0.e(d10, i12 & i14, i13 + 1);
        }
        Object obj = this.f40489d;
        Objects.requireNonNull(obj);
        int[] a10 = a();
        for (int i15 = 0; i15 <= i10; i15++) {
            int c10 = z0.c(obj, i15);
            while (c10 != 0) {
                int i16 = c10 - 1;
                int i17 = a10[i16];
                int i18 = ((~i10) & i17) | i15;
                int i19 = i18 & i14;
                int c11 = z0.c(d10, i19);
                z0.e(d10, i19, c10);
                a10[i16] = ((~i14) & i18) | (c11 & i14);
                c10 = i17 & i10;
            }
        }
        this.f40489d = d10;
        C(i14);
        return i14;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object B(Object obj) {
        if (!u()) {
            int y10 = y();
            Object obj2 = this.f40489d;
            Objects.requireNonNull(obj2);
            int b10 = z0.b(obj, null, y10, obj2, a(), b(), null);
            if (b10 != -1) {
                Object obj3 = c()[b10];
                t(b10, y10);
                this.f40494q--;
                r();
                return obj3;
            }
        }
        return f40488u;
    }

    private final void C(int i10) {
        this.f40493p = ((32 - Integer.numberOfLeadingZeros(i10)) & 31) | (this.f40493p & (-32));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int[] a() {
        int[] iArr = this.f40490e;
        Objects.requireNonNull(iArr);
        return iArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] b() {
        Object[] objArr = this.f40491i;
        Objects.requireNonNull(objArr);
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] c() {
        Object[] objArr = this.f40492o;
        Objects.requireNonNull(objArr);
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object j(y0 y0Var, int i10) {
        return y0Var.b()[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object l(y0 y0Var) {
        Object obj = y0Var.f40489d;
        Objects.requireNonNull(obj);
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ Object m(y0 y0Var, int i10) {
        return y0Var.c()[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void q(y0 y0Var, int i10, Object obj) {
        y0Var.c()[i10] = obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int y() {
        return (1 << (this.f40493p & 31)) - 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int z(Object obj) {
        if (u()) {
            return -1;
        }
        int a10 = a1.a(obj);
        int y10 = y();
        Object obj2 = this.f40489d;
        Objects.requireNonNull(obj2);
        int c10 = z0.c(obj2, a10 & y10);
        if (c10 == 0) {
            return -1;
        }
        int i10 = ~y10;
        int i11 = a10 & i10;
        do {
            int i12 = c10 - 1;
            int i13 = a()[i12];
            if ((i13 & i10) == i11 && r.a(obj, b()[i12])) {
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
            this.f40493p = i2.a(size(), 3, 1073741823);
            o10.clear();
            this.f40489d = null;
            this.f40494q = 0;
            return;
        }
        Arrays.fill(b(), 0, this.f40494q, (Object) null);
        Arrays.fill(c(), 0, this.f40494q, (Object) null);
        Object obj = this.f40489d;
        Objects.requireNonNull(obj);
        if (obj instanceof byte[]) {
            Arrays.fill((byte[]) obj, (byte) 0);
        } else if (obj instanceof short[]) {
            Arrays.fill((short[]) obj, (short) 0);
        } else {
            Arrays.fill((int[]) obj, 0);
        }
        Arrays.fill(a(), 0, this.f40494q, 0);
        this.f40494q = 0;
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
            for (int i10 = 0; i10 < this.f40494q; i10++) {
                if (r.a(obj, c()[i10])) {
                    return true;
                }
            }
            return false;
        }
        return o10.containsValue(obj);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Set entrySet() {
        Set set = this.f40496s;
        if (set == null) {
            s0 s0Var = new s0(this);
            this.f40496s = s0Var;
            return s0Var;
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
        if (i11 < this.f40494q) {
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
        Set set = this.f40495r;
        if (set == null) {
            v0 v0Var = new v0(this);
            this.f40495r = v0Var;
            return v0Var;
        }
        return set;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Map o() {
        Object obj = this.f40489d;
        if (obj instanceof Map) {
            return (Map) obj;
        }
        return null;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object put(Object obj, Object obj2) {
        int i10;
        if (u()) {
            t.e(u(), "Arrays already allocated");
            int i11 = this.f40493p;
            int max = Math.max(i11 + 1, 2);
            int highestOneBit = Integer.highestOneBit(max);
            if (max > highestOneBit && (highestOneBit = highestOneBit + highestOneBit) <= 0) {
                highestOneBit = 1073741824;
            }
            int max2 = Math.max(4, highestOneBit);
            this.f40489d = z0.d(max2);
            C(max2 - 1);
            this.f40490e = new int[i11];
            this.f40491i = new Object[i11];
            this.f40492o = new Object[i11];
        }
        Map o10 = o();
        if (o10 != null) {
            return o10.put(obj, obj2);
        }
        int[] a10 = a();
        Object[] b10 = b();
        Object[] c10 = c();
        int i12 = this.f40494q;
        int i13 = i12 + 1;
        int a11 = a1.a(obj);
        int y10 = y();
        int i14 = a11 & y10;
        Object obj3 = this.f40489d;
        Objects.requireNonNull(obj3);
        int c11 = z0.c(obj3, i14);
        if (c11 == 0) {
            if (i13 > y10) {
                y10 = A(y10, z0.a(y10), a11, i12);
            } else {
                Object obj4 = this.f40489d;
                Objects.requireNonNull(obj4);
                z0.e(obj4, i14, i13);
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
                if (i20 == i16 && r.a(obj, b10[i18])) {
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
                        this.f40489d = linkedHashMap;
                        this.f40490e = null;
                        this.f40491i = null;
                        this.f40492o = null;
                        r();
                        return linkedHashMap.put(obj, obj2);
                    } else if (i13 > y10) {
                        y10 = A(y10, z0.a(y10), a11, i12);
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
                this.f40490e = Arrays.copyOf(a(), min);
                this.f40491i = Arrays.copyOf(b(), min);
                this.f40492o = Arrays.copyOf(c(), min);
            }
        }
        a()[i12] = (~y10) & a11;
        b()[i12] = obj;
        c()[i12] = obj2;
        this.f40494q = i13;
        r();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void r() {
        this.f40493p += 32;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Object remove(Object obj) {
        Map o10 = o();
        if (o10 != null) {
            return o10.remove(obj);
        }
        Object B = B(obj);
        if (B == f40488u) {
            return null;
        }
        return B;
    }

    final void s(int i10) {
        this.f40493p = i2.a(i10, 1, 1073741823);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final int size() {
        Map o10 = o();
        if (o10 != null) {
            return o10.size();
        }
        return this.f40494q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void t(int i10, int i11) {
        Object obj = this.f40489d;
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
            int a11 = a1.a(obj2) & i11;
            int c11 = z0.c(obj, a11);
            if (c11 == size) {
                z0.e(obj, a11, i13);
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
        if (this.f40489d == null) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public final Collection values() {
        Collection collection = this.f40497t;
        if (collection == null) {
            x0 x0Var = new x0(this);
            this.f40497t = x0Var;
            return x0Var;
        }
        return collection;
    }
}
