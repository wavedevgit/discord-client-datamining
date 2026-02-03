package mt;

import java.util.AbstractSet;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class v extends t {

    /* renamed from: v  reason: collision with root package name */
    private static final Set f39410v;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f39411d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f39412e;

    /* renamed from: i  reason: collision with root package name */
    private Map f39413i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f39414o;

    /* renamed from: p  reason: collision with root package name */
    private int f39415p;

    /* renamed from: q  reason: collision with root package name */
    private int f39416q;

    /* renamed from: r  reason: collision with root package name */
    private int f39417r;

    /* renamed from: s  reason: collision with root package name */
    private int f39418s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f39419t = false;

    /* renamed from: u  reason: collision with root package name */
    private int f39420u = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f39421d;

        /* renamed from: e  reason: collision with root package name */
        int f39422e;

        private b() {
            this.f39421d = v.this.f39415p;
            this.f39422e = v.this.f39418s;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public kt.p next() {
            Object obj;
            if (this.f39422e > 0) {
                Object[] objArr = v.this.f39411d;
                do {
                    int i10 = this.f39421d - 1;
                    this.f39421d = i10;
                    if (i10 >= 0) {
                        obj = objArr[i10];
                    }
                } while (obj == null);
                this.f39422e--;
                return (kt.p) kt.p.class.cast(obj);
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f39422e > 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException("remove");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class c extends AbstractSet {
        private c() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return new b();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return v.this.f39418s;
        }
    }

    static {
        HashSet hashSet = new HashSet();
        hashSet.add(net.time4j.f0.A);
        hashSet.add(net.time4j.f0.E);
        hashSet.add(net.time4j.f0.F);
        hashSet.add(net.time4j.g0.F);
        hashSet.add(net.time4j.g0.H);
        hashSet.add(net.time4j.g0.J);
        hashSet.add(net.time4j.g0.N);
        f39410v = Collections.unmodifiableSet(hashSet);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(int i10, boolean z10) {
        if (z10) {
            this.f39415p = Integer.MIN_VALUE;
            this.f39416q = Integer.MIN_VALUE;
            this.f39417r = Integer.MIN_VALUE;
            this.f39418s = Integer.MIN_VALUE;
            this.f39411d = null;
            this.f39412e = null;
            this.f39414o = new int[3];
            for (int i11 = 0; i11 < 3; i11++) {
                this.f39414o[i11] = Integer.MIN_VALUE;
            }
        } else {
            int P = P(i10);
            this.f39415p = P;
            this.f39416q = P - 1;
            this.f39417r = U(P);
            int i12 = this.f39415p;
            this.f39411d = new Object[i12];
            this.f39412e = null;
            this.f39414o = new int[i12];
            this.f39418s = 0;
        }
        this.f39413i = null;
    }

    private static int P(int i10) {
        return Math.max(2, W((int) Math.ceil(i10 / 0.75f)));
    }

    private static kt.p Q(int i10) {
        switch (i10) {
            case 0:
                return net.time4j.f0.A;
            case 1:
                return net.time4j.f0.E;
            case 2:
                return net.time4j.f0.F;
            case 3:
                return net.time4j.g0.F;
            case 4:
                return net.time4j.g0.H;
            case 5:
                return net.time4j.g0.J;
            case 6:
                return net.time4j.g0.N;
            default:
                throw new IllegalStateException("No element index: " + i10);
        }
    }

    private int R(kt.p pVar) {
        Object obj;
        Object[] objArr = this.f39411d;
        if (objArr == null) {
            if (pVar == net.time4j.f0.A) {
                return this.f39414o[0];
            }
            if (pVar == net.time4j.f0.E) {
                return this.f39414o[1];
            }
            if (pVar == net.time4j.f0.F) {
                return this.f39414o[2];
            }
            if (pVar == net.time4j.g0.F) {
                return this.f39415p;
            }
            if (pVar == net.time4j.g0.H) {
                return this.f39416q;
            }
            if (pVar == net.time4j.g0.J) {
                return this.f39417r;
            }
            if (pVar == net.time4j.g0.N) {
                return this.f39418s;
            }
            Map map = this.f39413i;
            if (map == null || !map.containsKey(pVar)) {
                return Integer.MIN_VALUE;
            }
            return ((Integer) Integer.class.cast(map.get(pVar))).intValue();
        }
        int V = V(pVar.hashCode()) & this.f39416q;
        Object obj2 = objArr[V];
        if (obj2 == null) {
            return Integer.MIN_VALUE;
        }
        if (pVar.equals(obj2)) {
            return this.f39414o[V];
        }
        do {
            V = (V + 1) & this.f39416q;
            obj = objArr[V];
            if (obj == null) {
                return Integer.MIN_VALUE;
            }
        } while (!pVar.equals(obj));
        return this.f39414o[V];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean T(kt.p pVar) {
        return f39410v.contains(pVar);
    }

    private static int U(int i10) {
        return Math.min((int) Math.ceil(i10 * 0.75f), i10 - 1);
    }

    private static int V(int i10) {
        int i11 = i10 * (-1640531527);
        return i11 ^ (i11 >>> 16);
    }

    private static int W(int i10) {
        if (i10 == 0) {
            return 1;
        }
        int i11 = i10 - 1;
        int i12 = i11 | (i11 >> 1);
        int i13 = i12 | (i12 >> 2);
        int i14 = i13 | (i13 >> 4);
        int i15 = i14 | (i14 >> 8);
        return (i15 | (i15 >> 16)) + 1;
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x003f A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void Y(int r13) {
        /*
            r12 = this;
            java.lang.Object[] r0 = r12.f39411d
            java.lang.Object[] r1 = r12.f39412e
            int[] r2 = r12.f39414o
            int r3 = r13 + (-1)
            java.lang.Object[] r4 = new java.lang.Object[r13]
            if (r1 != 0) goto Le
            r5 = 0
            goto L10
        Le:
            java.lang.Object[] r5 = new java.lang.Object[r13]
        L10:
            int[] r6 = new int[r13]
            int r7 = r12.f39415p
            int r8 = r12.f39418s
            r9 = 0
        L17:
            if (r9 >= r8) goto L46
        L19:
            int r7 = r7 + (-1)
            r10 = r0[r7]
            if (r10 != 0) goto L20
            goto L19
        L20:
            int r10 = r10.hashCode()
            int r10 = V(r10)
            r10 = r10 & r3
            r11 = r4[r10]
            if (r11 == 0) goto L35
        L2d:
            int r10 = r10 + 1
            r10 = r10 & r3
            r11 = r4[r10]
            if (r11 == 0) goto L35
            goto L2d
        L35:
            r11 = r0[r7]
            r4[r10] = r11
            if (r1 == 0) goto L3f
            r11 = r1[r7]
            r5[r10] = r11
        L3f:
            r11 = r2[r7]
            r6[r10] = r11
            int r9 = r9 + 1
            goto L17
        L46:
            r12.f39415p = r13
            r12.f39416q = r3
            int r13 = U(r13)
            r12.f39417r = r13
            r12.f39411d = r4
            r12.f39412e = r5
            r12.f39414o = r6
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: mt.v.Y(int):void");
    }

    private void Z(Object obj) {
        Object obj2;
        Object[] objArr = this.f39411d;
        if (objArr == null) {
            if (obj == net.time4j.f0.A) {
                this.f39414o[0] = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.f0.E) {
                this.f39414o[1] = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.f0.F) {
                this.f39414o[2] = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.F) {
                this.f39415p = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.H) {
                this.f39416q = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.J) {
                this.f39417r = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.N) {
                this.f39418s = Integer.MIN_VALUE;
                return;
            } else {
                Map map = this.f39413i;
                if (map != null) {
                    map.remove(obj);
                    return;
                }
                return;
            }
        }
        int V = V(obj.hashCode()) & this.f39416q;
        Object obj3 = objArr[V];
        if (obj3 != null) {
            if (obj.equals(obj3)) {
                a0(V);
                return;
            }
            do {
                V = (V + 1) & this.f39416q;
                obj2 = objArr[V];
                if (obj2 == null) {
                    return;
                }
            } while (!obj.equals(obj2));
            a0(V);
        }
    }

    private void a0(int i10) {
        Object obj;
        this.f39418s--;
        Object[] objArr = this.f39411d;
        while (true) {
            int i11 = (i10 + 1) & this.f39416q;
            while (true) {
                obj = objArr[i11];
                if (obj == null) {
                    objArr[i10] = null;
                    return;
                }
                int V = V(obj.hashCode());
                int i12 = this.f39416q;
                int i13 = V & i12;
                if (i10 <= i11) {
                    if (i10 >= i13 || i13 > i11) {
                        break;
                    }
                    i11 = (i11 + 1) & i12;
                } else {
                    if (i10 >= i13 && i13 > i11) {
                        break;
                    }
                    i11 = (i11 + 1) & i12;
                }
            }
            objArr[i10] = obj;
            Object[] objArr2 = this.f39412e;
            if (objArr2 != null) {
                objArr2[i10] = objArr2[i11];
            }
            int[] iArr = this.f39414o;
            iArr[i10] = iArr[i11];
            i10 = i11;
        }
    }

    @Override // mt.t
    Object G() {
        return null;
    }

    @Override // mt.t
    void H(kt.p pVar, int i10) {
        Object obj;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        Object[] objArr = this.f39411d;
        if (objArr == null) {
            if (pVar == net.time4j.f0.A) {
                if (!this.f39419t && (i17 = this.f39414o[0]) != Integer.MIN_VALUE && i17 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39414o[0] = i10;
                return;
            } else if (pVar == net.time4j.f0.E) {
                if (!this.f39419t && (i16 = this.f39414o[1]) != Integer.MIN_VALUE && i16 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39414o[1] = i10;
                return;
            } else if (pVar == net.time4j.f0.F) {
                if (!this.f39419t && (i15 = this.f39414o[2]) != Integer.MIN_VALUE && i15 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39414o[2] = i10;
                return;
            } else if (pVar == net.time4j.g0.F) {
                if (!this.f39419t && (i14 = this.f39415p) != Integer.MIN_VALUE && i14 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39415p = i10;
                return;
            } else if (pVar == net.time4j.g0.H) {
                if (!this.f39419t && (i13 = this.f39416q) != Integer.MIN_VALUE && i13 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39416q = i10;
                return;
            } else if (pVar == net.time4j.g0.J) {
                if (!this.f39419t && (i12 = this.f39417r) != Integer.MIN_VALUE && i12 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39417r = i10;
                return;
            } else if (pVar == net.time4j.g0.N) {
                if (!this.f39419t && (i11 = this.f39418s) != Integer.MIN_VALUE && i11 != i10) {
                    throw new mt.a(pVar);
                }
                this.f39418s = i10;
                return;
            } else {
                Map map = this.f39413i;
                if (map == null) {
                    map = new HashMap();
                    this.f39413i = map;
                }
                Integer valueOf = Integer.valueOf(i10);
                if (!this.f39419t && map.containsKey(pVar) && !valueOf.equals(map.get(pVar))) {
                    throw new mt.a(pVar);
                }
                map.put(pVar, valueOf);
                return;
            }
        }
        int V = V(pVar.hashCode()) & this.f39416q;
        Object obj2 = objArr[V];
        if (obj2 != null) {
            if (obj2.equals(pVar)) {
                if (!this.f39419t && this.f39414o[V] != i10) {
                    throw new mt.a(pVar);
                }
                this.f39414o[V] = i10;
                return;
            }
            do {
                V = (V + 1) & this.f39416q;
                obj = objArr[V];
                if (obj != null) {
                }
            } while (!obj.equals(pVar));
            if (!this.f39419t && this.f39414o[V] != i10) {
                throw new mt.a(pVar);
            }
            this.f39414o[V] = i10;
            return;
        }
        objArr[V] = pVar;
        this.f39414o[V] = i10;
        int i18 = this.f39418s;
        int i19 = i18 + 1;
        this.f39418s = i19;
        if (i18 >= this.f39417r) {
            Y(P(i19));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // mt.t
    public void I(kt.p pVar, Object obj) {
        Object obj2;
        if (obj == null) {
            Z(pVar);
        } else if (pVar.getType() == Integer.class) {
            H(pVar, ((Integer) Integer.class.cast(obj)).intValue());
        } else {
            Object[] objArr = this.f39411d;
            if (objArr == null) {
                Map map = this.f39413i;
                if (map == null) {
                    map = new HashMap();
                    this.f39413i = map;
                }
                if (!this.f39419t && map.containsKey(pVar) && !obj.equals(map.get(pVar))) {
                    throw new mt.a(pVar);
                }
                map.put(pVar, obj);
                return;
            }
            if (this.f39412e == null) {
                this.f39412e = new Object[this.f39415p];
            }
            int V = V(pVar.hashCode()) & this.f39416q;
            Object obj3 = objArr[V];
            if (obj3 != null) {
                if (obj3.equals(pVar)) {
                    if (!this.f39419t && !obj.equals(this.f39412e[V])) {
                        throw new mt.a(pVar);
                    }
                    this.f39412e[V] = obj;
                    return;
                }
                do {
                    V = (V + 1) & this.f39416q;
                    obj2 = objArr[V];
                    if (obj2 != null) {
                    }
                } while (!obj2.equals(pVar));
                if (!this.f39419t && !obj.equals(this.f39412e[V])) {
                    throw new mt.a(pVar);
                }
                this.f39412e[V] = obj;
                return;
            }
            objArr[V] = pVar;
            this.f39412e[V] = obj;
            int i10 = this.f39418s;
            int i11 = i10 + 1;
            this.f39418s = i11;
            if (i10 >= this.f39417r) {
                Y(P(i11));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int S() {
        return this.f39420u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(v vVar) {
        int i10 = 0;
        if (this.f39411d == null) {
            int i11 = vVar.f39415p;
            if (i11 != Integer.MIN_VALUE) {
                int i12 = this.f39415p;
                if (i12 != Integer.MIN_VALUE && !this.f39419t && i12 != i11) {
                    throw new mt.a(net.time4j.g0.F);
                }
                this.f39415p = i11;
            }
            int i13 = vVar.f39416q;
            if (i13 != Integer.MIN_VALUE) {
                int i14 = this.f39416q;
                if (i14 != Integer.MIN_VALUE && !this.f39419t && i14 != i13) {
                    throw new mt.a(net.time4j.g0.H);
                }
                this.f39416q = i13;
            }
            int i15 = vVar.f39417r;
            if (i15 != Integer.MIN_VALUE) {
                int i16 = this.f39417r;
                if (i16 != Integer.MIN_VALUE && !this.f39419t && i16 != i15) {
                    throw new mt.a(net.time4j.g0.J);
                }
                this.f39417r = i15;
            }
            int i17 = vVar.f39418s;
            if (i17 != Integer.MIN_VALUE) {
                int i18 = this.f39418s;
                if (i18 != Integer.MIN_VALUE && !this.f39419t && i18 != i17) {
                    throw new mt.a(net.time4j.g0.N);
                }
                this.f39418s = i17;
            }
            while (i10 < 3) {
                int i19 = vVar.f39414o[i10];
                if (i19 != Integer.MIN_VALUE) {
                    int[] iArr = this.f39414o;
                    int i20 = iArr[i10];
                    if (i20 != Integer.MIN_VALUE && !this.f39419t && i20 != i19) {
                        throw new mt.a(Q(i10));
                    }
                    iArr[i10] = i19;
                }
                i10++;
            }
            Map map = vVar.f39413i;
            if (map != null) {
                for (kt.p pVar : map.keySet()) {
                    I(pVar, map.get(pVar));
                }
                return;
            }
            return;
        }
        Object[] objArr = vVar.f39411d;
        while (i10 < objArr.length) {
            Object obj = objArr[i10];
            if (obj != null) {
                kt.p pVar2 = (kt.p) kt.p.class.cast(obj);
                if (pVar2.getType() == Integer.class) {
                    H(pVar2, vVar.f39414o[i10]);
                } else {
                    I(pVar2, vVar.f39412e[i10]);
                }
            }
            i10++;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0() {
        Object[] objArr = this.f39411d;
        if (objArr == null) {
            this.f39415p = Integer.MIN_VALUE;
            this.f39416q = Integer.MIN_VALUE;
            this.f39417r = Integer.MIN_VALUE;
            this.f39418s = Integer.MIN_VALUE;
            for (int i10 = 0; i10 < 3; i10++) {
                this.f39414o[i10] = Integer.MIN_VALUE;
            }
            this.f39413i = null;
        } else {
            this.f39411d = new Object[objArr.length];
        }
        this.f39418s = 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c0() {
        this.f39419t = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(int i10) {
        this.f39420u = i10;
    }

    @Override // kt.q, kt.o
    public boolean s(kt.p pVar) {
        Object obj;
        if (pVar == null) {
            return false;
        }
        Object[] objArr = this.f39411d;
        if (objArr == null) {
            if (pVar == net.time4j.f0.A) {
                if (this.f39414o[0] == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.f0.E) {
                if (this.f39414o[1] == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.f0.F) {
                if (this.f39414o[2] == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.F) {
                if (this.f39415p == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.H) {
                if (this.f39416q == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.J) {
                if (this.f39417r == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.N) {
                if (this.f39418s == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else {
                Map map = this.f39413i;
                if (map == null || !map.containsKey(pVar)) {
                    return false;
                }
                return true;
            }
        }
        int V = V(pVar.hashCode()) & this.f39416q;
        Object obj2 = objArr[V];
        if (obj2 == null) {
            return false;
        }
        if (pVar.equals(obj2)) {
            return true;
        }
        do {
            V = (V + 1) & this.f39416q;
            obj = objArr[V];
            if (obj == null) {
                return false;
            }
        } while (!pVar.equals(obj));
        return true;
    }

    @Override // kt.q, kt.o
    public int t(kt.p pVar) {
        return R(pVar);
    }

    @Override // kt.q, kt.o
    public Object v(kt.p pVar) {
        int V;
        Object obj;
        Object obj2;
        Class type = pVar.getType();
        if (type == Integer.class) {
            int R = R(pVar);
            if (R != Integer.MIN_VALUE) {
                return type.cast(Integer.valueOf(R));
            }
            throw new kt.r("No value found for: " + pVar.name());
        }
        Object[] objArr = this.f39411d;
        if (objArr == null) {
            Map map = this.f39413i;
            if (map != null && map.containsKey(pVar)) {
                return pVar.getType().cast(map.get(pVar));
            }
            throw new kt.r("No value found for: " + pVar.name());
        } else if (this.f39412e != null && (obj = objArr[(V = V(pVar.hashCode()) & this.f39416q)]) != null) {
            if (pVar.equals(obj)) {
                return type.cast(this.f39412e[V]);
            }
            do {
                V = (V + 1) & this.f39416q;
                obj2 = objArr[V];
                if (obj2 == null) {
                    throw new kt.r("No value found for: " + pVar.name());
                }
            } while (!pVar.equals(obj2));
            return type.cast(this.f39412e[V]);
        } else {
            throw new kt.r("No value found for: " + pVar.name());
        }
    }

    @Override // kt.q
    public Set y() {
        if (this.f39411d == null) {
            HashSet hashSet = new HashSet();
            if (this.f39414o[0] != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.f0.A);
            }
            if (this.f39414o[1] != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.f0.E);
            }
            if (this.f39414o[2] != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.f0.F);
            }
            if (this.f39415p != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.F);
            }
            if (this.f39416q != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.H);
            }
            if (this.f39417r != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.J);
            }
            if (this.f39418s != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.N);
            }
            Map map = this.f39413i;
            if (map != null) {
                hashSet.addAll(map.keySet());
            }
            return Collections.unmodifiableSet(hashSet);
        }
        return new c();
    }

    @Override // mt.t
    void J(Object obj) {
    }
}
