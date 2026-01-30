package rn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: rn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0590a {

        /* renamed from: a  reason: collision with root package name */
        private final double f48380a;

        public C0590a(double d10) {
            this.f48380a = d10;
        }

        public final double a() {
            return this.f48380a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0590a) && Double.compare(this.f48380a, ((C0590a) obj).f48380a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f48380a);
        }

        public String toString() {
            double d10 = this.f48380a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0590a a();

    void b();

    void c();
}
