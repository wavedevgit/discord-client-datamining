package np;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final a f42071a = new a();

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
        public static final b f42072a = new b();

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
        private final String f42073a;

        public c(String str) {
            this.f42073a = str;
        }

        public final String a() {
            return this.f42073a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && Intrinsics.areEqual(this.f42073a, ((c) obj).f42073a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f42073a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f42073a;
            return "LeadInAnimation(pose=" + str + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final d f42074a = new d();

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
        public static final e f42075a = new e();

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
        private final String f42076a;

        public f(String str) {
            this.f42076a = str;
        }

        public final String a() {
            return this.f42076a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f42076a, ((f) obj).f42076a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f42076a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f42076a;
            return "TakePhoto(pose=" + str + ")";
        }
    }
}
