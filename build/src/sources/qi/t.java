package qi;

import java.io.Serializable;
import java.util.AbstractMap;
import java.util.Arrays;
import java.util.BitSet;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.SortedMap;
import qi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class t implements Map, Serializable {

    /* renamed from: o  reason: collision with root package name */
    static final Map.Entry[] f45406o = new Map.Entry[0];

    /* renamed from: d  reason: collision with root package name */
    private transient u f45407d;

    /* renamed from: e  reason: collision with root package name */
    private transient u f45408e;

    /* renamed from: i  reason: collision with root package name */
    private transient q f45409i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        Comparator f45410a;

        /* renamed from: b  reason: collision with root package name */
        Object[] f45411b;

        /* renamed from: c  reason: collision with root package name */
        int f45412c;

        /* renamed from: d  reason: collision with root package name */
        boolean f45413d;

        /* renamed from: e  reason: collision with root package name */
        C0610a f45414e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: qi.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0610a {

            /* renamed from: a  reason: collision with root package name */
            private final Object f45415a;

            /* renamed from: b  reason: collision with root package name */
            private final Object f45416b;

            /* renamed from: c  reason: collision with root package name */
            private final Object f45417c;

            /* JADX INFO: Access modifiers changed from: package-private */
            public C0610a(Object obj, Object obj2, Object obj3) {
                this.f45415a = obj;
                this.f45416b = obj2;
                this.f45417c = obj3;
            }

            /* JADX INFO: Access modifiers changed from: package-private */
            public IllegalArgumentException a() {
                String valueOf = String.valueOf(this.f45415a);
                String valueOf2 = String.valueOf(this.f45416b);
                String valueOf3 = String.valueOf(this.f45415a);
                String valueOf4 = String.valueOf(this.f45417c);
                StringBuilder sb2 = new StringBuilder(valueOf.length() + 39 + valueOf2.length() + valueOf3.length() + valueOf4.length());
                sb2.append("Multiple entries with same key: ");
                sb2.append(valueOf);
                sb2.append("=");
                sb2.append(valueOf2);
                sb2.append(" and ");
                sb2.append(valueOf3);
                sb2.append("=");
                sb2.append(valueOf4);
                return new IllegalArgumentException(sb2.toString());
            }
        }

        public a() {
            this(4);
        }

        private t b(boolean z10) {
            Object[] objArr;
            C0610a c0610a;
            C0610a c0610a2;
            if (z10 && (c0610a2 = this.f45414e) != null) {
                throw c0610a2.a();
            }
            int i10 = this.f45412c;
            if (this.f45410a == null) {
                objArr = this.f45411b;
            } else {
                if (this.f45413d) {
                    this.f45411b = Arrays.copyOf(this.f45411b, i10 * 2);
                }
                objArr = this.f45411b;
                if (!z10) {
                    objArr = e(objArr, this.f45412c);
                    if (objArr.length < this.f45411b.length) {
                        i10 = objArr.length >>> 1;
                    }
                }
                i(objArr, i10, this.f45410a);
            }
            this.f45413d = true;
            l0 l10 = l0.l(i10, objArr, this);
            if (z10 && (c0610a = this.f45414e) != null) {
                throw c0610a.a();
            }
            return l10;
        }

        private void d(int i10) {
            int i11 = i10 * 2;
            Object[] objArr = this.f45411b;
            if (i11 > objArr.length) {
                this.f45411b = Arrays.copyOf(objArr, q.b.c(objArr.length, i11));
                this.f45413d = false;
            }
        }

        private Object[] e(Object[] objArr, int i10) {
            HashSet hashSet = new HashSet();
            BitSet bitSet = new BitSet();
            for (int i11 = i10 - 1; i11 >= 0; i11--) {
                Object obj = objArr[i11 * 2];
                Objects.requireNonNull(obj);
                if (!hashSet.add(obj)) {
                    bitSet.set(i11);
                }
            }
            if (bitSet.isEmpty()) {
                return objArr;
            }
            Object[] objArr2 = new Object[(i10 - bitSet.cardinality()) * 2];
            int i12 = 0;
            int i13 = 0;
            while (i12 < i10 * 2) {
                if (bitSet.get(i12 >>> 1)) {
                    i12 += 2;
                } else {
                    int i14 = i13 + 1;
                    int i15 = i12 + 1;
                    Object obj2 = objArr[i12];
                    Objects.requireNonNull(obj2);
                    objArr2[i13] = obj2;
                    i13 += 2;
                    i12 += 2;
                    Object obj3 = objArr[i15];
                    Objects.requireNonNull(obj3);
                    objArr2[i14] = obj3;
                }
            }
            return objArr2;
        }

        static void i(Object[] objArr, int i10, Comparator comparator) {
            Map.Entry[] entryArr = new Map.Entry[i10];
            for (int i11 = 0; i11 < i10; i11++) {
                int i12 = i11 * 2;
                Object obj = objArr[i12];
                Objects.requireNonNull(obj);
                Object obj2 = objArr[i12 + 1];
                Objects.requireNonNull(obj2);
                entryArr[i11] = new AbstractMap.SimpleImmutableEntry(obj, obj2);
            }
            Arrays.sort(entryArr, 0, i10, i0.a(comparator).c(a0.k()));
            for (int i13 = 0; i13 < i10; i13++) {
                int i14 = i13 * 2;
                objArr[i14] = entryArr[i13].getKey();
                objArr[i14 + 1] = entryArr[i13].getValue();
            }
        }

        public t a() {
            return c();
        }

        public t c() {
            return b(true);
        }

        public a f(Object obj, Object obj2) {
            d(this.f45412c + 1);
            h.a(obj, obj2);
            Object[] objArr = this.f45411b;
            int i10 = this.f45412c;
            objArr[i10 * 2] = obj;
            objArr[(i10 * 2) + 1] = obj2;
            this.f45412c = i10 + 1;
            return this;
        }

        public a g(Map.Entry entry) {
            return f(entry.getKey(), entry.getValue());
        }

        public a h(Iterable iterable) {
            if (iterable instanceof Collection) {
                d(this.f45412c + ((Collection) iterable).size());
            }
            Iterator it = iterable.iterator();
            while (it.hasNext()) {
                g((Map.Entry) it.next());
            }
            return this;
        }

        a(int i10) {
            this.f45411b = new Object[i10 * 2];
            this.f45412c = 0;
            this.f45413d = false;
        }
    }

    public static a a() {
        return new a();
    }

    public static t b(Iterable iterable) {
        int i10;
        if (iterable instanceof Collection) {
            i10 = ((Collection) iterable).size();
        } else {
            i10 = 4;
        }
        a aVar = new a(i10);
        aVar.h(iterable);
        return aVar.a();
    }

    public static t c(Map map) {
        if ((map instanceof t) && !(map instanceof SortedMap)) {
            t tVar = (t) map;
            if (!tVar.h()) {
                return tVar;
            }
        }
        return b(map.entrySet());
    }

    public static t j() {
        return l0.f45362s;
    }

    @Override // java.util.Map
    public final void clear() {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public boolean containsKey(Object obj) {
        if (get(obj) != null) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map
    public boolean containsValue(Object obj) {
        return values().contains(obj);
    }

    abstract u d();

    abstract u e();

    @Override // java.util.Map
    public boolean equals(Object obj) {
        return a0.c(this, obj);
    }

    abstract q f();

    @Override // java.util.Map
    /* renamed from: g */
    public u entrySet() {
        u uVar = this.f45407d;
        if (uVar == null) {
            u d10 = d();
            this.f45407d = d10;
            return d10;
        }
        return uVar;
    }

    @Override // java.util.Map
    public abstract Object get(Object obj);

    @Override // java.util.Map
    public final Object getOrDefault(Object obj, Object obj2) {
        Object obj3 = get(obj);
        if (obj3 != null) {
            return obj3;
        }
        return obj2;
    }

    abstract boolean h();

    @Override // java.util.Map
    public int hashCode() {
        return q0.d(entrySet());
    }

    @Override // java.util.Map
    /* renamed from: i */
    public u keySet() {
        u uVar = this.f45408e;
        if (uVar == null) {
            u e10 = e();
            this.f45408e = e10;
            return e10;
        }
        return uVar;
    }

    @Override // java.util.Map
    public boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.Map
    /* renamed from: k */
    public q values() {
        q qVar = this.f45409i;
        if (qVar == null) {
            q f10 = f();
            this.f45409i = f10;
            return f10;
        }
        return qVar;
    }

    @Override // java.util.Map
    public final Object put(Object obj, Object obj2) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public final void putAll(Map map) {
        throw new UnsupportedOperationException();
    }

    @Override // java.util.Map
    public final Object remove(Object obj) {
        throw new UnsupportedOperationException();
    }

    public String toString() {
        return a0.j(this);
    }
}
