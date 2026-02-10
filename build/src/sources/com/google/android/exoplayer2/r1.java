package com.google.android.exoplayer2;

import android.os.SystemClock;
import java.util.List;
import rd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 {

    /* renamed from: t  reason: collision with root package name */
    private static final r.b f13377t = new r.b(new Object());

    /* renamed from: a  reason: collision with root package name */
    public final Timeline f13378a;

    /* renamed from: b  reason: collision with root package name */
    public final r.b f13379b;

    /* renamed from: c  reason: collision with root package name */
    public final long f13380c;

    /* renamed from: d  reason: collision with root package name */
    public final long f13381d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13382e;

    /* renamed from: f  reason: collision with root package name */
    public final j f13383f;

    /* renamed from: g  reason: collision with root package name */
    public final boolean f13384g;

    /* renamed from: h  reason: collision with root package name */
    public final rd.w0 f13385h;

    /* renamed from: i  reason: collision with root package name */
    public final ke.r f13386i;

    /* renamed from: j  reason: collision with root package name */
    public final List f13387j;

    /* renamed from: k  reason: collision with root package name */
    public final r.b f13388k;

    /* renamed from: l  reason: collision with root package name */
    public final boolean f13389l;

    /* renamed from: m  reason: collision with root package name */
    public final int f13390m;

    /* renamed from: n  reason: collision with root package name */
    public final PlaybackParameters f13391n;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f13392o;

    /* renamed from: p  reason: collision with root package name */
    public volatile long f13393p;

    /* renamed from: q  reason: collision with root package name */
    public volatile long f13394q;

    /* renamed from: r  reason: collision with root package name */
    public volatile long f13395r;

    /* renamed from: s  reason: collision with root package name */
    public volatile long f13396s;

    public r1(Timeline timeline, r.b bVar, long j10, long j11, int i10, j jVar, boolean z10, rd.w0 w0Var, ke.r rVar, List list, r.b bVar2, boolean z11, int i11, PlaybackParameters playbackParameters, long j12, long j13, long j14, long j15, boolean z12) {
        this.f13378a = timeline;
        this.f13379b = bVar;
        this.f13380c = j10;
        this.f13381d = j11;
        this.f13382e = i10;
        this.f13383f = jVar;
        this.f13384g = z10;
        this.f13385h = w0Var;
        this.f13386i = rVar;
        this.f13387j = list;
        this.f13388k = bVar2;
        this.f13389l = z11;
        this.f13390m = i11;
        this.f13391n = playbackParameters;
        this.f13393p = j12;
        this.f13394q = j13;
        this.f13395r = j14;
        this.f13396s = j15;
        this.f13392o = z12;
    }

    public static r1 k(ke.r rVar) {
        Timeline timeline = Timeline.f12581d;
        r.b bVar = f13377t;
        return new r1(timeline, bVar, -9223372036854775807L, 0L, 1, null, false, rd.w0.f46509o, rVar, qi.s.t(), bVar, false, 0, PlaybackParameters.f12549o, 0L, 0L, 0L, 0L, false);
    }

    public static r.b l() {
        return f13377t;
    }

    public r1 a() {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, m(), SystemClock.elapsedRealtime(), this.f13392o);
    }

    public r1 b(boolean z10) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, z10, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public r1 c(r.b bVar) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, bVar, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public r1 d(r.b bVar, long j10, long j11, long j12, long j13, rd.w0 w0Var, ke.r rVar, List list) {
        return new r1(this.f13378a, bVar, j11, j12, this.f13382e, this.f13383f, this.f13384g, w0Var, rVar, list, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, j13, j10, SystemClock.elapsedRealtime(), this.f13392o);
    }

    public r1 e(boolean z10, int i10) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, z10, i10, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public r1 f(j jVar) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, jVar, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public r1 g(PlaybackParameters playbackParameters) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, playbackParameters, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public r1 h(int i10) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, i10, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public r1 i(boolean z10) {
        return new r1(this.f13378a, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, z10);
    }

    public r1 j(Timeline timeline) {
        return new r1(timeline, this.f13379b, this.f13380c, this.f13381d, this.f13382e, this.f13383f, this.f13384g, this.f13385h, this.f13386i, this.f13387j, this.f13388k, this.f13389l, this.f13390m, this.f13391n, this.f13393p, this.f13394q, this.f13395r, this.f13396s, this.f13392o);
    }

    public long m() {
        long j10;
        long j11;
        if (!n()) {
            return this.f13395r;
        }
        do {
            j10 = this.f13396s;
            j11 = this.f13395r;
        } while (j10 != this.f13396s);
        return oe.w0.K0(oe.w0.p1(j11) + (((float) (SystemClock.elapsedRealtime() - j10)) * this.f13391n.f12553d));
    }

    public boolean n() {
        if (this.f13382e == 3 && this.f13389l && this.f13390m == 0) {
            return true;
        }
        return false;
    }

    public void o(long j10) {
        this.f13395r = j10;
        this.f13396s = SystemClock.elapsedRealtime();
    }
}
