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
        private final String f42045a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42045a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42045a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f42045a, ((a) obj).f42045a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42045a.hashCode();
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
        private final String f42046a;

        /* renamed from: b  reason: collision with root package name */
        private final np.b f42047b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, np.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f42046a = stepName;
            this.f42047b = subPage;
        }

        @Override // np.i
        public String a() {
            return this.f42046a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f42046a, bVar.f42046a) && Intrinsics.areEqual(this.f42047b, bVar.f42047b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42046a.hashCode() * 31) + this.f42047b.hashCode();
        }

        @Override // np.i
        public String toString() {
            String str;
            np.b bVar = this.f42047b;
            if (Intrinsics.areEqual(bVar, b.a.f42024a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0523b.f42025a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f42026a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f42027a)) {
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
        private final String f42048a;

        /* renamed from: b  reason: collision with root package name */
        private final h f42049b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f42048a = stepName;
            this.f42049b = subPage;
        }

        @Override // np.i
        public String a() {
            return this.f42048a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f42048a, cVar.f42048a) && Intrinsics.areEqual(this.f42049b, cVar.f42049b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42048a.hashCode() * 31) + this.f42049b.hashCode();
        }

        @Override // np.i
        public String toString() {
            String str;
            h hVar = this.f42049b;
            if (Intrinsics.areEqual(hVar, h.a.f42037a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f42038a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f42043a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f42041a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f42049b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f42049b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f42049b).a() + "/prompt";
            } else if (hVar instanceof h.C0524h) {
                str = ((h.C0524h) this.f42049b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f42050a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42050a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42050a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f42050a, ((d) obj).f42050a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42050a.hashCode();
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
        private final String f42051a;

        /* renamed from: b  reason: collision with root package name */
        private final j f42052b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f42051a = stepName;
            this.f42052b = subPage;
        }

        @Override // np.i
        public String a() {
            return this.f42051a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f42051a, eVar.f42051a) && Intrinsics.areEqual(this.f42052b, eVar.f42052b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f42051a.hashCode() * 31) + this.f42052b.hashCode();
        }

        @Override // np.i
        public String toString() {
            String str;
            j jVar = this.f42052b;
            if (Intrinsics.areEqual(jVar, j.b.f42056a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f42058a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f42059a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f42052b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f42052b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f42055a)) {
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
        private final String f42053a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42053a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42053a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f42053a, ((f) obj).f42053a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42053a.hashCode();
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
        private final String f42054a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f42054a = stepName;
        }

        @Override // np.i
        public String a() {
            return this.f42054a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f42054a, ((g) obj).f42054a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f42054a.hashCode();
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
