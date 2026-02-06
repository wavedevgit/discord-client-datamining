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
        private final String f52834a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52834a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52834a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f52834a, ((a) obj).f52834a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52834a.hashCode();
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
        private final String f52835a;

        /* renamed from: b  reason: collision with root package name */
        private final vp.b f52836b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, vp.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f52835a = stepName;
            this.f52836b = subPage;
        }

        @Override // vp.i
        public String a() {
            return this.f52835a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f52835a, bVar.f52835a) && Intrinsics.areEqual(this.f52836b, bVar.f52836b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52835a.hashCode() * 31) + this.f52836b.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String str;
            vp.b bVar = this.f52836b;
            if (Intrinsics.areEqual(bVar, b.a.f52813a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0700b.f52814a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f52815a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f52816a)) {
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
        private final String f52837a;

        /* renamed from: b  reason: collision with root package name */
        private final h f52838b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f52837a = stepName;
            this.f52838b = subPage;
        }

        @Override // vp.i
        public String a() {
            return this.f52837a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f52837a, cVar.f52837a) && Intrinsics.areEqual(this.f52838b, cVar.f52838b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52837a.hashCode() * 31) + this.f52838b.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String str;
            h hVar = this.f52838b;
            if (Intrinsics.areEqual(hVar, h.a.f52826a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f52827a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f52832a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f52830a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f52838b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f52838b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f52838b).a() + "/prompt";
            } else if (hVar instanceof h.C0701h) {
                str = ((h.C0701h) this.f52838b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f52839a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52839a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52839a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f52839a, ((d) obj).f52839a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52839a.hashCode();
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
        private final String f52840a;

        /* renamed from: b  reason: collision with root package name */
        private final j f52841b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f52840a = stepName;
            this.f52841b = subPage;
        }

        @Override // vp.i
        public String a() {
            return this.f52840a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f52840a, eVar.f52840a) && Intrinsics.areEqual(this.f52841b, eVar.f52841b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f52840a.hashCode() * 31) + this.f52841b.hashCode();
        }

        @Override // vp.i
        public String toString() {
            String str;
            j jVar = this.f52841b;
            if (Intrinsics.areEqual(jVar, j.b.f52845a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f52847a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f52848a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f52841b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f52841b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f52844a)) {
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
        private final String f52842a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52842a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52842a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f52842a, ((f) obj).f52842a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52842a.hashCode();
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
        private final String f52843a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f52843a = stepName;
        }

        @Override // vp.i
        public String a() {
            return this.f52843a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f52843a, ((g) obj).f52843a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f52843a.hashCode();
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
