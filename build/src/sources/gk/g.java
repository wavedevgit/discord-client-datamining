package gk;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import kotlin.jvm.internal.ByteCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* renamed from: f  reason: collision with root package name */
    private static volatile int f25218f = 100;

    /* renamed from: a  reason: collision with root package name */
    int f25219a;

    /* renamed from: b  reason: collision with root package name */
    int f25220b;

    /* renamed from: c  reason: collision with root package name */
    int f25221c;

    /* renamed from: d  reason: collision with root package name */
    h f25222d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f25223e;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g {

        /* renamed from: g  reason: collision with root package name */
        private final byte[] f25224g;

        /* renamed from: h  reason: collision with root package name */
        private final boolean f25225h;

        /* renamed from: i  reason: collision with root package name */
        private int f25226i;

        /* renamed from: j  reason: collision with root package name */
        private int f25227j;

        /* renamed from: k  reason: collision with root package name */
        private int f25228k;

        /* renamed from: l  reason: collision with root package name */
        private int f25229l;

        /* renamed from: m  reason: collision with root package name */
        private int f25230m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f25231n;

        /* renamed from: o  reason: collision with root package name */
        private int f25232o;

        private void N() {
            int i10 = this.f25226i + this.f25227j;
            this.f25226i = i10;
            int i11 = i10 - this.f25229l;
            int i12 = this.f25232o;
            if (i11 > i12) {
                int i13 = i11 - i12;
                this.f25227j = i13;
                this.f25226i = i10 - i13;
                return;
            }
            this.f25227j = 0;
        }

        private void Q() {
            if (this.f25226i - this.f25228k >= 10) {
                R();
            } else {
                S();
            }
        }

        private void R() {
            for (int i10 = 0; i10 < 10; i10++) {
                byte[] bArr = this.f25224g;
                int i11 = this.f25228k;
                this.f25228k = i11 + 1;
                if (bArr[i11] >= 0) {
                    return;
                }
            }
            throw v.f();
        }

        private void S() {
            for (int i10 = 0; i10 < 10; i10++) {
                if (G() >= 0) {
                    return;
                }
            }
            throw v.f();
        }

        @Override // gk.g
        public String A() {
            int K = K();
            if (K > 0) {
                int i10 = this.f25226i;
                int i11 = this.f25228k;
                if (K <= i10 - i11) {
                    String str = new String(this.f25224g, i11, K, u.f25364b);
                    this.f25228k += K;
                    return str;
                }
            }
            if (K == 0) {
                return "";
            }
            if (K < 0) {
                throw v.g();
            }
            throw v.m();
        }

        @Override // gk.g
        public String B() {
            int K = K();
            if (K > 0) {
                int i10 = this.f25226i;
                int i11 = this.f25228k;
                if (K <= i10 - i11) {
                    String e10 = i1.e(this.f25224g, i11, K);
                    this.f25228k += K;
                    return e10;
                }
            }
            if (K == 0) {
                return "";
            }
            if (K <= 0) {
                throw v.g();
            }
            throw v.m();
        }

        @Override // gk.g
        public int C() {
            if (e()) {
                this.f25230m = 0;
                return 0;
            }
            int K = K();
            this.f25230m = K;
            if (j1.a(K) != 0) {
                return this.f25230m;
            }
            throw v.c();
        }

        @Override // gk.g
        public int D() {
            return K();
        }

        @Override // gk.g
        public long E() {
            return L();
        }

        @Override // gk.g
        public boolean F(int i10) {
            int b10 = j1.b(i10);
            if (b10 != 0) {
                if (b10 != 1) {
                    if (b10 != 2) {
                        if (b10 != 3) {
                            if (b10 != 4) {
                                if (b10 == 5) {
                                    P(4);
                                    return true;
                                }
                                throw v.e();
                            }
                            return false;
                        }
                        O();
                        a(j1.c(j1.a(i10), 4));
                        return true;
                    }
                    P(K());
                    return true;
                }
                P(8);
                return true;
            }
            Q();
            return true;
        }

        public byte G() {
            int i10 = this.f25228k;
            if (i10 != this.f25226i) {
                byte[] bArr = this.f25224g;
                this.f25228k = i10 + 1;
                return bArr[i10];
            }
            throw v.m();
        }

        public byte[] H(int i10) {
            if (i10 > 0) {
                int i11 = this.f25226i;
                int i12 = this.f25228k;
                if (i10 <= i11 - i12) {
                    int i13 = i10 + i12;
                    this.f25228k = i13;
                    return Arrays.copyOfRange(this.f25224g, i12, i13);
                }
            }
            if (i10 <= 0) {
                if (i10 == 0) {
                    return u.f25366d;
                }
                throw v.g();
            }
            throw v.m();
        }

        public int I() {
            int i10 = this.f25228k;
            if (this.f25226i - i10 >= 4) {
                byte[] bArr = this.f25224g;
                this.f25228k = i10 + 4;
                return ((bArr[i10 + 3] & 255) << 24) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16);
            }
            throw v.m();
        }

        public long J() {
            int i10 = this.f25228k;
            if (this.f25226i - i10 >= 8) {
                byte[] bArr = this.f25224g;
                this.f25228k = i10 + 8;
                return ((bArr[i10 + 7] & 255) << 56) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16) | ((bArr[i10 + 3] & 255) << 24) | ((bArr[i10 + 4] & 255) << 32) | ((bArr[i10 + 5] & 255) << 40) | ((bArr[i10 + 6] & 255) << 48);
            }
            throw v.m();
        }

        public int K() {
            int i10;
            int i11 = this.f25228k;
            int i12 = this.f25226i;
            if (i12 != i11) {
                byte[] bArr = this.f25224g;
                int i13 = i11 + 1;
                byte b10 = bArr[i11];
                if (b10 >= 0) {
                    this.f25228k = i13;
                    return b10;
                } else if (i12 - i13 >= 9) {
                    int i14 = i11 + 2;
                    int i15 = (bArr[i13] << 7) ^ b10;
                    if (i15 < 0) {
                        i10 = i15 ^ (-128);
                    } else {
                        int i16 = i11 + 3;
                        int i17 = (bArr[i14] << 14) ^ i15;
                        if (i17 >= 0) {
                            i10 = i17 ^ 16256;
                        } else {
                            int i18 = i11 + 4;
                            int i19 = i17 ^ (bArr[i16] << 21);
                            if (i19 < 0) {
                                i10 = (-2080896) ^ i19;
                            } else {
                                i16 = i11 + 5;
                                byte b11 = bArr[i18];
                                int i20 = (i19 ^ (b11 << 28)) ^ 266354560;
                                if (b11 < 0) {
                                    i18 = i11 + 6;
                                    if (bArr[i16] < 0) {
                                        i16 = i11 + 7;
                                        if (bArr[i18] < 0) {
                                            i18 = i11 + 8;
                                            if (bArr[i16] < 0) {
                                                i16 = i11 + 9;
                                                if (bArr[i18] < 0) {
                                                    int i21 = i11 + 10;
                                                    if (bArr[i16] >= 0) {
                                                        i14 = i21;
                                                        i10 = i20;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    i10 = i20;
                                }
                                i10 = i20;
                            }
                            i14 = i18;
                        }
                        i14 = i16;
                    }
                    this.f25228k = i14;
                    return i10;
                }
            }
            return (int) M();
        }

        public long L() {
            long j10;
            long j11;
            long j12;
            int i10 = this.f25228k;
            int i11 = this.f25226i;
            if (i11 != i10) {
                byte[] bArr = this.f25224g;
                int i12 = i10 + 1;
                byte b10 = bArr[i10];
                if (b10 >= 0) {
                    this.f25228k = i12;
                    return b10;
                } else if (i11 - i12 >= 9) {
                    int i13 = i10 + 2;
                    int i14 = (bArr[i12] << 7) ^ b10;
                    if (i14 < 0) {
                        j10 = i14 ^ (-128);
                    } else {
                        int i15 = i10 + 3;
                        int i16 = (bArr[i13] << 14) ^ i14;
                        if (i16 >= 0) {
                            j10 = i16 ^ 16256;
                            i13 = i15;
                        } else {
                            int i17 = i10 + 4;
                            int i18 = i16 ^ (bArr[i15] << 21);
                            if (i18 < 0) {
                                i13 = i17;
                                j10 = (-2080896) ^ i18;
                            } else {
                                long j13 = i18;
                                i13 = i10 + 5;
                                long j14 = j13 ^ (bArr[i17] << 28);
                                if (j14 >= 0) {
                                    j12 = 266354560;
                                } else {
                                    int i19 = i10 + 6;
                                    long j15 = j14 ^ (bArr[i13] << 35);
                                    if (j15 < 0) {
                                        j11 = -34093383808L;
                                    } else {
                                        i13 = i10 + 7;
                                        j14 = j15 ^ (bArr[i19] << 42);
                                        if (j14 >= 0) {
                                            j12 = 4363953127296L;
                                        } else {
                                            i19 = i10 + 8;
                                            j15 = j14 ^ (bArr[i13] << 49);
                                            if (j15 < 0) {
                                                j11 = -558586000294016L;
                                            } else {
                                                i13 = i10 + 9;
                                                long j16 = (j15 ^ (bArr[i19] << 56)) ^ 71499008037633920L;
                                                if (j16 < 0) {
                                                    int i20 = i10 + 10;
                                                    if (bArr[i13] >= 0) {
                                                        i13 = i20;
                                                    }
                                                }
                                                j10 = j16;
                                            }
                                        }
                                    }
                                    j10 = j15 ^ j11;
                                    i13 = i19;
                                }
                                j10 = j14 ^ j12;
                            }
                        }
                    }
                    this.f25228k = i13;
                    return j10;
                }
            }
            return M();
        }

        long M() {
            long j10 = 0;
            for (int i10 = 0; i10 < 64; i10 += 7) {
                byte G = G();
                j10 |= (G & ByteCompanionObject.MAX_VALUE) << i10;
                if ((G & ByteCompanionObject.MIN_VALUE) == 0) {
                    return j10;
                }
            }
            throw v.f();
        }

        public void O() {
            int C;
            do {
                C = C();
                if (C == 0) {
                    return;
                }
            } while (F(C));
        }

        public void P(int i10) {
            if (i10 >= 0) {
                int i11 = this.f25226i;
                int i12 = this.f25228k;
                if (i10 <= i11 - i12) {
                    this.f25228k = i12 + i10;
                    return;
                }
            }
            if (i10 < 0) {
                throw v.g();
            }
            throw v.m();
        }

        @Override // gk.g
        public void a(int i10) {
            if (this.f25230m == i10) {
                return;
            }
            throw v.b();
        }

        @Override // gk.g
        public int d() {
            return this.f25228k - this.f25229l;
        }

        @Override // gk.g
        public boolean e() {
            if (this.f25228k == this.f25226i) {
                return true;
            }
            return false;
        }

        @Override // gk.g
        public void k(int i10) {
            this.f25232o = i10;
            N();
        }

        @Override // gk.g
        public int l(int i10) {
            if (i10 >= 0) {
                int d10 = i10 + d();
                if (d10 >= 0) {
                    int i11 = this.f25232o;
                    if (d10 <= i11) {
                        this.f25232o = d10;
                        N();
                        return i11;
                    }
                    throw v.m();
                }
                throw v.h();
            }
            throw v.g();
        }

        @Override // gk.g
        public boolean m() {
            if (L() != 0) {
                return true;
            }
            return false;
        }

        @Override // gk.g
        public f n() {
            f g10;
            int K = K();
            if (K > 0) {
                int i10 = this.f25226i;
                int i11 = this.f25228k;
                if (K <= i10 - i11) {
                    if (this.f25225h && this.f25231n) {
                        g10 = f.x(this.f25224g, i11, K);
                    } else {
                        g10 = f.g(this.f25224g, i11, K);
                    }
                    this.f25228k += K;
                    return g10;
                }
            }
            if (K == 0) {
                return f.f25206e;
            }
            return f.w(H(K));
        }

        @Override // gk.g
        public double o() {
            return Double.longBitsToDouble(J());
        }

        @Override // gk.g
        public int p() {
            return K();
        }

        @Override // gk.g
        public int q() {
            return I();
        }

        @Override // gk.g
        public long r() {
            return J();
        }

        @Override // gk.g
        public float s() {
            return Float.intBitsToFloat(I());
        }

        @Override // gk.g
        public int t() {
            return K();
        }

        @Override // gk.g
        public long u() {
            return L();
        }

        @Override // gk.g
        public int w() {
            return I();
        }

        @Override // gk.g
        public long x() {
            return J();
        }

        @Override // gk.g
        public int y() {
            return g.b(K());
        }

        @Override // gk.g
        public long z() {
            return g.c(L());
        }

        private b(byte[] bArr, int i10, int i11, boolean z10) {
            super();
            this.f25232o = Integer.MAX_VALUE;
            this.f25224g = bArr;
            this.f25226i = i11 + i10;
            this.f25228k = i10;
            this.f25229l = i10;
            this.f25225h = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends g {

        /* renamed from: g  reason: collision with root package name */
        private final InputStream f25233g;

        /* renamed from: h  reason: collision with root package name */
        private final byte[] f25234h;

        /* renamed from: i  reason: collision with root package name */
        private int f25235i;

        /* renamed from: j  reason: collision with root package name */
        private int f25236j;

        /* renamed from: k  reason: collision with root package name */
        private int f25237k;

        /* renamed from: l  reason: collision with root package name */
        private int f25238l;

        /* renamed from: m  reason: collision with root package name */
        private int f25239m;

        /* renamed from: n  reason: collision with root package name */
        private int f25240n;

        private static int G(InputStream inputStream) {
            try {
                return inputStream.available();
            } catch (v e10) {
                e10.j();
                throw e10;
            }
        }

        private static int H(InputStream inputStream, byte[] bArr, int i10, int i11) {
            try {
                return inputStream.read(bArr, i10, i11);
            } catch (v e10) {
                e10.j();
                throw e10;
            }
        }

        private f I(int i10) {
            byte[] L = L(i10);
            if (L != null) {
                return f.f(L);
            }
            int i11 = this.f25237k;
            int i12 = this.f25235i;
            int i13 = i12 - i11;
            this.f25239m += i12;
            this.f25237k = 0;
            this.f25235i = 0;
            List<byte[]> M = M(i10 - i13);
            byte[] bArr = new byte[i10];
            System.arraycopy(this.f25234h, i11, bArr, 0, i13);
            for (byte[] bArr2 : M) {
                System.arraycopy(bArr2, 0, bArr, i13, bArr2.length);
                i13 += bArr2.length;
            }
            return f.w(bArr);
        }

        private byte[] K(int i10, boolean z10) {
            byte[] L = L(i10);
            if (L != null) {
                if (z10) {
                    return (byte[]) L.clone();
                }
                return L;
            }
            int i11 = this.f25237k;
            int i12 = this.f25235i;
            int i13 = i12 - i11;
            this.f25239m += i12;
            this.f25237k = 0;
            this.f25235i = 0;
            List<byte[]> M = M(i10 - i13);
            byte[] bArr = new byte[i10];
            System.arraycopy(this.f25234h, i11, bArr, 0, i13);
            for (byte[] bArr2 : M) {
                System.arraycopy(bArr2, 0, bArr, i13, bArr2.length);
                i13 += bArr2.length;
            }
            return bArr;
        }

        private byte[] L(int i10) {
            if (i10 == 0) {
                return u.f25366d;
            }
            if (i10 >= 0) {
                int i11 = this.f25239m;
                int i12 = this.f25237k;
                int i13 = i11 + i12 + i10;
                if (i13 - this.f25221c <= 0) {
                    int i14 = this.f25240n;
                    if (i13 <= i14) {
                        int i15 = this.f25235i - i12;
                        int i16 = i10 - i15;
                        if (i16 >= 4096 && i16 > G(this.f25233g)) {
                            return null;
                        }
                        byte[] bArr = new byte[i10];
                        System.arraycopy(this.f25234h, this.f25237k, bArr, 0, i15);
                        this.f25239m += this.f25235i;
                        this.f25237k = 0;
                        this.f25235i = 0;
                        while (i15 < i10) {
                            int H = H(this.f25233g, bArr, i15, i10 - i15);
                            if (H != -1) {
                                this.f25239m += H;
                                i15 += H;
                            } else {
                                throw v.m();
                            }
                        }
                        return bArr;
                    }
                    W((i14 - i11) - i12);
                    throw v.m();
                }
                throw v.l();
            }
            throw v.g();
        }

        private List M(int i10) {
            ArrayList arrayList = new ArrayList();
            while (i10 > 0) {
                int min = Math.min(i10, (int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                byte[] bArr = new byte[min];
                int i11 = 0;
                while (i11 < min) {
                    int read = this.f25233g.read(bArr, i11, min - i11);
                    if (read != -1) {
                        this.f25239m += read;
                        i11 += read;
                    } else {
                        throw v.m();
                    }
                }
                i10 -= min;
                arrayList.add(bArr);
            }
            return arrayList;
        }

        private void S() {
            int i10 = this.f25235i + this.f25236j;
            this.f25235i = i10;
            int i11 = this.f25239m + i10;
            int i12 = this.f25240n;
            if (i11 > i12) {
                int i13 = i11 - i12;
                this.f25236j = i13;
                this.f25235i = i10 - i13;
                return;
            }
            this.f25236j = 0;
        }

        private void T(int i10) {
            if (!b0(i10)) {
                if (i10 > (this.f25221c - this.f25239m) - this.f25237k) {
                    throw v.l();
                }
                throw v.m();
            }
        }

        private static long U(InputStream inputStream, long j10) {
            try {
                return inputStream.skip(j10);
            } catch (v e10) {
                e10.j();
                throw e10;
            }
        }

        private void X(int i10) {
            if (i10 >= 0) {
                int i11 = this.f25239m;
                int i12 = this.f25237k;
                int i13 = i11 + i12 + i10;
                int i14 = this.f25240n;
                if (i13 <= i14) {
                    this.f25239m = i11 + i12;
                    int i15 = this.f25235i - i12;
                    this.f25235i = 0;
                    this.f25237k = 0;
                    while (i15 < i10) {
                        try {
                            long j10 = i10 - i15;
                            long U = U(this.f25233g, j10);
                            int i16 = (U > 0L ? 1 : (U == 0L ? 0 : -1));
                            if (i16 >= 0 && U <= j10) {
                                if (i16 == 0) {
                                    break;
                                }
                                i15 += (int) U;
                            } else {
                                throw new IllegalStateException(this.f25233g.getClass() + "#skip returned invalid result: " + U + "\nThe InputStream implementation is buggy.");
                            }
                        } finally {
                            this.f25239m += i15;
                            S();
                        }
                    }
                    if (i15 < i10) {
                        int i17 = this.f25235i;
                        int i18 = i17 - this.f25237k;
                        this.f25237k = i17;
                        T(1);
                        while (true) {
                            int i19 = i10 - i18;
                            int i20 = this.f25235i;
                            if (i19 > i20) {
                                i18 += i20;
                                this.f25237k = i20;
                                T(1);
                            } else {
                                this.f25237k = i19;
                                return;
                            }
                        }
                    }
                } else {
                    W((i14 - i11) - i12);
                    throw v.m();
                }
            } else {
                throw v.g();
            }
        }

        private void Y() {
            if (this.f25235i - this.f25237k >= 10) {
                Z();
            } else {
                a0();
            }
        }

        private void Z() {
            for (int i10 = 0; i10 < 10; i10++) {
                byte[] bArr = this.f25234h;
                int i11 = this.f25237k;
                this.f25237k = i11 + 1;
                if (bArr[i11] >= 0) {
                    return;
                }
            }
            throw v.f();
        }

        private void a0() {
            for (int i10 = 0; i10 < 10; i10++) {
                if (J() >= 0) {
                    return;
                }
            }
            throw v.f();
        }

        private boolean b0(int i10) {
            int i11 = this.f25237k;
            int i12 = i11 + i10;
            int i13 = this.f25235i;
            if (i12 > i13) {
                int i14 = this.f25221c;
                int i15 = this.f25239m;
                if (i10 > (i14 - i15) - i11 || i15 + i11 + i10 > this.f25240n) {
                    return false;
                }
                if (i11 > 0) {
                    if (i13 > i11) {
                        byte[] bArr = this.f25234h;
                        System.arraycopy(bArr, i11, bArr, 0, i13 - i11);
                    }
                    this.f25239m += i11;
                    this.f25235i -= i11;
                    this.f25237k = 0;
                }
                InputStream inputStream = this.f25233g;
                byte[] bArr2 = this.f25234h;
                int i16 = this.f25235i;
                int H = H(inputStream, bArr2, i16, Math.min(bArr2.length - i16, (this.f25221c - this.f25239m) - i16));
                if (H != 0 && H >= -1 && H <= this.f25234h.length) {
                    if (H <= 0) {
                        return false;
                    }
                    this.f25235i += H;
                    S();
                    if (this.f25235i >= i10) {
                        return true;
                    }
                    return b0(i10);
                }
                throw new IllegalStateException(this.f25233g.getClass() + "#read(byte[]) returned invalid result: " + H + "\nThe InputStream implementation is buggy.");
            }
            throw new IllegalStateException("refillBuffer() called when " + i10 + " bytes were already available in buffer");
        }

        @Override // gk.g
        public String A() {
            int P = P();
            if (P > 0) {
                int i10 = this.f25235i;
                int i11 = this.f25237k;
                if (P <= i10 - i11) {
                    String str = new String(this.f25234h, i11, P, u.f25364b);
                    this.f25237k += P;
                    return str;
                }
            }
            if (P == 0) {
                return "";
            }
            if (P <= this.f25235i) {
                T(P);
                String str2 = new String(this.f25234h, this.f25237k, P, u.f25364b);
                this.f25237k += P;
                return str2;
            }
            return new String(K(P, false), u.f25364b);
        }

        @Override // gk.g
        public String B() {
            byte[] K;
            int P = P();
            int i10 = this.f25237k;
            int i11 = this.f25235i;
            if (P <= i11 - i10 && P > 0) {
                K = this.f25234h;
                this.f25237k = i10 + P;
            } else if (P == 0) {
                return "";
            } else {
                i10 = 0;
                if (P <= i11) {
                    T(P);
                    K = this.f25234h;
                    this.f25237k = P;
                } else {
                    K = K(P, false);
                }
            }
            return i1.e(K, i10, P);
        }

        @Override // gk.g
        public int C() {
            if (e()) {
                this.f25238l = 0;
                return 0;
            }
            int P = P();
            this.f25238l = P;
            if (j1.a(P) != 0) {
                return this.f25238l;
            }
            throw v.c();
        }

        @Override // gk.g
        public int D() {
            return P();
        }

        @Override // gk.g
        public long E() {
            return Q();
        }

        @Override // gk.g
        public boolean F(int i10) {
            int b10 = j1.b(i10);
            if (b10 != 0) {
                if (b10 != 1) {
                    if (b10 != 2) {
                        if (b10 != 3) {
                            if (b10 != 4) {
                                if (b10 == 5) {
                                    W(4);
                                    return true;
                                }
                                throw v.e();
                            }
                            return false;
                        }
                        V();
                        a(j1.c(j1.a(i10), 4));
                        return true;
                    }
                    W(P());
                    return true;
                }
                W(8);
                return true;
            }
            Y();
            return true;
        }

        public byte J() {
            if (this.f25237k == this.f25235i) {
                T(1);
            }
            byte[] bArr = this.f25234h;
            int i10 = this.f25237k;
            this.f25237k = i10 + 1;
            return bArr[i10];
        }

        public int N() {
            int i10 = this.f25237k;
            if (this.f25235i - i10 < 4) {
                T(4);
                i10 = this.f25237k;
            }
            byte[] bArr = this.f25234h;
            this.f25237k = i10 + 4;
            return ((bArr[i10 + 3] & 255) << 24) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16);
        }

        public long O() {
            int i10 = this.f25237k;
            if (this.f25235i - i10 < 8) {
                T(8);
                i10 = this.f25237k;
            }
            byte[] bArr = this.f25234h;
            this.f25237k = i10 + 8;
            return ((bArr[i10 + 7] & 255) << 56) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16) | ((bArr[i10 + 3] & 255) << 24) | ((bArr[i10 + 4] & 255) << 32) | ((bArr[i10 + 5] & 255) << 40) | ((bArr[i10 + 6] & 255) << 48);
        }

        public int P() {
            int i10;
            int i11 = this.f25237k;
            int i12 = this.f25235i;
            if (i12 != i11) {
                byte[] bArr = this.f25234h;
                int i13 = i11 + 1;
                byte b10 = bArr[i11];
                if (b10 >= 0) {
                    this.f25237k = i13;
                    return b10;
                } else if (i12 - i13 >= 9) {
                    int i14 = i11 + 2;
                    int i15 = (bArr[i13] << 7) ^ b10;
                    if (i15 < 0) {
                        i10 = i15 ^ (-128);
                    } else {
                        int i16 = i11 + 3;
                        int i17 = (bArr[i14] << 14) ^ i15;
                        if (i17 >= 0) {
                            i10 = i17 ^ 16256;
                        } else {
                            int i18 = i11 + 4;
                            int i19 = i17 ^ (bArr[i16] << 21);
                            if (i19 < 0) {
                                i10 = (-2080896) ^ i19;
                            } else {
                                i16 = i11 + 5;
                                byte b11 = bArr[i18];
                                int i20 = (i19 ^ (b11 << 28)) ^ 266354560;
                                if (b11 < 0) {
                                    i18 = i11 + 6;
                                    if (bArr[i16] < 0) {
                                        i16 = i11 + 7;
                                        if (bArr[i18] < 0) {
                                            i18 = i11 + 8;
                                            if (bArr[i16] < 0) {
                                                i16 = i11 + 9;
                                                if (bArr[i18] < 0) {
                                                    int i21 = i11 + 10;
                                                    if (bArr[i16] >= 0) {
                                                        i14 = i21;
                                                        i10 = i20;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    i10 = i20;
                                }
                                i10 = i20;
                            }
                            i14 = i18;
                        }
                        i14 = i16;
                    }
                    this.f25237k = i14;
                    return i10;
                }
            }
            return (int) R();
        }

        public long Q() {
            long j10;
            long j11;
            long j12;
            int i10 = this.f25237k;
            int i11 = this.f25235i;
            if (i11 != i10) {
                byte[] bArr = this.f25234h;
                int i12 = i10 + 1;
                byte b10 = bArr[i10];
                if (b10 >= 0) {
                    this.f25237k = i12;
                    return b10;
                } else if (i11 - i12 >= 9) {
                    int i13 = i10 + 2;
                    int i14 = (bArr[i12] << 7) ^ b10;
                    if (i14 < 0) {
                        j10 = i14 ^ (-128);
                    } else {
                        int i15 = i10 + 3;
                        int i16 = (bArr[i13] << 14) ^ i14;
                        if (i16 >= 0) {
                            j10 = i16 ^ 16256;
                            i13 = i15;
                        } else {
                            int i17 = i10 + 4;
                            int i18 = i16 ^ (bArr[i15] << 21);
                            if (i18 < 0) {
                                i13 = i17;
                                j10 = (-2080896) ^ i18;
                            } else {
                                long j13 = i18;
                                i13 = i10 + 5;
                                long j14 = j13 ^ (bArr[i17] << 28);
                                if (j14 >= 0) {
                                    j12 = 266354560;
                                } else {
                                    int i19 = i10 + 6;
                                    long j15 = j14 ^ (bArr[i13] << 35);
                                    if (j15 < 0) {
                                        j11 = -34093383808L;
                                    } else {
                                        i13 = i10 + 7;
                                        j14 = j15 ^ (bArr[i19] << 42);
                                        if (j14 >= 0) {
                                            j12 = 4363953127296L;
                                        } else {
                                            i19 = i10 + 8;
                                            j15 = j14 ^ (bArr[i13] << 49);
                                            if (j15 < 0) {
                                                j11 = -558586000294016L;
                                            } else {
                                                i13 = i10 + 9;
                                                long j16 = (j15 ^ (bArr[i19] << 56)) ^ 71499008037633920L;
                                                if (j16 < 0) {
                                                    int i20 = i10 + 10;
                                                    if (bArr[i13] >= 0) {
                                                        i13 = i20;
                                                    }
                                                }
                                                j10 = j16;
                                            }
                                        }
                                    }
                                    j10 = j15 ^ j11;
                                    i13 = i19;
                                }
                                j10 = j14 ^ j12;
                            }
                        }
                    }
                    this.f25237k = i13;
                    return j10;
                }
            }
            return R();
        }

        long R() {
            long j10 = 0;
            for (int i10 = 0; i10 < 64; i10 += 7) {
                byte J = J();
                j10 |= (J & ByteCompanionObject.MAX_VALUE) << i10;
                if ((J & ByteCompanionObject.MIN_VALUE) == 0) {
                    return j10;
                }
            }
            throw v.f();
        }

        public void V() {
            int C;
            do {
                C = C();
                if (C == 0) {
                    return;
                }
            } while (F(C));
        }

        public void W(int i10) {
            int i11 = this.f25235i;
            int i12 = this.f25237k;
            if (i10 <= i11 - i12 && i10 >= 0) {
                this.f25237k = i12 + i10;
            } else {
                X(i10);
            }
        }

        @Override // gk.g
        public void a(int i10) {
            if (this.f25238l == i10) {
                return;
            }
            throw v.b();
        }

        @Override // gk.g
        public int d() {
            return this.f25239m + this.f25237k;
        }

        @Override // gk.g
        public boolean e() {
            if (this.f25237k == this.f25235i && !b0(1)) {
                return true;
            }
            return false;
        }

        @Override // gk.g
        public void k(int i10) {
            this.f25240n = i10;
            S();
        }

        @Override // gk.g
        public int l(int i10) {
            if (i10 >= 0) {
                int i11 = i10 + this.f25239m + this.f25237k;
                int i12 = this.f25240n;
                if (i11 <= i12) {
                    this.f25240n = i11;
                    S();
                    return i12;
                }
                throw v.m();
            }
            throw v.g();
        }

        @Override // gk.g
        public boolean m() {
            if (Q() != 0) {
                return true;
            }
            return false;
        }

        @Override // gk.g
        public f n() {
            int P = P();
            int i10 = this.f25235i;
            int i11 = this.f25237k;
            if (P <= i10 - i11 && P > 0) {
                f g10 = f.g(this.f25234h, i11, P);
                this.f25237k += P;
                return g10;
            } else if (P == 0) {
                return f.f25206e;
            } else {
                return I(P);
            }
        }

        @Override // gk.g
        public double o() {
            return Double.longBitsToDouble(O());
        }

        @Override // gk.g
        public int p() {
            return P();
        }

        @Override // gk.g
        public int q() {
            return N();
        }

        @Override // gk.g
        public long r() {
            return O();
        }

        @Override // gk.g
        public float s() {
            return Float.intBitsToFloat(N());
        }

        @Override // gk.g
        public int t() {
            return P();
        }

        @Override // gk.g
        public long u() {
            return Q();
        }

        @Override // gk.g
        public int w() {
            return N();
        }

        @Override // gk.g
        public long x() {
            return O();
        }

        @Override // gk.g
        public int y() {
            return g.b(P());
        }

        @Override // gk.g
        public long z() {
            return g.c(Q());
        }

        private c(InputStream inputStream, int i10) {
            super();
            this.f25240n = Integer.MAX_VALUE;
            u.b(inputStream, "input");
            this.f25233g = inputStream;
            this.f25234h = new byte[i10];
            this.f25235i = 0;
            this.f25237k = 0;
            this.f25239m = 0;
        }
    }

    public static int b(int i10) {
        return (-(i10 & 1)) ^ (i10 >>> 1);
    }

    public static long c(long j10) {
        return (-(j10 & 1)) ^ (j10 >>> 1);
    }

    public static g f(InputStream inputStream) {
        return g(inputStream, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
    }

    public static g g(InputStream inputStream, int i10) {
        if (i10 > 0) {
            if (inputStream == null) {
                return h(u.f25366d);
            }
            return new c(inputStream, i10);
        }
        throw new IllegalArgumentException("bufferSize must be > 0");
    }

    public static g h(byte[] bArr) {
        return i(bArr, 0, bArr.length);
    }

    public static g i(byte[] bArr, int i10, int i11) {
        return j(bArr, i10, i11, false);
    }

    static g j(byte[] bArr, int i10, int i11, boolean z10) {
        b bVar = new b(bArr, i10, i11, z10);
        try {
            bVar.l(i11);
            return bVar;
        } catch (v e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public static int v(int i10, InputStream inputStream) {
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            return i10;
        }
        int i11 = i10 & 127;
        int i12 = 7;
        while (i12 < 32) {
            int read = inputStream.read();
            if (read != -1) {
                i11 |= (read & 127) << i12;
                if ((read & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                    return i11;
                }
                i12 += 7;
            } else {
                throw v.m();
            }
        }
        while (i12 < 64) {
            int read2 = inputStream.read();
            if (read2 != -1) {
                if ((read2 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                    return i11;
                }
                i12 += 7;
            } else {
                throw v.m();
            }
        }
        throw v.f();
    }

    public abstract String A();

    public abstract String B();

    public abstract int C();

    public abstract int D();

    public abstract long E();

    public abstract boolean F(int i10);

    public abstract void a(int i10);

    public abstract int d();

    public abstract boolean e();

    public abstract void k(int i10);

    public abstract int l(int i10);

    public abstract boolean m();

    public abstract f n();

    public abstract double o();

    public abstract int p();

    public abstract int q();

    public abstract long r();

    public abstract float s();

    public abstract int t();

    public abstract long u();

    public abstract int w();

    public abstract long x();

    public abstract int y();

    public abstract long z();

    private g() {
        this.f25220b = f25218f;
        this.f25221c = Integer.MAX_VALUE;
        this.f25223e = false;
    }
}
