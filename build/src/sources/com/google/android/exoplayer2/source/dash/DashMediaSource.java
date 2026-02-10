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
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import com.google.android.exoplayer2.upstream.k;
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
import mc.l0;
import me.c0;
import me.u;
import oe.m0;
import oe.w0;
import rd.p;
import rd.r;
import rd.y;
import sc.l;
import sc.v;
import sc.x;
import vd.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DashMediaSource extends rd.a {
    private final long A;
    private final long B;
    private final y.a C;
    private final k.a D;
    private final e E;
    private final Object F;
    private final SparseArray G;
    private final Runnable H;
    private final Runnable I;
    private final e.b J;
    private final u K;
    private DataSource L;
    private j M;
    private c0 N;
    private IOException O;
    private Handler P;
    private MediaItem.g Q;
    private Uri R;
    private Uri S;
    private vd.c T;
    private boolean U;
    private long V;
    private long W;
    private long X;
    private int Y;
    private long Z;

    /* renamed from: a0  reason: collision with root package name */
    private int f12852a0;

    /* renamed from: s  reason: collision with root package name */
    private final MediaItem f12853s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f12854t;

    /* renamed from: u  reason: collision with root package name */
    private final DataSource.Factory f12855u;

    /* renamed from: v  reason: collision with root package name */
    private final a.InterfaceC0189a f12856v;

    /* renamed from: w  reason: collision with root package name */
    private final rd.h f12857w;

    /* renamed from: x  reason: collision with root package name */
    private final v f12858x;

    /* renamed from: y  reason: collision with root package name */
    private final i f12859y;

    /* renamed from: z  reason: collision with root package name */
    private final ud.b f12860z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final a.InterfaceC0189a f12861a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f12862b;

        /* renamed from: c  reason: collision with root package name */
        private x f12863c;

        /* renamed from: d  reason: collision with root package name */
        private rd.h f12864d;

        /* renamed from: e  reason: collision with root package name */
        private i f12865e;

        /* renamed from: f  reason: collision with root package name */
        private long f12866f;

        /* renamed from: g  reason: collision with root package name */
        private long f12867g;

        /* renamed from: h  reason: collision with root package name */
        private k.a f12868h;

        public Factory(DataSource.Factory factory) {
            this(new c.a(factory), factory);
        }

        public DashMediaSource a(MediaItem mediaItem) {
            qd.b bVar;
            oe.a.e(mediaItem.f11765e);
            k.a aVar = this.f12868h;
            if (aVar == null) {
                aVar = new vd.d();
            }
            List list = mediaItem.f11765e.f11859p;
            if (!list.isEmpty()) {
                bVar = new qd.b(aVar, list);
            } else {
                bVar = aVar;
            }
            return new DashMediaSource(mediaItem, null, this.f12862b, bVar, this.f12861a, this.f12864d, null, this.f12863c.a(mediaItem), this.f12865e, this.f12866f, this.f12867g, null);
        }

        public Factory b(i iVar) {
            this.f12865e = (i) oe.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(a.InterfaceC0189a interfaceC0189a, DataSource.Factory factory) {
            this.f12861a = (a.InterfaceC0189a) oe.a.e(interfaceC0189a);
            this.f12862b = factory;
            this.f12863c = new l();
            this.f12865e = new com.google.android.exoplayer2.upstream.g();
            this.f12866f = 30000L;
            this.f12867g = 5000000L;
            this.f12864d = new rd.i();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements m0.b {
        a() {
        }

        @Override // oe.m0.b
        public void a(IOException iOException) {
            DashMediaSource.this.Y(iOException);
        }

        @Override // oe.m0.b
        public void b() {
            DashMediaSource.this.Z(m0.h());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends Timeline {

        /* renamed from: q  reason: collision with root package name */
        private final long f12870q;

        /* renamed from: r  reason: collision with root package name */
        private final long f12871r;

        /* renamed from: s  reason: collision with root package name */
        private final long f12872s;

        /* renamed from: t  reason: collision with root package name */
        private final int f12873t;

        /* renamed from: u  reason: collision with root package name */
        private final long f12874u;

        /* renamed from: v  reason: collision with root package name */
        private final long f12875v;

        /* renamed from: w  reason: collision with root package name */
        private final long f12876w;

        /* renamed from: x  reason: collision with root package name */
        private final vd.c f12877x;

        /* renamed from: y  reason: collision with root package name */
        private final MediaItem f12878y;

        /* renamed from: z  reason: collision with root package name */
        private final MediaItem.g f12879z;

        public b(long j10, long j11, long j12, int i10, long j13, long j14, long j15, vd.c cVar, MediaItem mediaItem, MediaItem.g gVar) {
            boolean z10;
            boolean z11 = cVar.f52228d;
            if (gVar != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z11 == z10);
            this.f12870q = j10;
            this.f12871r = j11;
            this.f12872s = j12;
            this.f12873t = i10;
            this.f12874u = j13;
            this.f12875v = j14;
            this.f12876w = j15;
            this.f12877x = cVar;
            this.f12878y = mediaItem;
            this.f12879z = gVar;
        }

        private long w(long j10) {
            ud.f l10;
            long j11 = this.f12876w;
            if (!x(this.f12877x)) {
                return j11;
            }
            if (j10 > 0) {
                j11 += j10;
                if (j11 > this.f12875v) {
                    return -9223372036854775807L;
                }
            }
            long j12 = this.f12874u + j11;
            long g10 = this.f12877x.g(0);
            int i10 = 0;
            while (i10 < this.f12877x.e() - 1 && j12 >= g10) {
                j12 -= g10;
                i10++;
                g10 = this.f12877x.g(i10);
            }
            vd.g d10 = this.f12877x.d(i10);
            int a10 = d10.a(2);
            if (a10 != -1 && (l10 = ((vd.j) ((vd.a) d10.f52262c.get(a10)).f52217c.get(0)).l()) != null && l10.g(g10) != 0) {
                return (j11 + l10.b(l10.f(j12, g10))) - j12;
            }
            return j11;
        }

        private static boolean x(vd.c cVar) {
            if (cVar.f52228d && cVar.f52229e != -9223372036854775807L && cVar.f52226b == -9223372036854775807L) {
                return true;
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int f(Object obj) {
            int intValue;
            if (!(obj instanceof Integer) || (intValue = ((Integer) obj).intValue() - this.f12873t) < 0 || intValue >= m()) {
                return -1;
            }
            return intValue;
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            String str;
            oe.a.c(i10, 0, m());
            Integer num = null;
            if (z10) {
                str = this.f12877x.d(i10).f52260a;
            } else {
                str = null;
            }
            if (z10) {
                num = Integer.valueOf(this.f12873t + i10);
            }
            return bVar.v(str, num, 0, this.f12877x.g(i10), w0.K0(this.f12877x.d(i10).f52261b - this.f12877x.d(0).f52261b) - this.f12874u);
        }

        @Override // com.google.android.exoplayer2.Timeline
        public int m() {
            return this.f12877x.e();
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Object q(int i10) {
            oe.a.c(i10, 0, m());
            return Integer.valueOf(this.f12873t + i10);
        }

        @Override // com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            oe.a.c(i10, 0, 1);
            long w10 = w(j10);
            Object obj = Timeline.d.C;
            MediaItem mediaItem = this.f12878y;
            vd.c cVar = this.f12877x;
            return dVar.h(obj, mediaItem, cVar, this.f12870q, this.f12871r, this.f12872s, true, x(cVar), this.f12879z, w10, this.f12875v, 0, m() - 1, this.f12874u);
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
    public static final class d implements k.a {

        /* renamed from: a  reason: collision with root package name */
        private static final Pattern f12881a = Pattern.compile("(.+?)(Z|((\\+|-|−)(\\d\\d)(:?(\\d\\d))?))");

        d() {
        }

        @Override // com.google.android.exoplayer2.upstream.k.a
        /* renamed from: b */
        public Long a(Uri uri, InputStream inputStream) {
            long j10;
            long parseLong;
            String readLine = new BufferedReader(new InputStreamReader(inputStream, ni.d.f38904c)).readLine();
            try {
                Matcher matcher = f12881a.matcher(readLine);
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
    public final class e implements j.b {
        private e() {
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: a */
        public void i(k kVar, long j10, long j11, boolean z10) {
            DashMediaSource.this.T(kVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: b */
        public void k(k kVar, long j10, long j11) {
            DashMediaSource.this.U(kVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: c */
        public j.c n(k kVar, long j10, long j11, IOException iOException, int i10) {
            return DashMediaSource.this.V(kVar, j10, j11, iOException, i10);
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

        @Override // me.u
        public void a() {
            DashMediaSource.this.M.a();
            b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class g implements j.b {
        private g() {
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: a */
        public void i(k kVar, long j10, long j11, boolean z10) {
            DashMediaSource.this.T(kVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: b */
        public void k(k kVar, long j10, long j11) {
            DashMediaSource.this.W(kVar, j10, j11);
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        /* renamed from: c */
        public j.c n(k kVar, long j10, long j11, IOException iOException, int i10) {
            return DashMediaSource.this.X(kVar, j10, j11, iOException);
        }

        /* synthetic */ g(DashMediaSource dashMediaSource, a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h implements k.a {
        private h() {
        }

        @Override // com.google.android.exoplayer2.upstream.k.a
        /* renamed from: b */
        public Long a(Uri uri, InputStream inputStream) {
            return Long.valueOf(w0.R0(new BufferedReader(new InputStreamReader(inputStream)).readLine()));
        }

        /* synthetic */ h(a aVar) {
            this();
        }
    }

    static {
        mc.u.a("goog.exo.dash");
    }

    /* synthetic */ DashMediaSource(MediaItem mediaItem, vd.c cVar, DataSource.Factory factory, k.a aVar, a.InterfaceC0189a interfaceC0189a, rd.h hVar, me.g gVar, v vVar, i iVar, long j10, long j11, a aVar2) {
        this(mediaItem, cVar, factory, aVar, interfaceC0189a, hVar, gVar, vVar, iVar, j10, j11);
    }

    private static long K(vd.g gVar, long j10, long j11) {
        long K0 = w0.K0(gVar.f52261b);
        boolean O = O(gVar);
        long j12 = LongCompanionObject.MAX_VALUE;
        for (int i10 = 0; i10 < gVar.f52262c.size(); i10++) {
            vd.a aVar = (vd.a) gVar.f52262c.get(i10);
            List list = aVar.f52217c;
            int i11 = aVar.f52216b;
            boolean z10 = true;
            z10 = (i11 == 1 || i11 == 2) ? false : false;
            if ((!O || !z10) && !list.isEmpty()) {
                ud.f l10 = ((vd.j) list.get(0)).l();
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

    private static long L(vd.g gVar, long j10, long j11) {
        long K0 = w0.K0(gVar.f52261b);
        boolean O = O(gVar);
        long j12 = K0;
        for (int i10 = 0; i10 < gVar.f52262c.size(); i10++) {
            vd.a aVar = (vd.a) gVar.f52262c.get(i10);
            List list = aVar.f52217c;
            int i11 = aVar.f52216b;
            boolean z10 = true;
            z10 = (i11 == 1 || i11 == 2) ? false : false;
            if ((!O || !z10) && !list.isEmpty()) {
                ud.f l10 = ((vd.j) list.get(0)).l();
                if (l10 == null || l10.j(j10, j11) == 0) {
                    return K0;
                }
                j12 = Math.max(j12, l10.b(l10.c(j10, j11)) + K0);
            }
        }
        return j12;
    }

    private static long M(vd.c cVar, long j10) {
        ud.f l10;
        int e10 = cVar.e() - 1;
        vd.g d10 = cVar.d(e10);
        long K0 = w0.K0(d10.f52261b);
        long g10 = cVar.g(e10);
        long K02 = w0.K0(j10);
        long K03 = w0.K0(cVar.f52225a);
        long K04 = w0.K0(5000L);
        for (int i10 = 0; i10 < d10.f52262c.size(); i10++) {
            List list = ((vd.a) d10.f52262c.get(i10)).f52217c;
            if (!list.isEmpty() && (l10 = ((vd.j) list.get(0)).l()) != null) {
                long d11 = ((K03 + K0) + l10.d(g10, K02)) - K02;
                if (d11 < K04 - 100000 || (d11 > K04 && d11 < K04 + 100000)) {
                    K04 = d11;
                }
            }
        }
        return pi.c.a(K04, 1000L, RoundingMode.CEILING);
    }

    private long N() {
        return Math.min((this.Y - 1) * 1000, 5000);
    }

    private static boolean O(vd.g gVar) {
        for (int i10 = 0; i10 < gVar.f52262c.size(); i10++) {
            int i11 = ((vd.a) gVar.f52262c.get(i10)).f52216b;
            if (i11 == 1 || i11 == 2) {
                return true;
            }
        }
        return false;
    }

    private static boolean P(vd.g gVar) {
        for (int i10 = 0; i10 < gVar.f52262c.size(); i10++) {
            ud.f l10 = ((vd.j) ((vd.a) gVar.f52262c.get(i10)).f52217c.get(0)).l();
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
        oe.y.d("DashMediaSource", "Failed to resolve time offset.", iOException);
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
            if (keyAt >= this.f12852a0) {
                ((com.google.android.exoplayer2.source.dash.b) this.G.valueAt(i10)).M(this.T, keyAt - this.f12852a0);
            }
        }
        vd.g d10 = this.T.d(0);
        int e10 = this.T.e() - 1;
        vd.g d11 = this.T.d(e10);
        long g10 = this.T.g(e10);
        long K0 = w0.K0(w0.f0(this.X));
        long L = L(d10, this.T.g(0), K0);
        long K = K(d11, g10, K0);
        if (this.T.f52228d && !P(d11)) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            long j13 = this.T.f52230f;
            if (j13 != -9223372036854775807L) {
                L = Math.max(L, K - w0.K0(j13));
            }
        }
        long j14 = K - L;
        vd.c cVar = this.T;
        if (cVar.f52228d) {
            if (cVar.f52225a != -9223372036854775807L) {
                z12 = true;
            }
            oe.a.g(z12);
            long K02 = (K0 - w0.K0(this.T.f52225a)) - L;
            h0(K02, j14);
            long p12 = this.T.f52225a + w0.p1(L);
            long K03 = K02 - w0.K0(this.Q.f11839d);
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
        long K04 = L - w0.K0(d10.f52261b);
        vd.c cVar2 = this.T;
        long j15 = cVar2.f52225a;
        long j16 = this.X;
        int i11 = this.f12852a0;
        MediaItem mediaItem = this.f12853s;
        if (cVar2.f52228d) {
            gVar = this.Q;
        } else {
            gVar = null;
        }
        C(new b(j15, j11, j16, i11, K04, j14, j12, cVar2, mediaItem, gVar));
        if (!this.f12854t) {
            this.P.removeCallbacks(this.I);
            if (z11) {
                this.P.postDelayed(this.I, M(this.T, w0.f0(this.X)));
            }
            if (this.U) {
                g0();
            } else if (z10) {
                vd.c cVar3 = this.T;
                if (cVar3.f52228d) {
                    long j17 = cVar3.f52229e;
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
        String str = oVar.f52315a;
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
            Z(w0.R0(oVar.f52316b) - this.W);
        } catch (l0 e10) {
            Y(e10);
        }
    }

    private void d0(o oVar, k.a aVar) {
        f0(new k(this.L, Uri.parse(oVar.f52316b), 5, aVar), new g(this, null), 1);
    }

    private void e0(long j10) {
        this.P.postDelayed(this.H, j10);
    }

    private void f0(k kVar, j.b bVar, int i10) {
        this.C.s(new LoadEventInfo(kVar.f13586a, kVar.f13587b, this.M.n(kVar, bVar, i10)), kVar.f13588c);
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
        f0(new k(this.L, uri, 4, this.D), this.E, this.f12859y.b(4));
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

    @Override // rd.a
    protected void B(c0 c0Var) {
        this.N = c0Var;
        this.f12858x.e(Looper.myLooper(), z());
        this.f12858x.d();
        if (this.f12854t) {
            a0(false);
            return;
        }
        this.L = this.f12855u.createDataSource();
        this.M = new j("DashMediaSource");
        this.P = w0.w();
        g0();
    }

    @Override // rd.a
    protected void D() {
        vd.c cVar;
        this.U = false;
        this.L = null;
        j jVar = this.M;
        if (jVar != null) {
            jVar.l();
            this.M = null;
        }
        this.V = 0L;
        this.W = 0L;
        if (this.f12854t) {
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
        this.f12860z.i();
        this.f12858x.release();
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

    void T(k kVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f12859y.d(kVar.f13586a);
        this.C.j(loadEventInfo, kVar.f13588c);
    }

    void U(k kVar, long j10, long j11) {
        int e10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f12859y.d(kVar.f13586a);
        this.C.m(loadEventInfo, kVar.f13588c);
        vd.c cVar = (vd.c) kVar.e();
        vd.c cVar2 = this.T;
        if (cVar2 == null) {
            e10 = 0;
        } else {
            e10 = cVar2.e();
        }
        long j12 = cVar.d(0).f52261b;
        int i10 = 0;
        while (i10 < e10 && this.T.d(i10).f52261b < j12) {
            i10++;
        }
        if (cVar.f52228d) {
            if (e10 - i10 > cVar.e()) {
                oe.y.i("DashMediaSource", "Loaded out of sync manifest");
            } else {
                long j13 = this.Z;
                if (j13 != -9223372036854775807L && cVar.f52232h * 1000 <= j13) {
                    oe.y.i("DashMediaSource", "Loaded stale dynamic manifest: " + cVar.f52232h + ", " + this.Z);
                } else {
                    this.Y = 0;
                }
            }
            int i11 = this.Y;
            this.Y = i11 + 1;
            if (i11 < this.f12859y.b(kVar.f13588c)) {
                e0(N());
                return;
            } else {
                this.O = new ud.c();
                return;
            }
        }
        this.T = cVar;
        this.U = cVar.f52228d & this.U;
        this.V = j10 - j11;
        this.W = j10;
        synchronized (this.F) {
            try {
                if (kVar.f13587b.f13405a == this.R) {
                    Uri uri = this.T.f52235k;
                    if (uri == null) {
                        uri = kVar.f();
                    }
                    this.R = uri;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (e10 == 0) {
            vd.c cVar3 = this.T;
            if (cVar3.f52228d) {
                o oVar = cVar3.f52233i;
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
        this.f12852a0 += i10;
        a0(true);
    }

    j.c V(k kVar, long j10, long j11, IOException iOException, int i10) {
        j.c h10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.f12859y.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f13588c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            h10 = j.f13569g;
        } else {
            h10 = j.h(false, a10);
        }
        boolean c10 = h10.c();
        this.C.q(loadEventInfo, kVar.f13588c, iOException, !c10);
        if (!c10) {
            this.f12859y.d(kVar.f13586a);
        }
        return h10;
    }

    void W(k kVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.f12859y.d(kVar.f13586a);
        this.C.m(loadEventInfo, kVar.f13588c);
        Z(((Long) kVar.e()).longValue() - j10);
    }

    j.c X(k kVar, long j10, long j11, IOException iOException) {
        this.C.q(new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b()), kVar.f13588c, iOException, true);
        this.f12859y.d(kVar.f13586a);
        Y(iOException);
        return j.f13568f;
    }

    @Override // rd.r
    public void a(p pVar) {
        com.google.android.exoplayer2.source.dash.b bVar = (com.google.android.exoplayer2.source.dash.b) pVar;
        bVar.I();
        this.G.remove(bVar.f12885d);
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f12853s;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        int intValue = ((Integer) bVar.f47983a).intValue() - this.f12852a0;
        y.a w10 = w(bVar);
        com.google.android.exoplayer2.source.dash.b bVar3 = new com.google.android.exoplayer2.source.dash.b(this.f12852a0 + intValue, this.T, this.f12860z, intValue, this.f12856v, this.N, null, this.f12858x, u(bVar), this.f12859y, w10, this.X, this.K, bVar2, this.f12857w, this.J, z());
        this.G.put(bVar3.f12885d, bVar3);
        return bVar3;
    }

    @Override // rd.r
    public void q() {
        this.K.a();
    }

    private DashMediaSource(MediaItem mediaItem, vd.c cVar, DataSource.Factory factory, k.a aVar, a.InterfaceC0189a interfaceC0189a, rd.h hVar, me.g gVar, v vVar, i iVar, long j10, long j11) {
        this.f12853s = mediaItem;
        this.Q = mediaItem.f11767o;
        this.R = ((MediaItem.h) oe.a.e(mediaItem.f11765e)).f11855d;
        this.S = mediaItem.f11765e.f11855d;
        this.T = cVar;
        this.f12855u = factory;
        this.D = aVar;
        this.f12856v = interfaceC0189a;
        this.f12858x = vVar;
        this.f12859y = iVar;
        this.A = j10;
        this.B = j11;
        this.f12857w = hVar;
        this.f12860z = new ud.b();
        boolean z10 = cVar != null;
        this.f12854t = z10;
        this.C = w(null);
        this.F = new Object();
        this.G = new SparseArray();
        this.J = new c(this, null);
        this.Z = -9223372036854775807L;
        this.X = -9223372036854775807L;
        if (z10) {
            oe.a.g(true ^ cVar.f52228d);
            this.E = null;
            this.H = null;
            this.I = null;
            this.K = new u.a();
            return;
        }
        this.E = new e(this, null);
        this.K = new f();
        this.H = new Runnable() { // from class: ud.d
            @Override // java.lang.Runnable
            public final void run() {
                DashMediaSource.this.g0();
            }
        };
        this.I = new Runnable() { // from class: ud.e
            @Override // java.lang.Runnable
            public final void run() {
                DashMediaSource.this.a0(false);
            }
        };
    }
}
