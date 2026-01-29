package iu;

import java.io.OutputStream;
import java.security.MessageDigest;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i0 extends ByteString {

    /* renamed from: q  reason: collision with root package name */
    private final transient byte[][] f31266q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int[] f31267r;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(byte[][] segments, int[] directory) {
        super(ByteString.f44364p.k());
        Intrinsics.checkNotNullParameter(segments, "segments");
        Intrinsics.checkNotNullParameter(directory, "directory");
        this.f31266q = segments;
        this.f31267r = directory;
    }

    private final ByteString R() {
        return new ByteString(L());
    }

    @Override // okio.ByteString
    public boolean A(int i10, ByteString other, int i11, int i12) {
        int i13;
        Intrinsics.checkNotNullParameter(other, "other");
        if (i10 < 0 || i10 > G() - i12) {
            return false;
        }
        int i14 = i12 + i10;
        int b10 = ju.e.b(this, i10);
        while (i10 < i14) {
            if (b10 == 0) {
                i13 = 0;
            } else {
                i13 = P()[b10 - 1];
            }
            int i15 = P()[Q().length + b10];
            int min = Math.min(i14, (P()[b10] - i13) + i13) - i10;
            if (!other.B(i11, Q()[b10], i15 + (i10 - i13), min)) {
                return false;
            }
            i11 += min;
            i10 += min;
            b10++;
        }
        return true;
    }

    @Override // okio.ByteString
    public boolean B(int i10, byte[] other, int i11, int i12) {
        int i13;
        Intrinsics.checkNotNullParameter(other, "other");
        if (i10 < 0 || i10 > G() - i12 || i11 < 0 || i11 > other.length - i12) {
            return false;
        }
        int i14 = i12 + i10;
        int b10 = ju.e.b(this, i10);
        while (i10 < i14) {
            if (b10 == 0) {
                i13 = 0;
            } else {
                i13 = P()[b10 - 1];
            }
            int i15 = P()[Q().length + b10];
            int min = Math.min(i14, (P()[b10] - i13) + i13) - i10;
            if (!okio.b.a(Q()[b10], i15 + (i10 - i13), other, i11, min)) {
                return false;
            }
            i11 += min;
            i10 += min;
            b10++;
        }
        return true;
    }

    @Override // okio.ByteString
    public ByteString I(int i10, int i11) {
        int e10 = okio.b.e(this, i11);
        if (i10 >= 0) {
            if (e10 <= G()) {
                int i12 = e10 - i10;
                if (i12 >= 0) {
                    if (i10 == 0 && e10 == G()) {
                        return this;
                    }
                    if (i10 == e10) {
                        return ByteString.f44364p;
                    }
                    int b10 = ju.e.b(this, i10);
                    int b11 = ju.e.b(this, e10 - 1);
                    byte[][] bArr = (byte[][]) kotlin.collections.i.r(Q(), b10, b11 + 1);
                    int[] iArr = new int[bArr.length * 2];
                    int i13 = 0;
                    if (b10 <= b11) {
                        int i14 = b10;
                        int i15 = 0;
                        while (true) {
                            iArr[i15] = Math.min(P()[i14] - i10, i12);
                            int i16 = i15 + 1;
                            iArr[i15 + bArr.length] = P()[Q().length + i14];
                            if (i14 == b11) {
                                break;
                            }
                            i14++;
                            i15 = i16;
                        }
                    }
                    if (b10 != 0) {
                        i13 = P()[b10 - 1];
                    }
                    int length = bArr.length;
                    iArr[length] = iArr[length] + (i10 - i13);
                    return new i0(bArr, iArr);
                }
                throw new IllegalArgumentException(("endIndex=" + e10 + " < beginIndex=" + i10).toString());
            }
            throw new IllegalArgumentException(("endIndex=" + e10 + " > length(" + G() + ')').toString());
        }
        throw new IllegalArgumentException(("beginIndex=" + i10 + " < 0").toString());
    }

    @Override // okio.ByteString
    public ByteString K() {
        return R().K();
    }

    @Override // okio.ByteString
    public byte[] L() {
        byte[] bArr = new byte[G()];
        int length = Q().length;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        while (i10 < length) {
            int i13 = P()[length + i10];
            int i14 = P()[i10];
            int i15 = i14 - i11;
            kotlin.collections.i.f(Q()[i10], bArr, i12, i13, i13 + i15);
            i12 += i15;
            i10++;
            i11 = i14;
        }
        return bArr;
    }

    @Override // okio.ByteString
    public void N(OutputStream out) {
        Intrinsics.checkNotNullParameter(out, "out");
        int length = Q().length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            int i12 = P()[length + i10];
            int i13 = P()[i10];
            out.write(Q()[i10], i12, i13 - i11);
            i10++;
            i11 = i13;
        }
    }

    @Override // okio.ByteString
    public void O(Buffer buffer, int i10, int i11) {
        int i12;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        int i13 = i10 + i11;
        int b10 = ju.e.b(this, i10);
        while (i10 < i13) {
            if (b10 == 0) {
                i12 = 0;
            } else {
                i12 = P()[b10 - 1];
            }
            int i14 = P()[Q().length + b10];
            int min = Math.min(i13, (P()[b10] - i12) + i12) - i10;
            int i15 = i14 + (i10 - i12);
            g0 g0Var = new g0(Q()[b10], i15, i15 + min, true, false);
            g0 g0Var2 = buffer.f44352d;
            if (g0Var2 == null) {
                g0Var.f31255g = g0Var;
                g0Var.f31254f = g0Var;
                buffer.f44352d = g0Var;
            } else {
                Intrinsics.checkNotNull(g0Var2);
                g0 g0Var3 = g0Var2.f31255g;
                Intrinsics.checkNotNull(g0Var3);
                g0Var3.c(g0Var);
            }
            i10 += min;
            b10++;
        }
        buffer.Y0(buffer.size() + i11);
    }

    public final int[] P() {
        return this.f31267r;
    }

    public final byte[][] Q() {
        return this.f31266q;
    }

    @Override // okio.ByteString
    public String d() {
        return R().d();
    }

    @Override // okio.ByteString
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof ByteString) {
            ByteString byteString = (ByteString) obj;
            if (byteString.G() == G() && A(0, byteString, 0, G())) {
                return true;
            }
        }
        return false;
    }

    @Override // okio.ByteString
    public ByteString g(String algorithm) {
        Intrinsics.checkNotNullParameter(algorithm, "algorithm");
        MessageDigest messageDigest = MessageDigest.getInstance(algorithm);
        int length = Q().length;
        int i10 = 0;
        int i11 = 0;
        while (i10 < length) {
            int i12 = P()[length + i10];
            int i13 = P()[i10];
            messageDigest.update(Q()[i10], i12, i13 - i11);
            i10++;
            i11 = i13;
        }
        byte[] digest = messageDigest.digest();
        Intrinsics.checkNotNull(digest);
        return new ByteString(digest);
    }

    @Override // okio.ByteString
    public int hashCode() {
        int l10 = l();
        if (l10 != 0) {
            return l10;
        }
        int length = Q().length;
        int i10 = 0;
        int i11 = 1;
        int i12 = 0;
        while (i10 < length) {
            int i13 = P()[length + i10];
            int i14 = P()[i10];
            byte[] bArr = Q()[i10];
            int i15 = (i14 - i12) + i13;
            while (i13 < i15) {
                i11 = (i11 * 31) + bArr[i13];
                i13++;
            }
            i10++;
            i12 = i14;
        }
        C(i11);
        return i11;
    }

    @Override // okio.ByteString
    public int o() {
        return P()[Q().length - 1];
    }

    @Override // okio.ByteString
    public String q() {
        return R().q();
    }

    @Override // okio.ByteString
    public int s(byte[] other, int i10) {
        Intrinsics.checkNotNullParameter(other, "other");
        return R().s(other, i10);
    }

    @Override // okio.ByteString
    public String toString() {
        return R().toString();
    }

    @Override // okio.ByteString
    public byte[] u() {
        return L();
    }

    @Override // okio.ByteString
    public byte v(int i10) {
        int i11;
        okio.b.b(P()[Q().length - 1], i10, 1L);
        int b10 = ju.e.b(this, i10);
        if (b10 == 0) {
            i11 = 0;
        } else {
            i11 = P()[b10 - 1];
        }
        return Q()[b10][(i10 - i11) + P()[Q().length + b10]];
    }

    @Override // okio.ByteString
    public int x(byte[] other, int i10) {
        Intrinsics.checkNotNullParameter(other, "other");
        return R().x(other, i10);
    }
}
