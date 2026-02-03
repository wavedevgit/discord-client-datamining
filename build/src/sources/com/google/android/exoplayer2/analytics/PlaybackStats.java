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
    public final int f11652a;

    /* renamed from: b  reason: collision with root package name */
    public final List f11653b;

    /* renamed from: c  reason: collision with root package name */
    public final List f11654c;

    /* renamed from: d  reason: collision with root package name */
    public final long f11655d;

    /* renamed from: e  reason: collision with root package name */
    public final int f11656e;

    /* renamed from: f  reason: collision with root package name */
    public final int f11657f;

    /* renamed from: g  reason: collision with root package name */
    public final int f11658g;

    /* renamed from: h  reason: collision with root package name */
    public final int f11659h;

    /* renamed from: i  reason: collision with root package name */
    public final long f11660i;

    /* renamed from: j  reason: collision with root package name */
    public final int f11661j;

    /* renamed from: k  reason: collision with root package name */
    public final int f11662k;

    /* renamed from: l  reason: collision with root package name */
    public final int f11663l;

    /* renamed from: m  reason: collision with root package name */
    public final int f11664m;

    /* renamed from: n  reason: collision with root package name */
    public final int f11665n;

    /* renamed from: o  reason: collision with root package name */
    public final long f11666o;

    /* renamed from: p  reason: collision with root package name */
    public final int f11667p;

    /* renamed from: q  reason: collision with root package name */
    public final List f11668q;

    /* renamed from: r  reason: collision with root package name */
    public final List f11669r;

    /* renamed from: s  reason: collision with root package name */
    public final long f11670s;

    /* renamed from: t  reason: collision with root package name */
    public final long f11671t;

    /* renamed from: u  reason: collision with root package name */
    public final long f11672u;

    /* renamed from: v  reason: collision with root package name */
    public final long f11673v;

    /* renamed from: w  reason: collision with root package name */
    public final long f11674w;

    /* renamed from: x  reason: collision with root package name */
    public final long f11675x;

    /* renamed from: y  reason: collision with root package name */
    public final int f11676y;

    /* renamed from: z  reason: collision with root package name */
    public final int f11677z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f11678a;

        /* renamed from: b  reason: collision with root package name */
        public final Exception f11679b;

        public a(AnalyticsListener.EventTime eventTime, Exception exc) {
            this.f11678a = eventTime;
            this.f11679b = exc;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || a.class != obj.getClass()) {
                return false;
            }
            a aVar = (a) obj;
            if (!this.f11678a.equals(aVar.f11678a)) {
                return false;
            }
            return this.f11679b.equals(aVar.f11679b);
        }

        public int hashCode() {
            return (this.f11678a.hashCode() * 31) + this.f11679b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f11680a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f11681b;

        public b(AnalyticsListener.EventTime eventTime, Format format) {
            this.f11680a = eventTime;
            this.f11681b = format;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class == obj.getClass()) {
                b bVar = (b) obj;
                if (!this.f11680a.equals(bVar.f11680a)) {
                    return false;
                }
                Format format = this.f11681b;
                Format format2 = bVar.f11681b;
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
            int hashCode = this.f11680a.hashCode() * 31;
            Format format = this.f11681b;
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
        public final AnalyticsListener.EventTime f11682a;

        /* renamed from: b  reason: collision with root package name */
        public final int f11683b;

        public c(AnalyticsListener.EventTime eventTime, int i10) {
            this.f11682a = eventTime;
            this.f11683b = i10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || c.class != obj.getClass()) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f11683b != cVar.f11683b) {
                return false;
            }
            return this.f11682a.equals(cVar.f11682a);
        }

        public int hashCode() {
            return (this.f11682a.hashCode() * 31) + this.f11683b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PlaybackStats(int i10, long[] jArr, List list, List list2, long j10, int i11, int i12, int i13, int i14, long j11, int i15, int i16, int i17, int i18, int i19, long j12, int i20, List list3, List list4, long j13, long j14, long j15, long j16, long j17, long j18, int i21, int i22, int i23, long j19, int i24, long j20, long j21, long j22, long j23, long j24, int i25, int i26, int i27, List list5, List list6) {
        this.f11652a = i10;
        this.N = jArr;
        this.f11653b = Collections.unmodifiableList(list);
        this.f11654c = Collections.unmodifiableList(list2);
        this.f11655d = j10;
        this.f11656e = i11;
        this.f11657f = i12;
        this.f11658g = i13;
        this.f11659h = i14;
        this.f11660i = j11;
        this.f11661j = i15;
        this.f11662k = i16;
        this.f11663l = i17;
        this.f11664m = i18;
        this.f11665n = i19;
        this.f11666o = j12;
        this.f11667p = i20;
        this.f11668q = Collections.unmodifiableList(list3);
        this.f11669r = Collections.unmodifiableList(list4);
        this.f11670s = j13;
        this.f11671t = j14;
        this.f11672u = j15;
        this.f11673v = j16;
        this.f11674w = j17;
        this.f11675x = j18;
        this.f11676y = i21;
        this.f11677z = i22;
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
            i11 += playbackStats.f11652a;
            for (int i30 = 0; i30 < 16; i30++) {
                jArr[i30] = jArr[i30] + playbackStats.N[i30];
            }
            if (j23 == -9223372036854775807L) {
                j23 = playbackStats.f11655d;
            } else {
                long j25 = playbackStats.f11655d;
                if (j25 != -9223372036854775807L) {
                    j23 = Math.min(j23, j25);
                }
            }
            i27 += playbackStats.f11656e;
            i28 += playbackStats.f11657f;
            i29 += playbackStats.f11658g;
            i12 += playbackStats.f11659h;
            if (j24 == -9223372036854775807L) {
                j24 = playbackStats.f11660i;
            } else {
                long j26 = playbackStats.f11660i;
                if (j26 != -9223372036854775807L) {
                    j24 += j26;
                }
            }
            i13 += playbackStats.f11661j;
            i14 += playbackStats.f11662k;
            i15 += playbackStats.f11663l;
            i16 += playbackStats.f11664m;
            i17 += playbackStats.f11665n;
            if (j22 == -9223372036854775807L) {
                j22 = playbackStats.f11666o;
            } else {
                long j27 = playbackStats.f11666o;
                if (j27 != -9223372036854775807L) {
                    j22 = Math.max(j22, j27);
                }
            }
            i18 += playbackStats.f11667p;
            j10 += playbackStats.f11670s;
            j11 += playbackStats.f11671t;
            j12 += playbackStats.f11672u;
            j13 += playbackStats.f11673v;
            j14 += playbackStats.f11674w;
            j15 += playbackStats.f11675x;
            i19 += playbackStats.f11676y;
            i20 += playbackStats.f11677z;
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
