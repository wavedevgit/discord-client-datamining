package com.squareup.moshi;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends t {

    /* renamed from: x  reason: collision with root package name */
    private static final String[] f17939x = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: u  reason: collision with root package name */
    private final BufferedSink f17940u;

    /* renamed from: v  reason: collision with root package name */
    private String f17941v = ":";

    /* renamed from: w  reason: collision with root package name */
    private String f17942w;

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f17939x[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f17939x;
        strArr[34] = "\\\"";
        strArr[92] = "\\\\";
        strArr[9] = "\\t";
        strArr[8] = "\\b";
        strArr[10] = "\\n";
        strArr[13] = "\\r";
        strArr[12] = "\\f";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(BufferedSink bufferedSink) {
        if (bufferedSink != null) {
            this.f17940u = bufferedSink;
            I0(6);
            return;
        }
        throw new NullPointerException("sink == null");
    }

    private void A1() {
        int E0 = E0();
        int i10 = 2;
        if (E0 != 1) {
            if (E0 != 2) {
                if (E0 != 4) {
                    if (E0 != 9) {
                        i10 = 7;
                        if (E0 != 6) {
                            if (E0 == 7) {
                                if (!this.f17968q) {
                                    throw new IllegalStateException("JSON must have only one top-level value.");
                                }
                            } else {
                                throw new IllegalStateException("Nesting problem.");
                            }
                        }
                    } else {
                        throw new IllegalStateException("Sink from valueSink() was not closed");
                    }
                } else {
                    this.f17940u.q0(this.f17941v);
                    i10 = 5;
                }
                J0(i10);
            }
            this.f17940u.writeByte(44);
        }
        T1();
        J0(i10);
    }

    private t D1(int i10, int i11, char c10) {
        int E0 = E0();
        if (E0 != i11 && E0 != i10) {
            throw new IllegalStateException("Nesting problem.");
        }
        if (this.f17942w == null) {
            int i12 = this.f17963d;
            int i13 = this.f17971t;
            if (i12 == (~i13)) {
                this.f17971t = ~i13;
                return this;
            }
            int i14 = i12 - 1;
            this.f17963d = i14;
            this.f17965i[i14] = null;
            int[] iArr = this.f17966o;
            int i15 = i12 - 2;
            iArr[i15] = iArr[i15] + 1;
            if (E0 == i11) {
                T1();
            }
            this.f17940u.writeByte(c10);
            return this;
        }
        throw new IllegalStateException("Dangling name: " + this.f17942w);
    }

    private void T1() {
        if (this.f17967p != null) {
            this.f17940u.writeByte(10);
            int i10 = this.f17963d;
            for (int i11 = 1; i11 < i10; i11++) {
                this.f17940u.q0(this.f17967p);
            }
        }
    }

    private t V1(int i10, int i11, char c10) {
        int i12 = this.f17963d;
        int i13 = this.f17971t;
        if (i12 == i13) {
            int[] iArr = this.f17964e;
            if (iArr[i12 - 1] == i10 || iArr[i12 - 1] == i11) {
                this.f17971t = ~i13;
                return this;
            }
        }
        A1();
        m();
        I0(i10);
        this.f17966o[this.f17963d - 1] = 0;
        this.f17940u.writeByte(c10);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:16:0x002b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void X1(okio.BufferedSink r7, java.lang.String r8) {
        /*
            java.lang.String[] r0 = com.squareup.moshi.p.f17939x
            r1 = 34
            r7.writeByte(r1)
            int r2 = r8.length()
            r3 = 0
            r4 = r3
        Ld:
            if (r3 >= r2) goto L36
            char r5 = r8.charAt(r3)
            r6 = 128(0x80, float:1.794E-43)
            if (r5 >= r6) goto L1c
            r5 = r0[r5]
            if (r5 != 0) goto L29
            goto L33
        L1c:
            r6 = 8232(0x2028, float:1.1535E-41)
            if (r5 != r6) goto L23
            java.lang.String r5 = "\\u2028"
            goto L29
        L23:
            r6 = 8233(0x2029, float:1.1537E-41)
            if (r5 != r6) goto L33
            java.lang.String r5 = "\\u2029"
        L29:
            if (r4 >= r3) goto L2e
            r7.z0(r8, r4, r3)
        L2e:
            r7.q0(r5)
            int r4 = r3 + 1
        L33:
            int r3 = r3 + 1
            goto Ld
        L36:
            if (r4 >= r2) goto L3b
            r7.z0(r8, r4, r2)
        L3b:
            r7.writeByte(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.p.X1(okio.BufferedSink, java.lang.String):void");
    }

    private void a2() {
        if (this.f17942w != null) {
            z1();
            X1(this.f17940u, this.f17942w);
            this.f17942w = null;
        }
    }

    private void z1() {
        int E0 = E0();
        if (E0 == 5) {
            this.f17940u.writeByte(44);
        } else if (E0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        T1();
        J0(4);
    }

    @Override // com.squareup.moshi.t
    public t J(String str) {
        if (str != null) {
            if (this.f17963d != 0) {
                int E0 = E0();
                if ((E0 == 3 || E0 == 5) && this.f17942w == null && !this.f17970s) {
                    this.f17942w = str;
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
    public void K0(String str) {
        String str2;
        super.K0(str);
        if (!str.isEmpty()) {
            str2 = ": ";
        } else {
            str2 = ":";
        }
        this.f17941v = str2;
    }

    @Override // com.squareup.moshi.t
    public t O0(double d10) {
        if (!this.f17968q && (Double.isNaN(d10) || Double.isInfinite(d10))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f17970s) {
            this.f17970s = false;
            return J(Double.toString(d10));
        } else {
            a2();
            A1();
            this.f17940u.q0(Double.toString(d10));
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t P() {
        if (!this.f17970s) {
            if (this.f17942w != null) {
                if (this.f17969r) {
                    a2();
                } else {
                    this.f17942w = null;
                    return this;
                }
            }
            A1();
            this.f17940u.q0("null");
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
        a2();
        A1();
        this.f17940u.q0(Long.toString(j10));
        int[] iArr = this.f17966o;
        int i10 = this.f17963d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Y0(Boolean bool) {
        if (bool == null) {
            return P();
        }
        return x1(bool.booleanValue());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f17970s) {
            a2();
            return V1(1, 2, '[');
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + t());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f17940u.close();
        int i10 = this.f17963d;
        if (i10 <= 1 && (i10 != 1 || this.f17964e[i10 - 1] == 7)) {
            this.f17963d = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t d1(Number number) {
        if (number == null) {
            return P();
        }
        String obj = number.toString();
        if (!this.f17968q && (obj.equals("-Infinity") || obj.equals("Infinity") || obj.equals("NaN"))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + number);
        } else if (this.f17970s) {
            this.f17970s = false;
            return J(obj);
        } else {
            a2();
            A1();
            this.f17940u.q0(obj);
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f17963d != 0) {
            this.f17940u.flush();
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t k() {
        if (!this.f17970s) {
            a2();
            return V1(3, 5, '{');
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t n() {
        return D1(1, 2, ']');
    }

    @Override // com.squareup.moshi.t
    public t s() {
        this.f17970s = false;
        return D1(3, 5, '}');
    }

    @Override // com.squareup.moshi.t
    public t w1(String str) {
        if (str == null) {
            return P();
        }
        if (this.f17970s) {
            this.f17970s = false;
            return J(str);
        }
        a2();
        A1();
        X1(this.f17940u, str);
        int[] iArr = this.f17966o;
        int i10 = this.f17963d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t x1(boolean z10) {
        String str;
        if (!this.f17970s) {
            a2();
            A1();
            BufferedSink bufferedSink = this.f17940u;
            if (z10) {
                str = "true";
            } else {
                str = "false";
            }
            bufferedSink.q0(str);
            int[] iArr = this.f17966o;
            int i10 = this.f17963d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + t());
    }
}
