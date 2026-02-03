package cd;

import cd.i;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Arrays;
import ji.s;
import lc.l0;
import ne.h0;
import tc.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends i {

    /* renamed from: n  reason: collision with root package name */
    private a f8144n;

    /* renamed from: o  reason: collision with root package name */
    private int f8145o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f8146p;

    /* renamed from: q  reason: collision with root package name */
    private e0.c f8147q;

    /* renamed from: r  reason: collision with root package name */
    private e0.a f8148r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final e0.c f8149a;

        /* renamed from: b  reason: collision with root package name */
        public final e0.a f8150b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f8151c;

        /* renamed from: d  reason: collision with root package name */
        public final e0.b[] f8152d;

        /* renamed from: e  reason: collision with root package name */
        public final int f8153e;

        public a(e0.c cVar, e0.a aVar, byte[] bArr, e0.b[] bVarArr, int i10) {
            this.f8149a = cVar;
            this.f8150b = aVar;
            this.f8151c = bArr;
            this.f8152d = bVarArr;
            this.f8153e = i10;
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
        if (!aVar.f8152d[p(b10, aVar.f8153e, 1)].f49727a) {
            return aVar.f8149a.f49737g;
        }
        return aVar.f8149a.f49738h;
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
    @Override // cd.i
    public void e(long j10) {
        boolean z10;
        super.e(j10);
        int i10 = 0;
        if (j10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f8146p = z10;
        e0.c cVar = this.f8147q;
        if (cVar != null) {
            i10 = cVar.f49737g;
        }
        this.f8145o = i10;
    }

    @Override // cd.i
    protected long f(h0 h0Var) {
        int i10 = 0;
        if ((h0Var.e()[0] & 1) == 1) {
            return -1L;
        }
        int o10 = o(h0Var.e()[0], (a) ne.a.i(this.f8144n));
        if (this.f8146p) {
            i10 = (this.f8145o + o10) / 4;
        }
        long j10 = i10;
        n(h0Var, j10);
        this.f8146p = true;
        this.f8145o = o10;
        return j10;
    }

    @Override // cd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (this.f8144n != null) {
            ne.a.e(bVar.f8142a);
            return false;
        }
        a q10 = q(h0Var);
        this.f8144n = q10;
        if (q10 == null) {
            return true;
        }
        e0.c cVar = q10.f8149a;
        ArrayList arrayList = new ArrayList();
        arrayList.add(cVar.f49740j);
        arrayList.add(q10.f8151c);
        bVar.f8142a = new Format.b().g0("audio/vorbis").I(cVar.f49735e).b0(cVar.f49734d).J(cVar.f49732b).h0(cVar.f49733c).V(arrayList).Z(e0.c(s.n(q10.f8150b.f49725b))).G();
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // cd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f8144n = null;
            this.f8147q = null;
            this.f8148r = null;
        }
        this.f8145o = 0;
        this.f8146p = false;
    }

    a q(h0 h0Var) {
        e0.c cVar = this.f8147q;
        if (cVar == null) {
            this.f8147q = e0.j(h0Var);
            return null;
        }
        e0.a aVar = this.f8148r;
        if (aVar == null) {
            this.f8148r = e0.h(h0Var);
            return null;
        }
        byte[] bArr = new byte[h0Var.g()];
        System.arraycopy(h0Var.e(), 0, bArr, 0, h0Var.g());
        e0.b[] k10 = e0.k(h0Var, cVar.f49732b);
        return new a(cVar, aVar, bArr, k10, e0.a(k10.length - 1));
    }
}
