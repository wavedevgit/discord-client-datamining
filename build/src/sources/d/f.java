package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f21470c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21472e;

    /* renamed from: f  reason: collision with root package name */
    private long f21473f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f21468a = e.c.f887a;

    /* renamed from: b  reason: collision with root package name */
    private int f21469b = androidx.activity.result.contract.d.f882b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f21471d = e.b.a.f885a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f21476c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f21478e;

        /* renamed from: f  reason: collision with root package name */
        private long f21479f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f21474a = e.c.f887a;

        /* renamed from: b  reason: collision with root package name */
        private int f21475b = androidx.activity.result.contract.d.f882b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f21477d = e.b.a.f885a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f21474a);
            fVar.j(this.f21475b);
            fVar.l(this.f21476c);
            fVar.i(this.f21477d);
            fVar.h(this.f21478e);
            fVar.g(this.f21479f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f21477d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f21475b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f21474a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f21476c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f21473f;
    }

    public final e.b b() {
        return this.f21471d;
    }

    public final int c() {
        return this.f21469b;
    }

    public final e.f d() {
        return this.f21468a;
    }

    public final boolean e() {
        return this.f21472e;
    }

    public final boolean f() {
        return this.f21470c;
    }

    public final void g(long j10) {
        this.f21473f = j10;
    }

    public final void h(boolean z10) {
        this.f21472e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f21471d = bVar;
    }

    public final void j(int i10) {
        this.f21469b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f21468a = fVar;
    }

    public final void l(boolean z10) {
        this.f21470c = z10;
    }
}
