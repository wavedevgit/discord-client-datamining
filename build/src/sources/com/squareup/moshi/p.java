package com.squareup.moshi;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends t {

    /* renamed from: x  reason: collision with root package name */
    private static final String[] f18938x = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: u  reason: collision with root package name */
    private final BufferedSink f18939u;

    /* renamed from: v  reason: collision with root package name */
    private String f18940v = ":";

    /* renamed from: w  reason: collision with root package name */
    private String f18941w;

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f18938x[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f18938x;
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
            this.f18939u = bufferedSink;
            I0(6);
            return;
        }
        throw new NullPointerException("sink == null");
    }

    private void A1() {
        int E0 = E0();
        if (E0 == 5) {
            this.f18939u.writeByte(44);
        } else if (E0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        U1();
        J0(4);
    }

    private void B1() {
        int E0 = E0();
        int i10 = 2;
        if (E0 != 1) {
            if (E0 != 2) {
                if (E0 != 4) {
                    if (E0 != 9) {
                        i10 = 7;
                        if (E0 != 6) {
                            if (E0 == 7) {
                                if (!this.f18967q) {
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
                    this.f18939u.n0(this.f18940v);
                    i10 = 5;
                }
                J0(i10);
            }
            this.f18939u.writeByte(44);
        }
        U1();
        J0(i10);
    }

    private t E1(int i10, int i11, char c10) {
        int E0 = E0();
        if (E0 != i11 && E0 != i10) {
            throw new IllegalStateException("Nesting problem.");
        }
        if (this.f18941w == null) {
            int i12 = this.f18962d;
            int i13 = this.f18970t;
            if (i12 == (~i13)) {
                this.f18970t = ~i13;
                return this;
            }
            int i14 = i12 - 1;
            this.f18962d = i14;
            this.f18964i[i14] = null;
            int[] iArr = this.f18965o;
            int i15 = i12 - 2;
            iArr[i15] = iArr[i15] + 1;
            if (E0 == i11) {
                U1();
            }
            this.f18939u.writeByte(c10);
            return this;
        }
        throw new IllegalStateException("Dangling name: " + this.f18941w);
    }

    private void U1() {
        if (this.f18966p != null) {
            this.f18939u.writeByte(10);
            int i10 = this.f18962d;
            for (int i11 = 1; i11 < i10; i11++) {
                this.f18939u.n0(this.f18966p);
            }
        }
    }

    private t W1(int i10, int i11, char c10) {
        int i12 = this.f18962d;
        int i13 = this.f18970t;
        if (i12 == i13) {
            int[] iArr = this.f18963e;
            if (iArr[i12 - 1] == i10 || iArr[i12 - 1] == i11) {
                this.f18970t = ~i13;
                return this;
            }
        }
        B1();
        n();
        I0(i10);
        this.f18965o[this.f18962d - 1] = 0;
        this.f18939u.writeByte(c10);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:16:0x002b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void Y1(okio.BufferedSink r7, java.lang.String r8) {
        /*
            java.lang.String[] r0 = com.squareup.moshi.p.f18938x
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
            r7.w0(r8, r4, r3)
        L2e:
            r7.n0(r5)
            int r4 = r3 + 1
        L33:
            int r3 = r3 + 1
            goto Ld
        L36:
            if (r4 >= r2) goto L3b
            r7.w0(r8, r4, r2)
        L3b:
            r7.writeByte(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.p.Y1(okio.BufferedSink, java.lang.String):void");
    }

    private void b2() {
        if (this.f18941w != null) {
            A1();
            Y1(this.f18939u, this.f18941w);
            this.f18941w = null;
        }
    }

    @Override // com.squareup.moshi.t
    public t A0(String str) {
        if (str != null) {
            if (this.f18962d != 0) {
                int E0 = E0();
                if ((E0 == 3 || E0 == 5) && this.f18941w == null && !this.f18969s) {
                    this.f18941w = str;
                    this.f18964i[this.f18962d - 1] = str;
                    return this;
                }
                throw new IllegalStateException("Nesting problem.");
            }
            throw new IllegalStateException("JsonWriter is closed.");
        }
        throw new NullPointerException("name == null");
    }

    @Override // com.squareup.moshi.t
    public t C0() {
        if (!this.f18969s) {
            if (this.f18941w != null) {
                if (this.f18968r) {
                    b2();
                } else {
                    this.f18941w = null;
                    return this;
                }
            }
            B1();
            this.f18939u.n0("null");
            int[] iArr = this.f18965o;
            int i10 = this.f18962d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t E() {
        this.f18969s = false;
        return E1(3, 5, '}');
    }

    @Override // com.squareup.moshi.t
    public void M0(String str) {
        String str2;
        super.M0(str);
        if (!str.isEmpty()) {
            str2 = ": ";
        } else {
            str2 = ":";
        }
        this.f18940v = str2;
    }

    @Override // com.squareup.moshi.t
    public t U0(double d10) {
        if (!this.f18967q && (Double.isNaN(d10) || Double.isInfinite(d10))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f18969s) {
            this.f18969s = false;
            return A0(Double.toString(d10));
        } else {
            b2();
            B1();
            this.f18939u.n0(Double.toString(d10));
            int[] iArr = this.f18965o;
            int i10 = this.f18962d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t X0(long j10) {
        if (this.f18969s) {
            this.f18969s = false;
            return A0(Long.toString(j10));
        }
        b2();
        B1();
        this.f18939u.n0(Long.toString(j10));
        int[] iArr = this.f18965o;
        int i10 = this.f18962d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Y0(Boolean bool) {
        if (bool == null) {
            return C0();
        }
        return y1(bool.booleanValue());
    }

    @Override // com.squareup.moshi.t
    public t a() {
        if (!this.f18969s) {
            b2();
            return W1(1, 2, '[');
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f18939u.close();
        int i10 = this.f18962d;
        if (i10 <= 1 && (i10 != 1 || this.f18963e[i10 - 1] == 7)) {
            this.f18962d = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // com.squareup.moshi.t
    public t d1(Number number) {
        if (number == null) {
            return C0();
        }
        String obj = number.toString();
        if (!this.f18967q && (obj.equals("-Infinity") || obj.equals("Infinity") || obj.equals("NaN"))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + number);
        } else if (this.f18969s) {
            this.f18969s = false;
            return A0(obj);
        } else {
            b2();
            B1();
            this.f18939u.n0(obj);
            int[] iArr = this.f18965o;
            int i10 = this.f18962d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f18962d != 0) {
            this.f18939u.flush();
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t l() {
        if (!this.f18969s) {
            b2();
            return W1(3, 5, '{');
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + q());
    }

    @Override // com.squareup.moshi.t
    public t x() {
        return E1(1, 2, ']');
    }

    @Override // com.squareup.moshi.t
    public t x1(String str) {
        if (str == null) {
            return C0();
        }
        if (this.f18969s) {
            this.f18969s = false;
            return A0(str);
        }
        b2();
        B1();
        Y1(this.f18939u, str);
        int[] iArr = this.f18965o;
        int i10 = this.f18962d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t y1(boolean z10) {
        String str;
        if (!this.f18969s) {
            b2();
            B1();
            BufferedSink bufferedSink = this.f18939u;
            if (z10) {
                str = "true";
            } else {
                str = "false";
            }
            bufferedSink.n0(str);
            int[] iArr = this.f18965o;
            int i10 = this.f18962d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("Boolean cannot be used as a map key in JSON at path " + q());
    }
}
