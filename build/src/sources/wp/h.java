package wp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final a f53901a = new a();

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
        public static final b f53902a = new b();

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
        private final int f53903a;

        public c(int i10) {
            this.f53903a = i10;
        }

        public final int a() {
            return this.f53903a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && this.f53903a == ((c) obj).f53903a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f53903a);
        }

        public String toString() {
            int i10 = this.f53903a;
            return "Check(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f53904a;

        public d(int i10) {
            this.f53904a = i10;
        }

        public final int a() {
            return this.f53904a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && this.f53904a == ((d) obj).f53904a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f53904a);
        }

        public String toString() {
            int i10 = this.f53904a;
            return "CheckUpload(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final e f53905a = new e();

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
        private final int f53906a;

        public f(int i10) {
            this.f53906a = i10;
        }

        public final int a() {
            return this.f53906a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && this.f53906a == ((f) obj).f53906a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f53906a);
        }

        public String toString() {
            int i10 = this.f53906a;
            return "Prompt(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final g f53907a = new g();

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

    /* renamed from: wp.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0754h implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f53908a;

        public C0754h(int i10) {
            this.f53908a = i10;
        }

        public final int a() {
            return this.f53908a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0754h) && this.f53908a == ((C0754h) obj).f53908a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f53908a);
        }

        public String toString() {
            int i10 = this.f53908a;
            return "TakePhoto(pageIndex=" + i10 + ")";
        }
    }
}
