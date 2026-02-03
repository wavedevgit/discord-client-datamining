package ji;

import java.io.Serializable;
import java.util.AbstractCollection;
import java.util.AbstractMap;
import java.util.AbstractSet;
import java.util.Arrays;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j extends AbstractMap implements Serializable {

    /* renamed from: u  reason: collision with root package name */
    private static final Object f31852u = new Object();

    /* renamed from: d  reason: collision with root package name */
    private transient Object f31853d;

    /* renamed from: e  reason: collision with root package name */
    transient int[] f31854e;

    /* renamed from: i  reason: collision with root package name */
    transient Object[] f31855i;

    /* renamed from: o  reason: collision with root package name */
    transient Object[] f31856o;

    /* renamed from: p  reason: collision with root package name */
    private transient int f31857p;

    /* renamed from: q  reason: collision with root package name */
    private transient int f31858q;

    /* renamed from: r  reason: collision with root package name */
    private transient Set f31859r;

    /* renamed from: s  reason: collision with root package name */
    private transient Set f31860s;

    /* renamed from: t  reason: collision with root package name */
    private transient Collection f31861t;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends e {
        a() {
            super(j.this, null);
        }

        @Override // ji.j.e
        Object b(int i10) {
            return j.this.G(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends e {
        b() {
            super(j.this, null);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ji.j.e
        /* renamed from: d */
        public Map.Entry b(int i10) {
            return new g(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c extends e {
        c() {
            super(j.this, null);
        }

        @Override // ji.j.e
        Object b(int i10) {
            return j.this.W(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends AbstractSet {
        d() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            j.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            Map w10 = j.this.w();
            if (w10 != null) {
                return w10.entrySet().contains(obj);
            }
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                int D = j.this.D(entry.getKey());
                if (D != -1 && ii.j.a(j.this.W(D), entry.getValue())) {
                    return true;
                }
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return j.this.y();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            int B;
            int f10;
            Map w10 = j.this.w();
            if (w10 != null) {
                return w10.entrySet().remove(obj);
            }
            if (!(obj instanceof Map.Entry)) {
                return false;
            }
            Map.Entry entry = (Map.Entry) obj;
            if (j.this.J() || (f10 = k.f(entry.getKey(), entry.getValue(), (B = j.this.B()), j.this.N(), j.this.L(), j.this.M(), j.this.O())) == -1) {
                return false;
            }
            j.this.I(f10, B);
            j.e(j.this);
            j.this.C();
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return j.this.size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f extends AbstractSet {
        f() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public void clear() {
            j.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            return j.this.containsKey(obj);
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        public Iterator iterator() {
            return j.this.H();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean remove(Object obj) {
            Map w10 = j.this.w();
            if (w10 != null) {
                return w10.keySet().remove(obj);
            }
            if (j.this.K(obj) != j.f31852u) {
                return true;
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return j.this.size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class g extends ji.e {

        /* renamed from: d  reason: collision with root package name */
        private final Object f31871d;

        /* renamed from: e  reason: collision with root package name */
        private int f31872e;

        g(int i10) {
            this.f31871d = j.this.G(i10);
            this.f31872e = i10;
        }

        private void a() {
            int i10 = this.f31872e;
            if (i10 != -1 && i10 < j.this.size() && ii.j.a(this.f31871d, j.this.G(this.f31872e))) {
                return;
            }
            this.f31872e = j.this.D(this.f31871d);
        }

        @Override // ji.e, java.util.Map.Entry
        public Object getKey() {
            return this.f31871d;
        }

        @Override // ji.e, java.util.Map.Entry
        public Object getValue() {
            Map w10 = j.this.w();
            if (w10 != null) {
                return g0.a(w10.get(this.f31871d));
            }
            a();
            int i10 = this.f31872e;
            if (i10 != -1) {
                return j.this.W(i10);
            }
            return g0.b();
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            Map w10 = j.this.w();
            if (w10 != null) {
                return g0.a(w10.put(this.f31871d, obj));
            }
            a();
            int i10 = this.f31872e;
            if (i10 != -1) {
                Object W = j.this.W(i10);
                j.this.V(this.f31872e, obj);
                return W;
            }
            j.this.put(this.f31871d, obj);
            return g0.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class h extends AbstractCollection {
        h() {
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            j.this.clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
        public Iterator iterator() {
            return j.this.X();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            return j.this.size();
        }
    }

    j(int i10) {
        E(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int B() {
        return (1 << (this.f31857p & 31)) - 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int D(Object obj) {
        if (J()) {
            return -1;
        }
        int c10 = p.c(obj);
        int B = B();
        int h10 = k.h(N(), c10 & B);
        if (h10 == 0) {
            return -1;
        }
        int b10 = k.b(c10, B);
        do {
            int i10 = h10 - 1;
            int x10 = x(i10);
            if (k.b(x10, B) == b10 && ii.j.a(obj, G(i10))) {
                return i10;
            }
            h10 = k.c(x10, B);
        } while (h10 != 0);
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object G(int i10) {
        return M()[i10];
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object K(Object obj) {
        if (J()) {
            return f31852u;
        }
        int B = B();
        int f10 = k.f(obj, null, B, N(), L(), M(), null);
        if (f10 == -1) {
            return f31852u;
        }
        Object W = W(f10);
        I(f10, B);
        this.f31858q--;
        C();
        return W;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int[] L() {
        int[] iArr = this.f31854e;
        Objects.requireNonNull(iArr);
        return iArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object[] M() {
        Object[] objArr = this.f31855i;
        Objects.requireNonNull(objArr);
        return objArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object N() {
        Object obj = this.f31853d;
        Objects.requireNonNull(obj);
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object[] O() {
        Object[] objArr = this.f31856o;
        Objects.requireNonNull(objArr);
        return objArr;
    }

    private void Q(int i10) {
        int min;
        int length = L().length;
        if (i10 > length && (min = Math.min(1073741823, (Math.max(1, length >>> 1) + length) | 1)) != length) {
            P(min);
        }
    }

    private int R(int i10, int i11, int i12, int i13) {
        Object a10 = k.a(i11);
        int i14 = i11 - 1;
        if (i13 != 0) {
            k.i(a10, i12 & i14, i13 + 1);
        }
        Object N = N();
        int[] L = L();
        for (int i15 = 0; i15 <= i10; i15++) {
            int h10 = k.h(N, i15);
            while (h10 != 0) {
                int i16 = h10 - 1;
                int i17 = L[i16];
                int b10 = k.b(i17, i10) | i15;
                int i18 = b10 & i14;
                int h11 = k.h(a10, i18);
                k.i(a10, i18, h10);
                L[i16] = k.d(b10, h11, i14);
                h10 = k.c(i17, i10);
            }
        }
        this.f31853d = a10;
        T(i14);
        return i14;
    }

    private void S(int i10, int i11) {
        L()[i10] = i11;
    }

    private void T(int i10) {
        this.f31857p = k.d(this.f31857p, 32 - Integer.numberOfLeadingZeros(i10), 31);
    }

    private void U(int i10, Object obj) {
        M()[i10] = obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V(int i10, Object obj) {
        O()[i10] = obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Object W(int i10) {
        return O()[i10];
    }

    static /* synthetic */ int e(j jVar) {
        int i10 = jVar.f31858q;
        jVar.f31858q = i10 - 1;
        return i10;
    }

    public static j v(int i10) {
        return new j(i10);
    }

    private int x(int i10) {
        return L()[i10];
    }

    int A(int i10) {
        int i11 = i10 + 1;
        if (i11 < this.f31858q) {
            return i11;
        }
        return -1;
    }

    void C() {
        this.f31857p += 32;
    }

    void E(int i10) {
        boolean z10;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ii.m.e(z10, "Expected size must be >= 0");
        this.f31857p = li.e.f(i10, 1, 1073741823);
    }

    void F(int i10, Object obj, Object obj2, int i11, int i12) {
        S(i10, k.d(i11, 0, i12));
        U(i10, obj);
        V(i10, obj2);
    }

    Iterator H() {
        Map w10 = w();
        if (w10 != null) {
            return w10.keySet().iterator();
        }
        return new a();
    }

    void I(int i10, int i11) {
        Object N = N();
        int[] L = L();
        Object[] M = M();
        Object[] O = O();
        int size = size();
        int i12 = size - 1;
        if (i10 < i12) {
            Object obj = M[i12];
            M[i10] = obj;
            O[i10] = O[i12];
            M[i12] = null;
            O[i12] = null;
            L[i10] = L[i12];
            L[i12] = 0;
            int c10 = p.c(obj) & i11;
            int h10 = k.h(N, c10);
            if (h10 == size) {
                k.i(N, c10, i10 + 1);
                return;
            }
            while (true) {
                int i13 = h10 - 1;
                int i14 = L[i13];
                int c11 = k.c(i14, i11);
                if (c11 == size) {
                    L[i13] = k.d(i14, i10 + 1, i11);
                    return;
                }
                h10 = c11;
            }
        } else {
            M[i10] = null;
            O[i10] = null;
            L[i10] = 0;
        }
    }

    boolean J() {
        if (this.f31853d == null) {
            return true;
        }
        return false;
    }

    void P(int i10) {
        this.f31854e = Arrays.copyOf(L(), i10);
        this.f31855i = Arrays.copyOf(M(), i10);
        this.f31856o = Arrays.copyOf(O(), i10);
    }

    Iterator X() {
        Map w10 = w();
        if (w10 != null) {
            return w10.values().iterator();
        }
        return new c();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public void clear() {
        if (J()) {
            return;
        }
        C();
        Map w10 = w();
        if (w10 != null) {
            this.f31857p = li.e.f(size(), 3, 1073741823);
            w10.clear();
            this.f31853d = null;
            this.f31858q = 0;
            return;
        }
        Arrays.fill(M(), 0, this.f31858q, (Object) null);
        Arrays.fill(O(), 0, this.f31858q, (Object) null);
        k.g(N());
        Arrays.fill(L(), 0, this.f31858q, 0);
        this.f31858q = 0;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean containsKey(Object obj) {
        Map w10 = w();
        if (w10 != null) {
            return w10.containsKey(obj);
        }
        if (D(obj) != -1) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean containsValue(Object obj) {
        Map w10 = w();
        if (w10 != null) {
            return w10.containsValue(obj);
        }
        for (int i10 = 0; i10 < this.f31858q; i10++) {
            if (ii.j.a(obj, W(i10))) {
                return true;
            }
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set entrySet() {
        Set set = this.f31860s;
        if (set == null) {
            Set r10 = r();
            this.f31860s = r10;
            return r10;
        }
        return set;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object get(Object obj) {
        Map w10 = w();
        if (w10 != null) {
            return w10.get(obj);
        }
        int D = D(obj);
        if (D == -1) {
            return null;
        }
        n(D);
        return W(D);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Set keySet() {
        Set set = this.f31859r;
        if (set == null) {
            Set t10 = t();
            this.f31859r = t10;
            return t10;
        }
        return set;
    }

    int o(int i10, int i11) {
        return i10 - 1;
    }

    int p() {
        ii.m.p(J(), "Arrays already allocated");
        int i10 = this.f31857p;
        int j10 = k.j(i10);
        this.f31853d = k.a(j10);
        T(j10 - 1);
        this.f31854e = new int[i10];
        this.f31855i = new Object[i10];
        this.f31856o = new Object[i10];
        return i10;
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object put(Object obj, Object obj2) {
        if (J()) {
            p();
        }
        Map w10 = w();
        if (w10 != null) {
            return w10.put(obj, obj2);
        }
        int[] L = L();
        Object[] M = M();
        Object[] O = O();
        int i10 = this.f31858q;
        int i11 = i10 + 1;
        int c10 = p.c(obj);
        int B = B();
        int i12 = c10 & B;
        int h10 = k.h(N(), i12);
        if (h10 == 0) {
            if (i11 > B) {
                B = R(B, k.e(B), c10, i10);
            } else {
                k.i(N(), i12, i11);
            }
        } else {
            int b10 = k.b(c10, B);
            int i13 = 0;
            while (true) {
                int i14 = h10 - 1;
                int i15 = L[i14];
                if (k.b(i15, B) == b10 && ii.j.a(obj, M[i14])) {
                    Object obj3 = O[i14];
                    O[i14] = obj2;
                    n(i14);
                    return obj3;
                }
                int c11 = k.c(i15, B);
                i13++;
                if (c11 == 0) {
                    if (i13 >= 9) {
                        return q().put(obj, obj2);
                    }
                    if (i11 > B) {
                        B = R(B, k.e(B), c10, i10);
                    } else {
                        L[i14] = k.d(i15, i11, B);
                    }
                } else {
                    obj = obj;
                    obj2 = obj2;
                    h10 = c11;
                }
            }
        }
        int i16 = B;
        Q(i11);
        F(i10, obj, obj2, c10, i16);
        this.f31858q = i11;
        C();
        return null;
    }

    Map q() {
        Map s10 = s(B() + 1);
        int z10 = z();
        while (z10 >= 0) {
            s10.put(G(z10), W(z10));
            z10 = A(z10);
        }
        this.f31853d = s10;
        this.f31854e = null;
        this.f31855i = null;
        this.f31856o = null;
        C();
        return s10;
    }

    Set r() {
        return new d();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Object remove(Object obj) {
        Map w10 = w();
        if (w10 != null) {
            return w10.remove(obj);
        }
        Object K = K(obj);
        if (K == f31852u) {
            return null;
        }
        return K;
    }

    Map s(int i10) {
        return new LinkedHashMap(i10, 1.0f);
    }

    @Override // java.util.AbstractMap, java.util.Map
    public int size() {
        Map w10 = w();
        if (w10 != null) {
            return w10.size();
        }
        return this.f31858q;
    }

    Set t() {
        return new f();
    }

    Collection u() {
        return new h();
    }

    @Override // java.util.AbstractMap, java.util.Map
    public Collection values() {
        Collection collection = this.f31861t;
        if (collection == null) {
            Collection u10 = u();
            this.f31861t = u10;
            return u10;
        }
        return collection;
    }

    Map w() {
        Object obj = this.f31853d;
        if (obj instanceof Map) {
            return (Map) obj;
        }
        return null;
    }

    Iterator y() {
        Map w10 = w();
        if (w10 != null) {
            return w10.entrySet().iterator();
        }
        return new b();
    }

    int z() {
        if (isEmpty()) {
            return -1;
        }
        return 0;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private abstract class e implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        int f31866d;

        /* renamed from: e  reason: collision with root package name */
        int f31867e;

        /* renamed from: i  reason: collision with root package name */
        int f31868i;

        private e() {
            this.f31866d = j.this.f31857p;
            this.f31867e = j.this.z();
            this.f31868i = -1;
        }

        private void a() {
            if (j.this.f31857p == this.f31866d) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        abstract Object b(int i10);

        void c() {
            this.f31866d += 32;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f31867e >= 0) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (hasNext()) {
                int i10 = this.f31867e;
                this.f31868i = i10;
                Object b10 = b(i10);
                this.f31867e = j.this.A(this.f31867e);
                return b10;
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            boolean z10;
            a();
            if (this.f31868i >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ji.h.c(z10);
            c();
            j jVar = j.this;
            jVar.remove(jVar.G(this.f31868i));
            this.f31867e = j.this.o(this.f31867e, this.f31868i);
            this.f31868i = -1;
        }

        /* synthetic */ e(j jVar, a aVar) {
            this();
        }
    }

    void n(int i10) {
    }
}
