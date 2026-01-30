package bd;

import android.util.Pair;
import android.util.SparseArray;
import androidx.recyclerview.widget.RecyclerView;
import bd.a;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import kotlin.jvm.internal.LongCompanionObject;
import lc.l0;
import ne.d0;
import ne.h0;
import ne.s0;
import ne.w0;
import ne.y;
import rc.m;
import tc.b0;
import tc.v;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements tc.k {
    public static final tc.p I = new tc.p() { // from class: bd.e
        @Override // tc.p
        public final tc.k[] b() {
            return g.b();
        }
    };
    private static final byte[] J = {-94, 57, 79, 82, 90, -101, 79, 20, -94, 68, 108, 66, 124, 100, -115, -12};
    private static final Format K = new Format.b().g0("application/x-emsg").G();
    private int A;
    private int B;
    private int C;
    private boolean D;
    private tc.m E;
    private b0[] F;
    private b0[] G;
    private boolean H;

    /* renamed from: a  reason: collision with root package name */
    private final int f7325a;

    /* renamed from: b  reason: collision with root package name */
    private final o f7326b;

    /* renamed from: c  reason: collision with root package name */
    private final List f7327c;

    /* renamed from: d  reason: collision with root package name */
    private final SparseArray f7328d;

    /* renamed from: e  reason: collision with root package name */
    private final h0 f7329e;

    /* renamed from: f  reason: collision with root package name */
    private final h0 f7330f;

    /* renamed from: g  reason: collision with root package name */
    private final h0 f7331g;

    /* renamed from: h  reason: collision with root package name */
    private final byte[] f7332h;

    /* renamed from: i  reason: collision with root package name */
    private final h0 f7333i;

    /* renamed from: j  reason: collision with root package name */
    private final s0 f7334j;

    /* renamed from: k  reason: collision with root package name */
    private final id.c f7335k;

    /* renamed from: l  reason: collision with root package name */
    private final h0 f7336l;

    /* renamed from: m  reason: collision with root package name */
    private final ArrayDeque f7337m;

    /* renamed from: n  reason: collision with root package name */
    private final ArrayDeque f7338n;

    /* renamed from: o  reason: collision with root package name */
    private final b0 f7339o;

    /* renamed from: p  reason: collision with root package name */
    private int f7340p;

    /* renamed from: q  reason: collision with root package name */
    private int f7341q;

    /* renamed from: r  reason: collision with root package name */
    private long f7342r;

    /* renamed from: s  reason: collision with root package name */
    private int f7343s;

    /* renamed from: t  reason: collision with root package name */
    private h0 f7344t;

    /* renamed from: u  reason: collision with root package name */
    private long f7345u;

    /* renamed from: v  reason: collision with root package name */
    private int f7346v;

    /* renamed from: w  reason: collision with root package name */
    private long f7347w;

    /* renamed from: x  reason: collision with root package name */
    private long f7348x;

    /* renamed from: y  reason: collision with root package name */
    private long f7349y;

    /* renamed from: z  reason: collision with root package name */
    private b f7350z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f7351a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f7352b;

        /* renamed from: c  reason: collision with root package name */
        public final int f7353c;

        public a(long j10, boolean z10, int i10) {
            this.f7351a = j10;
            this.f7352b = z10;
            this.f7353c = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final b0 f7354a;

        /* renamed from: d  reason: collision with root package name */
        public r f7357d;

        /* renamed from: e  reason: collision with root package name */
        public c f7358e;

        /* renamed from: f  reason: collision with root package name */
        public int f7359f;

        /* renamed from: g  reason: collision with root package name */
        public int f7360g;

        /* renamed from: h  reason: collision with root package name */
        public int f7361h;

        /* renamed from: i  reason: collision with root package name */
        public int f7362i;

        /* renamed from: l  reason: collision with root package name */
        private boolean f7365l;

        /* renamed from: b  reason: collision with root package name */
        public final q f7355b = new q();

        /* renamed from: c  reason: collision with root package name */
        public final h0 f7356c = new h0();

        /* renamed from: j  reason: collision with root package name */
        private final h0 f7363j = new h0(1);

        /* renamed from: k  reason: collision with root package name */
        private final h0 f7364k = new h0();

        public b(b0 b0Var, r rVar, c cVar) {
            this.f7354a = b0Var;
            this.f7357d = rVar;
            this.f7358e = cVar;
            j(rVar, cVar);
        }

        public int c() {
            int i10;
            if (!this.f7365l) {
                i10 = this.f7357d.f7449g[this.f7359f];
            } else if (this.f7355b.f7435k[this.f7359f]) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            if (g() != null) {
                return i10 | 1073741824;
            }
            return i10;
        }

        public long d() {
            if (!this.f7365l) {
                return this.f7357d.f7445c[this.f7359f];
            }
            return this.f7355b.f7431g[this.f7361h];
        }

        public long e() {
            if (!this.f7365l) {
                return this.f7357d.f7448f[this.f7359f];
            }
            return this.f7355b.c(this.f7359f);
        }

        public int f() {
            if (!this.f7365l) {
                return this.f7357d.f7446d[this.f7359f];
            }
            return this.f7355b.f7433i[this.f7359f];
        }

        public p g() {
            if (!this.f7365l) {
                return null;
            }
            int i10 = ((c) w0.j(this.f7355b.f7425a)).f7314a;
            p pVar = this.f7355b.f7438n;
            if (pVar == null) {
                pVar = this.f7357d.f7443a.a(i10);
            }
            if (pVar == null || !pVar.f7420a) {
                return null;
            }
            return pVar;
        }

        public boolean h() {
            this.f7359f++;
            if (!this.f7365l) {
                return false;
            }
            int i10 = this.f7360g + 1;
            this.f7360g = i10;
            int[] iArr = this.f7355b.f7432h;
            int i11 = this.f7361h;
            if (i10 != iArr[i11]) {
                return true;
            }
            this.f7361h = i11 + 1;
            this.f7360g = 0;
            return false;
        }

        public int i(int i10, int i11) {
            h0 h0Var;
            boolean z10;
            int i12;
            p g10 = g();
            if (g10 == null) {
                return 0;
            }
            int i13 = g10.f7423d;
            if (i13 != 0) {
                h0Var = this.f7355b.f7439o;
            } else {
                byte[] bArr = (byte[]) w0.j(g10.f7424e);
                this.f7364k.S(bArr, bArr.length);
                h0 h0Var2 = this.f7364k;
                i13 = bArr.length;
                h0Var = h0Var2;
            }
            boolean g11 = this.f7355b.g(this.f7359f);
            if (!g11 && i11 == 0) {
                z10 = false;
            } else {
                z10 = true;
            }
            byte[] e10 = this.f7363j.e();
            if (z10) {
                i12 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            } else {
                i12 = 0;
            }
            e10[0] = (byte) (i12 | i13);
            this.f7363j.U(0);
            this.f7354a.e(this.f7363j, 1, 1);
            this.f7354a.e(h0Var, i13, 1);
            if (!z10) {
                return i13 + 1;
            }
            if (!g11) {
                this.f7356c.Q(8);
                byte[] e11 = this.f7356c.e();
                e11[0] = 0;
                e11[1] = 1;
                e11[2] = (byte) ((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e11[3] = (byte) (i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
                e11[4] = (byte) ((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e11[5] = (byte) ((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e11[6] = (byte) ((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e11[7] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f7354a.e(this.f7356c, 8, 1);
                return i13 + 9;
            }
            h0 h0Var3 = this.f7355b.f7439o;
            int N = h0Var3.N();
            h0Var3.V(-2);
            int i14 = (N * 6) + 2;
            if (i11 != 0) {
                this.f7356c.Q(i14);
                byte[] e12 = this.f7356c.e();
                h0Var3.l(e12, 0, i14);
                int i15 = (((e12[2] & 255) << 8) | (e12[3] & 255)) + i11;
                e12[2] = (byte) ((i15 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                e12[3] = (byte) (i15 & SetSpanOperation.SPAN_MAX_PRIORITY);
                h0Var3 = this.f7356c;
            }
            this.f7354a.e(h0Var3, i14, 1);
            return i13 + 1 + i14;
        }

        public void j(r rVar, c cVar) {
            this.f7357d = rVar;
            this.f7358e = cVar;
            this.f7354a.b(rVar.f7443a.f7414f);
            k();
        }

        public void k() {
            this.f7355b.f();
            this.f7359f = 0;
            this.f7361h = 0;
            this.f7360g = 0;
            this.f7362i = 0;
            this.f7365l = false;
        }

        public void l(long j10) {
            int i10 = this.f7359f;
            while (true) {
                q qVar = this.f7355b;
                if (i10 < qVar.f7430f && qVar.c(i10) <= j10) {
                    if (this.f7355b.f7435k[i10]) {
                        this.f7362i = i10;
                    }
                    i10++;
                } else {
                    return;
                }
            }
        }

        public void m() {
            p g10 = g();
            if (g10 != null) {
                h0 h0Var = this.f7355b.f7439o;
                int i10 = g10.f7423d;
                if (i10 != 0) {
                    h0Var.V(i10);
                }
                if (this.f7355b.g(this.f7359f)) {
                    h0Var.V(h0Var.N() * 6);
                }
            }
        }

        public void n(rc.m mVar) {
            String str;
            p a10 = this.f7357d.f7443a.a(((c) w0.j(this.f7355b.f7425a)).f7314a);
            if (a10 != null) {
                str = a10.f7421b;
            } else {
                str = null;
            }
            this.f7354a.b(this.f7357d.f7443a.f7414f.b().O(mVar.c(str)).G());
        }
    }

    public g() {
        this(0);
    }

    private static Pair A(h0 h0Var, long j10) {
        long M;
        long M2;
        h0Var.U(8);
        int c10 = bd.a.c(h0Var.q());
        h0Var.V(4);
        long J2 = h0Var.J();
        if (c10 == 0) {
            M = h0Var.J();
            M2 = h0Var.J();
        } else {
            M = h0Var.M();
            M2 = h0Var.M();
        }
        long j11 = j10 + M2;
        long X0 = w0.X0(M, 1000000L, J2);
        h0Var.V(2);
        int N = h0Var.N();
        int[] iArr = new int[N];
        long[] jArr = new long[N];
        long[] jArr2 = new long[N];
        long[] jArr3 = new long[N];
        long j12 = j11;
        long j13 = X0;
        int i10 = 0;
        while (i10 < N) {
            int q10 = h0Var.q();
            if ((Integer.MIN_VALUE & q10) == 0) {
                long J3 = h0Var.J();
                iArr[i10] = q10 & Integer.MAX_VALUE;
                jArr[i10] = j12;
                jArr3[i10] = j13;
                M += J3;
                long[] jArr4 = jArr3;
                j13 = w0.X0(M, 1000000L, J2);
                jArr2[i10] = j13 - jArr4[i10];
                h0Var.V(4);
                j12 += iArr[i10];
                i10++;
                jArr3 = jArr4;
            } else {
                throw l0.a("Unhandled indirect reference", null);
            }
        }
        return Pair.create(Long.valueOf(X0), new tc.c(iArr, jArr, jArr2, jArr3));
    }

    private static long B(h0 h0Var) {
        h0Var.U(8);
        if (bd.a.c(h0Var.q()) == 1) {
            return h0Var.M();
        }
        return h0Var.J();
    }

    private static b C(h0 h0Var, SparseArray sparseArray, boolean z10) {
        Object obj;
        int i10;
        int i11;
        int i12;
        int i13;
        h0Var.U(8);
        int b10 = bd.a.b(h0Var.q());
        int q10 = h0Var.q();
        if (z10) {
            obj = sparseArray.valueAt(0);
        } else {
            obj = sparseArray.get(q10);
        }
        b bVar = (b) obj;
        if (bVar == null) {
            return null;
        }
        if ((b10 & 1) != 0) {
            long M = h0Var.M();
            q qVar = bVar.f7355b;
            qVar.f7427c = M;
            qVar.f7428d = M;
        }
        c cVar = bVar.f7358e;
        if ((b10 & 2) != 0) {
            i10 = h0Var.q() - 1;
        } else {
            i10 = cVar.f7314a;
        }
        if ((b10 & 8) != 0) {
            i11 = h0Var.q();
        } else {
            i11 = cVar.f7315b;
        }
        if ((b10 & 16) != 0) {
            i12 = h0Var.q();
        } else {
            i12 = cVar.f7316c;
        }
        if ((b10 & 32) != 0) {
            i13 = h0Var.q();
        } else {
            i13 = cVar.f7317d;
        }
        bVar.f7355b.f7425a = new c(i10, i11, i12, i13);
        return bVar;
    }

    private static void D(a.C0110a c0110a, SparseArray sparseArray, boolean z10, int i10, byte[] bArr) {
        String str;
        b C = C(((a.b) ne.a.e(c0110a.g(1952868452))).f7279b, sparseArray, z10);
        if (C != null) {
            q qVar = C.f7355b;
            long j10 = qVar.f7441q;
            boolean z11 = qVar.f7442r;
            C.k();
            C.f7365l = true;
            a.b g10 = c0110a.g(1952867444);
            if (g10 != null && (i10 & 2) == 0) {
                qVar.f7441q = B(g10.f7279b);
                qVar.f7442r = true;
            } else {
                qVar.f7441q = j10;
                qVar.f7442r = z11;
            }
            G(c0110a, C, i10);
            p a10 = C.f7357d.f7443a.a(((c) ne.a.e(qVar.f7425a)).f7314a);
            a.b g11 = c0110a.g(1935763834);
            if (g11 != null) {
                w((p) ne.a.e(a10), g11.f7279b, qVar);
            }
            a.b g12 = c0110a.g(1935763823);
            if (g12 != null) {
                v(g12.f7279b, qVar);
            }
            a.b g13 = c0110a.g(1936027235);
            if (g13 != null) {
                z(g13.f7279b, qVar);
            }
            if (a10 != null) {
                str = a10.f7421b;
            } else {
                str = null;
            }
            x(c0110a, str, qVar);
            int size = c0110a.f7277c.size();
            for (int i11 = 0; i11 < size; i11++) {
                a.b bVar = (a.b) c0110a.f7277c.get(i11);
                if (bVar.f7275a == 1970628964) {
                    H(bVar.f7279b, qVar, bArr);
                }
            }
        }
    }

    private static Pair E(h0 h0Var) {
        h0Var.U(12);
        return Pair.create(Integer.valueOf(h0Var.q()), new c(h0Var.q() - 1, h0Var.q(), h0Var.q(), h0Var.q()));
    }

    private static int F(b bVar, int i10, int i11, h0 h0Var, int i12) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        long j10;
        boolean z15;
        boolean z16;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        boolean z17;
        h0Var.U(8);
        int b10 = bd.a.b(h0Var.q());
        o oVar = bVar.f7357d.f7443a;
        q qVar = bVar.f7355b;
        c cVar = (c) w0.j(qVar.f7425a);
        qVar.f7432h[i10] = h0Var.L();
        long[] jArr = qVar.f7431g;
        long j11 = qVar.f7427c;
        jArr[i10] = j11;
        if ((b10 & 1) != 0) {
            jArr[i10] = j11 + h0Var.q();
        }
        if ((b10 & 4) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        int i20 = cVar.f7317d;
        if (z10) {
            i20 = h0Var.q();
        }
        if ((b10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        if ((b10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        if ((b10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            z13 = true;
        } else {
            z13 = false;
        }
        if ((b10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            z14 = true;
        } else {
            z14 = false;
        }
        if (l(oVar)) {
            j10 = ((long[]) w0.j(oVar.f7417i))[0];
        } else {
            j10 = 0;
        }
        int[] iArr = qVar.f7433i;
        long[] jArr2 = qVar.f7434j;
        boolean[] zArr = qVar.f7435k;
        boolean z18 = z14;
        if (oVar.f7410b == 2 && (i11 & 1) != 0) {
            z15 = true;
        } else {
            z15 = false;
        }
        int i21 = i12 + qVar.f7432h[i10];
        boolean z19 = z10;
        long j12 = oVar.f7411c;
        long j13 = qVar.f7441q;
        int i22 = i12;
        while (i22 < i21) {
            if (z11) {
                i13 = h0Var.q();
                z16 = z15;
            } else {
                z16 = z15;
                i13 = cVar.f7315b;
            }
            int e10 = e(i13);
            if (z12) {
                i15 = h0Var.q();
                i14 = i21;
            } else {
                i14 = i21;
                i15 = cVar.f7316c;
            }
            int e11 = e(i15);
            if (z13) {
                i16 = e11;
                i17 = h0Var.q();
            } else if (i22 == 0 && z19) {
                i16 = e11;
                i17 = i20;
            } else {
                i16 = e11;
                i17 = cVar.f7317d;
            }
            if (z18) {
                i18 = i17;
                i19 = h0Var.q();
            } else {
                i18 = i17;
                i19 = 0;
            }
            int i23 = i22;
            long X0 = w0.X0((i19 + j13) - j10, 1000000L, j12);
            jArr2[i23] = X0;
            if (!qVar.f7442r) {
                jArr2[i23] = X0 + bVar.f7357d.f7450h;
            }
            iArr[i23] = i16;
            if (((i18 >> 16) & 1) == 0 && (!z16 || i23 == 0)) {
                z17 = true;
            } else {
                z17 = false;
            }
            zArr[i23] = z17;
            j13 += e10;
            i22 = i23 + 1;
            i21 = i14;
            z15 = z16;
        }
        int i24 = i21;
        qVar.f7441q = j13;
        return i24;
    }

    private static void G(a.C0110a c0110a, b bVar, int i10) {
        List list = c0110a.f7277c;
        int size = list.size();
        int i11 = 0;
        int i12 = 0;
        for (int i13 = 0; i13 < size; i13++) {
            a.b bVar2 = (a.b) list.get(i13);
            if (bVar2.f7275a == 1953658222) {
                h0 h0Var = bVar2.f7279b;
                h0Var.U(12);
                int L = h0Var.L();
                if (L > 0) {
                    i12 += L;
                    i11++;
                }
            }
        }
        bVar.f7361h = 0;
        bVar.f7360g = 0;
        bVar.f7359f = 0;
        bVar.f7355b.e(i11, i12);
        int i14 = 0;
        int i15 = 0;
        for (int i16 = 0; i16 < size; i16++) {
            a.b bVar3 = (a.b) list.get(i16);
            if (bVar3.f7275a == 1953658222) {
                i15 = F(bVar, i14, i10, bVar3.f7279b, i15);
                i14++;
            }
        }
    }

    private static void H(h0 h0Var, q qVar, byte[] bArr) {
        h0Var.U(8);
        h0Var.l(bArr, 0, 16);
        if (!Arrays.equals(bArr, J)) {
            return;
        }
        y(h0Var, 16, qVar);
    }

    private void I(long j10) {
        while (!this.f7337m.isEmpty() && ((a.C0110a) this.f7337m.peek()).f7276b == j10) {
            n((a.C0110a) this.f7337m.pop());
        }
        g();
    }

    private boolean J(tc.l lVar) {
        if (this.f7343s == 0) {
            if (!lVar.f(this.f7336l.e(), 0, 8, true)) {
                return false;
            }
            this.f7343s = 8;
            this.f7336l.U(0);
            this.f7342r = this.f7336l.J();
            this.f7341q = this.f7336l.q();
        }
        long j10 = this.f7342r;
        if (j10 == 1) {
            lVar.readFully(this.f7336l.e(), 8, 8);
            this.f7343s += 8;
            this.f7342r = this.f7336l.M();
        } else if (j10 == 0) {
            long length = lVar.getLength();
            if (length == -1 && !this.f7337m.isEmpty()) {
                length = ((a.C0110a) this.f7337m.peek()).f7276b;
            }
            if (length != -1) {
                this.f7342r = (length - lVar.getPosition()) + this.f7343s;
            }
        }
        if (this.f7342r >= this.f7343s) {
            long position = lVar.getPosition() - this.f7343s;
            int i10 = this.f7341q;
            if ((i10 == 1836019558 || i10 == 1835295092) && !this.H) {
                this.E.q(new z.b(this.f7348x, position));
                this.H = true;
            }
            if (this.f7341q == 1836019558) {
                int size = this.f7328d.size();
                for (int i11 = 0; i11 < size; i11++) {
                    q qVar = ((b) this.f7328d.valueAt(i11)).f7355b;
                    qVar.f7426b = position;
                    qVar.f7428d = position;
                    qVar.f7427c = position;
                }
            }
            int i12 = this.f7341q;
            if (i12 == 1835295092) {
                this.f7350z = null;
                this.f7345u = position + this.f7342r;
                this.f7340p = 2;
                return true;
            }
            if (N(i12)) {
                long position2 = (lVar.getPosition() + this.f7342r) - 8;
                this.f7337m.push(new a.C0110a(this.f7341q, position2));
                if (this.f7342r == this.f7343s) {
                    I(position2);
                } else {
                    g();
                }
            } else if (O(this.f7341q)) {
                if (this.f7343s == 8) {
                    if (this.f7342r <= 2147483647L) {
                        h0 h0Var = new h0((int) this.f7342r);
                        System.arraycopy(this.f7336l.e(), 0, h0Var.e(), 0, 8);
                        this.f7344t = h0Var;
                        this.f7340p = 1;
                    } else {
                        throw l0.d("Leaf atom with length > 2147483647 (unsupported).");
                    }
                } else {
                    throw l0.d("Leaf atom defines extended atom size (unsupported).");
                }
            } else if (this.f7342r <= 2147483647L) {
                this.f7344t = null;
                this.f7340p = 1;
            } else {
                throw l0.d("Skipping atom with length > 2147483647 (unsupported).");
            }
            return true;
        }
        throw l0.d("Atom size less than header length (unsupported).");
    }

    private void K(tc.l lVar) {
        int i10 = ((int) this.f7342r) - this.f7343s;
        h0 h0Var = this.f7344t;
        if (h0Var != null) {
            lVar.readFully(h0Var.e(), 8, i10);
            p(new a.b(this.f7341q, h0Var), lVar.getPosition());
        } else {
            lVar.k(i10);
        }
        I(lVar.getPosition());
    }

    private void L(tc.l lVar) {
        int size = this.f7328d.size();
        long j10 = LongCompanionObject.MAX_VALUE;
        b bVar = null;
        for (int i10 = 0; i10 < size; i10++) {
            q qVar = ((b) this.f7328d.valueAt(i10)).f7355b;
            if (qVar.f7440p) {
                long j11 = qVar.f7428d;
                if (j11 < j10) {
                    bVar = (b) this.f7328d.valueAt(i10);
                    j10 = j11;
                }
            }
        }
        if (bVar == null) {
            this.f7340p = 3;
            return;
        }
        int position = (int) (j10 - lVar.getPosition());
        if (position >= 0) {
            lVar.k(position);
            bVar.f7355b.b(lVar);
            return;
        }
        throw l0.a("Offset to encryption data was negative.", null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private boolean M(tc.l lVar) {
        boolean z10;
        b0.a aVar;
        boolean z11;
        int i10;
        int a10;
        b bVar = this.f7350z;
        Throwable th2 = null;
        if (bVar == null) {
            bVar = j(this.f7328d);
            if (bVar == null) {
                int position = (int) (this.f7345u - lVar.getPosition());
                if (position >= 0) {
                    lVar.k(position);
                    g();
                    return false;
                }
                throw l0.a("Offset to end of mdat was negative.", null);
            }
            int d10 = (int) (bVar.d() - lVar.getPosition());
            if (d10 < 0) {
                y.i("FragmentedMp4Extractor", "Ignoring negative offset to sample data.");
                d10 = 0;
            }
            lVar.k(d10);
            this.f7350z = bVar;
        }
        int i11 = 4;
        int i12 = 1;
        if (this.f7340p == 3) {
            int f10 = bVar.f();
            this.A = f10;
            if (bVar.f7359f < bVar.f7362i) {
                lVar.k(f10);
                bVar.m();
                if (!bVar.h()) {
                    this.f7350z = null;
                }
                this.f7340p = 3;
                return true;
            }
            if (bVar.f7357d.f7443a.f7415g == 1) {
                this.A = f10 - 8;
                lVar.k(8);
            }
            if ("audio/ac4".equals(bVar.f7357d.f7443a.f7414f.f12706w)) {
                this.B = bVar.i(this.A, 7);
                nc.c.a(this.A, this.f7333i);
                bVar.f7354a.f(this.f7333i, 7);
                this.B += 7;
            } else {
                this.B = bVar.i(this.A, 0);
            }
            this.A += this.B;
            this.f7340p = 4;
            this.C = 0;
        }
        o oVar = bVar.f7357d.f7443a;
        b0 b0Var = bVar.f7354a;
        long e10 = bVar.e();
        s0 s0Var = this.f7334j;
        if (s0Var != null) {
            e10 = s0Var.a(e10);
        }
        if (oVar.f7418j != 0) {
            byte[] e11 = this.f7330f.e();
            e11[0] = 0;
            e11[1] = 0;
            e11[2] = 0;
            int i13 = oVar.f7418j;
            int i14 = i13 + 1;
            int i15 = 4 - i13;
            while (this.B < this.A) {
                int i16 = this.C;
                if (i16 == 0) {
                    lVar.readFully(e11, i15, i14);
                    this.f7330f.U(0);
                    int q10 = this.f7330f.q();
                    if (q10 >= i12) {
                        this.C = q10 - 1;
                        this.f7329e.U(0);
                        b0Var.f(this.f7329e, i11);
                        b0Var.f(this.f7330f, i12);
                        if (this.G.length > 0 && d0.g(oVar.f7414f.f12706w, e11[i11])) {
                            z11 = i12;
                        } else {
                            z11 = 0;
                        }
                        this.D = z11;
                        this.B += 5;
                        this.A += i15;
                    } else {
                        throw l0.a("Invalid NAL length", th2);
                    }
                } else {
                    if (this.D) {
                        this.f7331g.Q(i16);
                        lVar.readFully(this.f7331g.e(), 0, this.C);
                        b0Var.f(this.f7331g, this.C);
                        a10 = this.C;
                        int q11 = d0.q(this.f7331g.e(), this.f7331g.g());
                        i10 = i12;
                        this.f7331g.U("video/hevc".equals(oVar.f7414f.f12706w) ? 1 : 0);
                        this.f7331g.T(q11);
                        tc.b.a(e10, this.f7331g, this.G);
                    } else {
                        i10 = i12;
                        a10 = b0Var.a(lVar, i16, false);
                    }
                    this.B += a10;
                    this.C -= a10;
                    i12 = i10;
                    th2 = null;
                    i11 = 4;
                }
            }
            z10 = i12;
        } else {
            z10 = 1;
            while (true) {
                int i17 = this.B;
                int i18 = this.A;
                if (i17 >= i18) {
                    break;
                }
                this.B += b0Var.a(lVar, i18 - i17, false);
            }
        }
        int c10 = bVar.c();
        p g10 = bVar.g();
        if (g10 != null) {
            aVar = g10.f7422c;
        } else {
            aVar = null;
        }
        b0Var.d(e10, c10, this.A, 0, aVar);
        s(e10);
        if (!bVar.h()) {
            this.f7350z = null;
        }
        this.f7340p = 3;
        return z10;
    }

    private static boolean N(int i10) {
        if (i10 != 1836019574 && i10 != 1953653099 && i10 != 1835297121 && i10 != 1835626086 && i10 != 1937007212 && i10 != 1836019558 && i10 != 1953653094 && i10 != 1836475768 && i10 != 1701082227) {
            return false;
        }
        return true;
    }

    private static boolean O(int i10) {
        if (i10 != 1751411826 && i10 != 1835296868 && i10 != 1836476516 && i10 != 1936286840 && i10 != 1937011556 && i10 != 1937011827 && i10 != 1668576371 && i10 != 1937011555 && i10 != 1937011578 && i10 != 1937013298 && i10 != 1937007471 && i10 != 1668232756 && i10 != 1937011571 && i10 != 1952867444 && i10 != 1952868452 && i10 != 1953196132 && i10 != 1953654136 && i10 != 1953658222 && i10 != 1886614376 && i10 != 1935763834 && i10 != 1935763823 && i10 != 1936027235 && i10 != 1970628964 && i10 != 1935828848 && i10 != 1936158820 && i10 != 1701606260 && i10 != 1835362404 && i10 != 1701671783) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ tc.k[] b() {
        return new tc.k[]{new g()};
    }

    private static int e(int i10) {
        if (i10 >= 0) {
            return i10;
        }
        throw l0.a("Unexpected negative value: " + i10, null);
    }

    private void g() {
        this.f7340p = 0;
        this.f7343s = 0;
    }

    private c h(SparseArray sparseArray, int i10) {
        if (sparseArray.size() == 1) {
            return (c) sparseArray.valueAt(0);
        }
        return (c) ne.a.e((c) sparseArray.get(i10));
    }

    private static rc.m i(List list) {
        int size = list.size();
        ArrayList arrayList = null;
        for (int i10 = 0; i10 < size; i10++) {
            a.b bVar = (a.b) list.get(i10);
            if (bVar.f7275a == 1886614376) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                byte[] e10 = bVar.f7279b.e();
                UUID f10 = l.f(e10);
                if (f10 == null) {
                    y.i("FragmentedMp4Extractor", "Skipped pssh atom (failed to extract uuid)");
                } else {
                    arrayList.add(new m.b(f10, "video/mp4", e10));
                }
            }
        }
        if (arrayList == null) {
            return null;
        }
        return new rc.m(arrayList);
    }

    private static b j(SparseArray sparseArray) {
        int size = sparseArray.size();
        b bVar = null;
        long j10 = LongCompanionObject.MAX_VALUE;
        for (int i10 = 0; i10 < size; i10++) {
            b bVar2 = (b) sparseArray.valueAt(i10);
            if ((bVar2.f7365l || bVar2.f7359f != bVar2.f7357d.f7444b) && (!bVar2.f7365l || bVar2.f7361h != bVar2.f7355b.f7429e)) {
                long d10 = bVar2.d();
                if (d10 < j10) {
                    bVar = bVar2;
                    j10 = d10;
                }
            }
        }
        return bVar;
    }

    private void k() {
        int i10;
        b0[] b0VarArr = new b0[2];
        this.F = b0VarArr;
        b0 b0Var = this.f7339o;
        int i11 = 0;
        if (b0Var != null) {
            b0VarArr[0] = b0Var;
            i10 = 1;
        } else {
            i10 = 0;
        }
        int i12 = 100;
        if ((this.f7325a & 4) != 0) {
            b0VarArr[i10] = this.E.c(100, 5);
            i12 = 101;
            i10++;
        }
        b0[] b0VarArr2 = (b0[]) w0.P0(this.F, i10);
        this.F = b0VarArr2;
        for (b0 b0Var2 : b0VarArr2) {
            b0Var2.b(K);
        }
        this.G = new b0[this.f7327c.size()];
        while (i11 < this.G.length) {
            b0 c10 = this.E.c(i12, 3);
            c10.b((Format) this.f7327c.get(i11));
            this.G[i11] = c10;
            i11++;
            i12++;
        }
    }

    private static boolean l(o oVar) {
        long[] jArr;
        long[] jArr2 = oVar.f7416h;
        if (jArr2 != null && jArr2.length == 1 && (jArr = oVar.f7417i) != null) {
            long j10 = jArr2[0];
            if (j10 == 0 || w0.X0(j10 + jArr[0], 1000000L, oVar.f7412d) >= oVar.f7413e) {
                return true;
            }
        }
        return false;
    }

    private void n(a.C0110a c0110a) {
        int i10 = c0110a.f7275a;
        if (i10 == 1836019574) {
            r(c0110a);
        } else if (i10 == 1836019558) {
            q(c0110a);
        } else if (!this.f7337m.isEmpty()) {
            ((a.C0110a) this.f7337m.peek()).d(c0110a);
        }
    }

    private void o(h0 h0Var) {
        String str;
        String str2;
        long X0;
        long j10;
        long X02;
        long J2;
        long j11;
        b0[] b0VarArr;
        if (this.F.length != 0) {
            h0Var.U(8);
            int c10 = bd.a.c(h0Var.q());
            if (c10 != 0) {
                if (c10 != 1) {
                    y.i("FragmentedMp4Extractor", "Skipping unsupported emsg version: " + c10);
                    return;
                }
                long J3 = h0Var.J();
                j11 = w0.X0(h0Var.M(), 1000000L, J3);
                long X03 = w0.X0(h0Var.J(), 1000L, J3);
                long J4 = h0Var.J();
                str = (String) ne.a.e(h0Var.B());
                str2 = (String) ne.a.e(h0Var.B());
                X02 = X03;
                J2 = J4;
                X0 = -9223372036854775807L;
            } else {
                str = (String) ne.a.e(h0Var.B());
                str2 = (String) ne.a.e(h0Var.B());
                long J5 = h0Var.J();
                X0 = w0.X0(h0Var.J(), 1000000L, J5);
                long j12 = this.f7349y;
                if (j12 != -9223372036854775807L) {
                    j10 = j12 + X0;
                } else {
                    j10 = -9223372036854775807L;
                }
                X02 = w0.X0(h0Var.J(), 1000L, J5);
                J2 = h0Var.J();
                j11 = j10;
            }
            String str3 = str;
            String str4 = str2;
            byte[] bArr = new byte[h0Var.a()];
            h0Var.l(bArr, 0, h0Var.a());
            h0 h0Var2 = new h0(this.f7335k.a(new id.a(str3, str4, X02, J2, bArr)));
            int a10 = h0Var2.a();
            for (b0 b0Var : this.F) {
                h0Var2.U(0);
                b0Var.f(h0Var2, a10);
            }
            if (j11 == -9223372036854775807L) {
                this.f7338n.addLast(new a(X0, true, a10));
                this.f7346v += a10;
            } else if (!this.f7338n.isEmpty()) {
                this.f7338n.addLast(new a(j11, false, a10));
                this.f7346v += a10;
            } else {
                s0 s0Var = this.f7334j;
                if (s0Var != null && !s0Var.f()) {
                    this.f7338n.addLast(new a(j11, false, a10));
                    this.f7346v += a10;
                    return;
                }
                s0 s0Var2 = this.f7334j;
                if (s0Var2 != null) {
                    j11 = s0Var2.a(j11);
                }
                long j13 = j11;
                for (b0 b0Var2 : this.F) {
                    b0Var2.d(j13, 1, a10, 0, null);
                }
            }
        }
    }

    private void p(a.b bVar, long j10) {
        if (!this.f7337m.isEmpty()) {
            ((a.C0110a) this.f7337m.peek()).e(bVar);
            return;
        }
        int i10 = bVar.f7275a;
        if (i10 == 1936286840) {
            Pair A = A(bVar.f7279b, j10);
            this.f7349y = ((Long) A.first).longValue();
            this.E.q((z) A.second);
            this.H = true;
        } else if (i10 == 1701671783) {
            o(bVar.f7279b);
        }
    }

    private void q(a.C0110a c0110a) {
        boolean z10;
        SparseArray sparseArray = this.f7328d;
        if (this.f7326b != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        u(c0110a, sparseArray, z10, this.f7325a, this.f7332h);
        rc.m i10 = i(c0110a.f7277c);
        if (i10 != null) {
            int size = this.f7328d.size();
            for (int i11 = 0; i11 < size; i11++) {
                ((b) this.f7328d.valueAt(i11)).n(i10);
            }
        }
        if (this.f7347w != -9223372036854775807L) {
            int size2 = this.f7328d.size();
            for (int i12 = 0; i12 < size2; i12++) {
                ((b) this.f7328d.valueAt(i12)).l(this.f7347w);
            }
            this.f7347w = -9223372036854775807L;
        }
    }

    private void r(a.C0110a c0110a) {
        boolean z10;
        boolean z11;
        int i10 = 0;
        boolean z12 = true;
        if (this.f7326b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.h(z10, "Unexpected moov box.");
        rc.m i11 = i(c0110a.f7277c);
        a.C0110a c0110a2 = (a.C0110a) ne.a.e(c0110a.f(1836475768));
        SparseArray sparseArray = new SparseArray();
        int size = c0110a2.f7277c.size();
        long j10 = -9223372036854775807L;
        for (int i12 = 0; i12 < size; i12++) {
            a.b bVar = (a.b) c0110a2.f7277c.get(i12);
            int i13 = bVar.f7275a;
            if (i13 == 1953654136) {
                Pair E = E(bVar.f7279b);
                sparseArray.put(((Integer) E.first).intValue(), (c) E.second);
            } else if (i13 == 1835362404) {
                j10 = t(bVar.f7279b);
            }
        }
        v vVar = new v();
        if ((this.f7325a & 16) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        List B = bd.b.B(c0110a, vVar, j10, i11, z11, false, new ii.f() { // from class: bd.f
            @Override // ii.f
            public final Object apply(Object obj) {
                return g.this.m((o) obj);
            }
        });
        int size2 = B.size();
        if (this.f7328d.size() == 0) {
            while (i10 < size2) {
                r rVar = (r) B.get(i10);
                o oVar = rVar.f7443a;
                this.f7328d.put(oVar.f7409a, new b(this.E.c(i10, oVar.f7410b), rVar, h(sparseArray, oVar.f7409a)));
                this.f7348x = Math.max(this.f7348x, oVar.f7413e);
                i10++;
            }
            this.E.s();
            return;
        }
        if (this.f7328d.size() != size2) {
            z12 = false;
        }
        ne.a.g(z12);
        while (i10 < size2) {
            r rVar2 = (r) B.get(i10);
            o oVar2 = rVar2.f7443a;
            ((b) this.f7328d.get(oVar2.f7409a)).j(rVar2, h(sparseArray, oVar2.f7409a));
            i10++;
        }
    }

    private void s(long j10) {
        while (!this.f7338n.isEmpty()) {
            a aVar = (a) this.f7338n.removeFirst();
            this.f7346v -= aVar.f7353c;
            long j11 = aVar.f7351a;
            if (aVar.f7352b) {
                j11 += j10;
            }
            s0 s0Var = this.f7334j;
            if (s0Var != null) {
                j11 = s0Var.a(j11);
            }
            long j12 = j11;
            for (b0 b0Var : this.F) {
                b0Var.d(j12, 1, aVar.f7353c, this.f7346v, null);
            }
        }
    }

    private static long t(h0 h0Var) {
        h0Var.U(8);
        if (bd.a.c(h0Var.q()) == 0) {
            return h0Var.J();
        }
        return h0Var.M();
    }

    private static void u(a.C0110a c0110a, SparseArray sparseArray, boolean z10, int i10, byte[] bArr) {
        int size = c0110a.f7278d.size();
        for (int i11 = 0; i11 < size; i11++) {
            a.C0110a c0110a2 = (a.C0110a) c0110a.f7278d.get(i11);
            if (c0110a2.f7275a == 1953653094) {
                D(c0110a2, sparseArray, z10, i10, bArr);
            }
        }
    }

    private static void v(h0 h0Var, q qVar) {
        long M;
        h0Var.U(8);
        int q10 = h0Var.q();
        if ((bd.a.b(q10) & 1) == 1) {
            h0Var.V(8);
        }
        int L = h0Var.L();
        if (L == 1) {
            int c10 = bd.a.c(q10);
            long j10 = qVar.f7428d;
            if (c10 == 0) {
                M = h0Var.J();
            } else {
                M = h0Var.M();
            }
            qVar.f7428d = j10 + M;
            return;
        }
        throw l0.a("Unexpected saio entry count: " + L, null);
    }

    private static void w(p pVar, h0 h0Var, q qVar) {
        int i10;
        boolean z10;
        int i11 = pVar.f7423d;
        h0Var.U(8);
        boolean z11 = true;
        if ((bd.a.b(h0Var.q()) & 1) == 1) {
            h0Var.V(8);
        }
        int H = h0Var.H();
        int L = h0Var.L();
        if (L <= qVar.f7430f) {
            if (H == 0) {
                boolean[] zArr = qVar.f7437m;
                i10 = 0;
                for (int i12 = 0; i12 < L; i12++) {
                    int H2 = h0Var.H();
                    i10 += H2;
                    if (H2 > i11) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    zArr[i12] = z10;
                }
            } else {
                if (H <= i11) {
                    z11 = false;
                }
                i10 = H * L;
                Arrays.fill(qVar.f7437m, 0, L, z11);
            }
            Arrays.fill(qVar.f7437m, L, qVar.f7430f, false);
            if (i10 > 0) {
                qVar.d(i10);
                return;
            }
            return;
        }
        throw l0.a("Saiz sample count " + L + " is greater than fragment sample count" + qVar.f7430f, null);
    }

    private static void x(a.C0110a c0110a, String str, q qVar) {
        boolean z10;
        byte[] bArr = null;
        h0 h0Var = null;
        h0 h0Var2 = null;
        for (int i10 = 0; i10 < c0110a.f7277c.size(); i10++) {
            a.b bVar = (a.b) c0110a.f7277c.get(i10);
            h0 h0Var3 = bVar.f7279b;
            int i11 = bVar.f7275a;
            if (i11 == 1935828848) {
                h0Var3.U(12);
                if (h0Var3.q() == 1936025959) {
                    h0Var = h0Var3;
                }
            } else if (i11 == 1936158820) {
                h0Var3.U(12);
                if (h0Var3.q() == 1936025959) {
                    h0Var2 = h0Var3;
                }
            }
        }
        if (h0Var != null && h0Var2 != null) {
            h0Var.U(8);
            int c10 = bd.a.c(h0Var.q());
            h0Var.V(4);
            if (c10 == 1) {
                h0Var.V(4);
            }
            if (h0Var.q() == 1) {
                h0Var2.U(8);
                int c11 = bd.a.c(h0Var2.q());
                h0Var2.V(4);
                if (c11 == 1) {
                    if (h0Var2.J() == 0) {
                        throw l0.d("Variable length description in sgpd found (unsupported)");
                    }
                } else if (c11 >= 2) {
                    h0Var2.V(4);
                }
                if (h0Var2.J() == 1) {
                    h0Var2.V(1);
                    int H = h0Var2.H();
                    int i12 = (H & 240) >> 4;
                    int i13 = H & 15;
                    if (h0Var2.H() == 1) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (z10) {
                        int H2 = h0Var2.H();
                        byte[] bArr2 = new byte[16];
                        h0Var2.l(bArr2, 0, 16);
                        if (H2 == 0) {
                            int H3 = h0Var2.H();
                            bArr = new byte[H3];
                            h0Var2.l(bArr, 0, H3);
                        }
                        qVar.f7436l = true;
                        qVar.f7438n = new p(z10, str, H2, bArr2, i12, i13, bArr);
                        return;
                    }
                    return;
                }
                throw l0.d("Entry count in sgpd != 1 (unsupported).");
            }
            throw l0.d("Entry count in sbgp != 1 (unsupported).");
        }
    }

    private static void y(h0 h0Var, int i10, q qVar) {
        boolean z10;
        h0Var.U(i10 + 8);
        int b10 = bd.a.b(h0Var.q());
        if ((b10 & 1) == 0) {
            if ((b10 & 2) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            int L = h0Var.L();
            if (L == 0) {
                Arrays.fill(qVar.f7437m, 0, qVar.f7430f, false);
                return;
            } else if (L == qVar.f7430f) {
                Arrays.fill(qVar.f7437m, 0, L, z10);
                qVar.d(h0Var.a());
                qVar.a(h0Var);
                return;
            } else {
                throw l0.a("Senc sample count " + L + " is different from fragment sample count" + qVar.f7430f, null);
            }
        }
        throw l0.d("Overriding TrackEncryptionBox parameters is unsupported.");
    }

    private static void z(h0 h0Var, q qVar) {
        y(h0Var, 0, qVar);
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        int size = this.f7328d.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((b) this.f7328d.valueAt(i10)).k();
        }
        this.f7338n.clear();
        this.f7346v = 0;
        this.f7347w = j11;
        this.f7337m.clear();
        g();
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.E = mVar;
        g();
        k();
        o oVar = this.f7326b;
        if (oVar != null) {
            this.f7328d.put(0, new b(mVar.c(0, oVar.f7410b), new r(this.f7326b, new long[0], new int[0], 0, new long[0], new int[0], 0L), new c(0, 0, 0, 0)));
            this.E.s();
        }
    }

    @Override // tc.k
    public int d(tc.l lVar, tc.y yVar) {
        while (true) {
            int i10 = this.f7340p;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (M(lVar)) {
                            return 0;
                        }
                    } else {
                        L(lVar);
                    }
                } else {
                    K(lVar);
                }
            } else if (!J(lVar)) {
                return -1;
            }
        }
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        return n.b(lVar);
    }

    public g(int i10) {
        this(i10, null);
    }

    public g(int i10, s0 s0Var) {
        this(i10, s0Var, null, Collections.EMPTY_LIST);
    }

    public g(int i10, s0 s0Var, o oVar) {
        this(i10, s0Var, oVar, Collections.EMPTY_LIST);
    }

    public g(int i10, s0 s0Var, o oVar, List list) {
        this(i10, s0Var, oVar, list, null);
    }

    public g(int i10, s0 s0Var, o oVar, List list, b0 b0Var) {
        this.f7325a = i10;
        this.f7334j = s0Var;
        this.f7326b = oVar;
        this.f7327c = Collections.unmodifiableList(list);
        this.f7339o = b0Var;
        this.f7335k = new id.c();
        this.f7336l = new h0(16);
        this.f7329e = new h0(d0.f40148a);
        this.f7330f = new h0(5);
        this.f7331g = new h0();
        byte[] bArr = new byte[16];
        this.f7332h = bArr;
        this.f7333i = new h0(bArr);
        this.f7337m = new ArrayDeque();
        this.f7338n = new ArrayDeque();
        this.f7328d = new SparseArray();
        this.f7348x = -9223372036854775807L;
        this.f7347w = -9223372036854775807L;
        this.f7349y = -9223372036854775807L;
        this.E = tc.m.f49489l;
        this.F = new b0[0];
        this.G = new b0[0];
    }

    @Override // tc.k
    public void release() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public o m(o oVar) {
        return oVar;
    }
}
