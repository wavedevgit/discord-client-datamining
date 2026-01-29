package com.google.android.exoplayer2;

import android.content.Context;
import android.os.Looper;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.h;
import com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {
    boolean A;
    Looper B;
    boolean C;

    /* renamed from: a  reason: collision with root package name */
    final Context f13633a;

    /* renamed from: b  reason: collision with root package name */
    ne.e f13634b;

    /* renamed from: c  reason: collision with root package name */
    long f13635c;

    /* renamed from: d  reason: collision with root package name */
    ii.r f13636d;

    /* renamed from: e  reason: collision with root package name */
    ii.r f13637e;

    /* renamed from: f  reason: collision with root package name */
    ii.r f13638f;

    /* renamed from: g  reason: collision with root package name */
    ii.r f13639g;

    /* renamed from: h  reason: collision with root package name */
    ii.r f13640h;

    /* renamed from: i  reason: collision with root package name */
    ii.f f13641i;

    /* renamed from: j  reason: collision with root package name */
    Looper f13642j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f13643k;

    /* renamed from: l  reason: collision with root package name */
    boolean f13644l;

    /* renamed from: m  reason: collision with root package name */
    int f13645m;

    /* renamed from: n  reason: collision with root package name */
    boolean f13646n;

    /* renamed from: o  reason: collision with root package name */
    boolean f13647o;

    /* renamed from: p  reason: collision with root package name */
    boolean f13648p;

    /* renamed from: q  reason: collision with root package name */
    int f13649q;

    /* renamed from: r  reason: collision with root package name */
    int f13650r;

    /* renamed from: s  reason: collision with root package name */
    boolean f13651s;

    /* renamed from: t  reason: collision with root package name */
    lc.t0 f13652t;

    /* renamed from: u  reason: collision with root package name */
    long f13653u;

    /* renamed from: v  reason: collision with root package name */
    long f13654v;

    /* renamed from: w  reason: collision with root package name */
    v0 f13655w;

    /* renamed from: x  reason: collision with root package name */
    long f13656x;

    /* renamed from: y  reason: collision with root package name */
    long f13657y;

    /* renamed from: z  reason: collision with root package name */
    boolean f13658z;

    public k(final Context context, final lc.s0 s0Var) {
        this(context, new ii.r() { // from class: lc.l
            @Override // ii.r
            public final Object get() {
                return com.google.android.exoplayer2.k.b(s0.this);
            }
        }, new ii.r() { // from class: lc.m
            @Override // ii.r
            public final Object get() {
                return com.google.android.exoplayer2.k.d(context);
            }
        });
        ne.a.e(s0Var);
    }

    public static /* synthetic */ je.q a(je.q qVar) {
        return qVar;
    }

    public static /* synthetic */ lc.s0 b(lc.s0 s0Var) {
        return s0Var;
    }

    public static /* synthetic */ r.a d(Context context) {
        return new qd.j(context, new tc.h());
    }

    public static /* synthetic */ le.e e(le.e eVar) {
        return eVar;
    }

    public static /* synthetic */ je.q f(Context context) {
        return new DefaultTrackSelector(context);
    }

    public static /* synthetic */ lc.a0 g(lc.a0 a0Var) {
        return a0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleExoPlayer h() {
        ne.a.g(!this.C);
        this.C = true;
        return new SimpleExoPlayer(this);
    }

    public k i(final le.e eVar) {
        ne.a.g(!this.C);
        ne.a.e(eVar);
        this.f13640h = new ii.r() { // from class: lc.n
            @Override // ii.r
            public final Object get() {
                return com.google.android.exoplayer2.k.e(le.e.this);
            }
        };
        return this;
    }

    public k j(final lc.a0 a0Var) {
        ne.a.g(!this.C);
        ne.a.e(a0Var);
        this.f13639g = new ii.r() { // from class: lc.j
            @Override // ii.r
            public final Object get() {
                return com.google.android.exoplayer2.k.g(a0.this);
            }
        };
        return this;
    }

    public k k(final je.q qVar) {
        ne.a.g(!this.C);
        ne.a.e(qVar);
        this.f13638f = new ii.r() { // from class: lc.k
            @Override // ii.r
            public final Object get() {
                return com.google.android.exoplayer2.k.a(je.q.this);
            }
        };
        return this;
    }

    private k(final Context context, ii.r rVar, ii.r rVar2) {
        this(context, rVar, rVar2, new ii.r() { // from class: lc.o
            @Override // ii.r
            public final Object get() {
                return com.google.android.exoplayer2.k.f(context);
            }
        }, new ii.r() { // from class: lc.p
            @Override // ii.r
            public final Object get() {
                return new e();
            }
        }, new ii.r() { // from class: lc.q
            @Override // ii.r
            public final Object get() {
                le.e n10;
                n10 = le.r.n(context);
                return n10;
            }
        }, new ii.f() { // from class: lc.r
            @Override // ii.f
            public final Object apply(Object obj) {
                return new com.google.android.exoplayer2.analytics.a((ne.e) obj);
            }
        });
    }

    private k(Context context, ii.r rVar, ii.r rVar2, ii.r rVar3, ii.r rVar4, ii.r rVar5, ii.f fVar) {
        this.f13633a = (Context) ne.a.e(context);
        this.f13636d = rVar;
        this.f13637e = rVar2;
        this.f13638f = rVar3;
        this.f13639g = rVar4;
        this.f13640h = rVar5;
        this.f13641i = fVar;
        this.f13642j = ne.w0.R();
        this.f13643k = AudioAttributes.f13193r;
        this.f13645m = 0;
        this.f13649q = 1;
        this.f13650r = 0;
        this.f13651s = true;
        this.f13652t = lc.t0.f37103g;
        this.f13653u = 5000L;
        this.f13654v = 15000L;
        this.f13655w = new h.b().a();
        this.f13634b = ne.e.f40172a;
        this.f13656x = 500L;
        this.f13657y = 2000L;
        this.A = true;
    }
}
