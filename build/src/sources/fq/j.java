package fq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final a f24215a = new a();

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
        public static final b f24216a = new b();

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
        private final String f24217a;

        public c(String str) {
            this.f24217a = str;
        }

        public final String a() {
            return this.f24217a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && Intrinsics.areEqual(this.f24217a, ((c) obj).f24217a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f24217a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f24217a;
            return "LeadInAnimation(pose=" + str + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements j {

        /* renamed from: a  reason: collision with root package name */
        public static final d f24218a = new d();

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
        public static final e f24219a = new e();

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
        private final String f24220a;

        public f(String str) {
            this.f24220a = str;
        }

        public final String a() {
            return this.f24220a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && Intrinsics.areEqual(this.f24220a, ((f) obj).f24220a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            String str = this.f24220a;
            if (str == null) {
                return 0;
            }
            return str.hashCode();
        }

        public String toString() {
            String str = this.f24220a;
            return "TakePhoto(pose=" + str + ")";
        }
    }
}
