package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f20309c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20311e;

    /* renamed from: f  reason: collision with root package name */
    private long f20312f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f20307a = e.c.f1038a;

    /* renamed from: b  reason: collision with root package name */
    private int f20308b = androidx.activity.result.contract.d.f1033b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f20310d = e.b.a.f1036a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f20315c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f20317e;

        /* renamed from: f  reason: collision with root package name */
        private long f20318f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f20313a = e.c.f1038a;

        /* renamed from: b  reason: collision with root package name */
        private int f20314b = androidx.activity.result.contract.d.f1033b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f20316d = e.b.a.f1036a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f20313a);
            fVar.j(this.f20314b);
            fVar.l(this.f20315c);
            fVar.i(this.f20316d);
            fVar.h(this.f20317e);
            fVar.g(this.f20318f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f20316d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f20314b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f20313a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f20315c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f20312f;
    }

    public final e.b b() {
        return this.f20310d;
    }

    public final int c() {
        return this.f20308b;
    }

    public final e.f d() {
        return this.f20307a;
    }

    public final boolean e() {
        return this.f20311e;
    }

    public final boolean f() {
        return this.f20309c;
    }

    public final void g(long j10) {
        this.f20312f = j10;
    }

    public final void h(boolean z10) {
        this.f20311e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f20310d = bVar;
    }

    public final void j(int i10) {
        this.f20308b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f20307a = fVar;
    }

    public final void l(boolean z10) {
        this.f20309c = z10;
    }
}
