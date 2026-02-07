package vp;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import qr.p;
import vp.b;
import vp.h;
import vp.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52882a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52882a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52882a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f52882a, ((a) obj).f52882a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52882a.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52883a;

        /* renamed from: b  reason: collision with root package name */
        private final vp.b f52884b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, vp.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f52883a = stepName;
            this.f52884b = subPage;
        }

        @Override // vp.i
        public String a() {
            return this.f52883a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f52883a, bVar.f52883a) && Intrinsics.areEqual(this.f52884b, bVar.f52884b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52883a.hashCode() * 31) + this.f52884b.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String str;
            vp.b bVar = this.f52884b;
            if (Intrinsics.areEqual(bVar, b.a.f52861a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0700b.f52862a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f52863a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f52864a)) {
                str = "capture";
            } else {
                throw new p();
            }
            String iVar = super.toString();
            return iVar + "/documents/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52885a;

        /* renamed from: b  reason: collision with root package name */
        private final h f52886b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f52885a = stepName;
            this.f52886b = subPage;
        }

        @Override // vp.i
        public String a() {
            return this.f52885a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f52885a, cVar.f52885a) && Intrinsics.areEqual(this.f52886b, cVar.f52886b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52885a.hashCode() * 31) + this.f52886b.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String str;
            h hVar = this.f52886b;
            if (Intrinsics.areEqual(hVar, h.a.f52874a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f52875a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f52880a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f52878a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f52886b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f52886b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f52886b).a() + "/prompt";
            } else if (hVar instanceof h.C0701h) {
                str = ((h.C0701h) this.f52886b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52887a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52887a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52887a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f52887a, ((d) obj).f52887a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52887a.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52888a;

        /* renamed from: b  reason: collision with root package name */
        private final j f52889b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f52888a = stepName;
            this.f52889b = subPage;
        }

        @Override // vp.i
        public String a() {
            return this.f52888a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f52888a, eVar.f52888a) && Intrinsics.areEqual(this.f52889b, eVar.f52889b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52888a.hashCode() * 31) + this.f52889b.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String str;
            j jVar = this.f52889b;
            if (Intrinsics.areEqual(jVar, j.b.f52893a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f52895a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f52896a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f52889b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f52889b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f52892a)) {
                str = "check-upload";
            } else {
                throw new p();
            }
            return super.toString() + "/selfie/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52890a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52890a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52890a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f52890a, ((f) obj).f52890a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52890a.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52891a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52891a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52891a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f52891a, ((g) obj).f52891a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52891a.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-authentication";
        }
    }

    public /* synthetic */ i(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    public String toString() {
        return "/inquiry";
    }

    private i() {
    }
}
