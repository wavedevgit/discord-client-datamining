package com.google.android.exoplayer2.analytics;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PlaybackStats {
    public static final PlaybackStats O = d(new PlaybackStats[0]);
    public final int A;
    public final long B;
    public final int C;
    public final long D;
    public final long E;
    public final long F;
    public final long G;
    public final long H;
    public final int I;
    public final int J;
    public final int K;
    public final List L;
    public final List M;
    private final long[] N;

    /* renamed from: a  reason: collision with root package name */
    public final int f12684a;

    /* renamed from: b  reason: collision with root package name */
    public final List f12685b;

    /* renamed from: c  reason: collision with root package name */
    public final List f12686c;

    /* renamed from: d  reason: collision with root package name */
    public final long f12687d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12688e;

    /* renamed from: f  reason: collision with root package name */
    public final int f12689f;

    /* renamed from: g  reason: collision with root package name */
    public final int f12690g;

    /* renamed from: h  reason: collision with root package name */
    public final int f12691h;

    /* renamed from: i  reason: collision with root package name */
    public final long f12692i;

    /* renamed from: j  reason: collision with root package name */
    public final int f12693j;

    /* renamed from: k  reason: collision with root package name */
    public final int f12694k;

    /* renamed from: l  reason: collision with root package name */
    public final int f12695l;

    /* renamed from: m  reason: collision with root package name */
    public final int f12696m;

    /* renamed from: n  reason: collision with root package name */
    public final int f12697n;

    /* renamed from: o  reason: collision with root package name */
    public final long f12698o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12699p;

    /* renamed from: q  reason: collision with root package name */
    public final List f12700q;

    /* renamed from: r  reason: collision with root package name */
    public final List f12701r;

    /* renamed from: s  reason: collision with root package name */
    public final long f12702s;

    /* renamed from: t  reason: collision with root package name */
    public final long f12703t;

    /* renamed from: u  reason: collision with root package name */
    public final long f12704u;

    /* renamed from: v  reason: collision with root package name */
    public final long f12705v;

    /* renamed from: w  reason: collision with root package name */
    public final long f12706w;

    /* renamed from: x  reason: collision with root package name */
    public final long f12707x;

    /* renamed from: y  reason: collision with root package name */
    public final int f12708y;

    /* renamed from: z  reason: collision with root package name */
    public final int f12709z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f12710a;

        /* renamed from: b  reason: collision with root package name */
        public final Exception f12711b;

        public a(AnalyticsListener.EventTime eventTime, Exception exc) {
            this.f12710a = eventTime;
            this.f12711b = exc;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || a.class != obj.getClass()) {
                return false;
            }
            a aVar = (a) obj;
            if (!this.f12710a.equals(aVar.f12710a)) {
                return false;
            }
            return this.f12711b.equals(aVar.f12711b);
        }

        public int hashCode() {
            return (this.f12710a.hashCode() * 31) + this.f12711b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f12712a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f12713b;

        public b(AnalyticsListener.EventTime eventTime, Format format) {
            this.f12712a = eventTime;
            this.f12713b = format;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class == obj.getClass()) {
                b bVar = (b) obj;
                if (!this.f12712a.equals(bVar.f12712a)) {
                    return false;
                }
                Format format = this.f12713b;
                Format format2 = bVar.f12713b;
                if (format != null) {
                    return format.equals(format2);
                }
                if (format2 == null) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = this.f12712a.hashCode() * 31;
            Format format = this.f12713b;
            if (format != null) {
                i10 = format.hashCode();
            } else {
                i10 = 0;
            }
            return hashCode + i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f12714a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12715b;

        public c(AnalyticsListener.EventTime eventTime, int i10) {
            this.f12714a = eventTime;
            this.f12715b = i10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || c.class != obj.getClass()) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f12715b != cVar.f12715b) {
                return false;
            }
            return this.f12714a.equals(cVar.f12714a);
        }

        public int hashCode() {
            return (this.f12714a.hashCode() * 31) + this.f12715b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PlaybackStats(int i10, long[] jArr, List list, List list2, long j10, int i11, int i12, int i13, int i14, long j11, int i15, int i16, int i17, int i18, int i19, long j12, int i20, List list3, List list4, long j13, long j14, long j15, long j16, long j17, long j18, int i21, int i22, int i23, long j19, int i24, long j20, long j21, long j22, long j23, long j24, int i25, int i26, int i27, List list5, List list6) {
        this.f12684a = i10;
        this.N = jArr;
        this.f12685b = Collections.unmodifiableList(list);
        this.f12686c = Collections.unmodifiableList(list2);
        this.f12687d = j10;
        this.f12688e = i11;
        this.f12689f = i12;
        this.f12690g = i13;
        this.f12691h = i14;
        this.f12692i = j11;
        this.f12693j = i15;
        this.f12694k = i16;
        this.f12695l = i17;
        this.f12696m = i18;
        this.f12697n = i19;
        this.f12698o = j12;
        this.f12699p = i20;
        this.f12700q = Collections.unmodifiableList(list3);
        this.f12701r = Collections.unmodifiableList(list4);
        this.f12702s = j13;
        this.f12703t = j14;
        this.f12704u = j15;
        this.f12705v = j16;
        this.f12706w = j17;
        this.f12707x = j18;
        this.f12708y = i21;
        this.f12709z = i22;
        this.A = i23;
        this.B = j19;
        this.C = i24;
        this.D = j20;
        this.E = j21;
        this.F = j22;
        this.G = j23;
        this.H = j24;
        this.I = i25;
        this.J = i26;
        this.K = i27;
        this.L = Collections.unmodifiableList(list5);
        this.M = Collections.unmodifiableList(list6);
    }

    public static PlaybackStats d(PlaybackStats... playbackStatsArr) {
        int i10;
        PlaybackStats[] playbackStatsArr2 = playbackStatsArr;
        long[] jArr = new long[16];
        int length = playbackStatsArr2.length;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        int i14 = 0;
        int i15 = 0;
        int i16 = 0;
        int i17 = 0;
        int i18 = 0;
        int i19 = 0;
        int i20 = 0;
        int i21 = 0;
        int i22 = 0;
        int i23 = 0;
        int i24 = 0;
        long j10 = 0;
        long j11 = 0;
        long j12 = 0;
        long j13 = 0;
        long j14 = 0;
        long j15 = 0;
        long j16 = 0;
        long j17 = 0;
        long j18 = 0;
        long j19 = 0;
        long j20 = -1;
        long j21 = -1;
        long j22 = -9223372036854775807L;
        long j23 = -9223372036854775807L;
        long j24 = -9223372036854775807L;
        int i25 = -1;
        int i26 = 0;
        int i27 = 0;
        int i28 = 0;
        int i29 = 0;
        while (i26 < length) {
            PlaybackStats playbackStats = playbackStatsArr2[i26];
            i11 += playbackStats.f12684a;
            for (int i30 = 0; i30 < 16; i30++) {
                jArr[i30] = jArr[i30] + playbackStats.N[i30];
            }
            if (j23 == -9223372036854775807L) {
                j23 = playbackStats.f12687d;
            } else {
                long j25 = playbackStats.f12687d;
                if (j25 != -9223372036854775807L) {
                    j23 = Math.min(j23, j25);
                }
            }
            i27 += playbackStats.f12688e;
            i28 += playbackStats.f12689f;
            i29 += playbackStats.f12690g;
            i12 += playbackStats.f12691h;
            if (j24 == -9223372036854775807L) {
                j24 = playbackStats.f12692i;
            } else {
                long j26 = playbackStats.f12692i;
                if (j26 != -9223372036854775807L) {
                    j24 += j26;
                }
            }
            i13 += playbackStats.f12693j;
            i14 += playbackStats.f12694k;
            i15 += playbackStats.f12695l;
            i16 += playbackStats.f12696m;
            i17 += playbackStats.f12697n;
            if (j22 == -9223372036854775807L) {
                j22 = playbackStats.f12698o;
            } else {
                long j27 = playbackStats.f12698o;
                if (j27 != -9223372036854775807L) {
                    j22 = Math.max(j22, j27);
                }
            }
            i18 += playbackStats.f12699p;
            j10 += playbackStats.f12702s;
            j11 += playbackStats.f12703t;
            j12 += playbackStats.f12704u;
            j13 += playbackStats.f12705v;
            j14 += playbackStats.f12706w;
            j15 += playbackStats.f12707x;
            i19 += playbackStats.f12708y;
            i20 += playbackStats.f12709z;
            int i31 = i25;
            if (i31 == -1) {
                i25 = playbackStats.A;
            } else {
                i25 = i31;
                int i32 = playbackStats.A;
                if (i32 != -1) {
                    i25 += i32;
                }
            }
            if (j20 == -1) {
                i10 = length;
                j20 = playbackStats.B;
            } else {
                i10 = length;
                long j28 = playbackStats.B;
                if (j28 != -1) {
                    j20 += j28;
                }
            }
            i21 += playbackStats.C;
            if (j21 == -1) {
                j21 = playbackStats.D;
            } else {
                long j29 = playbackStats.D;
                if (j29 != -1) {
                    j21 += j29;
                }
            }
            j16 += playbackStats.E;
            j17 += playbackStats.F;
            j18 += playbackStats.G;
            j19 += playbackStats.H;
            i22 += playbackStats.I;
            i23 += playbackStats.J;
            i24 += playbackStats.K;
            i26++;
            length = i10;
            playbackStatsArr2 = playbackStatsArr;
        }
        long j30 = j23;
        long j31 = j22;
        List list = Collections.EMPTY_LIST;
        return new PlaybackStats(i11, jArr, list, list, j30, i27, i28, i29, i12, j24, i13, i14, i15, i16, i17, j31, i18, list, list, j10, j11, j12, j13, j14, j15, i19, i20, i25, j20, i21, j21, j16, j17, j18, j19, i22, i23, i24, list, list);
    }

    public long a(int i10) {
        return this.N[i10];
    }

    public long b() {
        return a(3);
    }

    public long c() {
        return a(6);
    }
}
