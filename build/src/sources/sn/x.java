package sn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface x {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements x {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f50003a;

        public a(boolean z10) {
            this.f50003a = z10;
        }

        public final boolean a() {
            return this.f50003a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && this.f50003a == ((a) obj).f50003a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f50003a);
        }

        public String toString() {
            boolean z10 = this.f50003a;
            return "Closed(wasRecordingInterrupted=" + z10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final b f50004a = new b();

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final c f50005a = new c();

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final d f50006a = new d();

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final e f50007a = new e();

        private e() {
        }
    }
}
