package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f21256c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21258e;

    /* renamed from: f  reason: collision with root package name */
    private long f21259f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f21254a = e.c.f1039a;

    /* renamed from: b  reason: collision with root package name */
    private int f21255b = androidx.activity.result.contract.d.f1034b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f21257d = e.b.a.f1037a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f21262c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21264e;

        /* renamed from: f  reason: collision with root package name */
        private long f21265f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f21260a = e.c.f1039a;

        /* renamed from: b  reason: collision with root package name */
        private int f21261b = androidx.activity.result.contract.d.f1034b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f21263d = e.b.a.f1037a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f21260a);
            fVar.j(this.f21261b);
            fVar.l(this.f21262c);
            fVar.i(this.f21263d);
            fVar.h(this.f21264e);
            fVar.g(this.f21265f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f21263d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f21261b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f21260a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f21262c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f21259f;
    }

    public final e.b b() {
        return this.f21257d;
    }

    public final int c() {
        return this.f21255b;
    }

    public final e.f d() {
        return this.f21254a;
    }

    public final boolean e() {
        return this.f21258e;
    }

    public final boolean f() {
        return this.f21256c;
    }

    public final void g(long j10) {
        this.f21259f = j10;
    }

    public final void h(boolean z10) {
        this.f21258e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f21257d = bVar;
    }

    public final void j(int i10) {
        this.f21255b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f21254a = fVar;
    }

    public final void l(boolean z10) {
        this.f21256c = z10;
    }
}
