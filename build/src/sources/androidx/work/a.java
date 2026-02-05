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
    public static final b f5592p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5593a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5594b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5595c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5596d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5597e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5598f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5599g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5600h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5601i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5602j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5603k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5604l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5605m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5606n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5607o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0076a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5608a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5609b;

        /* renamed from: c  reason: collision with root package name */
        private j f5610c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5611d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5612e;

        /* renamed from: f  reason: collision with root package name */
        private u f5613f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5614g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5615h;

        /* renamed from: i  reason: collision with root package name */
        private String f5616i;

        /* renamed from: k  reason: collision with root package name */
        private int f5618k;

        /* renamed from: j  reason: collision with root package name */
        private int f5617j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5619l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5620m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5621n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5612e;
        }

        public final int c() {
            return this.f5621n;
        }

        public final String d() {
            return this.f5616i;
        }

        public final Executor e() {
            return this.f5608a;
        }

        public final Consumer f() {
            return this.f5614g;
        }

        public final j g() {
            return this.f5610c;
        }

        public final int h() {
            return this.f5617j;
        }

        public final int i() {
            return this.f5619l;
        }

        public final int j() {
            return this.f5620m;
        }

        public final int k() {
            return this.f5618k;
        }

        public final u l() {
            return this.f5613f;
        }

        public final Consumer m() {
            return this.f5615h;
        }

        public final Executor n() {
            return this.f5611d;
        }

        public final a0 o() {
            return this.f5609b;
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
        this.f5593a = e10 == null ? k4.c.b(false) : e10;
        this.f5607o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5594b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5595c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5596d = o10;
        j g10 = builder.g();
        this.f5597e = g10 == null ? o.f31606a : g10;
        u l10 = builder.l();
        this.f5598f = l10 == null ? new e() : l10;
        this.f5602j = builder.h();
        this.f5603k = builder.k();
        this.f5604l = builder.i();
        this.f5606n = builder.j();
        this.f5599g = builder.f();
        this.f5600h = builder.m();
        this.f5601i = builder.d();
        this.f5605m = builder.c();
    }

    public final k4.b a() {
        return this.f5595c;
    }

    public final int b() {
        return this.f5605m;
    }

    public final String c() {
        return this.f5601i;
    }

    public final Executor d() {
        return this.f5593a;
    }

    public final Consumer e() {
        return this.f5599g;
    }

    public final j f() {
        return this.f5597e;
    }

    public final int g() {
        return this.f5604l;
    }

    public final int h() {
        return this.f5606n;
    }

    public final int i() {
        return this.f5603k;
    }

    public final int j() {
        return this.f5602j;
    }

    public final u k() {
        return this.f5598f;
    }

    public final Consumer l() {
        return this.f5600h;
    }

    public final Executor m() {
        return this.f5594b;
    }

    public final a0 n() {
        return this.f5596d;
    }
}
