package androidx.datastore.preferences.protobuf;

import androidx.recyclerview.widget.RecyclerView;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import kotlin.jvm.internal.ByteCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    int f3669a;

    /* renamed from: b  reason: collision with root package name */
    int f3670b;

    /* renamed from: c  reason: collision with root package name */
    int f3671c;

    /* renamed from: d  reason: collision with root package name */
    i f3672d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f3673e;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends h {

        /* renamed from: f  reason: collision with root package name */
        private final byte[] f3674f;

        /* renamed from: g  reason: collision with root package name */
        private final boolean f3675g;

        /* renamed from: h  reason: collision with root package name */
        private int f3676h;

        /* renamed from: i  reason: collision with root package name */
        private int f3677i;

        /* renamed from: j  reason: collision with root package name */
        private int f3678j;

        /* renamed from: k  reason: collision with root package name */
        private int f3679k;

        /* renamed from: l  reason: collision with root package name */
        private int f3680l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f3681m;

        /* renamed from: n  reason: collision with root package name */
        private int f3682n;

        private void M() {
            int i10 = this.f3676h + this.f3677i;
            this.f3676h = i10;
            int i11 = i10 - this.f3679k;
            int i12 = this.f3682n;
            if (i11 > i12) {
                int i13 = i11 - i12;
                this.f3677i = i13;
                this.f3676h = i10 - i13;
                return;
            }
            this.f3677i = 0;
        }

        private void P() {
            if (this.f3676h - this.f3678j >= 10) {
                Q();
            } else {
                R();
            }
        }

        private void Q() {
            for (int i10 = 0; i10 < 10; i10++) {
                byte[] bArr = this.f3674f;
                int i11 = this.f3678j;
                this.f3678j = i11 + 1;
                if (bArr[i11] >= 0) {
                    return;
                }
            }
            throw z.e();
        }

        private void R() {
            for (int i10 = 0; i10 < 10; i10++) {
                if (F() >= 0) {
                    return;
                }
            }
            throw z.e();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public String A() {
            int J = J();
            if (J > 0) {
                int i10 = this.f3676h;
                int i11 = this.f3678j;
                if (J <= i10 - i11) {
                    String e10 = p1.e(this.f3674f, i11, J);
                    this.f3678j += J;
                    return e10;
                }
            }
            if (J == 0) {
                return "";
            }
            if (J <= 0) {
                throw z.f();
            }
            throw z.k();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int B() {
            if (e()) {
                this.f3680l = 0;
                return 0;
            }
            int J = J();
            this.f3680l = J;
            if (q1.a(J) != 0) {
                return this.f3680l;
            }
            throw z.b();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int C() {
            return J();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long D() {
            return K();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public boolean E(int i10) {
            int b10 = q1.b(i10);
            if (b10 != 0) {
                if (b10 != 1) {
                    if (b10 != 2) {
                        if (b10 != 3) {
                            if (b10 != 4) {
                                if (b10 == 5) {
                                    O(4);
                                    return true;
                                }
                                throw z.d();
                            }
                            return false;
                        }
                        N();
                        a(q1.c(q1.a(i10), 4));
                        return true;
                    }
                    O(J());
                    return true;
                }
                O(8);
                return true;
            }
            P();
            return true;
        }

        public byte F() {
            int i10 = this.f3678j;
            if (i10 != this.f3676h) {
                byte[] bArr = this.f3674f;
                this.f3678j = i10 + 1;
                return bArr[i10];
            }
            throw z.k();
        }

        public byte[] G(int i10) {
            if (i10 > 0) {
                int i11 = this.f3676h;
                int i12 = this.f3678j;
                if (i10 <= i11 - i12) {
                    int i13 = i10 + i12;
                    this.f3678j = i13;
                    return Arrays.copyOfRange(this.f3674f, i12, i13);
                }
            }
            if (i10 <= 0) {
                if (i10 == 0) {
                    return y.f3888c;
                }
                throw z.f();
            }
            throw z.k();
        }

        public int H() {
            int i10 = this.f3678j;
            if (this.f3676h - i10 >= 4) {
                byte[] bArr = this.f3674f;
                this.f3678j = i10 + 4;
                return ((bArr[i10 + 3] & 255) << 24) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16);
            }
            throw z.k();
        }

        public long I() {
            int i10 = this.f3678j;
            if (this.f3676h - i10 >= 8) {
                byte[] bArr = this.f3674f;
                this.f3678j = i10 + 8;
                return ((bArr[i10 + 7] & 255) << 56) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16) | ((bArr[i10 + 3] & 255) << 24) | ((bArr[i10 + 4] & 255) << 32) | ((bArr[i10 + 5] & 255) << 40) | ((bArr[i10 + 6] & 255) << 48);
            }
            throw z.k();
        }

        public int J() {
            int i10;
            int i11 = this.f3678j;
            int i12 = this.f3676h;
            if (i12 != i11) {
                byte[] bArr = this.f3674f;
                int i13 = i11 + 1;
                byte b10 = bArr[i11];
                if (b10 >= 0) {
                    this.f3678j = i13;
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
                    this.f3678j = i14;
                    return i10;
                }
            }
            return (int) L();
        }

        public long K() {
            long j10;
            long j11;
            long j12;
            int i10 = this.f3678j;
            int i11 = this.f3676h;
            if (i11 != i10) {
                byte[] bArr = this.f3674f;
                int i12 = i10 + 1;
                byte b10 = bArr[i10];
                if (b10 >= 0) {
                    this.f3678j = i12;
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
                    this.f3678j = i13;
                    return j10;
                }
            }
            return L();
        }

        long L() {
            long j10 = 0;
            for (int i10 = 0; i10 < 64; i10 += 7) {
                byte F = F();
                j10 |= (F & ByteCompanionObject.MAX_VALUE) << i10;
                if ((F & ByteCompanionObject.MIN_VALUE) == 0) {
                    return j10;
                }
            }
            throw z.e();
        }

        public void N() {
            int B;
            do {
                B = B();
                if (B == 0) {
                    return;
                }
            } while (E(B));
        }

        public void O(int i10) {
            if (i10 >= 0) {
                int i11 = this.f3676h;
                int i12 = this.f3678j;
                if (i10 <= i11 - i12) {
                    this.f3678j = i12 + i10;
                    return;
                }
            }
            if (i10 < 0) {
                throw z.f();
            }
            throw z.k();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public void a(int i10) {
            if (this.f3680l == i10) {
                return;
            }
            throw z.a();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int d() {
            return this.f3678j - this.f3679k;
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public boolean e() {
            if (this.f3678j == this.f3676h) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public void k(int i10) {
            this.f3682n = i10;
            M();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int l(int i10) {
            if (i10 >= 0) {
                int d10 = i10 + d();
                int i11 = this.f3682n;
                if (d10 <= i11) {
                    this.f3682n = d10;
                    M();
                    return i11;
                }
                throw z.k();
            }
            throw z.f();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public boolean m() {
            if (K() != 0) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public g n() {
            g g10;
            int J = J();
            if (J > 0) {
                int i10 = this.f3676h;
                int i11 = this.f3678j;
                if (J <= i10 - i11) {
                    if (this.f3675g && this.f3681m) {
                        g10 = g.u(this.f3674f, i11, J);
                    } else {
                        g10 = g.g(this.f3674f, i11, J);
                    }
                    this.f3678j += J;
                    return g10;
                }
            }
            if (J == 0) {
                return g.f3635e;
            }
            return g.t(G(J));
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public double o() {
            return Double.longBitsToDouble(I());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int p() {
            return J();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int q() {
            return H();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long r() {
            return I();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public float s() {
            return Float.intBitsToFloat(H());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int t() {
            return J();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long u() {
            return K();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int v() {
            return H();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long w() {
            return I();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int x() {
            return h.b(J());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long y() {
            return h.c(K());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public String z() {
            int J = J();
            if (J > 0) {
                int i10 = this.f3676h;
                int i11 = this.f3678j;
                if (J <= i10 - i11) {
                    String str = new String(this.f3674f, i11, J, y.f3886a);
                    this.f3678j += J;
                    return str;
                }
            }
            if (J == 0) {
                return "";
            }
            if (J < 0) {
                throw z.f();
            }
            throw z.k();
        }

        private b(byte[] bArr, int i10, int i11, boolean z10) {
            super();
            this.f3682n = Integer.MAX_VALUE;
            this.f3674f = bArr;
            this.f3676h = i11 + i10;
            this.f3678j = i10;
            this.f3679k = i10;
            this.f3675g = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends h {

        /* renamed from: f  reason: collision with root package name */
        private final InputStream f3683f;

        /* renamed from: g  reason: collision with root package name */
        private final byte[] f3684g;

        /* renamed from: h  reason: collision with root package name */
        private int f3685h;

        /* renamed from: i  reason: collision with root package name */
        private int f3686i;

        /* renamed from: j  reason: collision with root package name */
        private int f3687j;

        /* renamed from: k  reason: collision with root package name */
        private int f3688k;

        /* renamed from: l  reason: collision with root package name */
        private int f3689l;

        /* renamed from: m  reason: collision with root package name */
        private int f3690m;

        private g F(int i10) {
            byte[] I = I(i10);
            if (I != null) {
                return g.f(I);
            }
            int i11 = this.f3687j;
            int i12 = this.f3685h;
            int i13 = i12 - i11;
            this.f3689l += i12;
            this.f3687j = 0;
            this.f3685h = 0;
            List<byte[]> J = J(i10 - i13);
            byte[] bArr = new byte[i10];
            System.arraycopy(this.f3684g, i11, bArr, 0, i13);
            for (byte[] bArr2 : J) {
                System.arraycopy(bArr2, 0, bArr, i13, bArr2.length);
                i13 += bArr2.length;
            }
            return g.t(bArr);
        }

        private byte[] H(int i10, boolean z10) {
            byte[] I = I(i10);
            if (I != null) {
                if (z10) {
                    return (byte[]) I.clone();
                }
                return I;
            }
            int i11 = this.f3687j;
            int i12 = this.f3685h;
            int i13 = i12 - i11;
            this.f3689l += i12;
            this.f3687j = 0;
            this.f3685h = 0;
            List<byte[]> J = J(i10 - i13);
            byte[] bArr = new byte[i10];
            System.arraycopy(this.f3684g, i11, bArr, 0, i13);
            for (byte[] bArr2 : J) {
                System.arraycopy(bArr2, 0, bArr, i13, bArr2.length);
                i13 += bArr2.length;
            }
            return bArr;
        }

        private byte[] I(int i10) {
            if (i10 == 0) {
                return y.f3888c;
            }
            if (i10 >= 0) {
                int i11 = this.f3689l;
                int i12 = this.f3687j;
                int i13 = i11 + i12 + i10;
                if (i13 - this.f3671c <= 0) {
                    int i14 = this.f3690m;
                    if (i13 <= i14) {
                        int i15 = this.f3685h - i12;
                        int i16 = i10 - i15;
                        if (i16 >= 4096 && i16 > this.f3683f.available()) {
                            return null;
                        }
                        byte[] bArr = new byte[i10];
                        System.arraycopy(this.f3684g, this.f3687j, bArr, 0, i15);
                        this.f3689l += this.f3685h;
                        this.f3687j = 0;
                        this.f3685h = 0;
                        while (i15 < i10) {
                            int read = this.f3683f.read(bArr, i15, i10 - i15);
                            if (read != -1) {
                                this.f3689l += read;
                                i15 += read;
                            } else {
                                throw z.k();
                            }
                        }
                        return bArr;
                    }
                    S((i14 - i11) - i12);
                    throw z.k();
                }
                throw z.j();
            }
            throw z.f();
        }

        private List J(int i10) {
            ArrayList arrayList = new ArrayList();
            while (i10 > 0) {
                int min = Math.min(i10, (int) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
                byte[] bArr = new byte[min];
                int i11 = 0;
                while (i11 < min) {
                    int read = this.f3683f.read(bArr, i11, min - i11);
                    if (read != -1) {
                        this.f3689l += read;
                        i11 += read;
                    } else {
                        throw z.k();
                    }
                }
                i10 -= min;
                arrayList.add(bArr);
            }
            return arrayList;
        }

        private void P() {
            int i10 = this.f3685h + this.f3686i;
            this.f3685h = i10;
            int i11 = this.f3689l + i10;
            int i12 = this.f3690m;
            if (i11 > i12) {
                int i13 = i11 - i12;
                this.f3686i = i13;
                this.f3685h = i10 - i13;
                return;
            }
            this.f3686i = 0;
        }

        private void Q(int i10) {
            if (!X(i10)) {
                if (i10 > (this.f3671c - this.f3689l) - this.f3687j) {
                    throw z.j();
                }
                throw z.k();
            }
        }

        private void T(int i10) {
            if (i10 >= 0) {
                int i11 = this.f3689l;
                int i12 = this.f3687j;
                int i13 = i11 + i12 + i10;
                int i14 = this.f3690m;
                if (i13 <= i14) {
                    this.f3689l = i11 + i12;
                    int i15 = this.f3685h - i12;
                    this.f3685h = 0;
                    this.f3687j = 0;
                    while (i15 < i10) {
                        try {
                            long j10 = i10 - i15;
                            long skip = this.f3683f.skip(j10);
                            int i16 = (skip > 0L ? 1 : (skip == 0L ? 0 : -1));
                            if (i16 >= 0 && skip <= j10) {
                                if (i16 == 0) {
                                    break;
                                }
                                i15 += (int) skip;
                            } else {
                                throw new IllegalStateException(this.f3683f.getClass() + "#skip returned invalid result: " + skip + "\nThe InputStream implementation is buggy.");
                            }
                        } finally {
                            this.f3689l += i15;
                            P();
                        }
                    }
                    if (i15 < i10) {
                        int i17 = this.f3685h;
                        int i18 = i17 - this.f3687j;
                        this.f3687j = i17;
                        Q(1);
                        while (true) {
                            int i19 = i10 - i18;
                            int i20 = this.f3685h;
                            if (i19 > i20) {
                                i18 += i20;
                                this.f3687j = i20;
                                Q(1);
                            } else {
                                this.f3687j = i19;
                                return;
                            }
                        }
                    }
                } else {
                    S((i14 - i11) - i12);
                    throw z.k();
                }
            } else {
                throw z.f();
            }
        }

        private void U() {
            if (this.f3685h - this.f3687j >= 10) {
                V();
            } else {
                W();
            }
        }

        private void V() {
            for (int i10 = 0; i10 < 10; i10++) {
                byte[] bArr = this.f3684g;
                int i11 = this.f3687j;
                this.f3687j = i11 + 1;
                if (bArr[i11] >= 0) {
                    return;
                }
            }
            throw z.e();
        }

        private void W() {
            for (int i10 = 0; i10 < 10; i10++) {
                if (G() >= 0) {
                    return;
                }
            }
            throw z.e();
        }

        private boolean X(int i10) {
            int i11 = this.f3687j;
            int i12 = i11 + i10;
            int i13 = this.f3685h;
            if (i12 > i13) {
                int i14 = this.f3671c;
                int i15 = this.f3689l;
                if (i10 > (i14 - i15) - i11 || i15 + i11 + i10 > this.f3690m) {
                    return false;
                }
                if (i11 > 0) {
                    if (i13 > i11) {
                        byte[] bArr = this.f3684g;
                        System.arraycopy(bArr, i11, bArr, 0, i13 - i11);
                    }
                    this.f3689l += i11;
                    this.f3685h -= i11;
                    this.f3687j = 0;
                }
                InputStream inputStream = this.f3683f;
                byte[] bArr2 = this.f3684g;
                int i16 = this.f3685h;
                int read = inputStream.read(bArr2, i16, Math.min(bArr2.length - i16, (this.f3671c - this.f3689l) - i16));
                if (read != 0 && read >= -1 && read <= this.f3684g.length) {
                    if (read <= 0) {
                        return false;
                    }
                    this.f3685h += read;
                    P();
                    if (this.f3685h >= i10) {
                        return true;
                    }
                    return X(i10);
                }
                throw new IllegalStateException(this.f3683f.getClass() + "#read(byte[]) returned invalid result: " + read + "\nThe InputStream implementation is buggy.");
            }
            throw new IllegalStateException("refillBuffer() called when " + i10 + " bytes were already available in buffer");
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public String A() {
            byte[] H;
            int M = M();
            int i10 = this.f3687j;
            int i11 = this.f3685h;
            if (M <= i11 - i10 && M > 0) {
                H = this.f3684g;
                this.f3687j = i10 + M;
            } else if (M == 0) {
                return "";
            } else {
                i10 = 0;
                if (M <= i11) {
                    Q(M);
                    H = this.f3684g;
                    this.f3687j = M;
                } else {
                    H = H(M, false);
                }
            }
            return p1.e(H, i10, M);
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int B() {
            if (e()) {
                this.f3688k = 0;
                return 0;
            }
            int M = M();
            this.f3688k = M;
            if (q1.a(M) != 0) {
                return this.f3688k;
            }
            throw z.b();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int C() {
            return M();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long D() {
            return N();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public boolean E(int i10) {
            int b10 = q1.b(i10);
            if (b10 != 0) {
                if (b10 != 1) {
                    if (b10 != 2) {
                        if (b10 != 3) {
                            if (b10 != 4) {
                                if (b10 == 5) {
                                    S(4);
                                    return true;
                                }
                                throw z.d();
                            }
                            return false;
                        }
                        R();
                        a(q1.c(q1.a(i10), 4));
                        return true;
                    }
                    S(M());
                    return true;
                }
                S(8);
                return true;
            }
            U();
            return true;
        }

        public byte G() {
            if (this.f3687j == this.f3685h) {
                Q(1);
            }
            byte[] bArr = this.f3684g;
            int i10 = this.f3687j;
            this.f3687j = i10 + 1;
            return bArr[i10];
        }

        public int K() {
            int i10 = this.f3687j;
            if (this.f3685h - i10 < 4) {
                Q(4);
                i10 = this.f3687j;
            }
            byte[] bArr = this.f3684g;
            this.f3687j = i10 + 4;
            return ((bArr[i10 + 3] & 255) << 24) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16);
        }

        public long L() {
            int i10 = this.f3687j;
            if (this.f3685h - i10 < 8) {
                Q(8);
                i10 = this.f3687j;
            }
            byte[] bArr = this.f3684g;
            this.f3687j = i10 + 8;
            return ((bArr[i10 + 7] & 255) << 56) | (bArr[i10] & 255) | ((bArr[i10 + 1] & 255) << 8) | ((bArr[i10 + 2] & 255) << 16) | ((bArr[i10 + 3] & 255) << 24) | ((bArr[i10 + 4] & 255) << 32) | ((bArr[i10 + 5] & 255) << 40) | ((bArr[i10 + 6] & 255) << 48);
        }

        public int M() {
            int i10;
            int i11 = this.f3687j;
            int i12 = this.f3685h;
            if (i12 != i11) {
                byte[] bArr = this.f3684g;
                int i13 = i11 + 1;
                byte b10 = bArr[i11];
                if (b10 >= 0) {
                    this.f3687j = i13;
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
                    this.f3687j = i14;
                    return i10;
                }
            }
            return (int) O();
        }

        public long N() {
            long j10;
            long j11;
            long j12;
            int i10 = this.f3687j;
            int i11 = this.f3685h;
            if (i11 != i10) {
                byte[] bArr = this.f3684g;
                int i12 = i10 + 1;
                byte b10 = bArr[i10];
                if (b10 >= 0) {
                    this.f3687j = i12;
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
                    this.f3687j = i13;
                    return j10;
                }
            }
            return O();
        }

        long O() {
            long j10 = 0;
            for (int i10 = 0; i10 < 64; i10 += 7) {
                byte G = G();
                j10 |= (G & ByteCompanionObject.MAX_VALUE) << i10;
                if ((G & ByteCompanionObject.MIN_VALUE) == 0) {
                    return j10;
                }
            }
            throw z.e();
        }

        public void R() {
            int B;
            do {
                B = B();
                if (B == 0) {
                    return;
                }
            } while (E(B));
        }

        public void S(int i10) {
            int i11 = this.f3685h;
            int i12 = this.f3687j;
            if (i10 <= i11 - i12 && i10 >= 0) {
                this.f3687j = i12 + i10;
            } else {
                T(i10);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public void a(int i10) {
            if (this.f3688k == i10) {
                return;
            }
            throw z.a();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int d() {
            return this.f3689l + this.f3687j;
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public boolean e() {
            if (this.f3687j == this.f3685h && !X(1)) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public void k(int i10) {
            this.f3690m = i10;
            P();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int l(int i10) {
            if (i10 >= 0) {
                int i11 = i10 + this.f3689l + this.f3687j;
                int i12 = this.f3690m;
                if (i11 <= i12) {
                    this.f3690m = i11;
                    P();
                    return i12;
                }
                throw z.k();
            }
            throw z.f();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public boolean m() {
            if (N() != 0) {
                return true;
            }
            return false;
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public g n() {
            int M = M();
            int i10 = this.f3685h;
            int i11 = this.f3687j;
            if (M <= i10 - i11 && M > 0) {
                g g10 = g.g(this.f3684g, i11, M);
                this.f3687j += M;
                return g10;
            } else if (M == 0) {
                return g.f3635e;
            } else {
                return F(M);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public double o() {
            return Double.longBitsToDouble(L());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int p() {
            return M();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int q() {
            return K();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long r() {
            return L();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public float s() {
            return Float.intBitsToFloat(K());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int t() {
            return M();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long u() {
            return N();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int v() {
            return K();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long w() {
            return L();
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public int x() {
            return h.b(M());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public long y() {
            return h.c(N());
        }

        @Override // androidx.datastore.preferences.protobuf.h
        public String z() {
            int M = M();
            if (M > 0) {
                int i10 = this.f3685h;
                int i11 = this.f3687j;
                if (M <= i10 - i11) {
                    String str = new String(this.f3684g, i11, M, y.f3886a);
                    this.f3687j += M;
                    return str;
                }
            }
            if (M == 0) {
                return "";
            }
            if (M <= this.f3685h) {
                Q(M);
                String str2 = new String(this.f3684g, this.f3687j, M, y.f3886a);
                this.f3687j += M;
                return str2;
            }
            return new String(H(M, false), y.f3886a);
        }

        private c(InputStream inputStream, int i10) {
            super();
            this.f3690m = Integer.MAX_VALUE;
            y.b(inputStream, "input");
            this.f3683f = inputStream;
            this.f3684g = new byte[i10];
            this.f3685h = 0;
            this.f3687j = 0;
            this.f3689l = 0;
        }
    }

    public static int b(int i10) {
        return (-(i10 & 1)) ^ (i10 >>> 1);
    }

    public static long c(long j10) {
        return (-(j10 & 1)) ^ (j10 >>> 1);
    }

    public static h f(InputStream inputStream) {
        return g(inputStream, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
    }

    public static h g(InputStream inputStream, int i10) {
        if (i10 > 0) {
            if (inputStream == null) {
                return h(y.f3888c);
            }
            return new c(inputStream, i10);
        }
        throw new IllegalArgumentException("bufferSize must be > 0");
    }

    public static h h(byte[] bArr) {
        return i(bArr, 0, bArr.length);
    }

    public static h i(byte[] bArr, int i10, int i11) {
        return j(bArr, i10, i11, false);
    }

    static h j(byte[] bArr, int i10, int i11, boolean z10) {
        b bVar = new b(bArr, i10, i11, z10);
        try {
            bVar.l(i11);
            return bVar;
        } catch (z e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    public abstract String A();

    public abstract int B();

    public abstract int C();

    public abstract long D();

    public abstract boolean E(int i10);

    public abstract void a(int i10);

    public abstract int d();

    public abstract boolean e();

    public abstract void k(int i10);

    public abstract int l(int i10);

    public abstract boolean m();

    public abstract g n();

    public abstract double o();

    public abstract int p();

    public abstract int q();

    public abstract long r();

    public abstract float s();

    public abstract int t();

    public abstract long u();

    public abstract int v();

    public abstract long w();

    public abstract int x();

    public abstract long y();

    public abstract String z();

    private h() {
        this.f3670b = 100;
        this.f3671c = Integer.MAX_VALUE;
        this.f3673e = false;
    }
}
