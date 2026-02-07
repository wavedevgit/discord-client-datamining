package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f12660t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f12661a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f12662b;

    /* renamed from: c  reason: collision with root package name */
    public final long f12663c;

    /* renamed from: d  reason: collision with root package name */
    public final long f12664d;

    /* renamed from: e  reason: collision with root package name */
    public final int f12665e;

    /* renamed from: f  reason: collision with root package name */
    public final j f12666f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f12667g;

    /* renamed from: h  reason: collision with root package name */
    public final qd.w0 f12668h;

    /* renamed from: i  reason: collision with root package name */
    public final je.r f12669i;

    /* renamed from: j  reason: collision with root package name */
    public final List f12670j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f12671k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f12672l;

    /* renamed from: m  reason: collision with root package name */
    public final int f12673m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f12674n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f12675o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f12676p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f12677q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f12678r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f12679s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, qd.w0 w0Var, je.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f12661a = timeline;
        this.f12662b = bVar;
        this.f12663c = j10;
        this.f12664d = j11;
        this.f12665e = i10;
        this.f12666f = jVar;
        this.f12667g = z10;
        this.f12668h = w0Var;
        this.f12669i = rVar;
        this.f12670j = list;
        this.f12671k = bVar2;
        this.f12672l = z11;
        this.f12673m = i11;
        this.f12674n = playbackParameters;
        this.f12676p = j12;
        this.f12677q = j13;
        this.f12678r = j14;
        this.f12679s = j15;
        this.f12675o = z12;
    }

    public static r1 k(je.r rVar) {
        Timeline timeline = Timeline.f11864d;
        r.b bVar = f12660t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, qd.w0.f46937o, rVar, ni.s.t(), bVar, false, 0, PlaybackParameters.f11832o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f12660t;
    }

    public r1 a() {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, m(), SystemClock.elapsedRealtime(), this.f12675o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, z10, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, bVar, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, qd.w0 w0Var, je.r rVar, List list) {
        return new r1(this.f12661a, bVar, j11, j12, this.f12665e, this.f12666f, this.f12667g, w0Var, rVar, list, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, j13, j10, SystemClock.elapsedRealtime(), this.f12675o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, z10, i10, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public r1 f(j jVar) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, jVar, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, playbackParameters, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public r1 h(int i10) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, i10, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f12661a, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f12662b, this.f12663c, this.f12664d, this.f12665e, this.f12666f, this.f12667g, this.f12668h, this.f12669i, this.f12670j, this.f12671k, this.f12672l, this.f12673m, this.f12674n, this.f12676p, this.f12677q, this.f12678r, this.f12679s, this.f12675o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f12678r;
        }
        do {
            j10 = this.f12679s;
            j11 = this.f12678r;
        } while (j10 != this.f12679s);
        return ne.w0.K0(ne.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f12674n.f11836d));
    }

    public boolean n() {
        if (this.f12665e == 3 && this.f12672l && this.f12673m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f12678r = j10;
        this.f12679s = SystemClock.elapsedRealtime();
    }
}
