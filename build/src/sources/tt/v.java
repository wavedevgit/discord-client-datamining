package tt;

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
    private static final Set f51125v;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f51126d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f51127e;

    /* renamed from: i  reason: collision with root package name */
    private Map f51128i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f51129o;

    /* renamed from: p  reason: collision with root package name */
    private int f51130p;

    /* renamed from: q  reason: collision with root package name */
    private int f51131q;

    /* renamed from: r  reason: collision with root package name */
    private int f51132r;

    /* renamed from: s  reason: collision with root package name */
    private int f51133s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f51134t = false;

    /* renamed from: u  reason: collision with root package name */
    private int f51135u = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private class b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f51136d;

        /* renamed from: e  reason: collision with root package name */
        int f51137e;

        private b() {
            this.f51136d = v.this.f51130p;
            this.f51137e = v.this.f51133s;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public rt.p next() {
            Object obj;
            if (this.f51137e > 0) {
                Object[] objArr = v.this.f51126d;
                do {
                    int i10 = this.f51136d - 1;
                    this.f51136d = i10;
                    if (i10 >= 0) {
                        obj = objArr[i10];
                    }
                } while (obj == null);
                this.f51137e--;
                return (rt.p) rt.p.class.cast(obj);
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f51137e > 0) {
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
            return v.this.f51133s;
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
        f51125v = Collections.unmodifiableSet(hashSet);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(int i10, boolean z10) {
        if (z10) {
            this.f51130p = Integer.MIN_VALUE;
            this.f51131q = Integer.MIN_VALUE;
            this.f51132r = Integer.MIN_VALUE;
            this.f51133s = Integer.MIN_VALUE;
            this.f51126d = null;
            this.f51127e = null;
            this.f51129o = new int[3];
            for (int i11 = 0; i11 < 3; i11++) {
                this.f51129o[i11] = Integer.MIN_VALUE;
            }
        } else {
            int P = P(i10);
            this.f51130p = P;
            this.f51131q = P - 1;
            this.f51132r = U(P);
            int i12 = this.f51130p;
            this.f51126d = new Object[i12];
            this.f51127e = null;
            this.f51129o = new int[i12];
            this.f51133s = 0;
        }
        this.f51128i = null;
    }

    private static int P(int i10) {
        return Math.max(2, W((int) Math.ceil(i10 / 0.75f)));
    }

    private static rt.p Q(int i10) {
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

    private int R(rt.p pVar) {
        Object obj;
        Object[] objArr = this.f51126d;
        if (objArr == null) {
            if (pVar == net.time4j.f0.A) {
                return this.f51129o[0];
            }
            if (pVar == net.time4j.f0.E) {
                return this.f51129o[1];
            }
            if (pVar == net.time4j.f0.F) {
                return this.f51129o[2];
            }
            if (pVar == net.time4j.g0.F) {
                return this.f51130p;
            }
            if (pVar == net.time4j.g0.H) {
                return this.f51131q;
            }
            if (pVar == net.time4j.g0.J) {
                return this.f51132r;
            }
            if (pVar == net.time4j.g0.N) {
                return this.f51133s;
            }
            Map map = this.f51128i;
            if (map == null || !map.containsKey(pVar)) {
                return Integer.MIN_VALUE;
            }
            return ((Integer) Integer.class.cast(map.get(pVar))).intValue();
        }
        int V = V(pVar.hashCode()) & this.f51131q;
        Object obj2 = objArr[V];
        if (obj2 == null) {
            return Integer.MIN_VALUE;
        }
        if (pVar.equals(obj2)) {
            return this.f51129o[V];
        }
        do {
            V = (V + 1) & this.f51131q;
            obj = objArr[V];
            if (obj == null) {
                return Integer.MIN_VALUE;
            }
        } while (!pVar.equals(obj));
        return this.f51129o[V];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean T(rt.p pVar) {
        return f51125v.contains(pVar);
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
            java.lang.Object[] r0 = r12.f51126d
            java.lang.Object[] r1 = r12.f51127e
            int[] r2 = r12.f51129o
            int r3 = r13 + (-1)
            java.lang.Object[] r4 = new java.lang.Object[r13]
            if (r1 != 0) goto Le
            r5 = 0
            goto L10
        Le:
            java.lang.Object[] r5 = new java.lang.Object[r13]
        L10:
            int[] r6 = new int[r13]
            int r7 = r12.f51130p
            int r8 = r12.f51133s
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
            r12.f51130p = r13
            r12.f51131q = r3
            int r13 = U(r13)
            r12.f51132r = r13
            r12.f51126d = r4
            r12.f51127e = r5
            r12.f51129o = r6
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: tt.v.Y(int):void");
    }

    private void Z(Object obj) {
        Object obj2;
        Object[] objArr = this.f51126d;
        if (objArr == null) {
            if (obj == net.time4j.f0.A) {
                this.f51129o[0] = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.f0.E) {
                this.f51129o[1] = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.f0.F) {
                this.f51129o[2] = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.F) {
                this.f51130p = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.H) {
                this.f51131q = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.J) {
                this.f51132r = Integer.MIN_VALUE;
                return;
            } else if (obj == net.time4j.g0.N) {
                this.f51133s = Integer.MIN_VALUE;
                return;
            } else {
                Map map = this.f51128i;
                if (map != null) {
                    map.remove(obj);
                    return;
                }
                return;
            }
        }
        int V = V(obj.hashCode()) & this.f51131q;
        Object obj3 = objArr[V];
        if (obj3 != null) {
            if (obj.equals(obj3)) {
                a0(V);
                return;
            }
            do {
                V = (V + 1) & this.f51131q;
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
        this.f51133s--;
        Object[] objArr = this.f51126d;
        while (true) {
            int i11 = (i10 + 1) & this.f51131q;
            while (true) {
                obj = objArr[i11];
                if (obj == null) {
                    objArr[i10] = null;
                    return;
                }
                int V = V(obj.hashCode());
                int i12 = this.f51131q;
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
            Object[] objArr2 = this.f51127e;
            if (objArr2 != null) {
                objArr2[i10] = objArr2[i11];
            }
            int[] iArr = this.f51129o;
            iArr[i10] = iArr[i11];
            i10 = i11;
        }
    }

    @Override // tt.t
    Object G() {
        return null;
    }

    @Override // tt.t
    void H(rt.p pVar, int i10) {
        Object obj;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        Object[] objArr = this.f51126d;
        if (objArr == null) {
            if (pVar == net.time4j.f0.A) {
                if (!this.f51134t && (i17 = this.f51129o[0]) != Integer.MIN_VALUE && i17 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51129o[0] = i10;
                return;
            } else if (pVar == net.time4j.f0.E) {
                if (!this.f51134t && (i16 = this.f51129o[1]) != Integer.MIN_VALUE && i16 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51129o[1] = i10;
                return;
            } else if (pVar == net.time4j.f0.F) {
                if (!this.f51134t && (i15 = this.f51129o[2]) != Integer.MIN_VALUE && i15 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51129o[2] = i10;
                return;
            } else if (pVar == net.time4j.g0.F) {
                if (!this.f51134t && (i14 = this.f51130p) != Integer.MIN_VALUE && i14 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51130p = i10;
                return;
            } else if (pVar == net.time4j.g0.H) {
                if (!this.f51134t && (i13 = this.f51131q) != Integer.MIN_VALUE && i13 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51131q = i10;
                return;
            } else if (pVar == net.time4j.g0.J) {
                if (!this.f51134t && (i12 = this.f51132r) != Integer.MIN_VALUE && i12 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51132r = i10;
                return;
            } else if (pVar == net.time4j.g0.N) {
                if (!this.f51134t && (i11 = this.f51133s) != Integer.MIN_VALUE && i11 != i10) {
                    throw new tt.a(pVar);
                }
                this.f51133s = i10;
                return;
            } else {
                Map map = this.f51128i;
                if (map == null) {
                    map = new HashMap();
                    this.f51128i = map;
                }
                Integer valueOf = Integer.valueOf(i10);
                if (!this.f51134t && map.containsKey(pVar) && !valueOf.equals(map.get(pVar))) {
                    throw new tt.a(pVar);
                }
                map.put(pVar, valueOf);
                return;
            }
        }
        int V = V(pVar.hashCode()) & this.f51131q;
        Object obj2 = objArr[V];
        if (obj2 != null) {
            if (obj2.equals(pVar)) {
                if (!this.f51134t && this.f51129o[V] != i10) {
                    throw new tt.a(pVar);
                }
                this.f51129o[V] = i10;
                return;
            }
            do {
                V = (V + 1) & this.f51131q;
                obj = objArr[V];
                if (obj != null) {
                }
            } while (!obj.equals(pVar));
            if (!this.f51134t && this.f51129o[V] != i10) {
                throw new tt.a(pVar);
            }
            this.f51129o[V] = i10;
            return;
        }
        objArr[V] = pVar;
        this.f51129o[V] = i10;
        int i18 = this.f51133s;
        int i19 = i18 + 1;
        this.f51133s = i19;
        if (i18 >= this.f51132r) {
            Y(P(i19));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // tt.t
    public void I(rt.p pVar, Object obj) {
        Object obj2;
        if (obj == null) {
            Z(pVar);
        } else if (pVar.getType() == Integer.class) {
            H(pVar, ((Integer) Integer.class.cast(obj)).intValue());
        } else {
            Object[] objArr = this.f51126d;
            if (objArr == null) {
                Map map = this.f51128i;
                if (map == null) {
                    map = new HashMap();
                    this.f51128i = map;
                }
                if (!this.f51134t && map.containsKey(pVar) && !obj.equals(map.get(pVar))) {
                    throw new tt.a(pVar);
                }
                map.put(pVar, obj);
                return;
            }
            if (this.f51127e == null) {
                this.f51127e = new Object[this.f51130p];
            }
            int V = V(pVar.hashCode()) & this.f51131q;
            Object obj3 = objArr[V];
            if (obj3 != null) {
                if (obj3.equals(pVar)) {
                    if (!this.f51134t && !obj.equals(this.f51127e[V])) {
                        throw new tt.a(pVar);
                    }
                    this.f51127e[V] = obj;
                    return;
                }
                do {
                    V = (V + 1) & this.f51131q;
                    obj2 = objArr[V];
                    if (obj2 != null) {
                    }
                } while (!obj2.equals(pVar));
                if (!this.f51134t && !obj.equals(this.f51127e[V])) {
                    throw new tt.a(pVar);
                }
                this.f51127e[V] = obj;
                return;
            }
            objArr[V] = pVar;
            this.f51127e[V] = obj;
            int i10 = this.f51133s;
            int i11 = i10 + 1;
            this.f51133s = i11;
            if (i10 >= this.f51132r) {
                Y(P(i11));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int S() {
        return this.f51135u;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void X(v vVar) {
        int i10 = 0;
        if (this.f51126d == null) {
            int i11 = vVar.f51130p;
            if (i11 != Integer.MIN_VALUE) {
                int i12 = this.f51130p;
                if (i12 != Integer.MIN_VALUE && !this.f51134t && i12 != i11) {
                    throw new tt.a(net.time4j.g0.F);
                }
                this.f51130p = i11;
            }
            int i13 = vVar.f51131q;
            if (i13 != Integer.MIN_VALUE) {
                int i14 = this.f51131q;
                if (i14 != Integer.MIN_VALUE && !this.f51134t && i14 != i13) {
                    throw new tt.a(net.time4j.g0.H);
                }
                this.f51131q = i13;
            }
            int i15 = vVar.f51132r;
            if (i15 != Integer.MIN_VALUE) {
                int i16 = this.f51132r;
                if (i16 != Integer.MIN_VALUE && !this.f51134t && i16 != i15) {
                    throw new tt.a(net.time4j.g0.J);
                }
                this.f51132r = i15;
            }
            int i17 = vVar.f51133s;
            if (i17 != Integer.MIN_VALUE) {
                int i18 = this.f51133s;
                if (i18 != Integer.MIN_VALUE && !this.f51134t && i18 != i17) {
                    throw new tt.a(net.time4j.g0.N);
                }
                this.f51133s = i17;
            }
            while (i10 < 3) {
                int i19 = vVar.f51129o[i10];
                if (i19 != Integer.MIN_VALUE) {
                    int[] iArr = this.f51129o;
                    int i20 = iArr[i10];
                    if (i20 != Integer.MIN_VALUE && !this.f51134t && i20 != i19) {
                        throw new tt.a(Q(i10));
                    }
                    iArr[i10] = i19;
                }
                i10++;
            }
            Map map = vVar.f51128i;
            if (map != null) {
                for (rt.p pVar : map.keySet()) {
                    I(pVar, map.get(pVar));
                }
                return;
            }
            return;
        }
        Object[] objArr = vVar.f51126d;
        while (i10 < objArr.length) {
            Object obj = objArr[i10];
            if (obj != null) {
                rt.p pVar2 = (rt.p) rt.p.class.cast(obj);
                if (pVar2.getType() == Integer.class) {
                    H(pVar2, vVar.f51129o[i10]);
                } else {
                    I(pVar2, vVar.f51127e[i10]);
                }
            }
            i10++;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b0() {
        Object[] objArr = this.f51126d;
        if (objArr == null) {
            this.f51130p = Integer.MIN_VALUE;
            this.f51131q = Integer.MIN_VALUE;
            this.f51132r = Integer.MIN_VALUE;
            this.f51133s = Integer.MIN_VALUE;
            for (int i10 = 0; i10 < 3; i10++) {
                this.f51129o[i10] = Integer.MIN_VALUE;
            }
            this.f51128i = null;
        } else {
            this.f51126d = new Object[objArr.length];
        }
        this.f51133s = 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c0() {
        this.f51134t = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d0(int i10) {
        this.f51135u = i10;
    }

    @Override // rt.q, rt.o
    public boolean n(rt.p pVar) {
        Object obj;
        if (pVar == null) {
            return false;
        }
        Object[] objArr = this.f51126d;
        if (objArr == null) {
            if (pVar == net.time4j.f0.A) {
                if (this.f51129o[0] == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.f0.E) {
                if (this.f51129o[1] == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.f0.F) {
                if (this.f51129o[2] == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.F) {
                if (this.f51130p == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.H) {
                if (this.f51131q == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.J) {
                if (this.f51132r == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else if (pVar == net.time4j.g0.N) {
                if (this.f51133s == Integer.MIN_VALUE) {
                    return false;
                }
                return true;
            } else {
                Map map = this.f51128i;
                if (map == null || !map.containsKey(pVar)) {
                    return false;
                }
                return true;
            }
        }
        int V = V(pVar.hashCode()) & this.f51131q;
        Object obj2 = objArr[V];
        if (obj2 == null) {
            return false;
        }
        if (pVar.equals(obj2)) {
            return true;
        }
        do {
            V = (V + 1) & this.f51131q;
            obj = objArr[V];
            if (obj == null) {
                return false;
            }
        } while (!pVar.equals(obj));
        return true;
    }

    @Override // rt.q, rt.o
    public int q(rt.p pVar) {
        return R(pVar);
    }

    @Override // rt.q, rt.o
    public Object s(rt.p pVar) {
        int V;
        Object obj;
        Object obj2;
        Class type = pVar.getType();
        if (type == Integer.class) {
            int R = R(pVar);
            if (R != Integer.MIN_VALUE) {
                return type.cast(Integer.valueOf(R));
            }
            throw new rt.r("No value found for: " + pVar.name());
        }
        Object[] objArr = this.f51126d;
        if (objArr == null) {
            Map map = this.f51128i;
            if (map != null && map.containsKey(pVar)) {
                return pVar.getType().cast(map.get(pVar));
            }
            throw new rt.r("No value found for: " + pVar.name());
        } else if (this.f51127e != null && (obj = objArr[(V = V(pVar.hashCode()) & this.f51131q)]) != null) {
            if (pVar.equals(obj)) {
                return type.cast(this.f51127e[V]);
            }
            do {
                V = (V + 1) & this.f51131q;
                obj2 = objArr[V];
                if (obj2 == null) {
                    throw new rt.r("No value found for: " + pVar.name());
                }
            } while (!pVar.equals(obj2));
            return type.cast(this.f51127e[V]);
        } else {
            throw new rt.r("No value found for: " + pVar.name());
        }
    }

    @Override // rt.q
    public Set y() {
        if (this.f51126d == null) {
            HashSet hashSet = new HashSet();
            if (this.f51129o[0] != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.f0.A);
            }
            if (this.f51129o[1] != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.f0.E);
            }
            if (this.f51129o[2] != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.f0.F);
            }
            if (this.f51130p != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.F);
            }
            if (this.f51131q != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.H);
            }
            if (this.f51132r != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.J);
            }
            if (this.f51133s != Integer.MIN_VALUE) {
                hashSet.add(net.time4j.g0.N);
            }
            Map map = this.f51128i;
            if (map != null) {
                hashSet.addAll(map.keySet());
            }
            return Collections.unmodifiableSet(hashSet);
        }
        return new c();
    }

    @Override // tt.t
    void J(Object obj) {
    }
}
