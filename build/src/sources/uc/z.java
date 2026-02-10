package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f51536a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f51537b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f51536a.equals(aVar.f51536a) && this.f51537b.equals(aVar.f51537b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f51536a.hashCode() * 31) + this.f51537b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f51536a);
            if (this.f51536a.equals(this.f51537b)) {
                str = "";
            } else {
                str = ", " + this.f51537b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f51536a = (a0) oe.a.e(a0Var);
            this.f51537b = (a0) oe.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f51538a;

        /* renamed from: b  reason: collision with root package name */
        private final a f51539b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // uc.z
        public a e(long j10) {
            return this.f51539b;
        }

        @Override // uc.z
        public boolean g() {
            return false;
        }

        @Override // uc.z
        public long i() {
            return this.f51538a;
        }

        public b(long j10, long j11) {
            this.f51538a = j10;
            this.f51539b = new a(j11 == 0 ? a0.f51431c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean g();

    long i();
}
