package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f50002a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f50003b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50002a.equals(aVar.f50002a) && this.f50003b.equals(aVar.f50003b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f50002a.hashCode() * 31) + this.f50003b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f50002a);
            if (this.f50002a.equals(this.f50003b)) {
                str = "";
            } else {
                str = ", " + this.f50003b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f50002a = (a0) ne.a.e(a0Var);
            this.f50003b = (a0) ne.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f50004a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50005b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // tc.z
        public a e(long j10) {
            return this.f50005b;
        }

        @Override // tc.z
        public boolean h() {
            return false;
        }

        @Override // tc.z
        public long i() {
            return this.f50004a;
        }

        public b(long j10, long j11) {
            this.f50004a = j10;
            this.f50005b = new a(j11 == 0 ? a0.f49897c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean h();

    long i();
}
