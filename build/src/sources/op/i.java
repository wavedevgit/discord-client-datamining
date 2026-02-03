package op;

import jr.p;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import op.b;
import op.h;
import op.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f44615a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f44615a = stepName;
        }

        @Override // op.i
        public String a() {
            return this.f44615a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f44615a, ((a) obj).f44615a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f44615a.hashCode();
        }

        @Override // op.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f44616a;

        /* renamed from: b  reason: collision with root package name */
        private final op.b f44617b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, op.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f44616a = stepName;
            this.f44617b = subPage;
        }

        @Override // op.i
        public String a() {
            return this.f44616a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f44616a, bVar.f44616a) && Intrinsics.areEqual(this.f44617b, bVar.f44617b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44616a.hashCode() * 31) + this.f44617b.hashCode();
        }

        @Override // op.i
        public String toString() {
            String str;
            op.b bVar = this.f44617b;
            if (Intrinsics.areEqual(bVar, b.a.f44594a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0553b.f44595a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f44596a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f44597a)) {
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
        private final String f44618a;

        /* renamed from: b  reason: collision with root package name */
        private final h f44619b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f44618a = stepName;
            this.f44619b = subPage;
        }

        @Override // op.i
        public String a() {
            return this.f44618a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f44618a, cVar.f44618a) && Intrinsics.areEqual(this.f44619b, cVar.f44619b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44618a.hashCode() * 31) + this.f44619b.hashCode();
        }

        @Override // op.i
        public String toString() {
            String str;
            h hVar = this.f44619b;
            if (Intrinsics.areEqual(hVar, h.a.f44607a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f44608a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f44613a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f44611a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f44619b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f44619b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f44619b).a() + "/prompt";
            } else if (hVar instanceof h.C0554h) {
                str = ((h.C0554h) this.f44619b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f44620a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f44620a = stepName;
        }

        @Override // op.i
        public String a() {
            return this.f44620a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f44620a, ((d) obj).f44620a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f44620a.hashCode();
        }

        @Override // op.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f44621a;

        /* renamed from: b  reason: collision with root package name */
        private final j f44622b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f44621a = stepName;
            this.f44622b = subPage;
        }

        @Override // op.i
        public String a() {
            return this.f44621a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f44621a, eVar.f44621a) && Intrinsics.areEqual(this.f44622b, eVar.f44622b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f44621a.hashCode() * 31) + this.f44622b.hashCode();
        }

        @Override // op.i
        public String toString() {
            String str;
            j jVar = this.f44622b;
            if (Intrinsics.areEqual(jVar, j.b.f44626a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f44628a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f44629a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f44622b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f44622b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f44625a)) {
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
        private final String f44623a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f44623a = stepName;
        }

        @Override // op.i
        public String a() {
            return this.f44623a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f44623a, ((f) obj).f44623a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f44623a.hashCode();
        }

        @Override // op.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f44624a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f44624a = stepName;
        }

        @Override // op.i
        public String a() {
            return this.f44624a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f44624a, ((g) obj).f44624a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f44624a.hashCode();
        }

        @Override // op.i
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
