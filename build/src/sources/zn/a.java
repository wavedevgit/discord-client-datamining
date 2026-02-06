package zn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: zn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0775a {

        /* renamed from: a  reason: collision with root package name */
        private final double f56354a;

        public C0775a(double d10) {
            this.f56354a = d10;
        }

        public final double a() {
            return this.f56354a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0775a) && Double.compare(this.f56354a, ((C0775a) obj).f56354a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f56354a);
        }

        public String toString() {
            double d10 = this.f56354a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0775a a();

    void b();

    void c();
}
