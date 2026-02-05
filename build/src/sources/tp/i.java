package tp;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import or.p;
import tp.b;
import tp.h;
import tp.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f50906a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f50906a = stepName;
        }

        @Override // tp.i
        public String a() {
            return this.f50906a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f50906a, ((a) obj).f50906a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f50906a.hashCode();
        }

        @Override // tp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f50907a;

        /* renamed from: b  reason: collision with root package name */
        private final tp.b f50908b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, tp.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f50907a = stepName;
            this.f50908b = subPage;
        }

        @Override // tp.i
        public String a() {
            return this.f50907a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f50907a, bVar.f50907a) && Intrinsics.areEqual(this.f50908b, bVar.f50908b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50907a.hashCode() * 31) + this.f50908b.hashCode();
        }

        @Override // tp.i
        public String toString() {
            String str;
            tp.b bVar = this.f50908b;
            if (Intrinsics.areEqual(bVar, b.a.f50885a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0654b.f50886a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f50887a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f50888a)) {
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
        private final String f50909a;

        /* renamed from: b  reason: collision with root package name */
        private final h f50910b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f50909a = stepName;
            this.f50910b = subPage;
        }

        @Override // tp.i
        public String a() {
            return this.f50909a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f50909a, cVar.f50909a) && Intrinsics.areEqual(this.f50910b, cVar.f50910b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50909a.hashCode() * 31) + this.f50910b.hashCode();
        }

        @Override // tp.i
        public String toString() {
            String str;
            h hVar = this.f50910b;
            if (Intrinsics.areEqual(hVar, h.a.f50898a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f50899a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f50904a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f50902a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f50910b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f50910b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f50910b).a() + "/prompt";
            } else if (hVar instanceof h.C0655h) {
                str = ((h.C0655h) this.f50910b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f50911a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f50911a = stepName;
        }

        @Override // tp.i
        public String a() {
            return this.f50911a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f50911a, ((d) obj).f50911a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f50911a.hashCode();
        }

        @Override // tp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f50912a;

        /* renamed from: b  reason: collision with root package name */
        private final j f50913b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f50912a = stepName;
            this.f50913b = subPage;
        }

        @Override // tp.i
        public String a() {
            return this.f50912a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f50912a, eVar.f50912a) && Intrinsics.areEqual(this.f50913b, eVar.f50913b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f50912a.hashCode() * 31) + this.f50913b.hashCode();
        }

        @Override // tp.i
        public String toString() {
            String str;
            j jVar = this.f50913b;
            if (Intrinsics.areEqual(jVar, j.b.f50917a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f50919a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f50920a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f50913b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f50913b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f50916a)) {
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
        private final String f50914a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f50914a = stepName;
        }

        @Override // tp.i
        public String a() {
            return this.f50914a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f50914a, ((f) obj).f50914a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f50914a.hashCode();
        }

        @Override // tp.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f50915a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f50915a = stepName;
        }

        @Override // tp.i
        public String a() {
            return this.f50915a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f50915a, ((g) obj).f50915a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f50915a.hashCode();
        }

        @Override // tp.i
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
