package jr;

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
    public static final a f32443y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final d f32444z;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f32445d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f32446e;

    /* renamed from: i  reason: collision with root package name */
    private int[] f32447i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f32448o;

    /* renamed from: p  reason: collision with root package name */
    private int f32449p;

    /* renamed from: q  reason: collision with root package name */
    private int f32450q;

    /* renamed from: r  reason: collision with root package name */
    private int f32451r;

    /* renamed from: s  reason: collision with root package name */
    private int f32452s;

    /* renamed from: t  reason: collision with root package name */
    private int f32453t;

    /* renamed from: u  reason: collision with root package name */
    private jr.f f32454u;

    /* renamed from: v  reason: collision with root package name */
    private g f32455v;

    /* renamed from: w  reason: collision with root package name */
    private jr.e f32456w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f32457x;

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
            return d.f32444z;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends C0429d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        /* renamed from: h */
        public c next() {
            a();
            if (b() < d().f32450q) {
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
            if (b() < d().f32450q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f32445d[c()];
                if (obj == d()) {
                    sb2.append("(this Map)");
                } else {
                    sb2.append(obj);
                }
                sb2.append('=');
                Object[] objArr = d().f32446e;
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
            if (b() < d().f32450q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f32445d[c()];
                int i11 = 0;
                if (obj != null) {
                    i10 = obj.hashCode();
                } else {
                    i10 = 0;
                }
                Object[] objArr = d().f32446e;
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
        private final d f32458d;

        /* renamed from: e  reason: collision with root package name */
        private final int f32459e;

        /* renamed from: i  reason: collision with root package name */
        private final int f32460i;

        public c(d map, int i10) {
            Intrinsics.checkNotNullParameter(map, "map");
            this.f32458d = map;
            this.f32459e = i10;
            this.f32460i = map.f32452s;
        }

        private final void a() {
            if (this.f32458d.f32452s == this.f32460i) {
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
            return this.f32458d.f32445d[this.f32459e];
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            a();
            Object[] objArr = this.f32458d.f32446e;
            Intrinsics.checkNotNull(objArr);
            return objArr[this.f32459e];
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
            this.f32458d.l();
            Object[] j10 = this.f32458d.j();
            int i10 = this.f32459e;
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

    /* renamed from: jr.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0429d {

        /* renamed from: d  reason: collision with root package name */
        private final d f32461d;

        /* renamed from: e  reason: collision with root package name */
        private int f32462e;

        /* renamed from: i  reason: collision with root package name */
        private int f32463i;

        /* renamed from: o  reason: collision with root package name */
        private int f32464o;

        public C0429d(d map) {
            Intrinsics.checkNotNullParameter(map, "map");
            this.f32461d = map;
            this.f32463i = -1;
            this.f32464o = map.f32452s;
            e();
        }

        public final void a() {
            if (this.f32461d.f32452s == this.f32464o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        public final int b() {
            return this.f32462e;
        }

        public final int c() {
            return this.f32463i;
        }

        public final d d() {
            return this.f32461d;
        }

        public final void e() {
            while (this.f32462e < this.f32461d.f32450q) {
                int[] iArr = this.f32461d.f32447i;
                int i10 = this.f32462e;
                if (iArr[i10] < 0) {
                    this.f32462e = i10 + 1;
                } else {
                    return;
                }
            }
        }

        public final void f(int i10) {
            this.f32462e = i10;
        }

        public final void g(int i10) {
            this.f32463i = i10;
        }

        public final boolean hasNext() {
            if (this.f32462e < this.f32461d.f32450q) {
                return true;
            }
            return false;
        }

        public final void remove() {
            a();
            if (this.f32463i != -1) {
                this.f32461d.l();
                this.f32461d.J(this.f32463i);
                this.f32463i = -1;
                this.f32464o = this.f32461d.f32452s;
                return;
            }
            throw new IllegalStateException("Call next() before removing element from the iterator.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends C0429d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (b() < d().f32450q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f32445d[c()];
                e();
                return obj;
            }
            throw new NoSuchElementException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends C0429d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (b() < d().f32450q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object[] objArr = d().f32446e;
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
        dVar.f32457x = true;
        f32444z = dVar;
    }

    private d(Object[] objArr, Object[] objArr2, int[] iArr, int[] iArr2, int i10, int i11) {
        this.f32445d = objArr;
        this.f32446e = objArr2;
        this.f32447i = iArr;
        this.f32448o = iArr2;
        this.f32449p = i10;
        this.f32450q = i11;
        this.f32451r = f32443y.d(x());
    }

    private final int B(Object obj) {
        int i10;
        if (obj != null) {
            i10 = obj.hashCode();
        } else {
            i10 = 0;
        }
        return (i10 * (-1640531527)) >>> this.f32451r;
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
        int B = B(this.f32445d[i10]);
        int i11 = this.f32449p;
        while (true) {
            int[] iArr = this.f32448o;
            if (iArr[B] == 0) {
                iArr[B] = i10 + 1;
                this.f32447i[i10] = B;
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
        this.f32452s++;
    }

    private final void H(int i10) {
        G();
        int i11 = 0;
        if (this.f32450q > size()) {
            m(false);
        }
        this.f32448o = new int[i10];
        this.f32451r = f32443y.d(i10);
        while (i11 < this.f32450q) {
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
        jr.c.f(this.f32445d, i10);
        Object[] objArr = this.f32446e;
        if (objArr != null) {
            jr.c.f(objArr, i10);
        }
        K(this.f32447i[i10]);
        this.f32447i[i10] = -1;
        this.f32453t = size() - 1;
        G();
    }

    private final void K(int i10) {
        int i11 = kotlin.ranges.d.i(this.f32449p * 2, x() / 2);
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
            if (i12 > this.f32449p) {
                this.f32448o[i13] = 0;
                return;
            }
            int[] iArr = this.f32448o;
            int i15 = iArr[i10];
            if (i15 == 0) {
                iArr[i13] = 0;
                return;
            }
            if (i15 < 0) {
                iArr[i13] = -1;
            } else {
                int i16 = i15 - 1;
                if (((B(this.f32445d[i16]) - i10) & (x() - 1)) >= i12) {
                    this.f32448o[i13] = i15;
                    this.f32447i[i16] = i13;
                }
                i11--;
            }
            i13 = i10;
            i12 = 0;
            i11--;
        } while (i11 >= 0);
        this.f32448o[i13] = -1;
    }

    private final boolean N(int i10) {
        int v10 = v();
        int i11 = this.f32450q;
        int i12 = v10 - i11;
        int size = i11 - size();
        if (i12 < i10 && i12 + size >= i10 && size >= v() / 4) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] j() {
        Object[] objArr = this.f32446e;
        if (objArr != null) {
            return objArr;
        }
        Object[] d10 = jr.c.d(v());
        this.f32446e = d10;
        return d10;
    }

    private final void m(boolean z10) {
        int i10;
        Object[] objArr = this.f32446e;
        int i11 = 0;
        int i12 = 0;
        while (true) {
            i10 = this.f32450q;
            if (i11 >= i10) {
                break;
            }
            int[] iArr = this.f32447i;
            int i13 = iArr[i11];
            if (i13 >= 0) {
                Object[] objArr2 = this.f32445d;
                objArr2[i12] = objArr2[i11];
                if (objArr != null) {
                    objArr[i12] = objArr[i11];
                }
                if (z10) {
                    iArr[i12] = i13;
                    this.f32448o[i13] = i12 + 1;
                }
                i12++;
            }
            i11++;
        }
        jr.c.g(this.f32445d, i12, i10);
        if (objArr != null) {
            jr.c.g(objArr, i12, this.f32450q);
        }
        this.f32450q = i12;
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
                int e10 = kotlin.collections.d.f33332d.e(v(), i10);
                this.f32445d = jr.c.e(this.f32445d, e10);
                Object[] objArr2 = this.f32446e;
                if (objArr2 != null) {
                    objArr = jr.c.e(objArr2, e10);
                } else {
                    objArr = null;
                }
                this.f32446e = objArr;
                int[] copyOf = Arrays.copyOf(this.f32447i, e10);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                this.f32447i = copyOf;
                int c10 = f32443y.c(e10);
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
            q(this.f32450q + i10);
        }
    }

    private final int t(Object obj) {
        int B = B(obj);
        int i10 = this.f32449p;
        while (true) {
            int i11 = this.f32448o[B];
            if (i11 == 0) {
                return -1;
            }
            if (i11 > 0) {
                int i12 = i11 - 1;
                if (Intrinsics.areEqual(this.f32445d[i12], obj)) {
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
        int i10 = this.f32450q;
        while (true) {
            i10--;
            if (i10 < 0) {
                return -1;
            }
            if (this.f32447i[i10] >= 0) {
                Object[] objArr = this.f32446e;
                Intrinsics.checkNotNull(objArr);
                if (Intrinsics.areEqual(objArr[i10], obj)) {
                    return i10;
                }
            }
        }
    }

    private final int x() {
        return this.f32448o.length;
    }

    public Collection A() {
        g gVar = this.f32455v;
        if (gVar == null) {
            g gVar2 = new g(this);
            this.f32455v = gVar2;
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
        Object[] objArr = this.f32446e;
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
        int i10 = this.f32450q - 1;
        if (i10 >= 0) {
            int i11 = 0;
            while (true) {
                int[] iArr = this.f32447i;
                int i12 = iArr[i11];
                if (i12 >= 0) {
                    this.f32448o[i12] = 0;
                    iArr[i11] = -1;
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        jr.c.g(this.f32445d, 0, this.f32450q);
        Object[] objArr = this.f32446e;
        if (objArr != null) {
            jr.c.g(objArr, 0, this.f32450q);
        }
        this.f32453t = 0;
        this.f32450q = 0;
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
        Object[] objArr = this.f32446e;
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
            int i10 = kotlin.ranges.d.i(this.f32449p * 2, x() / 2);
            int i11 = 0;
            while (true) {
                int i12 = this.f32448o[B];
                if (i12 <= 0) {
                    if (this.f32450q >= v()) {
                        r(1);
                    } else {
                        int i13 = this.f32450q;
                        int i14 = i13 + 1;
                        this.f32450q = i14;
                        this.f32445d[i13] = obj;
                        this.f32447i[i13] = B;
                        this.f32448o[B] = i14;
                        this.f32453t = size() + 1;
                        G();
                        if (i11 > this.f32449p) {
                            this.f32449p = i11;
                        }
                        return i13;
                    }
                } else if (Intrinsics.areEqual(this.f32445d[i12 - 1], obj)) {
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
        this.f32457x = true;
        if (size() > 0) {
            return this;
        }
        d dVar = f32444z;
        Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlin.collections.Map<K of kotlin.collections.builders.MapBuilder, V of kotlin.collections.builders.MapBuilder>");
        return dVar;
    }

    @Override // java.util.Map
    public final /* bridge */ Set keySet() {
        return y();
    }

    public final void l() {
        if (!this.f32457x) {
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
        Object[] objArr = this.f32446e;
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
        Object[] objArr = this.f32446e;
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
        return this.f32445d.length;
    }

    @Override // java.util.Map
    public final /* bridge */ Collection values() {
        return A();
    }

    public Set w() {
        jr.e eVar = this.f32456w;
        if (eVar == null) {
            jr.e eVar2 = new jr.e(this);
            this.f32456w = eVar2;
            return eVar2;
        }
        return eVar;
    }

    public Set y() {
        jr.f fVar = this.f32454u;
        if (fVar == null) {
            jr.f fVar2 = new jr.f(this);
            this.f32454u = fVar2;
            return fVar2;
        }
        return fVar;
    }

    public int z() {
        return this.f32453t;
    }

    public d() {
        this(8);
    }

    public d(int i10) {
        this(jr.c.d(i10), null, new int[i10], new int[f32443y.c(i10)], 2, 0);
    }
}
