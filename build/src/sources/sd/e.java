package sd;

import android.util.SparseArray;
import com.google.android.exoplayer2.Format;
import java.util.List;
import mc.t1;
import ne.c0;
import ne.h0;
import ne.w0;
import sd.g;
import tc.b0;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements tc.m, g {

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f48920u = new g.a() { // from class: sd.d
        @Override // sd.g.a
        public final g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
            return e.f(i10, format, z10, list, b0Var, t1Var);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final y f48921v = new y();

    /* renamed from: d  reason: collision with root package name */
    private final tc.k f48922d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48923e;

    /* renamed from: i  reason: collision with root package name */
    private final Format f48924i;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f48925o = new SparseArray();

    /* renamed from: p  reason: collision with root package name */
    private boolean f48926p;

    /* renamed from: q  reason: collision with root package name */
    private g.b f48927q;

    /* renamed from: r  reason: collision with root package name */
    private long f48928r;

    /* renamed from: s  reason: collision with root package name */
    private z f48929s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f48930t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f48931a;

        /* renamed from: b  reason: collision with root package name */
        private final int f48932b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f48933c;

        /* renamed from: d  reason: collision with root package name */
        private final tc.j f48934d = new tc.j();

        /* renamed from: e  reason: collision with root package name */
        public Format f48935e;

        /* renamed from: f  reason: collision with root package name */
        private b0 f48936f;

        /* renamed from: g  reason: collision with root package name */
        private long f48937g;

        public a(int i10, int i11, Format format) {
            this.f48931a = i10;
            this.f48932b = i11;
            this.f48933c = format;
        }

        @Override // tc.b0
        public void b(Format format) {
            Format format2 = this.f48933c;
            if (format2 != null) {
                format = format.j(format2);
            }
            this.f48935e = format;
            ((b0) w0.j(this.f48936f)).b(this.f48935e);
        }

        @Override // tc.b0
        public int c(le.j jVar, int i10, boolean z10, int i11) {
            return ((b0) w0.j(this.f48936f)).a(jVar, i10, z10);
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            long j11 = this.f48937g;
            if (j11 != -9223372036854775807L && j10 >= j11) {
                this.f48936f = this.f48934d;
            }
            ((b0) w0.j(this.f48936f)).d(j10, i10, i11, i12, aVar);
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            ((b0) w0.j(this.f48936f)).f(h0Var, i10);
        }

        public void g(g.b bVar, long j10) {
            if (bVar == null) {
                this.f48936f = this.f48934d;
                return;
            }
            this.f48937g = j10;
            b0 c10 = bVar.c(this.f48931a, this.f48932b);
            this.f48936f = c10;
            Format format = this.f48935e;
            if (format != null) {
                c10.b(format);
            }
        }
    }

    public e(tc.k kVar, int i10, Format format) {
        this.f48922d = kVar;
        this.f48923e = i10;
        this.f48924i = format;
    }

    public static /* synthetic */ g f(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
        int i11;
        tc.k gVar;
        String str = format.f12705v;
        if (c0.r(str)) {
            return null;
        }
        if (c0.q(str)) {
            gVar = new zc.e(1);
        } else {
            if (z10) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            gVar = new bd.g(i11, null, null, list, b0Var);
        }
        return new e(gVar, i10, format);
    }

    @Override // sd.g
    public boolean a(tc.l lVar) {
        boolean z10;
        int d10 = this.f48922d.d(lVar, f48921v);
        if (d10 != 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (d10 != 0) {
            return false;
        }
        return true;
    }

    @Override // sd.g
    public tc.c b() {
        z zVar = this.f48929s;
        if (zVar instanceof tc.c) {
            return (tc.c) zVar;
        }
        return null;
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        boolean z10;
        Format format;
        a aVar = (a) this.f48925o.get(i10);
        if (aVar == null) {
            if (this.f48930t == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (i11 == this.f48923e) {
                format = this.f48924i;
            } else {
                format = null;
            }
            aVar = new a(i10, i11, format);
            aVar.g(this.f48927q, this.f48928r);
            this.f48925o.put(i10, aVar);
        }
        return aVar;
    }

    @Override // sd.g
    public Format[] d() {
        return this.f48930t;
    }

    @Override // sd.g
    public void e(g.b bVar, long j10, long j11) {
        this.f48927q = bVar;
        this.f48928r = j11;
        if (!this.f48926p) {
            this.f48922d.c(this);
            if (j10 != -9223372036854775807L) {
                this.f48922d.a(0L, j10);
            }
            this.f48926p = true;
            return;
        }
        tc.k kVar = this.f48922d;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        kVar.a(0L, j10);
        for (int i10 = 0; i10 < this.f48925o.size(); i10++) {
            ((a) this.f48925o.valueAt(i10)).g(bVar, j11);
        }
    }

    @Override // tc.m
    public void q(z zVar) {
        this.f48929s = zVar;
    }

    @Override // sd.g
    public void release() {
        this.f48922d.release();
    }

    @Override // tc.m
    public void s() {
        Format[] formatArr = new Format[this.f48925o.size()];
        for (int i10 = 0; i10 < this.f48925o.size(); i10++) {
            formatArr[i10] = (Format) ne.a.i(((a) this.f48925o.valueAt(i10)).f48935e);
        }
        this.f48930t = formatArr;
    }
}
