package ct;

import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public int f21321a;

    /* renamed from: c  reason: collision with root package name */
    private String f21323c;

    /* renamed from: b  reason: collision with root package name */
    public final j0 f21322b = new j0();

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f21324d = new StringBuilder();

    private final int B(CharSequence charSequence, int i10) {
        char charAt = charSequence.charAt(i10);
        if ('0' <= charAt && charAt < ':') {
            return charAt - '0';
        }
        if ('a' <= charAt && charAt < 'g') {
            return charAt - 'W';
        }
        if ('A' <= charAt && charAt < 'G') {
            return charAt - '7';
        }
        x(this, "Invalid toHexChar char '" + charAt + "' in unicode escape", 0, null, 6, null);
        throw new ir.h();
    }

    private final String M() {
        String str = this.f21323c;
        Intrinsics.checkNotNull(str);
        this.f21323c = null;
        return str;
    }

    public static /* synthetic */ boolean P(a aVar, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 1) != 0) {
                z10 = true;
            }
            return aVar.O(z10);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: tryConsumeNull");
    }

    private final boolean R() {
        if (D().charAt(this.f21321a - 1) != '\"') {
            return true;
        }
        return false;
    }

    private final int a(int i10) {
        int I = I(i10);
        if (I != -1) {
            int i11 = I + 1;
            char charAt = D().charAt(I);
            if (charAt == 'u') {
                return c(D(), i11);
            }
            char b10 = b.b(charAt);
            if (b10 != 0) {
                this.f21324d.append(b10);
                return i11;
            }
            x(this, "Invalid escaped char '" + charAt + '\'', 0, null, 6, null);
            throw new ir.h();
        }
        x(this, "Expected escape sequence to continue, got EOF", 0, null, 6, null);
        throw new ir.h();
    }

    private final int b(int i10, int i11) {
        d(i10, i11);
        return a(i11 + 1);
    }

    private final int c(CharSequence charSequence, int i10) {
        int i11 = i10 + 4;
        if (i11 >= charSequence.length()) {
            this.f21321a = i10;
            u();
            if (this.f21321a + 4 < charSequence.length()) {
                return c(charSequence, this.f21321a);
            }
            x(this, "Unexpected EOF during unicode escape", 0, null, 6, null);
            throw new ir.h();
        }
        this.f21324d.append((char) ((B(charSequence, i10) << 12) + (B(charSequence, i10 + 1) << 8) + (B(charSequence, i10 + 2) << 4) + B(charSequence, i10 + 3)));
        return i11;
    }

    private final boolean f(int i10) {
        int I = I(i10);
        if (I < D().length() && I != -1) {
            int i11 = I + 1;
            int charAt = D().charAt(I) | ' ';
            if (charAt != 102) {
                if (charAt == 116) {
                    h("rue", i11);
                    return true;
                }
                x(this, "Expected valid boolean literal prefix, but had '" + q() + '\'', 0, null, 6, null);
                throw new ir.h();
            }
            h("alse", i11);
            return false;
        }
        x(this, "EOF", 0, null, 6, null);
        throw new ir.h();
    }

    private final void h(String str, int i10) {
        if (D().length() - i10 >= str.length()) {
            int length = str.length();
            for (int i11 = 0; i11 < length; i11++) {
                if (str.charAt(i11) != (D().charAt(i10 + i11) | ' ')) {
                    x(this, "Expected valid boolean literal prefix, but had '" + q() + '\'', 0, null, 6, null);
                    throw new ir.h();
                }
            }
            this.f21321a = i10 + str.length();
            return;
        }
        x(this, "Unexpected end of boolean literal", 0, null, 6, null);
        throw new ir.h();
    }

    private static final double n(long j10, boolean z10) {
        if (!z10) {
            return Math.pow(10.0d, -j10);
        }
        if (z10) {
            return Math.pow(10.0d, j10);
        }
        throw new ir.p();
    }

    private final String s(int i10, int i11) {
        d(i10, i11);
        String sb2 = this.f21324d.toString();
        Intrinsics.checkNotNullExpressionValue(sb2, "toString(...)");
        this.f21324d.setLength(0);
        return sb2;
    }

    public static /* synthetic */ Void x(a aVar, String str, int i10, String str2, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 2) != 0) {
                i10 = aVar.f21321a;
            }
            if ((i11 & 4) != 0) {
                str2 = "";
            }
            return aVar.w(str, i10, str2);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: fail");
    }

    public static /* synthetic */ Void z(a aVar, byte b10, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                z10 = true;
            }
            return aVar.y(b10, z10);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: fail");
    }

    public final void A(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        int o02 = StringsKt.o0(L(0, this.f21321a), key, 0, false, 6, null);
        w("Encountered an unknown key '" + key + '\'', o02, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
        throw new ir.h();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final StringBuilder C() {
        return this.f21324d;
    }

    protected abstract CharSequence D();

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean E(char c10) {
        if (c10 != ',' && c10 != ':' && c10 != ']' && c10 != '}') {
            return true;
        }
        return false;
    }

    public abstract String F(String str, boolean z10);

    public byte G() {
        CharSequence D = D();
        int i10 = this.f21321a;
        while (true) {
            int I = I(i10);
            if (I != -1) {
                char charAt = D.charAt(I);
                if (charAt != '\t' && charAt != '\n' && charAt != '\r' && charAt != ' ') {
                    this.f21321a = I;
                    return b.a(charAt);
                }
                i10 = I + 1;
            } else {
                this.f21321a = I;
                return (byte) 10;
            }
        }
    }

    public final String H(boolean z10) {
        String o10;
        byte G = G();
        if (z10) {
            if (G != 1 && G != 0) {
                return null;
            }
            o10 = q();
        } else if (G != 1) {
            return null;
        } else {
            o10 = o();
        }
        this.f21323c = o10;
        return o10;
    }

    public abstract int I(int i10);

    public final void J(boolean z10) {
        ArrayList arrayList = new ArrayList();
        byte G = G();
        if (G != 8 && G != 6) {
            q();
            return;
        }
        while (true) {
            byte G2 = G();
            if (G2 == 1) {
                if (z10) {
                    q();
                } else {
                    i();
                }
            } else {
                if (G2 != 8 && G2 != 6) {
                    if (G2 == 9) {
                        if (((Number) CollectionsKt.z0(arrayList)).byteValue() == 8) {
                            CollectionsKt.L(arrayList);
                        } else {
                            int i10 = this.f21321a;
                            throw g0.e(i10, "found ] instead of } at path: " + this.f21322b, D());
                        }
                    } else if (G2 == 7) {
                        if (((Number) CollectionsKt.z0(arrayList)).byteValue() == 6) {
                            CollectionsKt.L(arrayList);
                        } else {
                            int i11 = this.f21321a;
                            throw g0.e(i11, "found } instead of ] at path: " + this.f21322b, D());
                        }
                    } else if (G2 == 10) {
                        x(this, "Unexpected end of input due to malformed JSON during ignoring unknown keys", 0, null, 6, null);
                        throw new ir.h();
                    }
                } else {
                    arrayList.add(Byte.valueOf(G2));
                }
                j();
                if (arrayList.size() == 0) {
                    return;
                }
            }
        }
    }

    public abstract int K();

    public String L(int i10, int i11) {
        return D().subSequence(i10, i11).toString();
    }

    public final boolean N() {
        int K = K();
        CharSequence D = D();
        if (K >= D.length() || K == -1 || D.charAt(K) != ',') {
            return false;
        }
        this.f21321a++;
        return true;
    }

    public final boolean O(boolean z10) {
        int I = I(K());
        int length = D().length() - I;
        if (length < 4 || I == -1) {
            return false;
        }
        for (int i10 = 0; i10 < 4; i10++) {
            if ("null".charAt(i10) != D().charAt(I + i10)) {
                return false;
            }
        }
        if (length > 4 && b.a(D().charAt(I + 4)) == 0) {
            return false;
        }
        if (z10) {
            this.f21321a = I + 4;
            return true;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void Q(char c10) {
        int i10 = this.f21321a;
        if (i10 > 0 && c10 == '\"') {
            try {
                this.f21321a = i10 - 1;
                String q10 = q();
                this.f21321a = i10;
                if (Intrinsics.areEqual(q10, "null")) {
                    w("Expected string literal but 'null' literal was found", this.f21321a - 1, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
                    throw new ir.h();
                }
            } catch (Throwable th2) {
                this.f21321a = i10;
                throw th2;
            }
        }
        z(this, b.a(c10), false, 2, null);
        throw new ir.h();
    }

    protected void d(int i10, int i11) {
        this.f21324d.append(D(), i10, i11);
    }

    public abstract boolean e();

    public final boolean g() {
        boolean z10;
        int K = K();
        if (K != D().length()) {
            if (D().charAt(K) == '\"') {
                K++;
                z10 = true;
            } else {
                z10 = false;
            }
            boolean f10 = f(K);
            if (z10) {
                if (this.f21321a != D().length()) {
                    if (D().charAt(this.f21321a) == '\"') {
                        this.f21321a++;
                        return f10;
                    }
                    x(this, "Expected closing quotation mark", 0, null, 6, null);
                    throw new ir.h();
                }
                x(this, "EOF", 0, null, 6, null);
                throw new ir.h();
            }
            return f10;
        }
        x(this, "EOF", 0, null, 6, null);
        throw new ir.h();
    }

    public abstract String i();

    public abstract byte j();

    public final byte k(byte b10) {
        byte j10 = j();
        if (j10 == b10) {
            return j10;
        }
        z(this, b10, false, 2, null);
        throw new ir.h();
    }

    public abstract void l(char c10);

    /* JADX WARN: Code restructure failed: missing block: B:100:0x01f1, code lost:
        x(r18, "Expected numeric literal", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:101:0x0201, code lost:
        throw new ir.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x011a, code lost:
        x(r18, "Unexpected symbol '" + r15 + "' in numeric literal", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:61:0x013e, code lost:
        throw new ir.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:62:0x013f, code lost:
        if (r2 == r1) goto L96;
     */
    /* JADX WARN: Code restructure failed: missing block: B:63:0x0141, code lost:
        r4 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:64:0x0143, code lost:
        r4 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:65:0x0144, code lost:
        if (r1 == r2) goto L94;
     */
    /* JADX WARN: Code restructure failed: missing block: B:66:0x0146, code lost:
        if (r9 == false) goto L63;
     */
    /* JADX WARN: Code restructure failed: missing block: B:68:0x014a, code lost:
        if (r1 == (r2 - 1)) goto L94;
     */
    /* JADX WARN: Code restructure failed: missing block: B:69:0x014c, code lost:
        if (r0 == false) goto L72;
     */
    /* JADX WARN: Code restructure failed: missing block: B:70:0x014e, code lost:
        if (r4 == false) goto L70;
     */
    /* JADX WARN: Code restructure failed: missing block: B:72:0x0158, code lost:
        if (D().charAt(r2) != '\"') goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:73:0x015a, code lost:
        r2 = r2 + 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:75:0x015f, code lost:
        x(r18, "Expected closing quotation mark", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:76:0x016f, code lost:
        throw new ir.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:77:0x0170, code lost:
        x(r18, "EOF", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:78:0x0180, code lost:
        throw new ir.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:79:0x0181, code lost:
        r18.f21321a = r2;
     */
    /* JADX WARN: Code restructure failed: missing block: B:80:0x0183, code lost:
        if (r8 == false) goto L86;
     */
    /* JADX WARN: Code restructure failed: missing block: B:81:0x0185, code lost:
        r1 = r10 * n(r12, r14);
     */
    /* JADX WARN: Code restructure failed: missing block: B:82:0x018f, code lost:
        if (r1 > 9.223372036854776E18d) goto L84;
     */
    /* JADX WARN: Code restructure failed: missing block: B:84:0x0195, code lost:
        if (r1 < (-9.223372036854776E18d)) goto L84;
     */
    /* JADX WARN: Code restructure failed: missing block: B:86:0x019d, code lost:
        if (java.lang.Math.floor(r1) != r1) goto L82;
     */
    /* JADX WARN: Code restructure failed: missing block: B:87:0x019f, code lost:
        r10 = (long) r1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:88:0x01a1, code lost:
        x(r18, "Can't convert " + r1 + " to Long", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:89:0x01c3, code lost:
        throw new ir.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:90:0x01c4, code lost:
        x(r18, "Numeric value overflow", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:91:0x01d4, code lost:
        throw new ir.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:92:0x01d5, code lost:
        if (r9 == false) goto L88;
     */
    /* JADX WARN: Code restructure failed: missing block: B:93:0x01d7, code lost:
        return r10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:95:0x01dc, code lost:
        if (r10 == Long.MIN_VALUE) goto L92;
     */
    /* JADX WARN: Code restructure failed: missing block: B:97:0x01df, code lost:
        return -r10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:98:0x01e0, code lost:
        x(r18, "Numeric value overflow", 0, null, 6, null);
     */
    /* JADX WARN: Code restructure failed: missing block: B:99:0x01f0, code lost:
        throw new ir.h();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final long m() {
        /*
            Method dump skipped, instructions count: 531
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: ct.a.m():long");
    }

    public final String o() {
        if (this.f21323c != null) {
            return M();
        }
        return i();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final String p(CharSequence source, int i10, int i11) {
        String s10;
        Intrinsics.checkNotNullParameter(source, "source");
        char charAt = source.charAt(i11);
        boolean z10 = false;
        while (charAt != '\"') {
            if (charAt == '\\') {
                int I = I(b(i10, i11));
                if (I != -1) {
                    z10 = true;
                    i10 = I;
                    i11 = i10;
                } else {
                    x(this, "Unexpected EOF", I, null, 4, null);
                    throw new ir.h();
                }
            } else {
                i11++;
                if (i11 >= source.length()) {
                    d(i10, i11);
                    int I2 = I(i11);
                    if (I2 != -1) {
                        i10 = I2;
                        i11 = i10;
                        z10 = true;
                    } else {
                        x(this, "Unexpected EOF", I2, null, 4, null);
                        throw new ir.h();
                    }
                } else {
                    continue;
                }
            }
            charAt = source.charAt(i11);
        }
        if (!z10) {
            s10 = L(i10, i11);
        } else {
            s10 = s(i10, i11);
        }
        this.f21321a = i11 + 1;
        return s10;
    }

    public final String q() {
        String s10;
        if (this.f21323c != null) {
            return M();
        }
        int K = K();
        if (K < D().length() && K != -1) {
            byte a10 = b.a(D().charAt(K));
            if (a10 == 1) {
                return o();
            }
            if (a10 == 0) {
                boolean z10 = false;
                while (b.a(D().charAt(K)) == 0) {
                    K++;
                    if (K >= D().length()) {
                        d(this.f21321a, K);
                        int I = I(K);
                        if (I == -1) {
                            this.f21321a = K;
                            return s(0, 0);
                        }
                        K = I;
                        z10 = true;
                    }
                }
                if (!z10) {
                    s10 = L(this.f21321a, K);
                } else {
                    s10 = s(this.f21321a, K);
                }
                this.f21321a = K;
                return s10;
            }
            x(this, "Expected beginning of the string, but got " + D().charAt(K), 0, null, 6, null);
            throw new ir.h();
        }
        x(this, "EOF", K, null, 4, null);
        throw new ir.h();
    }

    public final String r() {
        String q10 = q();
        if (Intrinsics.areEqual(q10, "null") && R()) {
            x(this, "Unexpected 'null' value instead of string literal", 0, null, 6, null);
            throw new ir.h();
        }
        return q10;
    }

    public final void t() {
        this.f21323c = null;
    }

    public String toString() {
        return "JsonReader(source='" + ((Object) D()) + "', currentPosition=" + this.f21321a + ')';
    }

    public final void v() {
        if (j() == 10) {
            return;
        }
        x(this, "Expected EOF after parsing, but had " + D().charAt(this.f21321a - 1) + " instead", 0, null, 6, null);
        throw new ir.h();
    }

    public final Void w(String message, int i10, String hint) {
        String str;
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(hint, "hint");
        if (hint.length() == 0) {
            str = "";
        } else {
            str = '\n' + hint;
        }
        throw g0.e(i10, message + " at path: " + this.f21322b.a() + str, D());
    }

    public final Void y(byte b10, boolean z10) {
        int i10;
        String str;
        String c10 = b.c(b10);
        if (z10) {
            i10 = this.f21321a - 1;
        } else {
            i10 = this.f21321a;
        }
        int i11 = i10;
        if (this.f21321a != D().length() && i11 >= 0) {
            str = String.valueOf(D().charAt(i11));
        } else {
            str = "EOF";
        }
        x(this, "Expected " + c10 + ", but had '" + str + "' instead", i11, null, 4, null);
        throw new ir.h();
    }

    public void u() {
    }
}
