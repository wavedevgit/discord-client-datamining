package cd;

import cd.i;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Arrays;
import lc.l0;
import mi.s;
import ne.h0;
import tc.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends i {

    /* renamed from: n  reason: collision with root package name */
    private a f7549n;

    /* renamed from: o  reason: collision with root package name */
    private int f7550o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f7551p;

    /* renamed from: q  reason: collision with root package name */
    private e0.c f7552q;

    /* renamed from: r  reason: collision with root package name */
    private e0.a f7553r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final e0.c f7554a;

        /* renamed from: b  reason: collision with root package name */
        public final e0.a f7555b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f7556c;

        /* renamed from: d  reason: collision with root package name */
        public final e0.b[] f7557d;

        /* renamed from: e  reason: collision with root package name */
        public final int f7558e;

        public a(e0.c cVar, e0.a aVar, byte[] bArr, e0.b[] bVarArr, int i10) {
            this.f7554a = cVar;
            this.f7555b = aVar;
            this.f7556c = bArr;
            this.f7557d = bVarArr;
            this.f7558e = i10;
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
        if (!aVar.f7557d[p(b10, aVar.f7558e, 1)].f50540a) {
            return aVar.f7554a.f50550g;
        }
        return aVar.f7554a.f50551h;
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
        this.f7551p = z10;
        e0.c cVar = this.f7552q;
        if (cVar != null) {
            i10 = cVar.f50550g;
        }
        this.f7550o = i10;
    }

    @Override // cd.i
    protected long f(h0 h0Var) {
        int i10 = 0;
        if ((h0Var.e()[0] & 1) == 1) {
            return -1L;
        }
        int o10 = o(h0Var.e()[0], (a) ne.a.i(this.f7549n));
        if (this.f7551p) {
            i10 = (this.f7550o + o10) / 4;
        }
        long j10 = i10;
        n(h0Var, j10);
        this.f7551p = true;
        this.f7550o = o10;
        return j10;
    }

    @Override // cd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (this.f7549n != null) {
            ne.a.e(bVar.f7547a);
            return false;
        }
        a q10 = q(h0Var);
        this.f7549n = q10;
        if (q10 == null) {
            return true;
        }
        e0.c cVar = q10.f7554a;
        ArrayList arrayList = new ArrayList();
        arrayList.add(cVar.f50553j);
        arrayList.add(q10.f7556c);
        bVar.f7547a = new Format.b().g0("audio/vorbis").I(cVar.f50548e).b0(cVar.f50547d).J(cVar.f50545b).h0(cVar.f50546c).V(arrayList).Z(e0.c(s.o(q10.f7555b.f50538b))).G();
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // cd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f7549n = null;
            this.f7552q = null;
            this.f7553r = null;
        }
        this.f7550o = 0;
        this.f7551p = false;
    }

    a q(h0 h0Var) {
        e0.c cVar = this.f7552q;
        if (cVar == null) {
            this.f7552q = e0.j(h0Var);
            return null;
        }
        e0.a aVar = this.f7553r;
        if (aVar == null) {
            this.f7553r = e0.h(h0Var);
            return null;
        }
        byte[] bArr = new byte[h0Var.g()];
        System.arraycopy(h0Var.e(), 0, bArr, 0, h0Var.g());
        e0.b[] k10 = e0.k(h0Var, cVar.f50545b);
        return new a(cVar, aVar, bArr, k10, e0.a(k10.length - 1));
    }
}
