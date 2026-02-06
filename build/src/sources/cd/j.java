package cd;

import cd.i;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Arrays;
import lc.l0;
import ne.h0;
import ni.s;
import tc.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends i {

    /* renamed from: n  reason: collision with root package name */
    private a f7394n;

    /* renamed from: o  reason: collision with root package name */
    private int f7395o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f7396p;

    /* renamed from: q  reason: collision with root package name */
    private e0.c f7397q;

    /* renamed from: r  reason: collision with root package name */
    private e0.a f7398r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final e0.c f7399a;

        /* renamed from: b  reason: collision with root package name */
        public final e0.a f7400b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f7401c;

        /* renamed from: d  reason: collision with root package name */
        public final e0.b[] f7402d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7403e;

        public a(e0.c cVar, e0.a aVar, byte[] bArr, e0.b[] bVarArr, int i10) {
            this.f7399a = cVar;
            this.f7400b = aVar;
            this.f7401c = bArr;
            this.f7402d = bVarArr;
            this.f7403e = i10;
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
        if (!aVar.f7402d[p(b10, aVar.f7403e, 1)].f50516a) {
            return aVar.f7399a.f50526g;
        }
        return aVar.f7399a.f50527h;
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
        this.f7396p = z10;
        e0.c cVar = this.f7397q;
        if (cVar != null) {
            i10 = cVar.f50526g;
        }
        this.f7395o = i10;
    }

    @Override // cd.i
    protected long f(h0 h0Var) {
        int i10 = 0;
        if ((h0Var.e()[0] & 1) == 1) {
            return -1L;
        }
        int o10 = o(h0Var.e()[0], (a) ne.a.i(this.f7394n));
        if (this.f7396p) {
            i10 = (this.f7395o + o10) / 4;
        }
        long j10 = i10;
        n(h0Var, j10);
        this.f7396p = true;
        this.f7395o = o10;
        return j10;
    }

    @Override // cd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (this.f7394n != null) {
            ne.a.e(bVar.f7392a);
            return false;
        }
        a q10 = q(h0Var);
        this.f7394n = q10;
        if (q10 == null) {
            return true;
        }
        e0.c cVar = q10.f7399a;
        ArrayList arrayList = new ArrayList();
        arrayList.add(cVar.f50529j);
        arrayList.add(q10.f7401c);
        bVar.f7392a = new Format.b().g0("audio/vorbis").I(cVar.f50524e).b0(cVar.f50523d).J(cVar.f50521b).h0(cVar.f50522c).V(arrayList).Z(e0.c(s.p(q10.f7400b.f50514b))).G();
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // cd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f7394n = null;
            this.f7397q = null;
            this.f7398r = null;
        }
        this.f7395o = 0;
        this.f7396p = false;
    }

    a q(h0 h0Var) {
        e0.c cVar = this.f7397q;
        if (cVar == null) {
            this.f7397q = e0.j(h0Var);
            return null;
        }
        e0.a aVar = this.f7398r;
        if (aVar == null) {
            this.f7398r = e0.h(h0Var);
            return null;
        }
        byte[] bArr = new byte[h0Var.g()];
        System.arraycopy(h0Var.e(), 0, bArr, 0, h0Var.g());
        e0.b[] k10 = e0.k(h0Var, cVar.f50521b);
        return new a(cVar, aVar, bArr, k10, e0.a(k10.length - 1));
    }
}
