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
    Object[] f18593u = new Object[32];

    /* renamed from: v  reason: collision with root package name */
    private String f18594v;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s() {
        J0(6);
    }

    private s A1(Object obj) {
        String str;
        Object put;
        int F0 = F0();
        int i10 = this.f18595d;
        if (i10 == 1) {
            if (F0 == 6) {
                this.f18596e[i10 - 1] = 7;
                this.f18593u[i10 - 1] = obj;
                return this;
            }
            throw new IllegalStateException("JSON must have only one top-level value.");
        } else if (F0 == 3 && (str = this.f18594v) != null) {
            if ((obj == null && !this.f18601r) || (put = ((Map) this.f18593u[i10 - 1]).put(str, obj)) == null) {
                this.f18594v = null;
                return this;
            }
            throw new IllegalArgumentException("Map key '" + this.f18594v + "' has multiple values at path " + q() + ": " + put + " and " + obj);
        } else if (F0 == 1) {
            ((List) this.f18593u[i10 - 1]).add(obj);
            return this;
        } else if (F0 == 9) {
            throw new IllegalStateException("Sink from valueSink() was not closed");
        } else {
            throw new IllegalStateException("Nesting problem.");
        }
    }

    public Object B1() {
        int i10 = this.f18595d;
        if (i10 <= 1 && (i10 != 1 || this.f18596e[i10 - 1] == 7)) {
            return this.f18593u[0];
        }
        throw new IllegalStateException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t D0() {
        if (!this.f18602s) {
            A1(null);
            int[] iArr = this.f18598o;
            int i10 = this.f18595d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t E() {
        if (F0() == 3) {
            if (this.f18594v == null) {
                int i10 = this.f18595d;
                int i11 = this.f18603t;
                if (i10 == (~i11)) {
                    this.f18603t = ~i11;
                    return this;
                }
                this.f18602s = false;
                int i12 = i10 - 1;
                this.f18595d = i12;
                this.f18593u[i12] = null;
                this.f18597i[i12] = null;
                int[] iArr = this.f18598o;
                int i13 = i10 - 2;
                iArr[i13] = iArr[i13] + 1;
                return this;
            }
            throw new IllegalStateException("Dangling name: " + this.f18594v);
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t V0(double d10) {
        if (!this.f18600q && (Double.isNaN(d10) || d10 == Double.NEGATIVE_INFINITY || d10 == Double.POSITIVE_INFINITY)) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f18602s) {
            this.f18602s = false;
            return t0(Double.toString(d10));
        } else {
            A1(Double.valueOf(d10));
            int[] iArr = this.f18598o;
            int i10 = this.f18595d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t Y0(long j10) {
        if (this.f18602s) {
            this.f18602s = false;
            return t0(Long.toString(j10));
        }
        A1(Long.valueOf(j10));
        int[] iArr = this.f18598o;
        int i10 = this.f18595d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Z0(Boolean bool) {
        if (!this.f18602s) {
            A1(bool);
            int[] iArr = this.f18598o;
            int i10 = this.f18595d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f18602s) {
            int i10 = this.f18595d;
            int i11 = this.f18603t;
            if (i10 == i11 && this.f18596e[i10 - 1] == 1) {
                this.f18603t = ~i11;
                return this;
            }
            n();
            ArrayList arrayList = new ArrayList();
            A1(arrayList);
            Object[] objArr = this.f18593u;
            int i12 = this.f18595d;
            objArr[i12] = arrayList;
            this.f18598o[i12] = 0;
            J0(1);
            return this;
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        int i10 = this.f18595d;
        if (i10 <= 1 && (i10 != 1 || this.f18596e[i10 - 1] == 7)) {
            this.f18595d = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t e1(Number number) {
        BigDecimal bigDecimal;
        if (!(number instanceof Byte) && !(number instanceof Short) && !(number instanceof Integer) && !(number instanceof Long)) {
            if (!(number instanceof Float) && !(number instanceof Double)) {
                if (number == null) {
                    return D0();
                }
                if (number instanceof BigDecimal) {
                    bigDecimal = (BigDecimal) number;
                } else {
                    bigDecimal = new BigDecimal(number.toString());
                }
                if (this.f18602s) {
                    this.f18602s = false;
                    return t0(bigDecimal.toString());
                }
                A1(bigDecimal);
                int[] iArr = this.f18598o;
                int i10 = this.f18595d - 1;
                iArr[i10] = iArr[i10] + 1;
                return this;
            }
            return V0(number.doubleValue());
        }
        return Y0(number.longValue());
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f18595d != 0) {
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t l() {
        if (!this.f18602s) {
            int i10 = this.f18595d;
            int i11 = this.f18603t;
            if (i10 == i11 && this.f18596e[i10 - 1] == 3) {
                this.f18603t = ~i11;
                return this;
            }
            n();
            u uVar = new u();
            A1(uVar);
            this.f18593u[this.f18595d] = uVar;
            J0(3);
            return this;
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t t0(String str) {
        if (str != null) {
            if (this.f18595d != 0) {
                if (F0() == 3 && this.f18594v == null && !this.f18602s) {
                    this.f18594v = str;
                    this.f18597i[this.f18595d - 1] = str;
                    return this;
                }
                throw new IllegalStateException("Nesting problem.");
            }
            throw new IllegalStateException("JsonWriter is closed.");
        }
        throw new NullPointerException("name == null");
    }

    @Override // com.squareup.moshi.t
    public t x() {
        if (F0() == 1) {
            int i10 = this.f18595d;
            int i11 = this.f18603t;
            if (i10 == (~i11)) {
                this.f18603t = ~i11;
                return this;
            }
            int i12 = i10 - 1;
            this.f18595d = i12;
            this.f18593u[i12] = null;
            int[] iArr = this.f18598o;
            int i13 = i10 - 2;
            iArr[i13] = iArr[i13] + 1;
            return this;
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t x1(String str) {
        if (this.f18602s) {
            this.f18602s = false;
            return t0(str);
        }
        A1(str);
        int[] iArr = this.f18598o;
        int i10 = this.f18595d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t y1(boolean z10) {
        if (!this.f18602s) {
            A1(Boolean.valueOf(z10));
            int[] iArr = this.f18598o;
            int i10 = this.f18595d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + q());
    }
}
