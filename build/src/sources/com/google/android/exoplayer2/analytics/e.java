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
    private final d f12779a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f12780b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f12781c;

    /* renamed from: d  reason: collision with root package name */
    private final a f12782d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f12783e;

    /* renamed from: f  reason: collision with root package name */
    private final Timeline.b f12784f;

    /* renamed from: g  reason: collision with root package name */
    private PlaybackStats f12785g;

    /* renamed from: h  reason: collision with root package name */
    private String f12786h;

    /* renamed from: i  reason: collision with root package name */
    private long f12787i;

    /* renamed from: j  reason: collision with root package name */
    private int f12788j;

    /* renamed from: k  reason: collision with root package name */
    private int f12789k;

    /* renamed from: l  reason: collision with root package name */
    private Exception f12790l;

    /* renamed from: m  reason: collision with root package name */
    private long f12791m;

    /* renamed from: n  reason: collision with root package name */
    private long f12792n;

    /* renamed from: o  reason: collision with root package name */
    private Format f12793o;

    /* renamed from: p  reason: collision with root package name */
    private Format f12794p;

    /* renamed from: q  reason: collision with root package name */
    private VideoSize f12795q;

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
        private final boolean f12796a;

        /* renamed from: b  reason: collision with root package name */
        private final long[] f12797b = new long[16];

        /* renamed from: c  reason: collision with root package name */
        private final List f12798c;

        /* renamed from: d  reason: collision with root package name */
        private final List f12799d;

        /* renamed from: e  reason: collision with root package name */
        private final List f12800e;

        /* renamed from: f  reason: collision with root package name */
        private final List f12801f;

        /* renamed from: g  reason: collision with root package name */
        private final List f12802g;

        /* renamed from: h  reason: collision with root package name */
        private final List f12803h;

        /* renamed from: i  reason: collision with root package name */
        private final boolean f12804i;

        /* renamed from: j  reason: collision with root package name */
        private long f12805j;

        /* renamed from: k  reason: collision with root package name */
        private boolean f12806k;

        /* renamed from: l  reason: collision with root package name */
        private boolean f12807l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f12808m;

        /* renamed from: n  reason: collision with root package name */
        private int f12809n;

        /* renamed from: o  reason: collision with root package name */
        private int f12810o;

        /* renamed from: p  reason: collision with root package name */
        private int f12811p;

        /* renamed from: q  reason: collision with root package name */
        private int f12812q;

        /* renamed from: r  reason: collision with root package name */
        private long f12813r;

        /* renamed from: s  reason: collision with root package name */
        private int f12814s;

        /* renamed from: t  reason: collision with root package name */
        private long f12815t;

        /* renamed from: u  reason: collision with root package name */
        private long f12816u;

        /* renamed from: v  reason: collision with root package name */
        private long f12817v;

        /* renamed from: w  reason: collision with root package name */
        private long f12818w;

        /* renamed from: x  reason: collision with root package name */
        private long f12819x;

        /* renamed from: y  reason: collision with root package name */
        private long f12820y;

        /* renamed from: z  reason: collision with root package name */
        private long f12821z;

        public b(boolean z10, AnalyticsListener.EventTime eventTime) {
            List list;
            List list2;
            List list3;
            List list4;
            List list5;
            List list6;
            this.f12796a = z10;
            if (z10) {
                list = new ArrayList();
            } else {
                list = Collections.EMPTY_LIST;
            }
            this.f12798c = list;
            if (z10) {
                list2 = new ArrayList();
            } else {
                list2 = Collections.EMPTY_LIST;
            }
            this.f12799d = list2;
            if (z10) {
                list3 = new ArrayList();
            } else {
                list3 = Collections.EMPTY_LIST;
            }
            this.f12800e = list3;
            if (z10) {
                list4 = new ArrayList();
            } else {
                list4 = Collections.EMPTY_LIST;
            }
            this.f12801f = list4;
            if (z10) {
                list5 = new ArrayList();
            } else {
                list5 = Collections.EMPTY_LIST;
            }
            this.f12802g = list5;
            if (z10) {
                list6 = new ArrayList();
            } else {
                list6 = Collections.EMPTY_LIST;
            }
            this.f12803h = list6;
            boolean z11 = false;
            this.H = 0;
            this.I = eventTime.f12672a;
            this.f12805j = -9223372036854775807L;
            this.f12813r = -9223372036854775807L;
            r.b bVar = eventTime.f12675d;
            if (bVar != null && bVar.b()) {
                z11 = true;
            }
            this.f12804i = z11;
            this.f12816u = -1L;
            this.f12815t = -1L;
            this.f12814s = -1;
            this.T = 1.0f;
        }

        private long[] b(long j10) {
            List list = this.f12799d;
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
            if (this.H == 3 && (format = this.Q) != null && (i10 = format.f12331s) != -1) {
                long j11 = ((float) (j10 - this.S)) * this.T;
                this.f12821z += j11;
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
                    this.f12817v += j11;
                    this.f12818w += i10 * j11;
                }
                int i11 = format.f12331s;
                if (i11 != -1) {
                    this.f12819x += j11;
                    this.f12820y += j11 * i11;
                }
            }
            this.R = j10;
        }

        private void i(AnalyticsListener.EventTime eventTime, Format format) {
            int i10;
            if (!w0.c(this.Q, format)) {
                g(eventTime.f12672a);
                if (format != null && this.f12816u == -1 && (i10 = format.f12331s) != -1) {
                    this.f12816u = i10;
                }
                this.Q = format;
                if (this.f12796a) {
                    this.f12801f.add(new PlaybackStats.b(eventTime, format));
                }
            }
        }

        private void j(long j10) {
            if (f(this.H)) {
                long j11 = j10 - this.O;
                long j12 = this.f12813r;
                if (j12 == -9223372036854775807L || j11 > j12) {
                    this.f12813r = j11;
                }
            }
        }

        private void k(long j10, long j11) {
            if (this.f12796a) {
                if (this.H != 3) {
                    if (j11 != -9223372036854775807L) {
                        if (!this.f12799d.isEmpty()) {
                            List list = this.f12799d;
                            long j12 = ((long[]) list.get(list.size() - 1))[1];
                            if (j12 != j11) {
                                this.f12799d.add(new long[]{j10, j12});
                            }
                        }
                    } else {
                        return;
                    }
                }
                if (j11 != -9223372036854775807L) {
                    this.f12799d.add(new long[]{j10, j11});
                } else if (!this.f12799d.isEmpty()) {
                    this.f12799d.add(b(j10));
                }
            }
        }

        private void l(AnalyticsListener.EventTime eventTime, Format format) {
            int i10;
            int i11;
            if (!w0.c(this.P, format)) {
                h(eventTime.f12672a);
                if (format != null) {
                    if (this.f12814s == -1 && (i11 = format.C) != -1) {
                        this.f12814s = i11;
                    }
                    if (this.f12815t == -1 && (i10 = format.f12331s) != -1) {
                        this.f12815t = i10;
                    }
                }
                this.P = format;
                if (this.f12796a) {
                    this.f12800e.add(new PlaybackStats.b(eventTime, format));
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
            if (eventTime.f12672a >= this.I) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            long j10 = eventTime.f12672a;
            long[] jArr = this.f12797b;
            int i11 = this.H;
            jArr[i11] = jArr[i11] + (j10 - this.I);
            if (this.f12805j == -9223372036854775807L) {
                this.f12805j = j10;
            }
            this.f12808m |= c(i11, i10);
            this.f12806k |= e(i10);
            boolean z12 = this.f12807l;
            if (i10 == 11) {
                z11 = true;
            }
            this.f12807l = z12 | z11;
            if (!d(this.H) && d(i10)) {
                this.f12809n++;
            }
            if (i10 == 5) {
                this.f12811p++;
            }
            if (!f(this.H) && f(i10)) {
                this.f12812q++;
                this.O = eventTime.f12672a;
            }
            if (f(this.H) && this.H != 7 && i10 == 7) {
                this.f12810o++;
            }
            j(eventTime.f12672a);
            this.H = i10;
            this.I = eventTime.f12672a;
            if (this.f12796a) {
                this.f12798c.add(new PlaybackStats.c(eventTime, i10));
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
            long[] jArr2 = this.f12797b;
            List list = this.f12799d;
            if (!z10) {
                long elapsedRealtime = SystemClock.elapsedRealtime();
                long[] copyOf = Arrays.copyOf(this.f12797b, 16);
                long max = Math.max(0L, elapsedRealtime - this.I);
                int i16 = this.H;
                copyOf[i16] = copyOf[i16] + max;
                j(elapsedRealtime);
                h(elapsedRealtime);
                g(elapsedRealtime);
                ArrayList arrayList5 = new ArrayList(this.f12799d);
                if (this.f12796a && this.H == 3) {
                    arrayList5.add(b(elapsedRealtime));
                }
                jArr = copyOf;
                arrayList = arrayList5;
            } else {
                jArr = jArr2;
                arrayList = list;
            }
            if (!this.f12808m && this.f12806k) {
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
                arrayList2 = this.f12800e;
            } else {
                arrayList2 = new ArrayList(this.f12800e);
            }
            List list2 = arrayList2;
            if (z10) {
                arrayList3 = this.f12801f;
            } else {
                arrayList3 = new ArrayList(this.f12801f);
            }
            List list3 = arrayList3;
            if (z10) {
                arrayList4 = this.f12798c;
            } else {
                arrayList4 = new ArrayList(this.f12798c);
            }
            List list4 = arrayList4;
            long j12 = this.f12805j;
            boolean z11 = this.K;
            int i17 = !this.f12806k ? 1 : 0;
            boolean z12 = this.f12807l;
            int i18 = i10 ^ 1;
            int i19 = this.f12809n;
            int i20 = this.f12810o;
            int i21 = this.f12811p;
            int i22 = this.f12812q;
            long j13 = this.f12813r;
            boolean z13 = this.f12804i;
            long j14 = this.f12817v;
            long j15 = this.f12818w;
            long j16 = this.f12819x;
            long j17 = this.f12820y;
            long j18 = this.f12821z;
            long j19 = this.A;
            int i23 = this.f12814s;
            if (i23 == -1) {
                i12 = 0;
            } else {
                i12 = 1;
            }
            long j20 = this.f12815t;
            if (j20 == -1) {
                i13 = 0;
            } else {
                i13 = 1;
            }
            long j21 = this.f12816u;
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
            return new PlaybackStats(1, jArr, list4, arrayList, j12, z11 ? 1 : 0, i17, z12 ? 1 : 0, i11, j11, i18, i19, i20, i21, i22, j13, z13 ? 1 : 0, list2, list3, j14, j15, j16, j17, j18, j19, i12, i13, i23, j20, i14, j21, j22, j23, j24, j25, i15, i24, this.G, this.f12802g, this.f12803h);
        }

        public void m(Player player, AnalyticsListener.EventTime eventTime, boolean z10, long j10, boolean z11, int i10, boolean z12, boolean z13, PlaybackException playbackException, Exception exc, long j11, long j12, Format format, Format format2, VideoSize videoSize) {
            if (j10 != -9223372036854775807L) {
                k(eventTime.f12672a, j10);
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
                if (this.f12796a) {
                    this.f12802g.add(new PlaybackStats.a(eventTime, playbackException));
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
                l(eventTime, format3.b().n0(videoSize.f14148d).S(videoSize.f14149e).G());
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
                if (this.f12796a) {
                    this.f12803h.add(new PlaybackStats.a(eventTime, exc));
                }
            }
            int q10 = q(player);
            float f10 = player.c().f12584d;
            if (this.H != q10 || this.T != f10) {
                k(eventTime.f12672a, z10 ? eventTime.f12676e : -9223372036854775807L);
                h(eventTime.f12672a);
                g(eventTime.f12672a);
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
            k(eventTime.f12672a, j10);
            h(eventTime.f12672a);
            g(eventTime.f12672a);
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
        this.f12782d = aVar;
        this.f12783e = z10;
        com.google.android.exoplayer2.analytics.b bVar = new com.google.android.exoplayer2.analytics.b();
        this.f12779a = bVar;
        this.f12780b = new HashMap();
        this.f12781c = new HashMap();
        this.f12785g = PlaybackStats.O;
        this.f12784f = new Timeline.b();
        this.f12795q = VideoSize.f14142p;
        bVar.b(this);
    }

    private Pair e(AnalyticsListener.Events events, String str) {
        r.b bVar;
        AnalyticsListener.EventTime eventTime = null;
        boolean z10 = false;
        for (int i10 = 0; i10 < events.d(); i10++) {
            AnalyticsListener.EventTime c10 = events.c(events.b(i10));
            boolean e10 = this.f12779a.e(c10, str);
            if (eventTime == null || ((e10 && !z10) || (e10 == z10 && c10.f12672a > eventTime.f12672a))) {
                eventTime = c10;
                z10 = e10;
            }
        }
        ne.a.e(eventTime);
        if (!z10 && (bVar = eventTime.f12675d) != null && bVar.b()) {
            long i11 = eventTime.f12673b.l(eventTime.f12675d.f47555a, this.f12784f).i(eventTime.f12675d.f47556b);
            if (i11 == Long.MIN_VALUE) {
                i11 = this.f12784f.f12626o;
            }
            long j10 = eventTime.f12672a;
            Timeline timeline = eventTime.f12673b;
            int i12 = eventTime.f12674c;
            r.b bVar2 = eventTime.f12675d;
            AnalyticsListener.EventTime eventTime2 = new AnalyticsListener.EventTime(j10, timeline, i12, new r.b(bVar2.f47555a, bVar2.f47558d, bVar2.f47556b), w0.p1(i11 + this.f12784f.q()), eventTime.f12673b, eventTime.f12678g, eventTime.f12679h, eventTime.f12680i, eventTime.f12681j);
            z10 = this.f12779a.e(eventTime2, str);
            eventTime = eventTime2;
        }
        return Pair.create(eventTime, Boolean.valueOf(z10));
    }

    private boolean f(AnalyticsListener.Events events, String str, int i10) {
        if (events.a(i10) && this.f12779a.e(events.c(i10), str)) {
            return true;
        }
        return false;
    }

    private void g(AnalyticsListener.Events events) {
        for (int i10 = 0; i10 < events.d(); i10++) {
            int b10 = events.b(i10);
            AnalyticsListener.EventTime c10 = events.c(b10);
            if (b10 == 0) {
                this.f12779a.g(c10);
            } else if (b10 == 11) {
                this.f12779a.f(c10, this.f12788j);
            } else {
                this.f12779a.d(c10);
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void a(AnalyticsListener.EventTime eventTime, String str, boolean z10) {
        long j10;
        b bVar = (b) ne.a.e((b) this.f12780b.remove(str));
        AnalyticsListener.EventTime eventTime2 = (AnalyticsListener.EventTime) ne.a.e((AnalyticsListener.EventTime) this.f12781c.remove(str));
        if (str.equals(this.f12786h)) {
            j10 = this.f12787i;
        } else {
            j10 = -9223372036854775807L;
        }
        bVar.n(eventTime, z10, j10);
        PlaybackStats a10 = bVar.a(true);
        this.f12785g = PlaybackStats.d(this.f12785g, a10);
        a aVar = this.f12782d;
        if (aVar != null) {
            aVar.a(eventTime2, a10);
        }
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void b(AnalyticsListener.EventTime eventTime, String str) {
        ((b) ne.a.e((b) this.f12780b.get(str))).o();
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void c(AnalyticsListener.EventTime eventTime, String str) {
        this.f12780b.put(str, new b(this.f12783e, eventTime));
        this.f12781c.put(str, eventTime);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void d(AnalyticsListener.EventTime eventTime, String str, String str2) {
        ((b) ne.a.e((b) this.f12780b.get(str))).p();
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onBandwidthEstimate(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
        this.f12791m = i10;
        this.f12792n = j10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDownstreamFormatChanged(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
        int i10 = mediaLoadData.f13392b;
        if (i10 != 2 && i10 != 0) {
            if (i10 == 1) {
                this.f12794p = mediaLoadData.f13393c;
                return;
            }
            return;
        }
        this.f12793o = mediaLoadData.f13393c;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDrmSessionManagerError(AnalyticsListener.EventTime eventTime, Exception exc) {
        this.f12790l = exc;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDroppedVideoFrames(AnalyticsListener.EventTime eventTime, int i10, long j10) {
        this.f12789k = i10;
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
            Iterator it = this.f12780b.keySet().iterator();
            while (it.hasNext()) {
                String str = (String) it.next();
                Pair e10 = e(events, str);
                b bVar = (b) this.f12780b.get(str);
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
                if (str.equals(this.f12786h)) {
                    j10 = this.f12787i;
                } else {
                    j10 = -9223372036854775807L;
                }
                if (f11) {
                    i10 = this.f12789k;
                } else {
                    i10 = 0;
                }
                if (f14) {
                    playbackException = player.m();
                } else {
                    playbackException = null;
                }
                if (z10) {
                    exc = this.f12790l;
                } else {
                    exc = null;
                }
                long j12 = 0;
                Iterator it2 = it;
                long j13 = j10;
                if (f15) {
                    j11 = this.f12791m;
                } else {
                    j11 = 0;
                }
                long j14 = j11;
                if (f15) {
                    j12 = this.f12792n;
                }
                if (f16) {
                    format = this.f12793o;
                } else {
                    format = null;
                }
                if (f16) {
                    format2 = this.f12794p;
                } else {
                    format2 = null;
                }
                if (f17) {
                    videoSize = this.f12795q;
                } else {
                    videoSize = null;
                }
                bVar.m(player, eventTime, booleanValue, j13, f10, i10, f12, f13, playbackException, exc, j14, j12, format, format2, videoSize);
                it = it2;
            }
            this.f12793o = null;
            this.f12794p = null;
            this.f12786h = null;
            if (events.a(1028)) {
                this.f12779a.c(events.c(1028));
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onLoadError(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
        this.f12790l = iOException;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        if (this.f12786h == null) {
            this.f12786h = this.f12779a.a();
            this.f12787i = positionInfo.f12605r;
        }
        this.f12788j = i10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, VideoSize videoSize) {
        this.f12795q = videoSize;
    }
}
