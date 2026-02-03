package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f19905c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f19907e;

    /* renamed from: f  reason: collision with root package name */
    private long f19908f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f19903a = e.c.f900a;

    /* renamed from: b  reason: collision with root package name */
    private int f19904b = androidx.activity.result.contract.d.f895b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f19906d = e.b.a.f898a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f19911c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f19913e;

        /* renamed from: f  reason: collision with root package name */
        private long f19914f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f19909a = e.c.f900a;

        /* renamed from: b  reason: collision with root package name */
        private int f19910b = androidx.activity.result.contract.d.f895b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f19912d = e.b.a.f898a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f19909a);
            fVar.j(this.f19910b);
            fVar.l(this.f19911c);
            fVar.i(this.f19912d);
            fVar.h(this.f19913e);
            fVar.g(this.f19914f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f19912d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f19910b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f19909a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f19911c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f19908f;
    }

    public final e.b b() {
        return this.f19906d;
    }

    public final int c() {
        return this.f19904b;
    }

    public final e.f d() {
        return this.f19903a;
    }

    public final boolean e() {
        return this.f19907e;
    }

    public final boolean f() {
        return this.f19905c;
    }

    public final void g(long j10) {
        this.f19908f = j10;
    }

    public final void h(boolean z10) {
        this.f19907e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f19906d = bVar;
    }

    public final void j(int i10) {
        this.f19904b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f19903a = fVar;
    }

    public final void l(boolean z10) {
        this.f19905c = z10;
    }
}
