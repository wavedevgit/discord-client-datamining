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
    public static final g.a f49257u = new g.a() { // from class: td.d
        @Override // td.g.a
        public final g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
            return e.f(i10, format, z10, list, b0Var, t1Var);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final y f49258v = new y();

    /* renamed from: d  reason: collision with root package name */
    private final uc.k f49259d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49260e;

    /* renamed from: i  reason: collision with root package name */
    private final Format f49261i;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f49262o = new SparseArray();

    /* renamed from: p  reason: collision with root package name */
    private boolean f49263p;

    /* renamed from: q  reason: collision with root package name */
    private g.b f49264q;

    /* renamed from: r  reason: collision with root package name */
    private long f49265r;

    /* renamed from: s  reason: collision with root package name */
    private z f49266s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f49267t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f49268a;

        /* renamed from: b  reason: collision with root package name */
        private final int f49269b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f49270c;

        /* renamed from: d  reason: collision with root package name */
        private final uc.j f49271d = new uc.j();

        /* renamed from: e  reason: collision with root package name */
        public Format f49272e;

        /* renamed from: f  reason: collision with root package name */
        private b0 f49273f;

        /* renamed from: g  reason: collision with root package name */
        private long f49274g;

        public a(int i10, int i11, Format format) {
            this.f49268a = i10;
            this.f49269b = i11;
            this.f49270c = format;
        }

        @Override // uc.b0
        public void a(long j10, int i10, int i11, int i12, b0.a aVar) {
            long j11 = this.f49274g;
            if (j11 != -9223372036854775807L && j10 >= j11) {
                this.f49273f = this.f49271d;
            }
            ((b0) w0.j(this.f49273f)).a(j10, i10, i11, i12, aVar);
        }

        @Override // uc.b0
        public int b(me.j jVar, int i10, boolean z10, int i11) {
            return ((b0) w0.j(this.f49273f)).f(jVar, i10, z10);
        }

        @Override // uc.b0
        public void c(Format format) {
            Format format2 = this.f49270c;
            if (format2 != null) {
                format = format.j(format2);
            }
            this.f49272e = format;
            ((b0) w0.j(this.f49273f)).c(this.f49272e);
        }

        @Override // uc.b0
        public void d(h0 h0Var, int i10, int i11) {
            ((b0) w0.j(this.f49273f)).e(h0Var, i10);
        }

        public void g(g.b bVar, long j10) {
            if (bVar == null) {
                this.f49273f = this.f49271d;
                return;
            }
            this.f49274g = j10;
            b0 c10 = bVar.c(this.f49268a, this.f49269b);
            this.f49273f = c10;
            Format format = this.f49272e;
            if (format != null) {
                c10.c(format);
            }
        }
    }

    public e(uc.k kVar, int i10, Format format) {
        this.f49259d = kVar;
        this.f49260e = i10;
        this.f49261i = format;
    }

    public static /* synthetic */ g f(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
        int i11;
        uc.k gVar;
        String str = format.f12304v;
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
        int h10 = this.f49259d.h(lVar, f49258v);
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
        this.f49264q = bVar;
        this.f49265r = j11;
        if (!this.f49263p) {
            this.f49259d.c(this);
            if (j10 != -9223372036854775807L) {
                this.f49259d.a(0L, j10);
            }
            this.f49263p = true;
            return;
        }
        uc.k kVar = this.f49259d;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        kVar.a(0L, j10);
        for (int i10 = 0; i10 < this.f49262o.size(); i10++) {
            ((a) this.f49262o.valueAt(i10)).g(bVar, j11);
        }
    }

    @Override // uc.m
    public b0 c(int i10, int i11) {
        boolean z10;
        Format format;
        a aVar = (a) this.f49262o.get(i10);
        if (aVar == null) {
            if (this.f49267t == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (i11 == this.f49260e) {
                format = this.f49261i;
            } else {
                format = null;
            }
            aVar = new a(i10, i11, format);
            aVar.g(this.f49264q, this.f49265r);
            this.f49262o.put(i10, aVar);
        }
        return aVar;
    }

    @Override // td.g
    public uc.c d() {
        z zVar = this.f49266s;
        if (zVar instanceof uc.c) {
            return (uc.c) zVar;
        }
        return null;
    }

    @Override // td.g
    public Format[] e() {
        return this.f49267t;
    }

    @Override // uc.m
    public void j(z zVar) {
        this.f49266s = zVar;
    }

    @Override // uc.m
    public void q() {
        Format[] formatArr = new Format[this.f49262o.size()];
        for (int i10 = 0; i10 < this.f49262o.size(); i10++) {
            formatArr[i10] = (Format) oe.a.i(((a) this.f49262o.valueAt(i10)).f49272e);
        }
        this.f49267t = formatArr;
    }

    @Override // td.g
    public void release() {
        this.f49259d.release();
    }
}
