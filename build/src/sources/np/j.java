package np;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final a f42055a = new a();

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
        public static final b f42056a = new b();

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
        private final String f42057a;

        public c(String str) {
            this.f42057a = str;
        }

        public final String a() {
            return this.f42057a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && Intrinsics.areEqual(this.f42057a, ((c) obj).f42057a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f42057a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f42057a;
            return "LeadInAnimation(pose=" + str + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final d f42058a = new d();

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
        public static final e f42059a = new e();

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
        private final String f42060a;

        public f(String str) {
            this.f42060a = str;
        }

        public final String a() {
            return this.f42060a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f42060a, ((f) obj).f42060a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f42060a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f42060a;
            return "TakePhoto(pose=" + str + ")";
        }
    }
}
