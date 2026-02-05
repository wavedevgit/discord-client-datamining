package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f50604a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f50605b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50604a.equals(aVar.f50604a) && this.f50605b.equals(aVar.f50605b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f50604a.hashCode() * 31) + this.f50605b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f50604a);
            if (this.f50604a.equals(this.f50605b)) {
                str = "";
            } else {
                str = ", " + this.f50605b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f50604a = (a0) ne.a.e(a0Var);
            this.f50605b = (a0) ne.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f50606a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50607b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // tc.z
        public a e(long j10) {
            return this.f50607b;
        }

        @Override // tc.z
        public boolean h() {
            return false;
        }

        @Override // tc.z
        public long i() {
            return this.f50606a;
        }

        public b(long j10, long j11) {
            this.f50606a = j10;
            this.f50607b = new a(j11 == 0 ? a0.f50499c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean h();

    long i();
}
