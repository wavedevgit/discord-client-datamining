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
    private static final String[] f30780u = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: v  reason: collision with root package name */
    private static final String[] f30781v;

    /* renamed from: d  reason: collision with root package name */
    private final Writer f30782d;

    /* renamed from: e  reason: collision with root package name */
    private int[] f30783e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    private int f30784i = 0;

    /* renamed from: o  reason: collision with root package name */
    private String f30785o;

    /* renamed from: p  reason: collision with root package name */
    private String f30786p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f30787q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f30788r;

    /* renamed from: s  reason: collision with root package name */
    private String f30789s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f30790t;

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f30780u[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f30780u;
        strArr[34] = "\\\"";
        strArr[92] = "\\\\";
        strArr[9] = "\\t";
        strArr[8] = "\\b";
        strArr[10] = "\\n";
        strArr[13] = "\\r";
        strArr[12] = "\\f";
        String[] strArr2 = (String[]) strArr.clone();
        f30781v = strArr2;
        strArr2[60] = "\\u003c";
        strArr2[62] = "\\u003e";
        strArr2[38] = "\\u0026";
        strArr2[61] = "\\u003d";
        strArr2[39] = "\\u0027";
    }

    public c(Writer writer) {
        z0(6);
        this.f30786p = ":";
        this.f30790t = true;
        if (writer != null) {
            this.f30782d = writer;
            return;
        }
        throw new NullPointerException("out == null");
    }

    private void C0(int i10) {
        this.f30783e[this.f30784i - 1] = i10;
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x0034  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void F0(java.lang.String r9) {
        /*
            r8 = this;
            boolean r0 = r8.f30788r
            if (r0 == 0) goto L7
            java.lang.String[] r0 = io.sentry.vendor.gson.stream.c.f30781v
            goto L9
        L7:
            java.lang.String[] r0 = io.sentry.vendor.gson.stream.c.f30780u
        L9:
            java.io.Writer r1 = r8.f30782d
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
            java.io.Writer r6 = r8.f30782d
            int r7 = r3 - r4
            r6.write(r9, r4, r7)
        L3b:
            java.io.Writer r4 = r8.f30782d
            r4.write(r5)
            int r4 = r3 + 1
        L42:
            int r3 = r3 + 1
            goto L16
        L45:
            if (r4 >= r1) goto L4d
            java.io.Writer r0 = r8.f30782d
            int r1 = r1 - r4
            r0.write(r9, r4, r1)
        L4d:
            java.io.Writer r9 = r8.f30782d
            r9.write(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.c.F0(java.lang.String):void");
    }

    private void I() {
        if (this.f30785o != null) {
            this.f30782d.write(10);
            int i10 = this.f30784i;
            for (int i11 = 1; i11 < i10; i11++) {
                this.f30782d.write(this.f30785o);
            }
        }
    }

    private c Q(int i10, char c10) {
        h();
        z0(i10);
        this.f30782d.write(c10);
        return this;
    }

    private void V0() {
        if (this.f30789s != null) {
            a();
            F0(this.f30789s);
            this.f30789s = null;
        }
    }

    private int Z() {
        int i10 = this.f30784i;
        if (i10 != 0) {
            return this.f30783e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    private void a() {
        int Z = Z();
        if (Z == 5) {
            this.f30782d.write(44);
        } else if (Z != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        I();
        C0(4);
    }

    private void h() {
        int Z = Z();
        if (Z != 1) {
            if (Z != 2) {
                if (Z != 4) {
                    if (Z != 6) {
                        if (Z == 7) {
                            if (!this.f30787q) {
                                throw new IllegalStateException("JSON must have only one top-level value.");
                            }
                        } else {
                            throw new IllegalStateException("Nesting problem.");
                        }
                    }
                    C0(7);
                    return;
                }
                this.f30782d.append((CharSequence) this.f30786p);
                C0(5);
                return;
            }
            this.f30782d.append(',');
            I();
            return;
        }
        C0(2);
        I();
    }

    private c n(int i10, int i11, char c10) {
        int Z = Z();
        if (Z != i11 && Z != i10) {
            throw new IllegalStateException("Nesting problem.");
        }
        if (this.f30789s == null) {
            this.f30784i--;
            if (Z == i11) {
                I();
            }
            this.f30782d.write(c10);
            return this;
        }
        throw new IllegalStateException("Dangling name: " + this.f30789s);
    }

    private void z0(int i10) {
        int i11 = this.f30784i;
        int[] iArr = this.f30783e;
        if (i11 == iArr.length) {
            this.f30783e = Arrays.copyOf(iArr, i11 * 2);
        }
        int[] iArr2 = this.f30783e;
        int i12 = this.f30784i;
        this.f30784i = i12 + 1;
        iArr2[i12] = i10;
    }

    public final void A(boolean z10) {
        this.f30787q = z10;
    }

    public c C(String str) {
        if (str != null) {
            if (this.f30789s == null) {
                if (this.f30784i != 0) {
                    this.f30789s = str;
                    return this;
                }
                throw new IllegalStateException("JsonWriter is closed.");
            }
            throw new IllegalStateException();
        }
        throw new NullPointerException("name == null");
    }

    public final void E0(String str) {
        if (str != null && str.length() != 0) {
            this.f30785o = str;
            this.f30786p = ": ";
            return;
        }
        this.f30785o = null;
        this.f30786p = ":";
    }

    public c G0(double d10) {
        V0();
        if (!this.f30787q && (Double.isNaN(d10) || Double.isInfinite(d10))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + d10);
        }
        h();
        this.f30782d.append((CharSequence) Double.toString(d10));
        return this;
    }

    public c H0(long j10) {
        V0();
        h();
        this.f30782d.write(Long.toString(j10));
        return this;
    }

    public c J() {
        if (this.f30789s != null) {
            if (this.f30790t) {
                V0();
            } else {
                this.f30789s = null;
                return this;
            }
        }
        h();
        this.f30782d.write("null");
        return this;
    }

    public c L0(Boolean bool) {
        String str;
        if (bool == null) {
            return J();
        }
        V0();
        h();
        Writer writer = this.f30782d;
        if (bool.booleanValue()) {
            str = "true";
        } else {
            str = "false";
        }
        writer.write(str);
        return this;
    }

    public c N0(Number number) {
        if (number == null) {
            return J();
        }
        V0();
        String obj = number.toString();
        if (!this.f30787q && (obj.equals("-Infinity") || obj.equals("Infinity") || obj.equals("NaN"))) {
            throw new IllegalArgumentException("Numeric values must be finite, but was " + number);
        }
        h();
        this.f30782d.append((CharSequence) obj);
        return this;
    }

    public c O0(String str) {
        if (str == null) {
            return J();
        }
        V0();
        h();
        F0(str);
        return this;
    }

    public c S0(boolean z10) {
        String str;
        V0();
        h();
        Writer writer = this.f30782d;
        if (z10) {
            str = "true";
        } else {
            str = "false";
        }
        writer.write(str);
        return this;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f30782d.close();
        int i10 = this.f30784i;
        if (i10 <= 1 && (i10 != 1 || this.f30783e[i10 - 1] == 7)) {
            this.f30784i = 0;
            return;
        }
        throw new IOException("Incomplete document");
    }

    @Override // java.io.Flushable
    public void flush() {
        if (this.f30784i != 0) {
            this.f30782d.flush();
            return;
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public c i() {
        V0();
        return Q(1, '[');
    }

    public c m() {
        V0();
        return Q(3, '{');
    }

    public c p() {
        return n(1, 2, ']');
    }

    public c s() {
        return n(3, 5, '}');
    }

    public String y() {
        return this.f30785o;
    }

    public c z(String str) {
        if (str == null) {
            return J();
        }
        V0();
        h();
        this.f30782d.append((CharSequence) str);
        return this;
    }
}
