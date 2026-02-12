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
    public static final b f5628p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5629a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5630b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5631c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5632d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5633e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5634f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5635g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5636h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5637i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5638j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5639k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5640l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5641m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5642n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5643o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0072a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5644a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5645b;

        /* renamed from: c  reason: collision with root package name */
        private j f5646c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5647d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5648e;

        /* renamed from: f  reason: collision with root package name */
        private u f5649f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5650g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5651h;

        /* renamed from: i  reason: collision with root package name */
        private String f5652i;

        /* renamed from: k  reason: collision with root package name */
        private int f5654k;

        /* renamed from: j  reason: collision with root package name */
        private int f5653j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5655l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5656m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5657n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5648e;
        }

        public final int c() {
            return this.f5657n;
        }

        public final String d() {
            return this.f5652i;
        }

        public final Executor e() {
            return this.f5644a;
        }

        public final Consumer f() {
            return this.f5650g;
        }

        public final j g() {
            return this.f5646c;
        }

        public final int h() {
            return this.f5653j;
        }

        public final int i() {
            return this.f5655l;
        }

        public final int j() {
            return this.f5656m;
        }

        public final int k() {
            return this.f5654k;
        }

        public final u l() {
            return this.f5649f;
        }

        public final Consumer m() {
            return this.f5651h;
        }

        public final Executor n() {
            return this.f5647d;
        }

        public final a0 o() {
            return this.f5645b;
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

    public a(C0072a builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        Executor e10 = builder.e();
        this.f5629a = e10 == null ? k4.c.b(false) : e10;
        this.f5643o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5630b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5631c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5632d = o10;
        j g10 = builder.g();
        this.f5633e = g10 == null ? o.f31525a : g10;
        u l10 = builder.l();
        this.f5634f = l10 == null ? new e() : l10;
        this.f5638j = builder.h();
        this.f5639k = builder.k();
        this.f5640l = builder.i();
        this.f5642n = builder.j();
        this.f5635g = builder.f();
        this.f5636h = builder.m();
        this.f5637i = builder.d();
        this.f5641m = builder.c();
    }

    public final k4.b a() {
        return this.f5631c;
    }

    public final int b() {
        return this.f5641m;
    }

    public final String c() {
        return this.f5637i;
    }

    public final Executor d() {
        return this.f5629a;
    }

    public final Consumer e() {
        return this.f5635g;
    }

    public final j f() {
        return this.f5633e;
    }

    public final int g() {
        return this.f5640l;
    }

    public final int h() {
        return this.f5642n;
    }

    public final int i() {
        return this.f5639k;
    }

    public final int j() {
        return this.f5638j;
    }

    public final u k() {
        return this.f5634f;
    }

    public final Consumer l() {
        return this.f5636h;
    }

    public final Executor m() {
        return this.f5630b;
    }

    public final a0 n() {
        return this.f5632d;
    }
}
