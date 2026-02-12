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
    private a f21621n;

    /* renamed from: o  reason: collision with root package name */
    private int f21622o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21623p;

    /* renamed from: q  reason: collision with root package name */
    private e0.c f21624q;

    /* renamed from: r  reason: collision with root package name */
    private e0.a f21625r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final e0.c f21626a;

        /* renamed from: b  reason: collision with root package name */
        public final e0.a f21627b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f21628c;

        /* renamed from: d  reason: collision with root package name */
        public final e0.b[] f21629d;

        /* renamed from: e  reason: collision with root package name */
        public final int f21630e;

        public a(e0.c cVar, e0.a aVar, byte[] bArr, e0.b[] bVarArr, int i10) {
            this.f21626a = cVar;
            this.f21627b = aVar;
            this.f21628c = bArr;
            this.f21629d = bVarArr;
            this.f21630e = i10;
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
        if (!aVar.f21629d[p(b10, aVar.f21630e, 1)].f50652a) {
            return aVar.f21626a.f50662g;
        }
        return aVar.f21626a.f50663h;
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
        this.f21623p = z10;
        e0.c cVar = this.f21624q;
        if (cVar != null) {
            i10 = cVar.f50662g;
        }
        this.f21622o = i10;
    }

    @Override // dd.i
    protected long f(h0 h0Var) {
        int i10 = 0;
        if ((h0Var.e()[0] & 1) == 1) {
            return -1L;
        }
        int o10 = o(h0Var.e()[0], (a) oe.a.i(this.f21621n));
        if (this.f21623p) {
            i10 = (this.f21622o + o10) / 4;
        }
        long j10 = i10;
        n(h0Var, j10);
        this.f21623p = true;
        this.f21622o = o10;
        return j10;
    }

    @Override // dd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (this.f21621n != null) {
            oe.a.e(bVar.f21619a);
            return false;
        }
        a q10 = q(h0Var);
        this.f21621n = q10;
        if (q10 == null) {
            return true;
        }
        e0.c cVar = q10.f21626a;
        ArrayList arrayList = new ArrayList();
        arrayList.add(cVar.f50665j);
        arrayList.add(q10.f21628c);
        bVar.f21619a = new Format.b().g0("audio/vorbis").I(cVar.f50660e).b0(cVar.f50659d).J(cVar.f50657b).h0(cVar.f50658c).V(arrayList).Z(e0.c(s.p(q10.f21627b.f50650b))).G();
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f21621n = null;
            this.f21624q = null;
            this.f21625r = null;
        }
        this.f21622o = 0;
        this.f21623p = false;
    }

    a q(h0 h0Var) {
        e0.c cVar = this.f21624q;
        if (cVar == null) {
            this.f21624q = e0.j(h0Var);
            return null;
        }
        e0.a aVar = this.f21625r;
        if (aVar == null) {
            this.f21625r = e0.h(h0Var);
            return null;
        }
        byte[] bArr = new byte[h0Var.g()];
        System.arraycopy(h0Var.e(), 0, bArr, 0, h0Var.g());
        e0.b[] k10 = e0.k(h0Var, cVar.f50657b);
        return new a(cVar, aVar, bArr, k10, e0.a(k10.length - 1));
    }
}
