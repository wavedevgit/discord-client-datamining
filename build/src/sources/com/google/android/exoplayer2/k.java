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
    final Context f13262a;

    /* renamed from: b  reason: collision with root package name */
    ne.e f13263b;

    /* renamed from: c  reason: collision with root package name */
    long f13264c;

    /* renamed from: d  reason: collision with root package name */
    ii.r f13265d;

    /* renamed from: e  reason: collision with root package name */
    ii.r f13266e;

    /* renamed from: f  reason: collision with root package name */
    ii.r f13267f;

    /* renamed from: g  reason: collision with root package name */
    ii.r f13268g;

    /* renamed from: h  reason: collision with root package name */
    ii.r f13269h;

    /* renamed from: i  reason: collision with root package name */
    ii.f f13270i;

    /* renamed from: j  reason: collision with root package name */
    Looper f13271j;

    /* renamed from: k  reason: collision with root package name */
    AudioAttributes f13272k;

    /* renamed from: l  reason: collision with root package name */
    boolean f13273l;

    /* renamed from: m  reason: collision with root package name */
    int f13274m;

    /* renamed from: n  reason: collision with root package name */
    boolean f13275n;

    /* renamed from: o  reason: collision with root package name */
    boolean f13276o;

    /* renamed from: p  reason: collision with root package name */
    boolean f13277p;

    /* renamed from: q  reason: collision with root package name */
    int f13278q;

    /* renamed from: r  reason: collision with root package name */
    int f13279r;

    /* renamed from: s  reason: collision with root package name */
    boolean f13280s;

    /* renamed from: t  reason: collision with root package name */
    lc.t0 f13281t;

    /* renamed from: u  reason: collision with root package name */
    long f13282u;

    /* renamed from: v  reason: collision with root package name */
    long f13283v;

    /* renamed from: w  reason: collision with root package name */
    v0 f13284w;

    /* renamed from: x  reason: collision with root package name */
    long f13285x;

    /* renamed from: y  reason: collision with root package name */
    long f13286y;

    /* renamed from: z  reason: collision with root package name */
    boolean f13287z;

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
        this.f13269h = new ii.r() { // from class: lc.n
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
        this.f13268g = new ii.r() { // from class: lc.j
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
        this.f13267f = new ii.r() { // from class: lc.k
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
        this.f13262a = (Context) ne.a.e(context);
        this.f13265d = rVar;
        this.f13266e = rVar2;
        this.f13267f = rVar3;
        this.f13268g = rVar4;
        this.f13269h = rVar5;
        this.f13270i = fVar;
        this.f13271j = ne.w0.R();
        this.f13272k = AudioAttributes.f12822r;
        this.f13274m = 0;
        this.f13278q = 1;
        this.f13279r = 0;
        this.f13280s = true;
        this.f13281t = lc.t0.f37233g;
        this.f13282u = 5000L;
        this.f13283v = 15000L;
        this.f13284w = new h.b().a();
        this.f13263b = ne.e.f40051a;
        this.f13285x = 500L;
        this.f13286y = 2000L;
        this.A = true;
    }
}
