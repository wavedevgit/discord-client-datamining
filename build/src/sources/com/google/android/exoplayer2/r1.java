package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f12314t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f12315a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f12316b;

    /* renamed from: c  reason: collision with root package name */
    public final long f12317c;

    /* renamed from: d  reason: collision with root package name */
    public final long f12318d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12319e;

    /* renamed from: f  reason: collision with root package name */
    public final j f12320f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f12321g;

    /* renamed from: h  reason: collision with root package name */
    public final qd.w0 f12322h;

    /* renamed from: i  reason: collision with root package name */
    public final je.r f12323i;

    /* renamed from: j  reason: collision with root package name */
    public final List f12324j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f12325k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f12326l;

    /* renamed from: m  reason: collision with root package name */
    public final int f12327m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f12328n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f12329o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f12330p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f12331q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f12332r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f12333s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, qd.w0 w0Var, je.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f12315a = timeline;
        this.f12316b = bVar;
        this.f12317c = j10;
        this.f12318d = j11;
        this.f12319e = i10;
        this.f12320f = jVar;
        this.f12321g = z10;
        this.f12322h = w0Var;
        this.f12323i = rVar;
        this.f12324j = list;
        this.f12325k = bVar2;
        this.f12326l = z11;
        this.f12327m = i11;
        this.f12328n = playbackParameters;
        this.f12330p = j12;
        this.f12331q = j13;
        this.f12332r = j14;
        this.f12333s = j15;
        this.f12329o = z12;
    }

    public static r1 k(je.r rVar) {
        Timeline timeline = Timeline.f11580d;
        r.b bVar = f12314t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, qd.w0.f47777o, rVar, ji.s.r(), bVar, false, 0, PlaybackParameters.f11548o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f12314t;
    }

    public r1 a() {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, m(), SystemClock.elapsedRealtime(), this.f12329o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, z10, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, bVar, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, qd.w0 w0Var, je.r rVar, List list) {
        return new r1(this.f12315a, bVar, j11, j12, this.f12319e, this.f12320f, this.f12321g, w0Var, rVar, list, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, j13, j10, SystemClock.elapsedRealtime(), this.f12329o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, z10, i10, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public r1 f(j jVar) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, jVar, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, playbackParameters, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public r1 h(int i10) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, i10, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f12315a, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f12316b, this.f12317c, this.f12318d, this.f12319e, this.f12320f, this.f12321g, this.f12322h, this.f12323i, this.f12324j, this.f12325k, this.f12326l, this.f12327m, this.f12328n, this.f12330p, this.f12331q, this.f12332r, this.f12333s, this.f12329o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f12332r;
        }
        do {
            j10 = this.f12333s;
            j11 = this.f12332r;
        } while (j10 != this.f12333s);
        return ne.w0.K0(ne.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f12328n.f11552d));
    }

    public boolean n() {
        if (this.f12319e == 3 && this.f12326l && this.f12327m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f12332r = j10;
        this.f12333s = SystemClock.elapsedRealtime();
    }
}
