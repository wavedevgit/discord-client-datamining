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
    public static final b f5618p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5619a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5620b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5621c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5622d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5623e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5624f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5625g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5626h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5627i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5628j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5629k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5630l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5631m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5632n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5633o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0076a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5634a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5635b;

        /* renamed from: c  reason: collision with root package name */
        private j f5636c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5637d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5638e;

        /* renamed from: f  reason: collision with root package name */
        private u f5639f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5640g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5641h;

        /* renamed from: i  reason: collision with root package name */
        private String f5642i;

        /* renamed from: k  reason: collision with root package name */
        private int f5644k;

        /* renamed from: j  reason: collision with root package name */
        private int f5643j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5645l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5646m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5647n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5638e;
        }

        public final int c() {
            return this.f5647n;
        }

        public final String d() {
            return this.f5642i;
        }

        public final Executor e() {
            return this.f5634a;
        }

        public final Consumer f() {
            return this.f5640g;
        }

        public final j g() {
            return this.f5636c;
        }

        public final int h() {
            return this.f5643j;
        }

        public final int i() {
            return this.f5645l;
        }

        public final int j() {
            return this.f5646m;
        }

        public final int k() {
            return this.f5644k;
        }

        public final u l() {
            return this.f5639f;
        }

        public final Consumer m() {
            return this.f5641h;
        }

        public final Executor n() {
            return this.f5637d;
        }

        public final a0 o() {
            return this.f5635b;
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

    public a(C0076a builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        Executor e10 = builder.e();
        this.f5619a = e10 == null ? k4.c.b(false) : e10;
        this.f5633o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5620b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5621c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5622d = o10;
        j g10 = builder.g();
        this.f5623e = g10 == null ? o.f30666a : g10;
        u l10 = builder.l();
        this.f5624f = l10 == null ? new e() : l10;
        this.f5628j = builder.h();
        this.f5629k = builder.k();
        this.f5630l = builder.i();
        this.f5632n = builder.j();
        this.f5625g = builder.f();
        this.f5626h = builder.m();
        this.f5627i = builder.d();
        this.f5631m = builder.c();
    }

    public final k4.b a() {
        return this.f5621c;
    }

    public final int b() {
        return this.f5631m;
    }

    public final String c() {
        return this.f5627i;
    }

    public final Executor d() {
        return this.f5619a;
    }

    public final Consumer e() {
        return this.f5625g;
    }

    public final j f() {
        return this.f5623e;
    }

    public final int g() {
        return this.f5630l;
    }

    public final int h() {
        return this.f5632n;
    }

    public final int i() {
        return this.f5629k;
    }

    public final int j() {
        return this.f5628j;
    }

    public final u k() {
        return this.f5624f;
    }

    public final Consumer l() {
        return this.f5626h;
    }

    public final Executor m() {
        return this.f5620b;
    }

    public final a0 n() {
        return this.f5622d;
    }
}
