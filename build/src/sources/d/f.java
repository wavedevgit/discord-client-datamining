package d;

import androidx.activity.result.contract.e;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private boolean f20121c;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20123e;

    /* renamed from: f  reason: collision with root package name */
    private long f20124f;

    /* renamed from: a  reason: collision with root package name */
    private e.f f20119a = e.c.f1012a;

    /* renamed from: b  reason: collision with root package name */
    private int f20120b = androidx.activity.result.contract.d.f1007b.a();

    /* renamed from: d  reason: collision with root package name */
    private e.b f20122d = e.b.a.f1010a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        private boolean f20127c;

        /* renamed from: e  reason: collision with root package name */
        private boolean f20129e;

        /* renamed from: f  reason: collision with root package name */
        private long f20130f;

        /* renamed from: a  reason: collision with root package name */
        private e.f f20125a = e.c.f1012a;

        /* renamed from: b  reason: collision with root package name */
        private int f20126b = androidx.activity.result.contract.d.f1007b.a();

        /* renamed from: d  reason: collision with root package name */
        private e.b f20128d = e.b.a.f1010a;

        public final f a() {
            f fVar = new f();
            fVar.k(this.f20125a);
            fVar.j(this.f20126b);
            fVar.l(this.f20127c);
            fVar.i(this.f20128d);
            fVar.h(this.f20129e);
            fVar.g(this.f20130f);
            return fVar;
        }

        public final a b(e.b defaultTab) {
            Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
            this.f20128d = defaultTab;
            return this;
        }

        public final a c(int i10) {
            this.f20126b = i10;
            return this;
        }

        public final a d(e.f mediaType) {
            Intrinsics.checkNotNullParameter(mediaType, "mediaType");
            this.f20125a = mediaType;
            return this;
        }

        public final a e(boolean z10) {
            this.f20127c = z10;
            return this;
        }
    }

    public final long a() {
        return this.f20124f;
    }

    public final e.b b() {
        return this.f20122d;
    }

    public final int c() {
        return this.f20120b;
    }

    public final e.f d() {
        return this.f20119a;
    }

    public final boolean e() {
        return this.f20123e;
    }

    public final boolean f() {
        return this.f20121c;
    }

    public final void g(long j10) {
        this.f20124f = j10;
    }

    public final void h(boolean z10) {
        this.f20123e = z10;
    }

    public final void i(e.b bVar) {
        Intrinsics.checkNotNullParameter(bVar, "<set-?>");
        this.f20122d = bVar;
    }

    public final void j(int i10) {
        this.f20120b = i10;
    }

    public final void k(e.f fVar) {
        Intrinsics.checkNotNullParameter(fVar, "<set-?>");
        this.f20119a = fVar;
    }

    public final void l(boolean z10) {
        this.f20121c = z10;
    }
}
