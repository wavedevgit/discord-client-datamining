package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import rd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f13378t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f13379a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f13380b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13381c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13382d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13383e;

    /* renamed from: f  reason: collision with root package name */
    public final j f13384f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13385g;

    /* renamed from: h  reason: collision with root package name */
    public final rd.w0 f13386h;

    /* renamed from: i  reason: collision with root package name */
    public final ke.r f13387i;

    /* renamed from: j  reason: collision with root package name */
    public final List f13388j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f13389k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f13390l;

    /* renamed from: m  reason: collision with root package name */
    public final int f13391m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f13392n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f13393o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f13394p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f13395q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f13396r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f13397s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, rd.w0 w0Var, ke.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f13379a = timeline;
        this.f13380b = bVar;
        this.f13381c = j10;
        this.f13382d = j11;
        this.f13383e = i10;
        this.f13384f = jVar;
        this.f13385g = z10;
        this.f13386h = w0Var;
        this.f13387i = rVar;
        this.f13388j = list;
        this.f13389k = bVar2;
        this.f13390l = z11;
        this.f13391m = i11;
        this.f13392n = playbackParameters;
        this.f13394p = j12;
        this.f13395q = j13;
        this.f13396r = j14;
        this.f13397s = j15;
        this.f13393o = z12;
    }

    public static r1 k(ke.r rVar) {
        Timeline timeline = Timeline.f12582d;
        r.b bVar = f13378t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, rd.w0.f47078o, rVar, qi.s.t(), bVar, false, 0, PlaybackParameters.f12550o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f13378t;
    }

    public r1 a() {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, m(), SystemClock.elapsedRealtime(), this.f13393o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, z10, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, bVar, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, rd.w0 w0Var, ke.r rVar, List list) {
        return new r1(this.f13379a, bVar, j11, j12, this.f13383e, this.f13384f, this.f13385g, w0Var, rVar, list, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, j13, j10, SystemClock.elapsedRealtime(), this.f13393o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, z10, i10, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public r1 f(j jVar) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, jVar, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, playbackParameters, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public r1 h(int i10) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, i10, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f13379a, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f13380b, this.f13381c, this.f13382d, this.f13383e, this.f13384f, this.f13385g, this.f13386h, this.f13387i, this.f13388j, this.f13389k, this.f13390l, this.f13391m, this.f13392n, this.f13394p, this.f13395q, this.f13396r, this.f13397s, this.f13393o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f13396r;
        }
        do {
            j10 = this.f13397s;
            j11 = this.f13396r;
        } while (j10 != this.f13397s);
        return oe.w0.K0(oe.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f13392n.f12554d));
    }

    public boolean n() {
        if (this.f13383e == 3 && this.f13390l && this.f13391m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f13396r = j10;
        this.f13397s = SystemClock.elapsedRealtime();
    }
}
