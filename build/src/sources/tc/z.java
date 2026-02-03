package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f49791a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f49792b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f49791a.equals(aVar.f49791a) && this.f49792b.equals(aVar.f49792b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f49791a.hashCode() * 31) + this.f49792b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f49791a);
            if (this.f49791a.equals(this.f49792b)) {
                str = "";
            } else {
                str = ", " + this.f49792b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f49791a = (a0) ne.a.e(a0Var);
            this.f49792b = (a0) ne.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f49793a;

        /* renamed from: b  reason: collision with root package name */
        private final a f49794b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // tc.z
        public a e(long j10) {
            return this.f49794b;
        }

        @Override // tc.z
        public boolean h() {
            return false;
        }

        @Override // tc.z
        public long i() {
            return this.f49793a;
        }

        public b(long j10, long j11) {
            this.f49793a = j10;
            this.f49794b = new a(j11 == 0 ? a0.f49686c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean h();

    long i();
}
