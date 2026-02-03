package qp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final a f48034a = new a();

        private a() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return -1856828727;
        }

        public String toString() {
            return "AutoClassificationFailure";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final b f48035a = new b();

        private b() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof b)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 454604765;
        }

        public String toString() {
            return "AutoClassificationSelect";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f48036a;

        public c(int i10) {
            this.f48036a = i10;
        }

        public final int a() {
            return this.f48036a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && this.f48036a == ((c) obj).f48036a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48036a);
        }

        public String toString() {
            int i10 = this.f48036a;
            return "Check(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f48037a;

        public d(int i10) {
            this.f48037a = i10;
        }

        public final int a() {
            return this.f48037a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && this.f48037a == ((d) obj).f48037a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48037a);
        }

        public String toString() {
            int i10 = this.f48037a;
            return "CheckUpload(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final e f48038a = new e();

        private e() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 35282187;
        }

        public String toString() {
            return "Pending";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f48039a;

        public f(int i10) {
            this.f48039a = i10;
        }

        public final int a() {
            return this.f48039a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && this.f48039a == ((f) obj).f48039a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48039a);
        }

        public String toString() {
            int i10 = this.f48039a;
            return "Prompt(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final g f48040a = new g();

        private g() {
        }

        public boolean equals(Object obj) {
            if (this == obj || (obj instanceof g)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return 364061448;
        }

        public String toString() {
            return "Select";
        }
    }

    /* renamed from: qp.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0582h implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f48041a;

        public C0582h(int i10) {
            this.f48041a = i10;
        }

        public final int a() {
            return this.f48041a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0582h) && this.f48041a == ((C0582h) obj).f48041a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48041a);
        }

        public String toString() {
            int i10 = this.f48041a;
            return "TakePhoto(pageIndex=" + i10 + ")";
        }
    }
}
