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
    private static final Object f18083s = new Object();

    /* renamed from: r  reason: collision with root package name */
    private Object[] f18084r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, Cloneable {

        /* renamed from: d  reason: collision with root package name */
        final m.c f18085d;

        /* renamed from: e  reason: collision with root package name */
        final Object[] f18086e;

        /* renamed from: i  reason: collision with root package name */
        int f18087i;

        a(m.c cVar, Object[] objArr, int i10) {
            this.f18085d = cVar;
            this.f18086e = objArr;
            this.f18087i = i10;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* renamed from: a */
        public a clone() {
            return new a(this.f18085d, this.f18086e, this.f18087i);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f18087i < this.f18086e.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            Object[] objArr = this.f18086e;
            int i10 = this.f18087i;
            this.f18087i = i10 + 1;
            return objArr[i10];
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Object obj) {
        int[] iArr = this.f18051e;
        int i10 = this.f18050d;
        iArr[i10] = 7;
        Object[] objArr = new Object[32];
        this.f18084r = objArr;
        this.f18050d = i10 + 1;
        objArr[i10] = obj;
    }

    private void H0(Object obj) {
        int i10 = this.f18050d;
        if (i10 == this.f18084r.length) {
            if (i10 != 256) {
                int[] iArr = this.f18051e;
                this.f18051e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18052i;
                this.f18052i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18053o;
                this.f18053o = Arrays.copyOf(iArr2, iArr2.length * 2);
                Object[] objArr = this.f18084r;
                this.f18084r = Arrays.copyOf(objArr, objArr.length * 2);
            } else {
                throw new j("Nesting too deep at " + t());
            }
        }
        Object[] objArr2 = this.f18084r;
        int i11 = this.f18050d;
        this.f18050d = i11 + 1;
        objArr2[i11] = obj;
    }

    private void J0() {
        int i10 = this.f18050d;
        int i11 = i10 - 1;
        this.f18050d = i11;
        Object[] objArr = this.f18084r;
        objArr[i11] = null;
        this.f18051e[i11] = 0;
        if (i11 > 0) {
            int[] iArr = this.f18053o;
            int i12 = i10 - 2;
            iArr[i12] = iArr[i12] + 1;
            Object obj = objArr[i10 - 2];
            if (obj instanceof Iterator) {
                Iterator it = (Iterator) obj;
                if (it.hasNext()) {
                    H0(it.next());
                }
            }
        }
    }

    private Object O0(Class cls, m.c cVar) {
        Object obj;
        int i10 = this.f18050d;
        if (i10 != 0) {
            obj = this.f18084r[i10 - 1];
        } else {
            obj = null;
        }
        if (cls.isInstance(obj)) {
            return cls.cast(obj);
        }
        if (obj == null && cVar == m.c.NULL) {
            return null;
        }
        if (obj == f18083s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw G0(obj, cVar);
    }

    private String R0(Map.Entry entry) {
        Object key = entry.getKey();
        if (key instanceof String) {
            return (String) key;
        }
        throw G0(key, m.c.NAME);
    }

    @Override // com.squareup.moshi.m
    public void C0() {
        if (!this.f18055q) {
            this.f18084r[this.f18050d - 1] = ((Map.Entry) O0(Map.Entry.class, m.c.NAME)).getValue();
            this.f18052i[this.f18050d - 2] = "null";
            return;
        }
        m.c s10 = s();
        o0();
        throw new j("Cannot skip unexpected " + s10 + " at " + t());
    }

    @Override // com.squareup.moshi.m
    public void D() {
        m.c cVar = m.c.END_OBJECT;
        a aVar = (a) O0(a.class, cVar);
        if (aVar.f18085d == cVar && !aVar.hasNext()) {
            this.f18052i[this.f18050d - 1] = null;
            J0();
            return;
        }
        throw G0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public int J(m.b bVar) {
        Map.Entry entry = (Map.Entry) O0(Map.Entry.class, m.c.NAME);
        String R0 = R0(entry);
        int length = bVar.f18057a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (bVar.f18057a[i10].equals(R0)) {
                this.f18084r[this.f18050d - 1] = entry.getValue();
                this.f18052i[this.f18050d - 2] = R0;
                return i10;
            }
        }
        return -1;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v6 */
    /* JADX WARN: Type inference failed for: r1v3, types: [java.lang.Object[]] */
    @Override // com.squareup.moshi.m
    public int Q(m.b bVar) {
        String str;
        int i10 = this.f18050d;
        if (i10 != 0) {
            str = this.f18084r[i10 - 1];
        } else {
            str = null;
        }
        if (!(str instanceof String)) {
            if (str != f18083s) {
                return -1;
            }
            throw new IllegalStateException("JsonReader is closed");
        }
        String str2 = str;
        int length = bVar.f18057a.length;
        for (int i11 = 0; i11 < length; i11++) {
            if (bVar.f18057a[i11].equals(str2)) {
                J0();
                return i11;
            }
        }
        return -1;
    }

    @Override // com.squareup.moshi.m
    public void T() {
        Object obj;
        if (!this.f18055q) {
            int i10 = this.f18050d;
            if (i10 > 1) {
                this.f18052i[i10 - 2] = "null";
            }
            if (i10 != 0) {
                obj = this.f18084r[i10 - 1];
            } else {
                obj = null;
            }
            if (!(obj instanceof a)) {
                if (obj instanceof Map.Entry) {
                    Object[] objArr = this.f18084r;
                    objArr[i10 - 1] = ((Map.Entry) objArr[i10 - 1]).getValue();
                    return;
                } else if (i10 > 0) {
                    J0();
                    return;
                } else {
                    throw new j("Expected a value but was " + s() + " at path " + t());
                }
            }
            throw new j("Expected a value but was " + s() + " at path " + t());
        }
        throw new j("Cannot skip unexpected " + s() + " at " + t());
    }

    @Override // com.squareup.moshi.m
    public String b1() {
        String str;
        int i10 = this.f18050d;
        if (i10 != 0) {
            str = this.f18084r[i10 - 1];
        } else {
            str = null;
        }
        if (str instanceof String) {
            J0();
            return str;
        } else if (str instanceof Number) {
            J0();
            return str.toString();
        } else if (str == f18083s) {
            throw new IllegalStateException("JsonReader is closed");
        } else {
            throw G0(str, m.c.STRING);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Arrays.fill(this.f18084r, 0, this.f18050d, (Object) null);
        this.f18084r[0] = f18083s;
        this.f18051e[0] = 8;
        this.f18050d = 1;
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f18050d;
        if (i10 == 0) {
            return false;
        }
        Object obj = this.f18084r[i10 - 1];
        if ((obj instanceof Iterator) && !((Iterator) obj).hasNext()) {
            return false;
        }
        return true;
    }

    @Override // com.squareup.moshi.m
    public boolean k() {
        J0();
        return ((Boolean) O0(Boolean.class, m.c.BOOLEAN)).booleanValue();
    }

    @Override // com.squareup.moshi.m
    public Object m() {
        O0(Void.class, m.c.NULL);
        J0();
        return null;
    }

    @Override // com.squareup.moshi.m
    public BufferedSource n() {
        Object I = I();
        Buffer buffer = new Buffer();
        t Z = t.Z(buffer);
        try {
            Z.I(I);
            Z.close();
            return buffer;
        } catch (Throwable th2) {
            if (Z != null) {
                try {
                    Z.close();
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
        Object O0 = O0(Object.class, cVar);
        if (O0 instanceof Number) {
            parseDouble = ((Number) O0).doubleValue();
        } else if (O0 instanceof String) {
            try {
                parseDouble = Double.parseDouble((String) O0);
            } catch (NumberFormatException unused) {
                throw G0(O0, m.c.NUMBER);
            }
        } else {
            throw G0(O0, cVar);
        }
        if (!this.f18054p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
            throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
        }
        J0();
        return parseDouble;
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        int intValueExact;
        m.c cVar = m.c.NUMBER;
        Object O0 = O0(Object.class, cVar);
        if (O0 instanceof Number) {
            intValueExact = ((Number) O0).intValue();
        } else if (O0 instanceof String) {
            try {
                try {
                    intValueExact = Integer.parseInt((String) O0);
                } catch (NumberFormatException unused) {
                    throw G0(O0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                intValueExact = new BigDecimal((String) O0).intValueExact();
            }
        } else {
            throw G0(O0, cVar);
        }
        J0();
        return intValueExact;
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        long longValueExact;
        m.c cVar = m.c.NUMBER;
        Object O0 = O0(Object.class, cVar);
        if (O0 instanceof Number) {
            longValueExact = ((Number) O0).longValue();
        } else if (O0 instanceof String) {
            try {
                try {
                    longValueExact = Long.parseLong((String) O0);
                } catch (NumberFormatException unused) {
                    throw G0(O0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                longValueExact = new BigDecimal((String) O0).longValueExact();
            }
        } else {
            throw G0(O0, cVar);
        }
        J0();
        return longValueExact;
    }

    @Override // com.squareup.moshi.m
    public String o0() {
        Map.Entry entry = (Map.Entry) O0(Map.Entry.class, m.c.NAME);
        String R0 = R0(entry);
        this.f18084r[this.f18050d - 1] = entry.getValue();
        this.f18052i[this.f18050d - 2] = R0;
        return R0;
    }

    @Override // com.squareup.moshi.m
    public m.c s() {
        int i10 = this.f18050d;
        if (i10 == 0) {
            return m.c.END_DOCUMENT;
        }
        Object obj = this.f18084r[i10 - 1];
        if (obj instanceof a) {
            return ((a) obj).f18085d;
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
        if (obj == f18083s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw G0(obj, "a JSON value");
    }

    @Override // com.squareup.moshi.m
    public void u() {
        Map map = (Map) O0(Map.class, m.c.BEGIN_OBJECT);
        a aVar = new a(m.c.END_OBJECT, map.entrySet().toArray(new Object[map.size()]), 0);
        Object[] objArr = this.f18084r;
        int i10 = this.f18050d;
        objArr[i10 - 1] = aVar;
        this.f18051e[i10 - 1] = 3;
        if (aVar.hasNext()) {
            H0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public void v() {
        m.c cVar = m.c.END_ARRAY;
        a aVar = (a) O0(a.class, cVar);
        if (aVar.f18085d == cVar && !aVar.hasNext()) {
            J0();
            return;
        }
        throw G0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public void x() {
        List list = (List) O0(List.class, m.c.BEGIN_ARRAY);
        a aVar = new a(m.c.END_ARRAY, list.toArray(new Object[list.size()]), 0);
        Object[] objArr = this.f18084r;
        int i10 = this.f18050d;
        objArr[i10 - 1] = aVar;
        this.f18051e[i10 - 1] = 1;
        this.f18053o[i10 - 1] = 0;
        if (aVar.hasNext()) {
            H0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public m y() {
        return new q(this);
    }

    @Override // com.squareup.moshi.m
    public void z() {
        if (hasNext()) {
            H0(o0());
        }
    }

    q(q qVar) {
        super(qVar);
        this.f18084r = (Object[]) qVar.f18084r.clone();
        for (int i10 = 0; i10 < this.f18050d; i10++) {
            Object[] objArr = this.f18084r;
            Object obj = objArr[i10];
            if (obj instanceof a) {
                objArr[i10] = ((a) obj).clone();
            }
        }
    }
}
