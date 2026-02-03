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
        final OutputConfiguration f49148a;

        /* renamed from: b  reason: collision with root package name */
        long f49149b = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f49148a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f49148a, aVar.f49148a) || this.f49149b != aVar.f49149b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode = this.f49148a.hashCode() ^ 31;
            return Long.hashCode(this.f49149b) ^ ((hashCode << 5) - hashCode);
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
        ((a) this.f49150a).f49149b = j10;
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
        b2.e.a(this.f49150a instanceof a);
        return ((a) this.f49150a).f49148a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(Object obj) {
        super(obj);
    }
}
