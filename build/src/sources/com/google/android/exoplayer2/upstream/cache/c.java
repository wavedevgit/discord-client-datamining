package com.google.android.exoplayer2.upstream.cache;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.cache.a;
import com.google.android.exoplayer2.upstream.k;
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
    private final com.google.android.exoplayer2.upstream.cache.a f14037a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f14038b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f14039c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f14040d;

    /* renamed from: e  reason: collision with root package name */
    private final me.b f14041e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f14042f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f14043g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f14044h;

    /* renamed from: i  reason: collision with root package name */
    private Uri f14045i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14046j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14047k;

    /* renamed from: l  reason: collision with root package name */
    private DataSource f14048l;

    /* renamed from: m  reason: collision with root package name */
    private long f14049m;

    /* renamed from: n  reason: collision with root package name */
    private long f14050n;

    /* renamed from: o  reason: collision with root package name */
    private long f14051o;

    /* renamed from: p  reason: collision with root package name */
    private me.c f14052p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14053q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14054r;

    /* renamed from: s  reason: collision with root package name */
    private long f14055s;

    /* renamed from: t  reason: collision with root package name */
    private long f14056t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    public c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, int i10, a aVar2) {
        this(aVar, dataSource, dataSource2, lVar, i10, aVar2, null);
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [com.google.android.exoplayer2.upstream.a, me.c, com.google.android.exoplayer2.upstream.DataSource] */
    private void o() {
        DataSource dataSource = this.f14048l;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f14047k = null;
                this.f14048l = null;
                me.c cVar = this.f14052p;
                if (cVar != null) {
                    this.f14037a.e(cVar);
                    this.f14052p = null;
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
        if (!s() && !(th2 instanceof a.C0178a)) {
            return;
        }
        this.f14053q = true;
    }

    private boolean r() {
        if (this.f14048l == this.f14040d) {
            return true;
        }
        return false;
    }

    private boolean s() {
        if (this.f14048l == this.f14038b) {
            return true;
        }
        return false;
    }

    private boolean t() {
        return !s();
    }

    private boolean u() {
        if (this.f14048l == this.f14039c) {
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
        String str = (String) w0.j(aVar.f13983i);
        Uri uri = null;
        if (this.f14054r) {
            g10 = null;
        } else if (this.f14042f) {
            try {
                g10 = this.f14037a.g(str, this.f14050n, this.f14051o);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
                throw new InterruptedIOException();
            }
        } else {
            g10 = this.f14037a.c(str, this.f14050n, this.f14051o);
        }
        if (g10 == null) {
            dataSource = this.f14040d;
            a10 = aVar.a().h(this.f14050n).g(this.f14051o).a();
        } else if (g10.f38028o) {
            Uri fromFile = Uri.fromFile((File) w0.j(g10.f38029p));
            long j12 = g10.f38026e;
            long j13 = this.f14050n - j12;
            long j14 = g10.f38027i - j13;
            long j15 = this.f14051o;
            if (j15 != -1) {
                j14 = Math.min(j14, j15);
            }
            a10 = aVar.a().i(fromFile).k(j12).h(j13).g(j14).a();
            dataSource = this.f14038b;
        } else {
            if (g10.e()) {
                j10 = this.f14051o;
            } else {
                j10 = g10.f38027i;
                long j16 = this.f14051o;
                if (j16 != -1) {
                    j10 = Math.min(j10, j16);
                }
            }
            a10 = aVar.a().h(this.f14050n).g(j10).a();
            dataSource = this.f14039c;
            if (dataSource == null) {
                dataSource = this.f14040d;
                this.f14037a.e(g10);
                g10 = null;
            }
        }
        if (!this.f14054r && dataSource == this.f14040d) {
            j11 = this.f14050n + 102400;
        } else {
            j11 = LongCompanionObject.MAX_VALUE;
        }
        this.f14056t = j11;
        if (z10) {
            ne.a.g(r());
            if (dataSource != this.f14040d) {
                try {
                    o();
                } catch (Throwable th2) {
                    if (((me.c) w0.j(g10)).d()) {
                        this.f14037a.e(g10);
                    }
                    throw th2;
                }
            } else {
                return;
            }
        }
        if (g10 != null && g10.d()) {
            this.f14052p = g10;
        }
        this.f14048l = dataSource;
        this.f14047k = a10;
        this.f14049m = 0L;
        long b10 = dataSource.b(a10);
        me.e eVar = new me.e();
        if (a10.f13982h == -1 && b10 != -1) {
            this.f14051o = b10;
            me.e.g(eVar, this.f14050n + b10);
        }
        if (t()) {
            Uri m10 = dataSource.m();
            this.f14045i = m10;
            if (!aVar.f13975a.equals(m10)) {
                uri = this.f14045i;
            }
            me.e.h(eVar, uri);
        }
        if (u()) {
            this.f14037a.f(str, eVar);
        }
    }

    private void y(String str) {
        this.f14051o = 0L;
        if (u()) {
            me.e eVar = new me.e();
            me.e.g(eVar, this.f14050n);
            this.f14037a.f(str, eVar);
        }
    }

    private int z(com.google.android.exoplayer2.upstream.a aVar) {
        if (this.f14043g && this.f14053q) {
            return 0;
        }
        if (this.f14044h && aVar.f13982h == -1) {
            return 1;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        try {
            String a10 = this.f14041e.a(aVar);
            com.google.android.exoplayer2.upstream.a a11 = aVar.a().f(a10).a();
            this.f14046j = a11;
            this.f14045i = p(this.f14037a, a10, a11.f13975a);
            this.f14050n = aVar.f13981g;
            int z11 = z(aVar);
            if (z11 != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f14054r = z10;
            if (z10) {
                w(z11);
            }
            if (this.f14054r) {
                this.f14051o = -1L;
            } else {
                long d10 = me.d.d(this.f14037a.b(a10));
                this.f14051o = d10;
                if (d10 != -1) {
                    long j10 = d10 - aVar.f13981g;
                    this.f14051o = j10;
                    if (j10 < 0) {
                        throw new m(2008);
                    }
                }
            }
            long j11 = aVar.f13982h;
            if (j11 != -1) {
                long j12 = this.f14051o;
                if (j12 != -1) {
                    j11 = Math.min(j12, j11);
                }
                this.f14051o = j11;
            }
            long j13 = this.f14051o;
            if (j13 > 0 || j13 == -1) {
                x(a11, false);
            }
            long j14 = aVar.f13982h;
            if (j14 != -1) {
                return j14;
            }
            return this.f14051o;
        } catch (Throwable th2) {
            q(th2);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f14046j = null;
        this.f14045i = null;
        this.f14050n = 0L;
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
            return this.f14040d.d();
        }
        return Collections.EMPTY_MAP;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f14038b.j(c0Var);
        this.f14040d.j(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f14045i;
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x0077, code lost:
        if (r17.f14049m < r13) goto L36;
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
            long r3 = r1.f14051o
            r5 = 0
            int r3 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            r4 = -1
            if (r3 != 0) goto L12
            return r4
        L12:
            com.google.android.exoplayer2.upstream.a r3 = r1.f14046j
            java.lang.Object r3 = ne.a.e(r3)
            com.google.android.exoplayer2.upstream.a r3 = (com.google.android.exoplayer2.upstream.a) r3
            com.google.android.exoplayer2.upstream.a r7 = r1.f14047k
            java.lang.Object r7 = ne.a.e(r7)
            com.google.android.exoplayer2.upstream.a r7 = (com.google.android.exoplayer2.upstream.a) r7
            long r8 = r1.f14050n     // Catch: java.lang.Throwable -> L2f
            long r10 = r1.f14056t     // Catch: java.lang.Throwable -> L2f
            int r8 = (r8 > r10 ? 1 : (r8 == r10 ? 0 : -1))
            if (r8 < 0) goto L31
            r8 = 1
            r1.x(r3, r8)     // Catch: java.lang.Throwable -> L2f
            goto L31
        L2f:
            r0 = move-exception
            goto L9d
        L31:
            com.google.android.exoplayer2.upstream.DataSource r8 = r1.f14048l     // Catch: java.lang.Throwable -> L2f
            java.lang.Object r8 = ne.a.e(r8)     // Catch: java.lang.Throwable -> L2f
            com.google.android.exoplayer2.upstream.DataSource r8 = (com.google.android.exoplayer2.upstream.DataSource) r8     // Catch: java.lang.Throwable -> L2f
            r9 = r18
            r10 = r19
            int r8 = r8.read(r9, r10, r0)     // Catch: java.lang.Throwable -> L2f
            r11 = -1
            if (r8 == r4) goto L66
            boolean r0 = r1.s()     // Catch: java.lang.Throwable -> L2f
            if (r0 == 0) goto L51
            long r2 = r1.f14055s     // Catch: java.lang.Throwable -> L2f
            long r4 = (long) r8     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f14055s = r2     // Catch: java.lang.Throwable -> L2f
        L51:
            long r2 = r1.f14050n     // Catch: java.lang.Throwable -> L2f
            long r4 = (long) r8     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f14050n = r2     // Catch: java.lang.Throwable -> L2f
            long r2 = r1.f14049m     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f14049m = r2     // Catch: java.lang.Throwable -> L2f
            long r2 = r1.f14051o     // Catch: java.lang.Throwable -> L2f
            int r0 = (r2 > r11 ? 1 : (r2 == r11 ? 0 : -1))
            if (r0 == 0) goto L91
            long r2 = r2 - r4
            r1.f14051o = r2     // Catch: java.lang.Throwable -> L2f
            return r8
        L66:
            boolean r4 = r1.t()     // Catch: java.lang.Throwable -> L2f
            if (r4 == 0) goto L85
            long r13 = r7.f13982h     // Catch: java.lang.Throwable -> L2f
            int r4 = (r13 > r11 ? 1 : (r13 == r11 ? 0 : -1))
            if (r4 == 0) goto L79
            r15 = r5
            long r5 = r1.f14049m     // Catch: java.lang.Throwable -> L2f
            int r4 = (r5 > r13 ? 1 : (r5 == r13 ? 0 : -1))
            if (r4 >= 0) goto L86
        L79:
            java.lang.String r0 = r3.f13983i     // Catch: java.lang.Throwable -> L2f
            java.lang.Object r0 = ne.w0.j(r0)     // Catch: java.lang.Throwable -> L2f
            java.lang.String r0 = (java.lang.String) r0     // Catch: java.lang.Throwable -> L2f
            r1.y(r0)     // Catch: java.lang.Throwable -> L2f
            return r8
        L85:
            r15 = r5
        L86:
            long r4 = r1.f14051o     // Catch: java.lang.Throwable -> L2f
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
        this.f14037a = aVar;
        this.f14038b = dataSource2;
        this.f14041e = bVar == null ? me.b.f38024a : bVar;
        this.f14042f = (i10 & 1) != 0;
        this.f14043g = (i10 & 2) != 0;
        this.f14044h = (i10 & 4) != 0;
        if (dataSource != null) {
            this.f14040d = dataSource;
            this.f14039c = lVar != null ? new b0(dataSource, lVar) : null;
            return;
        }
        this.f14040d = k.f14138a;
        this.f14039c = null;
    }
}
