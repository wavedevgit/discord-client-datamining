package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f21257c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21259e;

    /* renamed from: f  reason: collision with root package name */
    private long f21260f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f21255a = e.c.f1039a;

    /* renamed from: b  reason: collision with root package name */
    private int f21256b = androidx.activity.result.contract.d.f1034b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f21258d = e.b.a.f1037a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f21263c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21265e;

        /* renamed from: f  reason: collision with root package name */
        private long f21266f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f21261a = e.c.f1039a;

        /* renamed from: b  reason: collision with root package name */
        private int f21262b = androidx.activity.result.contract.d.f1034b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f21264d = e.b.a.f1037a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f21261a);
            fVar.j(this.f21262b);
            fVar.l(this.f21263c);
            fVar.i(this.f21264d);
            fVar.h(this.f21265e);
            fVar.g(this.f21266f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f21264d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f21262b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f21261a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f21263c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f21260f;
    }

    public final e.b b() {
        return this.f21258d;
    }

    public final int c() {
        return this.f21256b;
    }

    public final e.f d() {
        return this.f21255a;
    }

    public final boolean e() {
        return this.f21259e;
    }

    public final boolean f() {
        return this.f21257c;
    }

    public final void g(long j10) {
        this.f21260f = j10;
    }

    public final void h(boolean z10) {
        this.f21259e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f21258d = bVar;
    }

    public final void j(int i10) {
        this.f21256b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f21255a = fVar;
    }

    public final void l(boolean z10) {
        this.f21257c = z10;
    }
}
