package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f20076c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20078e;

    /* renamed from: f  reason: collision with root package name */
    private long f20079f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f20074a = e.c.f1341a;

    /* renamed from: b  reason: collision with root package name */
    private int f20075b = androidx.activity.result.contract.d.f1336b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f20077d = e.b.a.f1339a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f20082c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f20084e;

        /* renamed from: f  reason: collision with root package name */
        private long f20085f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f20080a = e.c.f1341a;

        /* renamed from: b  reason: collision with root package name */
        private int f20081b = androidx.activity.result.contract.d.f1336b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f20083d = e.b.a.f1339a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f20080a);
            fVar.j(this.f20081b);
            fVar.l(this.f20082c);
            fVar.i(this.f20083d);
            fVar.h(this.f20084e);
            fVar.g(this.f20085f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f20083d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f20081b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f20080a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f20082c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f20079f;
    }

    public final e.b b() {
        return this.f20077d;
    }

    public final int c() {
        return this.f20075b;
    }

    public final e.f d() {
        return this.f20074a;
    }

    public final boolean e() {
        return this.f20078e;
    }

    public final boolean f() {
        return this.f20076c;
    }

    public final void g(long j10) {
        this.f20079f = j10;
    }

    public final void h(boolean z10) {
        this.f20078e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f20077d = bVar;
    }

    public final void j(int i10) {
        this.f20075b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f20074a = fVar;
    }

    public final void l(boolean z10) {
        this.f20076c = z10;
    }
}
