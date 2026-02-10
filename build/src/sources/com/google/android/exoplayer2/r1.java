package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import rd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f12800t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f12801a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f12802b;

    /* renamed from: c  reason: collision with root package name */
    public final long f12803c;

    /* renamed from: d  reason: collision with root package name */
    public final long f12804d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12805e;

    /* renamed from: f  reason: collision with root package name */
    public final j f12806f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f12807g;

    /* renamed from: h  reason: collision with root package name */
    public final rd.w0 f12808h;

    /* renamed from: i  reason: collision with root package name */
    public final ke.r f12809i;

    /* renamed from: j  reason: collision with root package name */
    public final List f12810j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f12811k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f12812l;

    /* renamed from: m  reason: collision with root package name */
    public final int f12813m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f12814n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f12815o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f12816p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f12817q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f12818r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f12819s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, rd.w0 w0Var, ke.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f12801a = timeline;
        this.f12802b = bVar;
        this.f12803c = j10;
        this.f12804d = j11;
        this.f12805e = i10;
        this.f12806f = jVar;
        this.f12807g = z10;
        this.f12808h = w0Var;
        this.f12809i = rVar;
        this.f12810j = list;
        this.f12811k = bVar2;
        this.f12812l = z11;
        this.f12813m = i11;
        this.f12814n = playbackParameters;
        this.f12816p = j12;
        this.f12817q = j13;
        this.f12818r = j14;
        this.f12819s = j15;
        this.f12815o = z12;
    }

    public static r1 k(ke.r rVar) {
        Timeline timeline = Timeline.f12004d;
        r.b bVar = f12800t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, rd.w0.f48055o, rVar, oi.s.t(), bVar, false, 0, PlaybackParameters.f11972o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f12800t;
    }

    public r1 a() {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, m(), SystemClock.elapsedRealtime(), this.f12815o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, z10, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, bVar, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, rd.w0 w0Var, ke.r rVar, List list) {
        return new r1(this.f12801a, bVar, j11, j12, this.f12805e, this.f12806f, this.f12807g, w0Var, rVar, list, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, j13, j10, SystemClock.elapsedRealtime(), this.f12815o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, z10, i10, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public r1 f(j jVar) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, jVar, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, playbackParameters, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public r1 h(int i10) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, i10, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f12801a, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f12802b, this.f12803c, this.f12804d, this.f12805e, this.f12806f, this.f12807g, this.f12808h, this.f12809i, this.f12810j, this.f12811k, this.f12812l, this.f12813m, this.f12814n, this.f12816p, this.f12817q, this.f12818r, this.f12819s, this.f12815o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f12818r;
        }
        do {
            j10 = this.f12819s;
            j11 = this.f12818r;
        } while (j10 != this.f12819s);
        return oe.w0.K0(oe.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f12814n.f11976d));
    }

    public boolean n() {
        if (this.f12805e == 3 && this.f12812l && this.f12813m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f12818r = j10;
        this.f12819s = SystemClock.elapsedRealtime();
    }
}
