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
    public static final b f5511p = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f5512a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f5513b;

    /* renamed from: c  reason: collision with root package name */
    private final k4.b f5514c;

    /* renamed from: d  reason: collision with root package name */
    private final a0 f5515d;

    /* renamed from: e  reason: collision with root package name */
    private final j f5516e;

    /* renamed from: f  reason: collision with root package name */
    private final u f5517f;

    /* renamed from: g  reason: collision with root package name */
    private final Consumer f5518g;

    /* renamed from: h  reason: collision with root package name */
    private final Consumer f5519h;

    /* renamed from: i  reason: collision with root package name */
    private final String f5520i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5521j;

    /* renamed from: k  reason: collision with root package name */
    private final int f5522k;

    /* renamed from: l  reason: collision with root package name */
    private final int f5523l;

    /* renamed from: m  reason: collision with root package name */
    private final int f5524m;

    /* renamed from: n  reason: collision with root package name */
    private final int f5525n;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f5526o;

    /* renamed from: androidx.work.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0077a {

        /* renamed from: a  reason: collision with root package name */
        private Executor f5527a;

        /* renamed from: b  reason: collision with root package name */
        private a0 f5528b;

        /* renamed from: c  reason: collision with root package name */
        private j f5529c;

        /* renamed from: d  reason: collision with root package name */
        private Executor f5530d;

        /* renamed from: e  reason: collision with root package name */
        private k4.b f5531e;

        /* renamed from: f  reason: collision with root package name */
        private u f5532f;

        /* renamed from: g  reason: collision with root package name */
        private Consumer f5533g;

        /* renamed from: h  reason: collision with root package name */
        private Consumer f5534h;

        /* renamed from: i  reason: collision with root package name */
        private String f5535i;

        /* renamed from: k  reason: collision with root package name */
        private int f5537k;

        /* renamed from: j  reason: collision with root package name */
        private int f5536j = 4;

        /* renamed from: l  reason: collision with root package name */
        private int f5538l = Integer.MAX_VALUE;

        /* renamed from: m  reason: collision with root package name */
        private int f5539m = 20;

        /* renamed from: n  reason: collision with root package name */
        private int f5540n = k4.c.c();

        public final a a() {
            return new a(this);
        }

        public final k4.b b() {
            return this.f5531e;
        }

        public final int c() {
            return this.f5540n;
        }

        public final String d() {
            return this.f5535i;
        }

        public final Executor e() {
            return this.f5527a;
        }

        public final Consumer f() {
            return this.f5533g;
        }

        public final j g() {
            return this.f5529c;
        }

        public final int h() {
            return this.f5536j;
        }

        public final int i() {
            return this.f5538l;
        }

        public final int j() {
            return this.f5539m;
        }

        public final int k() {
            return this.f5537k;
        }

        public final u l() {
            return this.f5532f;
        }

        public final Consumer m() {
            return this.f5534h;
        }

        public final Executor n() {
            return this.f5530d;
        }

        public final a0 o() {
            return this.f5528b;
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

    public a(C0077a builder) {
        Intrinsics.checkNotNullParameter(builder, "builder");
        Executor e10 = builder.e();
        this.f5512a = e10 == null ? k4.c.b(false) : e10;
        this.f5526o = builder.n() == null;
        Executor n10 = builder.n();
        this.f5513b = n10 == null ? k4.c.b(true) : n10;
        k4.b b10 = builder.b();
        this.f5514c = b10 == null ? new v() : b10;
        a0 o10 = builder.o();
        if (o10 == null) {
            o10 = a0.c();
            Intrinsics.checkNotNullExpressionValue(o10, "getDefaultWorkerFactory()");
        }
        this.f5515d = o10;
        j g10 = builder.g();
        this.f5516e = g10 == null ? o.f32745a : g10;
        u l10 = builder.l();
        this.f5517f = l10 == null ? new e() : l10;
        this.f5521j = builder.h();
        this.f5522k = builder.k();
        this.f5523l = builder.i();
        this.f5525n = builder.j();
        this.f5518g = builder.f();
        this.f5519h = builder.m();
        this.f5520i = builder.d();
        this.f5524m = builder.c();
    }

    public final k4.b a() {
        return this.f5514c;
    }

    public final int b() {
        return this.f5524m;
    }

    public final String c() {
        return this.f5520i;
    }

    public final Executor d() {
        return this.f5512a;
    }

    public final Consumer e() {
        return this.f5518g;
    }

    public final j f() {
        return this.f5516e;
    }

    public final int g() {
        return this.f5523l;
    }

    public final int h() {
        return this.f5525n;
    }

    public final int i() {
        return this.f5522k;
    }

    public final int j() {
        return this.f5521j;
    }

    public final u k() {
        return this.f5517f;
    }

    public final Consumer l() {
        return this.f5519h;
    }

    public final Executor m() {
        return this.f5513b;
    }

    public final a0 n() {
        return this.f5515d;
    }
}
