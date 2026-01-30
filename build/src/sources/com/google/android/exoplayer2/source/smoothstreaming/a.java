package com.google.android.exoplayer2.source.smoothstreaming;

import android.net.Uri;
import bd.o;
import bd.p;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.smoothstreaming.b;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.h;
import java.io.IOException;
import java.util.List;
import ji.t;
import lc.t0;
import le.c0;
import le.h;
import le.u;
import ne.s0;
import sd.e;
import sd.f;
import sd.g;
import sd.k;
import sd.n;
import yd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements com.google.android.exoplayer2.source.smoothstreaming.b {

    /* renamed from: a  reason: collision with root package name */
    private final u f13914a;

    /* renamed from: b  reason: collision with root package name */
    private final int f13915b;

    /* renamed from: c  reason: collision with root package name */
    private final g[] f13916c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f13917d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f13918e;

    /* renamed from: f  reason: collision with root package name */
    private yd.a f13919f;

    /* renamed from: g  reason: collision with root package name */
    private int f13920g;

    /* renamed from: h  reason: collision with root package name */
    private IOException f13921h;

    /* renamed from: com.google.android.exoplayer2.source.smoothstreaming.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0169a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f13922a;

        public C0169a(DataSource.Factory factory) {
            this.f13922a = factory;
        }

        @Override // com.google.android.exoplayer2.source.smoothstreaming.b.a
        public com.google.android.exoplayer2.source.smoothstreaming.b a(u uVar, yd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, c0 c0Var, le.g gVar2) {
            DataSource createDataSource = this.f13922a.createDataSource();
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            return new a(uVar, aVar, i10, gVar, createDataSource, gVar2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final a.b f13923e;

        /* renamed from: f  reason: collision with root package name */
        private final int f13924f;

        public b(a.b bVar, int i10, int i11) {
            super(i11, bVar.f54298k - 1);
            this.f13923e = bVar;
            this.f13924f = i10;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f13923e.e((int) d());
        }

        @Override // sd.o
        public long b() {
            return a() + this.f13923e.c((int) d());
        }
    }

    public a(u uVar, yd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, DataSource dataSource, le.g gVar2) {
        s0 s0Var;
        p[] pVarArr;
        int i11;
        this.f13914a = uVar;
        this.f13919f = aVar;
        this.f13915b = i10;
        this.f13918e = gVar;
        this.f13917d = dataSource;
        a.b bVar = aVar.f54282f[i10];
        this.f13916c = new g[gVar.length()];
        for (int i12 = 0; i12 < this.f13916c.length; i12++) {
            int e10 = gVar.e(i12);
            Format format = bVar.f54297j[e10];
            if (format.f12709z != null) {
                pVarArr = ((a.C0759a) ne.a.e(aVar.f54281e)).f54287c;
                s0Var = null;
            } else {
                s0Var = null;
                pVarArr = null;
            }
            int i13 = bVar.f54288a;
            if (i13 == 2) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            this.f13916c[i12] = new e(new bd.g(3, s0Var, new o(e10, i13, bVar.f54290c, -9223372036854775807L, aVar.f54283g, format, 0, pVarArr, i11, null, null)), bVar.f54288a, format);
        }
    }

    private static n k(Format format, DataSource dataSource, Uri uri, int i10, long j10, long j11, long j12, int i11, Object obj, g gVar, h hVar) {
        return new k(dataSource, new a.b().i(uri).e(t.j()).a(), format, i11, obj, j10, j11, j12, -9223372036854775807L, i10, 1, j10, gVar);
    }

    private long l(long j10) {
        yd.a aVar = this.f13919f;
        if (!aVar.f54280d) {
            return -9223372036854775807L;
        }
        a.b bVar = aVar.f54282f[this.f13915b];
        int i10 = bVar.f54298k - 1;
        return (bVar.e(i10) + bVar.c(i10)) - j10;
    }

    @Override // sd.j
    public void a() {
        IOException iOException = this.f13921h;
        if (iOException == null) {
            this.f13914a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f13918e = gVar;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void c(yd.a aVar) {
        a.b[] bVarArr = this.f13919f.f54282f;
        int i10 = this.f13915b;
        a.b bVar = bVarArr[i10];
        int i11 = bVar.f54298k;
        a.b bVar2 = aVar.f54282f[i10];
        if (i11 != 0 && bVar2.f54298k != 0) {
            int i12 = i11 - 1;
            long e10 = bVar.e(i12) + bVar.c(i12);
            long e11 = bVar2.e(0);
            if (e10 <= e11) {
                this.f13920g += i11;
            } else {
                this.f13920g += bVar.d(e11);
            }
        } else {
            this.f13920g += i11;
        }
        this.f13919f = aVar;
    }

    @Override // sd.j
    public final void d(long j10, long j11, List list, sd.h hVar) {
        List list2;
        int g10;
        long j12 = j11;
        if (this.f13921h != null) {
            return;
        }
        yd.a aVar = this.f13919f;
        a.b bVar = aVar.f54282f[this.f13915b];
        if (bVar.f54298k == 0) {
            hVar.f48964b = !aVar.f54280d;
            return;
        }
        if (list.isEmpty()) {
            g10 = bVar.d(j12);
            list2 = list;
        } else {
            list2 = list;
            g10 = (int) (((n) list2.get(list.size() - 1)).g() - this.f13920g);
            if (g10 < 0) {
                this.f13921h = new qd.b();
                return;
            }
        }
        if (g10 >= bVar.f54298k) {
            hVar.f48964b = !this.f13919f.f54280d;
            return;
        }
        long j13 = j12 - j10;
        long l10 = l(j10);
        int length = this.f13918e.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i10 = 0; i10 < length; i10++) {
            oVarArr[i10] = new b(bVar, this.f13918e.e(i10), g10);
        }
        this.f13918e.l(j10, j13, l10, list2, oVarArr);
        long e10 = bVar.e(g10);
        long c10 = e10 + bVar.c(g10);
        if (!list.isEmpty()) {
            j12 = -9223372036854775807L;
        }
        long j14 = j12;
        int i11 = g10 + this.f13920g;
        int c11 = this.f13918e.c();
        g gVar = this.f13916c[c11];
        hVar.f48963a = k(this.f13918e.q(), this.f13917d, bVar.a(this.f13918e.e(c11), g10), i11, e10, c10, j14, this.f13918e.r(), this.f13918e.h(), gVar, null);
    }

    @Override // sd.j
    public long e(long j10, t0 t0Var) {
        long j11;
        a.b bVar = this.f13919f.f54282f[this.f13915b];
        int d10 = bVar.d(j10);
        long e10 = bVar.e(d10);
        if (e10 < j10 && d10 < bVar.f54298k - 1) {
            j11 = bVar.e(d10 + 1);
        } else {
            j11 = e10;
        }
        return t0Var.a(j10, e10, j11);
    }

    @Override // sd.j
    public boolean f(f fVar, boolean z10, h.c cVar, com.google.android.exoplayer2.upstream.h hVar) {
        h.b c10 = hVar.c(com.google.android.exoplayer2.trackselection.h.c(this.f13918e), cVar);
        if (z10 && c10 != null && c10.f14477a == 2) {
            com.google.android.exoplayer2.trackselection.g gVar = this.f13918e;
            if (gVar.f(gVar.o(fVar.f48957d), c10.f14478b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // sd.j
    public boolean g(long j10, f fVar, List list) {
        if (this.f13921h != null) {
            return false;
        }
        return this.f13918e.b(j10, fVar, list);
    }

    @Override // sd.j
    public int j(long j10, List list) {
        if (this.f13921h == null && this.f13918e.length() >= 2) {
            return this.f13918e.n(j10, list);
        }
        return list.size();
    }

    @Override // sd.j
    public void release() {
        for (g gVar : this.f13916c) {
            gVar.release();
        }
    }

    @Override // sd.j
    public void h(f fVar) {
    }
}
