package ko;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: ko.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0451a {

        /* renamed from: a  reason: collision with root package name */
        private final double f32542a;

        public C0451a(double d10) {
            this.f32542a = d10;
        }

        public final double a() {
            return this.f32542a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0451a) && Double.compare(this.f32542a, ((C0451a) obj).f32542a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f32542a);
        }

        public String toString() {
            double d10 = this.f32542a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0451a a();

    void b();

    void c();
}
