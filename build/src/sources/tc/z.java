package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f50580a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f50581b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50580a.equals(aVar.f50580a) && this.f50581b.equals(aVar.f50581b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f50580a.hashCode() * 31) + this.f50581b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f50580a);
            if (this.f50580a.equals(this.f50581b)) {
                str = "";
            } else {
                str = ", " + this.f50581b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f50580a = (a0) ne.a.e(a0Var);
            this.f50581b = (a0) ne.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f50582a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50583b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // tc.z
        public a e(long j10) {
            return this.f50583b;
        }

        @Override // tc.z
        public boolean h() {
            return false;
        }

        @Override // tc.z
        public long i() {
            return this.f50582a;
        }

        public b(long j10, long j11) {
            this.f50582a = j10;
            this.f50583b = new a(j11 == 0 ? a0.f50475c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean h();

    long i();
}
