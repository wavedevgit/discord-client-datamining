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
    final Context f12230a;

    /* renamed from: b  reason: collision with root package name */
    ne.e f12231b;

    /* renamed from: c  reason: collision with root package name */
    long f12232c;

    /* renamed from: d  reason: collision with root package name */
    ii.r f12233d;

    /* renamed from: e  reason: collision with root package name */
    ii.r f12234e;

    /* renamed from: f  reason: collision with root package name */
    ii.r f12235f;

    /* renamed from: g  reason: collision with root package name */
    ii.r f12236g;

    /* renamed from: h  reason: collision with root package name */
    ii.r f12237h;

    /* renamed from: i  reason: collision with root package name */
    ii.f f12238i;

    /* renamed from: j  reason: collision with root package name */
    Looper f12239j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f12240k;

    /* renamed from: l  reason: collision with root package name */
    boolean f12241l;

    /* renamed from: m  reason: collision with root package name */
    int f12242m;

    /* renamed from: n  reason: collision with root package name */
    boolean f12243n;

    /* renamed from: o  reason: collision with root package name */
    boolean f12244o;

    /* renamed from: p  reason: collision with root package name */
    boolean f12245p;

    /* renamed from: q  reason: collision with root package name */
    int f12246q;

    /* renamed from: r  reason: collision with root package name */
    int f12247r;

    /* renamed from: s  reason: collision with root package name */
    boolean f12248s;

    /* renamed from: t  reason: collision with root package name */
    lc.t0 f12249t;

    /* renamed from: u  reason: collision with root package name */
    long f12250u;

    /* renamed from: v  reason: collision with root package name */
    long f12251v;

    /* renamed from: w  reason: collision with root package name */
    v0 f12252w;

    /* renamed from: x  reason: collision with root package name */
    long f12253x;

    /* renamed from: y  reason: collision with root package name */
    long f12254y;

    /* renamed from: z  reason: collision with root package name */
    boolean f12255z;

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
        this.f12237h = new ii.r() { // from class: lc.n
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
        this.f12236g = new ii.r() { // from class: lc.j
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
        this.f12235f = new ii.r() { // from class: lc.k
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
        this.f12230a = (Context) ne.a.e(context);
        this.f12233d = rVar;
        this.f12234e = rVar2;
        this.f12235f = rVar3;
        this.f12236g = rVar4;
        this.f12237h = rVar5;
        this.f12238i = fVar;
        this.f12239j = ne.w0.R();
        this.f12240k = AudioAttributes.f11790r;
        this.f12242m = 0;
        this.f12246q = 1;
        this.f12247r = 0;
        this.f12248s = true;
        this.f12249t = lc.t0.f36702g;
        this.f12250u = 5000L;
        this.f12251v = 15000L;
        this.f12252w = new h.b().a();
        this.f12231b = ne.e.f40090a;
        this.f12253x = 500L;
        this.f12254y = 2000L;
        this.A = true;
    }
}
