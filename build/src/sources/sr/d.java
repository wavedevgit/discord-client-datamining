package sr;

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
    public static final a f50060y = new a(null);

    /* renamed from: z  reason: collision with root package name */
    private static final d f50061z;

    /* renamed from: d  reason: collision with root package name */
    private Object[] f50062d;

    /* renamed from: e  reason: collision with root package name */
    private Object[] f50063e;

    /* renamed from: i  reason: collision with root package name */
    private int[] f50064i;

    /* renamed from: o  reason: collision with root package name */
    private int[] f50065o;

    /* renamed from: p  reason: collision with root package name */
    private int f50066p;

    /* renamed from: q  reason: collision with root package name */
    private int f50067q;

    /* renamed from: r  reason: collision with root package name */
    private int f50068r;

    /* renamed from: s  reason: collision with root package name */
    private int f50069s;

    /* renamed from: t  reason: collision with root package name */
    private int f50070t;

    /* renamed from: u  reason: collision with root package name */
    private sr.f f50071u;

    /* renamed from: v  reason: collision with root package name */
    private g f50072v;

    /* renamed from: w  reason: collision with root package name */
    private sr.e f50073w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f50074x;

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
            return d.f50061z;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends C0675d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        /* renamed from: h */
        public c next() {
            a();
            if (b() < d().f50067q) {
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
            if (b() < d().f50067q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f50062d[c()];
                if (obj == d()) {
                    sb2.append("(this Map)");
                } else {
                    sb2.append(obj);
                }
                sb2.append('=');
                Object[] objArr = d().f50063e;
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
            if (b() < d().f50067q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f50062d[c()];
                int i11 = 0;
                if (obj != null) {
                    i10 = obj.hashCode();
                } else {
                    i10 = 0;
                }
                Object[] objArr = d().f50063e;
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
        private final d f50075d;

        /* renamed from: e  reason: collision with root package name */
        private final int f50076e;

        /* renamed from: i  reason: collision with root package name */
        private final int f50077i;

        public c(d map, int i10) {
            Intrinsics.checkNotNullParameter(map, "map");
            this.f50075d = map;
            this.f50076e = i10;
            this.f50077i = map.f50069s;
        }

        private final void a() {
            if (this.f50075d.f50069s == this.f50077i) {
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
            return this.f50075d.f50062d[this.f50076e];
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            a();
            Object[] objArr = this.f50075d.f50063e;
            Intrinsics.checkNotNull(objArr);
            return objArr[this.f50076e];
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
            this.f50075d.l();
            Object[] j10 = this.f50075d.j();
            int i10 = this.f50076e;
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

    /* renamed from: sr.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0675d {

        /* renamed from: d  reason: collision with root package name */
        private final d f50078d;

        /* renamed from: e  reason: collision with root package name */
        private int f50079e;

        /* renamed from: i  reason: collision with root package name */
        private int f50080i;

        /* renamed from: o  reason: collision with root package name */
        private int f50081o;

        public C0675d(d map) {
            Intrinsics.checkNotNullParameter(map, "map");
            this.f50078d = map;
            this.f50080i = -1;
            this.f50081o = map.f50069s;
            e();
        }

        public final void a() {
            if (this.f50078d.f50069s == this.f50081o) {
                return;
            }
            throw new ConcurrentModificationException();
        }

        public final int b() {
            return this.f50079e;
        }

        public final int c() {
            return this.f50080i;
        }

        public final d d() {
            return this.f50078d;
        }

        public final void e() {
            while (this.f50079e < this.f50078d.f50067q) {
                int[] iArr = this.f50078d.f50064i;
                int i10 = this.f50079e;
                if (iArr[i10] < 0) {
                    this.f50079e = i10 + 1;
                } else {
                    return;
                }
            }
        }

        public final void f(int i10) {
            this.f50079e = i10;
        }

        public final void g(int i10) {
            this.f50080i = i10;
        }

        public final boolean hasNext() {
            if (this.f50079e < this.f50078d.f50067q) {
                return true;
            }
            return false;
        }

        public final void remove() {
            a();
            if (this.f50080i != -1) {
                this.f50078d.l();
                this.f50078d.J(this.f50080i);
                this.f50080i = -1;
                this.f50081o = this.f50078d.f50069s;
                return;
            }
            throw new IllegalStateException("Call next() before removing element from the iterator.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends C0675d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (b() < d().f50067q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object obj = d().f50062d[c()];
                e();
                return obj;
            }
            throw new NoSuchElementException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends C0675d implements Iterator, KMutableIterator {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(d map) {
            super(map);
            Intrinsics.checkNotNullParameter(map, "map");
        }

        @Override // java.util.Iterator
        public Object next() {
            a();
            if (b() < d().f50067q) {
                int b10 = b();
                f(b10 + 1);
                g(b10);
                Object[] objArr = d().f50063e;
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
        dVar.f50074x = true;
        f50061z = dVar;
    }

    private d(Object[] objArr, Object[] objArr2, int[] iArr, int[] iArr2, int i10, int i11) {
        this.f50062d = objArr;
        this.f50063e = objArr2;
        this.f50064i = iArr;
        this.f50065o = iArr2;
        this.f50066p = i10;
        this.f50067q = i11;
        this.f50068r = f50060y.d(x());
    }

    private final int B(Object obj) {
        int i10;
        if (obj != null) {
            i10 = obj.hashCode();
        } else {
            i10 = 0;
        }
        return (i10 * (-1640531527)) >>> this.f50068r;
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
        int B = B(this.f50062d[i10]);
        int i11 = this.f50066p;
        while (true) {
            int[] iArr = this.f50065o;
            if (iArr[B] == 0) {
                iArr[B] = i10 + 1;
                this.f50064i[i10] = B;
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
        this.f50069s++;
    }

    private final void H(int i10) {
        G();
        int i11 = 0;
        if (this.f50067q > size()) {
            m(false);
        }
        this.f50065o = new int[i10];
        this.f50068r = f50060y.d(i10);
        while (i11 < this.f50067q) {
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
        sr.c.f(this.f50062d, i10);
        Object[] objArr = this.f50063e;
        if (objArr != null) {
            sr.c.f(objArr, i10);
        }
        K(this.f50064i[i10]);
        this.f50064i[i10] = -1;
        this.f50070t = size() - 1;
        G();
    }

    private final void K(int i10) {
        int i11 = kotlin.ranges.d.i(this.f50066p * 2, x() / 2);
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
            if (i12 > this.f50066p) {
                this.f50065o[i13] = 0;
                return;
            }
            int[] iArr = this.f50065o;
            int i15 = iArr[i10];
            if (i15 == 0) {
                iArr[i13] = 0;
                return;
            }
            if (i15 < 0) {
                iArr[i13] = -1;
            } else {
                int i16 = i15 - 1;
                if (((B(this.f50062d[i16]) - i10) & (x() - 1)) >= i12) {
                    this.f50065o[i13] = i15;
                    this.f50064i[i16] = i13;
                }
                i11--;
            }
            i13 = i10;
            i12 = 0;
            i11--;
        } while (i11 >= 0);
        this.f50065o[i13] = -1;
    }

    private final boolean N(int i10) {
        int v10 = v();
        int i11 = this.f50067q;
        int i12 = v10 - i11;
        int size = i11 - size();
        if (i12 < i10 && i12 + size >= i10 && size >= v() / 4) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object[] j() {
        Object[] objArr = this.f50063e;
        if (objArr != null) {
            return objArr;
        }
        Object[] d10 = sr.c.d(v());
        this.f50063e = d10;
        return d10;
    }

    private final void m(boolean z10) {
        int i10;
        Object[] objArr = this.f50063e;
        int i11 = 0;
        int i12 = 0;
        while (true) {
            i10 = this.f50067q;
            if (i11 >= i10) {
                break;
            }
            int[] iArr = this.f50064i;
            int i13 = iArr[i11];
            if (i13 >= 0) {
                Object[] objArr2 = this.f50062d;
                objArr2[i12] = objArr2[i11];
                if (objArr != null) {
                    objArr[i12] = objArr[i11];
                }
                if (z10) {
                    iArr[i12] = i13;
                    this.f50065o[i13] = i12 + 1;
                }
                i12++;
            }
            i11++;
        }
        sr.c.g(this.f50062d, i12, i10);
        if (objArr != null) {
            sr.c.g(objArr, i12, this.f50067q);
        }
        this.f50067q = i12;
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
                int e10 = kotlin.collections.d.f31799d.e(v(), i10);
                this.f50062d = sr.c.e(this.f50062d, e10);
                Object[] objArr2 = this.f50063e;
                if (objArr2 != null) {
                    objArr = sr.c.e(objArr2, e10);
                } else {
                    objArr = null;
                }
                this.f50063e = objArr;
                int[] copyOf = Arrays.copyOf(this.f50064i, e10);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                this.f50064i = copyOf;
                int c10 = f50060y.c(e10);
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
            q(this.f50067q + i10);
        }
    }

    private final int t(Object obj) {
        int B = B(obj);
        int i10 = this.f50066p;
        while (true) {
            int i11 = this.f50065o[B];
            if (i11 == 0) {
                return -1;
            }
            if (i11 > 0) {
                int i12 = i11 - 1;
                if (Intrinsics.areEqual(this.f50062d[i12], obj)) {
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
        int i10 = this.f50067q;
        while (true) {
            i10--;
            if (i10 < 0) {
                return -1;
            }
            if (this.f50064i[i10] >= 0) {
                Object[] objArr = this.f50063e;
                Intrinsics.checkNotNull(objArr);
                if (Intrinsics.areEqual(objArr[i10], obj)) {
                    return i10;
                }
            }
        }
    }

    private final int x() {
        return this.f50065o.length;
    }

    public Collection A() {
        g gVar = this.f50072v;
        if (gVar == null) {
            g gVar2 = new g(this);
            this.f50072v = gVar2;
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
        Object[] objArr = this.f50063e;
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
        int i10 = this.f50067q - 1;
        if (i10 >= 0) {
            int i11 = 0;
            while (true) {
                int[] iArr = this.f50064i;
                int i12 = iArr[i11];
                if (i12 >= 0) {
                    this.f50065o[i12] = 0;
                    iArr[i11] = -1;
                }
                if (i11 == i10) {
                    break;
                }
                i11++;
            }
        }
        sr.c.g(this.f50062d, 0, this.f50067q);
        Object[] objArr = this.f50063e;
        if (objArr != null) {
            sr.c.g(objArr, 0, this.f50067q);
        }
        this.f50070t = 0;
        this.f50067q = 0;
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
        Object[] objArr = this.f50063e;
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
            int i10 = kotlin.ranges.d.i(this.f50066p * 2, x() / 2);
            int i11 = 0;
            while (true) {
                int i12 = this.f50065o[B];
                if (i12 <= 0) {
                    if (this.f50067q >= v()) {
                        r(1);
                    } else {
                        int i13 = this.f50067q;
                        int i14 = i13 + 1;
                        this.f50067q = i14;
                        this.f50062d[i13] = obj;
                        this.f50064i[i13] = B;
                        this.f50065o[B] = i14;
                        this.f50070t = size() + 1;
                        G();
                        if (i11 > this.f50066p) {
                            this.f50066p = i11;
                        }
                        return i13;
                    }
                } else if (Intrinsics.areEqual(this.f50062d[i12 - 1], obj)) {
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
        this.f50074x = true;
        if (size() > 0) {
            return this;
        }
        d dVar = f50061z;
        Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlin.collections.Map<K of kotlin.collections.builders.MapBuilder, V of kotlin.collections.builders.MapBuilder>");
        return dVar;
    }

    @Override // java.util.Map
    public final /* bridge */ Set keySet() {
        return y();
    }

    public final void l() {
        if (!this.f50074x) {
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
        Object[] objArr = this.f50063e;
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
        Object[] objArr = this.f50063e;
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
        return this.f50062d.length;
    }

    @Override // java.util.Map
    public final /* bridge */ Collection values() {
        return A();
    }

    public Set w() {
        sr.e eVar = this.f50073w;
        if (eVar == null) {
            sr.e eVar2 = new sr.e(this);
            this.f50073w = eVar2;
            return eVar2;
        }
        return eVar;
    }

    public Set y() {
        sr.f fVar = this.f50071u;
        if (fVar == null) {
            sr.f fVar2 = new sr.f(this);
            this.f50071u = fVar2;
            return fVar2;
        }
        return fVar;
    }

    public int z() {
        return this.f50070t;
    }

    public d() {
        this(8);
    }

    public d(int i10) {
        this(sr.c.d(i10), null, new int[i10], new int[f50060y.c(i10)], 2, 0);
    }
}
