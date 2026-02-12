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
import qi.t;
import td.e;
import td.f;
import td.g;
import td.k;
import td.n;
import zd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements com.google.android.exoplayer2.source.smoothstreaming.b {

    /* renamed from: a  reason: collision with root package name */
    private final u f13575a;

    /* renamed from: b  reason: collision with root package name */
    private final int f13576b;

    /* renamed from: c  reason: collision with root package name */
    private final g[] f13577c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f13578d;

    /* renamed from: e  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f13579e;

    /* renamed from: f  reason: collision with root package name */
    private zd.a f13580f;

    /* renamed from: g  reason: collision with root package name */
    private int f13581g;

    /* renamed from: h  reason: collision with root package name */
    private IOException f13582h;

    /* renamed from: com.google.android.exoplayer2.source.smoothstreaming.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0168a implements b.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f13583a;

        public C0168a(DataSource.Factory factory) {
            this.f13583a = factory;
        }

        @Override // com.google.android.exoplayer2.source.smoothstreaming.b.a
        public com.google.android.exoplayer2.source.smoothstreaming.b a(u uVar, zd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, c0 c0Var, me.g gVar2) {
            DataSource createDataSource = this.f13583a.createDataSource();
            if (c0Var != null) {
                createDataSource.i(c0Var);
            }
            return new a(uVar, aVar, i10, gVar, createDataSource, gVar2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b extends td.b {

        /* renamed from: e  reason: collision with root package name */
        private final a.b f13584e;

        /* renamed from: f  reason: collision with root package name */
        private final int f13585f;

        public b(a.b bVar, int i10, int i11) {
            super(i11, bVar.f56381k - 1);
            this.f13584e = bVar;
            this.f13585f = i10;
        }

        @Override // td.o
        public long a() {
            c();
            return this.f13584e.e((int) d());
        }

        @Override // td.o
        public long b() {
            return a() + this.f13584e.c((int) d());
        }
    }

    public a(u uVar, zd.a aVar, int i10, com.google.android.exoplayer2.trackselection.g gVar, DataSource dataSource, me.g gVar2) {
        s0 s0Var;
        p[] pVarArr;
        int i11;
        this.f13575a = uVar;
        this.f13580f = aVar;
        this.f13576b = i10;
        this.f13579e = gVar;
        this.f13578d = dataSource;
        a.b bVar = aVar.f56365f[i10];
        this.f13577c = new g[gVar.length()];
        for (int i12 = 0; i12 < this.f13577c.length; i12++) {
            int d10 = gVar.d(i12);
            Format format = bVar.f56380j[d10];
            if (format.f12308z != null) {
                pVarArr = ((a.C0799a) oe.a.e(aVar.f56364e)).f56370c;
                s0Var = null;
            } else {
                s0Var = null;
                pVarArr = null;
            }
            int i13 = bVar.f56371a;
            if (i13 == 2) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            this.f13577c[i12] = new e(new cd.g(3, s0Var, new o(d10, i13, bVar.f56373c, -9223372036854775807L, aVar.f56366g, format, 0, pVarArr, i11, null, null)), bVar.f56371a, format);
        }
    }

    private static n k(Format format, DataSource dataSource, Uri uri, int i10, long j10, long j11, long j12, int i11, Object obj, g gVar, h hVar) {
        return new k(dataSource, new a.b().i(uri).e(t.j()).a(), format, i11, obj, j10, j11, j12, -9223372036854775807L, i10, 1, j10, gVar);
    }

    private long l(long j10) {
        zd.a aVar = this.f13580f;
        if (!aVar.f56363d) {
            return -9223372036854775807L;
        }
        a.b bVar = aVar.f56365f[this.f13576b];
        int i10 = bVar.f56381k - 1;
        return (bVar.e(i10) + bVar.c(i10)) - j10;
    }

    @Override // td.j
    public void a() {
        IOException iOException = this.f13582h;
        if (iOException == null) {
            this.f13575a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f13579e = gVar;
    }

    @Override // td.j
    public boolean c(f fVar, boolean z10, i.c cVar, i iVar) {
        i.b c10 = iVar.c(com.google.android.exoplayer2.trackselection.h.c(this.f13579e), cVar);
        if (z10 && c10 != null && c10.f14138a == 2) {
            com.google.android.exoplayer2.trackselection.g gVar = this.f13579e;
            if (gVar.f(gVar.o(fVar.f48710d), c10.f14139b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.source.smoothstreaming.b
    public void d(zd.a aVar) {
        a.b[] bVarArr = this.f13580f.f56365f;
        int i10 = this.f13576b;
        a.b bVar = bVarArr[i10];
        int i11 = bVar.f56381k;
        a.b bVar2 = aVar.f56365f[i10];
        if (i11 != 0 && bVar2.f56381k != 0) {
            int i12 = i11 - 1;
            long e10 = bVar.e(i12) + bVar.c(i12);
            long e11 = bVar2.e(0);
            if (e10 <= e11) {
                this.f13581g += i11;
            } else {
                this.f13581g += bVar.d(e11);
            }
        } else {
            this.f13581g += i11;
        }
        this.f13580f = aVar;
    }

    @Override // td.j
    public long e(long j10, t0 t0Var) {
        long j11;
        a.b bVar = this.f13580f.f56365f[this.f13576b];
        int d10 = bVar.d(j10);
        long e10 = bVar.e(d10);
        if (e10 < j10 && d10 < bVar.f56381k - 1) {
            j11 = bVar.e(d10 + 1);
        } else {
            j11 = e10;
        }
        return t0Var.a(j10, e10, j11);
    }

    @Override // td.j
    public int h(long j10, List list) {
        if (this.f13582h == null && this.f13579e.length() >= 2) {
            return this.f13579e.n(j10, list);
        }
        return list.size();
    }

    @Override // td.j
    public boolean i(long j10, f fVar, List list) {
        if (this.f13582h != null) {
            return false;
        }
        return this.f13579e.k(j10, fVar, list);
    }

    @Override // td.j
    public final void j(long j10, long j11, List list, td.h hVar) {
        List list2;
        int g10;
        long j12 = j11;
        if (this.f13582h != null) {
            return;
        }
        zd.a aVar = this.f13580f;
        a.b bVar = aVar.f56365f[this.f13576b];
        if (bVar.f56381k == 0) {
            hVar.f48717b = !aVar.f56363d;
            return;
        }
        if (list.isEmpty()) {
            g10 = bVar.d(j12);
            list2 = list;
        } else {
            list2 = list;
            g10 = (int) (((n) list2.get(list.size() - 1)).g() - this.f13581g);
            if (g10 < 0) {
                this.f13582h = new rd.b();
                return;
            }
        }
        if (g10 >= bVar.f56381k) {
            hVar.f48717b = !this.f13580f.f56363d;
            return;
        }
        long j13 = j12 - j10;
        long l10 = l(j10);
        int length = this.f13579e.length();
        td.o[] oVarArr = new td.o[length];
        for (int i10 = 0; i10 < length; i10++) {
            oVarArr[i10] = new b(bVar, this.f13579e.d(i10), g10);
        }
        this.f13579e.e(j10, j13, l10, list2, oVarArr);
        long e10 = bVar.e(g10);
        long c10 = e10 + bVar.c(g10);
        if (!list.isEmpty()) {
            j12 = -9223372036854775807L;
        }
        long j14 = j12;
        int i11 = g10 + this.f13581g;
        int b10 = this.f13579e.b();
        g gVar = this.f13577c[b10];
        hVar.f48716a = k(this.f13579e.q(), this.f13578d, bVar.a(this.f13579e.d(b10), g10), i11, e10, c10, j14, this.f13579e.r(), this.f13579e.h(), gVar, null);
    }

    @Override // td.j
    public void release() {
        for (g gVar : this.f13577c) {
            gVar.release();
        }
    }

    @Override // td.j
    public void g(f fVar) {
    }
}
