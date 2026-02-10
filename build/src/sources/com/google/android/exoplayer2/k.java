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
    final Context f12716a;

    /* renamed from: b  reason: collision with root package name */
    oe.e f12717b;

    /* renamed from: c  reason: collision with root package name */
    long f12718c;

    /* renamed from: d  reason: collision with root package name */
    ni.r f12719d;

    /* renamed from: e  reason: collision with root package name */
    ni.r f12720e;

    /* renamed from: f  reason: collision with root package name */
    ni.r f12721f;

    /* renamed from: g  reason: collision with root package name */
    ni.r f12722g;

    /* renamed from: h  reason: collision with root package name */
    ni.r f12723h;

    /* renamed from: i  reason: collision with root package name */
    ni.f f12724i;

    /* renamed from: j  reason: collision with root package name */
    Looper f12725j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f12726k;

    /* renamed from: l  reason: collision with root package name */
    boolean f12727l;

    /* renamed from: m  reason: collision with root package name */
    int f12728m;

    /* renamed from: n  reason: collision with root package name */
    boolean f12729n;

    /* renamed from: o  reason: collision with root package name */
    boolean f12730o;

    /* renamed from: p  reason: collision with root package name */
    boolean f12731p;

    /* renamed from: q  reason: collision with root package name */
    int f12732q;

    /* renamed from: r  reason: collision with root package name */
    int f12733r;

    /* renamed from: s  reason: collision with root package name */
    boolean f12734s;

    /* renamed from: t  reason: collision with root package name */
    mc.t0 f12735t;

    /* renamed from: u  reason: collision with root package name */
    long f12736u;

    /* renamed from: v  reason: collision with root package name */
    long f12737v;

    /* renamed from: w  reason: collision with root package name */
    v0 f12738w;

    /* renamed from: x  reason: collision with root package name */
    long f12739x;

    /* renamed from: y  reason: collision with root package name */
    long f12740y;

    /* renamed from: z  reason: collision with root package name */
    boolean f12741z;

    public k(final Context context, final mc.s0 s0Var) {
        this(context, new ni.r() { // from class: mc.l
            @Override // ni.r
            public final Object get() {
                return com.google.android.exoplayer2.k.b(s0.this);
            }
        }, new ni.r() { // from class: mc.m
            @Override // ni.r
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
        this.f12723h = new ni.r() { // from class: mc.n
            @Override // ni.r
            public final Object get() {
                return com.google.android.exoplayer2.k.e(me.e.this);
            }
        };
        return this;
    }

    public k j(final mc.a0 a0Var) {
        oe.a.g(!this.C);
        oe.a.e(a0Var);
        this.f12722g = new ni.r() { // from class: mc.j
            @Override // ni.r
            public final Object get() {
                return com.google.android.exoplayer2.k.g(a0.this);
            }
        };
        return this;
    }

    public k k(final ke.q qVar) {
        oe.a.g(!this.C);
        oe.a.e(qVar);
        this.f12721f = new ni.r() { // from class: mc.k
            @Override // ni.r
            public final Object get() {
                return com.google.android.exoplayer2.k.a(ke.q.this);
            }
        };
        return this;
    }

    private k(final Context context, ni.r rVar, ni.r rVar2) {
        this(context, rVar, rVar2, new ni.r() { // from class: mc.o
            @Override // ni.r
            public final Object get() {
                return com.google.android.exoplayer2.k.f(context);
            }
        }, new ni.r() { // from class: mc.p
            @Override // ni.r
            public final Object get() {
                return new e();
            }
        }, new ni.r() { // from class: mc.q
            @Override // ni.r
            public final Object get() {
                me.e n10;
                n10 = me.r.n(context);
                return n10;
            }
        }, new ni.f() { // from class: mc.r
            @Override // ni.f
            public final Object apply(Object obj) {
                return new com.google.android.exoplayer2.analytics.a((oe.e) obj);
            }
        });
    }

    private k(Context context, ni.r rVar, ni.r rVar2, ni.r rVar3, ni.r rVar4, ni.r rVar5, ni.f fVar) {
        this.f12716a = (Context) oe.a.e(context);
        this.f12719d = rVar;
        this.f12720e = rVar2;
        this.f12721f = rVar3;
        this.f12722g = rVar4;
        this.f12723h = rVar5;
        this.f12724i = fVar;
        this.f12725j = oe.w0.R();
        this.f12726k = AudioAttributes.f12214r;
        this.f12728m = 0;
        this.f12732q = 1;
        this.f12733r = 0;
        this.f12734s = true;
        this.f12735t = mc.t0.f36900g;
        this.f12736u = 5000L;
        this.f12737v = 15000L;
        this.f12738w = new h.b().a();
        this.f12717b = oe.e.f40604a;
        this.f12739x = 500L;
        this.f12740y = 2000L;
        this.A = true;
    }
}
