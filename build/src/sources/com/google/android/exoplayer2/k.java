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
    final Context f12615a;

    /* renamed from: b  reason: collision with root package name */
    ne.e f12616b;

    /* renamed from: c  reason: collision with root package name */
    long f12617c;

    /* renamed from: d  reason: collision with root package name */
    li.r f12618d;

    /* renamed from: e  reason: collision with root package name */
    li.r f12619e;

    /* renamed from: f  reason: collision with root package name */
    li.r f12620f;

    /* renamed from: g  reason: collision with root package name */
    li.r f12621g;

    /* renamed from: h  reason: collision with root package name */
    li.r f12622h;

    /* renamed from: i  reason: collision with root package name */
    li.f f12623i;

    /* renamed from: j  reason: collision with root package name */
    Looper f12624j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f12625k;

    /* renamed from: l  reason: collision with root package name */
    boolean f12626l;

    /* renamed from: m  reason: collision with root package name */
    int f12627m;

    /* renamed from: n  reason: collision with root package name */
    boolean f12628n;

    /* renamed from: o  reason: collision with root package name */
    boolean f12629o;

    /* renamed from: p  reason: collision with root package name */
    boolean f12630p;

    /* renamed from: q  reason: collision with root package name */
    int f12631q;

    /* renamed from: r  reason: collision with root package name */
    int f12632r;

    /* renamed from: s  reason: collision with root package name */
    boolean f12633s;

    /* renamed from: t  reason: collision with root package name */
    lc.t0 f12634t;

    /* renamed from: u  reason: collision with root package name */
    long f12635u;

    /* renamed from: v  reason: collision with root package name */
    long f12636v;

    /* renamed from: w  reason: collision with root package name */
    v0 f12637w;

    /* renamed from: x  reason: collision with root package name */
    long f12638x;

    /* renamed from: y  reason: collision with root package name */
    long f12639y;

    /* renamed from: z  reason: collision with root package name */
    boolean f12640z;

    public k(final Context context, final lc.s0 s0Var) {
        this(context, new li.r() { // from class: lc.l
            @Override // li.r
            public final Object get() {
                return com.google.android.exoplayer2.k.b(s0.this);
            }
        }, new li.r() { // from class: lc.m
            @Override // li.r
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
        this.f12622h = new li.r() { // from class: lc.n
            @Override // li.r
            public final Object get() {
                return com.google.android.exoplayer2.k.e(le.e.this);
            }
        };
        return this;
    }

    public k j(final lc.a0 a0Var) {
        ne.a.g(!this.C);
        ne.a.e(a0Var);
        this.f12621g = new li.r() { // from class: lc.j
            @Override // li.r
            public final Object get() {
                return com.google.android.exoplayer2.k.g(a0.this);
            }
        };
        return this;
    }

    public k k(final je.q qVar) {
        ne.a.g(!this.C);
        ne.a.e(qVar);
        this.f12620f = new li.r() { // from class: lc.k
            @Override // li.r
            public final Object get() {
                return com.google.android.exoplayer2.k.a(je.q.this);
            }
        };
        return this;
    }

    private k(final Context context, li.r rVar, li.r rVar2) {
        this(context, rVar, rVar2, new li.r() { // from class: lc.o
            @Override // li.r
            public final Object get() {
                return com.google.android.exoplayer2.k.f(context);
            }
        }, new li.r() { // from class: lc.p
            @Override // li.r
            public final Object get() {
                return new e();
            }
        }, new li.r() { // from class: lc.q
            @Override // li.r
            public final Object get() {
                le.e n10;
                n10 = le.r.n(context);
                return n10;
            }
        }, new li.f() { // from class: lc.r
            @Override // li.f
            public final Object apply(Object obj) {
                return new com.google.android.exoplayer2.analytics.a((ne.e) obj);
            }
        });
    }

    private k(Context context, li.r rVar, li.r rVar2, li.r rVar3, li.r rVar4, li.r rVar5, li.f fVar) {
        this.f12615a = (Context) ne.a.e(context);
        this.f12618d = rVar;
        this.f12619e = rVar2;
        this.f12620f = rVar3;
        this.f12621g = rVar4;
        this.f12622h = rVar5;
        this.f12623i = fVar;
        this.f12624j = ne.w0.R();
        this.f12625k = AudioAttributes.f12175r;
        this.f12627m = 0;
        this.f12631q = 1;
        this.f12632r = 0;
        this.f12633s = true;
        this.f12634t = lc.t0.f36629g;
        this.f12635u = 5000L;
        this.f12636v = 15000L;
        this.f12637w = new h.b().a();
        this.f12616b = ne.e.f39550a;
        this.f12638x = 500L;
        this.f12639y = 2000L;
        this.A = true;
    }
}
