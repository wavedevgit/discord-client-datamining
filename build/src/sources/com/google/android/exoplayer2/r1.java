package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f13346t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f13347a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f13348b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13349c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13350d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13351e;

    /* renamed from: f  reason: collision with root package name */
    public final j f13352f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13353g;

    /* renamed from: h  reason: collision with root package name */
    public final qd.w0 f13354h;

    /* renamed from: i  reason: collision with root package name */
    public final je.r f13355i;

    /* renamed from: j  reason: collision with root package name */
    public final List f13356j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f13357k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f13358l;

    /* renamed from: m  reason: collision with root package name */
    public final int f13359m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f13360n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f13361o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f13362p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f13363q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f13364r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f13365s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, qd.w0 w0Var, je.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f13347a = timeline;
        this.f13348b = bVar;
        this.f13349c = j10;
        this.f13350d = j11;
        this.f13351e = i10;
        this.f13352f = jVar;
        this.f13353g = z10;
        this.f13354h = w0Var;
        this.f13355i = rVar;
        this.f13356j = list;
        this.f13357k = bVar2;
        this.f13358l = z11;
        this.f13359m = i11;
        this.f13360n = playbackParameters;
        this.f13362p = j12;
        this.f13363q = j13;
        this.f13364r = j14;
        this.f13365s = j15;
        this.f13361o = z12;
    }

    public static r1 k(je.r rVar) {
        Timeline timeline = Timeline.f12612d;
        r.b bVar = f13346t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, qd.w0.f47627o, rVar, ji.s.r(), bVar, false, 0, PlaybackParameters.f12580o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f13346t;
    }

    public r1 a() {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, m(), SystemClock.elapsedRealtime(), this.f13361o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, z10, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, bVar, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, qd.w0 w0Var, je.r rVar, List list) {
        return new r1(this.f13347a, bVar, j11, j12, this.f13351e, this.f13352f, this.f13353g, w0Var, rVar, list, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, j13, j10, SystemClock.elapsedRealtime(), this.f13361o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, z10, i10, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public r1 f(j jVar) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, jVar, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, playbackParameters, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public r1 h(int i10) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, i10, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f13347a, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f13348b, this.f13349c, this.f13350d, this.f13351e, this.f13352f, this.f13353g, this.f13354h, this.f13355i, this.f13356j, this.f13357k, this.f13358l, this.f13359m, this.f13360n, this.f13362p, this.f13363q, this.f13364r, this.f13365s, this.f13361o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f13364r;
        }
        do {
            j10 = this.f13365s;
            j11 = this.f13364r;
        } while (j10 != this.f13365s);
        return ne.w0.K0(ne.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f13360n.f12584d));
    }

    public boolean n() {
        if (this.f13351e == 3 && this.f13358l && this.f13359m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f13364r = j10;
        this.f13365s = SystemClock.elapsedRealtime();
    }
}
