package io.sentry.vendor.gson.stream;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Closeable;
import java.io.Flushable;
import java.io.IOException;
import java.io.Writer;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Closeable, Flushable {

    /* renamed from: u  reason: collision with root package name */
    private static final String[] f30899u = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: v  reason: collision with root package name */
    private static final String[] f30900v;

    /* renamed from: d  reason: collision with root package name */
    private final Writer f30901d;

    /* renamed from: e  reason: collision with root package name */
    private int[] f30902e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    private int f30903i = 0;

    /* renamed from: o  reason: collision with root package name */
    private String f30904o;

    /* renamed from: p  reason: collision with root package name */
    private String f30905p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f30906q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f30907r;

    /* renamed from: s  reason: collision with root package name */
    private String f30908s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f30909t;

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f30899u[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f30899u;
        strArr[34] = "\\\"";
        strArr[92] = "\\\\";
        strArr[9] = "\\t";
        strArr[8] = "\\b";
        strArr[10] = "\\n";
        strArr[13] = "\\r";
        strArr[12] = "\\f";
        String[] strArr2 = (String[]) strArr.clone();
        f30900v = strArr2;
        strArr2[60] = "\\u003c";
        strArr2[62] = "\\u003e";
        strArr2[38] = "\\u0026";
        strArr2[61] = "\\u003d";
        strArr2[39] = "\\u0027";
    }

    public c(Writer writer) {
        E0(6);
        this.f30905p = ":";
        this.f30909t = true;
        if (writer != null) {
            this.f30901d = writer;
            return;
        }
        throw new NullPointerException("out == null");
    }

    private c C0(int i10, char c10) {
        h();
        E0(i10);
        this.f30901d.write(c10);
        return this;
    }

    private int D0() {
        int i10 = this.f30903i;
        if (i10 != 0) {
            return this.f30902e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    private void E0(int i10) {
        int i11 = this.f30903i;
        int[] iArr = this.f30902e;
        if (i11 == iArr.length) {
            this.f30902e = Arrays.copyOf(iArr, i11 * 2);
        }
        int[] iArr2 = this.f30902e;
        int i12 = this.f30903i;
        this.f30903i = i12 + 1;
        iArr2[i12] = i10;
    }

    private void F0(int i10) {
        this.f30902e[this.f30903i - 1] = i10;
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x0034  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void J0(java.lang.String r9) {
        /*
            r8 = this;
            boolean r0 = r8.f30907r
            if (r0 == 0) goto L7
            java.lang.String[] r0 = io.sentry.vendor.gson.stream.c.f30900v
            goto L9
        L7:
            java.lang.String[] r0 = io.sentry.vendor.gson.stream.c.f30899u
        L9:
            java.io.Writer r1 = r8.f30901d
            r2 = 34
            r1.write(r2)
            int r1 = r9.length()
            r3 = 0
            r4 = r3
        L16:
            if (r3 >= r1) goto L45
            char r5 = r9.charAt(r3)
            r6 = 128(0x80, float:1.794E-43)
            if (r5 >= r6) goto L25
            r5 = r0[r5]
            if (r5 != 0) goto L32
            goto L42
        L25:
            r6 = 8232(0x2028, float:1.1535E-41)
            if (r5 != r6) goto L2c
            java.lang.String r5 = "\\u2028"
            goto L32
        L2c:
            r6 = 8233(0x2029, float:1.1537E-41)
            if (r5 != r6) goto L42
            java.lang.String r5 = "\\u2029"
        L32:
            if (r4 >= r3) goto L3b
            java.io.Writer r6 = r8.f30901d
            int r7 = r3 - r4
            r6.write(r9, r4, r7)
        L3b:
            java.io.Writer r4 = r8.f30901d
            r4.write(r5)
            int r4 = r3 + 1
        L42:
            int r3 = r3 + 1
            goto L16
        L45:
            if (r4 >= r1) goto L4d
            java.io.Writer r0 = r8.f30901d
            int r1 = r1 - r4
            r0.write(r9, r4, r1)
        L4d:
            java.io.Writer r9 = r8.f30901d
            r9.write(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.c.J0(java.lang.String):void");
    }

    private void V() {
        if (this.f30904o != null) {
            this.f30901d.write(10);
            int i10 = this.f30903i;
            for (int i11 = 1; i11 < i10; i11++) {
                this.f30901d.write(this.f30904o);
            }
        }
    }

    private void a() {
        int D0 = D0();
        if (D0 == 5) {
            this.f30901d.write(44);
        } else if (D0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        V();
        F0(4);
    }

    private void h() {
        int D0 = D0();
        if (D0 != 1) {
            if (D0 != 2) {
                if (D0 != 4) {
                    if (D0 != 6) {
                        if (D0 == 7) {
                            if (!this.f30906q) {
                                throw new IllegalStateException("JSON must have only one top-level value.");
                            }
                        } else {
                            throw new IllegalStateException("Nesting problem.");
                        }
                    }
                    F0(7);
                    return;
                }
                this.f30901d.append((CharSequence) this.f30905p);
                F0(5);
                return;
            }
            this.f30901d.append(',');
            V();
            return;
        }
        F0(2);
        V();
    }

    private c x(int i10, int i11, char c10) {
        int D0 = D0();
        if (D0 != i11 && D0 != i10) {
            throw new IllegalStateException("Nesting problem.");
        }
        if (this.f30908s == null) {
            this.f30903i--;
            if (D0 == i11) {
                V();
            }
            this.f30901d.write(c10);
            return this;
        }
        throw new IllegalStateException("Dangling name: " + this.f30908s);
    }

    private void x1() {
        if (this.f30908s != null) {
            a();
            J0(this.f30908s);
            this.f30908s = null;
        }
    }

    public c A0() {
        if (this.f30908s != null) {
            if (this.f30909t) {
                x1();
            } else {
                this.f30908s = null;
                return this;
            }
        }
        h();
        this.f30901d.write("null");
        return this;
    }

    public c B() {
        return x(1, 2, ']');
    }

    public c E() {
        return x(3, 5, '}');
    }

    public String F() {
        return this.f30904o;
    }

    public final void I0(String str) {
        if (str != null && str.length() != 0) {
            this.f30904o = str;
            this.f30905p = ": ";
            return;
        }
        this.f30904o = null;
        this.f30905p = ":";
    }

    public c L(String str) {
        if (str == null) {
            return A0();
        }
        x1();
        h();
        this.f30901d.append((CharSequence) str);
        return this;
    }

    public c M0(double d10) {
        x1();
        if (!this.f30906q && (Double.isNaN(d10) || Double.isInfinite(d10))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        }
        h();
        this.f30901d.append((CharSequence) Double.toString(d10));
        return this;
    }

    public c N(String str) {
        if (str != null) {
            if (this.f30908s == null) {
                if (this.f30903i != 0) {
                    this.f30908s = str;
                    return this;
                }
                throw new IllegalStateException("JsonWriter is closed.");
            }
            throw new IllegalStateException();
        }
        throw new NullPointerException("name == null");
    }

    public c R0(long j10) {
        x1();
        h();
        this.f30901d.write(Long.toString(j10));
        return this;
    }

    public c U0(Boolean bool) {
        String str;
        if (bool == null) {
            return A0();
        }
        x1();
        h();
        Writer writer = this.f30901d;
        if (bool.booleanValue()) {
            str = "true";
        } else {
            str = "false";
        }
        writer.write(str);
        return this;
    }

    public c X0(Number number) {
        if (number == null) {
            return A0();
        }
        x1();
        String obj = number.toString();
        if (!this.f30906q && (obj.equals("-Infinity") || obj.equals("Infinity") || obj.equals("NaN"))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + number);
        }
        h();
        this.f30901d.append((CharSequence) obj);
        return this;
    }

    public c Y0(String str) {
        if (str == null) {
            return A0();
        }
        x1();
        h();
        J0(str);
        return this;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f30901d.close();
        int i10 = this.f30903i;
        if (i10 <= 1 && (i10 != 1 || this.f30902e[i10 - 1] == 7)) {
            this.f30903i = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    public c d1(boolean z10) {
        String str;
        x1();
        h();
        Writer writer = this.f30901d;
        if (z10) {
            str = "true";
        } else {
            str = "false";
        }
        writer.write(str);
        return this;
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f30903i != 0) {
            this.f30901d.flush();
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public c l() {
        x1();
        return C0(1, '[');
    }

    public c n() {
        x1();
        return C0(3, '{');
    }

    public final void v(boolean z10) {
        this.f30906q = z10;
    }
}
