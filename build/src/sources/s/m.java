package s;

import android.hardware.camera2.params.OutputConfiguration;
import android.view.Surface;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m extends l {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final OutputConfiguration f48668a;

        /* renamed from: b  reason: collision with root package name */
        long f48669b = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f48668a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f48668a, aVar.f48668a) || this.f48669b != aVar.f48669b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode = this.f48668a.hashCode() ^ 31;
            return Long.hashCode(this.f48669b) ^ ((hashCode << 5) - hashCode);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(int i10, Surface surface) {
        this(new a(new OutputConfiguration(i10, surface)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m l(OutputConfiguration outputConfiguration) {
        return new m(new a(outputConfiguration));
    }

    @Override // s.l, s.k, s.j.a
    public void c(long j10) {
        ((a) this.f48670a).f48669b = j10;
    }

    @Override // s.l, s.k, s.j.a
    public void d(String str) {
        ((OutputConfiguration) h()).setPhysicalCameraId(str);
    }

    @Override // s.l, s.k, s.j.a
    public String e() {
        return null;
    }

    @Override // s.l, s.k, s.j.a
    public Object h() {
        b2.e.a(this.f48670a instanceof a);
        return ((a) this.f48670a).f48668a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(Object obj) {
        super(obj);
    }
}
