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
    private static final String[] f29076u = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: v  reason: collision with root package name */
    private static final String[] f29077v;

    /* renamed from: d  reason: collision with root package name */
    private final Writer f29078d;

    /* renamed from: e  reason: collision with root package name */
    private int[] f29079e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    private int f29080i = 0;

    /* renamed from: o  reason: collision with root package name */
    private String f29081o;

    /* renamed from: p  reason: collision with root package name */
    private String f29082p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f29083q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f29084r;

    /* renamed from: s  reason: collision with root package name */
    private String f29085s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f29086t;

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f29076u[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f29076u;
        strArr[34] = "\\\"";
        strArr[92] = "\\\\";
        strArr[9] = "\\t";
        strArr[8] = "\\b";
        strArr[10] = "\\n";
        strArr[13] = "\\r";
        strArr[12] = "\\f";
        String[] strArr2 = (String[]) strArr.clone();
        f29077v = strArr2;
        strArr2[60] = "\\u003c";
        strArr2[62] = "\\u003e";
        strArr2[38] = "\\u0026";
        strArr2[61] = "\\u003d";
        strArr2[39] = "\\u0027";
    }

    public c(Writer writer) {
        E0(6);
        this.f29082p = ":";
        this.f29086t = true;
        if (writer != null) {
            this.f29078d = writer;
            return;
        }
        throw new NullPointerException("out == null");
    }

    private void E0(int i10) {
        int i11 = this.f29080i;
        int[] iArr = this.f29079e;
        if (i11 == iArr.length) {
            this.f29079e = Arrays.copyOf(iArr, i11 * 2);
        }
        int[] iArr2 = this.f29079e;
        int i12 = this.f29080i;
        this.f29080i = i12 + 1;
        iArr2[i12] = i10;
    }

    private void F0(int i10) {
        this.f29079e[this.f29080i - 1] = i10;
    }

    private void I() {
        if (this.f29081o != null) {
            this.f29078d.write(10);
            int i10 = this.f29080i;
            for (int i11 = 1; i11 < i10; i11++) {
                this.f29078d.write(this.f29081o);
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x0034  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void J0(java.lang.String r9) {
        /*
            r8 = this;
            boolean r0 = r8.f29084r
            if (r0 == 0) goto L7
            java.lang.String[] r0 = io.sentry.vendor.gson.stream.c.f29077v
            goto L9
        L7:
            java.lang.String[] r0 = io.sentry.vendor.gson.stream.c.f29076u
        L9:
            java.io.Writer r1 = r8.f29078d
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
            java.io.Writer r6 = r8.f29078d
            int r7 = r3 - r4
            r6.write(r9, r4, r7)
        L3b:
            java.io.Writer r4 = r8.f29078d
            r4.write(r5)
            int r4 = r3 + 1
        L42:
            int r3 = r3 + 1
            goto L16
        L45:
            if (r4 >= r1) goto L4d
            java.io.Writer r0 = r8.f29078d
            int r1 = r1 - r4
            r0.write(r9, r4, r1)
        L4d:
            java.io.Writer r9 = r8.f29078d
            r9.write(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.c.J0(java.lang.String):void");
    }

    private c P(int i10, char c10) {
        g();
        E0(i10);
        this.f29078d.write(c10);
        return this;
    }

    private int Y() {
        int i10 = this.f29080i;
        if (i10 != 0) {
            return this.f29079e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    private void a() {
        int Y = Y();
        if (Y == 5) {
            this.f29078d.write(44);
        } else if (Y != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        I();
        F0(4);
    }

    private void g() {
        int Y = Y();
        if (Y != 1) {
            if (Y != 2) {
                if (Y != 4) {
                    if (Y != 6) {
                        if (Y == 7) {
                            if (!this.f29083q) {
                                throw new IllegalStateException("JSON must have only one top-level value.");
                            }
                        } else {
                            throw new IllegalStateException("Nesting problem.");
                        }
                    }
                    F0(7);
                    return;
                }
                this.f29078d.append((CharSequence) this.f29082p);
                F0(5);
                return;
            }
            this.f29078d.append(',');
            I();
            return;
        }
        F0(2);
        I();
    }

    private c n(int i10, int i11, char c10) {
        int Y = Y();
        if (Y != i11 && Y != i10) {
            throw new IllegalStateException("Nesting problem.");
        }
        if (this.f29085s == null) {
            this.f29080i--;
            if (Y == i11) {
                I();
            }
            this.f29078d.write(c10);
            return this;
        }
        throw new IllegalStateException("Dangling name: " + this.f29085s);
    }

    private void w1() {
        if (this.f29085s != null) {
            a();
            J0(this.f29085s);
            this.f29085s = null;
        }
    }

    public final void A(boolean z10) {
        this.f29083q = z10;
    }

    public c C(String str) {
        if (str != null) {
            if (this.f29085s == null) {
                if (this.f29080i != 0) {
                    this.f29085s = str;
                    return this;
                }
                throw new IllegalStateException("JsonWriter is closed.");
            }
            throw new IllegalStateException();
        }
        throw new NullPointerException("name == null");
    }

    public final void I0(String str) {
        if (str != null && str.length() != 0) {
            this.f29081o = str;
            this.f29082p = ": ";
            return;
        }
        this.f29081o = null;
        this.f29082p = ":";
    }

    public c J() {
        if (this.f29085s != null) {
            if (this.f29086t) {
                w1();
            } else {
                this.f29085s = null;
                return this;
            }
        }
        g();
        this.f29078d.write("null");
        return this;
    }

    public c K0(double d10) {
        w1();
        if (!this.f29083q && (Double.isNaN(d10) || Double.isInfinite(d10))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        }
        g();
        this.f29078d.append((CharSequence) Double.toString(d10));
        return this;
    }

    public c L0(long j10) {
        w1();
        g();
        this.f29078d.write(Long.toString(j10));
        return this;
    }

    public c O0(Boolean bool) {
        String str;
        if (bool == null) {
            return J();
        }
        w1();
        g();
        Writer writer = this.f29078d;
        if (bool.booleanValue()) {
            str = "true";
        } else {
            str = "false";
        }
        writer.write(str);
        return this;
    }

    public c V0(Number number) {
        if (number == null) {
            return J();
        }
        w1();
        String obj = number.toString();
        if (!this.f29083q && (obj.equals("-Infinity") || obj.equals("Infinity") || obj.equals("NaN"))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + number);
        }
        g();
        this.f29078d.append((CharSequence) obj);
        return this;
    }

    public c Y0(String str) {
        if (str == null) {
            return J();
        }
        w1();
        g();
        J0(str);
        return this;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29078d.close();
        int i10 = this.f29080i;
        if (i10 <= 1 && (i10 != 1 || this.f29079e[i10 - 1] == 7)) {
            this.f29080i = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    public c d1(boolean z10) {
        String str;
        w1();
        g();
        Writer writer = this.f29078d;
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
        if (this.f29080i != 0) {
            this.f29078d.flush();
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public c k() {
        w1();
        return P(1, '[');
    }

    public c m() {
        w1();
        return P(3, '{');
    }

    public c p() {
        return n(1, 2, ']');
    }

    public c s() {
        return n(3, 5, '}');
    }

    public String y() {
        return this.f29081o;
    }

    public c z(String str) {
        if (str == null) {
            return J();
        }
        w1();
        g();
        this.f29078d.append((CharSequence) str);
        return this;
    }
}
