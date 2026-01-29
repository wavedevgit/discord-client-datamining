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
    private static final Object f18942s = new Object();

    /* renamed from: r  reason: collision with root package name */
    private Object[] f18943r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, Cloneable {

        /* renamed from: d  reason: collision with root package name */
        final m.c f18944d;

        /* renamed from: e  reason: collision with root package name */
        final Object[] f18945e;

        /* renamed from: i  reason: collision with root package name */
        int f18946i;

        a(m.c cVar, Object[] objArr, int i10) {
            this.f18944d = cVar;
            this.f18945e = objArr;
            this.f18946i = i10;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* renamed from: a */
        public a clone() {
            return new a(this.f18944d, this.f18945e, this.f18946i);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f18946i < this.f18945e.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            Object[] objArr = this.f18945e;
            int i10 = this.f18946i;
            this.f18946i = i10 + 1;
            return objArr[i10];
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Object obj) {
        int[] iArr = this.f18910e;
        int i10 = this.f18909d;
        iArr[i10] = 7;
        Object[] objArr = new Object[32];
        this.f18943r = objArr;
        this.f18909d = i10 + 1;
        objArr[i10] = obj;
    }

    private void J0(Object obj) {
        int i10 = this.f18909d;
        if (i10 == this.f18943r.length) {
            if (i10 != 256) {
                int[] iArr = this.f18910e;
                this.f18910e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18911i;
                this.f18911i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18912o;
                this.f18912o = Arrays.copyOf(iArr2, iArr2.length * 2);
                Object[] objArr = this.f18943r;
                this.f18943r = Arrays.copyOf(objArr, objArr.length * 2);
            } else {
                throw new j("Nesting too deep at " + q());
            }
        }
        Object[] objArr2 = this.f18943r;
        int i11 = this.f18909d;
        this.f18909d = i11 + 1;
        objArr2[i11] = obj;
    }

    private void M0() {
        int i10 = this.f18909d;
        int i11 = i10 - 1;
        this.f18909d = i11;
        Object[] objArr = this.f18943r;
        objArr[i11] = null;
        this.f18910e[i11] = 0;
        if (i11 > 0) {
            int[] iArr = this.f18912o;
            int i12 = i10 - 2;
            iArr[i12] = iArr[i12] + 1;
            Object obj = objArr[i10 - 2];
            if (obj instanceof Iterator) {
                Iterator it = (Iterator) obj;
                if (it.hasNext()) {
                    J0(it.next());
                }
            }
        }
    }

    private Object R0(Class cls, m.c cVar) {
        Object obj;
        int i10 = this.f18909d;
        if (i10 != 0) {
            obj = this.f18943r[i10 - 1];
        } else {
            obj = null;
        }
        if (cls.isInstance(obj)) {
            return cls.cast(obj);
        }
        if (obj == null && cVar == m.c.NULL) {
            return null;
        }
        if (obj == f18942s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw I0(obj, cVar);
    }

    private String U0(Map.Entry entry) {
        Object key = entry.getKey();
        if (key instanceof String) {
            return (String) key;
        }
        throw I0(key, m.c.NAME);
    }

    @Override // com.squareup.moshi.m
    public int A0(m.b bVar) {
        Map.Entry entry = (Map.Entry) R0(Map.Entry.class, m.c.NAME);
        String U0 = U0(entry);
        int length = bVar.f18916a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (bVar.f18916a[i10].equals(U0)) {
                this.f18943r[this.f18909d - 1] = entry.getValue();
                this.f18911i[this.f18909d - 2] = U0;
                return i10;
            }
        }
        return -1;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v6 */
    /* JADX WARN: Type inference failed for: r1v3, types: [java.lang.Object[]] */
    @Override // com.squareup.moshi.m
    public int C0(m.b bVar) {
        String str;
        int i10 = this.f18909d;
        if (i10 != 0) {
            str = this.f18943r[i10 - 1];
        } else {
            str = null;
        }
        if (!(str instanceof String)) {
            if (str != f18942s) {
                return -1;
            }
            throw new IllegalStateException("JsonReader is closed");
        }
        String str2 = str;
        int length = bVar.f18916a.length;
        for (int i11 = 0; i11 < length; i11++) {
            if (bVar.f18916a[i11].equals(str2)) {
                M0();
                return i11;
            }
        }
        return -1;
    }

    @Override // com.squareup.moshi.m
    public m.c E() {
        int i10 = this.f18909d;
        if (i10 == 0) {
            return m.c.END_DOCUMENT;
        }
        Object obj = this.f18943r[i10 - 1];
        if (obj instanceof a) {
            return ((a) obj).f18944d;
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
        if (obj == f18942s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw I0(obj, "a JSON value");
    }

    @Override // com.squareup.moshi.m
    public void E0() {
        if (!this.f18914q) {
            this.f18943r[this.f18909d - 1] = ((Map.Entry) R0(Map.Entry.class, m.c.NAME)).getValue();
            this.f18911i[this.f18909d - 2] = "null";
            return;
        }
        m.c E = E();
        l0();
        throw new j("Cannot skip unexpected " + E + " at " + q());
    }

    @Override // com.squareup.moshi.m
    public m F() {
        return new q(this);
    }

    @Override // com.squareup.moshi.m
    public void L() {
        if (hasNext()) {
            J0(l0());
        }
    }

    @Override // com.squareup.moshi.m
    public void P() {
        Object obj;
        if (!this.f18914q) {
            int i10 = this.f18909d;
            if (i10 > 1) {
                this.f18911i[i10 - 2] = "null";
            }
            if (i10 != 0) {
                obj = this.f18943r[i10 - 1];
            } else {
                obj = null;
            }
            if (!(obj instanceof a)) {
                if (obj instanceof Map.Entry) {
                    Object[] objArr = this.f18943r;
                    objArr[i10 - 1] = ((Map.Entry) objArr[i10 - 1]).getValue();
                    return;
                } else if (i10 > 0) {
                    M0();
                    return;
                } else {
                    throw new j("Expected a value but was " + E() + " at path " + q());
                }
            }
            throw new j("Expected a value but was " + E() + " at path " + q());
        }
        throw new j("Cannot skip unexpected " + E() + " at " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Arrays.fill(this.f18943r, 0, this.f18909d, (Object) null);
        this.f18943r[0] = f18942s;
        this.f18910e[0] = 8;
        this.f18909d = 1;
    }

    @Override // com.squareup.moshi.m
    public String e1() {
        String str;
        int i10 = this.f18909d;
        if (i10 != 0) {
            str = this.f18943r[i10 - 1];
        } else {
            str = null;
        }
        if (str instanceof String) {
            M0();
            return str;
        } else if (str instanceof Number) {
            M0();
            return str.toString();
        } else if (str == f18942s) {
            throw new IllegalStateException("JsonReader is closed");
        } else {
            throw I0(str, m.c.STRING);
        }
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f18909d;
        if (i10 == 0) {
            return false;
        }
        Object obj = this.f18943r[i10 - 1];
        if ((obj instanceof Iterator) && !((Iterator) obj).hasNext()) {
            return false;
        }
        return true;
    }

    @Override // com.squareup.moshi.m
    public boolean l() {
        M0();
        return ((Boolean) R0(Boolean.class, m.c.BOOLEAN)).booleanValue();
    }

    @Override // com.squareup.moshi.m
    public String l0() {
        Map.Entry entry = (Map.Entry) R0(Map.Entry.class, m.c.NAME);
        String U0 = U0(entry);
        this.f18943r[this.f18909d - 1] = entry.getValue();
        this.f18911i[this.f18909d - 2] = U0;
        return U0;
    }

    @Override // com.squareup.moshi.m
    public Object n() {
        R0(Void.class, m.c.NULL);
        M0();
        return null;
    }

    @Override // com.squareup.moshi.m
    public double nextDouble() {
        double parseDouble;
        m.c cVar = m.c.NUMBER;
        Object R0 = R0(Object.class, cVar);
        if (R0 instanceof Number) {
            parseDouble = ((Number) R0).doubleValue();
        } else if (R0 instanceof String) {
            try {
                parseDouble = Double.parseDouble((String) R0);
            } catch (NumberFormatException unused) {
                throw I0(R0, m.c.NUMBER);
            }
        } else {
            throw I0(R0, cVar);
        }
        if (!this.f18913p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
            throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + q());
        }
        M0();
        return parseDouble;
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        int intValueExact;
        m.c cVar = m.c.NUMBER;
        Object R0 = R0(Object.class, cVar);
        if (R0 instanceof Number) {
            intValueExact = ((Number) R0).intValue();
        } else if (R0 instanceof String) {
            try {
                try {
                    intValueExact = Integer.parseInt((String) R0);
                } catch (NumberFormatException unused) {
                    throw I0(R0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                intValueExact = new BigDecimal((String) R0).intValueExact();
            }
        } else {
            throw I0(R0, cVar);
        }
        M0();
        return intValueExact;
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        long longValueExact;
        m.c cVar = m.c.NUMBER;
        Object R0 = R0(Object.class, cVar);
        if (R0 instanceof Number) {
            longValueExact = ((Number) R0).longValue();
        } else if (R0 instanceof String) {
            try {
                try {
                    longValueExact = Long.parseLong((String) R0);
                } catch (NumberFormatException unused) {
                    throw I0(R0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                longValueExact = new BigDecimal((String) R0).longValueExact();
            }
        } else {
            throw I0(R0, cVar);
        }
        M0();
        return longValueExact;
    }

    @Override // com.squareup.moshi.m
    public void r() {
        Map map = (Map) R0(Map.class, m.c.BEGIN_OBJECT);
        a aVar = new a(m.c.END_OBJECT, map.entrySet().toArray(new Object[map.size()]), 0);
        Object[] objArr = this.f18943r;
        int i10 = this.f18909d;
        objArr[i10 - 1] = aVar;
        this.f18910e[i10 - 1] = 3;
        if (aVar.hasNext()) {
            J0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public void s() {
        m.c cVar = m.c.END_ARRAY;
        a aVar = (a) R0(a.class, cVar);
        if (aVar.f18944d == cVar && !aVar.hasNext()) {
            M0();
            return;
        }
        throw I0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public void u() {
        List list = (List) R0(List.class, m.c.BEGIN_ARRAY);
        a aVar = new a(m.c.END_ARRAY, list.toArray(new Object[list.size()]), 0);
        Object[] objArr = this.f18943r;
        int i10 = this.f18909d;
        objArr[i10 - 1] = aVar;
        this.f18910e[i10 - 1] = 1;
        this.f18912o[i10 - 1] = 0;
        if (aVar.hasNext()) {
            J0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public BufferedSource x() {
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
    public void y() {
        m.c cVar = m.c.END_OBJECT;
        a aVar = (a) R0(a.class, cVar);
        if (aVar.f18944d == cVar && !aVar.hasNext()) {
            this.f18911i[this.f18909d - 1] = null;
            M0();
            return;
        }
        throw I0(aVar, cVar);
    }

    q(q qVar) {
        super(qVar);
        this.f18943r = (Object[]) qVar.f18943r.clone();
        for (int i10 = 0; i10 < this.f18909d; i10++) {
            Object[] objArr = this.f18943r;
            Object obj = objArr[i10];
            if (obj instanceof a) {
                objArr[i10] = ((a) obj).clone();
            }
        }
    }
}
