package com.squareup.moshi;

import com.squareup.moshi.m;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import okio.Buffer;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class q extends m {

    /* renamed from: s  reason: collision with root package name */
    private static final Object f17963s = new Object();

    /* renamed from: r  reason: collision with root package name */
    private Object[] f17964r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, Cloneable {

        /* renamed from: d  reason: collision with root package name */
        final m.c f17965d;

        /* renamed from: e  reason: collision with root package name */
        final Object[] f17966e;

        /* renamed from: i  reason: collision with root package name */
        int f17967i;

        a(m.c cVar, Object[] objArr, int i10) {
            this.f17965d = cVar;
            this.f17966e = objArr;
            this.f17967i = i10;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* renamed from: a */
        public a clone() {
            return new a(this.f17965d, this.f17966e, this.f17967i);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f17967i < this.f17966e.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            Object[] objArr = this.f17966e;
            int i10 = this.f17967i;
            this.f17967i = i10 + 1;
            return objArr[i10];
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Object obj) {
        int[] iArr = this.f17931e;
        int i10 = this.f17930d;
        iArr[i10] = 7;
        Object[] objArr = new Object[32];
        this.f17964r = objArr;
        this.f17930d = i10 + 1;
        objArr[i10] = obj;
    }

    private void K0(Object obj) {
        int i10 = this.f17930d;
        if (i10 == this.f17964r.length) {
            if (i10 != 256) {
                int[] iArr = this.f17931e;
                this.f17931e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f17932i;
                this.f17932i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f17933o;
                this.f17933o = Arrays.copyOf(iArr2, iArr2.length * 2);
                Object[] objArr = this.f17964r;
                this.f17964r = Arrays.copyOf(objArr, objArr.length * 2);
            } else {
                throw new j("Nesting too deep at " + r());
            }
        }
        Object[] objArr2 = this.f17964r;
        int i11 = this.f17930d;
        this.f17930d = i11 + 1;
        objArr2[i11] = obj;
    }

    private void N0() {
        int i10 = this.f17930d;
        int i11 = i10 - 1;
        this.f17930d = i11;
        Object[] objArr = this.f17964r;
        objArr[i11] = null;
        this.f17931e[i11] = 0;
        if (i11 > 0) {
            int[] iArr = this.f17933o;
            int i12 = i10 - 2;
            iArr[i12] = iArr[i12] + 1;
            Object obj = objArr[i10 - 2];
            if (obj instanceof Iterator) {
                Iterator it = (Iterator) obj;
                if (it.hasNext()) {
                    K0(it.next());
                }
            }
        }
    }

    private Object S0(Class cls, m.c cVar) {
        Object obj;
        int i10 = this.f17930d;
        if (i10 != 0) {
            obj = this.f17964r[i10 - 1];
        } else {
            obj = null;
        }
        if (cls.isInstance(obj)) {
            return cls.cast(obj);
        }
        if (obj == null && cVar == m.c.NULL) {
            return null;
        }
        if (obj == f17963s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw I0(obj, cVar);
    }

    private String V0(Map.Entry entry) {
        Object key = entry.getKey();
        if (key instanceof String) {
            return (String) key;
        }
        throw I0(key, m.c.NAME);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v6 */
    /* JADX WARN: Type inference failed for: r1v3, types: [java.lang.Object[]] */
    @Override // com.squareup.moshi.m
    public int C0(m.b bVar) {
        String str;
        int i10 = this.f17930d;
        if (i10 != 0) {
            str = this.f17964r[i10 - 1];
        } else {
            str = null;
        }
        if (!(str instanceof String)) {
            if (str != f17963s) {
                return -1;
            }
            throw new IllegalStateException("JsonReader is closed");
        }
        String str2 = str;
        int length = bVar.f17937a.length;
        for (int i11 = 0; i11 < length; i11++) {
            if (bVar.f17937a[i11].equals(str2)) {
                N0();
                return i11;
            }
        }
        return -1;
    }

    @Override // com.squareup.moshi.m
    public m.c E() {
        int i10 = this.f17930d;
        if (i10 == 0) {
            return m.c.END_DOCUMENT;
        }
        Object obj = this.f17964r[i10 - 1];
        if (obj instanceof a) {
            return ((a) obj).f17965d;
        }
        if (obj instanceof List) {
            return m.c.BEGIN_ARRAY;
        }
        if (obj instanceof Map) {
            return m.c.BEGIN_OBJECT;
        }
        if (obj instanceof Map.Entry) {
            return m.c.NAME;
        }
        if (obj instanceof String) {
            return m.c.STRING;
        }
        if (obj instanceof Boolean) {
            return m.c.BOOLEAN;
        }
        if (obj instanceof Number) {
            return m.c.NUMBER;
        }
        if (obj == null) {
            return m.c.NULL;
        }
        if (obj == f17963s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw I0(obj, "a JSON value");
    }

    @Override // com.squareup.moshi.m
    public void E0() {
        if (!this.f17935q) {
            this.f17964r[this.f17930d - 1] = ((Map.Entry) S0(Map.Entry.class, m.c.NAME)).getValue();
            this.f17932i[this.f17930d - 2] = "null";
            return;
        }
        m.c E = E();
        m0();
        throw new j("Cannot skip unexpected " + E + " at " + r());
    }

    @Override // com.squareup.moshi.m
    public m F() {
        return new q(this);
    }

    @Override // com.squareup.moshi.m
    public void L() {
        if (hasNext()) {
            K0(m0());
        }
    }

    @Override // com.squareup.moshi.m
    public void P() {
        Object obj;
        if (!this.f17935q) {
            int i10 = this.f17930d;
            if (i10 > 1) {
                this.f17932i[i10 - 2] = "null";
            }
            if (i10 != 0) {
                obj = this.f17964r[i10 - 1];
            } else {
                obj = null;
            }
            if (!(obj instanceof a)) {
                if (obj instanceof Map.Entry) {
                    Object[] objArr = this.f17964r;
                    objArr[i10 - 1] = ((Map.Entry) objArr[i10 - 1]).getValue();
                    return;
                } else if (i10 > 0) {
                    N0();
                    return;
                } else {
                    throw new j("Expected a value but was " + E() + " at path " + r());
                }
            }
            throw new j("Expected a value but was " + E() + " at path " + r());
        }
        throw new j("Cannot skip unexpected " + E() + " at " + r());
    }

    @Override // com.squareup.moshi.m
    public int W(m.b bVar) {
        Map.Entry entry = (Map.Entry) S0(Map.Entry.class, m.c.NAME);
        String V0 = V0(entry);
        int length = bVar.f17937a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (bVar.f17937a[i10].equals(V0)) {
                this.f17964r[this.f17930d - 1] = entry.getValue();
                this.f17932i[this.f17930d - 2] = V0;
                return i10;
            }
        }
        return -1;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Arrays.fill(this.f17964r, 0, this.f17930d, (Object) null);
        this.f17964r[0] = f17963s;
        this.f17931e[0] = 8;
        this.f17930d = 1;
    }

    @Override // com.squareup.moshi.m
    public String f1() {
        String str;
        int i10 = this.f17930d;
        if (i10 != 0) {
            str = this.f17964r[i10 - 1];
        } else {
            str = null;
        }
        if (str instanceof String) {
            N0();
            return str;
        } else if (str instanceof Number) {
            N0();
            return str.toString();
        } else if (str == f17963s) {
            throw new IllegalStateException("JsonReader is closed");
        } else {
            throw I0(str, m.c.STRING);
        }
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f17930d;
        if (i10 == 0) {
            return false;
        }
        Object obj = this.f17964r[i10 - 1];
        if ((obj instanceof Iterator) && !((Iterator) obj).hasNext()) {
            return false;
        }
        return true;
    }

    @Override // com.squareup.moshi.m
    public boolean k() {
        N0();
        return ((Boolean) S0(Boolean.class, m.c.BOOLEAN)).booleanValue();
    }

    @Override // com.squareup.moshi.m
    public Object m() {
        S0(Void.class, m.c.NULL);
        N0();
        return null;
    }

    @Override // com.squareup.moshi.m
    public String m0() {
        Map.Entry entry = (Map.Entry) S0(Map.Entry.class, m.c.NAME);
        String V0 = V0(entry);
        this.f17964r[this.f17930d - 1] = entry.getValue();
        this.f17932i[this.f17930d - 2] = V0;
        return V0;
    }

    @Override // com.squareup.moshi.m
    public double nextDouble() {
        double parseDouble;
        m.c cVar = m.c.NUMBER;
        Object S0 = S0(Object.class, cVar);
        if (S0 instanceof Number) {
            parseDouble = ((Number) S0).doubleValue();
        } else if (S0 instanceof String) {
            try {
                parseDouble = Double.parseDouble((String) S0);
            } catch (NumberFormatException unused) {
                throw I0(S0, m.c.NUMBER);
            }
        } else {
            throw I0(S0, cVar);
        }
        if (!this.f17934p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
            throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + r());
        }
        N0();
        return parseDouble;
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        int intValueExact;
        m.c cVar = m.c.NUMBER;
        Object S0 = S0(Object.class, cVar);
        if (S0 instanceof Number) {
            intValueExact = ((Number) S0).intValue();
        } else if (S0 instanceof String) {
            try {
                try {
                    intValueExact = Integer.parseInt((String) S0);
                } catch (NumberFormatException unused) {
                    throw I0(S0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                intValueExact = new BigDecimal((String) S0).intValueExact();
            }
        } else {
            throw I0(S0, cVar);
        }
        N0();
        return intValueExact;
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        long longValueExact;
        m.c cVar = m.c.NUMBER;
        Object S0 = S0(Object.class, cVar);
        if (S0 instanceof Number) {
            longValueExact = ((Number) S0).longValue();
        } else if (S0 instanceof String) {
            try {
                try {
                    longValueExact = Long.parseLong((String) S0);
                } catch (NumberFormatException unused) {
                    throw I0(S0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                longValueExact = new BigDecimal((String) S0).longValueExact();
            }
        } else {
            throw I0(S0, cVar);
        }
        N0();
        return longValueExact;
    }

    @Override // com.squareup.moshi.m
    public BufferedSource o() {
        Object V = V();
        Buffer buffer = new Buffer();
        t D0 = t.D0(buffer);
        try {
            D0.V(V);
            D0.close();
            return buffer;
        } catch (Throwable th2) {
            if (D0 != null) {
                try {
                    D0.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // com.squareup.moshi.m
    public void s() {
        Map map = (Map) S0(Map.class, m.c.BEGIN_OBJECT);
        a aVar = new a(m.c.END_OBJECT, map.entrySet().toArray(new Object[map.size()]), 0);
        Object[] objArr = this.f17964r;
        int i10 = this.f17930d;
        objArr[i10 - 1] = aVar;
        this.f17931e[i10 - 1] = 3;
        if (aVar.hasNext()) {
            K0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public void t() {
        m.c cVar = m.c.END_ARRAY;
        a aVar = (a) S0(a.class, cVar);
        if (aVar.f17965d == cVar && !aVar.hasNext()) {
            N0();
            return;
        }
        throw I0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public void v() {
        List list = (List) S0(List.class, m.c.BEGIN_ARRAY);
        a aVar = new a(m.c.END_ARRAY, list.toArray(new Object[list.size()]), 0);
        Object[] objArr = this.f17964r;
        int i10 = this.f17930d;
        objArr[i10 - 1] = aVar;
        this.f17931e[i10 - 1] = 1;
        this.f17933o[i10 - 1] = 0;
        if (aVar.hasNext()) {
            K0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public void z() {
        m.c cVar = m.c.END_OBJECT;
        a aVar = (a) S0(a.class, cVar);
        if (aVar.f17965d == cVar && !aVar.hasNext()) {
            this.f17932i[this.f17930d - 1] = null;
            N0();
            return;
        }
        throw I0(aVar, cVar);
    }

    q(q qVar) {
        super(qVar);
        this.f17964r = (Object[]) qVar.f17964r.clone();
        for (int i10 = 0; i10 < this.f17930d; i10++) {
            Object[] objArr = this.f17964r;
            Object obj = objArr[i10];
            if (obj instanceof a) {
                objArr[i10] = ((a) obj).clone();
            }
        }
    }
}
