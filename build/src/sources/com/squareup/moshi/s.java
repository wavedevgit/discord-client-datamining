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
    Object[] f18850u = new Object[32];

    /* renamed from: v  reason: collision with root package name */
    private String f18851v;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s() {
        E0(6);
    }

    private s a1(Object obj) {
        String str;
        Object put;
        int z02 = z0();
        int i10 = this.f18852d;
        if (i10 == 1) {
            if (z02 == 6) {
                this.f18853e[i10 - 1] = 7;
                this.f18850u[i10 - 1] = obj;
                return this;
            }
            throw new IllegalStateException("JSON must have only one top-level value.");
        } else if (z02 == 3 && (str = this.f18851v) != null) {
            if ((obj == null && !this.f18858r) || (put = ((Map) this.f18850u[i10 - 1]).put(str, obj)) == null) {
                this.f18851v = null;
                return this;
            }
            throw new IllegalArgumentException("Map key '" + this.f18851v + "' has multiple values at path " + t() + ": " + put + " and " + obj);
        } else if (z02 == 1) {
            ((List) this.f18850u[i10 - 1]).add(obj);
            return this;
        } else if (z02 == 9) {
            throw new IllegalStateException("Sink from valueSink() was not closed");
        } else {
            throw new IllegalStateException("Nesting problem.");
        }
    }

    @Override // com.squareup.moshi.t
    public t J(String str) {
        if (str != null) {
            if (this.f18852d != 0) {
                if (z0() == 3 && this.f18851v == null && !this.f18859s) {
                    this.f18851v = str;
                    this.f18854i[this.f18852d - 1] = str;
                    return this;
                }
                throw new IllegalStateException("Nesting problem.");
            }
            throw new IllegalStateException("JsonWriter is closed.");
        }
        throw new NullPointerException("name == null");
    }

    @Override // com.squareup.moshi.t
    public t L0(double d10) {
        if (!this.f18857q && (Double.isNaN(d10) || d10 == Double.NEGATIVE_INFINITY || d10 == Double.POSITIVE_INFINITY)) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f18859s) {
            this.f18859s = false;
            return J(Double.toString(d10));
        } else {
            a1(Double.valueOf(d10));
            int[] iArr = this.f18855o;
            int i10 = this.f18852d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t N0(long j10) {
        if (this.f18859s) {
            this.f18859s = false;
            return J(Long.toString(j10));
        }
        a1(Long.valueOf(j10));
        int[] iArr = this.f18855o;
        int i10 = this.f18852d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t O0(Boolean bool) {
        if (!this.f18859s) {
            a1(bool);
            int[] iArr = this.f18855o;
            int i10 = this.f18852d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t Q() {
        if (!this.f18859s) {
            a1(null);
            int[] iArr = this.f18855o;
            int i10 = this.f18852d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t S0(Number number) {
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
                if (this.f18859s) {
                    this.f18859s = false;
                    return J(bigDecimal.toString());
                }
                a1(bigDecimal);
                int[] iArr = this.f18855o;
                int i10 = this.f18852d - 1;
                iArr[i10] = iArr[i10] + 1;
                return this;
            }
            return L0(number.doubleValue());
        }
        return N0(number.longValue());
    }

    @Override // com.squareup.moshi.t
    public t V0(String str) {
        if (this.f18859s) {
            this.f18859s = false;
            return J(str);
        }
        a1(str);
        int[] iArr = this.f18855o;
        int i10 = this.f18852d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Z0(boolean z10) {
        if (!this.f18859s) {
            a1(Boolean.valueOf(z10));
            int[] iArr = this.f18855o;
            int i10 = this.f18852d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f18859s) {
            int i10 = this.f18852d;
            int i11 = this.f18860t;
            if (i10 == i11 && this.f18853e[i10 - 1] == 1) {
                this.f18860t = ~i11;
                return this;
            }
            m();
            ArrayList arrayList = new ArrayList();
            a1(arrayList);
            Object[] objArr = this.f18850u;
            int i12 = this.f18852d;
            objArr[i12] = arrayList;
            this.f18855o[i12] = 0;
            E0(1);
            return this;
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + t());
    }

    public Object b1() {
        int i10 = this.f18852d;
        if (i10 <= 1 && (i10 != 1 || this.f18853e[i10 - 1] == 7)) {
            return this.f18850u[0];
        }
        throw new IllegalStateException("Incomplete document");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        int i10 = this.f18852d;
        if (i10 <= 1 && (i10 != 1 || this.f18853e[i10 - 1] == 7)) {
            this.f18852d = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f18852d != 0) {
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t i() {
        if (!this.f18859s) {
            int i10 = this.f18852d;
            int i11 = this.f18860t;
            if (i10 == i11 && this.f18853e[i10 - 1] == 3) {
                this.f18860t = ~i11;
                return this;
            }
            m();
            u uVar = new u();
            a1(uVar);
            this.f18850u[this.f18852d] = uVar;
            E0(3);
            return this;
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t n() {
        if (z0() == 1) {
            int i10 = this.f18852d;
            int i11 = this.f18860t;
            if (i10 == (~i11)) {
                this.f18860t = ~i11;
                return this;
            }
            int i12 = i10 - 1;
            this.f18852d = i12;
            this.f18850u[i12] = null;
            int[] iArr = this.f18855o;
            int i13 = i10 - 2;
            iArr[i13] = iArr[i13] + 1;
            return this;
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t s() {
        if (z0() == 3) {
            if (this.f18851v == null) {
                int i10 = this.f18852d;
                int i11 = this.f18860t;
                if (i10 == (~i11)) {
                    this.f18860t = ~i11;
                    return this;
                }
                this.f18859s = false;
                int i12 = i10 - 1;
                this.f18852d = i12;
                this.f18850u[i12] = null;
                this.f18854i[i12] = null;
                int[] iArr = this.f18855o;
                int i13 = i10 - 2;
                iArr[i13] = iArr[i13] + 1;
                return this;
            }
            throw new IllegalStateException("Dangling name: " + this.f18851v);
        }
        throw new IllegalStateException("Nesting problem.");
    }
}
