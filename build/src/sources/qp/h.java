package qp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final a f48031a = new a();

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
        public static final b f48032a = new b();

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
        private final int f48033a;

        public c(int i10) {
            this.f48033a = i10;
        }

        public final int a() {
            return this.f48033a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && this.f48033a == ((c) obj).f48033a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48033a);
        }

        public String toString() {
            int i10 = this.f48033a;
            return "Check(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f48034a;

        public d(int i10) {
            this.f48034a = i10;
        }

        public final int a() {
            return this.f48034a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && this.f48034a == ((d) obj).f48034a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48034a);
        }

        public String toString() {
            int i10 = this.f48034a;
            return "CheckUpload(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final e f48035a = new e();

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
        private final int f48036a;

        public f(int i10) {
            this.f48036a = i10;
        }

        public final int a() {
            return this.f48036a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && this.f48036a == ((f) obj).f48036a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48036a);
        }

        public String toString() {
            int i10 = this.f48036a;
            return "Prompt(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final g f48037a = new g();

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
        private final int f48038a;

        public C0582h(int i10) {
            this.f48038a = i10;
        }

        public final int a() {
            return this.f48038a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0582h) && this.f48038a == ((C0582h) obj).f48038a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f48038a);
        }

        public String toString() {
            int i10 = this.f48038a;
            return "TakePhoto(pageIndex=" + i10 + ")";
        }
    }
}
