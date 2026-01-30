package androidx.work;

import androidx.core.util.Consumer;
import androidx.work.impl.e;
import java.util.concurrent.Executor;
import k4.a0;
import k4.j;
import k4.o;
import k4.u;
import k4.v;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: p  reason: collision with root package name */
    public static final b f5467p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5468a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5469b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5470c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5471d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5472e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5473f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5474g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5475h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5476i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5477j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5478k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5479l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5480m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5481n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5482o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0073a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5483a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5484b;

        /* renamed from: c  reason: collision with root package name */
        private j f5485c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5486d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5487e;

        /* renamed from: f  reason: collision with root package name */
        private u f5488f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5489g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5490h;

        /* renamed from: i  reason: collision with root package name */
        private String f5491i;

        /* renamed from: k  reason: collision with root package name */
        private int f5493k;

        /* renamed from: j  reason: collision with root package name */
        private int f5492j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5494l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5495m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5496n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5487e;
        }

        public final int c() {
            return this.f5496n;
        }

        public final String d() {
            return this.f5491i;
        }

        public final Executor e() {
            return this.f5483a;
        }

        public final Consumer f() {
            return this.f5489g;
        }

        public final j g() {
            return this.f5485c;
        }

        public final int h() {
            return this.f5492j;
        }

        public final int i() {
            return this.f5494l;
        }

        public final int j() {
            return this.f5495m;
        }

        public final int k() {
            return this.f5493k;
        }

        public final u l() {
            return this.f5488f;
        }

        public final Consumer m() {
            return this.f5490h;
        }

        public final Executor n() {
            return this.f5486d;
        }

        public final a0 o() {
            return this.f5484b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public a(C0073a builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        Executor e10 = builder.e();
        this.f5468a = e10 == null ? k4.c.b(false) : e10;
        this.f5482o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5469b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5470c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5471d = o10;
        j g10 = builder.g();
        this.f5472e = g10 == null ? o.f32999a : g10;
        u l10 = builder.l();
        this.f5473f = l10 == null ? new e() : l10;
        this.f5477j = builder.h();
        this.f5478k = builder.k();
        this.f5479l = builder.i();
        this.f5481n = builder.j();
        this.f5474g = builder.f();
        this.f5475h = builder.m();
        this.f5476i = builder.d();
        this.f5480m = builder.c();
    }

    public final k4.b a() {
        return this.f5470c;
    }

    public final int b() {
        return this.f5480m;
    }

    public final String c() {
        return this.f5476i;
    }

    public final Executor d() {
        return this.f5468a;
    }

    public final Consumer e() {
        return this.f5474g;
    }

    public final j f() {
        return this.f5472e;
    }

    public final int g() {
        return this.f5479l;
    }

    public final int h() {
        return this.f5481n;
    }

    public final int i() {
        return this.f5478k;
    }

    public final int j() {
        return this.f5477j;
    }

    public final u k() {
        return this.f5473f;
    }

    public final Consumer l() {
        return this.f5475h;
    }

    public final Executor m() {
        return this.f5469b;
    }

    public final a0 n() {
        return this.f5471d;
    }
}
