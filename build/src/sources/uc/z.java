package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f50716a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f50717b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50716a.equals(aVar.f50716a) && this.f50717b.equals(aVar.f50717b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f50716a.hashCode() * 31) + this.f50717b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f50716a);
            if (this.f50716a.equals(this.f50717b)) {
                str = "";
            } else {
                str = ", " + this.f50717b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f50716a = (a0) oe.a.e(a0Var);
            this.f50717b = (a0) oe.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f50718a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50719b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // uc.z
        public a e(long j10) {
            return this.f50719b;
        }

        @Override // uc.z
        public boolean g() {
            return false;
        }

        @Override // uc.z
        public long i() {
            return this.f50718a;
        }

        public b(long j10, long j11) {
            this.f50718a = j10;
            this.f50719b = new a(j11 == 0 ? a0.f50611c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean g();

    long i();
}
