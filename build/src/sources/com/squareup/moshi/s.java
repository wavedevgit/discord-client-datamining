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
    Object[] f17961u = new Object[32];

    /* renamed from: v  reason: collision with root package name */
    private String f17962v;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s() {
        I0(6);
    }

    private s z1(Object obj) {
        String str;
        Object put;
        int E0 = E0();
        int i10 = this.f17963d;
        if (i10 == 1) {
            if (E0 == 6) {
                this.f17964e[i10 - 1] = 7;
                this.f17961u[i10 - 1] = obj;
                return this;
            }
            throw new IllegalStateException("JSON must have only one top-level value.");
        } else if (E0 == 3 && (str = this.f17962v) != null) {
            if ((obj == null && !this.f17969r) || (put = ((Map) this.f17961u[i10 - 1]).put(str, obj)) == null) {
                this.f17962v = null;
                return this;
            }
            throw new IllegalArgumentException("Map key '" + this.f17962v + "' has multiple values at path " + t() + ": " + put + " and " + obj);
        } else if (E0 == 1) {
            ((List) this.f17961u[i10 - 1]).add(obj);
            return this;
        } else if (E0 == 9) {
            throw new IllegalStateException("Sink from valueSink() was not closed");
        } else {
            throw new IllegalStateException("Nesting problem.");
        }
    }

    public Object A1() {
        int i10 = this.f17963d;
        if (i10 <= 1 && (i10 != 1 || this.f17964e[i10 - 1] == 7)) {
            return this.f17961u[0];
        }
        throw new IllegalStateException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t J(String str) {
        if (str != null) {
            if (this.f17963d != 0) {
                if (E0() == 3 && this.f17962v == null && !this.f17970s) {
                    this.f17962v = str;
                    this.f17965i[this.f17963d - 1] = str;
                    return this;
                }
                throw new IllegalStateException("Nesting problem.");
            }
            throw new IllegalStateException("JsonWriter is closed.");
        }
        throw new NullPointerException("name == null");
    }

    @Override // com.squareup.moshi.t
    public t O0(double d10) {
        if (!this.f17968q && (Double.isNaN(d10) || d10 == Double.NEGATIVE_INFINITY || d10 == Double.POSITIVE_INFINITY)) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f17970s) {
            this.f17970s = false;
            return J(Double.toString(d10));
        } else {
            z1(Double.valueOf(d10));
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t P() {
        if (!this.f17970s) {
            z1(null);
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t V0(long j10) {
        if (this.f17970s) {
            this.f17970s = false;
            return J(Long.toString(j10));
        }
        z1(Long.valueOf(j10));
        int[] iArr = this.f17966o;
        int i10 = this.f17963d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Y0(Boolean bool) {
        if (!this.f17970s) {
            z1(bool);
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f17970s) {
            int i10 = this.f17963d;
            int i11 = this.f17971t;
            if (i10 == i11 && this.f17964e[i10 - 1] == 1) {
                this.f17971t = ~i11;
                return this;
            }
            m();
            ArrayList arrayList = new ArrayList();
            z1(arrayList);
            Object[] objArr = this.f17961u;
            int i12 = this.f17963d;
            objArr[i12] = arrayList;
            this.f17966o[i12] = 0;
            I0(1);
            return this;
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + t());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        int i10 = this.f17963d;
        if (i10 <= 1 && (i10 != 1 || this.f17964e[i10 - 1] == 7)) {
            this.f17963d = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t d1(Number number) {
        BigDecimal bigDecimal;
        if (!(number instanceof Byte) && !(number instanceof Short) && !(number instanceof Integer) && !(number instanceof Long)) {
            if (!(number instanceof Float) && !(number instanceof Double)) {
                if (number == null) {
                    return P();
                }
                if (number instanceof BigDecimal) {
                    bigDecimal = (BigDecimal) number;
                } else {
                    bigDecimal = new BigDecimal(number.toString());
                }
                if (this.f17970s) {
                    this.f17970s = false;
                    return J(bigDecimal.toString());
                }
                z1(bigDecimal);
                int[] iArr = this.f17966o;
                int i10 = this.f17963d - 1;
                iArr[i10] = iArr[i10] + 1;
                return this;
            }
            return O0(number.doubleValue());
        }
        return V0(number.longValue());
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f17963d != 0) {
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t k() {
        if (!this.f17970s) {
            int i10 = this.f17963d;
            int i11 = this.f17971t;
            if (i10 == i11 && this.f17964e[i10 - 1] == 3) {
                this.f17971t = ~i11;
                return this;
            }
            m();
            u uVar = new u();
            z1(uVar);
            this.f17961u[this.f17963d] = uVar;
            I0(3);
            return this;
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t n() {
        if (E0() == 1) {
            int i10 = this.f17963d;
            int i11 = this.f17971t;
            if (i10 == (~i11)) {
                this.f17971t = ~i11;
                return this;
            }
            int i12 = i10 - 1;
            this.f17963d = i12;
            this.f17961u[i12] = null;
            int[] iArr = this.f17966o;
            int i13 = i10 - 2;
            iArr[i13] = iArr[i13] + 1;
            return this;
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t s() {
        if (E0() == 3) {
            if (this.f17962v == null) {
                int i10 = this.f17963d;
                int i11 = this.f17971t;
                if (i10 == (~i11)) {
                    this.f17971t = ~i11;
                    return this;
                }
                this.f17970s = false;
                int i12 = i10 - 1;
                this.f17963d = i12;
                this.f17961u[i12] = null;
                this.f17965i[i12] = null;
                int[] iArr = this.f17966o;
                int i13 = i10 - 2;
                iArr[i13] = iArr[i13] + 1;
                return this;
            }
            throw new IllegalStateException("Dangling name: " + this.f17962v);
        }
        throw new IllegalStateException("Nesting problem.");
    }

    @Override // com.squareup.moshi.t
    public t w1(String str) {
        if (this.f17970s) {
            this.f17970s = false;
            return J(str);
        }
        z1(str);
        int[] iArr = this.f17966o;
        int i10 = this.f17963d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t x1(boolean z10) {
        if (!this.f17970s) {
            z1(Boolean.valueOf(z10));
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }
}
