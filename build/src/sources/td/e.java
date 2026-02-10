package td;

import android.util.SparseArray;
import com.google.android.exoplayer2.Format;
import java.util.List;
import nc.t1;
import oe.c0;
import oe.h0;
import oe.w0;
import td.g;
import uc.b0;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements uc.m, g {

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f48688u = new g.a() { // from class: td.d
        @Override // td.g.a
        public final g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
            return e.f(i10, format, z10, list, b0Var, t1Var);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final y f48689v = new y();

    /* renamed from: d  reason: collision with root package name */
    private final uc.k f48690d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48691e;

    /* renamed from: i  reason: collision with root package name */
    private final Format f48692i;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f48693o = new SparseArray();

    /* renamed from: p  reason: collision with root package name */
    private boolean f48694p;

    /* renamed from: q  reason: collision with root package name */
    private g.b f48695q;

    /* renamed from: r  reason: collision with root package name */
    private long f48696r;

    /* renamed from: s  reason: collision with root package name */
    private z f48697s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f48698t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f48699a;

        /* renamed from: b  reason: collision with root package name */
        private final int f48700b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f48701c;

        /* renamed from: d  reason: collision with root package name */
        private final uc.j f48702d = new uc.j();

        /* renamed from: e  reason: collision with root package name */
        public Format f48703e;

        /* renamed from: f  reason: collision with root package name */
        private b0 f48704f;

        /* renamed from: g  reason: collision with root package name */
        private long f48705g;

        public a(int i10, int i11, Format format) {
            this.f48699a = i10;
            this.f48700b = i11;
            this.f48701c = format;
        }

        @Override // uc.b0
        public void a(long j10, int i10, int i11, int i12, b0.a aVar) {
            long j11 = this.f48705g;
            if (j11 != -9223372036854775807L && j10 >= j11) {
                this.f48704f = this.f48702d;
            }
            ((b0) w0.j(this.f48704f)).a(j10, i10, i11, i12, aVar);
        }

        @Override // uc.b0
        public int b(me.j jVar, int i10, boolean z10, int i11) {
            return ((b0) w0.j(this.f48704f)).f(jVar, i10, z10);
        }

        @Override // uc.b0
        public void c(Format format) {
            Format format2 = this.f48701c;
            if (format2 != null) {
                format = format.j(format2);
            }
            this.f48703e = format;
            ((b0) w0.j(this.f48704f)).c(this.f48703e);
        }

        @Override // uc.b0
        public void d(h0 h0Var, int i10, int i11) {
            ((b0) w0.j(this.f48704f)).e(h0Var, i10);
        }

        public void g(g.b bVar, long j10) {
            if (bVar == null) {
                this.f48704f = this.f48702d;
                return;
            }
            this.f48705g = j10;
            b0 c10 = bVar.c(this.f48699a, this.f48700b);
            this.f48704f = c10;
            Format format = this.f48703e;
            if (format != null) {
                c10.c(format);
            }
        }
    }

    public e(uc.k kVar, int i10, Format format) {
        this.f48690d = kVar;
        this.f48691e = i10;
        this.f48692i = format;
    }

    public static /* synthetic */ g f(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
        int i11;
        uc.k gVar;
        String str = format.f12303v;
        if (c0.r(str)) {
            return null;
        }
        if (c0.q(str)) {
            gVar = new ad.e(1);
        } else {
            if (z10) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            gVar = new cd.g(i11, null, null, list, b0Var);
        }
        return new e(gVar, i10, format);
    }

    @Override // td.g
    public boolean a(uc.l lVar) {
        boolean z10;
        int h10 = this.f48690d.h(lVar, f48689v);
        if (h10 != 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (h10 != 0) {
            return false;
        }
        return true;
    }

    @Override // td.g
    public void b(g.b bVar, long j10, long j11) {
        this.f48695q = bVar;
        this.f48696r = j11;
        if (!this.f48694p) {
            this.f48690d.c(this);
            if (j10 != -9223372036854775807L) {
                this.f48690d.a(0L, j10);
            }
            this.f48694p = true;
            return;
        }
        uc.k kVar = this.f48690d;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        kVar.a(0L, j10);
        for (int i10 = 0; i10 < this.f48693o.size(); i10++) {
            ((a) this.f48693o.valueAt(i10)).g(bVar, j11);
        }
    }

    @Override // uc.m
    public b0 c(int i10, int i11) {
        boolean z10;
        Format format;
        a aVar = (a) this.f48693o.get(i10);
        if (aVar == null) {
            if (this.f48698t == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (i11 == this.f48691e) {
                format = this.f48692i;
            } else {
                format = null;
            }
            aVar = new a(i10, i11, format);
            aVar.g(this.f48695q, this.f48696r);
            this.f48693o.put(i10, aVar);
        }
        return aVar;
    }

    @Override // td.g
    public uc.c d() {
        z zVar = this.f48697s;
        if (zVar instanceof uc.c) {
            return (uc.c) zVar;
        }
        return null;
    }

    @Override // td.g
    public Format[] e() {
        return this.f48698t;
    }

    @Override // uc.m
    public void j(z zVar) {
        this.f48697s = zVar;
    }

    @Override // uc.m
    public void q() {
        Format[] formatArr = new Format[this.f48693o.size()];
        for (int i10 = 0; i10 < this.f48693o.size(); i10++) {
            formatArr[i10] = (Format) oe.a.i(((a) this.f48693o.valueAt(i10)).f48703e);
        }
        this.f48698t = formatArr;
    }

    @Override // td.g
    public void release() {
        this.f48690d.release();
    }
}
