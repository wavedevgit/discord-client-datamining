package com.google.android.exoplayer2.source.dash;

import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.text.TextUtils;
import android.util.SparseArray;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.source.dash.DashMediaSource;
import com.google.android.exoplayer2.source.dash.a;
import com.google.android.exoplayer2.source.dash.c;
import com.google.android.exoplayer2.source.dash.e;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import j$.util.DesugarTimeZone;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.RoundingMode;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import kotlin.jvm.internal.LongCompanionObject;
import lc.l0;
import le.c0;
import le.u;
import ne.m0;
import ne.w0;
import qd.p;
import qd.r;
import qd.y;
import rc.l;
import rc.v;
import rc.x;
import ud.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DashMediaSource extends qd.a {
    private final long A;
    private final long B;
    private final y.a C;
    private final j.a D;
    private final e E;
    private final Object F;
    private final SparseArray G;
    private final Runnable H;
    private final Runnable I;
    private final e.b J;
    private final u K;
    private DataSource L;
    private i M;
    private c0 N;
    private IOException O;
    private Handler P;
    private MediaItem.g Q;
    private Uri R;
    private Uri S;
    private ud.c T;
    private boolean U;
    private long V;
    private long W;
    private long X;
    private int Y;
    private long Z;

    /* renamed from: a0  reason: collision with root package name */
    private int f13769a0;

    /* renamed from: s  reason: collision with root package name */
    private final MediaItem f13770s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f13771t;

    /* renamed from: u  reason: collision with root package name */
    private final DataSource.Factory f13772u;

    /* renamed from: v  reason: collision with root package name */
    private final a.InterfaceC0167a f13773v;

    /* renamed from: w  reason: collision with root package name */
    private final qd.h f13774w;

    /* renamed from: x  reason: collision with root package name */
    private final v f13775x;

    /* renamed from: y  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f13776y;

    /* renamed from: z  reason: collision with root package name */
    private final td.b f13777z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final a.InterfaceC0167a f13778a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f13779b;

        /* renamed from: c  reason: collision with root package name */
        private x f13780c;

        /* renamed from: d  reason: collision with root package name */
        private qd.h f13781d;

        /* renamed from: e  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f13782e;

        /* renamed from: f  reason: collision with root package name */
        private long f13783f;

        /* renamed from: g  reason: collision with root package name */
        private long f13784g;

        /* renamed from: h  reason: collision with root package name */
        private j.a f13785h;

        public Factory(DataSource.Factory factory) {
            this(new c.a(factory), factory);
        }

        public DashMediaSource a(MediaItem mediaItem) {
            pd.b bVar;
            ne.a.e(mediaItem.f12744e);
            j.a aVar = this.f13785h;
            if (aVar == null) {
                aVar = new ud.d();
            }
            List list = mediaItem.f12744e.f12838p;
            if (!list.isEmpty()) {
                bVar = new pd.b(aVar, list);
            } else {
                bVar = aVar;
            }
            return new DashMediaSource(mediaItem, null, this.f13779b, bVar, this.f13778a, this.f13781d, null, this.f13780c.a(mediaItem), this.f13782e, this.f13783f, this.f13784g, null);
        }

        public Factory b(com.google.android.exoplayer2.upstream.h hVar) {
            this.f13782e = (com.google.android.exoplayer2.upstream.h) ne.a.f(hVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(a.InterfaceC0167a interfaceC0167a, DataSource.Factory factory) {
            this.f13778a = (a.InterfaceC0167a) ne.a.e(interfaceC0167a);
            this.f13779b = factory;
            this.f13780c = new l();
            this.f13782e = new com.google.android.exoplayer2.upstream.f();
            this.f13783f = 30000L;
            this.f13784g = 5000000L;
            this.f13781d = new qd.i();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements m0.b {
        a() {
        }

        @Override // ne.m0.b
        public void a(IOException iOException) {
            DashMediaSource.this.Y(iOException);
        }

        @Override // ne.m0.b
        public void b() {
            DashMediaSource.this.Z(m0.h());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Timeline {

        /* renamed from: q  reason: collision with root package name */
        private final long f13787q;

        /* renamed from: r  reason: collision with root package name */
        private final long f13788r;

        /* renamed from: s  reason: collision with root package name */
        private final long f13789s;

        /* renamed from: t  reason: collision with root package name */
        private final int f13790t;

        /* renamed from: u  reason: collision with root package name */
        private final long f13791u;

        /* renamed from: v  reason: collision with root package name */
        private final long f13792v;

        /* renamed from: w  reason: collision with root package name */
        private final long f13793w;

        /* renamed from: x  reason: collision with root package name */
        private final ud.c f13794x;

        /* renamed from: y  reason: collision with root package name */
        private final MediaItem f13795y;

        /* renamed from: z  reason: collision with root package name */
        private final MediaItem.g f13796z;

        public b(long j10, long j11, long j12, int i10, long j13, long j14, long j15, ud.c cVar, MediaItem mediaItem, MediaItem.g gVar) {
            boolean z10;
            boolean z11 = cVar.f50151d;
            if (gVar != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z11 == z10);
            this.f13787q = j10;
            this.f13788r = j11;
            this.f13789s = j12;
            this.f13790t = i10;
            this.f13791u = j13;
            this.f13792v = j14;
            this.f13793w = j15;
            this.f13794x = cVar;
            this.f13795y = mediaItem;
            this.f13796z = gVar;
        }

        private long w(long j10) {
            td.f l10;
            long j11 = this.f13793w;
            if (!x(this.f13794x)) {
                return j11;
            }
            if (j10 > 0) {
                j11 += j10;
                if (j11 > this.f13792v) {
                    return -9223372036854775807L;
                }
            }
            long j12 = this.f13791u + j11;
            long g10 = this.f13794x.g(0);
            int i10 = 0;
            while (i10 < this.f13794x.e() - 1 && j12 >= g10) {
                j12 -= g10;
                i10++;
                g10 = this.f13794x.g(i10);
            }
            ud.g d10 = this.f13794x.d(i10);
            int a10 = d10.a(2);
            if (a10 != -1 && (l10 = ((ud.j) ((ud.a) d10.f50185c.get(a10)).f50140c.get(0)).l()) != null && l10.g(g10) != 0) {
                return (j11 + l10.b(l10.f(j12, g10))) - j12;
            }
            return j11;
        }

        private static boolean x(ud.c cVar) {
            if (cVar.f50151d && cVar.f50152e != -9223372036854775807L && cVar.f50149b == -9223372036854775807L) {
                return true;
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int f(Object obj) {
            int intValue;
            if (!(obj instanceof Integer) || (intValue = ((Integer) obj).intValue() - this.f13790t) < 0 || intValue >= m()) {
                return -1;
            }
            return intValue;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            String str;
            ne.a.c(i10, 0, m());
            Integer num = null;
            if (z10) {
                str = this.f13794x.d(i10).f50183a;
            } else {
                str = null;
            }
            if (z10) {
                num = Integer.valueOf(this.f13790t + i10);
            }
            return bVar.v(str, num, 0, this.f13794x.g(i10), w0.K0(this.f13794x.d(i10).f50184b - this.f13794x.d(0).f50184b) - this.f13791u);
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return this.f13794x.e();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Object q(int i10) {
            ne.a.c(i10, 0, m());
            return Integer.valueOf(this.f13790t + i10);
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            ne.a.c(i10, 0, 1);
            long w10 = w(j10);
            Object obj = Timeline.d.C;
            MediaItem mediaItem = this.f13795y;
            ud.c cVar = this.f13794x;
            return dVar.h(obj, mediaItem, cVar, this.f13787q, this.f13788r, this.f13789s, true, x(cVar), this.f13796z, w10, this.f13792v, 0, m() - 1, this.f13791u);
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int t() {
            return 1;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements e.b {
        private c() {
        }

        @Override // com.google.android.exoplayer2.source.dash.e.b
        public void a(long j10) {
            DashMediaSource.this.R(j10);
        }

        @Override // com.google.android.exoplayer2.source.dash.e.b
        public void b() {
            DashMediaSource.this.S();
        }

        /* synthetic */ c(DashMediaSource dashMediaSource, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements j.a {

        /* renamed from: a  reason: collision with root package name */
        private static final Pattern f13798a = Pattern.compile("(.+?)(Z|((\\+|-|−)(\\d\\d)(:?(\\d\\d))?))");

        d() {
        }

        @Override // com.google.android.exoplayer2.upstream.j.a
        /* renamed from: b */
        public Long a(Uri uri, InputStream inputStream) {
            long j10;
            long parseLong;
            String readLine = new BufferedReader(new InputStreamReader(inputStream, ii.d.f28521c)).readLine();
            try {
                Matcher matcher = f13798a.matcher(readLine);
                if (matcher.matches()) {
                    String group = matcher.group(1);
                    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss", Locale.US);
                    simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
                    long time = simpleDateFormat.parse(group).getTime();
                    if (!"Z".equals(matcher.group(2))) {
                        if ("+".equals(matcher.group(4))) {
                            j10 = 1;
                        } else {
                            j10 = -1;
                        }
                        long parseLong2 = Long.parseLong(matcher.group(5));
                        String group2 = matcher.group(7);
                        if (TextUtils.isEmpty(group2)) {
                            parseLong = 0;
                        } else {
                            parseLong = Long.parseLong(group2);
                        }
                        time -= j10 * (((parseLong2 * 60) + parseLong) * LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
                    }
                    return Long.valueOf(time);
                }
                throw l0.c("Couldn't parse timestamp: " + readLine, null);
            } catch (ParseException e10) {
                throw l0.c(null, e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class e implements i.b {
        private e() {
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: a */
        public void i(j jVar, long j10, long j11, boolean z10) {
            DashMediaSource.this.T(jVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: b */
        public void j(j jVar, long j10, long j11) {
            DashMediaSource.this.U(jVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: c */
        public i.c n(j jVar, long j10, long j11, IOException iOException, int i10) {
            return DashMediaSource.this.V(jVar, j10, j11, iOException, i10);
        }

        /* synthetic */ e(DashMediaSource dashMediaSource, a aVar) {
            this();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    final class f implements u {
        f() {
        }

        private void b() {
            if (DashMediaSource.this.O == null) {
                return;
            }
            throw DashMediaSource.this.O;
        }

        @Override // le.u
        public void a() {
            DashMediaSource.this.M.a();
            b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class g implements i.b {
        private g() {
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: a */
        public void i(j jVar, long j10, long j11, boolean z10) {
            DashMediaSource.this.T(jVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: b */
        public void j(j jVar, long j10, long j11) {
            DashMediaSource.this.W(jVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.i.b
        /* renamed from: c */
        public i.c n(j jVar, long j10, long j11, IOException iOException, int i10) {
            return DashMediaSource.this.X(jVar, j10, j11, iOException);
        }

        /* synthetic */ g(DashMediaSource dashMediaSource, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements j.a {
        private h() {
        }

        @Override // com.google.android.exoplayer2.upstream.j.a
        /* renamed from: b */
        public Long a(Uri uri, InputStream inputStream) {
            return Long.valueOf(w0.R0(new BufferedReader(new InputStreamReader(inputStream)).readLine()));
        }

        /* synthetic */ h(a aVar) {
            this();
        }
    }

    static {
        lc.u.a("goog.exo.dash");
    }

    /* synthetic */ DashMediaSource(MediaItem mediaItem, ud.c cVar, DataSource.Factory factory, j.a aVar, a.InterfaceC0167a interfaceC0167a, qd.h hVar, le.g gVar, v vVar, com.google.android.exoplayer2.upstream.h hVar2, long j10, long j11, a aVar2) {
        this(mediaItem, cVar, factory, aVar, interfaceC0167a, hVar, gVar, vVar, hVar2, j10, j11);
    }

    private static long K(ud.g gVar, long j10, long j11) {
        long K0 = w0.K0(gVar.f50184b);
        boolean O = O(gVar);
        long j12 = LongCompanionObject.MAX_VALUE;
        for (int i10 = 0; i10 < gVar.f50185c.size(); i10++) {
            ud.a aVar = (ud.a) gVar.f50185c.get(i10);
            List list = aVar.f50140c;
            int i11 = aVar.f50139b;
            boolean z10 = true;
            z10 = (i11 == 1 || i11 == 2) ? false : false;
            if ((!O || !z10) && !list.isEmpty()) {
                td.f l10 = ((ud.j) list.get(0)).l();
                if (l10 == null) {
                    return K0 + j10;
                }
                long j13 = l10.j(j10, j11);
                if (j13 == 0) {
                    return K0;
                }
                long c10 = (l10.c(j10, j11) + j13) - 1;
                j12 = Math.min(j12, l10.a(c10, j10) + l10.b(c10) + K0);
            }
        }
        return j12;
    }

    private static long L(ud.g gVar, long j10, long j11) {
        long K0 = w0.K0(gVar.f50184b);
        boolean O = O(gVar);
        long j12 = K0;
        for (int i10 = 0; i10 < gVar.f50185c.size(); i10++) {
            ud.a aVar = (ud.a) gVar.f50185c.get(i10);
            List list = aVar.f50140c;
            int i11 = aVar.f50139b;
            boolean z10 = true;
            z10 = (i11 == 1 || i11 == 2) ? false : false;
            if ((!O || !z10) && !list.isEmpty()) {
                td.f l10 = ((ud.j) list.get(0)).l();
                if (l10 == null || l10.j(j10, j11) == 0) {
                    return K0;
                }
                j12 = Math.max(j12, l10.b(l10.c(j10, j11)) + K0);
            }
        }
        return j12;
    }

    private static long M(ud.c cVar, long j10) {
        td.f l10;
        int e10 = cVar.e() - 1;
        ud.g d10 = cVar.d(e10);
        long K0 = w0.K0(d10.f50184b);
        long g10 = cVar.g(e10);
        long K02 = w0.K0(j10);
        long K03 = w0.K0(cVar.f50148a);
        long K04 = w0.K0(5000L);
        for (int i10 = 0; i10 < d10.f50185c.size(); i10++) {
            List list = ((ud.a) d10.f50185c.get(i10)).f50140c;
            if (!list.isEmpty() && (l10 = ((ud.j) list.get(0)).l()) != null) {
                long d11 = ((K03 + K0) + l10.d(g10, K02)) - K02;
                if (d11 < K04 - 100000 || (d11 > K04 && d11 < K04 + 100000)) {
                    K04 = d11;
                }
            }
        }
        return ki.c.a(K04, 1000L, RoundingMode.CEILING);
    }

    private long N() {
        return Math.min((this.Y - 1) * 1000, 5000);
    }

    private static boolean O(ud.g gVar) {
        for (int i10 = 0; i10 < gVar.f50185c.size(); i10++) {
            int i11 = ((ud.a) gVar.f50185c.get(i10)).f50139b;
            if (i11 == 1 || i11 == 2) {
                return true;
            }
        }
        return false;
    }

    private static boolean P(ud.g gVar) {
        for (int i10 = 0; i10 < gVar.f50185c.size(); i10++) {
            td.f l10 = ((ud.j) ((ud.a) gVar.f50185c.get(i10)).f50140c.get(0)).l();
            if (l10 == null || l10.h()) {
                return true;
            }
        }
        return false;
    }

    private void Q() {
        m0.j(this.M, new a());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Y(IOException iOException) {
        ne.y.d("DashMediaSource", "Failed to resolve time offset.", iOException);
        a0(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Z(long j10) {
        this.X = j10;
        a0(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void a0(boolean z10) {
        boolean z11;
        long j10;
        long j11;
        long j12;
        MediaItem.g gVar;
        boolean z12 = false;
        for (int i10 = 0; i10 < this.G.size(); i10++) {
            int keyAt = this.G.keyAt(i10);
            if (keyAt >= this.f13769a0) {
                ((com.google.android.exoplayer2.source.dash.b) this.G.valueAt(i10)).M(this.T, keyAt - this.f13769a0);
            }
        }
        ud.g d10 = this.T.d(0);
        int e10 = this.T.e() - 1;
        ud.g d11 = this.T.d(e10);
        long g10 = this.T.g(e10);
        long K0 = w0.K0(w0.f0(this.X));
        long L = L(d10, this.T.g(0), K0);
        long K = K(d11, g10, K0);
        if (this.T.f50151d && !P(d11)) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            long j13 = this.T.f50153f;
            if (j13 != -9223372036854775807L) {
                L = Math.max(L, K - w0.K0(j13));
            }
        }
        long j14 = K - L;
        ud.c cVar = this.T;
        if (cVar.f50151d) {
            if (cVar.f50148a != -9223372036854775807L) {
                z12 = true;
            }
            ne.a.g(z12);
            long K02 = (K0 - w0.K0(this.T.f50148a)) - L;
            h0(K02, j14);
            long p12 = this.T.f50148a + w0.p1(L);
            long K03 = K02 - w0.K0(this.Q.f12818d);
            j10 = 0;
            long min = Math.min(this.B, j14 / 2);
            j11 = p12;
            if (K03 < min) {
                j12 = min;
            } else {
                j12 = K03;
            }
        } else {
            j10 = 0;
            j11 = -9223372036854775807L;
            j12 = 0;
        }
        long K04 = L - w0.K0(d10.f50184b);
        ud.c cVar2 = this.T;
        long j15 = cVar2.f50148a;
        long j16 = this.X;
        int i11 = this.f13769a0;
        MediaItem mediaItem = this.f13770s;
        if (cVar2.f50151d) {
            gVar = this.Q;
        } else {
            gVar = null;
        }
        C(new b(j15, j11, j16, i11, K04, j14, j12, cVar2, mediaItem, gVar));
        if (!this.f13771t) {
            this.P.removeCallbacks(this.I);
            if (z11) {
                this.P.postDelayed(this.I, M(this.T, w0.f0(this.X)));
            }
            if (this.U) {
                g0();
            } else if (z10) {
                ud.c cVar3 = this.T;
                if (cVar3.f50151d) {
                    long j17 = cVar3.f50152e;
                    if (j17 != -9223372036854775807L) {
                        if (j17 == j10) {
                            j17 = 5000;
                        }
                        e0(Math.max(j10, (this.V + j17) - SystemClock.elapsedRealtime()));
                    }
                }
            }
        }
    }

    private void b0(o oVar) {
        String str = oVar.f50238a;
        if (!w0.c(str, "urn:mpeg:dash:utc:direct:2014") && !w0.c(str, "urn:mpeg:dash:utc:direct:2012")) {
            if (!w0.c(str, "urn:mpeg:dash:utc:http-iso:2014") && !w0.c(str, "urn:mpeg:dash:utc:http-iso:2012")) {
                if (!w0.c(str, "urn:mpeg:dash:utc:http-xsdate:2014") && !w0.c(str, "urn:mpeg:dash:utc:http-xsdate:2012")) {
                    if (!w0.c(str, "urn:mpeg:dash:utc:ntp:2014") && !w0.c(str, "urn:mpeg:dash:utc:ntp:2012")) {
                        Y(new IOException("Unsupported UTC timing scheme"));
                        return;
                    } else {
                        Q();
                        return;
                    }
                }
                d0(oVar, new h(null));
                return;
            }
            d0(oVar, new d());
            return;
        }
        c0(oVar);
    }

    private void c0(o oVar) {
        try {
            Z(w0.R0(oVar.f50239b) - this.W);
        } catch (l0 e10) {
            Y(e10);
        }
    }

    private void d0(o oVar, j.a aVar) {
        f0(new j(this.L, Uri.parse(oVar.f50239b), 5, aVar), new g(this, null), 1);
    }

    private void e0(long j10) {
        this.P.postDelayed(this.H, j10);
    }

    private void f0(j jVar, i.b bVar, int i10) {
        this.C.s(new LoadEventInfo(jVar.f14503a, jVar.f14504b, this.M.n(jVar, bVar, i10)), jVar.f14505c);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void g0() {
        Uri uri;
        this.P.removeCallbacks(this.H);
        if (this.M.i()) {
            return;
        }
        if (this.M.j()) {
            this.U = true;
            return;
        }
        synchronized (this.F) {
            uri = this.R;
        }
        this.U = false;
        f0(new j(this.L, uri, 4, this.D), this.E, this.f13776y.b(4));
    }

    /* JADX WARN: Removed duplicated region for block: B:19:0x0046  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0056  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x005c  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0073  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x007d  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0098  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x009d  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00c0  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x00d1  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void h0(long r18, long r20) {
        /*
            Method dump skipped, instructions count: 274
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.source.dash.DashMediaSource.h0(long, long):void");
    }

    @Override // qd.a
    protected void B(c0 c0Var) {
        this.N = c0Var;
        this.f13775x.a(Looper.myLooper(), z());
        this.f13775x.d();
        if (this.f13771t) {
            a0(false);
            return;
        }
        this.L = this.f13772u.createDataSource();
        this.M = new i("DashMediaSource");
        this.P = w0.w();
        g0();
    }

    @Override // qd.a
    protected void D() {
        ud.c cVar;
        this.U = false;
        this.L = null;
        i iVar = this.M;
        if (iVar != null) {
            iVar.l();
            this.M = null;
        }
        this.V = 0L;
        this.W = 0L;
        if (this.f13771t) {
            cVar = this.T;
        } else {
            cVar = null;
        }
        this.T = cVar;
        this.R = this.S;
        this.O = null;
        Handler handler = this.P;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
            this.P = null;
        }
        this.X = -9223372036854775807L;
        this.Y = 0;
        this.Z = -9223372036854775807L;
        this.G.clear();
        this.f13777z.i();
        this.f13775x.release();
    }

    void R(long j10) {
        long j11 = this.Z;
        if (j11 != -9223372036854775807L && j11 >= j10) {
            return;
        }
        this.Z = j10;
    }

    void S() {
        this.P.removeCallbacks(this.I);
        g0();
    }

    void T(j jVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f13776y.d(jVar.f14503a);
        this.C.j(loadEventInfo, jVar.f14505c);
    }

    void U(j jVar, long j10, long j11) {
        int e10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f13776y.d(jVar.f14503a);
        this.C.m(loadEventInfo, jVar.f14505c);
        ud.c cVar = (ud.c) jVar.e();
        ud.c cVar2 = this.T;
        if (cVar2 == null) {
            e10 = 0;
        } else {
            e10 = cVar2.e();
        }
        long j12 = cVar.d(0).f50184b;
        int i10 = 0;
        while (i10 < e10 && this.T.d(i10).f50184b < j12) {
            i10++;
        }
        if (cVar.f50151d) {
            if (e10 - i10 > cVar.e()) {
                ne.y.i("DashMediaSource", "Loaded out of sync manifest");
            } else {
                long j13 = this.Z;
                if (j13 != -9223372036854775807L && cVar.f50155h * 1000 <= j13) {
                    ne.y.i("DashMediaSource", "Loaded stale dynamic manifest: " + cVar.f50155h + ", " + this.Z);
                } else {
                    this.Y = 0;
                }
            }
            int i11 = this.Y;
            this.Y = i11 + 1;
            if (i11 < this.f13776y.b(jVar.f14505c)) {
                e0(N());
                return;
            } else {
                this.O = new td.c();
                return;
            }
        }
        this.T = cVar;
        this.U = cVar.f50151d & this.U;
        this.V = j10 - j11;
        this.W = j10;
        synchronized (this.F) {
            try {
                if (jVar.f14504b.f14346a == this.R) {
                    Uri uri = this.T.f50158k;
                    if (uri == null) {
                        uri = jVar.f();
                    }
                    this.R = uri;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (e10 == 0) {
            ud.c cVar3 = this.T;
            if (cVar3.f50151d) {
                o oVar = cVar3.f50156i;
                if (oVar != null) {
                    b0(oVar);
                    return;
                } else {
                    Q();
                    return;
                }
            }
            a0(true);
            return;
        }
        this.f13769a0 += i10;
        a0(true);
    }

    i.c V(j jVar, long j10, long j11, IOException iOException, int i10) {
        i.c h10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        long a10 = this.f13776y.a(new h.c(loadEventInfo, new MediaLoadData(jVar.f14505c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            h10 = i.f14486g;
        } else {
            h10 = i.h(false, a10);
        }
        boolean c10 = h10.c();
        this.C.q(loadEventInfo, jVar.f14505c, iOException, !c10);
        if (!c10) {
            this.f13776y.d(jVar.f14503a);
        }
        return h10;
    }

    void W(j jVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.f13776y.d(jVar.f14503a);
        this.C.m(loadEventInfo, jVar.f14505c);
        Z(((Long) jVar.e()).longValue() - j10);
    }

    i.c X(j jVar, long j10, long j11, IOException iOException) {
        this.C.q(new LoadEventInfo(jVar.f14503a, jVar.f14504b, jVar.f(), jVar.d(), j10, j11, jVar.a()), jVar.f14505c, iOException, true);
        this.f13776y.d(jVar.f14503a);
        Y(iOException);
        return i.f14485f;
    }

    @Override // qd.r
    public void c(p pVar) {
        com.google.android.exoplayer2.source.dash.b bVar = (com.google.android.exoplayer2.source.dash.b) pVar;
        bVar.I();
        this.G.remove(bVar.f13802d);
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f13770s;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        int intValue = ((Integer) bVar.f47284a).intValue() - this.f13769a0;
        y.a w10 = w(bVar);
        com.google.android.exoplayer2.source.dash.b bVar3 = new com.google.android.exoplayer2.source.dash.b(this.f13769a0 + intValue, this.T, this.f13777z, intValue, this.f13773v, this.N, null, this.f13775x, u(bVar), this.f13776y, w10, this.X, this.K, bVar2, this.f13774w, this.J, z());
        this.G.put(bVar3.f13802d, bVar3);
        return bVar3;
    }

    @Override // qd.r
    public void o() {
        this.K.a();
    }

    private DashMediaSource(MediaItem mediaItem, ud.c cVar, DataSource.Factory factory, j.a aVar, a.InterfaceC0167a interfaceC0167a, qd.h hVar, le.g gVar, v vVar, com.google.android.exoplayer2.upstream.h hVar2, long j10, long j11) {
        this.f13770s = mediaItem;
        this.Q = mediaItem.f12746o;
        this.R = ((MediaItem.h) ne.a.e(mediaItem.f12744e)).f12834d;
        this.S = mediaItem.f12744e.f12834d;
        this.T = cVar;
        this.f13772u = factory;
        this.D = aVar;
        this.f13773v = interfaceC0167a;
        this.f13775x = vVar;
        this.f13776y = hVar2;
        this.A = j10;
        this.B = j11;
        this.f13774w = hVar;
        this.f13777z = new td.b();
        boolean z10 = cVar != null;
        this.f13771t = z10;
        this.C = w(null);
        this.F = new Object();
        this.G = new SparseArray();
        this.J = new c(this, null);
        this.Z = -9223372036854775807L;
        this.X = -9223372036854775807L;
        if (z10) {
            ne.a.g(true ^ cVar.f50151d);
            this.E = null;
            this.H = null;
            this.I = null;
            this.K = new u.a();
            return;
        }
        this.E = new e(this, null);
        this.K = new f();
        this.H = new Runnable() { // from class: td.d
            @Override // java.lang.Runnable
            public final void run() {
                DashMediaSource.this.g0();
            }
        };
        this.I = new Runnable() { // from class: td.e
            @Override // java.lang.Runnable
            public final void run() {
                DashMediaSource.this.a0(false);
            }
        };
    }
}
