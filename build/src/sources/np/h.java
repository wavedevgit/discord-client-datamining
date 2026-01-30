package np;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final a f42053a = new a();

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
        public static final b f42054a = new b();

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
        private final int f42055a;

        public c(int i10) {
            this.f42055a = i10;
        }

        public final int a() {
            return this.f42055a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && this.f42055a == ((c) obj).f42055a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f42055a);
        }

        public String toString() {
            int i10 = this.f42055a;
            return "Check(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f42056a;

        public d(int i10) {
            this.f42056a = i10;
        }

        public final int a() {
            return this.f42056a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && this.f42056a == ((d) obj).f42056a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f42056a);
        }

        public String toString() {
            int i10 = this.f42056a;
            return "CheckUpload(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final e f42057a = new e();

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
        private final int f42058a;

        public f(int i10) {
            this.f42058a = i10;
        }

        public final int a() {
            return this.f42058a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && this.f42058a == ((f) obj).f42058a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f42058a);
        }

        public String toString() {
            int i10 = this.f42058a;
            return "Prompt(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final g f42059a = new g();

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

    /* renamed from: np.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0524h implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f42060a;

        public C0524h(int i10) {
            this.f42060a = i10;
        }

        public final int a() {
            return this.f42060a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0524h) && this.f42060a == ((C0524h) obj).f42060a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f42060a);
        }

        public String toString() {
            int i10 = this.f42060a;
            return "TakePhoto(pageIndex=" + i10 + ")";
        }
    }
}
