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
    public static final g.a f48689u = new g.a() { // from class: td.d
        @Override // td.g.a
        public final g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
            return e.f(i10, format, z10, list, b0Var, t1Var);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final y f48690v = new y();

    /* renamed from: d  reason: collision with root package name */
    private final uc.k f48691d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48692e;

    /* renamed from: i  reason: collision with root package name */
    private final Format f48693i;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f48694o = new SparseArray();

    /* renamed from: p  reason: collision with root package name */
    private boolean f48695p;

    /* renamed from: q  reason: collision with root package name */
    private g.b f48696q;

    /* renamed from: r  reason: collision with root package name */
    private long f48697r;

    /* renamed from: s  reason: collision with root package name */
    private z f48698s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f48699t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f48700a;

        /* renamed from: b  reason: collision with root package name */
        private final int f48701b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f48702c;

        /* renamed from: d  reason: collision with root package name */
        private final uc.j f48703d = new uc.j();

        /* renamed from: e  reason: collision with root package name */
        public Format f48704e;

        /* renamed from: f  reason: collision with root package name */
        private b0 f48705f;

        /* renamed from: g  reason: collision with root package name */
        private long f48706g;

        public a(int i10, int i11, Format format) {
            this.f48700a = i10;
            this.f48701b = i11;
            this.f48702c = format;
        }

        @Override // uc.b0
        public void a(long j10, int i10, int i11, int i12, b0.a aVar) {
            long j11 = this.f48706g;
            if (j11 != -9223372036854775807L && j10 >= j11) {
                this.f48705f = this.f48703d;
            }
            ((b0) w0.j(this.f48705f)).a(j10, i10, i11, i12, aVar);
        }

        @Override // uc.b0
        public int b(me.j jVar, int i10, boolean z10, int i11) {
            return ((b0) w0.j(this.f48705f)).f(jVar, i10, z10);
        }

        @Override // uc.b0
        public void c(Format format) {
            Format format2 = this.f48702c;
            if (format2 != null) {
                format = format.j(format2);
            }
            this.f48704e = format;
            ((b0) w0.j(this.f48705f)).c(this.f48704e);
        }

        @Override // uc.b0
        public void d(h0 h0Var, int i10, int i11) {
            ((b0) w0.j(this.f48705f)).e(h0Var, i10);
        }

        public void g(g.b bVar, long j10) {
            if (bVar == null) {
                this.f48705f = this.f48703d;
                return;
            }
            this.f48706g = j10;
            b0 c10 = bVar.c(this.f48700a, this.f48701b);
            this.f48705f = c10;
            Format format = this.f48704e;
            if (format != null) {
                c10.c(format);
            }
        }
    }

    public e(uc.k kVar, int i10, Format format) {
        this.f48691d = kVar;
        this.f48692e = i10;
        this.f48693i = format;
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
        int h10 = this.f48691d.h(lVar, f48690v);
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
        this.f48696q = bVar;
        this.f48697r = j11;
        if (!this.f48695p) {
            this.f48691d.c(this);
            if (j10 != -9223372036854775807L) {
                this.f48691d.a(0L, j10);
            }
            this.f48695p = true;
            return;
        }
        uc.k kVar = this.f48691d;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        kVar.a(0L, j10);
        for (int i10 = 0; i10 < this.f48694o.size(); i10++) {
            ((a) this.f48694o.valueAt(i10)).g(bVar, j11);
        }
    }

    @Override // uc.m
    public b0 c(int i10, int i11) {
        boolean z10;
        Format format;
        a aVar = (a) this.f48694o.get(i10);
        if (aVar == null) {
            if (this.f48699t == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            if (i11 == this.f48692e) {
                format = this.f48693i;
            } else {
                format = null;
            }
            aVar = new a(i10, i11, format);
            aVar.g(this.f48696q, this.f48697r);
            this.f48694o.put(i10, aVar);
        }
        return aVar;
    }

    @Override // td.g
    public uc.c d() {
        z zVar = this.f48698s;
        if (zVar instanceof uc.c) {
            return (uc.c) zVar;
        }
        return null;
    }

    @Override // td.g
    public Format[] e() {
        return this.f48699t;
    }

    @Override // uc.m
    public void j(z zVar) {
        this.f48698s = zVar;
    }

    @Override // uc.m
    public void q() {
        Format[] formatArr = new Format[this.f48694o.size()];
        for (int i10 = 0; i10 < this.f48694o.size(); i10++) {
            formatArr[i10] = (Format) oe.a.i(((a) this.f48694o.valueAt(i10)).f48704e);
        }
        this.f48699t = formatArr;
    }

    @Override // td.g
    public void release() {
        this.f48691d.release();
    }
}
