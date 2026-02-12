package fq;

import as.p;
import fq.b;
import fq.h;
import fq.j;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f24205a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24205a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24205a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f24205a, ((a) obj).f24205a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24205a.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/verify-with-persona/passkey-registration";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f24206a;

        /* renamed from: b  reason: collision with root package name */
        private final fq.b f24207b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, fq.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f24206a = stepName;
            this.f24207b = subPage;
        }

        @Override // fq.i
        public String a() {
            return this.f24206a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f24206a, bVar.f24206a) && Intrinsics.areEqual(this.f24207b, bVar.f24207b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24206a.hashCode() * 31) + this.f24207b.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String str;
            fq.b bVar = this.f24207b;
            if (Intrinsics.areEqual(bVar, b.a.f24184a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0326b.f24185a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f24186a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f24187a)) {
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
        private final String f24208a;

        /* renamed from: b  reason: collision with root package name */
        private final h f24209b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f24208a = stepName;
            this.f24209b = subPage;
        }

        @Override // fq.i
        public String a() {
            return this.f24208a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f24208a, cVar.f24208a) && Intrinsics.areEqual(this.f24209b, cVar.f24209b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24208a.hashCode() * 31) + this.f24209b.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String str;
            h hVar = this.f24209b;
            if (Intrinsics.areEqual(hVar, h.a.f24197a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f24198a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f24203a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f24201a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f24209b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f24209b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f24209b).a() + "/prompt";
            } else if (hVar instanceof h.C0327h) {
                str = ((h.C0327h) this.f24209b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f24210a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24210a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24210a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f24210a, ((d) obj).f24210a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24210a.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/scan-nfc";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f24211a;

        /* renamed from: b  reason: collision with root package name */
        private final j f24212b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f24211a = stepName;
            this.f24212b = subPage;
        }

        @Override // fq.i
        public String a() {
            return this.f24211a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f24211a, eVar.f24211a) && Intrinsics.areEqual(this.f24212b, eVar.f24212b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24211a.hashCode() * 31) + this.f24212b.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String str;
            j jVar = this.f24212b;
            if (Intrinsics.areEqual(jVar, j.b.f24216a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f24218a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f24219a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f24212b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f24212b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f24215a)) {
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
        private final String f24213a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24213a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24213a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f24213a, ((f) obj).f24213a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24213a.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String iVar = super.toString();
            return iVar + "/ui";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f24214a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24214a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24214a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof g) && Intrinsics.areEqual(this.f24214a, ((g) obj).f24214a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24214a.hashCode();
        }

        @Override // fq.i
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
