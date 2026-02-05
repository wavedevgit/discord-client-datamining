package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f12699t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f12700a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f12701b;

    /* renamed from: c  reason: collision with root package name */
    public final long f12702c;

    /* renamed from: d  reason: collision with root package name */
    public final long f12703d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12704e;

    /* renamed from: f  reason: collision with root package name */
    public final j f12705f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f12706g;

    /* renamed from: h  reason: collision with root package name */
    public final qd.w0 f12707h;

    /* renamed from: i  reason: collision with root package name */
    public final je.r f12708i;

    /* renamed from: j  reason: collision with root package name */
    public final List f12709j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f12710k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f12711l;

    /* renamed from: m  reason: collision with root package name */
    public final int f12712m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f12713n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f12714o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f12715p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f12716q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f12717r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f12718s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, qd.w0 w0Var, je.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f12700a = timeline;
        this.f12701b = bVar;
        this.f12702c = j10;
        this.f12703d = j11;
        this.f12704e = i10;
        this.f12705f = jVar;
        this.f12706g = z10;
        this.f12707h = w0Var;
        this.f12708i = rVar;
        this.f12709j = list;
        this.f12710k = bVar2;
        this.f12711l = z11;
        this.f12712m = i11;
        this.f12713n = playbackParameters;
        this.f12715p = j12;
        this.f12716q = j13;
        this.f12717r = j14;
        this.f12718s = j15;
        this.f12714o = z12;
    }

    public static r1 k(je.r rVar) {
        Timeline timeline = Timeline.f11965d;
        r.b bVar = f12699t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, qd.w0.f47841o, rVar, mi.s.s(), bVar, false, 0, PlaybackParameters.f11933o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f12699t;
    }

    public r1 a() {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, m(), SystemClock.elapsedRealtime(), this.f12714o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, z10, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, bVar, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, qd.w0 w0Var, je.r rVar, List list) {
        return new r1(this.f12700a, bVar, j11, j12, this.f12704e, this.f12705f, this.f12706g, w0Var, rVar, list, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, j13, j10, SystemClock.elapsedRealtime(), this.f12714o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, z10, i10, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public r1 f(j jVar) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, jVar, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, playbackParameters, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public r1 h(int i10) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, i10, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f12700a, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f12701b, this.f12702c, this.f12703d, this.f12704e, this.f12705f, this.f12706g, this.f12707h, this.f12708i, this.f12709j, this.f12710k, this.f12711l, this.f12712m, this.f12713n, this.f12715p, this.f12716q, this.f12717r, this.f12718s, this.f12714o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f12717r;
        }
        do {
            j10 = this.f12718s;
            j11 = this.f12717r;
        } while (j10 != this.f12718s);
        return ne.w0.K0(ne.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f12713n.f11937d));
    }

    public boolean n() {
        if (this.f12704e == 3 && this.f12711l && this.f12712m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f12717r = j10;
        this.f12718s = SystemClock.elapsedRealtime();
    }
}
