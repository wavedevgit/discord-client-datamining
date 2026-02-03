package androidx.datastore.preferences.protobuf;

import androidx.datastore.preferences.protobuf.p1;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.IOException;
import java.io.OutputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j extends f {

    /* renamed from: c  reason: collision with root package name */
    private static final Logger f3675c = Logger.getLogger(j.class.getName());

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f3676d = o1.C();

    /* renamed from: a  reason: collision with root package name */
    k f3677a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f3678b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b extends j {

        /* renamed from: e  reason: collision with root package name */
        final byte[] f3679e;

        /* renamed from: f  reason: collision with root package name */
        final int f3680f;

        /* renamed from: g  reason: collision with root package name */
        int f3681g;

        /* renamed from: h  reason: collision with root package name */
        int f3682h;

        b(int i10) {
            super();
            if (i10 >= 0) {
                byte[] bArr = new byte[Math.max(i10, 20)];
                this.f3679e = bArr;
                this.f3680f = bArr.length;
                return;
            }
            throw new IllegalArgumentException("bufferSize must be >= 0");
        }

        final void S0(byte b10) {
            byte[] bArr = this.f3679e;
            int i10 = this.f3681g;
            this.f3681g = i10 + 1;
            bArr[i10] = b10;
            this.f3682h++;
        }

        final void T0(int i10) {
            byte[] bArr = this.f3679e;
            int i11 = this.f3681g;
            int i12 = i11 + 1;
            this.f3681g = i12;
            bArr[i11] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i13 = i11 + 2;
            this.f3681g = i13;
            bArr[i12] = (byte) ((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i14 = i11 + 3;
            this.f3681g = i14;
            bArr[i13] = (byte) ((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f3681g = i11 + 4;
            bArr[i14] = (byte) ((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f3682h += 4;
        }

        final void U0(long j10) {
            byte[] bArr = this.f3679e;
            int i10 = this.f3681g;
            int i11 = i10 + 1;
            this.f3681g = i11;
            bArr[i10] = (byte) (j10 & 255);
            int i12 = i10 + 2;
            this.f3681g = i12;
            bArr[i11] = (byte) ((j10 >> 8) & 255);
            int i13 = i10 + 3;
            this.f3681g = i13;
            bArr[i12] = (byte) ((j10 >> 16) & 255);
            int i14 = i10 + 4;
            this.f3681g = i14;
            bArr[i13] = (byte) (255 & (j10 >> 24));
            int i15 = i10 + 5;
            this.f3681g = i15;
            bArr[i14] = (byte) (((int) (j10 >> 32)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i16 = i10 + 6;
            this.f3681g = i16;
            bArr[i15] = (byte) (((int) (j10 >> 40)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            int i17 = i10 + 7;
            this.f3681g = i17;
            bArr[i16] = (byte) (((int) (j10 >> 48)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f3681g = i10 + 8;
            bArr[i17] = (byte) (((int) (j10 >> 56)) & SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f3682h += 8;
        }

        final void V0(int i10) {
            if (i10 >= 0) {
                X0(i10);
            } else {
                Y0(i10);
            }
        }

        final void W0(int i10, int i11) {
            X0(q1.c(i10, i11));
        }

        final void X0(int i10) {
            if (j.f3676d) {
                long j10 = this.f3681g;
                while ((i10 & (-128)) != 0) {
                    byte[] bArr = this.f3679e;
                    int i11 = this.f3681g;
                    this.f3681g = i11 + 1;
                    o1.H(bArr, i11, (byte) ((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                    i10 >>>= 7;
                }
                byte[] bArr2 = this.f3679e;
                int i12 = this.f3681g;
                this.f3681g = i12 + 1;
                o1.H(bArr2, i12, (byte) i10);
                this.f3682h += (int) (this.f3681g - j10);
                return;
            }
            while ((i10 & (-128)) != 0) {
                byte[] bArr3 = this.f3679e;
                int i13 = this.f3681g;
                this.f3681g = i13 + 1;
                bArr3[i13] = (byte) ((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                this.f3682h++;
                i10 >>>= 7;
            }
            byte[] bArr4 = this.f3679e;
            int i14 = this.f3681g;
            this.f3681g = i14 + 1;
            bArr4[i14] = (byte) i10;
            this.f3682h++;
        }

        final void Y0(long j10) {
            if (j.f3676d) {
                long j11 = this.f3681g;
                while ((j10 & (-128)) != 0) {
                    byte[] bArr = this.f3679e;
                    int i10 = this.f3681g;
                    this.f3681g = i10 + 1;
                    o1.H(bArr, i10, (byte) ((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                    j10 >>>= 7;
                }
                byte[] bArr2 = this.f3679e;
                int i11 = this.f3681g;
                this.f3681g = i11 + 1;
                o1.H(bArr2, i11, (byte) j10);
                this.f3682h += (int) (this.f3681g - j11);
                return;
            }
            while ((j10 & (-128)) != 0) {
                byte[] bArr3 = this.f3679e;
                int i12 = this.f3681g;
                this.f3681g = i12 + 1;
                bArr3[i12] = (byte) ((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                this.f3682h++;
                j10 >>>= 7;
            }
            byte[] bArr4 = this.f3679e;
            int i13 = this.f3681g;
            this.f3681g = i13 + 1;
            bArr4[i13] = (byte) j10;
            this.f3682h++;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c extends IOException {
        c(Throwable th2) {
            super("CodedOutputStream was writing to a flat byte array and ran out of space.", th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class d extends b {

        /* renamed from: i  reason: collision with root package name */
        private final OutputStream f3683i;

        d(OutputStream outputStream, int i10) {
            super(i10);
            if (outputStream != null) {
                this.f3683i = outputStream;
                return;
            }
            throw new NullPointerException("out");
        }

        private void Z0() {
            this.f3683i.write(this.f3679e, 0, this.f3681g);
            this.f3681g = 0;
        }

        private void a1(int i10) {
            if (this.f3680f - this.f3681g < i10) {
                Z0();
            }
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void A0(o0 o0Var) {
            P0(o0Var.getSerializedSize());
            o0Var.a(this);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void B0(int i10, o0 o0Var) {
            N0(1, 3);
            O0(2, i10);
            c1(3, o0Var);
            N0(1, 4);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void C0(int i10, g gVar) {
            N0(1, 3);
            O0(2, i10);
            f0(3, gVar);
            N0(1, 4);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void L0(int i10, String str) {
            N0(i10, 2);
            M0(str);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void M0(String str) {
            int g10;
            try {
                int length = str.length() * 3;
                int R = j.R(length);
                int i10 = R + length;
                int i11 = this.f3680f;
                if (i10 > i11) {
                    byte[] bArr = new byte[length];
                    int f10 = p1.f(str, bArr, 0, length);
                    P0(f10);
                    a(bArr, 0, f10);
                    return;
                }
                if (i10 > i11 - this.f3681g) {
                    Z0();
                }
                int R2 = j.R(str.length());
                int i12 = this.f3681g;
                try {
                    if (R2 == R) {
                        int i13 = i12 + R2;
                        this.f3681g = i13;
                        int f11 = p1.f(str, this.f3679e, i13, this.f3680f - i13);
                        this.f3681g = i12;
                        g10 = (f11 - i12) - R2;
                        X0(g10);
                        this.f3681g = f11;
                    } else {
                        g10 = p1.g(str);
                        X0(g10);
                        this.f3681g = p1.f(str, this.f3679e, this.f3681g, g10);
                    }
                    this.f3682h += g10;
                } catch (p1.d e10) {
                    this.f3682h -= this.f3681g - i12;
                    this.f3681g = i12;
                    throw e10;
                } catch (ArrayIndexOutOfBoundsException e11) {
                    throw new c(e11);
                }
            } catch (p1.d e12) {
                X(str, e12);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void N0(int i10, int i11) {
            P0(q1.c(i10, i11));
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void O0(int i10, int i11) {
            a1(20);
            W0(i10, 0);
            X0(i11);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void P0(int i10) {
            a1(5);
            X0(i10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void Q0(int i10, long j10) {
            a1(20);
            W0(i10, 0);
            Y0(j10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void R0(long j10) {
            a1(10);
            Y0(j10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void W() {
            if (this.f3681g > 0) {
                Z0();
            }
        }

        @Override // androidx.datastore.preferences.protobuf.j, androidx.datastore.preferences.protobuf.f
        public void a(byte[] bArr, int i10, int i11) {
            b1(bArr, i10, i11);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void a0(byte b10) {
            if (this.f3681g == this.f3680f) {
                Z0();
            }
            S0(b10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void b0(int i10, boolean z10) {
            a1(11);
            W0(i10, 0);
            S0(z10 ? (byte) 1 : (byte) 0);
        }

        public void b1(byte[] bArr, int i10, int i11) {
            int i12 = this.f3680f;
            int i13 = this.f3681g;
            if (i12 - i13 >= i11) {
                System.arraycopy(bArr, i10, this.f3679e, i13, i11);
                this.f3681g += i11;
                this.f3682h += i11;
                return;
            }
            int i14 = i12 - i13;
            System.arraycopy(bArr, i10, this.f3679e, i13, i14);
            int i15 = i10 + i14;
            int i16 = i11 - i14;
            this.f3681g = this.f3680f;
            this.f3682h += i14;
            Z0();
            if (i16 <= this.f3680f) {
                System.arraycopy(bArr, i15, this.f3679e, 0, i16);
                this.f3681g = i16;
            } else {
                this.f3683i.write(bArr, i15, i16);
            }
            this.f3682h += i16;
        }

        public void c1(int i10, o0 o0Var) {
            N0(i10, 2);
            A0(o0Var);
        }

        void d1(o0 o0Var, d1 d1Var) {
            P0(((androidx.datastore.preferences.protobuf.a) o0Var).d(d1Var));
            d1Var.h(o0Var, this.f3677a);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void e0(byte[] bArr, int i10, int i11) {
            P0(i11);
            b1(bArr, i10, i11);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void f0(int i10, g gVar) {
            N0(i10, 2);
            g0(gVar);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void g0(g gVar) {
            P0(gVar.size());
            gVar.v(this);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void l0(int i10, int i11) {
            a1(14);
            W0(i10, 5);
            T0(i11);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void m0(int i10) {
            a1(4);
            T0(i10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void n0(int i10, long j10) {
            a1(18);
            W0(i10, 1);
            U0(j10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void o0(long j10) {
            a1(8);
            U0(j10);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void v0(int i10, int i11) {
            a1(20);
            W0(i10, 0);
            V0(i11);
        }

        @Override // androidx.datastore.preferences.protobuf.j
        public void w0(int i10) {
            if (i10 >= 0) {
                P0(i10);
            } else {
                R0(i10);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.j
        void z0(int i10, o0 o0Var, d1 d1Var) {
            N0(i10, 2);
            d1(o0Var, d1Var);
        }
    }

    public static int A(o0 o0Var) {
        return y(o0Var.getSerializedSize());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int B(o0 o0Var, d1 d1Var) {
        return y(((androidx.datastore.preferences.protobuf.a) o0Var).d(d1Var));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int C(int i10) {
        return i10 > 4096 ? RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT : i10;
    }

    public static int D(int i10, g gVar) {
        return (P(1) * 2) + Q(2, i10) + f(3, gVar);
    }

    public static int E(int i10) {
        return R(i10);
    }

    public static int F(int i10, int i11) {
        return P(i10) + G(i11);
    }

    public static int G(int i10) {
        return 4;
    }

    public static int H(int i10, long j10) {
        return P(i10) + I(j10);
    }

    public static int I(long j10) {
        return 8;
    }

    public static int J(int i10, int i11) {
        return P(i10) + K(i11);
    }

    public static int K(int i10) {
        return R(U(i10));
    }

    public static int L(int i10, long j10) {
        return P(i10) + M(j10);
    }

    public static int M(long j10) {
        return T(V(j10));
    }

    public static int N(int i10, String str) {
        return P(i10) + O(str);
    }

    public static int O(String str) {
        int length;
        try {
            length = p1.g(str);
        } catch (p1.d unused) {
            length = str.getBytes(y.f3855a).length;
        }
        return y(length);
    }

    public static int P(int i10) {
        return R(q1.c(i10, 0));
    }

    public static int Q(int i10, int i11) {
        return P(i10) + R(i11);
    }

    public static int R(int i10) {
        if ((i10 & (-128)) == 0) {
            return 1;
        }
        if ((i10 & (-16384)) == 0) {
            return 2;
        }
        if (((-2097152) & i10) == 0) {
            return 3;
        }
        return (i10 & (-268435456)) == 0 ? 4 : 5;
    }

    public static int S(int i10, long j10) {
        return P(i10) + T(j10);
    }

    public static int T(long j10) {
        int i10;
        if (((-128) & j10) == 0) {
            return 1;
        }
        if (j10 < 0) {
            return 10;
        }
        if (((-34359738368L) & j10) != 0) {
            j10 >>>= 28;
            i10 = 6;
        } else {
            i10 = 2;
        }
        if (((-2097152) & j10) != 0) {
            i10 += 2;
            j10 >>>= 14;
        }
        return (j10 & (-16384)) != 0 ? i10 + 1 : i10;
    }

    public static int U(int i10) {
        return (i10 >> 31) ^ (i10 << 1);
    }

    public static long V(long j10) {
        return (j10 >> 63) ^ (j10 << 1);
    }

    public static j Z(OutputStream outputStream, int i10) {
        return new d(outputStream, i10);
    }

    public static int c(int i10, boolean z10) {
        return P(i10) + d(z10);
    }

    public static int d(boolean z10) {
        return 1;
    }

    public static int e(byte[] bArr) {
        return y(bArr.length);
    }

    public static int f(int i10, g gVar) {
        return P(i10) + g(gVar);
    }

    public static int g(g gVar) {
        return y(gVar.size());
    }

    public static int h(int i10, double d10) {
        return P(i10) + i(d10);
    }

    public static int i(double d10) {
        return 8;
    }

    public static int j(int i10, int i11) {
        return P(i10) + k(i11);
    }

    public static int k(int i10) {
        return v(i10);
    }

    public static int l(int i10, int i11) {
        return P(i10) + m(i11);
    }

    public static int m(int i10) {
        return 4;
    }

    public static int n(int i10, long j10) {
        return P(i10) + o(j10);
    }

    public static int o(long j10) {
        return 8;
    }

    public static int p(int i10, float f10) {
        return P(i10) + q(f10);
    }

    public static int q(float f10) {
        return 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int r(int i10, o0 o0Var, d1 d1Var) {
        return (P(i10) * 2) + t(o0Var, d1Var);
    }

    public static int s(o0 o0Var) {
        return o0Var.getSerializedSize();
    }

    static int t(o0 o0Var, d1 d1Var) {
        return ((androidx.datastore.preferences.protobuf.a) o0Var).d(d1Var);
    }

    public static int u(int i10, int i11) {
        return P(i10) + v(i11);
    }

    public static int v(int i10) {
        if (i10 >= 0) {
            return R(i10);
        }
        return 10;
    }

    public static int w(int i10, long j10) {
        return P(i10) + x(j10);
    }

    public static int x(long j10) {
        return T(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int y(int i10) {
        return R(i10) + i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int z(int i10, o0 o0Var, d1 d1Var) {
        return P(i10) + B(o0Var, d1Var);
    }

    public abstract void A0(o0 o0Var);

    public abstract void B0(int i10, o0 o0Var);

    public abstract void C0(int i10, g gVar);

    public final void D0(int i10, int i11) {
        l0(i10, i11);
    }

    public final void E0(int i10) {
        m0(i10);
    }

    public final void F0(int i10, long j10) {
        n0(i10, j10);
    }

    public final void G0(long j10) {
        o0(j10);
    }

    public final void H0(int i10, int i11) {
        O0(i10, U(i11));
    }

    public final void I0(int i10) {
        P0(U(i10));
    }

    public final void J0(int i10, long j10) {
        Q0(i10, V(j10));
    }

    public final void K0(long j10) {
        R0(V(j10));
    }

    public abstract void L0(int i10, String str);

    public abstract void M0(String str);

    public abstract void N0(int i10, int i11);

    public abstract void O0(int i10, int i11);

    public abstract void P0(int i10);

    public abstract void Q0(int i10, long j10);

    public abstract void R0(long j10);

    public abstract void W();

    final void X(String str, p1.d dVar) {
        f3675c.log(Level.WARNING, "Converting ill-formed UTF-16. Your Protocol Buffer will not round trip correctly!", (Throwable) dVar);
        byte[] bytes = str.getBytes(y.f3855a);
        try {
            P0(bytes.length);
            a(bytes, 0, bytes.length);
        } catch (c e10) {
            throw e10;
        } catch (IndexOutOfBoundsException e11) {
            throw new c(e11);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean Y() {
        return this.f3678b;
    }

    @Override // androidx.datastore.preferences.protobuf.f
    public abstract void a(byte[] bArr, int i10, int i11);

    public abstract void a0(byte b10);

    public abstract void b0(int i10, boolean z10);

    public final void c0(boolean z10) {
        a0(z10 ? (byte) 1 : (byte) 0);
    }

    public final void d0(byte[] bArr) {
        e0(bArr, 0, bArr.length);
    }

    abstract void e0(byte[] bArr, int i10, int i11);

    public abstract void f0(int i10, g gVar);

    public abstract void g0(g gVar);

    public final void h0(int i10, double d10) {
        n0(i10, Double.doubleToRawLongBits(d10));
    }

    public final void i0(double d10) {
        o0(Double.doubleToRawLongBits(d10));
    }

    public final void j0(int i10, int i11) {
        v0(i10, i11);
    }

    public final void k0(int i10) {
        w0(i10);
    }

    public abstract void l0(int i10, int i11);

    public abstract void m0(int i10);

    public abstract void n0(int i10, long j10);

    public abstract void o0(long j10);

    public final void p0(int i10, float f10) {
        l0(i10, Float.floatToRawIntBits(f10));
    }

    public final void q0(float f10) {
        m0(Float.floatToRawIntBits(f10));
    }

    public final void r0(int i10, o0 o0Var) {
        N0(i10, 3);
        t0(o0Var);
        N0(i10, 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void s0(int i10, o0 o0Var, d1 d1Var) {
        N0(i10, 3);
        u0(o0Var, d1Var);
        N0(i10, 4);
    }

    public final void t0(o0 o0Var) {
        o0Var.a(this);
    }

    final void u0(o0 o0Var, d1 d1Var) {
        d1Var.h(o0Var, this.f3677a);
    }

    public abstract void v0(int i10, int i11);

    public abstract void w0(int i10);

    public final void x0(int i10, long j10) {
        Q0(i10, j10);
    }

    public final void y0(long j10) {
        R0(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void z0(int i10, o0 o0Var, d1 d1Var);

    private j() {
    }
}
