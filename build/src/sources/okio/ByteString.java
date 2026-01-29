package okio;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import iu.m0;
import java.io.OutputStream;
import java.io.Serializable;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.util.Arrays;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ByteString implements Serializable, Comparable {

    /* renamed from: o  reason: collision with root package name */
    public static final a f44363o = new a(null);

    /* renamed from: p  reason: collision with root package name */
    public static final ByteString f44364p = new ByteString(new byte[0]);

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f44365d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f44366e;

    /* renamed from: i  reason: collision with root package name */
    private transient String f44367i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ ByteString j(a aVar, byte[] bArr, int i10, int i11, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                i10 = 0;
            }
            if ((i12 & 2) != 0) {
                i11 = b.c();
            }
            return aVar.i(bArr, i10, i11);
        }

        public final ByteString a(String string) {
            Intrinsics.checkNotNullParameter(string, "string");
            return d(string);
        }

        public final ByteString b(String string) {
            Intrinsics.checkNotNullParameter(string, "string");
            return g(string);
        }

        public final ByteString c(ByteBuffer buffer) {
            Intrinsics.checkNotNullParameter(buffer, "buffer");
            return h(buffer);
        }

        public final ByteString d(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            byte[] a10 = okio.a.a(str);
            if (a10 != null) {
                return new ByteString(a10);
            }
            return null;
        }

        public final ByteString e(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            if (str.length() % 2 == 0) {
                int length = str.length() / 2;
                byte[] bArr = new byte[length];
                for (int i10 = 0; i10 < length; i10++) {
                    int i11 = i10 * 2;
                    bArr[i10] = (byte) ((ju.b.b(str.charAt(i11)) << 4) + ju.b.b(str.charAt(i11 + 1)));
                }
                return new ByteString(bArr);
            }
            throw new IllegalArgumentException(("Unexpected hex string: " + str).toString());
        }

        public final ByteString f(String str, Charset charset) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            Intrinsics.checkNotNullParameter(charset, "charset");
            byte[] bytes = str.getBytes(charset);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            return new ByteString(bytes);
        }

        public final ByteString g(String str) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            ByteString byteString = new ByteString(m0.a(str));
            byteString.D(str);
            return byteString;
        }

        public final ByteString h(ByteBuffer byteBuffer) {
            Intrinsics.checkNotNullParameter(byteBuffer, "<this>");
            byte[] bArr = new byte[byteBuffer.remaining()];
            byteBuffer.get(bArr);
            return new ByteString(bArr);
        }

        public final ByteString i(byte[] bArr, int i10, int i11) {
            Intrinsics.checkNotNullParameter(bArr, "<this>");
            int f10 = b.f(bArr, i11);
            b.b(bArr.length, i10, f10);
            return new ByteString(i.q(bArr, i10, f10 + i10));
        }

        private a() {
        }
    }

    public ByteString(byte[] data) {
        Intrinsics.checkNotNullParameter(data, "data");
        this.f44365d = data;
    }

    public static /* synthetic */ ByteString J(ByteString byteString, int i10, int i11, int i12, Object obj) {
        if (obj == null) {
            if ((i12 & 1) != 0) {
                i10 = 0;
            }
            if ((i12 & 2) != 0) {
                i11 = b.c();
            }
            return byteString.I(i10, i11);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: substring");
    }

    public static final ByteString f(String str) {
        return f44363o.e(str);
    }

    public static final ByteString h(String str) {
        return f44363o.g(str);
    }

    public static /* synthetic */ int t(ByteString byteString, ByteString byteString2, int i10, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 2) != 0) {
                i10 = 0;
            }
            return byteString.r(byteString2, i10);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: indexOf");
    }

    public static /* synthetic */ int y(ByteString byteString, ByteString byteString2, int i10, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 2) != 0) {
                i10 = b.c();
            }
            return byteString.w(byteString2, i10);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: lastIndexOf");
    }

    public boolean A(int i10, ByteString other, int i11, int i12) {
        Intrinsics.checkNotNullParameter(other, "other");
        return other.B(i11, k(), i10, i12);
    }

    public boolean B(int i10, byte[] other, int i11, int i12) {
        Intrinsics.checkNotNullParameter(other, "other");
        if (i10 >= 0 && i10 <= k().length - i12 && i11 >= 0 && i11 <= other.length - i12 && b.a(k(), i10, other, i11, i12)) {
            return true;
        }
        return false;
    }

    public final void C(int i10) {
        this.f44366e = i10;
    }

    public final void D(String str) {
        this.f44367i = str;
    }

    public final ByteString E() {
        return g("SHA-1");
    }

    public final ByteString F() {
        return g("SHA-256");
    }

    public final int G() {
        return o();
    }

    public final boolean H(ByteString prefix) {
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        return A(0, prefix, 0, prefix.G());
    }

    public ByteString I(int i10, int i11) {
        int e10 = b.e(this, i11);
        if (i10 >= 0) {
            if (e10 <= k().length) {
                if (e10 - i10 >= 0) {
                    if (i10 == 0 && e10 == k().length) {
                        return this;
                    }
                    return new ByteString(i.q(k(), i10, e10));
                }
                throw new IllegalArgumentException("endIndex < beginIndex");
            }
            throw new IllegalArgumentException(("endIndex > length(" + k().length + ')').toString());
        }
        throw new IllegalArgumentException("beginIndex < 0");
    }

    public ByteString K() {
        for (int i10 = 0; i10 < k().length; i10++) {
            byte b10 = k()[i10];
            if (b10 >= 65 && b10 <= 90) {
                byte[] k10 = k();
                byte[] copyOf = Arrays.copyOf(k10, k10.length);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                copyOf[i10] = (byte) (b10 + 32);
                for (int i11 = i10 + 1; i11 < copyOf.length; i11++) {
                    byte b11 = copyOf[i11];
                    if (b11 >= 65 && b11 <= 90) {
                        copyOf[i11] = (byte) (b11 + 32);
                    }
                }
                return new ByteString(copyOf);
            }
        }
        return this;
    }

    public byte[] L() {
        byte[] k10 = k();
        byte[] copyOf = Arrays.copyOf(k10, k10.length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        return copyOf;
    }

    public String M() {
        String p10 = p();
        if (p10 == null) {
            String c10 = m0.c(u());
            D(c10);
            return c10;
        }
        return p10;
    }

    public void N(OutputStream out) {
        Intrinsics.checkNotNullParameter(out, "out");
        out.write(this.f44365d);
    }

    public void O(Buffer buffer, int i10, int i11) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        ju.b.d(this, buffer, i10, i11);
    }

    public final int a() {
        return G();
    }

    public String d() {
        return okio.a.c(k(), null, 1, null);
    }

    @Override // java.lang.Comparable
    /* renamed from: e */
    public int compareTo(ByteString other) {
        Intrinsics.checkNotNullParameter(other, "other");
        int G = G();
        int G2 = other.G();
        int min = Math.min(G, G2);
        for (int i10 = 0; i10 < min; i10++) {
            int j10 = j(i10) & 255;
            int j11 = other.j(i10) & 255;
            if (j10 != j11) {
                if (j10 < j11) {
                    return -1;
                } else {
                    return 1;
                }
            }
        }
        if (G == G2) {
            return 0;
        }
        if (G < G2) {
            return -1;
        }
        return 1;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof ByteString) {
            ByteString byteString = (ByteString) obj;
            if (byteString.G() == k().length && byteString.B(0, k(), 0, k().length)) {
                return true;
            }
        }
        return false;
    }

    public ByteString g(String algorithm) {
        Intrinsics.checkNotNullParameter(algorithm, "algorithm");
        MessageDigest messageDigest = MessageDigest.getInstance(algorithm);
        messageDigest.update(this.f44365d, 0, G());
        byte[] digest = messageDigest.digest();
        Intrinsics.checkNotNull(digest);
        return new ByteString(digest);
    }

    public int hashCode() {
        int l10 = l();
        if (l10 != 0) {
            return l10;
        }
        int hashCode = Arrays.hashCode(k());
        C(hashCode);
        return hashCode;
    }

    public final boolean i(ByteString suffix) {
        Intrinsics.checkNotNullParameter(suffix, "suffix");
        return A(G() - suffix.G(), suffix, 0, suffix.G());
    }

    public final byte j(int i10) {
        return v(i10);
    }

    public final byte[] k() {
        return this.f44365d;
    }

    public final int l() {
        return this.f44366e;
    }

    public int o() {
        return k().length;
    }

    public final String p() {
        return this.f44367i;
    }

    public String q() {
        byte[] k10;
        char[] cArr = new char[k().length * 2];
        int i10 = 0;
        for (byte b10 : k()) {
            int i11 = i10 + 1;
            cArr[i10] = ju.b.f()[(b10 >> 4) & 15];
            i10 += 2;
            cArr[i11] = ju.b.f()[b10 & 15];
        }
        return StringsKt.v(cArr);
    }

    public final int r(ByteString other, int i10) {
        Intrinsics.checkNotNullParameter(other, "other");
        return s(other.u(), i10);
    }

    public int s(byte[] other, int i10) {
        Intrinsics.checkNotNullParameter(other, "other");
        int length = k().length - other.length;
        int max = Math.max(i10, 0);
        if (max <= length) {
            while (!b.a(k(), max, other, 0, other.length)) {
                if (max != length) {
                    max++;
                } else {
                    return -1;
                }
            }
            return max;
        }
        return -1;
    }

    public String toString() {
        ByteString byteString;
        if (k().length == 0) {
            return "[size=0]";
        }
        int a10 = ju.b.a(k(), 64);
        if (a10 == -1) {
            if (k().length <= 64) {
                return "[hex=" + q() + ']';
            }
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[size=");
            sb2.append(k().length);
            sb2.append(" hex=");
            int e10 = b.e(this, 64);
            if (e10 <= k().length) {
                if (e10 >= 0) {
                    if (e10 == k().length) {
                        byteString = this;
                    } else {
                        byteString = new ByteString(i.q(k(), 0, e10));
                    }
                    sb2.append(byteString.q());
                    sb2.append("…]");
                    return sb2.toString();
                }
                throw new IllegalArgumentException("endIndex < beginIndex");
            }
            throw new IllegalArgumentException(("endIndex > length(" + k().length + ')').toString());
        }
        String M = M();
        String substring = M.substring(0, a10);
        Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
        String J = StringsKt.J(StringsKt.J(StringsKt.J(substring, "\\", "\\\\", false, 4, null), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\\n", false, 4, null), "\r", "\\r", false, 4, null);
        if (a10 < M.length()) {
            return "[size=" + k().length + " text=" + J + "…]";
        }
        return "[text=" + J + ']';
    }

    public byte[] u() {
        return k();
    }

    public byte v(int i10) {
        return k()[i10];
    }

    public final int w(ByteString other, int i10) {
        Intrinsics.checkNotNullParameter(other, "other");
        return x(other.u(), i10);
    }

    public int x(byte[] other, int i10) {
        Intrinsics.checkNotNullParameter(other, "other");
        for (int min = Math.min(b.e(this, i10), k().length - other.length); -1 < min; min--) {
            if (b.a(k(), min, other, 0, other.length)) {
                return min;
            }
        }
        return -1;
    }

    public final ByteString z() {
        return g("MD5");
    }
}
