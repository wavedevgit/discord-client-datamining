package tp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final a f50898a = new a();

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
        public static final b f50899a = new b();

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
        private final int f50900a;

        public c(int i10) {
            this.f50900a = i10;
        }

        public final int a() {
            return this.f50900a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof c) && this.f50900a == ((c) obj).f50900a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f50900a);
        }

        public String toString() {
            int i10 = this.f50900a;
            return "Check(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f50901a;

        public d(int i10) {
            this.f50901a = i10;
        }

        public final int a() {
            return this.f50901a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof d) && this.f50901a == ((d) obj).f50901a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f50901a);
        }

        public String toString() {
            int i10 = this.f50901a;
            return "CheckUpload(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final e f50902a = new e();

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
        private final int f50903a;

        public f(int i10) {
            this.f50903a = i10;
        }

        public final int a() {
            return this.f50903a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof f) && this.f50903a == ((f) obj).f50903a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f50903a);
        }

        public String toString() {
            int i10 = this.f50903a;
            return "Prompt(pageIndex=" + i10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g implements h {

        /* renamed from: a  reason: collision with root package name */
        public static final g f50904a = new g();

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

    /* renamed from: tp.h$h  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0655h implements h {

        /* renamed from: a  reason: collision with root package name */
        private final int f50905a;

        public C0655h(int i10) {
            this.f50905a = i10;
        }

        public final int a() {
            return this.f50905a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0655h) && this.f50905a == ((C0655h) obj).f50905a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Integer.hashCode(this.f50905a);
        }

        public String toString() {
            int i10 = this.f50905a;
            return "TakePhoto(pageIndex=" + i10 + ")";
        }
    }
}
