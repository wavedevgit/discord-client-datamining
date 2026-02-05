package b0;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g {

    /* renamed from: e  reason: collision with root package name */
    static final Charset f6035e = StandardCharsets.US_ASCII;

    /* renamed from: f  reason: collision with root package name */
    static final String[] f6036f = {"", "BYTE", "STRING", "USHORT", "ULONG", "URATIONAL", "SBYTE", "UNDEFINED", "SSHORT", "SLONG", "SRATIONAL", "SINGLE", "DOUBLE", "IFD"};

    /* renamed from: g  reason: collision with root package name */
    static final int[] f6037g = {0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 1};

    /* renamed from: h  reason: collision with root package name */
    static final byte[] f6038h = {65, 83, 67, 73, 73, 0, 0, 0};

    /* renamed from: a  reason: collision with root package name */
    public final int f6039a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6040b;

    /* renamed from: c  reason: collision with root package name */
    public final long f6041c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f6042d;

    g(int i10, int i11, byte[] bArr) {
        this(i10, i11, -1L, bArr);
    }

    public static g a(String str) {
        if (str.length() == 1 && str.charAt(0) >= '0' && str.charAt(0) <= '1') {
            return new g(1, 1, new byte[]{(byte) (str.charAt(0) - '0')});
        }
        byte[] bytes = str.getBytes(f6035e);
        return new g(1, bytes.length, bytes);
    }

    public static g b(double[] dArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6037g[12] * dArr.length]);
        wrap.order(byteOrder);
        for (double d10 : dArr) {
            wrap.putDouble(d10);
        }
        return new g(12, dArr.length, wrap.array());
    }

    public static g c(int[] iArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6037g[9] * iArr.length]);
        wrap.order(byteOrder);
        for (int i10 : iArr) {
            wrap.putInt(i10);
        }
        return new g(9, iArr.length, wrap.array());
    }

    public static g d(k[] kVarArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6037g[10] * kVarArr.length]);
        wrap.order(byteOrder);
        for (k kVar : kVarArr) {
            wrap.putInt((int) kVar.b());
            wrap.putInt((int) kVar.a());
        }
        return new g(10, kVarArr.length, wrap.array());
    }

    public static g e(String str) {
        byte[] bytes = (str + (char) 0).getBytes(f6035e);
        return new g(2, bytes.length, bytes);
    }

    public static g f(long j10, ByteOrder byteOrder) {
        return g(new long[]{j10}, byteOrder);
    }

    public static g g(long[] jArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6037g[4] * jArr.length]);
        wrap.order(byteOrder);
        for (long j10 : jArr) {
            wrap.putInt((int) j10);
        }
        return new g(4, jArr.length, wrap.array());
    }

    public static g h(k[] kVarArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6037g[5] * kVarArr.length]);
        wrap.order(byteOrder);
        for (k kVar : kVarArr) {
            wrap.putInt((int) kVar.b());
            wrap.putInt((int) kVar.a());
        }
        return new g(5, kVarArr.length, wrap.array());
    }

    public static g i(int[] iArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6037g[3] * iArr.length]);
        wrap.order(byteOrder);
        for (int i10 : iArr) {
            wrap.putShort((short) i10);
        }
        return new g(3, iArr.length, wrap.array());
    }

    public int j() {
        return f6037g[this.f6039a] * this.f6040b;
    }

    public String toString() {
        return "(" + f6036f[this.f6039a] + ", data length:" + this.f6042d.length + ")";
    }

    g(int i10, int i11, long j10, byte[] bArr) {
        this.f6039a = i10;
        this.f6040b = i11;
        this.f6041c = j10;
        this.f6042d = bArr;
    }
}
