package ne;

import java.nio.charset.Charset;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 {

    /* renamed from: d  reason: collision with root package name */
    private static final char[] f39572d = {'\r', '\n'};

    /* renamed from: e  reason: collision with root package name */
    private static final char[] f39573e = {'\n'};

    /* renamed from: f  reason: collision with root package name */
    private static final mi.u f39574f = mi.u.w(li.d.f36880a, li.d.f36882c, li.d.f36885f, li.d.f36883d, li.d.f36884e);

    /* renamed from: a  reason: collision with root package name */
    private byte[] f39575a;

    /* renamed from: b  reason: collision with root package name */
    private int f39576b;

    /* renamed from: c  reason: collision with root package name */
    private int f39577c;

    public h0() {
        this.f39575a = w0.f39662f;
    }

    private void W(Charset charset) {
        if (m(charset, f39572d) == '\r') {
            m(charset, f39573e);
        }
    }

    private int d(Charset charset) {
        int i10;
        if (!charset.equals(li.d.f36882c) && !charset.equals(li.d.f36880a)) {
            if (!charset.equals(li.d.f36885f) && !charset.equals(li.d.f36884e) && !charset.equals(li.d.f36883d)) {
                throw new IllegalArgumentException("Unsupported charset: " + charset);
            }
            i10 = 2;
        } else {
            i10 = 1;
        }
        int i11 = this.f39576b;
        while (true) {
            int i12 = this.f39577c;
            if (i11 < i12 - (i10 - 1)) {
                if ((charset.equals(li.d.f36882c) || charset.equals(li.d.f36880a)) && w0.F0(this.f39575a[i11])) {
                    break;
                }
                if (charset.equals(li.d.f36885f) || charset.equals(li.d.f36883d)) {
                    byte[] bArr = this.f39575a;
                    if (bArr[i11] == 0 && w0.F0(bArr[i11 + 1])) {
                        break;
                    }
                }
                if (charset.equals(li.d.f36884e)) {
                    byte[] bArr2 = this.f39575a;
                    if (bArr2[i11 + 1] == 0 && w0.F0(bArr2[i11])) {
                        break;
                    }
                }
                i11 += i10;
            } else {
                return i12;
            }
        }
        return i11;
    }

    private int i(Charset charset) {
        byte a10;
        char c10;
        int i10 = 1;
        if ((charset.equals(li.d.f36882c) || charset.equals(li.d.f36880a)) && a() >= 1) {
            a10 = (byte) oi.b.a(oi.h.b(this.f39575a[this.f39576b]));
        } else {
            if ((charset.equals(li.d.f36885f) || charset.equals(li.d.f36883d)) && a() >= 2) {
                byte[] bArr = this.f39575a;
                int i11 = this.f39576b;
                c10 = oi.b.c(bArr[i11], bArr[i11 + 1]);
            } else if (charset.equals(li.d.f36884e) && a() >= 2) {
                byte[] bArr2 = this.f39575a;
                int i12 = this.f39576b;
                c10 = oi.b.c(bArr2[i12 + 1], bArr2[i12]);
            } else {
                return 0;
            }
            a10 = (byte) c10;
            i10 = 2;
        }
        return (oi.b.a(a10) << 16) + i10;
    }

    private char m(Charset charset, char[] cArr) {
        int i10 = i(charset);
        if (i10 != 0) {
            char c10 = (char) (i10 >> 16);
            if (oi.b.b(cArr, c10)) {
                this.f39576b += i10 & 65535;
                return c10;
            }
            return (char) 0;
        }
        return (char) 0;
    }

    public long A() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = i10 + 3;
        this.f39576b = i13;
        long j10 = ((bArr[i10] & 255) << 56) | ((bArr[i11] & 255) << 48) | ((bArr[i12] & 255) << 40);
        int i14 = i10 + 4;
        this.f39576b = i14;
        int i15 = i10 + 5;
        this.f39576b = i15;
        long j11 = j10 | ((bArr[i13] & 255) << 32) | ((bArr[i14] & 255) << 24);
        int i16 = i10 + 6;
        this.f39576b = i16;
        int i17 = i10 + 7;
        this.f39576b = i17;
        this.f39576b = i10 + 8;
        return (bArr[i17] & 255) | j11 | ((bArr[i15] & 255) << 16) | ((bArr[i16] & 255) << 8);
    }

    public String B() {
        return n((char) 0);
    }

    public String C(int i10) {
        int i11;
        if (i10 == 0) {
            return "";
        }
        int i12 = this.f39576b;
        int i13 = (i12 + i10) - 1;
        if (i13 < this.f39577c && this.f39575a[i13] == 0) {
            i11 = i10 - 1;
        } else {
            i11 = i10;
        }
        String F = w0.F(this.f39575a, i12, i11);
        this.f39576b += i10;
        return F;
    }

    public short D() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        this.f39576b = i10 + 2;
        return (short) ((bArr[i11] & 255) | ((bArr[i10] & 255) << 8));
    }

    public String E(int i10) {
        return F(i10, li.d.f36882c);
    }

    public String F(int i10, Charset charset) {
        String str = new String(this.f39575a, this.f39576b, i10, charset);
        this.f39576b += i10;
        return str;
    }

    public int G() {
        return (H() << 21) | (H() << 14) | (H() << 7) | H();
    }

    public int H() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        this.f39576b = i10 + 1;
        return bArr[i10] & 255;
    }

    public int I() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        this.f39576b = i10 + 2;
        int i12 = (bArr[i11] & 255) | ((bArr[i10] & 255) << 8);
        this.f39576b = i10 + 4;
        return i12;
    }

    public long J() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = i10 + 3;
        this.f39576b = i13;
        this.f39576b = i10 + 4;
        return (bArr[i13] & 255) | ((bArr[i10] & 255) << 24) | ((bArr[i11] & 255) << 16) | ((bArr[i12] & 255) << 8);
    }

    public int K() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = (bArr[i11] & 255) << 8;
        this.f39576b = i10 + 3;
        return (bArr[i12] & 255) | i13 | ((bArr[i10] & 255) << 16);
    }

    public int L() {
        int q10 = q();
        if (q10 >= 0) {
            return q10;
        }
        throw new IllegalStateException("Top bit not zero: " + q10);
    }

    public long M() {
        long A = A();
        if (A >= 0) {
            return A;
        }
        throw new IllegalStateException("Top bit not zero: " + A);
    }

    public int N() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        this.f39576b = i10 + 2;
        return (bArr[i11] & 255) | ((bArr[i10] & 255) << 8);
    }

    public long O() {
        int i10;
        int i11;
        byte b10;
        int i12;
        long j10 = this.f39575a[this.f39576b];
        int i13 = 7;
        while (true) {
            if (i13 < 0) {
                break;
            }
            if (((1 << i13) & j10) != 0) {
                i13--;
            } else if (i13 < 6) {
                j10 &= i12 - 1;
                i11 = 7 - i13;
            } else if (i13 == 7) {
                i11 = 1;
            }
        }
        i11 = 0;
        if (i11 != 0) {
            for (i10 = 1; i10 < i11; i10++) {
                if ((this.f39575a[this.f39576b + i10] & 192) == 128) {
                    j10 = (j10 << 6) | (b10 & 63);
                } else {
                    throw new NumberFormatException("Invalid UTF-8 sequence continuation byte: " + j10);
                }
            }
            this.f39576b += i11;
            return j10;
        }
        throw new NumberFormatException("Invalid UTF-8 sequence first byte: " + j10);
    }

    public Charset P() {
        if (a() >= 3) {
            byte[] bArr = this.f39575a;
            int i10 = this.f39576b;
            if (bArr[i10] == -17 && bArr[i10 + 1] == -69 && bArr[i10 + 2] == -65) {
                this.f39576b = i10 + 3;
                return li.d.f36882c;
            }
        }
        if (a() >= 2) {
            byte[] bArr2 = this.f39575a;
            int i11 = this.f39576b;
            byte b10 = bArr2[i11];
            if (b10 == -2 && bArr2[i11 + 1] == -1) {
                this.f39576b = i11 + 2;
                return li.d.f36883d;
            } else if (b10 == -1 && bArr2[i11 + 1] == -2) {
                this.f39576b = i11 + 2;
                return li.d.f36884e;
            } else {
                return null;
            }
        }
        return null;
    }

    public void Q(int i10) {
        byte[] bArr;
        if (b() < i10) {
            bArr = new byte[i10];
        } else {
            bArr = this.f39575a;
        }
        S(bArr, i10);
    }

    public void R(byte[] bArr) {
        S(bArr, bArr.length);
    }

    public void S(byte[] bArr, int i10) {
        this.f39575a = bArr;
        this.f39577c = i10;
        this.f39576b = 0;
    }

    public void T(int i10) {
        boolean z10;
        if (i10 >= 0 && i10 <= this.f39575a.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        a.a(z10);
        this.f39577c = i10;
    }

    public void U(int i10) {
        boolean z10;
        if (i10 >= 0 && i10 <= this.f39577c) {
            z10 = true;
        } else {
            z10 = false;
        }
        a.a(z10);
        this.f39576b = i10;
    }

    public void V(int i10) {
        U(this.f39576b + i10);
    }

    public int a() {
        return this.f39577c - this.f39576b;
    }

    public int b() {
        return this.f39575a.length;
    }

    public void c(int i10) {
        if (i10 > b()) {
            this.f39575a = Arrays.copyOf(this.f39575a, i10);
        }
    }

    public byte[] e() {
        return this.f39575a;
    }

    public int f() {
        return this.f39576b;
    }

    public int g() {
        return this.f39577c;
    }

    public char h(Charset charset) {
        boolean contains = f39574f.contains(charset);
        a.b(contains, "Unsupported charset: " + charset);
        return (char) (i(charset) >> 16);
    }

    public int j() {
        return this.f39575a[this.f39576b] & 255;
    }

    public void k(g0 g0Var, int i10) {
        l(g0Var.f39566a, 0, i10);
        g0Var.p(0);
    }

    public void l(byte[] bArr, int i10, int i11) {
        System.arraycopy(this.f39575a, this.f39576b, bArr, i10, i11);
        this.f39576b += i11;
    }

    public String n(char c10) {
        if (a() == 0) {
            return null;
        }
        int i10 = this.f39576b;
        while (i10 < this.f39577c && this.f39575a[i10] != c10) {
            i10++;
        }
        byte[] bArr = this.f39575a;
        int i11 = this.f39576b;
        String F = w0.F(bArr, i11, i10 - i11);
        this.f39576b = i10;
        if (i10 < this.f39577c) {
            this.f39576b = i10 + 1;
        }
        return F;
    }

    public double o() {
        return Double.longBitsToDouble(A());
    }

    public float p() {
        return Float.intBitsToFloat(q());
    }

    public int q() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = ((bArr[i11] & 255) << 16) | ((bArr[i10] & 255) << 24);
        int i14 = i10 + 3;
        this.f39576b = i14;
        this.f39576b = i10 + 4;
        return (bArr[i14] & 255) | i13 | ((bArr[i12] & 255) << 8);
    }

    public int r() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = (bArr[i11] & 255) << 8;
        this.f39576b = i10 + 3;
        return (bArr[i12] & 255) | i13 | (((bArr[i10] & 255) << 24) >> 8);
    }

    public String s() {
        return t(li.d.f36882c);
    }

    public String t(Charset charset) {
        boolean contains = f39574f.contains(charset);
        a.b(contains, "Unsupported charset: " + charset);
        if (a() == 0) {
            return null;
        }
        if (!charset.equals(li.d.f36880a)) {
            P();
        }
        String F = F(d(charset) - this.f39576b, charset);
        if (this.f39576b == this.f39577c) {
            return F;
        }
        W(charset);
        return F;
    }

    public int u() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = ((bArr[i11] & 255) << 8) | (bArr[i10] & 255);
        int i14 = i10 + 3;
        this.f39576b = i14;
        this.f39576b = i10 + 4;
        return ((bArr[i14] & 255) << 24) | i13 | ((bArr[i12] & 255) << 16);
    }

    public long v() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        long j10 = (bArr[i10] & 255) | ((bArr[i11] & 255) << 8);
        int i13 = i10 + 3;
        this.f39576b = i13;
        int i14 = i10 + 4;
        this.f39576b = i14;
        long j11 = j10 | ((bArr[i12] & 255) << 16) | ((bArr[i13] & 255) << 24);
        int i15 = i10 + 5;
        this.f39576b = i15;
        int i16 = i10 + 6;
        this.f39576b = i16;
        long j12 = j11 | ((bArr[i14] & 255) << 32) | ((bArr[i15] & 255) << 40);
        int i17 = i10 + 7;
        this.f39576b = i17;
        this.f39576b = i10 + 8;
        return ((bArr[i17] & 255) << 56) | j12 | ((bArr[i16] & 255) << 48);
    }

    public short w() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        this.f39576b = i10 + 2;
        return (short) (((bArr[i11] & 255) << 8) | (bArr[i10] & 255));
    }

    public long x() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        int i12 = i10 + 2;
        this.f39576b = i12;
        int i13 = i10 + 3;
        this.f39576b = i13;
        this.f39576b = i10 + 4;
        return ((bArr[i13] & 255) << 24) | (bArr[i10] & 255) | ((bArr[i11] & 255) << 8) | ((bArr[i12] & 255) << 16);
    }

    public int y() {
        int u10 = u();
        if (u10 >= 0) {
            return u10;
        }
        throw new IllegalStateException("Top bit not zero: " + u10);
    }

    public int z() {
        byte[] bArr = this.f39575a;
        int i10 = this.f39576b;
        int i11 = i10 + 1;
        this.f39576b = i11;
        this.f39576b = i10 + 2;
        return ((bArr[i11] & 255) << 8) | (bArr[i10] & 255);
    }

    public h0(int i10) {
        this.f39575a = new byte[i10];
        this.f39577c = i10;
    }

    public h0(byte[] bArr) {
        this.f39575a = bArr;
        this.f39577c = bArr.length;
    }

    public h0(byte[] bArr, int i10) {
        this.f39575a = bArr;
        this.f39577c = i10;
    }
}
