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
    private static final Object f18832s = new Object();

    /* renamed from: r  reason: collision with root package name */
    private Object[] f18833r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements Iterator, Cloneable {

        /* renamed from: d  reason: collision with root package name */
        final m.c f18834d;

        /* renamed from: e  reason: collision with root package name */
        final Object[] f18835e;

        /* renamed from: i  reason: collision with root package name */
        int f18836i;

        a(m.c cVar, Object[] objArr, int i10) {
            this.f18834d = cVar;
            this.f18835e = objArr;
            this.f18836i = i10;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* renamed from: a */
        public a clone() {
            return new a(this.f18834d, this.f18835e, this.f18836i);
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f18836i < this.f18835e.length) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public Object next() {
            Object[] objArr = this.f18835e;
            int i10 = this.f18836i;
            this.f18836i = i10 + 1;
            return objArr[i10];
        }

        @Override // java.util.Iterator
        public void remove() {
            throw new UnsupportedOperationException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public q(Object obj) {
        int[] iArr = this.f18800e;
        int i10 = this.f18799d;
        iArr[i10] = 7;
        Object[] objArr = new Object[32];
        this.f18833r = objArr;
        this.f18799d = i10 + 1;
        objArr[i10] = obj;
    }

    private void F0(Object obj) {
        int i10 = this.f18799d;
        if (i10 == this.f18833r.length) {
            if (i10 != 256) {
                int[] iArr = this.f18800e;
                this.f18800e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18801i;
                this.f18801i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18802o;
                this.f18802o = Arrays.copyOf(iArr2, iArr2.length * 2);
                Object[] objArr = this.f18833r;
                this.f18833r = Arrays.copyOf(objArr, objArr.length * 2);
            } else {
                throw new j("Nesting too deep at " + t());
            }
        }
        Object[] objArr2 = this.f18833r;
        int i11 = this.f18799d;
        this.f18799d = i11 + 1;
        objArr2[i11] = obj;
    }

    private void G0() {
        int i10 = this.f18799d;
        int i11 = i10 - 1;
        this.f18799d = i11;
        Object[] objArr = this.f18833r;
        objArr[i11] = null;
        this.f18800e[i11] = 0;
        if (i11 > 0) {
            int[] iArr = this.f18802o;
            int i12 = i10 - 2;
            iArr[i12] = iArr[i12] + 1;
            Object obj = objArr[i10 - 2];
            if (obj instanceof Iterator) {
                Iterator it = (Iterator) obj;
                if (it.hasNext()) {
                    F0(it.next());
                }
            }
        }
    }

    private Object H0(Class cls, m.c cVar) {
        Object obj;
        int i10 = this.f18799d;
        if (i10 != 0) {
            obj = this.f18833r[i10 - 1];
        } else {
            obj = null;
        }
        if (cls.isInstance(obj)) {
            return cls.cast(obj);
        }
        if (obj == null && cVar == m.c.NULL) {
            return null;
        }
        if (obj == f18832s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw E0(obj, cVar);
    }

    private String L0(Map.Entry entry) {
        Object key = entry.getKey();
        if (key instanceof String) {
            return (String) key;
        }
        throw E0(key, m.c.NAME);
    }

    @Override // com.squareup.moshi.m
    public void D() {
        m.c cVar = m.c.END_OBJECT;
        a aVar = (a) H0(a.class, cVar);
        if (aVar.f18834d == cVar && !aVar.hasNext()) {
            this.f18801i[this.f18799d - 1] = null;
            G0();
            return;
        }
        throw E0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public int J(m.b bVar) {
        Map.Entry entry = (Map.Entry) H0(Map.Entry.class, m.c.NAME);
        String L0 = L0(entry);
        int length = bVar.f18806a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (bVar.f18806a[i10].equals(L0)) {
                this.f18833r[this.f18799d - 1] = entry.getValue();
                this.f18801i[this.f18799d - 2] = L0;
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
        int i10 = this.f18799d;
        if (i10 != 0) {
            str = this.f18833r[i10 - 1];
        } else {
            str = null;
        }
        if (!(str instanceof String)) {
            if (str != f18832s) {
                return -1;
            }
            throw new IllegalStateException("JsonReader is closed");
        }
        String str2 = str;
        int length = bVar.f18806a.length;
        for (int i11 = 0; i11 < length; i11++) {
            if (bVar.f18806a[i11].equals(str2)) {
                G0();
                return i11;
            }
        }
        return -1;
    }

    @Override // com.squareup.moshi.m
    public void T() {
        Object obj;
        if (!this.f18804q) {
            int i10 = this.f18799d;
            if (i10 > 1) {
                this.f18801i[i10 - 2] = "null";
            }
            if (i10 != 0) {
                obj = this.f18833r[i10 - 1];
            } else {
                obj = null;
            }
            if (!(obj instanceof a)) {
                if (obj instanceof Map.Entry) {
                    Object[] objArr = this.f18833r;
                    objArr[i10 - 1] = ((Map.Entry) objArr[i10 - 1]).getValue();
                    return;
                } else if (i10 > 0) {
                    G0();
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
        Arrays.fill(this.f18833r, 0, this.f18799d, (Object) null);
        this.f18833r[0] = f18832s;
        this.f18800e[0] = 8;
        this.f18799d = 1;
    }

    @Override // com.squareup.moshi.m
    public String g1() {
        String str;
        int i10 = this.f18799d;
        if (i10 != 0) {
            str = this.f18833r[i10 - 1];
        } else {
            str = null;
        }
        if (str instanceof String) {
            G0();
            return str;
        } else if (str instanceof Number) {
            G0();
            return str.toString();
        } else if (str == f18832s) {
            throw new IllegalStateException("JsonReader is closed");
        } else {
            throw E0(str, m.c.STRING);
        }
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f18799d;
        if (i10 == 0) {
            return false;
        }
        Object obj = this.f18833r[i10 - 1];
        if ((obj instanceof Iterator) && !((Iterator) obj).hasNext()) {
            return false;
        }
        return true;
    }

    @Override // com.squareup.moshi.m
    public boolean i() {
        G0();
        return ((Boolean) H0(Boolean.class, m.c.BOOLEAN)).booleanValue();
    }

    @Override // com.squareup.moshi.m
    public Object m() {
        H0(Void.class, m.c.NULL);
        G0();
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
        Object H0 = H0(Object.class, cVar);
        if (H0 instanceof Number) {
            parseDouble = ((Number) H0).doubleValue();
        } else if (H0 instanceof String) {
            try {
                parseDouble = Double.parseDouble((String) H0);
            } catch (NumberFormatException unused) {
                throw E0(H0, m.c.NUMBER);
            }
        } else {
            throw E0(H0, cVar);
        }
        if (!this.f18803p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
            throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
        }
        G0();
        return parseDouble;
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        int intValueExact;
        m.c cVar = m.c.NUMBER;
        Object H0 = H0(Object.class, cVar);
        if (H0 instanceof Number) {
            intValueExact = ((Number) H0).intValue();
        } else if (H0 instanceof String) {
            try {
                try {
                    intValueExact = Integer.parseInt((String) H0);
                } catch (NumberFormatException unused) {
                    throw E0(H0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                intValueExact = new BigDecimal((String) H0).intValueExact();
            }
        } else {
            throw E0(H0, cVar);
        }
        G0();
        return intValueExact;
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        long longValueExact;
        m.c cVar = m.c.NUMBER;
        Object H0 = H0(Object.class, cVar);
        if (H0 instanceof Number) {
            longValueExact = ((Number) H0).longValue();
        } else if (H0 instanceof String) {
            try {
                try {
                    longValueExact = Long.parseLong((String) H0);
                } catch (NumberFormatException unused) {
                    throw E0(H0, m.c.NUMBER);
                }
            } catch (NumberFormatException unused2) {
                longValueExact = new BigDecimal((String) H0).longValueExact();
            }
        } else {
            throw E0(H0, cVar);
        }
        G0();
        return longValueExact;
    }

    @Override // com.squareup.moshi.m
    public String o0() {
        Map.Entry entry = (Map.Entry) H0(Map.Entry.class, m.c.NAME);
        String L0 = L0(entry);
        this.f18833r[this.f18799d - 1] = entry.getValue();
        this.f18801i[this.f18799d - 2] = L0;
        return L0;
    }

    @Override // com.squareup.moshi.m
    public m.c s() {
        int i10 = this.f18799d;
        if (i10 == 0) {
            return m.c.END_DOCUMENT;
        }
        Object obj = this.f18833r[i10 - 1];
        if (obj instanceof a) {
            return ((a) obj).f18834d;
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
        if (obj == f18832s) {
            throw new IllegalStateException("JsonReader is closed");
        }
        throw E0(obj, "a JSON value");
    }

    @Override // com.squareup.moshi.m
    public void u() {
        Map map = (Map) H0(Map.class, m.c.BEGIN_OBJECT);
        a aVar = new a(m.c.END_OBJECT, map.entrySet().toArray(new Object[map.size()]), 0);
        Object[] objArr = this.f18833r;
        int i10 = this.f18799d;
        objArr[i10 - 1] = aVar;
        this.f18800e[i10 - 1] = 3;
        if (aVar.hasNext()) {
            F0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public void v() {
        m.c cVar = m.c.END_ARRAY;
        a aVar = (a) H0(a.class, cVar);
        if (aVar.f18834d == cVar && !aVar.hasNext()) {
            G0();
            return;
        }
        throw E0(aVar, cVar);
    }

    @Override // com.squareup.moshi.m
    public void x() {
        List list = (List) H0(List.class, m.c.BEGIN_ARRAY);
        a aVar = new a(m.c.END_ARRAY, list.toArray(new Object[list.size()]), 0);
        Object[] objArr = this.f18833r;
        int i10 = this.f18799d;
        objArr[i10 - 1] = aVar;
        this.f18800e[i10 - 1] = 1;
        this.f18802o[i10 - 1] = 0;
        if (aVar.hasNext()) {
            F0(aVar.next());
        }
    }

    @Override // com.squareup.moshi.m
    public m y() {
        return new q(this);
    }

    @Override // com.squareup.moshi.m
    public void z() {
        if (hasNext()) {
            F0(o0());
        }
    }

    @Override // com.squareup.moshi.m
    public void z0() {
        if (!this.f18804q) {
            this.f18833r[this.f18799d - 1] = ((Map.Entry) H0(Map.Entry.class, m.c.NAME)).getValue();
            this.f18801i[this.f18799d - 2] = "null";
            return;
        }
        m.c s10 = s();
        o0();
        throw new j("Cannot skip unexpected " + s10 + " at " + t());
    }

    q(q qVar) {
        super(qVar);
        this.f18833r = (Object[]) qVar.f18833r.clone();
        for (int i10 = 0; i10 < this.f18799d; i10++) {
            Object[] objArr = this.f18833r;
            Object obj = objArr[i10];
            if (obj instanceof a) {
                objArr[i10] = ((a) obj).clone();
            }
        }
    }
}
