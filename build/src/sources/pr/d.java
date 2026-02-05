package pr;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMutableIterator;
import kotlin.jvm.internal.markers.KMutableMap;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements Map, Serializable, KMutableMap {
    @NotNull

    /* renamed from: y  reason: collision with root package name */
    public static final a f46286y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final d f46287z;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f46288d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f46289e;

    /* renamed from: i  reason: collision with root package name */
    private int[] f46290i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f46291o;

    /* renamed from: p  reason: collision with root package name */
    private int f46292p;

    /* renamed from: q  reason: collision with root package name */
    private int f46293q;

    /* renamed from: r  reason: collision with root package name */
    private int f46294r;

    /* renamed from: s  reason: collision with root package name */
    private int f46295s;

    /* renamed from: t  reason: collision with root package name */
    private int f46296t;

    /* renamed from: u  reason: collision with root package name */
    private pr.f f46297u;

    /* renamed from: v  reason: collision with root package name */
    private g f46298v;

    /* renamed from: w  reason: collision with root package name */
    private pr.e f46299w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f46300x;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int c(int i10) {
            return Integer.highestOneBit(kotlin.ranges.d.d(i10, 1) * 3);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int d(int i10) {
            return Integer.numberOfLeadingZeros(i10) + 1;
        }

        public final d e() {
            return d.f46287z;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends C0574d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        /* renamed from: h */
        public c next() {
            a();
            if (b() < d().f46293q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                c cVar = new c(d(), c());
                e();
                return cVar;
            }
            throw new NoSuchElementException();
        }

        public final void i(StringBuilder sb2) {
            Intrinsics.checkNotNullParameter(sb2, "sb");
            if (b() < d().f46293q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f46288d[c()];
                if (obj == d()) {
                    sb2.append("(this Map)");
                } else {
                    sb2.append(obj);
                }
                sb2.append('=');
                Object[] objArr = d().f46289e;
                Intrinsics.checkNotNull(objArr);
                Object obj2 = objArr[c()];
                if (obj2 == d()) {
                    sb2.append("(this Map)");
                } else {
                    sb2.append(obj2);
                }
                e();
                return;
            }
            throw new NoSuchElementException();
        }

        public final int j() {
            int i10;
            if (b() < d().f46293q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f46288d[c()];
                int i11 = 0;
                if (obj != null) {
                    i10 = obj.hashCode();
                } else {
                    i10 = 0;
                }
                Object[] objArr = d().f46289e;
                Intrinsics.checkNotNull(objArr);
                Object obj2 = objArr[c()];
                if (obj2 != null) {
                    i11 = obj2.hashCode();
                }
                int i12 = i10 ^ i11;
                e();
                return i12;
            }
            throw new NoSuchElementException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements Map.Entry, KMutableMap.Entry {

        /* renamed from: d  reason: collision with root package name */
        private final d f46301d;

        /* renamed from: e  reason: collision with root package name */
        private final int f46302e;

        /* renamed from: i  reason: collision with root package name */
        private final int f46303i;

        public c(d map, int i10) {
            Intrinsics.checkNotNullParameter(map, "map");
            this.f46301d = map;
            this.f46302e = i10;
            this.f46303i = map.f46295s;
        }

        private final void a() {
            if (this.f46301d.f46295s == this.f46303i) {
                return;
            }
            throw new ConcurrentModificationException("The backing map has been modified after this entry was obtained.");
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                if (Intrinsics.areEqual(entry.getKey(), getKey()) && Intrinsics.areEqual(entry.getValue(), getValue())) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            a();
            return this.f46301d.f46288d[this.f46302e];
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            a();
            Object[] objArr = this.f46301d.f46289e;
            Intrinsics.checkNotNull(objArr);
            return objArr[this.f46302e];
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int i10;
            Object key = getKey();
            int i11 = 0;
            if (key != null) {
                i10 = key.hashCode();
            } else {
                i10 = 0;
            }
            Object value = getValue();
            if (value != null) {
                i11 = value.hashCode();
            }
            return i10 ^ i11;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            a();
            this.f46301d.l();
            Object[] j10 = this.f46301d.j();
            int i10 = this.f46302e;
            Object obj2 = j10[i10];
            j10[i10] = obj;
            return obj2;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(getKey());
            sb2.append('=');
            sb2.append(getValue());
            return sb2.toString();
        }
    }

    /* renamed from: pr.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0574d {

        /* renamed from: d  reason: collision with root package name */
        private final d f46304d;

        /* renamed from: e  reason: collision with root package name */
        private int f46305e;

        /* renamed from: i  reason: collision with root package name */
        private int f46306i;

        /* renamed from: o  reason: collision with root package name */
        private int f46307o;

        public C0574d(d map) {
            Intrinsics.checkNotNullParameter(map, "map");
            this.f46304d = map;
            this.f46306i = -1;
            this.f46307o = map.f46295s;
            e();
        }

        public final void a() {
            if (this.f46304d.f46295s == this.f46307o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        public final int b() {
            return this.f46305e;
        }

        public final int c() {
            return this.f46306i;
        }

        public final d d() {
            return this.f46304d;
        }

        public final void e() {
            while (this.f46305e < this.f46304d.f46293q) {
                int[] iArr = this.f46304d.f46290i;
                int i10 = this.f46305e;
                if (iArr[i10] < 0) {
                    this.f46305e = i10 + 1;
                } else {
                    return;
                }
            }
        }

        public final void f(int i10) {
            this.f46305e = i10;
        }

        public final void g(int i10) {
            this.f46306i = i10;
        }

        public final boolean hasNext() {
            if (this.f46305e < this.f46304d.f46293q) {
                return true;
            }
            return false;
        }

        public final void remove() {
            a();
            if (this.f46306i != -1) {
                this.f46304d.l();
                this.f46304d.J(this.f46306i);
                this.f46306i = -1;
                this.f46307o = this.f46304d.f46295s;
                return;
            }
            throw new IllegalStateException("Call next() before removing element from the iterator.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends C0574d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (b() < d().f46293q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f46288d[c()];
                e();
                return obj;
            }
            throw new NoSuchElementException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends C0574d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (b() < d().f46293q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object[] objArr = d().f46289e;
                Intrinsics.checkNotNull(objArr);
                Object obj = objArr[c()];
                e();
                return obj;
            }
            throw new NoSuchElementException();
        }
    }

    static {
        d dVar = new d(0);
        dVar.f46300x = true;
        f46287z = dVar;
    }

    private d(Object[] objArr, Object[] objArr2, int[] iArr, int[] iArr2, int i10, int i11) {
        this.f46288d = objArr;
        this.f46289e = objArr2;
        this.f46290i = iArr;
        this.f46291o = iArr2;
        this.f46292p = i10;
        this.f46293q = i11;
        this.f46294r = f46286y.d(x());
    }

    private final int B(Object obj) {
        int i10;
        if (obj != null) {
            i10 = obj.hashCode();
        } else {
            i10 = 0;
        }
        return (i10 * (-1640531527)) >>> this.f46294r;
    }

    private final boolean D(Collection collection) {
        boolean z10 = false;
        if (collection.isEmpty()) {
            return false;
        }
        r(collection.size());
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            if (E((Map.Entry) it.next())) {
                z10 = true;
            }
        }
        return z10;
    }

    private final boolean E(Map.Entry entry) {
        int i10 = i(entry.getKey());
        Object[] j10 = j();
        if (i10 >= 0) {
            j10[i10] = entry.getValue();
            return true;
        }
        int i11 = (-i10) - 1;
        if (!Intrinsics.areEqual(entry.getValue(), j10[i11])) {
            j10[i11] = entry.getValue();
            return true;
        }
        return false;
    }

    private final boolean F(int i10) {
        int B = B(this.f46288d[i10]);
        int i11 = this.f46292p;
        while (true) {
            int[] iArr = this.f46291o;
            if (iArr[B] == 0) {
                iArr[B] = i10 + 1;
                this.f46290i[i10] = B;
                return true;
            }
            i11--;
            if (i11 < 0) {
                return false;
            }
            int i12 = B - 1;
            if (B == 0) {
                B = x() - 1;
            } else {
                B = i12;
            }
        }
    }

    private final void G() {
        this.f46295s++;
    }

    private final void H(int i10) {
        G();
        int i11 = 0;
        if (this.f46293q > size()) {
            m(false);
        }
        this.f46291o = new int[i10];
        this.f46294r = f46286y.d(i10);
        while (i11 < this.f46293q) {
            int i12 = i11 + 1;
            if (F(i11)) {
                i11 = i12;
            } else {
                throw new IllegalStateException("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?");
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void J(int i10) {
        pr.c.f(this.f46288d, i10);
        Object[] objArr = this.f46289e;
        if (objArr != null) {
            pr.c.f(objArr, i10);
        }
        K(this.f46290i[i10]);
        this.f46290i[i10] = -1;
        this.f46296t = size() - 1;
        G();
    }

    private final void K(int i10) {
        int i11 = kotlin.ranges.d.i(this.f46292p * 2, x() / 2);
        int i12 = 0;
        int i13 = i10;
        do {
            int i14 = i10 - 1;
            if (i10 == 0) {
                i10 = x() - 1;
            } else {
                i10 = i14;
            }
            i12++;
            if (i12 > this.f46292p) {
                this.f46291o[i13] = 0;
                return;
            }
            int[] iArr = this.f46291o;
            int i15 = iArr[i10];
            if (i15 == 0) {
                iArr[i13] = 0;
                return;
            }
            if (i15 < 0) {
                iArr[i13] = -1;
            } else {
                int i16 = i15 - 1;
                if (((B(this.f46288d[i16]) - i10) & (x() - 1)) >= i12) {
                    this.f46291o[i13] = i15;
                    this.f46290i[i16] = i13;
                }
                i11--;
            }
            i13 = i10;
            i12 = 0;
            i11--;
        } while (i11 >= 0);
        this.f46291o[i13] = -1;
    }

    private final boolean N(int i10) {
        int v10 = v();
        int i11 = this.f46293q;
        int i12 = v10 - i11;
        int size = i11 - size();
        if (i12 < i10 && i12 + size >= i10 && size >= v() / 4) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] j() {
        Object[] objArr = this.f46289e;
        if (objArr != null) {
            return objArr;
        }
        Object[] d10 = pr.c.d(v());
        this.f46289e = d10;
        return d10;
    }

    private final void m(boolean z10) {
        int i10;
        Object[] objArr = this.f46289e;
        int i11 = 0;
        int i12 = 0;
        while (true) {
            i10 = this.f46293q;
            if (i11 >= i10) {
                break;
            }
            int[] iArr = this.f46290i;
            int i13 = iArr[i11];
            if (i13 >= 0) {
                Object[] objArr2 = this.f46288d;
                objArr2[i12] = objArr2[i11];
                if (objArr != null) {
                    objArr[i12] = objArr[i11];
                }
                if (z10) {
                    iArr[i12] = i13;
                    this.f46291o[i13] = i12 + 1;
                }
                i12++;
            }
            i11++;
        }
        pr.c.g(this.f46288d, i12, i10);
        if (objArr != null) {
            pr.c.g(objArr, i12, this.f46293q);
        }
        this.f46293q = i12;
    }

    private final boolean p(Map map) {
        if (size() == map.size() && n(map.entrySet())) {
            return true;
        }
        return false;
    }

    private final void q(int i10) {
        Object[] objArr;
        if (i10 >= 0) {
            if (i10 > v()) {
                int e10 = kotlin.collections.d.f32022d.e(v(), i10);
                this.f46288d = pr.c.e(this.f46288d, e10);
                Object[] objArr2 = this.f46289e;
                if (objArr2 != null) {
                    objArr = pr.c.e(objArr2, e10);
                } else {
                    objArr = null;
                }
                this.f46289e = objArr;
                int[] copyOf = Arrays.copyOf(this.f46290i, e10);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                this.f46290i = copyOf;
                int c10 = f46286y.c(e10);
                if (c10 > x()) {
                    H(c10);
                    return;
                }
                return;
            }
            return;
        }
        throw new OutOfMemoryError();
    }

    private final void r(int i10) {
        if (N(i10)) {
            m(true);
        } else {
            q(this.f46293q + i10);
        }
    }

    private final int t(Object obj) {
        int B = B(obj);
        int i10 = this.f46292p;
        while (true) {
            int i11 = this.f46291o[B];
            if (i11 == 0) {
                return -1;
            }
            if (i11 > 0) {
                int i12 = i11 - 1;
                if (Intrinsics.areEqual(this.f46288d[i12], obj)) {
                    return i12;
                }
            }
            i10--;
            if (i10 < 0) {
                return -1;
            }
            int i13 = B - 1;
            if (B == 0) {
                B = x() - 1;
            } else {
                B = i13;
            }
        }
    }

    private final int u(Object obj) {
        int i10 = this.f46293q;
        while (true) {
            i10--;
            if (i10 < 0) {
                return -1;
            }
            if (this.f46290i[i10] >= 0) {
                Object[] objArr = this.f46289e;
                Intrinsics.checkNotNull(objArr);
                if (Intrinsics.areEqual(objArr[i10], obj)) {
                    return i10;
                }
            }
        }
    }

    private final int x() {
        return this.f46291o.length;
    }

    public Collection A() {
        g gVar = this.f46298v;
        if (gVar == null) {
            g gVar2 = new g(this);
            this.f46298v = gVar2;
            return gVar2;
        }
        return gVar;
    }

    public final e C() {
        return new e(this);
    }

    public final boolean I(Map.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "entry");
        l();
        int t10 = t(entry.getKey());
        if (t10 < 0) {
            return false;
        }
        Object[] objArr = this.f46289e;
        Intrinsics.checkNotNull(objArr);
        if (!Intrinsics.areEqual(objArr[t10], entry.getValue())) {
            return false;
        }
        J(t10);
        return true;
    }

    public final boolean L(Object obj) {
        l();
        int t10 = t(obj);
        if (t10 < 0) {
            return false;
        }
        J(t10);
        return true;
    }

    public final boolean M(Object obj) {
        l();
        int u10 = u(obj);
        if (u10 < 0) {
            return false;
        }
        J(u10);
        return true;
    }

    public final f O() {
        return new f(this);
    }

    @Override // java.util.Map
    public void clear() {
        l();
        int i10 = this.f46293q - 1;
        if (i10 >= 0) {
            int i11 = 0;
            while (true) {
                int[] iArr = this.f46290i;
                int i12 = iArr[i11];
                if (i12 >= 0) {
                    this.f46291o[i12] = 0;
                    iArr[i11] = -1;
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        pr.c.g(this.f46288d, 0, this.f46293q);
        Object[] objArr = this.f46289e;
        if (objArr != null) {
            pr.c.g(objArr, 0, this.f46293q);
        }
        this.f46296t = 0;
        this.f46293q = 0;
        G();
    }

    @Override // java.util.Map
    public boolean containsKey(Object obj) {
        if (t(obj) >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map
    public boolean containsValue(Object obj) {
        if (u(obj) >= 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map
    public final /* bridge */ Set entrySet() {
        return w();
    }

    @Override // java.util.Map
    public boolean equals(Object obj) {
        if (obj != this) {
            if (!(obj instanceof Map) || !p((Map) obj)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // java.util.Map
    public Object get(Object obj) {
        int t10 = t(obj);
        if (t10 < 0) {
            return null;
        }
        Object[] objArr = this.f46289e;
        Intrinsics.checkNotNull(objArr);
        return objArr[t10];
    }

    @Override // java.util.Map
    public int hashCode() {
        b s10 = s();
        int i10 = 0;
        while (s10.hasNext()) {
            i10 += s10.j();
        }
        return i10;
    }

    public final int i(Object obj) {
        l();
        while (true) {
            int B = B(obj);
            int i10 = kotlin.ranges.d.i(this.f46292p * 2, x() / 2);
            int i11 = 0;
            while (true) {
                int i12 = this.f46291o[B];
                if (i12 <= 0) {
                    if (this.f46293q >= v()) {
                        r(1);
                    } else {
                        int i13 = this.f46293q;
                        int i14 = i13 + 1;
                        this.f46293q = i14;
                        this.f46288d[i13] = obj;
                        this.f46290i[i13] = B;
                        this.f46291o[B] = i14;
                        this.f46296t = size() + 1;
                        G();
                        if (i11 > this.f46292p) {
                            this.f46292p = i11;
                        }
                        return i13;
                    }
                } else if (Intrinsics.areEqual(this.f46288d[i12 - 1], obj)) {
                    return -i12;
                } else {
                    i11++;
                    if (i11 > i10) {
                        H(x() * 2);
                        break;
                    }
                    int i15 = B - 1;
                    if (B == 0) {
                        B = x() - 1;
                    } else {
                        B = i15;
                    }
                }
            }
        }
    }

    @Override // java.util.Map
    public boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    public final Map k() {
        l();
        this.f46300x = true;
        if (size() > 0) {
            return this;
        }
        d dVar = f46287z;
        Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlin.collections.Map<K of kotlin.collections.builders.MapBuilder, V of kotlin.collections.builders.MapBuilder>");
        return dVar;
    }

    @Override // java.util.Map
    public final /* bridge */ Set keySet() {
        return y();
    }

    public final void l() {
        if (!this.f46300x) {
            return;
        }
        throw new UnsupportedOperationException();
    }

    public final boolean n(Collection m10) {
        Intrinsics.checkNotNullParameter(m10, "m");
        for (Object obj : m10) {
            if (obj != null) {
                try {
                    if (!o((Map.Entry) obj)) {
                    }
                } catch (ClassCastException unused) {
                }
            }
            return false;
        }
        return true;
    }

    public final boolean o(Map.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "entry");
        int t10 = t(entry.getKey());
        if (t10 < 0) {
            return false;
        }
        Object[] objArr = this.f46289e;
        Intrinsics.checkNotNull(objArr);
        return Intrinsics.areEqual(objArr[t10], entry.getValue());
    }

    @Override // java.util.Map
    public Object put(Object obj, Object obj2) {
        l();
        int i10 = i(obj);
        Object[] j10 = j();
        if (i10 < 0) {
            int i11 = (-i10) - 1;
            Object obj3 = j10[i11];
            j10[i11] = obj2;
            return obj3;
        }
        j10[i10] = obj2;
        return null;
    }

    @Override // java.util.Map
    public void putAll(Map from) {
        Intrinsics.checkNotNullParameter(from, "from");
        l();
        D(from.entrySet());
    }

    @Override // java.util.Map
    public Object remove(Object obj) {
        l();
        int t10 = t(obj);
        if (t10 < 0) {
            return null;
        }
        Object[] objArr = this.f46289e;
        Intrinsics.checkNotNull(objArr);
        Object obj2 = objArr[t10];
        J(t10);
        return obj2;
    }

    public final b s() {
        return new b(this);
    }

    @Override // java.util.Map
    public final /* bridge */ int size() {
        return z();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((size() * 3) + 2);
        sb2.append("{");
        b s10 = s();
        int i10 = 0;
        while (s10.hasNext()) {
            if (i10 > 0) {
                sb2.append(", ");
            }
            s10.i(sb2);
            i10++;
        }
        sb2.append("}");
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    public final int v() {
        return this.f46288d.length;
    }

    @Override // java.util.Map
    public final /* bridge */ Collection values() {
        return A();
    }

    public Set w() {
        pr.e eVar = this.f46299w;
        if (eVar == null) {
            pr.e eVar2 = new pr.e(this);
            this.f46299w = eVar2;
            return eVar2;
        }
        return eVar;
    }

    public Set y() {
        pr.f fVar = this.f46297u;
        if (fVar == null) {
            pr.f fVar2 = new pr.f(this);
            this.f46297u = fVar2;
            return fVar2;
        }
        return fVar;
    }

    public int z() {
        return this.f46296t;
    }

    public d() {
        this(8);
    }

    public d(int i10) {
        this(pr.c.d(i10), null, new int[i10], new int[f46286y.c(i10)], 2, 0);
    }
}
