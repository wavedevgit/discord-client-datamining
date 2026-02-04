package qp;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lr.p;
import qp.b;
import qp.h;
import qp.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f48039a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f48039a = stepName;
        }

        @Override // qp.i
        public String a() {
            return this.f48039a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f48039a, ((a) obj).f48039a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f48039a.hashCode();
        }

        @Override // qp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f48040a;

        /* renamed from: b  reason: collision with root package name */
        private final qp.b f48041b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, qp.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f48040a = stepName;
            this.f48041b = subPage;
        }

        @Override // qp.i
        public String a() {
            return this.f48040a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f48040a, bVar.f48040a) && Intrinsics.areEqual(this.f48041b, bVar.f48041b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f48040a.hashCode() * 31) + this.f48041b.hashCode();
        }

        @Override // qp.i
        public String toString() {
            String str;
            qp.b bVar = this.f48041b;
            if (Intrinsics.areEqual(bVar, b.a.f48018a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0581b.f48019a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f48020a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f48021a)) {
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
        private final String f48042a;

        /* renamed from: b  reason: collision with root package name */
        private final h f48043b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f48042a = stepName;
            this.f48043b = subPage;
        }

        @Override // qp.i
        public String a() {
            return this.f48042a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f48042a, cVar.f48042a) && Intrinsics.areEqual(this.f48043b, cVar.f48043b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f48042a.hashCode() * 31) + this.f48043b.hashCode();
        }

        @Override // qp.i
        public String toString() {
            String str;
            h hVar = this.f48043b;
            if (Intrinsics.areEqual(hVar, h.a.f48031a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f48032a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f48037a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f48035a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f48043b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f48043b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f48043b).a() + "/prompt";
            } else if (hVar instanceof h.C0582h) {
                str = ((h.C0582h) this.f48043b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f48044a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f48044a = stepName;
        }

        @Override // qp.i
        public String a() {
            return this.f48044a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f48044a, ((d) obj).f48044a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f48044a.hashCode();
        }

        @Override // qp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f48045a;

        /* renamed from: b  reason: collision with root package name */
        private final j f48046b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f48045a = stepName;
            this.f48046b = subPage;
        }

        @Override // qp.i
        public String a() {
            return this.f48045a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f48045a, eVar.f48045a) && Intrinsics.areEqual(this.f48046b, eVar.f48046b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f48045a.hashCode() * 31) + this.f48046b.hashCode();
        }

        @Override // qp.i
        public String toString() {
            String str;
            j jVar = this.f48046b;
            if (Intrinsics.areEqual(jVar, j.b.f48050a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f48052a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f48053a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f48046b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f48046b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f48049a)) {
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
        private final String f48047a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f48047a = stepName;
        }

        @Override // qp.i
        public String a() {
            return this.f48047a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f48047a, ((f) obj).f48047a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f48047a.hashCode();
        }

        @Override // qp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f48048a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f48048a = stepName;
        }

        @Override // qp.i
        public String a() {
            return this.f48048a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f48048a, ((g) obj).f48048a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f48048a.hashCode();
        }

        @Override // qp.i
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
