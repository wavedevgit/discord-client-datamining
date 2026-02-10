package wp;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import rr.p;
import wp.b;
import wp.h;
import wp.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f53909a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f53909a = stepName;
        }

        @Override // wp.i
        public String a() {
            return this.f53909a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f53909a, ((a) obj).f53909a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f53909a.hashCode();
        }

        @Override // wp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f53910a;

        /* renamed from: b  reason: collision with root package name */
        private final wp.b f53911b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, wp.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f53910a = stepName;
            this.f53911b = subPage;
        }

        @Override // wp.i
        public String a() {
            return this.f53910a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f53910a, bVar.f53910a) && Intrinsics.areEqual(this.f53911b, bVar.f53911b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f53910a.hashCode() * 31) + this.f53911b.hashCode();
        }

        @Override // wp.i
        public String toString() {
            String str;
            wp.b bVar = this.f53911b;
            if (Intrinsics.areEqual(bVar, b.a.f53888a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0753b.f53889a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f53890a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f53891a)) {
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
        private final String f53912a;

        /* renamed from: b  reason: collision with root package name */
        private final h f53913b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f53912a = stepName;
            this.f53913b = subPage;
        }

        @Override // wp.i
        public String a() {
            return this.f53912a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f53912a, cVar.f53912a) && Intrinsics.areEqual(this.f53913b, cVar.f53913b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f53912a.hashCode() * 31) + this.f53913b.hashCode();
        }

        @Override // wp.i
        public String toString() {
            String str;
            h hVar = this.f53913b;
            if (Intrinsics.areEqual(hVar, h.a.f53901a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f53902a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f53907a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f53905a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f53913b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f53913b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f53913b).a() + "/prompt";
            } else if (hVar instanceof h.C0754h) {
                str = ((h.C0754h) this.f53913b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f53914a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f53914a = stepName;
        }

        @Override // wp.i
        public String a() {
            return this.f53914a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f53914a, ((d) obj).f53914a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f53914a.hashCode();
        }

        @Override // wp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f53915a;

        /* renamed from: b  reason: collision with root package name */
        private final j f53916b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f53915a = stepName;
            this.f53916b = subPage;
        }

        @Override // wp.i
        public String a() {
            return this.f53915a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f53915a, eVar.f53915a) && Intrinsics.areEqual(this.f53916b, eVar.f53916b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f53915a.hashCode() * 31) + this.f53916b.hashCode();
        }

        @Override // wp.i
        public String toString() {
            String str;
            j jVar = this.f53916b;
            if (Intrinsics.areEqual(jVar, j.b.f53920a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f53922a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f53923a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f53916b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f53916b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f53919a)) {
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
        private final String f53917a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f53917a = stepName;
        }

        @Override // wp.i
        public String a() {
            return this.f53917a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f53917a, ((f) obj).f53917a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f53917a.hashCode();
        }

        @Override // wp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f53918a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f53918a = stepName;
        }

        @Override // wp.i
        public String a() {
            return this.f53918a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f53918a, ((g) obj).f53918a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f53918a.hashCode();
        }

        @Override // wp.i
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
