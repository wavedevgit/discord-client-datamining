package np;

import ir.p;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import np.b;
import np.h;
import np.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f42061a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42061a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42061a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f42061a, ((a) obj).f42061a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42061a.hashCode();
        }

        @Override // np.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f42062a;

        /* renamed from: b  reason: collision with root package name */
        private final np.b f42063b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, np.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f42062a = stepName;
            this.f42063b = subPage;
        }

        @Override // np.i
        public String a() {
            return this.f42062a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f42062a, bVar.f42062a) && Intrinsics.areEqual(this.f42063b, bVar.f42063b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42062a.hashCode() * 31) + this.f42063b.hashCode();
        }

        @Override // np.i
        public String toString() {
            String str;
            np.b bVar = this.f42063b;
            if (Intrinsics.areEqual(bVar, b.a.f42040a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0523b.f42041a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f42042a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f42043a)) {
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
        private final String f42064a;

        /* renamed from: b  reason: collision with root package name */
        private final h f42065b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f42064a = stepName;
            this.f42065b = subPage;
        }

        @Override // np.i
        public String a() {
            return this.f42064a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f42064a, cVar.f42064a) && Intrinsics.areEqual(this.f42065b, cVar.f42065b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42064a.hashCode() * 31) + this.f42065b.hashCode();
        }

        @Override // np.i
        public String toString() {
            String str;
            h hVar = this.f42065b;
            if (Intrinsics.areEqual(hVar, h.a.f42053a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f42054a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f42059a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f42057a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f42065b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f42065b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f42065b).a() + "/prompt";
            } else if (hVar instanceof h.C0524h) {
                str = ((h.C0524h) this.f42065b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f42066a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42066a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42066a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f42066a, ((d) obj).f42066a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42066a.hashCode();
        }

        @Override // np.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f42067a;

        /* renamed from: b  reason: collision with root package name */
        private final j f42068b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f42067a = stepName;
            this.f42068b = subPage;
        }

        @Override // np.i
        public String a() {
            return this.f42067a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f42067a, eVar.f42067a) && Intrinsics.areEqual(this.f42068b, eVar.f42068b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42067a.hashCode() * 31) + this.f42068b.hashCode();
        }

        @Override // np.i
        public String toString() {
            String str;
            j jVar = this.f42068b;
            if (Intrinsics.areEqual(jVar, j.b.f42072a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f42074a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f42075a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f42068b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f42068b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f42071a)) {
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
        private final String f42069a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42069a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42069a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f42069a, ((f) obj).f42069a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42069a.hashCode();
        }

        @Override // np.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f42070a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42070a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42070a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f42070a, ((g) obj).f42070a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42070a.hashCode();
        }

        @Override // np.i
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
