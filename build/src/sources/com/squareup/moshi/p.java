package com.squareup.moshi;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class p extends t {

    /* renamed from: x  reason: collision with root package name */
    private static final String[] f18828x = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: u  reason: collision with root package name */
    private final BufferedSink f18829u;

    /* renamed from: v  reason: collision with root package name */
    private String f18830v = ":";

    /* renamed from: w  reason: collision with root package name */
    private String f18831w;

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f18828x[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f18828x;
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
            this.f18829u = bufferedSink;
            E0(6);
            return;
        }
        throw new NullPointerException("sink == null");
    }

    private void B1() {
        if (this.f18831w != null) {
            a1();
            z1(this.f18829u, this.f18831w);
            this.f18831w = null;
        }
    }

    private void a1() {
        int z02 = z0();
        if (z02 == 5) {
            this.f18829u.writeByte(44);
        } else if (z02 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        w1();
        F0(4);
    }

    private void b1() {
        int z02 = z0();
        int i10 = 2;
        if (z02 != 1) {
            if (z02 != 2) {
                if (z02 != 4) {
                    if (z02 != 9) {
                        i10 = 7;
                        if (z02 != 6) {
                            if (z02 == 7) {
                                if (!this.f18857q) {
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
                    this.f18829u.q0(this.f18830v);
                    i10 = 5;
                }
                F0(i10);
            }
            this.f18829u.writeByte(44);
        }
        w1();
        F0(i10);
    }

    private t f1(int i10, int i11, char c10) {
        int z02 = z0();
        if (z02 != i11 && z02 != i10) {
            throw new IllegalStateException("Nesting problem.");
        }
        if (this.f18831w == null) {
            int i12 = this.f18852d;
            int i13 = this.f18860t;
            if (i12 == (~i13)) {
                this.f18860t = ~i13;
                return this;
            }
            int i14 = i12 - 1;
            this.f18852d = i14;
            this.f18854i[i14] = null;
            int[] iArr = this.f18855o;
            int i15 = i12 - 2;
            iArr[i15] = iArr[i15] + 1;
            if (z02 == i11) {
                w1();
            }
            this.f18829u.writeByte(c10);
            return this;
        }
        throw new IllegalStateException("Dangling name: " + this.f18831w);
    }

    private void w1() {
        if (this.f18856p != null) {
            this.f18829u.writeByte(10);
            int i10 = this.f18852d;
            for (int i11 = 1; i11 < i10; i11++) {
                this.f18829u.q0(this.f18856p);
            }
        }
    }

    private t x1(int i10, int i11, char c10) {
        int i12 = this.f18852d;
        int i13 = this.f18860t;
        if (i12 == i13) {
            int[] iArr = this.f18853e;
            if (iArr[i12 - 1] == i10 || iArr[i12 - 1] == i11) {
                this.f18860t = ~i13;
                return this;
            }
        }
        b1();
        m();
        E0(i10);
        this.f18855o[this.f18852d - 1] = 0;
        this.f18829u.writeByte(c10);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:16:0x002b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void z1(okio.BufferedSink r7, java.lang.String r8) {
        /*
            java.lang.String[] r0 = com.squareup.moshi.p.f18828x
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
            r7.x0(r8, r4, r3)
        L2e:
            r7.q0(r5)
            int r4 = r3 + 1
        L33:
            int r3 = r3 + 1
            goto Ld
        L36:
            if (r4 >= r2) goto L3b
            r7.x0(r8, r4, r2)
        L3b:
            r7.writeByte(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.p.z1(okio.BufferedSink, java.lang.String):void");
    }

    @Override // com.squareup.moshi.t
    public void G0(String str) {
        String str2;
        super.G0(str);
        if (!str.isEmpty()) {
            str2 = ": ";
        } else {
            str2 = ":";
        }
        this.f18830v = str2;
    }

    @Override // com.squareup.moshi.t
    public t J(String str) {
        if (str != null) {
            if (this.f18852d != 0) {
                int z02 = z0();
                if ((z02 == 3 || z02 == 5) && this.f18831w == null && !this.f18859s) {
                    this.f18831w = str;
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
        if (!this.f18857q && (Double.isNaN(d10) || Double.isInfinite(d10))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        } else if (this.f18859s) {
            this.f18859s = false;
            return J(Double.toString(d10));
        } else {
            B1();
            b1();
            this.f18829u.q0(Double.toString(d10));
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
        B1();
        b1();
        this.f18829u.q0(Long.toString(j10));
        int[] iArr = this.f18855o;
        int i10 = this.f18852d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t O0(Boolean bool) {
        if (bool == null) {
            return Q();
        }
        return Z0(bool.booleanValue());
    }

    @Override // com.squareup.moshi.t
    public t Q() {
        if (!this.f18859s) {
            if (this.f18831w != null) {
                if (this.f18858r) {
                    B1();
                } else {
                    this.f18831w = null;
                    return this;
                }
            }
            b1();
            this.f18829u.q0("null");
            int[] iArr = this.f18855o;
            int i10 = this.f18852d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
        throw new IllegalStateException("null cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t S0(Number number) {
        if (number == null) {
            return Q();
        }
        String obj = number.toString();
        if (!this.f18857q && (obj.equals("-Infinity") || obj.equals("Infinity") || obj.equals("NaN"))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + number);
        } else if (this.f18859s) {
            this.f18859s = false;
            return J(obj);
        } else {
            B1();
            b1();
            this.f18829u.q0(obj);
            int[] iArr = this.f18855o;
            int i10 = this.f18852d - 1;
            iArr[i10] = iArr[i10] + 1;
            return this;
        }
    }

    @Override // com.squareup.moshi.t
    public t V0(String str) {
        if (str == null) {
            return Q();
        }
        if (this.f18859s) {
            this.f18859s = false;
            return J(str);
        }
        B1();
        b1();
        z1(this.f18829u, str);
        int[] iArr = this.f18855o;
        int i10 = this.f18852d - 1;
        iArr[i10] = iArr[i10] + 1;
        return this;
    }

    @Override // com.squareup.moshi.t
    public t Z0(boolean z10) {
        String str;
        if (!this.f18859s) {
            B1();
            b1();
            BufferedSink bufferedSink = this.f18829u;
            if (z10) {
                str = "true";
            } else {
                str = "false";
            }
            bufferedSink.q0(str);
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
            B1();
            return x1(1, 2, '[');
        }
        throw new IllegalStateException("Array cannot be used as a map key in JSON at path " + t());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f18829u.close();
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
            this.f18829u.flush();
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    @Override // com.squareup.moshi.t
    public t i() {
        if (!this.f18859s) {
            B1();
            return x1(3, 5, '{');
        }
        throw new IllegalStateException("Object cannot be used as a map key in JSON at path " + t());
    }

    @Override // com.squareup.moshi.t
    public t n() {
        return f1(1, 2, ']');
    }

    @Override // com.squareup.moshi.t
    public t s() {
        this.f18859s = false;
        return f1(3, 5, '}');
    }
}
