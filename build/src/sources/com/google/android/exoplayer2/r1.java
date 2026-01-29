package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f13717t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f13718a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f13719b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13720c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13721d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13722e;

    /* renamed from: f  reason: collision with root package name */
    public final j f13723f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13724g;

    /* renamed from: h  reason: collision with root package name */
    public final qd.w0 f13725h;

    /* renamed from: i  reason: collision with root package name */
    public final je.r f13726i;

    /* renamed from: j  reason: collision with root package name */
    public final List f13727j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f13728k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f13729l;

    /* renamed from: m  reason: collision with root package name */
    public final int f13730m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f13731n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f13732o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f13733p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f13734q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f13735r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f13736s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, qd.w0 w0Var, je.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f13718a = timeline;
        this.f13719b = bVar;
        this.f13720c = j10;
        this.f13721d = j11;
        this.f13722e = i10;
        this.f13723f = jVar;
        this.f13724g = z10;
        this.f13725h = w0Var;
        this.f13726i = rVar;
        this.f13727j = list;
        this.f13728k = bVar2;
        this.f13729l = z11;
        this.f13730m = i11;
        this.f13731n = playbackParameters;
        this.f13733p = j12;
        this.f13734q = j13;
        this.f13735r = j14;
        this.f13736s = j15;
        this.f13732o = z12;
    }

    public static r1 k(je.r rVar) {
        Timeline timeline = Timeline.f12983d;
        r.b bVar = f13717t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, qd.w0.f47356o, rVar, ji.s.r(), bVar, false, 0, PlaybackParameters.f12951o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f13717t;
    }

    public r1 a() {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, m(), SystemClock.elapsedRealtime(), this.f13732o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, z10, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, bVar, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, qd.w0 w0Var, je.r rVar, List list) {
        return new r1(this.f13718a, bVar, j11, j12, this.f13722e, this.f13723f, this.f13724g, w0Var, rVar, list, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, j13, j10, SystemClock.elapsedRealtime(), this.f13732o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, z10, i10, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public r1 f(j jVar) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, jVar, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, playbackParameters, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public r1 h(int i10) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, i10, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f13718a, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f13719b, this.f13720c, this.f13721d, this.f13722e, this.f13723f, this.f13724g, this.f13725h, this.f13726i, this.f13727j, this.f13728k, this.f13729l, this.f13730m, this.f13731n, this.f13733p, this.f13734q, this.f13735r, this.f13736s, this.f13732o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f13735r;
        }
        do {
            j10 = this.f13736s;
            j11 = this.f13735r;
        } while (j10 != this.f13736s);
        return ne.w0.K0(ne.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f13731n.f12955d));
    }

    public boolean n() {
        if (this.f13722e == 3 && this.f13729l && this.f13730m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f13735r = j10;
        this.f13736s = SystemClock.elapsedRealtime();
    }
}
