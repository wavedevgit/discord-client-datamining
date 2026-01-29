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
    public final int f13055a;

    /* renamed from: b  reason: collision with root package name */
    public final List f13056b;

    /* renamed from: c  reason: collision with root package name */
    public final List f13057c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13058d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13059e;

    /* renamed from: f  reason: collision with root package name */
    public final int f13060f;

    /* renamed from: g  reason: collision with root package name */
    public final int f13061g;

    /* renamed from: h  reason: collision with root package name */
    public final int f13062h;

    /* renamed from: i  reason: collision with root package name */
    public final long f13063i;

    /* renamed from: j  reason: collision with root package name */
    public final int f13064j;

    /* renamed from: k  reason: collision with root package name */
    public final int f13065k;

    /* renamed from: l  reason: collision with root package name */
    public final int f13066l;

    /* renamed from: m  reason: collision with root package name */
    public final int f13067m;

    /* renamed from: n  reason: collision with root package name */
    public final int f13068n;

    /* renamed from: o  reason: collision with root package name */
    public final long f13069o;

    /* renamed from: p  reason: collision with root package name */
    public final int f13070p;

    /* renamed from: q  reason: collision with root package name */
    public final List f13071q;

    /* renamed from: r  reason: collision with root package name */
    public final List f13072r;

    /* renamed from: s  reason: collision with root package name */
    public final long f13073s;

    /* renamed from: t  reason: collision with root package name */
    public final long f13074t;

    /* renamed from: u  reason: collision with root package name */
    public final long f13075u;

    /* renamed from: v  reason: collision with root package name */
    public final long f13076v;

    /* renamed from: w  reason: collision with root package name */
    public final long f13077w;

    /* renamed from: x  reason: collision with root package name */
    public final long f13078x;

    /* renamed from: y  reason: collision with root package name */
    public final int f13079y;

    /* renamed from: z  reason: collision with root package name */
    public final int f13080z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f13081a;

        /* renamed from: b  reason: collision with root package name */
        public final Exception f13082b;

        public a(AnalyticsListener.EventTime eventTime, Exception exc) {
            this.f13081a = eventTime;
            this.f13082b = exc;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || a.class != obj.getClass()) {
                return false;
            }
            a aVar = (a) obj;
            if (!this.f13081a.equals(aVar.f13081a)) {
                return false;
            }
            return this.f13082b.equals(aVar.f13082b);
        }

        public int hashCode() {
            return (this.f13081a.hashCode() * 31) + this.f13082b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f13083a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f13084b;

        public b(AnalyticsListener.EventTime eventTime, Format format) {
            this.f13083a = eventTime;
            this.f13084b = format;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class == obj.getClass()) {
                b bVar = (b) obj;
                if (!this.f13083a.equals(bVar.f13083a)) {
                    return false;
                }
                Format format = this.f13084b;
                Format format2 = bVar.f13084b;
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
            int hashCode = this.f13083a.hashCode() * 31;
            Format format = this.f13084b;
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
        public final AnalyticsListener.EventTime f13085a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13086b;

        public c(AnalyticsListener.EventTime eventTime, int i10) {
            this.f13085a = eventTime;
            this.f13086b = i10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || c.class != obj.getClass()) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f13086b != cVar.f13086b) {
                return false;
            }
            return this.f13085a.equals(cVar.f13085a);
        }

        public int hashCode() {
            return (this.f13085a.hashCode() * 31) + this.f13086b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PlaybackStats(int i10, long[] jArr, List list, List list2, long j10, int i11, int i12, int i13, int i14, long j11, int i15, int i16, int i17, int i18, int i19, long j12, int i20, List list3, List list4, long j13, long j14, long j15, long j16, long j17, long j18, int i21, int i22, int i23, long j19, int i24, long j20, long j21, long j22, long j23, long j24, int i25, int i26, int i27, List list5, List list6) {
        this.f13055a = i10;
        this.N = jArr;
        this.f13056b = Collections.unmodifiableList(list);
        this.f13057c = Collections.unmodifiableList(list2);
        this.f13058d = j10;
        this.f13059e = i11;
        this.f13060f = i12;
        this.f13061g = i13;
        this.f13062h = i14;
        this.f13063i = j11;
        this.f13064j = i15;
        this.f13065k = i16;
        this.f13066l = i17;
        this.f13067m = i18;
        this.f13068n = i19;
        this.f13069o = j12;
        this.f13070p = i20;
        this.f13071q = Collections.unmodifiableList(list3);
        this.f13072r = Collections.unmodifiableList(list4);
        this.f13073s = j13;
        this.f13074t = j14;
        this.f13075u = j15;
        this.f13076v = j16;
        this.f13077w = j17;
        this.f13078x = j18;
        this.f13079y = i21;
        this.f13080z = i22;
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
            i11 += playbackStats.f13055a;
            for (int i30 = 0; i30 < 16; i30++) {
                jArr[i30] = jArr[i30] + playbackStats.N[i30];
            }
            if (j23 == -9223372036854775807L) {
                j23 = playbackStats.f13058d;
            } else {
                long j25 = playbackStats.f13058d;
                if (j25 != -9223372036854775807L) {
                    j23 = Math.min(j23, j25);
                }
            }
            i27 += playbackStats.f13059e;
            i28 += playbackStats.f13060f;
            i29 += playbackStats.f13061g;
            i12 += playbackStats.f13062h;
            if (j24 == -9223372036854775807L) {
                j24 = playbackStats.f13063i;
            } else {
                long j26 = playbackStats.f13063i;
                if (j26 != -9223372036854775807L) {
                    j24 += j26;
                }
            }
            i13 += playbackStats.f13064j;
            i14 += playbackStats.f13065k;
            i15 += playbackStats.f13066l;
            i16 += playbackStats.f13067m;
            i17 += playbackStats.f13068n;
            if (j22 == -9223372036854775807L) {
                j22 = playbackStats.f13069o;
            } else {
                long j27 = playbackStats.f13069o;
                if (j27 != -9223372036854775807L) {
                    j22 = Math.max(j22, j27);
                }
            }
            i18 += playbackStats.f13070p;
            j10 += playbackStats.f13073s;
            j11 += playbackStats.f13074t;
            j12 += playbackStats.f13075u;
            j13 += playbackStats.f13076v;
            j14 += playbackStats.f13077w;
            j15 += playbackStats.f13078x;
            i19 += playbackStats.f13079y;
            i20 += playbackStats.f13080z;
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
