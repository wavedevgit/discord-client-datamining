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
    private final u f12511a;

    /* renamed from: b  reason: collision with root package name */
    private final int f12512b;

    /* renamed from: c  reason: collision with root package name */
    private final g[] f12513c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f12514d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f12515e;

    /* renamed from: f  reason: collision with root package name */
    private yd.a f12516f;

    /* renamed from: g  reason: collision with root package name */
    private int f12517g;

    /* renamed from: h  reason: collision with root package name */
    private IOException f12518h;

    /* renamed from: com.google.android.exoplayer2.source.smoothstreaming.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0155a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f12519a;

        public C0155a(DataSource.Factory factory) {
            this.f12519a = factory;
        }

        @Override // com.google.android.exoplayer2.source.smoothstreaming.b.a
        public com.google.android.exoplayer2.source.smoothstreaming.b a(u uVar, yd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, c0 c0Var, le.g gVar2) {
            DataSource createDataSource = this.f12519a.createDataSource();
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            return new a(uVar, aVar, i10, gVar, createDataSource, gVar2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final a.b f12520e;

        /* renamed from: f  reason: collision with root package name */
        private final int f12521f;

        public b(a.b bVar, int i10, int i11) {
            super(i11, bVar.f54028k - 1);
            this.f12520e = bVar;
            this.f12521f = i10;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f12520e.e((int) d());
        }

        @Override // sd.o
        public long b() {
            return a() + this.f12520e.c((int) d());
        }
    }

    public a(u uVar, yd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, DataSource dataSource, le.g gVar2) {
        s0 s0Var;
        p[] pVarArr;
        int i11;
        this.f12511a = uVar;
        this.f12516f = aVar;
        this.f12512b = i10;
        this.f12515e = gVar;
        this.f12514d = dataSource;
        a.b bVar = aVar.f54012f[i10];
        this.f12513c = new g[gVar.length()];
        for (int i12 = 0; i12 < this.f12513c.length; i12++) {
            int e10 = gVar.e(i12);
            Format format = bVar.f54027j[e10];
            if (format.f11306z != null) {
                pVarArr = ((a.C0741a) ne.a.e(aVar.f54011e)).f54017c;
                s0Var = null;
            } else {
                s0Var = null;
                pVarArr = null;
            }
            int i13 = bVar.f54018a;
            if (i13 == 2) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            this.f12513c[i12] = new e(new bd.g(3, s0Var, new o(e10, i13, bVar.f54020c, -9223372036854775807L, aVar.f54013g, format, 0, pVarArr, i11, null, null)), bVar.f54018a, format);
        }
    }

    private static n k(Format format, DataSource dataSource, Uri uri, int i10, long j10, long j11, long j12, int i11, Object obj, g gVar, h hVar) {
        return new k(dataSource, new a.b().i(uri).e(t.j()).a(), format, i11, obj, j10, j11, j12, -9223372036854775807L, i10, 1, j10, gVar);
    }

    private long l(long j10) {
        yd.a aVar = this.f12516f;
        if (!aVar.f54010d) {
            return -9223372036854775807L;
        }
        a.b bVar = aVar.f54012f[this.f12512b];
        int i10 = bVar.f54028k - 1;
        return (bVar.e(i10) + bVar.c(i10)) - j10;
    }

    @Override // sd.j
    public void a() {
        IOException iOException = this.f12518h;
        if (iOException == null) {
            this.f12511a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f12515e = gVar;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void c(yd.a aVar) {
        a.b[] bVarArr = this.f12516f.f54012f;
        int i10 = this.f12512b;
        a.b bVar = bVarArr[i10];
        int i11 = bVar.f54028k;
        a.b bVar2 = aVar.f54012f[i10];
        if (i11 != 0 && bVar2.f54028k != 0) {
            int i12 = i11 - 1;
            long e10 = bVar.e(i12) + bVar.c(i12);
            long e11 = bVar2.e(0);
            if (e10 <= e11) {
                this.f12517g += i11;
            } else {
                this.f12517g += bVar.d(e11);
            }
        } else {
            this.f12517g += i11;
        }
        this.f12516f = aVar;
    }

    @Override // sd.j
    public final void d(long j10, long j11, List list, sd.h hVar) {
        List list2;
        int g10;
        long j12 = j11;
        if (this.f12518h != null) {
            return;
        }
        yd.a aVar = this.f12516f;
        a.b bVar = aVar.f54012f[this.f12512b];
        if (bVar.f54028k == 0) {
            hVar.f49425b = !aVar.f54010d;
            return;
        }
        if (list.isEmpty()) {
            g10 = bVar.d(j12);
            list2 = list;
        } else {
            list2 = list;
            g10 = (int) (((n) list2.get(list.size() - 1)).g() - this.f12517g);
            if (g10 < 0) {
                this.f12518h = new qd.b();
                return;
            }
        }
        if (g10 >= bVar.f54028k) {
            hVar.f49425b = !this.f12516f.f54010d;
            return;
        }
        long j13 = j12 - j10;
        long l10 = l(j10);
        int length = this.f12515e.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i10 = 0; i10 < length; i10++) {
            oVarArr[i10] = new b(bVar, this.f12515e.e(i10), g10);
        }
        this.f12515e.l(j10, j13, l10, list2, oVarArr);
        long e10 = bVar.e(g10);
        long c10 = e10 + bVar.c(g10);
        if (!list.isEmpty()) {
            j12 = -9223372036854775807L;
        }
        long j14 = j12;
        int i11 = g10 + this.f12517g;
        int c11 = this.f12515e.c();
        g gVar = this.f12513c[c11];
        hVar.f49424a = k(this.f12515e.q(), this.f12514d, bVar.a(this.f12515e.e(c11), g10), i11, e10, c10, j14, this.f12515e.r(), this.f12515e.h(), gVar, null);
    }

    @Override // sd.j
    public long e(long j10, t0 t0Var) {
        long j11;
        a.b bVar = this.f12516f.f54012f[this.f12512b];
        int d10 = bVar.d(j10);
        long e10 = bVar.e(d10);
        if (e10 < j10 && d10 < bVar.f54028k - 1) {
            j11 = bVar.e(d10 + 1);
        } else {
            j11 = e10;
        }
        return t0Var.a(j10, e10, j11);
    }

    @Override // sd.j
    public boolean f(f fVar, boolean z10, h.c cVar, com.google.android.exoplayer2.upstream.h hVar) {
        h.b c10 = hVar.c(com.google.android.exoplayer2.trackselection.h.c(this.f12515e), cVar);
        if (z10 && c10 != null && c10.f13074a == 2) {
            com.google.android.exoplayer2.trackselection.g gVar = this.f12515e;
            if (gVar.f(gVar.o(fVar.f49418d), c10.f13075b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // sd.j
    public boolean g(long j10, f fVar, List list) {
        if (this.f12518h != null) {
            return false;
        }
        return this.f12515e.b(j10, fVar, list);
    }

    @Override // sd.j
    public int j(long j10, List list) {
        if (this.f12518h == null && this.f12515e.length() >= 2) {
            return this.f12515e.n(j10, list);
        }
        return list.size();
    }

    @Override // sd.j
    public void release() {
        for (g gVar : this.f12513c) {
            gVar.release();
        }
    }

    @Override // sd.j
    public void h(f fVar) {
    }
}
