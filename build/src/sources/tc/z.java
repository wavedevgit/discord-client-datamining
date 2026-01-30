package tc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f49519a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f49520b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f49519a.equals(aVar.f49519a) && this.f49520b.equals(aVar.f49520b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f49519a.hashCode() * 31) + this.f49520b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f49519a);
            if (this.f49519a.equals(this.f49520b)) {
                str = "";
            } else {
                str = ", " + this.f49520b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f49519a = (a0) ne.a.e(a0Var);
            this.f49520b = (a0) ne.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f49521a;

        /* renamed from: b  reason: collision with root package name */
        private final a f49522b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // tc.z
        public a e(long j10) {
            return this.f49522b;
        }

        @Override // tc.z
        public boolean h() {
            return false;
        }

        @Override // tc.z
        public long i() {
            return this.f49521a;
        }

        public b(long j10, long j11) {
            this.f49521a = j10;
            this.f49522b = new a(j11 == 0 ? a0.f49414c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean h();

    long i();
}
