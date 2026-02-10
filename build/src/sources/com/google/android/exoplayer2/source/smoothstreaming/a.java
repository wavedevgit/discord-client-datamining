package com.google.android.exoplayer2.source.smoothstreaming;

import android.net.Uri;
import cd.o;
import cd.p;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.smoothstreaming.b;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import java.util.List;
import mc.t0;
import me.c0;
import me.h;
import me.u;
import oe.s0;
import oi.t;
import td.e;
import td.f;
import td.g;
import td.k;
import td.n;
import zd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements com.google.android.exoplayer2.source.smoothstreaming.b {

    /* renamed from: a  reason: collision with root package name */
    private final u f12997a;

    /* renamed from: b  reason: collision with root package name */
    private final int f12998b;

    /* renamed from: c  reason: collision with root package name */
    private final g[] f12999c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f13000d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f13001e;

    /* renamed from: f  reason: collision with root package name */
    private zd.a f13002f;

    /* renamed from: g  reason: collision with root package name */
    private int f13003g;

    /* renamed from: h  reason: collision with root package name */
    private IOException f13004h;

    /* renamed from: com.google.android.exoplayer2.source.smoothstreaming.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0191a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f13005a;

        public C0191a(DataSource.Factory factory) {
            this.f13005a = factory;
        }

        @Override // com.google.android.exoplayer2.source.smoothstreaming.b.a
        public com.google.android.exoplayer2.source.smoothstreaming.b a(u uVar, zd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, c0 c0Var, me.g gVar2) {
            DataSource createDataSource = this.f13005a.createDataSource();
            if (c0Var != null) {
                createDataSource.i(c0Var);
            }
            return new a(uVar, aVar, i10, gVar, createDataSource, gVar2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b extends td.b {

        /* renamed from: e  reason: collision with root package name */
        private final a.b f13006e;

        /* renamed from: f  reason: collision with root package name */
        private final int f13007f;

        public b(a.b bVar, int i10, int i11) {
            super(i11, bVar.f56341k - 1);
            this.f13006e = bVar;
            this.f13007f = i10;
        }

        @Override // td.o
        public long a() {
            c();
            return this.f13006e.e((int) d());
        }

        @Override // td.o
        public long b() {
            return a() + this.f13006e.c((int) d());
        }
    }

    public a(u uVar, zd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, DataSource dataSource, me.g gVar2) {
        s0 s0Var;
        p[] pVarArr;
        int i11;
        this.f12997a = uVar;
        this.f13002f = aVar;
        this.f12998b = i10;
        this.f13001e = gVar;
        this.f13000d = dataSource;
        a.b bVar = aVar.f56325f[i10];
        this.f12999c = new g[gVar.length()];
        for (int i12 = 0; i12 < this.f12999c.length; i12++) {
            int d10 = gVar.d(i12);
            Format format = bVar.f56340j[d10];
            if (format.f11730z != null) {
                pVarArr = ((a.C0798a) oe.a.e(aVar.f56324e)).f56330c;
                s0Var = null;
            } else {
                s0Var = null;
                pVarArr = null;
            }
            int i13 = bVar.f56331a;
            if (i13 == 2) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            this.f12999c[i12] = new e(new cd.g(3, s0Var, new o(d10, i13, bVar.f56333c, -9223372036854775807L, aVar.f56326g, format, 0, pVarArr, i11, null, null)), bVar.f56331a, format);
        }
    }

    private static n k(Format format, DataSource dataSource, Uri uri, int i10, long j10, long j11, long j12, int i11, Object obj, g gVar, h hVar) {
        return new k(dataSource, new a.b().i(uri).e(t.j()).a(), format, i11, obj, j10, j11, j12, -9223372036854775807L, i10, 1, j10, gVar);
    }

    private long l(long j10) {
        zd.a aVar = this.f13002f;
        if (!aVar.f56323d) {
            return -9223372036854775807L;
        }
        a.b bVar = aVar.f56325f[this.f12998b];
        int i10 = bVar.f56341k - 1;
        return (bVar.e(i10) + bVar.c(i10)) - j10;
    }

    @Override // td.j
    public void a() {
        IOException iOException = this.f13004h;
        if (iOException == null) {
            this.f12997a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f13001e = gVar;
    }

    @Override // td.j
    public boolean c(f fVar, boolean z10, i.c cVar, i iVar) {
        i.b c10 = iVar.c(com.google.android.exoplayer2.trackselection.h.c(this.f13001e), cVar);
        if (z10 && c10 != null && c10.f13560a == 2) {
            com.google.android.exoplayer2.trackselection.g gVar = this.f13001e;
            if (gVar.f(gVar.o(fVar.f50777d), c10.f13561b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void d(zd.a aVar) {
        a.b[] bVarArr = this.f13002f.f56325f;
        int i10 = this.f12998b;
        a.b bVar = bVarArr[i10];
        int i11 = bVar.f56341k;
        a.b bVar2 = aVar.f56325f[i10];
        if (i11 != 0 && bVar2.f56341k != 0) {
            int i12 = i11 - 1;
            long e10 = bVar.e(i12) + bVar.c(i12);
            long e11 = bVar2.e(0);
            if (e10 <= e11) {
                this.f13003g += i11;
            } else {
                this.f13003g += bVar.d(e11);
            }
        } else {
            this.f13003g += i11;
        }
        this.f13002f = aVar;
    }

    @Override // td.j
    public long e(long j10, t0 t0Var) {
        long j11;
        a.b bVar = this.f13002f.f56325f[this.f12998b];
        int d10 = bVar.d(j10);
        long e10 = bVar.e(d10);
        if (e10 < j10 && d10 < bVar.f56341k - 1) {
            j11 = bVar.e(d10 + 1);
        } else {
            j11 = e10;
        }
        return t0Var.a(j10, e10, j11);
    }

    @Override // td.j
    public int h(long j10, List list) {
        if (this.f13004h == null && this.f13001e.length() >= 2) {
            return this.f13001e.n(j10, list);
        }
        return list.size();
    }

    @Override // td.j
    public boolean i(long j10, f fVar, List list) {
        if (this.f13004h != null) {
            return false;
        }
        return this.f13001e.k(j10, fVar, list);
    }

    @Override // td.j
    public final void j(long j10, long j11, List list, td.h hVar) {
        List list2;
        int g10;
        long j12 = j11;
        if (this.f13004h != null) {
            return;
        }
        zd.a aVar = this.f13002f;
        a.b bVar = aVar.f56325f[this.f12998b];
        if (bVar.f56341k == 0) {
            hVar.f50784b = !aVar.f56323d;
            return;
        }
        if (list.isEmpty()) {
            g10 = bVar.d(j12);
            list2 = list;
        } else {
            list2 = list;
            g10 = (int) (((n) list2.get(list.size() - 1)).g() - this.f13003g);
            if (g10 < 0) {
                this.f13004h = new rd.b();
                return;
            }
        }
        if (g10 >= bVar.f56341k) {
            hVar.f50784b = !this.f13002f.f56323d;
            return;
        }
        long j13 = j12 - j10;
        long l10 = l(j10);
        int length = this.f13001e.length();
        td.o[] oVarArr = new td.o[length];
        for (int i10 = 0; i10 < length; i10++) {
            oVarArr[i10] = new b(bVar, this.f13001e.d(i10), g10);
        }
        this.f13001e.e(j10, j13, l10, list2, oVarArr);
        long e10 = bVar.e(g10);
        long c10 = e10 + bVar.c(g10);
        if (!list.isEmpty()) {
            j12 = -9223372036854775807L;
        }
        long j14 = j12;
        int i11 = g10 + this.f13003g;
        int b10 = this.f13001e.b();
        g gVar = this.f12999c[b10];
        hVar.f50783a = k(this.f13001e.q(), this.f13000d, bVar.a(this.f13001e.d(b10), g10), i11, e10, c10, j14, this.f13001e.r(), this.f13001e.h(), gVar, null);
    }

    @Override // td.j
    public void release() {
        for (g gVar : this.f12999c) {
            gVar.release();
        }
    }

    @Override // td.j
    public void g(f fVar) {
    }
}
