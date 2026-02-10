package uc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final a0 f50715a;

        /* renamed from: b  reason: collision with root package name */
        public final a0 f50716b;

        public a(a0 a0Var) {
            this(a0Var, a0Var);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f50715a.equals(aVar.f50715a) && this.f50716b.equals(aVar.f50716b)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f50715a.hashCode() * 31) + this.f50716b.hashCode();
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("[");
            sb2.append(this.f50715a);
            if (this.f50715a.equals(this.f50716b)) {
                str = "";
            } else {
                str = ", " + this.f50716b;
            }
            sb2.append(str);
            sb2.append("]");
            return sb2.toString();
        }

        public a(a0 a0Var, a0 a0Var2) {
            this.f50715a = (a0) oe.a.e(a0Var);
            this.f50716b = (a0) oe.a.e(a0Var2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f50717a;

        /* renamed from: b  reason: collision with root package name */
        private final a f50718b;

        public b(long j10) {
            this(j10, 0L);
        }

        @Override // uc.z
        public a e(long j10) {
            return this.f50718b;
        }

        @Override // uc.z
        public boolean g() {
            return false;
        }

        @Override // uc.z
        public long i() {
            return this.f50717a;
        }

        public b(long j10, long j11) {
            this.f50717a = j10;
            this.f50718b = new a(j11 == 0 ? a0.f50610c : new a0(0L, j11));
        }
    }

    a e(long j10);

    boolean g();

    long i();
}
