package com.squareup.moshi;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s extends t {

    /* renamed from: u  reason: collision with root package name */
    Object[] f18101u = new Object[32];

    /* renamed from: v  reason: collision with root package name */
    private String f18102v;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s() {
        G0(6);
    }

    private s u1(Object obj) {
        String str;
        Object put;
        int C0 = C0();
        int i10 = this.f18103d;
        if (i10 == 1) {
            if (C0 == 6) {
                this.f18104e[i10 - 1] = 7;
                this.f18101u[i10 - 1] = obj;
                return this;
            }
            throw new IllegalStateException("JSON must have only one top-level value.");
        } else if (C0 == 3 && (str = this.f18102v) != null) {
            if ((obj == null && !this.f18109r) || (put = ((Map) this.f18101u[i10 - 1]).put(str, obj)) == null) {
                this.f18102v = null;
                return this;
            }
            throw new IllegalArgumentException("Map key '" + this.f18102v + "' has multiple values at path " + t() + ": " + put + " and " + obj);
        } else if (C0 == 1) {
            ((List) this.f18101u[i10 - 1]).add(obj);
            return this;
        } else if (C0 == 9) {
            throw new IllegalStateException("Sink from valueSink() was not closed");
        } else {
            throw new IllegalStateException("Nesting problem.");
        }
    }

    @Override // com.squareup.moshi.t
    public t J(String str) {
        if (str != null) {
            if (this.f18103d != 0) {
                if (C0() == 3 && this.f18102v == null && !this.f18110s) {
                    this.f18102v = str;
                    this.f18105i[this.f18103d - 1] = str;
                    return this;
                }
                throw new IllegalStateException("Nesting problem.");
            }
            throw new IllegalStateException("JsonWriter is closed.");
        }
        throw new NullPointerException("name == null");
    }

    @Override // com.squareup.moshi.t
    public t Q() {
        if (!this.f18110s) {
            u1(null);
            int[] iArr = this.f18106o;
            int i10 = this.f18103d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t R0(double d10) {
        if (!this.f18108q && (Double.isNaN(d10) || d10 == Double.NEGATIVE_INFINITY || d10 == Double.POSITIVE_INFINITY)) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f18110s) {
            this.f18110s = false;
            return J(Double.toString(d10));
        } else {
            u1(Double.valueOf(d10));
            int[] iArr = this.f18106o;
            int i10 = this.f18103d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t V0(long j10) {
        if (this.f18110s) {
            this.f18110s = false;
            return J(Long.toString(j10));
        }
        u1(Long.valueOf(j10));
        int[] iArr = this.f18106o;
        int i10 = this.f18103d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t W0(Boolean bool) {
        if (!this.f18110s) {
            u1(bool);
            int[] iArr = this.f18106o;
            int i10 = this.f18103d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f18110s) {
            int i10 = this.f18103d;
            int i11 = this.f18111t;
            if (i10 == i11 && this.f18104e[i10 - 1] == 1) {
                this.f18111t = ~i11;
                return this;
            }
            m();
            ArrayList arrayList = new ArrayList();
            u1(arrayList);
            Object[] objArr = this.f18101u;
            int i12 = this.f18103d;
            objArr[i12] = arrayList;
            this.f18106o[i12] = 0;
            G0(1);
            return this;
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t a1(Number number) {
        BigDecimal bigDecimal;
        if (!(number instanceof Byte) && !(number instanceof Short) && !(number instanceof Integer) && !(number instanceof Long)) {
            if (!(number instanceof Float) && !(number instanceof Double)) {
                if (number == null) {
                    return Q();
                }
                if (number instanceof BigDecimal) {
                    bigDecimal = (BigDecimal) number;
                } else {
                    bigDecimal = new BigDecimal(number.toString());
                }
                if (this.f18110s) {
                    this.f18110s = false;
                    return J(bigDecimal.toString());
                }
                u1(bigDecimal);
                int[] iArr = this.f18106o;
                int i10 = this.f18103d - 1;
                iArr[i10] = iArr[i10] + 1;
                return this;
            }
            return R0(number.doubleValue());
        }
        return V0(number.longValue());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        int i10 = this.f18103d;
        if (i10 <= 1 && (i10 != 1 || this.f18104e[i10 - 1] == 7)) {
            this.f18103d = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f18103d != 0) {
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t k() {
        if (!this.f18110s) {
            int i10 = this.f18103d;
            int i11 = this.f18111t;
            if (i10 == i11 && this.f18104e[i10 - 1] == 3) {
                this.f18111t = ~i11;
                return this;
            }
            m();
            u uVar = new u();
            u1(uVar);
            this.f18101u[this.f18103d] = uVar;
            G0(3);
            return this;
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t n() {
        if (C0() == 1) {
            int i10 = this.f18103d;
            int i11 = this.f18111t;
            if (i10 == (~i11)) {
                this.f18111t = ~i11;
                return this;
            }
            int i12 = i10 - 1;
            this.f18103d = i12;
            this.f18101u[i12] = null;
            int[] iArr = this.f18106o;
            int i13 = i10 - 2;
            iArr[i13] = iArr[i13] + 1;
            return this;
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t r1(String str) {
        if (this.f18110s) {
            this.f18110s = false;
            return J(str);
        }
        u1(str);
        int[] iArr = this.f18106o;
        int i10 = this.f18103d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t s() {
        if (C0() == 3) {
            if (this.f18102v == null) {
                int i10 = this.f18103d;
                int i11 = this.f18111t;
                if (i10 == (~i11)) {
                    this.f18111t = ~i11;
                    return this;
                }
                this.f18110s = false;
                int i12 = i10 - 1;
                this.f18103d = i12;
                this.f18101u[i12] = null;
                this.f18105i[i12] = null;
                int[] iArr = this.f18106o;
                int i13 = i10 - 2;
                iArr[i13] = iArr[i13] + 1;
                return this;
            }
            throw new IllegalStateException("Dangling name: " + this.f18102v);
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t s1(boolean z10) {
        if (!this.f18110s) {
            u1(Boolean.valueOf(z10));
            int[] iArr = this.f18106o;
            int i10 = this.f18103d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }

    public Object w1() {
        int i10 = this.f18103d;
        if (i10 <= 1 && (i10 != 1 || this.f18104e[i10 - 1] == 7)) {
            return this.f18101u[0];
        }
        throw new IllegalStateException("Incomplete document");
    }
}
