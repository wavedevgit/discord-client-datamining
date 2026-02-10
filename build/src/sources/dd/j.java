package dd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import dd.i;
import java.util.ArrayList;
import java.util.Arrays;
import mc.l0;
import oe.h0;
import qi.s;
import uc.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends i {

    /* renamed from: n  reason: collision with root package name */
    private a f21620n;

    /* renamed from: o  reason: collision with root package name */
    private int f21621o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21622p;

    /* renamed from: q  reason: collision with root package name */
    private e0.c f21623q;

    /* renamed from: r  reason: collision with root package name */
    private e0.a f21624r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final e0.c f21625a;

        /* renamed from: b  reason: collision with root package name */
        public final e0.a f21626b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f21627c;

        /* renamed from: d  reason: collision with root package name */
        public final e0.b[] f21628d;

        /* renamed from: e  reason: collision with root package name */
        public final int f21629e;

        public a(e0.c cVar, e0.a aVar, byte[] bArr, e0.b[] bVarArr, int i10) {
            this.f21625a = cVar;
            this.f21626b = aVar;
            this.f21627c = bArr;
            this.f21628d = bVarArr;
            this.f21629e = i10;
        }
    }

    static void n(h0 h0Var, long j10) {
        if (h0Var.b() < h0Var.g() + 4) {
            h0Var.R(Arrays.copyOf(h0Var.e(), h0Var.g() + 4));
        } else {
            h0Var.T(h0Var.g() + 4);
        }
        byte[] e10 = h0Var.e();
        e10[h0Var.g() - 4] = (byte) (j10 & 255);
        e10[h0Var.g() - 3] = (byte) ((j10 >>> 8) & 255);
        e10[h0Var.g() - 2] = (byte) ((j10 >>> 16) & 255);
        e10[h0Var.g() - 1] = (byte) ((j10 >>> 24) & 255);
    }

    private static int o(byte b10, a aVar) {
        if (!aVar.f21628d[p(b10, aVar.f21629e, 1)].f50651a) {
            return aVar.f21625a.f50661g;
        }
        return aVar.f21625a.f50662h;
    }

    static int p(byte b10, int i10, int i11) {
        return (b10 >> i11) & (SetSpanOperation.SPAN_MAX_PRIORITY >>> (8 - i10));
    }

    public static boolean r(h0 h0Var) {
        try {
            return e0.m(1, h0Var, true);
        } catch (l0 unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dd.i
    public void e(long j10) {
        boolean z10;
        super.e(j10);
        int i10 = 0;
        if (j10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f21622p = z10;
        e0.c cVar = this.f21623q;
        if (cVar != null) {
            i10 = cVar.f50661g;
        }
        this.f21621o = i10;
    }

    @Override // dd.i
    protected long f(h0 h0Var) {
        int i10 = 0;
        if ((h0Var.e()[0] & 1) == 1) {
            return -1L;
        }
        int o10 = o(h0Var.e()[0], (a) oe.a.i(this.f21620n));
        if (this.f21622p) {
            i10 = (this.f21621o + o10) / 4;
        }
        long j10 = i10;
        n(h0Var, j10);
        this.f21622p = true;
        this.f21621o = o10;
        return j10;
    }

    @Override // dd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (this.f21620n != null) {
            oe.a.e(bVar.f21618a);
            return false;
        }
        a q10 = q(h0Var);
        this.f21620n = q10;
        if (q10 == null) {
            return true;
        }
        e0.c cVar = q10.f21625a;
        ArrayList arrayList = new ArrayList();
        arrayList.add(cVar.f50664j);
        arrayList.add(q10.f21627c);
        bVar.f21618a = new Format.b().g0("audio/vorbis").I(cVar.f50659e).b0(cVar.f50658d).J(cVar.f50656b).h0(cVar.f50657c).V(arrayList).Z(e0.c(s.p(q10.f21626b.f50649b))).G();
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f21620n = null;
            this.f21623q = null;
            this.f21624r = null;
        }
        this.f21621o = 0;
        this.f21622p = false;
    }

    a q(h0 h0Var) {
        e0.c cVar = this.f21623q;
        if (cVar == null) {
            this.f21623q = e0.j(h0Var);
            return null;
        }
        e0.a aVar = this.f21624r;
        if (aVar == null) {
            this.f21624r = e0.h(h0Var);
            return null;
        }
        byte[] bArr = new byte[h0Var.g()];
        System.arraycopy(h0Var.e(), 0, bArr, 0, h0Var.g());
        e0.b[] k10 = e0.k(h0Var, cVar.f50656b);
        return new a(cVar, aVar, bArr, k10, e0.a(k10.length - 1));
    }
}
