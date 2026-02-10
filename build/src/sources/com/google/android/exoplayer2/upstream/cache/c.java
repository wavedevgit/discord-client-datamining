package com.google.android.exoplayer2.upstream.cache;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.InterruptedIOException;
import java.util.Collections;
import java.util.Map;
import kotlin.jvm.internal.LongCompanionObject;
import me.b0;
import me.c0;
import me.l;
import me.m;
import oe.j0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.cache.a f14044a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f14045b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f14046c;

    /* renamed from: d  reason: collision with root package name */
    private final DataSource f14047d;

    /* renamed from: e  reason: collision with root package name */
    private final ne.b f14048e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f14049f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f14050g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f14051h;

    /* renamed from: i  reason: collision with root package name */
    private Uri f14052i;

    /* renamed from: j  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14053j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14054k;

    /* renamed from: l  reason: collision with root package name */
    private DataSource f14055l;

    /* renamed from: m  reason: collision with root package name */
    private long f14056m;

    /* renamed from: n  reason: collision with root package name */
    private long f14057n;

    /* renamed from: o  reason: collision with root package name */
    private long f14058o;

    /* renamed from: p  reason: collision with root package name */
    private ne.c f14059p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f14060q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f14061r;

    /* renamed from: s  reason: collision with root package name */
    private long f14062s;

    /* renamed from: t  reason: collision with root package name */
    private long f14063t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
    }

    public c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, int i10, a aVar2) {
        this(aVar, dataSource, dataSource2, lVar, i10, aVar2, null);
    }

    /* JADX WARN: Type inference failed for: r1v0, types: [com.google.android.exoplayer2.upstream.a, com.google.android.exoplayer2.upstream.DataSource, ne.c] */
    private void o() {
        DataSource dataSource = this.f14055l;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f14054k = null;
                this.f14055l = null;
                ne.c cVar = this.f14059p;
                if (cVar != null) {
                    this.f14044a.h(cVar);
                    this.f14059p = null;
                }
            }
        }
    }

    private static Uri p(com.google.android.exoplayer2.upstream.cache.a aVar, String str, Uri uri) {
        Uri b10 = ne.d.b(aVar.b(str));
        if (b10 != null) {
            return b10;
        }
        return uri;
    }

    private void q(Throwable th2) {
        if (!s() && !(th2 instanceof a.C0172a)) {
            return;
        }
        this.f14060q = true;
    }

    private boolean r() {
        if (this.f14055l == this.f14047d) {
            return true;
        }
        return false;
    }

    private boolean s() {
        if (this.f14055l == this.f14045b) {
            return true;
        }
        return false;
    }

    private boolean t() {
        return !s();
    }

    private boolean u() {
        if (this.f14055l == this.f14046c) {
            return true;
        }
        return false;
    }

    private void v() {
    }

    private void w(int i10) {
    }

    private void x(com.google.android.exoplayer2.upstream.a aVar, boolean z10) {
        ne.c f10;
        long j10;
        com.google.android.exoplayer2.upstream.a a10;
        DataSource dataSource;
        long j11;
        String str = (String) w0.j(aVar.f13990i);
        Uri uri = null;
        if (this.f14061r) {
            f10 = null;
        } else if (this.f14049f) {
            try {
                f10 = this.f14044a.f(str, this.f14057n, this.f14058o);
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
                throw new InterruptedIOException();
            }
        } else {
            f10 = this.f14044a.c(str, this.f14057n, this.f14058o);
        }
        if (f10 == null) {
            dataSource = this.f14047d;
            a10 = aVar.a().h(this.f14057n).g(this.f14058o).a();
        } else if (f10.f37180o) {
            Uri fromFile = Uri.fromFile((File) w0.j(f10.f37181p));
            long j12 = f10.f37178e;
            long j13 = this.f14057n - j12;
            long j14 = f10.f37179i - j13;
            long j15 = this.f14058o;
            if (j15 != -1) {
                j14 = Math.min(j14, j15);
            }
            a10 = aVar.a().i(fromFile).k(j12).h(j13).g(j14).a();
            dataSource = this.f14045b;
        } else {
            if (f10.e()) {
                j10 = this.f14058o;
            } else {
                j10 = f10.f37179i;
                long j16 = this.f14058o;
                if (j16 != -1) {
                    j10 = Math.min(j10, j16);
                }
            }
            a10 = aVar.a().h(this.f14057n).g(j10).a();
            dataSource = this.f14046c;
            if (dataSource == null) {
                dataSource = this.f14047d;
                this.f14044a.h(f10);
                f10 = null;
            }
        }
        if (!this.f14061r && dataSource == this.f14047d) {
            j11 = this.f14057n + 102400;
        } else {
            j11 = LongCompanionObject.MAX_VALUE;
        }
        this.f14063t = j11;
        if (z10) {
            oe.a.g(r());
            if (dataSource != this.f14047d) {
                try {
                    o();
                } catch (Throwable th2) {
                    if (((ne.c) w0.j(f10)).d()) {
                        this.f14044a.h(f10);
                    }
                    throw th2;
                }
            } else {
                return;
            }
        }
        if (f10 != null && f10.d()) {
            this.f14059p = f10;
        }
        this.f14055l = dataSource;
        this.f14054k = a10;
        this.f14056m = 0L;
        long b10 = dataSource.b(a10);
        ne.e eVar = new ne.e();
        if (a10.f13989h == -1 && b10 != -1) {
            this.f14058o = b10;
            ne.e.g(eVar, this.f14057n + b10);
        }
        if (t()) {
            Uri m10 = dataSource.m();
            this.f14052i = m10;
            if (!aVar.f13982a.equals(m10)) {
                uri = this.f14052i;
            }
            ne.e.h(eVar, uri);
        }
        if (u()) {
            this.f14044a.d(str, eVar);
        }
    }

    private void y(String str) {
        this.f14058o = 0L;
        if (u()) {
            ne.e eVar = new ne.e();
            ne.e.g(eVar, this.f14057n);
            this.f14044a.d(str, eVar);
        }
    }

    private int z(com.google.android.exoplayer2.upstream.a aVar) {
        if (this.f14050g && this.f14060q) {
            return 0;
        }
        if (this.f14051h && aVar.f13989h == -1) {
            return 1;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        try {
            String a10 = this.f14048e.a(aVar);
            com.google.android.exoplayer2.upstream.a a11 = aVar.a().f(a10).a();
            this.f14053j = a11;
            this.f14052i = p(this.f14044a, a10, a11.f13982a);
            this.f14057n = aVar.f13988g;
            int z11 = z(aVar);
            if (z11 != -1) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f14061r = z10;
            if (z10) {
                w(z11);
            }
            if (this.f14061r) {
                this.f14058o = -1L;
            } else {
                long d10 = ne.d.d(this.f14044a.b(a10));
                this.f14058o = d10;
                if (d10 != -1) {
                    long j10 = d10 - aVar.f13988g;
                    this.f14058o = j10;
                    if (j10 < 0) {
                        throw new m(2008);
                    }
                }
            }
            long j11 = aVar.f13989h;
            if (j11 != -1) {
                long j12 = this.f14058o;
                if (j12 != -1) {
                    j11 = Math.min(j12, j11);
                }
                this.f14058o = j11;
            }
            long j13 = this.f14058o;
            if (j13 > 0 || j13 == -1) {
                x(a11, false);
            }
            long j14 = aVar.f13989h;
            if (j14 != -1) {
                return j14;
            }
            return this.f14058o;
        } catch (Throwable th2) {
            q(th2);
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f14053j = null;
        this.f14052i = null;
        this.f14057n = 0L;
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
            return this.f14047d.d();
        }
        return Collections.EMPTY_MAP;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f14045b.i(c0Var);
        this.f14047d.i(c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f14052i;
    }

    /* JADX WARN: Code restructure failed: missing block: B:28:0x0077, code lost:
        if (r17.f14056m < r13) goto L36;
     */
    @Override // me.j
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
            long r3 = r1.f14058o
            r5 = 0
            int r3 = (r3 > r5 ? 1 : (r3 == r5 ? 0 : -1))
            r4 = -1
            if (r3 != 0) goto L12
            return r4
        L12:
            com.google.android.exoplayer2.upstream.a r3 = r1.f14053j
            java.lang.Object r3 = oe.a.e(r3)
            com.google.android.exoplayer2.upstream.a r3 = (com.google.android.exoplayer2.upstream.a) r3
            com.google.android.exoplayer2.upstream.a r7 = r1.f14054k
            java.lang.Object r7 = oe.a.e(r7)
            com.google.android.exoplayer2.upstream.a r7 = (com.google.android.exoplayer2.upstream.a) r7
            long r8 = r1.f14057n     // Catch: java.lang.Throwable -> L2f
            long r10 = r1.f14063t     // Catch: java.lang.Throwable -> L2f
            int r8 = (r8 > r10 ? 1 : (r8 == r10 ? 0 : -1))
            if (r8 < 0) goto L31
            r8 = 1
            r1.x(r3, r8)     // Catch: java.lang.Throwable -> L2f
            goto L31
        L2f:
            r0 = move-exception
            goto L9d
        L31:
            com.google.android.exoplayer2.upstream.DataSource r8 = r1.f14055l     // Catch: java.lang.Throwable -> L2f
            java.lang.Object r8 = oe.a.e(r8)     // Catch: java.lang.Throwable -> L2f
            com.google.android.exoplayer2.upstream.DataSource r8 = (com.google.android.exoplayer2.upstream.DataSource) r8     // Catch: java.lang.Throwable -> L2f
            r9 = r18
            r10 = r19
            int r8 = r8.read(r9, r10, r0)     // Catch: java.lang.Throwable -> L2f
            r11 = -1
            if (r8 == r4) goto L66
            boolean r0 = r1.s()     // Catch: java.lang.Throwable -> L2f
            if (r0 == 0) goto L51
            long r2 = r1.f14062s     // Catch: java.lang.Throwable -> L2f
            long r4 = (long) r8     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f14062s = r2     // Catch: java.lang.Throwable -> L2f
        L51:
            long r2 = r1.f14057n     // Catch: java.lang.Throwable -> L2f
            long r4 = (long) r8     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f14057n = r2     // Catch: java.lang.Throwable -> L2f
            long r2 = r1.f14056m     // Catch: java.lang.Throwable -> L2f
            long r2 = r2 + r4
            r1.f14056m = r2     // Catch: java.lang.Throwable -> L2f
            long r2 = r1.f14058o     // Catch: java.lang.Throwable -> L2f
            int r0 = (r2 > r11 ? 1 : (r2 == r11 ? 0 : -1))
            if (r0 == 0) goto L91
            long r2 = r2 - r4
            r1.f14058o = r2     // Catch: java.lang.Throwable -> L2f
            return r8
        L66:
            boolean r4 = r1.t()     // Catch: java.lang.Throwable -> L2f
            if (r4 == 0) goto L85
            long r13 = r7.f13989h     // Catch: java.lang.Throwable -> L2f
            int r4 = (r13 > r11 ? 1 : (r13 == r11 ? 0 : -1))
            if (r4 == 0) goto L79
            r15 = r5
            long r5 = r1.f14056m     // Catch: java.lang.Throwable -> L2f
            int r4 = (r5 > r13 ? 1 : (r5 == r13 ? 0 : -1))
            if (r4 >= 0) goto L86
        L79:
            java.lang.String r0 = r3.f13990i     // Catch: java.lang.Throwable -> L2f
            java.lang.Object r0 = oe.w0.j(r0)     // Catch: java.lang.Throwable -> L2f
            java.lang.String r0 = (java.lang.String) r0     // Catch: java.lang.Throwable -> L2f
            r1.y(r0)     // Catch: java.lang.Throwable -> L2f
            return r8
        L85:
            r15 = r5
        L86:
            long r4 = r1.f14058o     // Catch: java.lang.Throwable -> L2f
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

    public c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, int i10, a aVar2, ne.b bVar) {
        this(aVar, dataSource, dataSource2, lVar, bVar, i10, null, 0, aVar2);
    }

    private c(com.google.android.exoplayer2.upstream.cache.a aVar, DataSource dataSource, DataSource dataSource2, l lVar, ne.b bVar, int i10, j0 j0Var, int i11, a aVar2) {
        this.f14044a = aVar;
        this.f14045b = dataSource2;
        this.f14048e = bVar == null ? ne.b.f37176a : bVar;
        this.f14049f = (i10 & 1) != 0;
        this.f14050g = (i10 & 2) != 0;
        this.f14051h = (i10 & 4) != 0;
        if (dataSource != null) {
            this.f14047d = dataSource;
            this.f14046c = lVar != null ? new b0(dataSource, lVar) : null;
            return;
        }
        this.f14047d = com.google.android.exoplayer2.upstream.l.f14169a;
        this.f14046c = null;
    }
}
