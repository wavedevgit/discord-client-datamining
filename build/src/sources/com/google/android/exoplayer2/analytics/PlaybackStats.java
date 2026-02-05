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
    public final int f12037a;

    /* renamed from: b  reason: collision with root package name */
    public final List f12038b;

    /* renamed from: c  reason: collision with root package name */
    public final List f12039c;

    /* renamed from: d  reason: collision with root package name */
    public final long f12040d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12041e;

    /* renamed from: f  reason: collision with root package name */
    public final int f12042f;

    /* renamed from: g  reason: collision with root package name */
    public final int f12043g;

    /* renamed from: h  reason: collision with root package name */
    public final int f12044h;

    /* renamed from: i  reason: collision with root package name */
    public final long f12045i;

    /* renamed from: j  reason: collision with root package name */
    public final int f12046j;

    /* renamed from: k  reason: collision with root package name */
    public final int f12047k;

    /* renamed from: l  reason: collision with root package name */
    public final int f12048l;

    /* renamed from: m  reason: collision with root package name */
    public final int f12049m;

    /* renamed from: n  reason: collision with root package name */
    public final int f12050n;

    /* renamed from: o  reason: collision with root package name */
    public final long f12051o;

    /* renamed from: p  reason: collision with root package name */
    public final int f12052p;

    /* renamed from: q  reason: collision with root package name */
    public final List f12053q;

    /* renamed from: r  reason: collision with root package name */
    public final List f12054r;

    /* renamed from: s  reason: collision with root package name */
    public final long f12055s;

    /* renamed from: t  reason: collision with root package name */
    public final long f12056t;

    /* renamed from: u  reason: collision with root package name */
    public final long f12057u;

    /* renamed from: v  reason: collision with root package name */
    public final long f12058v;

    /* renamed from: w  reason: collision with root package name */
    public final long f12059w;

    /* renamed from: x  reason: collision with root package name */
    public final long f12060x;

    /* renamed from: y  reason: collision with root package name */
    public final int f12061y;

    /* renamed from: z  reason: collision with root package name */
    public final int f12062z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f12063a;

        /* renamed from: b  reason: collision with root package name */
        public final Exception f12064b;

        public a(AnalyticsListener.EventTime eventTime, Exception exc) {
            this.f12063a = eventTime;
            this.f12064b = exc;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || a.class != obj.getClass()) {
                return false;
            }
            a aVar = (a) obj;
            if (!this.f12063a.equals(aVar.f12063a)) {
                return false;
            }
            return this.f12064b.equals(aVar.f12064b);
        }

        public int hashCode() {
            return (this.f12063a.hashCode() * 31) + this.f12064b.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final AnalyticsListener.EventTime f12065a;

        /* renamed from: b  reason: collision with root package name */
        public final Format f12066b;

        public b(AnalyticsListener.EventTime eventTime, Format format) {
            this.f12065a = eventTime;
            this.f12066b = format;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && b.class == obj.getClass()) {
                b bVar = (b) obj;
                if (!this.f12065a.equals(bVar.f12065a)) {
                    return false;
                }
                Format format = this.f12066b;
                Format format2 = bVar.f12066b;
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
            int hashCode = this.f12065a.hashCode() * 31;
            Format format = this.f12066b;
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
        public final AnalyticsListener.EventTime f12067a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12068b;

        public c(AnalyticsListener.EventTime eventTime, int i10) {
            this.f12067a = eventTime;
            this.f12068b = i10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null || c.class != obj.getClass()) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f12068b != cVar.f12068b) {
                return false;
            }
            return this.f12067a.equals(cVar.f12067a);
        }

        public int hashCode() {
            return (this.f12067a.hashCode() * 31) + this.f12068b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PlaybackStats(int i10, long[] jArr, List list, List list2, long j10, int i11, int i12, int i13, int i14, long j11, int i15, int i16, int i17, int i18, int i19, long j12, int i20, List list3, List list4, long j13, long j14, long j15, long j16, long j17, long j18, int i21, int i22, int i23, long j19, int i24, long j20, long j21, long j22, long j23, long j24, int i25, int i26, int i27, List list5, List list6) {
        this.f12037a = i10;
        this.N = jArr;
        this.f12038b = Collections.unmodifiableList(list);
        this.f12039c = Collections.unmodifiableList(list2);
        this.f12040d = j10;
        this.f12041e = i11;
        this.f12042f = i12;
        this.f12043g = i13;
        this.f12044h = i14;
        this.f12045i = j11;
        this.f12046j = i15;
        this.f12047k = i16;
        this.f12048l = i17;
        this.f12049m = i18;
        this.f12050n = i19;
        this.f12051o = j12;
        this.f12052p = i20;
        this.f12053q = Collections.unmodifiableList(list3);
        this.f12054r = Collections.unmodifiableList(list4);
        this.f12055s = j13;
        this.f12056t = j14;
        this.f12057u = j15;
        this.f12058v = j16;
        this.f12059w = j17;
        this.f12060x = j18;
        this.f12061y = i21;
        this.f12062z = i22;
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
            i11 += playbackStats.f12037a;
            for (int i30 = 0; i30 < 16; i30++) {
                jArr[i30] = jArr[i30] + playbackStats.N[i30];
            }
            if (j23 == -9223372036854775807L) {
                j23 = playbackStats.f12040d;
            } else {
                long j25 = playbackStats.f12040d;
                if (j25 != -9223372036854775807L) {
                    j23 = Math.min(j23, j25);
                }
            }
            i27 += playbackStats.f12041e;
            i28 += playbackStats.f12042f;
            i29 += playbackStats.f12043g;
            i12 += playbackStats.f12044h;
            if (j24 == -9223372036854775807L) {
                j24 = playbackStats.f12045i;
            } else {
                long j26 = playbackStats.f12045i;
                if (j26 != -9223372036854775807L) {
                    j24 += j26;
                }
            }
            i13 += playbackStats.f12046j;
            i14 += playbackStats.f12047k;
            i15 += playbackStats.f12048l;
            i16 += playbackStats.f12049m;
            i17 += playbackStats.f12050n;
            if (j22 == -9223372036854775807L) {
                j22 = playbackStats.f12051o;
            } else {
                long j27 = playbackStats.f12051o;
                if (j27 != -9223372036854775807L) {
                    j22 = Math.max(j22, j27);
                }
            }
            i18 += playbackStats.f12052p;
            j10 += playbackStats.f12055s;
            j11 += playbackStats.f12056t;
            j12 += playbackStats.f12057u;
            j13 += playbackStats.f12058v;
            j14 += playbackStats.f12059w;
            j15 += playbackStats.f12060x;
            i19 += playbackStats.f12061y;
            i20 += playbackStats.f12062z;
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
