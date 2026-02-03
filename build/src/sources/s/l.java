package s;

import android.hardware.camera2.params.OutputConfiguration;
import android.view.Surface;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends k {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final OutputConfiguration f48735a;

        /* renamed from: b  reason: collision with root package name */
        String f48736b;

        /* renamed from: c  reason: collision with root package name */
        long f48737c = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f48735a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f48735a, aVar.f48735a) || this.f48737c != aVar.f48737c || !Objects.equals(this.f48736b, aVar.f48736b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48735a.hashCode() ^ 31;
            int i10 = (hashCode2 << 5) - hashCode2;
            String str = this.f48736b;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i11 = hashCode ^ i10;
            return Long.hashCode(this.f48737c) ^ ((i11 << 5) - i11);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(int i10, Surface surface) {
        this(new a(new OutputConfiguration(i10, surface)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l k(OutputConfiguration outputConfiguration) {
        return new l(new a(outputConfiguration));
    }

    @Override // s.o, s.j.a
    public void b(Surface surface) {
        ((OutputConfiguration) h()).addSurface(surface);
    }

    @Override // s.k, s.j.a
    public void c(long j10) {
        ((a) this.f48740a).f48737c = j10;
    }

    @Override // s.k, s.j.a
    public void d(String str) {
        ((a) this.f48740a).f48736b = str;
    }

    @Override // s.k, s.j.a
    public String e() {
        return ((a) this.f48740a).f48736b;
    }

    @Override // s.k, s.j.a
    public void f() {
        ((OutputConfiguration) h()).enableSurfaceSharing();
    }

    @Override // s.k, s.j.a
    public Object h() {
        b2.e.a(this.f48740a instanceof a);
        return ((a) this.f48740a).f48735a;
    }

    @Override // s.k, s.o
    final boolean i() {
        throw new AssertionError("isSurfaceSharingEnabled() should not be called on API >= 26");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(Object obj) {
        super(obj);
    }
}
