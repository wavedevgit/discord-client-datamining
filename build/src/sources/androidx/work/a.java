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
    public static final b f5480p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5481a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5482b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5483c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5484d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5485e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5486f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5487g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5488h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5489i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5490j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5491k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5492l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5493m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5494n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5495o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0075a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5496a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5497b;

        /* renamed from: c  reason: collision with root package name */
        private j f5498c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5499d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5500e;

        /* renamed from: f  reason: collision with root package name */
        private u f5501f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5502g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5503h;

        /* renamed from: i  reason: collision with root package name */
        private String f5504i;

        /* renamed from: k  reason: collision with root package name */
        private int f5506k;

        /* renamed from: j  reason: collision with root package name */
        private int f5505j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5507l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5508m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5509n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5500e;
        }

        public final int c() {
            return this.f5509n;
        }

        public final String d() {
            return this.f5504i;
        }

        public final Executor e() {
            return this.f5496a;
        }

        public final Consumer f() {
            return this.f5502g;
        }

        public final j g() {
            return this.f5498c;
        }

        public final int h() {
            return this.f5505j;
        }

        public final int i() {
            return this.f5507l;
        }

        public final int j() {
            return this.f5508m;
        }

        public final int k() {
            return this.f5506k;
        }

        public final u l() {
            return this.f5501f;
        }

        public final Consumer m() {
            return this.f5503h;
        }

        public final Executor n() {
            return this.f5499d;
        }

        public final a0 o() {
            return this.f5497b;
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

    public a(C0075a builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        Executor e10 = builder.e();
        this.f5481a = e10 == null ? k4.c.b(false) : e10;
        this.f5495o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5482b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5483c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5484d = o10;
        j g10 = builder.g();
        this.f5485e = g10 == null ? o.f32143a : g10;
        u l10 = builder.l();
        this.f5486f = l10 == null ? new e() : l10;
        this.f5490j = builder.h();
        this.f5491k = builder.k();
        this.f5492l = builder.i();
        this.f5494n = builder.j();
        this.f5487g = builder.f();
        this.f5488h = builder.m();
        this.f5489i = builder.d();
        this.f5493m = builder.c();
    }

    public final k4.b a() {
        return this.f5483c;
    }

    public final int b() {
        return this.f5493m;
    }

    public final String c() {
        return this.f5489i;
    }

    public final Executor d() {
        return this.f5481a;
    }

    public final Consumer e() {
        return this.f5487g;
    }

    public final j f() {
        return this.f5485e;
    }

    public final int g() {
        return this.f5492l;
    }

    public final int h() {
        return this.f5494n;
    }

    public final int i() {
        return this.f5491k;
    }

    public final int j() {
        return this.f5490j;
    }

    public final u k() {
        return this.f5486f;
    }

    public final Consumer l() {
        return this.f5488h;
    }

    public final Executor m() {
        return this.f5482b;
    }

    public final a0 n() {
        return this.f5484d;
    }
}
