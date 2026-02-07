package com.google.android.exoplayer2.upstream.cache;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.InterruptedIOException;
import java.util.Collections;
import java.util.Map;
import kotlin.jvm.internal.LongCompanionObject;
import le.b0;
import le.c0;
import le.l;
import le.m;
import ne.j0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.cache.a f13327a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f13328b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f13329c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f13330d;

    /* renamed from: e  reason: collision with root package name */
    private final me.b f13331e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f13332f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f13333g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f13334h;

    /* renamed from: i  reason: collision with root package name */
    private Uri f13335i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13336j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13337k;

    /* renamed from: l  reason: collision with root package name */
    private DataSource f13338l;

    /* renamed from: m  reason: collision with root package name */
    private long f13339m;

    /* renamed from: n  reason: collision with root package name */
    private long f13340n;

    /* renamed from: o  reason: collision with root package name */
    private long f13341o;

    /* renamed from: p  reason: collision with root package name */
    private me.c f13342p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f13343q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f13344r;

    /* renamed from: s  reason: collision with root package name */
    private long f13345s;

    /* renamed from: t  reason: collision with root package name */
    private long f13346t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    public c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, int i10, a aVar2) {
        this(aVar, dataSource, dataSource2, lVar, i10, aVar2, null);
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [com.google.android.exoplayer2.upstream.a, me.c, com.google.android.exoplayer2.upstream.DataSource] */
    private void o() {
        DataSource dataSource = this.f13338l;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f13337k = null;
                this.f13338l = null;
                me.c cVar = this.f13342p;
                if (cVar != null) {
                    this.f13327a.e(cVar);
                    this.f13342p = null;
                }
            }
        }
    }

    private static Uri p(com.google.android.exoplayer2.upstream.cache.a aVar, String str, Uri uri) {
        Uri c10 = me.d.c(aVar.b(str));
        if (c10 != null) {
            return c10;
        }
        return uri;
    }

    private void q(Throwable th2) {
        if (!s() && !(th2 instanceof a.C0168a)) {
            return;
        }
        this.f13343q = true;
    }

    private boolean r() {
        if (this.f13338l == this.f13330d) {
            return true;
        }
        return false;
    }

    private boolean s() {
        if (this.f13338l == this.f13328b) {
            return true;
        }
        return false;
    }

    private boolean t() {
        return !s();
    }

    private boolean u() {
        if (this.f13338l == this.f13329c) {
            return true;
        }
        return false;
    }

    private void v() {
    }

    private void w(int i10) {
    }

    private void x(com.google.android.exoplayer2.upstream.a aVar, boolean z10) {
        me.c g10;
        long j10;
        com.google.android.exoplayer2.upstream.a a10;
        DataSource dataSource;
        long j11;
        String str = (String) w0.j(aVar.f13273i);
        Uri uri = null;
        if (this.f13344r) {
            g10 = null;
        } else if (this.f13332f) {
            try {
                g10 = this.f13327a.g(str, this.f13340n, this.f13341o);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
                throw new InterruptedIOException();
            }
        } else {
            g10 = this.f13327a.c(str, this.f13340n, this.f13341o);
        }
        if (g10 == null) {
            dataSource = this.f13330d;
            a10 = aVar.a().h(this.f13340n).g(this.f13341o).a();
        } else if (g10.f37117o) {
            Uri fromFile = Uri.fromFile((File) w0.j(g10.f37118p));
            long j12 = g10.f37115e;
            long j13 = this.f13340n - j12;
            long j14 = g10.f37116i - j13;
            long j15 = this.f13341o;
            if (j15 != -1) {
                j14 = Math.min(j14, j15);
            }
            a10 = aVar.a().i(fromFile).k(j12).h(j13).g(j14).a();
            dataSource = this.f13328b;
        } else {
            if (g10.e()) {
                j10 = this.f13341o;
            } else {
                j10 = g10.f37116i;
                long j16 = this.f13341o;
                if (j16 != -1) {
                    j10 = Math.min(j10, j16);
                }
            }
            a10 = aVar.a().h(this.f13340n).g(j10).a();
            dataSource = this.f13329c;
            if (dataSource == null) {
                dataSource = this.f13330d;
                this.f13327a.e(g10);
                g10 = null;
            }
        }
        if (!this.f13344r && dataSource == this.f13330d) {
            j11 = this.f13340n + 102400;
        } else {
            j11 = LongCompanionObject.MAX_VALUE;
        }
        this.f13346t = j11;
        if (z10) {
            ne.a.g(r());
            if (dataSource != this.f13330d) {
                try {
                    o();
                } catch (Throwable th2) {
                    if (((me.c) w0.j(g10)).d()) {
                        this.f13327a.e(g10);
                    }
                    throw th2;
                }
            } else {
                return;
            }
        }
        if (g10 != null && g10.d()) {
            this.f13342p = g10;
        }
        this.f13338l = dataSource;
        this.f13337k = a10;
        this.f13339m = 0L;
        long b10 = dataSource.b(a10);
        me.e eVar = new me.e();
        if (a10.f13272h == -1 && b10 != -1) {
            this.f13341o = b10;
            me.e.g(eVar, this.f13340n + b10);
        }
        if (t()) {
            Uri m10 = dataSource.m();
            this.f13335i = m10;
            if (!aVar.f13265a.equals(m10)) {
                uri = this.f13335i;
            }
            me.e.h(eVar, uri);
        }
        if (u()) {
            this.f13327a.f(str, eVar);
        }
    }

    private void y(String str) {
        this.f13341o = 0L;
        if (u()) {
            me.e eVar = new me.e();
            me.e.g(eVar, this.f13340n);
            this.f13327a.f(str, eVar);
        }
    }

    private int z(com.google.android.exoplayer2.upstream.a aVar) {
        if (this.f13333g && this.f13343q) {
            return 0;
        }
        if (this.f13334h && aVar.f13272h == -1) {
            return 1;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        try {
            String a10 = this.f13331e.a(aVar);
            com.google.android.exoplayer2.upstream.a a11 = aVar.a().f(a10).a();
            this.f13336j = a11;
            this.f13335i = p(this.f13327a, a10, a11.f13265a);
            this.f13340n = aVar.f13271g;
            int z11 = z(aVar);
            if (z11 != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f13344r = z10;
            if (z10) {
                w(z11);
            }
            if (this.f13344r) {
                this.f13341o = -1L;
            } else {
                long d10 = me.d.d(this.f13327a.b(a10));
                this.f13341o = d10;
                if (d10 != -1) {
                    long j10 = d10 - aVar.f13271g;
                    this.f13341o = j10;
                    if (j10 < 0) {
                        throw new m(2008);
                    }
                }
            }
            long j11 = aVar.f13272h;
            if (j11 != -1) {
                long j12 = this.f13341o;
                if (j12 != -1) {
                    j11 = Math.min(j12, j11);
                }
                this.f13341o = j11;
            }
            long j13 = this.f13341o;
            if (j13 > 0 || j13 == -1) {
                x(a11, false);
            }
            long j14 = aVar.f13272h;
            if (j14 != -1) {
                return j14;
            }
            return this.f13341o;
        } catch (Throwable th2) {
            q(th2);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f13336j = null;
        this.f13335i = null;
        this.f13340n = 0L;
        v();
        try {
            o();
        } catch (Throwable th2) {
            q(th2);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        if (t()) {
            return this.f13330d.d();
        }
        return Collections.EMPTY_MAP;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f13328b.j(c0Var);
        this.f13330d.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f13335i;
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x0077, code lost:
        if (r17.f13339m < r13) goto L36;
     */
    @Override // le.j
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public int read(byte[] r18, int r19, int r20) {
        /*
            r17 = this;
            r1 = r17
            r0 = r20
            r2 = 0
            if (r0 != 0) goto L8
            return r2
        L8:
            long r3 = r1.f13341o
            r5 = 0
            int r3 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            r4 = -1
            if (r3 != 0) goto L12
            return r4
        L12:
            com.google.android.exoplayer2.upstream.a r3 = r1.f13336j
            java.lang.Object r3 = ne.a.e(r3)
            com.google.android.exoplayer2.upstream.a r3 = (com.google.android.exoplayer2.upstream.a) r3
            com.google.android.exoplayer2.upstream.a r7 = r1.f13337k
            java.lang.Object r7 = ne.a.e(r7)
            com.google.android.exoplayer2.upstream.a r7 = (com.google.android.exoplayer2.upstream.a) r7
            long r8 = r1.f13340n     // Catch: java.lang.Throwable -> L2f
            long r10 = r1.f13346t     // Catch: java.lang.Throwable -> L2f
            int r8 = (r8 > r10 ? 1 : (r8 == r10 ? 0 : -1))
            if (r8 < 0) goto L31
            r8 = 1
            r1.x(r3, r8)     // Catch: java.lang.Throwable -> L2f
            goto L31
        L2f:
            r0 = move-exception
            goto L9d
        L31:
            com.google.android.exoplayer2.upstream.DataSource r8 = r1.f13338l     // Catch: java.lang.Throwable -> L2f
            java.lang.Object r8 = ne.a.e(r8)     // Catch: java.lang.Throwable -> L2f
            com.google.android.exoplayer2.upstream.DataSource r8 = (com.google.android.exoplayer2.upstream.DataSource) r8     // Catch: java.lang.Throwable -> L2f
            r9 = r18
            r10 = r19
            int r8 = r8.read(r9, r10, r0)     // Catch: java.lang.Throwable -> L2f
            r11 = -1
            if (r8 == r4) goto L66
            boolean r0 = r1.s()     // Catch: java.lang.Throwable -> L2f
            if (r0 == 0) goto L51
            long r2 = r1.f13345s     // Catch: java.lang.Throwable -> L2f
            long r4 = (long) r8     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f13345s = r2     // Catch: java.lang.Throwable -> L2f
        L51:
            long r2 = r1.f13340n     // Catch: java.lang.Throwable -> L2f
            long r4 = (long) r8     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f13340n = r2     // Catch: java.lang.Throwable -> L2f
            long r2 = r1.f13339m     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f13339m = r2     // Catch: java.lang.Throwable -> L2f
            long r2 = r1.f13341o     // Catch: java.lang.Throwable -> L2f
            int r0 = (r2 > r11 ? 1 : (r2 == r11 ? 0 : -1))
            if (r0 == 0) goto L91
            long r2 = r2 - r4
            r1.f13341o = r2     // Catch: java.lang.Throwable -> L2f
            return r8
        L66:
            boolean r4 = r1.t()     // Catch: java.lang.Throwable -> L2f
            if (r4 == 0) goto L85
            long r13 = r7.f13272h     // Catch: java.lang.Throwable -> L2f
            int r4 = (r13 > r11 ? 1 : (r13 == r11 ? 0 : -1))
            if (r4 == 0) goto L79
            r15 = r5
            long r5 = r1.f13339m     // Catch: java.lang.Throwable -> L2f
            int r4 = (r5 > r13 ? 1 : (r5 == r13 ? 0 : -1))
            if (r4 >= 0) goto L86
        L79:
            java.lang.String r0 = r3.f13273i     // Catch: java.lang.Throwable -> L2f
            java.lang.Object r0 = ne.w0.j(r0)     // Catch: java.lang.Throwable -> L2f
            java.lang.String r0 = (java.lang.String) r0     // Catch: java.lang.Throwable -> L2f
            r1.y(r0)     // Catch: java.lang.Throwable -> L2f
            return r8
        L85:
            r15 = r5
        L86:
            long r4 = r1.f13341o     // Catch: java.lang.Throwable -> L2f
            int r6 = (r4 > r15 ? 1 : (r4 == r15 ? 0 : -1))
            if (r6 > 0) goto L92
            int r4 = (r4 > r11 ? 1 : (r4 == r11 ? 0 : -1))
            if (r4 != 0) goto L91
            goto L92
        L91:
            return r8
        L92:
            r1.o()     // Catch: java.lang.Throwable -> L2f
            r1.x(r3, r2)     // Catch: java.lang.Throwable -> L2f
            int r0 = r17.read(r18, r19, r20)     // Catch: java.lang.Throwable -> L2f
            return r0
        L9d:
            r1.q(r0)
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.upstream.cache.c.read(byte[], int, int):int");
    }

    public c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, int i10, a aVar2, me.b bVar) {
        this(aVar, dataSource, dataSource2, lVar, bVar, i10, null, 0, aVar2);
    }

    private c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, me.b bVar, int i10, j0 j0Var, int i11, a aVar2) {
        this.f13327a = aVar;
        this.f13328b = dataSource2;
        this.f13331e = bVar == null ? me.b.f37113a : bVar;
        this.f13332f = (i10 & 1) != 0;
        this.f13333g = (i10 & 2) != 0;
        this.f13334h = (i10 & 4) != 0;
        if (dataSource != null) {
            this.f13330d = dataSource;
            this.f13329c = lVar != null ? new b0(dataSource, lVar) : null;
            return;
        }
        this.f13330d = com.google.android.exoplayer2.upstream.l.f13452a;
        this.f13329c = null;
    }
}
