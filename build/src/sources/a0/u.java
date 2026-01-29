package a0;

import android.hardware.camera2.CaptureResult;
import b0.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements u {
        public static u l() {
            return new a();
        }

        @Override // a0.u
        public long a() {
            return -1L;
        }

        @Override // a0.u
        public q2 c() {
            return q2.b();
        }

        @Override // a0.u
        public t d() {
            return t.UNKNOWN;
        }

        @Override // a0.u
        public r e() {
            return r.UNKNOWN;
        }

        @Override // a0.u
        public CaptureResult f() {
            return null;
        }

        @Override // a0.u
        public n g() {
            return n.UNKNOWN;
        }

        @Override // a0.u
        public q h() {
            return q.UNKNOWN;
        }

        @Override // a0.u
        public s i() {
            return s.UNKNOWN;
        }

        @Override // a0.u
        public p j() {
            return p.UNKNOWN;
        }

        @Override // a0.u
        public o k() {
            return o.UNKNOWN;
        }
    }

    long a();

    default void b(h.b bVar) {
        bVar.g(d());
    }

    q2 c();

    t d();

    r e();

    default CaptureResult f() {
        return null;
    }

    n g();

    q h();

    s i();

    p j();

    o k();
}
