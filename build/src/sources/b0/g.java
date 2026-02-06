package b0;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g {

    /* renamed from: e  reason: collision with root package name */
    static final Charset f6328e = StandardCharsets.US_ASCII;

    /* renamed from: f  reason: collision with root package name */
    static final String[] f6329f = {"", "BYTE", "STRING", "USHORT", "ULONG", "URATIONAL", "SBYTE", "UNDEFINED", "SSHORT", "SLONG", "SRATIONAL", "SINGLE", "DOUBLE", "IFD"};

    /* renamed from: g  reason: collision with root package name */
    static final int[] f6330g = {0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 1};

    /* renamed from: h  reason: collision with root package name */
    static final byte[] f6331h = {65, 83, 67, 73, 73, 0, 0, 0};

    /* renamed from: a  reason: collision with root package name */
    public final int f6332a;

    /* renamed from: b  reason: collision with root package name */
    public final int f6333b;

    /* renamed from: c  reason: collision with root package name */
    public final long f6334c;

    /* renamed from: d  reason: collision with root package name */
    public final byte[] f6335d;

    g(int i10, int i11, byte[] bArr) {
        this(i10, i11, -1L, bArr);
    }

    public static g a(String str) {
        if (str.length() == 1 && str.charAt(0) >= '0' && str.charAt(0) <= '1') {
            return new g(1, 1, new byte[]{(byte) (str.charAt(0) - '0')});
        }
        byte[] bytes = str.getBytes(f6328e);
        return new g(1, bytes.length, bytes);
    }

    public static g b(double[] dArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6330g[12] * dArr.length]);
        wrap.order(byteOrder);
        for (double d10 : dArr) {
            wrap.putDouble(d10);
        }
        return new g(12, dArr.length, wrap.array());
    }

    public static g c(int[] iArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6330g[9] * iArr.length]);
        wrap.order(byteOrder);
        for (int i10 : iArr) {
            wrap.putInt(i10);
        }
        return new g(9, iArr.length, wrap.array());
    }

    public static g d(k[] kVarArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6330g[10] * kVarArr.length]);
        wrap.order(byteOrder);
        for (k kVar : kVarArr) {
            wrap.putInt((int) kVar.b());
            wrap.putInt((int) kVar.a());
        }
        return new g(10, kVarArr.length, wrap.array());
    }

    public static g e(String str) {
        byte[] bytes = (str + (char) 0).getBytes(f6328e);
        return new g(2, bytes.length, bytes);
    }

    public static g f(long j10, ByteOrder byteOrder) {
        return g(new long[]{j10}, byteOrder);
    }

    public static g g(long[] jArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6330g[4] * jArr.length]);
        wrap.order(byteOrder);
        for (long j10 : jArr) {
            wrap.putInt((int) j10);
        }
        return new g(4, jArr.length, wrap.array());
    }

    public static g h(k[] kVarArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6330g[5] * kVarArr.length]);
        wrap.order(byteOrder);
        for (k kVar : kVarArr) {
            wrap.putInt((int) kVar.b());
            wrap.putInt((int) kVar.a());
        }
        return new g(5, kVarArr.length, wrap.array());
    }

    public static g i(int[] iArr, ByteOrder byteOrder) {
        ByteBuffer wrap = ByteBuffer.wrap(new byte[f6330g[3] * iArr.length]);
        wrap.order(byteOrder);
        for (int i10 : iArr) {
            wrap.putShort((short) i10);
        }
        return new g(3, iArr.length, wrap.array());
    }

    public int j() {
        return f6330g[this.f6332a] * this.f6333b;
    }

    public String toString() {
        return "(" + f6329f[this.f6332a] + ", data length:" + this.f6335d.length + ")";
    }

    g(int i10, int i11, long j10, byte[] bArr) {
        this.f6332a = i10;
        this.f6333b = i11;
        this.f6334c = j10;
        this.f6335d = bArr;
    }
}
