package qp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final a f48049a = new a();

        private a() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 1416782425;
        }

        public String toString() {
            return "CheckUpload";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final b f48050a = new b();

        private b() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return -576649171;
        }

        public String toString() {
            return "FinalizeVideo";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements j {

        /* renamed from: a  reason: collision with root package name */
        private final String f48051a;

        public c(String str) {
            this.f48051a = str;
        }

        public final String a() {
            return this.f48051a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && Intrinsics.areEqual(this.f48051a, ((c) obj).f48051a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f48051a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f48051a;
            return "LeadInAnimation(pose=" + str + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final d f48052a = new d();

        private d() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof d)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return -238548281;
        }

        public String toString() {
            return "Pending";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final e f48053a = new e();

        private e() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 1251275316;
        }

        public String toString() {
            return "Prompt";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements j {

        /* renamed from: a  reason: collision with root package name */
        private final String f48054a;

        public f(String str) {
            this.f48054a = str;
        }

        public final String a() {
            return this.f48054a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f48054a, ((f) obj).f48054a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f48054a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f48054a;
            return "TakePhoto(pose=" + str + ")";
        }
    }
}
