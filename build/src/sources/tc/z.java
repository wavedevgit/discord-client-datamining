package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f49999a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f50000b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f49999a.equals(aVar.f49999a) && this.f50000b.equals(aVar.f50000b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f49999a.hashCode() * 31) + this.f50000b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f49999a);
            if (this.f49999a.equals(this.f50000b)) {
                str = "";
            } else {
                str = ", " + this.f50000b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f49999a = (a0) ne.a.e(a0Var);
            this.f50000b = (a0) ne.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f50001a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50002b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // tc.z
        public a e(long j10) {
            return this.f50002b;
        }

        @Override // tc.z
        public boolean h() {
            return false;
        }

        @Override // tc.z
        public long i() {
            return this.f50001a;
        }

        public b(long j10, long j11) {
            this.f50001a = j10;
            this.f50002b = new a(j11 == 0 ? a0.f49894c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean h();

    long i();
}
