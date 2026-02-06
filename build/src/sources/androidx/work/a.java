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
    public static final b f5921p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5922a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5923b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5924c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5925d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5926e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5927f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5928g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5929h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5930i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5931j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5932k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5933l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5934m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5935n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5936o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0074a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5937a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5938b;

        /* renamed from: c  reason: collision with root package name */
        private j f5939c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5940d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5941e;

        /* renamed from: f  reason: collision with root package name */
        private u f5942f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5943g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5944h;

        /* renamed from: i  reason: collision with root package name */
        private String f5945i;

        /* renamed from: k  reason: collision with root package name */
        private int f5947k;

        /* renamed from: j  reason: collision with root package name */
        private int f5946j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5948l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5949m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5950n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5941e;
        }

        public final int c() {
            return this.f5950n;
        }

        public final String d() {
            return this.f5945i;
        }

        public final Executor e() {
            return this.f5937a;
        }

        public final Consumer f() {
            return this.f5943g;
        }

        public final j g() {
            return this.f5939c;
        }

        public final int h() {
            return this.f5946j;
        }

        public final int i() {
            return this.f5948l;
        }

        public final int j() {
            return this.f5949m;
        }

        public final int k() {
            return this.f5947k;
        }

        public final u l() {
            return this.f5942f;
        }

        public final Consumer m() {
            return this.f5944h;
        }

        public final Executor n() {
            return this.f5940d;
        }

        public final a0 o() {
            return this.f5938b;
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

    public a(C0074a builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        Executor e10 = builder.e();
        this.f5922a = e10 == null ? k4.c.b(false) : e10;
        this.f5936o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5923b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5924c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5925d = o10;
        j g10 = builder.g();
        this.f5926e = g10 == null ? o.f31450a : g10;
        u l10 = builder.l();
        this.f5927f = l10 == null ? new e() : l10;
        this.f5931j = builder.h();
        this.f5932k = builder.k();
        this.f5933l = builder.i();
        this.f5935n = builder.j();
        this.f5928g = builder.f();
        this.f5929h = builder.m();
        this.f5930i = builder.d();
        this.f5934m = builder.c();
    }

    public final k4.b a() {
        return this.f5924c;
    }

    public final int b() {
        return this.f5934m;
    }

    public final String c() {
        return this.f5930i;
    }

    public final Executor d() {
        return this.f5922a;
    }

    public final Consumer e() {
        return this.f5928g;
    }

    public final j f() {
        return this.f5926e;
    }

    public final int g() {
        return this.f5933l;
    }

    public final int h() {
        return this.f5935n;
    }

    public final int i() {
        return this.f5932k;
    }

    public final int j() {
        return this.f5931j;
    }

    public final u k() {
        return this.f5927f;
    }

    public final Consumer l() {
        return this.f5929h;
    }

    public final Executor m() {
        return this.f5923b;
    }

    public final a0 n() {
        return this.f5925d;
    }
}
