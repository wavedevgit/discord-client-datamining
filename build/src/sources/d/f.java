package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f21046c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21048e;

    /* renamed from: f  reason: collision with root package name */
    private long f21049f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f21044a = e.c.f931a;

    /* renamed from: b  reason: collision with root package name */
    private int f21045b = androidx.activity.result.contract.d.f926b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f21047d = e.b.a.f929a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f21052c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21054e;

        /* renamed from: f  reason: collision with root package name */
        private long f21055f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f21050a = e.c.f931a;

        /* renamed from: b  reason: collision with root package name */
        private int f21051b = androidx.activity.result.contract.d.f926b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f21053d = e.b.a.f929a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f21050a);
            fVar.j(this.f21051b);
            fVar.l(this.f21052c);
            fVar.i(this.f21053d);
            fVar.h(this.f21054e);
            fVar.g(this.f21055f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f21053d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f21051b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f21050a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f21052c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f21049f;
    }

    public final e.b b() {
        return this.f21047d;
    }

    public final int c() {
        return this.f21045b;
    }

    public final e.f d() {
        return this.f21044a;
    }

    public final boolean e() {
        return this.f21048e;
    }

    public final boolean f() {
        return this.f21046c;
    }

    public final void g(long j10) {
        this.f21049f = j10;
    }

    public final void h(boolean z10) {
        this.f21048e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f21047d = bVar;
    }

    public final void j(int i10) {
        this.f21045b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f21044a = fVar;
    }

    public final void l(boolean z10) {
        this.f21046c = z10;
    }
}
