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
        private final String f24204a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24204a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24204a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && Intrinsics.areEqual(this.f24204a, ((a) obj).f24204a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24204a.hashCode();
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
        private final String f24205a;

        /* renamed from: b  reason: collision with root package name */
        private final fq.b f24206b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(String stepName, fq.b subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f24205a = stepName;
            this.f24206b = subPage;
        }

        @Override // fq.i
        public String a() {
            return this.f24205a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (Intrinsics.areEqual(this.f24205a, bVar.f24205a) && Intrinsics.areEqual(this.f24206b, bVar.f24206b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24205a.hashCode() * 31) + this.f24206b.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String str;
            fq.b bVar = this.f24206b;
            if (Intrinsics.areEqual(bVar, b.a.f24183a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(bVar, b.C0326b.f24184a)) {
                str = "prompt";
            } else if (Intrinsics.areEqual(bVar, b.c.f24185a)) {
                str = "review";
            } else if (Intrinsics.areEqual(bVar, b.d.f24186a)) {
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
        private final String f24207a;

        /* renamed from: b  reason: collision with root package name */
        private final h f24208b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(String stepName, h subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f24207a = stepName;
            this.f24208b = subPage;
        }

        @Override // fq.i
        public String a() {
            return this.f24207a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f24207a, cVar.f24207a) && Intrinsics.areEqual(this.f24208b, cVar.f24208b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24207a.hashCode() * 31) + this.f24208b.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String str;
            h hVar = this.f24208b;
            if (Intrinsics.areEqual(hVar, h.a.f24196a)) {
                str = "autoclassification-failure";
            } else if (Intrinsics.areEqual(hVar, h.b.f24197a)) {
                str = "autoclassification-select";
            } else if (Intrinsics.areEqual(hVar, h.g.f24202a)) {
                str = "select";
            } else if (Intrinsics.areEqual(hVar, h.e.f24200a)) {
                str = "pending";
            } else if (hVar instanceof h.c) {
                str = ((h.c) this.f24208b).a() + "/check";
            } else if (hVar instanceof h.d) {
                str = ((h.d) this.f24208b).a() + "/check-upload";
            } else if (hVar instanceof h.f) {
                str = ((h.f) this.f24208b).a() + "/prompt";
            } else if (hVar instanceof h.C0327h) {
                str = ((h.C0327h) this.f24208b).a() + "/capture";
            } else {
                throw new p();
            }
            return super.toString() + "/government-id/" + str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends i {

        /* renamed from: a  reason: collision with root package name */
        private final String f24209a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24209a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24209a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && Intrinsics.areEqual(this.f24209a, ((d) obj).f24209a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24209a.hashCode();
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
        private final String f24210a;

        /* renamed from: b  reason: collision with root package name */
        private final j f24211b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(String stepName, j subPage) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            Intrinsics.checkNotNullParameter(subPage, "subPage");
            this.f24210a = stepName;
            this.f24211b = subPage;
        }

        @Override // fq.i
        public String a() {
            return this.f24210a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (Intrinsics.areEqual(this.f24210a, eVar.f24210a) && Intrinsics.areEqual(this.f24211b, eVar.f24211b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (this.f24210a.hashCode() * 31) + this.f24211b.hashCode();
        }

        @Override // fq.i
        public String toString() {
            String str;
            j jVar = this.f24211b;
            if (Intrinsics.areEqual(jVar, j.b.f24215a)) {
                str = "finalize-video";
            } else if (Intrinsics.areEqual(jVar, j.d.f24217a)) {
                str = "pending";
            } else if (Intrinsics.areEqual(jVar, j.e.f24218a)) {
                str = "prompt";
            } else if (jVar instanceof j.c) {
                str = ((j.c) this.f24211b).a() + "/capture-lead-in-animation";
            } else if (jVar instanceof j.f) {
                str = ((j.f) this.f24211b).a() + "/capture";
            } else if (Intrinsics.areEqual(jVar, j.a.f24214a)) {
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
        private final String f24212a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(String stepName) {
            super(null);
            Intrinsics.checkNotNullParameter(stepName, "stepName");
            this.f24212a = stepName;
        }

        @Override // fq.i
        public String a() {
            return this.f24212a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f24212a, ((f) obj).f24212a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f24212a.hashCode();
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
        private final String f24213a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(String stepName) {
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
            if ((obj instanceof g) && Intrinsics.areEqual(this.f24213a, ((g) obj).f24213a)) {
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
