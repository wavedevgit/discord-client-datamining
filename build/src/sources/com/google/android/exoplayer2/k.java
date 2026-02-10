package com.google.android.exoplayer2;

import android.content.Context;
import android.os.Looper;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.h;
import com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k {
    boolean A;
    Looper B;
    boolean C;

    /* renamed from: a  reason: collision with root package name */
    final Context f13293a;

    /* renamed from: b  reason: collision with root package name */
    oe.e f13294b;

    /* renamed from: c  reason: collision with root package name */
    long f13295c;

    /* renamed from: d  reason: collision with root package name */
    pi.r f13296d;

    /* renamed from: e  reason: collision with root package name */
    pi.r f13297e;

    /* renamed from: f  reason: collision with root package name */
    pi.r f13298f;

    /* renamed from: g  reason: collision with root package name */
    pi.r f13299g;

    /* renamed from: h  reason: collision with root package name */
    pi.r f13300h;

    /* renamed from: i  reason: collision with root package name */
    pi.f f13301i;

    /* renamed from: j  reason: collision with root package name */
    Looper f13302j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f13303k;

    /* renamed from: l  reason: collision with root package name */
    boolean f13304l;

    /* renamed from: m  reason: collision with root package name */
    int f13305m;

    /* renamed from: n  reason: collision with root package name */
    boolean f13306n;

    /* renamed from: o  reason: collision with root package name */
    boolean f13307o;

    /* renamed from: p  reason: collision with root package name */
    boolean f13308p;

    /* renamed from: q  reason: collision with root package name */
    int f13309q;

    /* renamed from: r  reason: collision with root package name */
    int f13310r;

    /* renamed from: s  reason: collision with root package name */
    boolean f13311s;

    /* renamed from: t  reason: collision with root package name */
    mc.t0 f13312t;

    /* renamed from: u  reason: collision with root package name */
    long f13313u;

    /* renamed from: v  reason: collision with root package name */
    long f13314v;

    /* renamed from: w  reason: collision with root package name */
    v0 f13315w;

    /* renamed from: x  reason: collision with root package name */
    long f13316x;

    /* renamed from: y  reason: collision with root package name */
    long f13317y;

    /* renamed from: z  reason: collision with root package name */
    boolean f13318z;

    public k(final Context context, final mc.s0 s0Var) {
        this(context, new pi.r() { // from class: mc.l
            @Override // pi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.b(s0.this);
            }
        }, new pi.r() { // from class: mc.m
            @Override // pi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.d(context);
            }
        });
        oe.a.e(s0Var);
    }

    public static /* synthetic */ ke.q a(ke.q qVar) {
        return qVar;
    }

    public static /* synthetic */ mc.s0 b(mc.s0 s0Var) {
        return s0Var;
    }

    public static /* synthetic */ r.a d(Context context) {
        return new rd.j(context, new uc.h());
    }

    public static /* synthetic */ me.e e(me.e eVar) {
        return eVar;
    }

    public static /* synthetic */ ke.q f(Context context) {
        return new DefaultTrackSelector(context);
    }

    public static /* synthetic */ mc.a0 g(mc.a0 a0Var) {
        return a0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SimpleExoPlayer h() {
        oe.a.g(!this.C);
        this.C = true;
        return new SimpleExoPlayer(this);
    }

    public k i(final me.e eVar) {
        oe.a.g(!this.C);
        oe.a.e(eVar);
        this.f13300h = new pi.r() { // from class: mc.n
            @Override // pi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.e(me.e.this);
            }
        };
        return this;
    }

    public k j(final mc.a0 a0Var) {
        oe.a.g(!this.C);
        oe.a.e(a0Var);
        this.f13299g = new pi.r() { // from class: mc.j
            @Override // pi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.g(a0.this);
            }
        };
        return this;
    }

    public k k(final ke.q qVar) {
        oe.a.g(!this.C);
        oe.a.e(qVar);
        this.f13298f = new pi.r() { // from class: mc.k
            @Override // pi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.a(ke.q.this);
            }
        };
        return this;
    }

    private k(final Context context, pi.r rVar, pi.r rVar2) {
        this(context, rVar, rVar2, new pi.r() { // from class: mc.o
            @Override // pi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.f(context);
            }
        }, new pi.r() { // from class: mc.p
            @Override // pi.r
            public final Object get() {
                return new e();
            }
        }, new pi.r() { // from class: mc.q
            @Override // pi.r
            public final Object get() {
                me.e n10;
                n10 = me.r.n(context);
                return n10;
            }
        }, new pi.f() { // from class: mc.r
            @Override // pi.f
            public final Object apply(Object obj) {
                return new com.google.android.exoplayer2.analytics.a((oe.e) obj);
            }
        });
    }

    private k(Context context, pi.r rVar, pi.r rVar2, pi.r rVar3, pi.r rVar4, pi.r rVar5, pi.f fVar) {
        this.f13293a = (Context) oe.a.e(context);
        this.f13296d = rVar;
        this.f13297e = rVar2;
        this.f13298f = rVar3;
        this.f13299g = rVar4;
        this.f13300h = rVar5;
        this.f13301i = fVar;
        this.f13302j = oe.w0.R();
        this.f13303k = AudioAttributes.f12791r;
        this.f13305m = 0;
        this.f13309q = 1;
        this.f13310r = 0;
        this.f13311s = true;
        this.f13312t = mc.t0.f36275g;
        this.f13313u = 5000L;
        this.f13314v = 15000L;
        this.f13315w = new h.b().a();
        this.f13294b = oe.e.f38930a;
        this.f13316x = 500L;
        this.f13317y = 2000L;
        this.A = true;
    }
}
