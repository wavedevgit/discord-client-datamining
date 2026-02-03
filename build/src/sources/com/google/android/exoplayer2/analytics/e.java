package com.google.android.exoplayer2.analytics;

import android.os.SystemClock;
import android.util.Pair;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.PlaybackStats;
import com.google.android.exoplayer2.analytics.d;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.video.VideoSize;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import ne.w0;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements AnalyticsListener, d.a {

    /* renamed from: a  reason: collision with root package name */
    private final d f11747a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f11748b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f11749c;

    /* renamed from: d  reason: collision with root package name */
    private final a f11750d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f11751e;

    /* renamed from: f  reason: collision with root package name */
    private final Timeline.b f11752f;

    /* renamed from: g  reason: collision with root package name */
    private PlaybackStats f11753g;

    /* renamed from: h  reason: collision with root package name */
    private String f11754h;

    /* renamed from: i  reason: collision with root package name */
    private long f11755i;

    /* renamed from: j  reason: collision with root package name */
    private int f11756j;

    /* renamed from: k  reason: collision with root package name */
    private int f11757k;

    /* renamed from: l  reason: collision with root package name */
    private Exception f11758l;

    /* renamed from: m  reason: collision with root package name */
    private long f11759m;

    /* renamed from: n  reason: collision with root package name */
    private long f11760n;

    /* renamed from: o  reason: collision with root package name */
    private Format f11761o;

    /* renamed from: p  reason: collision with root package name */
    private Format f11762p;

    /* renamed from: q  reason: collision with root package name */
    private VideoSize f11763q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(AnalyticsListener.EventTime eventTime, PlaybackStats playbackStats);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {
        private long A;
        private long B;
        private long C;
        private long D;
        private long E;
        private int F;
        private int G;
        private int H;
        private long I;
        private boolean J;
        private boolean K;
        private boolean L;
        private boolean M;
        private boolean N;
        private long O;
        private Format P;
        private Format Q;
        private long R;
        private long S;
        private float T;

        /* renamed from: a  reason: collision with root package name */
        private final boolean f11764a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f11765b = new long[16];

        /* renamed from: c  reason: collision with root package name */
        private final List f11766c;

        /* renamed from: d  reason: collision with root package name */
        private final List f11767d;

        /* renamed from: e  reason: collision with root package name */
        private final List f11768e;

        /* renamed from: f  reason: collision with root package name */
        private final List f11769f;

        /* renamed from: g  reason: collision with root package name */
        private final List f11770g;

        /* renamed from: h  reason: collision with root package name */
        private final List f11771h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f11772i;

        /* renamed from: j  reason: collision with root package name */
        private long f11773j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f11774k;

        /* renamed from: l  reason: collision with root package name */
        private boolean f11775l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f11776m;

        /* renamed from: n  reason: collision with root package name */
        private int f11777n;

        /* renamed from: o  reason: collision with root package name */
        private int f11778o;

        /* renamed from: p  reason: collision with root package name */
        private int f11779p;

        /* renamed from: q  reason: collision with root package name */
        private int f11780q;

        /* renamed from: r  reason: collision with root package name */
        private long f11781r;

        /* renamed from: s  reason: collision with root package name */
        private int f11782s;

        /* renamed from: t  reason: collision with root package name */
        private long f11783t;

        /* renamed from: u  reason: collision with root package name */
        private long f11784u;

        /* renamed from: v  reason: collision with root package name */
        private long f11785v;

        /* renamed from: w  reason: collision with root package name */
        private long f11786w;

        /* renamed from: x  reason: collision with root package name */
        private long f11787x;

        /* renamed from: y  reason: collision with root package name */
        private long f11788y;

        /* renamed from: z  reason: collision with root package name */
        private long f11789z;

        public b(boolean z10, AnalyticsListener.EventTime eventTime) {
            List list;
            List list2;
            List list3;
            List list4;
            List list5;
            List list6;
            this.f11764a = z10;
            if (z10) {
                list = new ArrayList();
            } else {
                list = Collections.EMPTY_LIST;
            }
            this.f11766c = list;
            if (z10) {
                list2 = new ArrayList();
            } else {
                list2 = Collections.EMPTY_LIST;
            }
            this.f11767d = list2;
            if (z10) {
                list3 = new ArrayList();
            } else {
                list3 = Collections.EMPTY_LIST;
            }
            this.f11768e = list3;
            if (z10) {
                list4 = new ArrayList();
            } else {
                list4 = Collections.EMPTY_LIST;
            }
            this.f11769f = list4;
            if (z10) {
                list5 = new ArrayList();
            } else {
                list5 = Collections.EMPTY_LIST;
            }
            this.f11770g = list5;
            if (z10) {
                list6 = new ArrayList();
            } else {
                list6 = Collections.EMPTY_LIST;
            }
            this.f11771h = list6;
            boolean z11 = false;
            this.H = 0;
            this.I = eventTime.f11640a;
            this.f11773j = -9223372036854775807L;
            this.f11781r = -9223372036854775807L;
            r.b bVar = eventTime.f11643d;
            if (bVar != null && bVar.b()) {
                z11 = true;
            }
            this.f11772i = z11;
            this.f11784u = -1L;
            this.f11783t = -1L;
            this.f11782s = -1;
            this.T = 1.0f;
        }

        private long[] b(long j10) {
            List list = this.f11767d;
            long[] jArr = (long[]) list.get(list.size() - 1);
            return new long[]{j10, jArr[1] + (((float) (j10 - jArr[0])) * this.T)};
        }

        private static boolean c(int i10, int i11) {
            return ((i10 != 1 && i10 != 2 && i10 != 14) || i11 == 1 || i11 == 2 || i11 == 14 || i11 == 3 || i11 == 4 || i11 == 9 || i11 == 11) ? false : true;
        }

        private static boolean d(int i10) {
            return i10 == 4 || i10 == 7;
        }

        private static boolean e(int i10) {
            return i10 == 3 || i10 == 4 || i10 == 9;
        }

        private static boolean f(int i10) {
            return i10 == 6 || i10 == 7 || i10 == 10;
        }

        private void g(long j10) {
            Format format;
            int i10;
            if (this.H == 3 && (format = this.Q) != null && (i10 = format.f11299s) != -1) {
                long j11 = ((float) (j10 - this.S)) * this.T;
                this.f11789z += j11;
                this.A += j11 * i10;
            }
            this.S = j10;
        }

        private void h(long j10) {
            Format format;
            if (this.H == 3 && (format = this.P) != null) {
                long j11 = ((float) (j10 - this.R)) * this.T;
                int i10 = format.C;
                if (i10 != -1) {
                    this.f11785v += j11;
                    this.f11786w += i10 * j11;
                }
                int i11 = format.f11299s;
                if (i11 != -1) {
                    this.f11787x += j11;
                    this.f11788y += j11 * i11;
                }
            }
            this.R = j10;
        }

        private void i(AnalyticsListener.EventTime eventTime, Format format) {
            int i10;
            if (!w0.c(this.Q, format)) {
                g(eventTime.f11640a);
                if (format != null && this.f11784u == -1 && (i10 = format.f11299s) != -1) {
                    this.f11784u = i10;
                }
                this.Q = format;
                if (this.f11764a) {
                    this.f11769f.add(new PlaybackStats.b(eventTime, format));
                }
            }
        }

        private void j(long j10) {
            if (f(this.H)) {
                long j11 = j10 - this.O;
                long j12 = this.f11781r;
                if (j12 == -9223372036854775807L || j11 > j12) {
                    this.f11781r = j11;
                }
            }
        }

        private void k(long j10, long j11) {
            if (this.f11764a) {
                if (this.H != 3) {
                    if (j11 != -9223372036854775807L) {
                        if (!this.f11767d.isEmpty()) {
                            List list = this.f11767d;
                            long j12 = ((long[]) list.get(list.size() - 1))[1];
                            if (j12 != j11) {
                                this.f11767d.add(new long[]{j10, j12});
                            }
                        }
                    } else {
                        return;
                    }
                }
                if (j11 != -9223372036854775807L) {
                    this.f11767d.add(new long[]{j10, j11});
                } else if (!this.f11767d.isEmpty()) {
                    this.f11767d.add(b(j10));
                }
            }
        }

        private void l(AnalyticsListener.EventTime eventTime, Format format) {
            int i10;
            int i11;
            if (!w0.c(this.P, format)) {
                h(eventTime.f11640a);
                if (format != null) {
                    if (this.f11782s == -1 && (i11 = format.C) != -1) {
                        this.f11782s = i11;
                    }
                    if (this.f11783t == -1 && (i10 = format.f11299s) != -1) {
                        this.f11783t = i10;
                    }
                }
                this.P = format;
                if (this.f11764a) {
                    this.f11768e.add(new PlaybackStats.b(eventTime, format));
                }
            }
        }

        private int q(Player player) {
            int O = player.O();
            if (this.J && this.K) {
                return 5;
            }
            if (this.M) {
                return 13;
            }
            if (this.K) {
                if (this.L) {
                    return 14;
                }
                if (O == 4) {
                    return 11;
                }
                if (O == 2) {
                    int i10 = this.H;
                    if (i10 == 0 || i10 == 1 || i10 == 2 || i10 == 14) {
                        return 2;
                    }
                    if (!player.B()) {
                        return 7;
                    }
                    if (player.u() != 0) {
                        return 10;
                    }
                    return 6;
                } else if (O == 3) {
                    if (!player.B()) {
                        return 4;
                    }
                    if (player.u() == 0) {
                        return 3;
                    }
                    return 9;
                } else if (O == 1 && this.H != 0) {
                    return 12;
                } else {
                    return this.H;
                }
            }
            return this.N ? 1 : 0;
        }

        private void r(int i10, AnalyticsListener.EventTime eventTime) {
            boolean z10;
            boolean z11 = false;
            if (eventTime.f11640a >= this.I) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            long j10 = eventTime.f11640a;
            long[] jArr = this.f11765b;
            int i11 = this.H;
            jArr[i11] = jArr[i11] + (j10 - this.I);
            if (this.f11773j == -9223372036854775807L) {
                this.f11773j = j10;
            }
            this.f11776m |= c(i11, i10);
            this.f11774k |= e(i10);
            boolean z12 = this.f11775l;
            if (i10 == 11) {
                z11 = true;
            }
            this.f11775l = z12 | z11;
            if (!d(this.H) && d(i10)) {
                this.f11777n++;
            }
            if (i10 == 5) {
                this.f11779p++;
            }
            if (!f(this.H) && f(i10)) {
                this.f11780q++;
                this.O = eventTime.f11640a;
            }
            if (f(this.H) && this.H != 7 && i10 == 7) {
                this.f11778o++;
            }
            j(eventTime.f11640a);
            this.H = i10;
            this.I = eventTime.f11640a;
            if (this.f11764a) {
                this.f11766c.add(new PlaybackStats.c(eventTime, i10));
            }
        }

        public PlaybackStats a(boolean z10) {
            long[] jArr;
            ArrayList arrayList;
            int i10;
            long j10;
            int i11;
            List arrayList2;
            List arrayList3;
            List arrayList4;
            int i12;
            int i13;
            int i14;
            int i15;
            long[] jArr2 = this.f11765b;
            List list = this.f11767d;
            if (!z10) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                long[] copyOf = Arrays.copyOf(this.f11765b, 16);
                long max = Math.max(0L, elapsedRealtime - this.I);
                int i16 = this.H;
                copyOf[i16] = copyOf[i16] + max;
                j(elapsedRealtime);
                h(elapsedRealtime);
                g(elapsedRealtime);
                ArrayList arrayList5 = new ArrayList(this.f11767d);
                if (this.f11764a && this.H == 3) {
                    arrayList5.add(b(elapsedRealtime));
                }
                jArr = copyOf;
                arrayList = arrayList5;
            } else {
                jArr = jArr2;
                arrayList = list;
            }
            if (!this.f11776m && this.f11774k) {
                i10 = 0;
            } else {
                i10 = 1;
            }
            if (i10 != 0) {
                j10 = -9223372036854775807L;
            } else {
                j10 = jArr[2];
            }
            long j11 = j10;
            if (jArr[1] > 0) {
                i11 = 1;
            } else {
                i11 = 0;
            }
            if (z10) {
                arrayList2 = this.f11768e;
            } else {
                arrayList2 = new ArrayList(this.f11768e);
            }
            List list2 = arrayList2;
            if (z10) {
                arrayList3 = this.f11769f;
            } else {
                arrayList3 = new ArrayList(this.f11769f);
            }
            List list3 = arrayList3;
            if (z10) {
                arrayList4 = this.f11766c;
            } else {
                arrayList4 = new ArrayList(this.f11766c);
            }
            List list4 = arrayList4;
            long j12 = this.f11773j;
            boolean z11 = this.K;
            int i17 = !this.f11774k ? 1 : 0;
            boolean z12 = this.f11775l;
            int i18 = i10 ^ 1;
            int i19 = this.f11777n;
            int i20 = this.f11778o;
            int i21 = this.f11779p;
            int i22 = this.f11780q;
            long j13 = this.f11781r;
            boolean z13 = this.f11772i;
            long j14 = this.f11785v;
            long j15 = this.f11786w;
            long j16 = this.f11787x;
            long j17 = this.f11788y;
            long j18 = this.f11789z;
            long j19 = this.A;
            int i23 = this.f11782s;
            if (i23 == -1) {
                i12 = 0;
            } else {
                i12 = 1;
            }
            long j20 = this.f11783t;
            if (j20 == -1) {
                i13 = 0;
            } else {
                i13 = 1;
            }
            long j21 = this.f11784u;
            if (j21 == -1) {
                i14 = 0;
            } else {
                i14 = 1;
            }
            long j22 = this.B;
            long j23 = this.C;
            long j24 = this.D;
            long j25 = this.E;
            int i24 = this.F;
            if (i24 > 0) {
                i15 = 1;
            } else {
                i15 = 0;
            }
            return new PlaybackStats(1, jArr, list4, arrayList, j12, z11 ? 1 : 0, i17, z12 ? 1 : 0, i11, j11, i18, i19, i20, i21, i22, j13, z13 ? 1 : 0, list2, list3, j14, j15, j16, j17, j18, j19, i12, i13, i23, j20, i14, j21, j22, j23, j24, j25, i15, i24, this.G, this.f11770g, this.f11771h);
        }

        public void m(Player player, AnalyticsListener.EventTime eventTime, boolean z10, long j10, boolean z11, int i10, boolean z12, boolean z13, PlaybackException playbackException, Exception exc, long j11, long j12, Format format, Format format2, VideoSize videoSize) {
            if (j10 != -9223372036854775807L) {
                k(eventTime.f11640a, j10);
                this.J = true;
            }
            if (player.O() != 2) {
                this.J = false;
            }
            int O = player.O();
            if (O == 1 || O == 4 || z11) {
                this.L = false;
            }
            if (playbackException != null) {
                this.M = true;
                this.F++;
                if (this.f11764a) {
                    this.f11770g.add(new PlaybackStats.a(eventTime, playbackException));
                }
            } else if (player.m() == null) {
                this.M = false;
            }
            if (this.K && !this.L) {
                Tracks o10 = player.o();
                if (!o10.d(2)) {
                    l(eventTime, null);
                }
                if (!o10.d(1)) {
                    i(eventTime, null);
                }
            }
            if (format != null) {
                l(eventTime, format);
            }
            if (format2 != null) {
                i(eventTime, format2);
            }
            Format format3 = this.P;
            if (format3 != null && format3.C == -1 && videoSize != null) {
                l(eventTime, format3.b().n0(videoSize.f13116d).S(videoSize.f13117e).G());
            }
            if (z13) {
                this.N = true;
            }
            if (z12) {
                this.E++;
            }
            this.D += i10;
            this.B += j11;
            this.C += j12;
            if (exc != null) {
                this.G++;
                if (this.f11764a) {
                    this.f11771h.add(new PlaybackStats.a(eventTime, exc));
                }
            }
            int q10 = q(player);
            float f10 = player.c().f11552d;
            if (this.H != q10 || this.T != f10) {
                k(eventTime.f11640a, z10 ? eventTime.f11644e : -9223372036854775807L);
                h(eventTime.f11640a);
                g(eventTime.f11640a);
            }
            this.T = f10;
            if (this.H != q10) {
                r(q10, eventTime);
            }
        }

        public void n(AnalyticsListener.EventTime eventTime, boolean z10, long j10) {
            int i10 = 11;
            if (this.H != 11 && !z10) {
                i10 = 15;
            }
            k(eventTime.f11640a, j10);
            h(eventTime.f11640a);
            g(eventTime.f11640a);
            r(i10, eventTime);
        }

        public void o() {
            this.K = true;
        }

        public void p() {
            this.L = true;
            this.J = false;
        }
    }

    public e(boolean z10, a aVar) {
        this.f11750d = aVar;
        this.f11751e = z10;
        com.google.android.exoplayer2.analytics.b bVar = new com.google.android.exoplayer2.analytics.b();
        this.f11747a = bVar;
        this.f11748b = new HashMap();
        this.f11749c = new HashMap();
        this.f11753g = PlaybackStats.O;
        this.f11752f = new Timeline.b();
        this.f11763q = VideoSize.f13110p;
        bVar.b(this);
    }

    private Pair e(AnalyticsListener.Events events, String str) {
        r.b bVar;
        AnalyticsListener.EventTime eventTime = null;
        boolean z10 = false;
        for (int i10 = 0; i10 < events.d(); i10++) {
            AnalyticsListener.EventTime c10 = events.c(events.b(i10));
            boolean e10 = this.f11747a.e(c10, str);
            if (eventTime == null || ((e10 && !z10) || (e10 == z10 && c10.f11640a > eventTime.f11640a))) {
                eventTime = c10;
                z10 = e10;
            }
        }
        ne.a.e(eventTime);
        if (!z10 && (bVar = eventTime.f11643d) != null && bVar.b()) {
            long i11 = eventTime.f11641b.l(eventTime.f11643d.f47705a, this.f11752f).i(eventTime.f11643d.f47706b);
            if (i11 == Long.MIN_VALUE) {
                i11 = this.f11752f.f11594o;
            }
            long j10 = eventTime.f11640a;
            Timeline timeline = eventTime.f11641b;
            int i12 = eventTime.f11642c;
            r.b bVar2 = eventTime.f11643d;
            AnalyticsListener.EventTime eventTime2 = new AnalyticsListener.EventTime(j10, timeline, i12, new r.b(bVar2.f47705a, bVar2.f47708d, bVar2.f47706b), w0.p1(i11 + this.f11752f.q()), eventTime.f11641b, eventTime.f11646g, eventTime.f11647h, eventTime.f11648i, eventTime.f11649j);
            z10 = this.f11747a.e(eventTime2, str);
            eventTime = eventTime2;
        }
        return Pair.create(eventTime, Boolean.valueOf(z10));
    }

    private boolean f(AnalyticsListener.Events events, String str, int i10) {
        if (events.a(i10) && this.f11747a.e(events.c(i10), str)) {
            return true;
        }
        return false;
    }

    private void g(AnalyticsListener.Events events) {
        for (int i10 = 0; i10 < events.d(); i10++) {
            int b10 = events.b(i10);
            AnalyticsListener.EventTime c10 = events.c(b10);
            if (b10 == 0) {
                this.f11747a.g(c10);
            } else if (b10 == 11) {
                this.f11747a.f(c10, this.f11756j);
            } else {
                this.f11747a.d(c10);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void a(AnalyticsListener.EventTime eventTime, String str, boolean z10) {
        long j10;
        b bVar = (b) ne.a.e((b) this.f11748b.remove(str));
        AnalyticsListener.EventTime eventTime2 = (AnalyticsListener.EventTime) ne.a.e((AnalyticsListener.EventTime) this.f11749c.remove(str));
        if (str.equals(this.f11754h)) {
            j10 = this.f11755i;
        } else {
            j10 = -9223372036854775807L;
        }
        bVar.n(eventTime, z10, j10);
        PlaybackStats a10 = bVar.a(true);
        this.f11753g = PlaybackStats.d(this.f11753g, a10);
        a aVar = this.f11750d;
        if (aVar != null) {
            aVar.a(eventTime2, a10);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void b(AnalyticsListener.EventTime eventTime, String str) {
        ((b) ne.a.e((b) this.f11748b.get(str))).o();
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void c(AnalyticsListener.EventTime eventTime, String str) {
        this.f11748b.put(str, new b(this.f11751e, eventTime));
        this.f11749c.put(str, eventTime);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void d(AnalyticsListener.EventTime eventTime, String str, String str2) {
        ((b) ne.a.e((b) this.f11748b.get(str))).p();
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onBandwidthEstimate(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
        this.f11759m = i10;
        this.f11760n = j10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDownstreamFormatChanged(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
        int i10 = mediaLoadData.f12360b;
        if (i10 != 2 && i10 != 0) {
            if (i10 == 1) {
                this.f11762p = mediaLoadData.f12361c;
                return;
            }
            return;
        }
        this.f11761o = mediaLoadData.f12361c;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDrmSessionManagerError(AnalyticsListener.EventTime eventTime, Exception exc) {
        this.f11758l = exc;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDroppedVideoFrames(AnalyticsListener.EventTime eventTime, int i10, long j10) {
        this.f11757k = i10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onEvents(Player player, AnalyticsListener.Events events) {
        boolean z10;
        long j10;
        int i10;
        PlaybackException playbackException;
        Exception exc;
        long j11;
        Format format;
        Format format2;
        VideoSize videoSize;
        if (events.d() != 0) {
            g(events);
            Iterator it = this.f11748b.keySet().iterator();
            while (it.hasNext()) {
                String str = (String) it.next();
                Pair e10 = e(events, str);
                b bVar = (b) this.f11748b.get(str);
                boolean f10 = f(events, str, 11);
                boolean f11 = f(events, str, 1018);
                boolean f12 = f(events, str, 1011);
                boolean f13 = f(events, str, 1000);
                boolean f14 = f(events, str, 10);
                if (!f(events, str, 1003) && !f(events, str, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET)) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                boolean f15 = f(events, str, 1006);
                boolean f16 = f(events, str, 1004);
                boolean f17 = f(events, str, 25);
                AnalyticsListener.EventTime eventTime = (AnalyticsListener.EventTime) e10.first;
                boolean booleanValue = ((Boolean) e10.second).booleanValue();
                if (str.equals(this.f11754h)) {
                    j10 = this.f11755i;
                } else {
                    j10 = -9223372036854775807L;
                }
                if (f11) {
                    i10 = this.f11757k;
                } else {
                    i10 = 0;
                }
                if (f14) {
                    playbackException = player.m();
                } else {
                    playbackException = null;
                }
                if (z10) {
                    exc = this.f11758l;
                } else {
                    exc = null;
                }
                long j12 = 0;
                Iterator it2 = it;
                long j13 = j10;
                if (f15) {
                    j11 = this.f11759m;
                } else {
                    j11 = 0;
                }
                long j14 = j11;
                if (f15) {
                    j12 = this.f11760n;
                }
                if (f16) {
                    format = this.f11761o;
                } else {
                    format = null;
                }
                if (f16) {
                    format2 = this.f11762p;
                } else {
                    format2 = null;
                }
                if (f17) {
                    videoSize = this.f11763q;
                } else {
                    videoSize = null;
                }
                bVar.m(player, eventTime, booleanValue, j13, f10, i10, f12, f13, playbackException, exc, j14, j12, format, format2, videoSize);
                it = it2;
            }
            this.f11761o = null;
            this.f11762p = null;
            this.f11754h = null;
            if (events.a(1028)) {
                this.f11747a.c(events.c(1028));
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onLoadError(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
        this.f11758l = iOException;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        if (this.f11754h == null) {
            this.f11754h = this.f11747a.a();
            this.f11755i = positionInfo.f11573r;
        }
        this.f11756j = i10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, VideoSize videoSize) {
        this.f11763q = videoSize;
    }
}
