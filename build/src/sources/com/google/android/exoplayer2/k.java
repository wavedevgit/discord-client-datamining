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
    final Context f12576a;

    /* renamed from: b  reason: collision with root package name */
    ne.e f12577b;

    /* renamed from: c  reason: collision with root package name */
    long f12578c;

    /* renamed from: d  reason: collision with root package name */
    mi.r f12579d;

    /* renamed from: e  reason: collision with root package name */
    mi.r f12580e;

    /* renamed from: f  reason: collision with root package name */
    mi.r f12581f;

    /* renamed from: g  reason: collision with root package name */
    mi.r f12582g;

    /* renamed from: h  reason: collision with root package name */
    mi.r f12583h;

    /* renamed from: i  reason: collision with root package name */
    mi.f f12584i;

    /* renamed from: j  reason: collision with root package name */
    Looper f12585j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f12586k;

    /* renamed from: l  reason: collision with root package name */
    boolean f12587l;

    /* renamed from: m  reason: collision with root package name */
    int f12588m;

    /* renamed from: n  reason: collision with root package name */
    boolean f12589n;

    /* renamed from: o  reason: collision with root package name */
    boolean f12590o;

    /* renamed from: p  reason: collision with root package name */
    boolean f12591p;

    /* renamed from: q  reason: collision with root package name */
    int f12592q;

    /* renamed from: r  reason: collision with root package name */
    int f12593r;

    /* renamed from: s  reason: collision with root package name */
    boolean f12594s;

    /* renamed from: t  reason: collision with root package name */
    lc.t0 f12595t;

    /* renamed from: u  reason: collision with root package name */
    long f12596u;

    /* renamed from: v  reason: collision with root package name */
    long f12597v;

    /* renamed from: w  reason: collision with root package name */
    v0 f12598w;

    /* renamed from: x  reason: collision with root package name */
    long f12599x;

    /* renamed from: y  reason: collision with root package name */
    long f12600y;

    /* renamed from: z  reason: collision with root package name */
    boolean f12601z;

    public k(final Context context, final lc.s0 s0Var) {
        this(context, new mi.r() { // from class: lc.l
            @Override // mi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.b(s0.this);
            }
        }, new mi.r() { // from class: lc.m
            @Override // mi.r
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
        this.f12583h = new mi.r() { // from class: lc.n
            @Override // mi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.e(le.e.this);
            }
        };
        return this;
    }

    public k j(final lc.a0 a0Var) {
        ne.a.g(!this.C);
        ne.a.e(a0Var);
        this.f12582g = new mi.r() { // from class: lc.j
            @Override // mi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.g(a0.this);
            }
        };
        return this;
    }

    public k k(final je.q qVar) {
        ne.a.g(!this.C);
        ne.a.e(qVar);
        this.f12581f = new mi.r() { // from class: lc.k
            @Override // mi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.a(je.q.this);
            }
        };
        return this;
    }

    private k(final Context context, mi.r rVar, mi.r rVar2) {
        this(context, rVar, rVar2, new mi.r() { // from class: lc.o
            @Override // mi.r
            public final Object get() {
                return com.google.android.exoplayer2.k.f(context);
            }
        }, new mi.r() { // from class: lc.p
            @Override // mi.r
            public final Object get() {
                return new e();
            }
        }, new mi.r() { // from class: lc.q
            @Override // mi.r
            public final Object get() {
                le.e n10;
                n10 = le.r.n(context);
                return n10;
            }
        }, new mi.f() { // from class: lc.r
            @Override // mi.f
            public final Object apply(Object obj) {
                return new com.google.android.exoplayer2.analytics.a((ne.e) obj);
            }
        });
    }

    private k(Context context, mi.r rVar, mi.r rVar2, mi.r rVar3, mi.r rVar4, mi.r rVar5, mi.f fVar) {
        this.f12576a = (Context) ne.a.e(context);
        this.f12579d = rVar;
        this.f12580e = rVar2;
        this.f12581f = rVar3;
        this.f12582g = rVar4;
        this.f12583h = rVar5;
        this.f12584i = fVar;
        this.f12585j = ne.w0.R();
        this.f12586k = AudioAttributes.f12074r;
        this.f12588m = 0;
        this.f12592q = 1;
        this.f12593r = 0;
        this.f12594s = true;
        this.f12595t = lc.t0.f36022g;
        this.f12596u = 5000L;
        this.f12597v = 15000L;
        this.f12598w = new h.b().a();
        this.f12577b = ne.e.f38905a;
        this.f12599x = 500L;
        this.f12600y = 2000L;
        this.A = true;
    }
}
