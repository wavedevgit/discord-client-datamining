package ed;

import oe.s0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y {

    /* renamed from: c  reason: collision with root package name */
    private boolean f22759c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f22760d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f22761e;

    /* renamed from: a  reason: collision with root package name */
    private final s0 f22757a = new s0(0);

    /* renamed from: f  reason: collision with root package name */
    private long f22762f = -9223372036854775807L;

    /* renamed from: g  reason: collision with root package name */
    private long f22763g = -9223372036854775807L;

    /* renamed from: h  reason: collision with root package name */
    private long f22764h = -9223372036854775807L;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22758b = new oe.h0();

    private static boolean a(byte[] bArr) {
        if ((bArr[0] & 196) != 68 || (bArr[2] & 4) != 4 || (bArr[4] & 4) != 4 || (bArr[5] & 1) != 1 || (bArr[8] & 3) != 3) {
            return false;
        }
        return true;
    }

    private int b(uc.l lVar) {
        this.f22758b.R(w0.f39042f);
        this.f22759c = true;
        lVar.e();
        return 0;
    }

    private int f(byte[] bArr, int i10) {
        return (bArr[i10 + 3] & 255) | ((bArr[i10] & 255) << 24) | ((bArr[i10 + 1] & 255) << 16) | ((bArr[i10 + 2] & 255) << 8);
    }

    private int h(uc.l lVar, uc.y yVar) {
        int min = (int) Math.min(20000L, lVar.getLength());
        long j10 = 0;
        if (lVar.getPosition() != j10) {
            yVar.f50714a = j10;
            return 1;
        }
        this.f22758b.Q(min);
        lVar.e();
        lVar.n(this.f22758b.e(), 0, min);
        this.f22762f = i(this.f22758b);
        this.f22760d = true;
        return 0;
    }

    private long i(oe.h0 h0Var) {
        int g10 = h0Var.g();
        for (int f10 = h0Var.f(); f10 < g10 - 3; f10++) {
            if (f(h0Var.e(), f10) == 442) {
                h0Var.U(f10 + 4);
                long l10 = l(h0Var);
                if (l10 != -9223372036854775807L) {
                    return l10;
                }
            }
        }
        return -9223372036854775807L;
    }

    private int j(uc.l lVar, uc.y yVar) {
        long length = lVar.getLength();
        int min = (int) Math.min(20000L, length);
        long j10 = length - min;
        if (lVar.getPosition() != j10) {
            yVar.f50714a = j10;
            return 1;
        }
        this.f22758b.Q(min);
        lVar.e();
        lVar.n(this.f22758b.e(), 0, min);
        this.f22763g = k(this.f22758b);
        this.f22761e = true;
        return 0;
    }

    private long k(oe.h0 h0Var) {
        int f10 = h0Var.f();
        for (int g10 = h0Var.g() - 4; g10 >= f10; g10--) {
            if (f(h0Var.e(), g10) == 442) {
                h0Var.U(g10 + 4);
                long l10 = l(h0Var);
                if (l10 != -9223372036854775807L) {
                    return l10;
                }
            }
        }
        return -9223372036854775807L;
    }

    public static long l(oe.h0 h0Var) {
        int f10 = h0Var.f();
        if (h0Var.a() < 9) {
            return -9223372036854775807L;
        }
        byte[] bArr = new byte[9];
        h0Var.l(bArr, 0, 9);
        h0Var.U(f10);
        if (!a(bArr)) {
            return -9223372036854775807L;
        }
        return m(bArr);
    }

    private static long m(byte[] bArr) {
        byte b10 = bArr[0];
        byte b11 = bArr[2];
        return (((b10 & 56) >> 3) << 30) | ((b10 & 3) << 28) | ((bArr[1] & 255) << 20) | (((b11 & 248) >> 3) << 15) | ((b11 & 3) << 13) | ((bArr[3] & 255) << 5) | ((bArr[4] & 248) >> 3);
    }

    public long c() {
        return this.f22764h;
    }

    public s0 d() {
        return this.f22757a;
    }

    public boolean e() {
        return this.f22759c;
    }

    public int g(uc.l lVar, uc.y yVar) {
        if (!this.f22761e) {
            return j(lVar, yVar);
        }
        if (this.f22763g == -9223372036854775807L) {
            return b(lVar);
        }
        if (!this.f22760d) {
            return h(lVar, yVar);
        }
        long j10 = this.f22762f;
        if (j10 == -9223372036854775807L) {
            return b(lVar);
        }
        long b10 = this.f22757a.b(this.f22763g) - this.f22757a.b(j10);
        this.f22764h = b10;
        if (b10 < 0) {
            oe.y.i("PsDurationReader", "Invalid duration: " + this.f22764h + ". Using TIME_UNSET instead.");
            this.f22764h = -9223372036854775807L;
        }
        return b(lVar);
    }
}
