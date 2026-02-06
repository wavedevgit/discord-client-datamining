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
    private static final Object f17943s = new Object();

    /* renamed from: r  reason: collision with root package name */
    private Object[] f17944r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, Cloneable {

        /* renamed from: d  reason: collision with root package name */
        final m.c f17945d;

        /* renamed from: e  reason: collision with root package name */
        final Object[] f17946e;

        /* renamed from: i  reason: collision with root package name */
        int f17947i;

        a(m.c cVar, Object[] objArr, int i10) {
            this.f17945d = cVar;
            this.f17946e = objArr;
            this.f17947i = i10;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* renamed from: a */
        public a clone() {
            return new a(this.f17945d, this.f17946e, this.f17947i);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f17947i < this.f17946e.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            Object[] objArr = this.f17946e;
            int i10 = this.f17947i;
            this.f17947i = i10 + 1;
            return objArr[i10];
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Object obj) {
        int[] iArr = this.f17911e;
        int i10 = this.f17910d;
        iArr[i10] = 7;
        Object[] objArr = new Object[32];
        this.f17944r = objArr;
        this.f17910d = i10 + 1;
        objArr[i10] = obj;
    }

    private void J0(Object obj) {
        int i10 = this.f17910d;
        if (i10 == this.f17944r.length) {
            if (i10 != 256) {
                int[] iArr = this.f17911e;
                this.f17911e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f17912i;
                this.f17912i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f17913o;
                this.f17913o = Arrays.copyOf(iArr2, iArr2.length * 2);
                Object[] objArr = this.f17944r;
                this.f17944r = Arrays.copyOf(objArr, objArr.length * 2);
            } else {
                throw new j("Nesting too deep at " + t());
            }
        }
        Object[] objArr2 = this.f17944r;
        int i11 = this.f17910d;
        this.f17910d = i11 + 1;
        objArr2[i11] = obj;
    }

    private void K0() {
        int i10 = this.f17910d;
        int i11 = i10 - 1;
        this.f17910d = i11;
        Object[] objArr = this.f17944r;
        objArr[i11] = null;
        this.f17911e[i11] = 0;
        if (i11 > 0) {
            int[] iArr = this.f17913o;
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

    private Object L0(Class cls, m.c cVar) {
        Object obj;
        int i10 = this.f17910d;
        if (i10 != 0) {
            obj = this.f17944r[i10 - 1];
        } else {
            obj = null;
        }
        if (cls.isInstance(obj)) {
            return cls.cast(obj);
        }
        if (obj == null && cVar == m.c.NULL) {
            return null;
        }
        if (obj == f17943s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw I0(obj, cVar);
    }

    private String O0(Map.Entry entry) {
        Object key = entry.getKey();
        if (key instanceof String) {
            return (String) key;
        }
        throw I0(key, m.c.NAME);
    }

    @Override // com.squareup.moshi.m
    public void D() {
        m.c cVar = m.c.END_OBJECT;
        a aVar = (a) L0(a.class, cVar);
        if (aVar.f17945d == cVar && !aVar.hasNext()) {
            this.f17912i[this.f17910d - 1] = null;
            K0();
            return;
        }
        throw I0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public void E0() {
        if (!this.f17915q) {
            this.f17944r[this.f17910d - 1] = ((Map.Entry) L0(Map.Entry.class, m.c.NAME)).getValue();
            this.f17912i[this.f17910d - 2] = "null";
            return;
        }
        m.c s10 = s();
        o0();
        throw new j("Cannot skip unexpected " + s10 + " at " + t());
    }

    @Override // com.squareup.moshi.m
    public int J(m.b bVar) {
        Map.Entry entry = (Map.Entry) L0(Map.Entry.class, m.c.NAME);
        String O0 = O0(entry);
        int length = bVar.f17917a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (bVar.f17917a[i10].equals(O0)) {
                this.f17944r[this.f17910d - 1] = entry.getValue();
                this.f17912i[this.f17910d - 2] = O0;
                return i10;
            }
        }
        return -1;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v6 */
    /* JADX WARN: Type inference failed for: r1v3, types: [java.lang.Object[]] */
    @Override // com.squareup.moshi.m
    public int P(m.b bVar) {
        String str;
        int i10 = this.f17910d;
        if (i10 != 0) {
            str = this.f17944r[i10 - 1];
        } else {
            str = null;
        }
        if (!(str instanceof String)) {
            if (str != f17943s) {
                return -1;
            }
            throw new IllegalStateException("JsonReader is closed");
        }
        String str2 = str;
        int length = bVar.f17917a.length;
        for (int i11 = 0; i11 < length; i11++) {
            if (bVar.f17917a[i11].equals(str2)) {
                K0();
                return i11;
            }
        }
        return -1;
    }

    @Override // com.squareup.moshi.m
    public void S() {
        Object obj;
        if (!this.f17915q) {
            int i10 = this.f17910d;
            if (i10 > 1) {
                this.f17912i[i10 - 2] = "null";
            }
            if (i10 != 0) {
                obj = this.f17944r[i10 - 1];
            } else {
                obj = null;
            }
            if (!(obj instanceof a)) {
                if (obj instanceof Map.Entry) {
                    Object[] objArr = this.f17944r;
                    objArr[i10 - 1] = ((Map.Entry) objArr[i10 - 1]).getValue();
                    return;
                } else if (i10 > 0) {
                    K0();
                    return;
                } else {
                    throw new j("Expected a value but was " + s() + " at path " + t());
                }
            }
            throw new j("Expected a value but was " + s() + " at path " + t());
        }
        throw new j("Cannot skip unexpected " + s() + " at " + t());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Arrays.fill(this.f17944r, 0, this.f17910d, (Object) null);
        this.f17944r[0] = f17943s;
        this.f17911e[0] = 8;
        this.f17910d = 1;
    }

    @Override // com.squareup.moshi.m
    public String e1() {
        String str;
        int i10 = this.f17910d;
        if (i10 != 0) {
            str = this.f17944r[i10 - 1];
        } else {
            str = null;
        }
        if (str instanceof String) {
            K0();
            return str;
        } else if (str instanceof Number) {
            K0();
            return str.toString();
        } else if (str == f17943s) {
            throw new IllegalStateException("JsonReader is closed");
        } else {
            throw I0(str, m.c.STRING);
        }
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f17910d;
        if (i10 == 0) {
            return false;
        }
        Object obj = this.f17944r[i10 - 1];
        if ((obj instanceof Iterator) && !((Iterator) obj).hasNext()) {
            return false;
        }
        return true;
    }

    @Override // com.squareup.moshi.m
    public boolean k() {
        K0();
        return ((Boolean) L0(Boolean.class, m.c.BOOLEAN)).booleanValue();
    }

    @Override // com.squareup.moshi.m
    public Object m() {
        L0(Void.class, m.c.NULL);
        K0();
        return null;
    }

    @Override // com.squareup.moshi.m
    public BufferedSource n() {
        Object I = I();
        Buffer buffer = new Buffer();
        t Y = t.Y(buffer);
        try {
            Y.I(I);
            Y.close();
            return buffer;
        } catch (Throwable th2) {
            if (Y != null) {
                try {
                    Y.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // com.squareup.moshi.m
    public double nextDouble() {
        double parseDouble;
        m.c cVar = m.c.NUMBER;
        Object L0 = L0(Object.class, cVar);
        if (L0 instanceof Number) {
            parseDouble = ((Number) L0).doubleValue();
        } else if (L0 instanceof String) {
            try {
                parseDouble = Double.parseDouble((String) L0);
            } catch (NumberFormatException unused) {
                throw I0(L0, m.c.NUMBER);
            }
        } else {
            throw I0(L0, cVar);
        }
        if (!this.f17914p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
            throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
        }
        K0();
        return parseDouble;
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        int intValueExact;
        m.c cVar = m.c.NUMBER;
        Object L0 = L0(Object.class, cVar);
        if (L0 instanceof Number) {
            intValueExact = ((Number) L0).intValue();
        } else if (L0 instanceof String) {
            try {
                try {
                    intValueExact = Integer.parseInt((String) L0);
                } catch (NumberFormatException unused) {
                    throw I0(L0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                intValueExact = new BigDecimal((String) L0).intValueExact();
            }
        } else {
            throw I0(L0, cVar);
        }
        K0();
        return intValueExact;
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        long longValueExact;
        m.c cVar = m.c.NUMBER;
        Object L0 = L0(Object.class, cVar);
        if (L0 instanceof Number) {
            longValueExact = ((Number) L0).longValue();
        } else if (L0 instanceof String) {
            try {
                try {
                    longValueExact = Long.parseLong((String) L0);
                } catch (NumberFormatException unused) {
                    throw I0(L0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                longValueExact = new BigDecimal((String) L0).longValueExact();
            }
        } else {
            throw I0(L0, cVar);
        }
        K0();
        return longValueExact;
    }

    @Override // com.squareup.moshi.m
    public String o0() {
        Map.Entry entry = (Map.Entry) L0(Map.Entry.class, m.c.NAME);
        String O0 = O0(entry);
        this.f17944r[this.f17910d - 1] = entry.getValue();
        this.f17912i[this.f17910d - 2] = O0;
        return O0;
    }

    @Override // com.squareup.moshi.m
    public m.c s() {
        int i10 = this.f17910d;
        if (i10 == 0) {
            return m.c.END_DOCUMENT;
        }
        Object obj = this.f17944r[i10 - 1];
        if (obj instanceof a) {
            return ((a) obj).f17945d;
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
        if (obj == f17943s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw I0(obj, "a JSON value");
    }

    @Override // com.squareup.moshi.m
    public void u() {
        Map map = (Map) L0(Map.class, m.c.BEGIN_OBJECT);
        a aVar = new a(m.c.END_OBJECT, map.entrySet().toArray(new Object[map.size()]), 0);
        Object[] objArr = this.f17944r;
        int i10 = this.f17910d;
        objArr[i10 - 1] = aVar;
        this.f17911e[i10 - 1] = 3;
        if (aVar.hasNext()) {
            J0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public void v() {
        m.c cVar = m.c.END_ARRAY;
        a aVar = (a) L0(a.class, cVar);
        if (aVar.f17945d == cVar && !aVar.hasNext()) {
            K0();
            return;
        }
        throw I0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public void x() {
        List list = (List) L0(List.class, m.c.BEGIN_ARRAY);
        a aVar = new a(m.c.END_ARRAY, list.toArray(new Object[list.size()]), 0);
        Object[] objArr = this.f17944r;
        int i10 = this.f17910d;
        objArr[i10 - 1] = aVar;
        this.f17911e[i10 - 1] = 1;
        this.f17913o[i10 - 1] = 0;
        if (aVar.hasNext()) {
            J0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public m y() {
        return new q(this);
    }

    @Override // com.squareup.moshi.m
    public void z() {
        if (hasNext()) {
            J0(o0());
        }
    }

    q(q qVar) {
        super(qVar);
        this.f17944r = (Object[]) qVar.f17944r.clone();
        for (int i10 = 0; i10 < this.f17910d; i10++) {
            Object[] objArr = this.f17944r;
            Object obj = objArr[i10];
            if (obj instanceof a) {
                objArr[i10] = ((a) obj).clone();
            }
        }
    }
}
