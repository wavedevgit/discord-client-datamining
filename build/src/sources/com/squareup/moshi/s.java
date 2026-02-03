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
    Object[] f17575u = new Object[32];

    /* renamed from: v  reason: collision with root package name */
    private String f17576v;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s() {
        I0(6);
    }

    private s A1(Object obj) {
        String str;
        Object put;
        int E0 = E0();
        int i10 = this.f17577d;
        if (i10 == 1) {
            if (E0 == 6) {
                this.f17578e[i10 - 1] = 7;
                this.f17575u[i10 - 1] = obj;
                return this;
            }
            throw new IllegalStateException("JSON must have only one top-level value.");
        } else if (E0 == 3 && (str = this.f17576v) != null) {
            if ((obj == null && !this.f17583r) || (put = ((Map) this.f17575u[i10 - 1]).put(str, obj)) == null) {
                this.f17576v = null;
                return this;
            }
            throw new IllegalArgumentException("Map key '" + this.f17576v + "' has multiple values at path " + q() + ": " + put + " and " + obj);
        } else if (E0 == 1) {
            ((List) this.f17575u[i10 - 1]).add(obj);
            return this;
        } else if (E0 == 9) {
            throw new IllegalStateException("Sink from valueSink() was not closed");
        } else {
            throw new IllegalStateException("Nesting problem.");
        }
    }

    @Override // com.squareup.moshi.t
    public t A0(String str) {
        if (str != null) {
            if (this.f17577d != 0) {
                if (E0() == 3 && this.f17576v == null && !this.f17584s) {
                    this.f17576v = str;
                    this.f17579i[this.f17577d - 1] = str;
                    return this;
                }
                throw new IllegalStateException("Nesting problem.");
            }
            throw new IllegalStateException("JsonWriter is closed.");
        }
        throw new NullPointerException("name == null");
    }

    public Object B1() {
        int i10 = this.f17577d;
        if (i10 <= 1 && (i10 != 1 || this.f17578e[i10 - 1] == 7)) {
            return this.f17575u[0];
        }
        throw new IllegalStateException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t C0() {
        if (!this.f17584s) {
            A1(null);
            int[] iArr = this.f17580o;
            int i10 = this.f17577d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t E() {
        if (E0() == 3) {
            if (this.f17576v == null) {
                int i10 = this.f17577d;
                int i11 = this.f17585t;
                if (i10 == (~i11)) {
                    this.f17585t = ~i11;
                    return this;
                }
                this.f17584s = false;
                int i12 = i10 - 1;
                this.f17577d = i12;
                this.f17575u[i12] = null;
                this.f17579i[i12] = null;
                int[] iArr = this.f17580o;
                int i13 = i10 - 2;
                iArr[i13] = iArr[i13] + 1;
                return this;
            }
            throw new IllegalStateException("Dangling name: " + this.f17576v);
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t V0(double d10) {
        if (!this.f17582q && (Double.isNaN(d10) || d10 == Double.NEGATIVE_INFINITY || d10 == Double.POSITIVE_INFINITY)) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f17584s) {
            this.f17584s = false;
            return A0(Double.toString(d10));
        } else {
            A1(Double.valueOf(d10));
            int[] iArr = this.f17580o;
            int i10 = this.f17577d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t Y0(long j10) {
        if (this.f17584s) {
            this.f17584s = false;
            return A0(Long.toString(j10));
        }
        A1(Long.valueOf(j10));
        int[] iArr = this.f17580o;
        int i10 = this.f17577d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Z0(Boolean bool) {
        if (!this.f17584s) {
            A1(bool);
            int[] iArr = this.f17580o;
            int i10 = this.f17577d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f17584s) {
            int i10 = this.f17577d;
            int i11 = this.f17585t;
            if (i10 == i11 && this.f17578e[i10 - 1] == 1) {
                this.f17585t = ~i11;
                return this;
            }
            n();
            ArrayList arrayList = new ArrayList();
            A1(arrayList);
            Object[] objArr = this.f17575u;
            int i12 = this.f17577d;
            objArr[i12] = arrayList;
            this.f17580o[i12] = 0;
            I0(1);
            return this;
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        int i10 = this.f17577d;
        if (i10 <= 1 && (i10 != 1 || this.f17578e[i10 - 1] == 7)) {
            this.f17577d = 0;
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
                    return C0();
                }
                if (number instanceof BigDecimal) {
                    bigDecimal = (BigDecimal) number;
                } else {
                    bigDecimal = new BigDecimal(number.toString());
                }
                if (this.f17584s) {
                    this.f17584s = false;
                    return A0(bigDecimal.toString());
                }
                A1(bigDecimal);
                int[] iArr = this.f17580o;
                int i10 = this.f17577d - 1;
                iArr[i10] = iArr[i10] + 1;
                return this;
            }
            return V0(number.doubleValue());
        }
        return Y0(number.longValue());
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f17577d != 0) {
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t l() {
        if (!this.f17584s) {
            int i10 = this.f17577d;
            int i11 = this.f17585t;
            if (i10 == i11 && this.f17578e[i10 - 1] == 3) {
                this.f17585t = ~i11;
                return this;
            }
            n();
            u uVar = new u();
            A1(uVar);
            this.f17575u[this.f17577d] = uVar;
            I0(3);
            return this;
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t x() {
        if (E0() == 1) {
            int i10 = this.f17577d;
            int i11 = this.f17585t;
            if (i10 == (~i11)) {
                this.f17585t = ~i11;
                return this;
            }
            int i12 = i10 - 1;
            this.f17577d = i12;
            this.f17575u[i12] = null;
            int[] iArr = this.f17580o;
            int i13 = i10 - 2;
            iArr[i13] = iArr[i13] + 1;
            return this;
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t x1(String str) {
        if (this.f17584s) {
            this.f17584s = false;
            return A0(str);
        }
        A1(str);
        int[] iArr = this.f17580o;
        int i10 = this.f17577d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t y1(boolean z10) {
        if (!this.f17584s) {
            A1(Boolean.valueOf(z10));
            int[] iArr = this.f17580o;
            int i10 = this.f17577d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + q());
    }
}
