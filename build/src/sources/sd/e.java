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
    public static final g.a f49867u = new g.a() { // from class: sd.d
        @Override // sd.g.a
        public final g a(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
            return e.f(i10, format, z10, list, b0Var, t1Var);
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final y f49868v = new y();

    /* renamed from: d  reason: collision with root package name */
    private final tc.k f49869d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49870e;

    /* renamed from: i  reason: collision with root package name */
    private final Format f49871i;

    /* renamed from: o  reason: collision with root package name */
    private final SparseArray f49872o = new SparseArray();

    /* renamed from: p  reason: collision with root package name */
    private boolean f49873p;

    /* renamed from: q  reason: collision with root package name */
    private g.b f49874q;

    /* renamed from: r  reason: collision with root package name */
    private long f49875r;

    /* renamed from: s  reason: collision with root package name */
    private z f49876s;

    /* renamed from: t  reason: collision with root package name */
    private Format[] f49877t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f49878a;

        /* renamed from: b  reason: collision with root package name */
        private final int f49879b;

        /* renamed from: c  reason: collision with root package name */
        private final Format f49880c;

        /* renamed from: d  reason: collision with root package name */
        private final tc.j f49881d = new tc.j();

        /* renamed from: e  reason: collision with root package name */
        public Format f49882e;

        /* renamed from: f  reason: collision with root package name */
        private b0 f49883f;

        /* renamed from: g  reason: collision with root package name */
        private long f49884g;

        public a(int i10, int i11, Format format) {
            this.f49878a = i10;
            this.f49879b = i11;
            this.f49880c = format;
        }

        @Override // tc.b0
        public void b(Format format) {
            Format format2 = this.f49880c;
            if (format2 != null) {
                format = format.j(format2);
            }
            this.f49882e = format;
            ((b0) w0.j(this.f49883f)).b(this.f49882e);
        }

        @Override // tc.b0
        public int c(le.j jVar, int i10, boolean z10, int i11) {
            return ((b0) w0.j(this.f49883f)).a(jVar, i10, z10);
        }

        @Override // tc.b0
        public void d(long j10, int i10, int i11, int i12, b0.a aVar) {
            long j11 = this.f49884g;
            if (j11 != -9223372036854775807L && j10 >= j11) {
                this.f49883f = this.f49881d;
            }
            ((b0) w0.j(this.f49883f)).d(j10, i10, i11, i12, aVar);
        }

        @Override // tc.b0
        public void e(h0 h0Var, int i10, int i11) {
            ((b0) w0.j(this.f49883f)).f(h0Var, i10);
        }

        public void g(g.b bVar, long j10) {
            if (bVar == null) {
                this.f49883f = this.f49881d;
                return;
            }
            this.f49884g = j10;
            b0 c10 = bVar.c(this.f49878a, this.f49879b);
            this.f49883f = c10;
            Format format = this.f49882e;
            if (format != null) {
                c10.b(format);
            }
        }
    }

    public e(tc.k kVar, int i10, Format format) {
        this.f49869d = kVar;
        this.f49870e = i10;
        this.f49871i = format;
    }

    public static /* synthetic */ g f(int i10, Format format, boolean z10, List list, b0 b0Var, t1 t1Var) {
        int i11;
        tc.k gVar;
        String str = format.f11586v;
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
        int d10 = this.f49869d.d(lVar, f49868v);
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
        z zVar = this.f49876s;
        if (zVar instanceof tc.c) {
            return (tc.c) zVar;
        }
        return null;
    }

    @Override // tc.m
    public b0 c(int i10, int i11) {
        boolean z10;
        Format format;
        a aVar = (a) this.f49872o.get(i10);
        if (aVar == null) {
            if (this.f49877t == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            if (i11 == this.f49870e) {
                format = this.f49871i;
            } else {
                format = null;
            }
            aVar = new a(i10, i11, format);
            aVar.g(this.f49874q, this.f49875r);
            this.f49872o.put(i10, aVar);
        }
        return aVar;
    }

    @Override // sd.g
    public Format[] d() {
        return this.f49877t;
    }

    @Override // sd.g
    public void e(g.b bVar, long j10, long j11) {
        this.f49874q = bVar;
        this.f49875r = j11;
        if (!this.f49873p) {
            this.f49869d.c(this);
            if (j10 != -9223372036854775807L) {
                this.f49869d.a(0L, j10);
            }
            this.f49873p = true;
            return;
        }
        tc.k kVar = this.f49869d;
        if (j10 == -9223372036854775807L) {
            j10 = 0;
        }
        kVar.a(0L, j10);
        for (int i10 = 0; i10 < this.f49872o.size(); i10++) {
            ((a) this.f49872o.valueAt(i10)).g(bVar, j11);
        }
    }

    @Override // tc.m
    public void q(z zVar) {
        this.f49876s = zVar;
    }

    @Override // sd.g
    public void release() {
        this.f49869d.release();
    }

    @Override // tc.m
    public void s() {
        Format[] formatArr = new Format[this.f49872o.size()];
        for (int i10 = 0; i10 < this.f49872o.size(); i10++) {
            formatArr[i10] = (Format) ne.a.i(((a) this.f49872o.valueAt(i10)).f49882e);
        }
        this.f49877t = formatArr;
    }
}
