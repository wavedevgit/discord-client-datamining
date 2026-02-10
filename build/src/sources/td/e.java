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
    public static final g.a f50756u = new g.a() { // from class: td.d
        @Override // td.g.a
        public final g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
            return e.f(i10, format, z10, list, b0Var, t1Var);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final y f50757v = new y();

    /* renamed from: d  reason: collision with root package name */
    private final uc.k f50758d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50759e;

    /* renamed from: i  reason: collision with root package name */
    private final Format f50760i;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f50761o = new SparseArray();

    /* renamed from: p  reason: collision with root package name */
    private boolean f50762p;

    /* renamed from: q  reason: collision with root package name */
    private g.b f50763q;

    /* renamed from: r  reason: collision with root package name */
    private long f50764r;

    /* renamed from: s  reason: collision with root package name */
    private z f50765s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f50766t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f50767a;

        /* renamed from: b  reason: collision with root package name */
        private final int f50768b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f50769c;

        /* renamed from: d  reason: collision with root package name */
        private final uc.j f50770d = new uc.j();

        /* renamed from: e  reason: collision with root package name */
        public Format f50771e;

        /* renamed from: f  reason: collision with root package name */
        private b0 f50772f;

        /* renamed from: g  reason: collision with root package name */
        private long f50773g;

        public a(int i10, int i11, Format format) {
            this.f50767a = i10;
            this.f50768b = i11;
            this.f50769c = format;
        }

        @Override // uc.b0
        public void a(long j10, int i10, int i11, int i12, b0.a aVar) {
            long j11 = this.f50773g;
            if (j11 != -9223372036854775807L && j10 >= j11) {
                this.f50772f = this.f50770d;
            }
            ((b0) w0.j(this.f50772f)).a(j10, i10, i11, i12, aVar);
        }

        @Override // uc.b0
        public int b(me.j jVar, int i10, boolean z10, int i11) {
            return ((b0) w0.j(this.f50772f)).f(jVar, i10, z10);
        }

        @Override // uc.b0
        public void c(Format format) {
            Format format2 = this.f50769c;
            if (format2 != null) {
                format = format.j(format2);
            }
            this.f50771e = format;
            ((b0) w0.j(this.f50772f)).c(this.f50771e);
        }

        @Override // uc.b0
        public void d(h0 h0Var, int i10, int i11) {
            ((b0) w0.j(this.f50772f)).e(h0Var, i10);
        }

        public void g(g.b bVar, long j10) {
            if (bVar == null) {
                this.f50772f = this.f50770d;
                return;
            }
            this.f50773g = j10;
            b0 c10 = bVar.c(this.f50767a, this.f50768b);
            this.f50772f = c10;
            Format format = this.f50771e;
            if (format != null) {
                c10.c(format);
            }
        }
    }

    public e(uc.k kVar, int i10, Format format) {
        this.f50758d = kVar;
        this.f50759e = i10;
        this.f50760i = format;
    }

    public static /* synthetic */ g f(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
        int i11;
        uc.k gVar;
        String str = format.f11726v;
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
        int h10 = this.f50758d.h(lVar, f50757v);
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
        this.f50763q = bVar;
        this.f50764r = j11;
        if (!this.f50762p) {
            this.f50758d.c(this);
            if (j10 != -9223372036854775807L) {
                this.f50758d.a(0L, j10);
            }
            this.f50762p = true;
            return;
        }
        uc.k kVar = this.f50758d;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        kVar.a(0L, j10);
        for (int i10 = 0; i10 < this.f50761o.size(); i10++) {
            ((a) this.f50761o.valueAt(i10)).g(bVar, j11);
        }
    }

    @Override // uc.m
    public b0 c(int i10, int i11) {
        boolean z10;
        Format format;
        a aVar = (a) this.f50761o.get(i10);
        if (aVar == null) {
            if (this.f50766t == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (i11 == this.f50759e) {
                format = this.f50760i;
            } else {
                format = null;
            }
            aVar = new a(i10, i11, format);
            aVar.g(this.f50763q, this.f50764r);
            this.f50761o.put(i10, aVar);
        }
        return aVar;
    }

    @Override // td.g
    public uc.c d() {
        z zVar = this.f50765s;
        if (zVar instanceof uc.c) {
            return (uc.c) zVar;
        }
        return null;
    }

    @Override // td.g
    public Format[] e() {
        return this.f50766t;
    }

    @Override // uc.m
    public void j(z zVar) {
        this.f50765s = zVar;
    }

    @Override // uc.m
    public void q() {
        Format[] formatArr = new Format[this.f50761o.size()];
        for (int i10 = 0; i10 < this.f50761o.size(); i10++) {
            formatArr[i10] = (Format) oe.a.i(((a) this.f50761o.valueAt(i10)).f50771e);
        }
        this.f50766t = formatArr;
    }

    @Override // td.g
    public void release() {
        this.f50758d.release();
    }
}
