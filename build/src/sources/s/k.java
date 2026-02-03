package s;

import android.hardware.camera2.params.OutputConfiguration;
import android.view.Surface;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k extends o {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final OutputConfiguration f48731a;

        /* renamed from: b  reason: collision with root package name */
        String f48732b;

        /* renamed from: c  reason: collision with root package name */
        boolean f48733c;

        /* renamed from: d  reason: collision with root package name */
        long f48734d = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f48731a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f48731a, aVar.f48731a) || this.f48733c != aVar.f48733c || this.f48734d != aVar.f48734d || !Objects.equals(this.f48732b, aVar.f48732b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48731a.hashCode() ^ 31;
            int i10 = (this.f48733c ? 1 : 0) ^ ((hashCode2 << 5) - hashCode2);
            int i11 = (i10 << 5) - i10;
            String str = this.f48732b;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = hashCode ^ i11;
            return Long.hashCode(this.f48734d) ^ ((i12 << 5) - i12);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(int i10, Surface surface) {
        this(new a(new OutputConfiguration(i10, surface)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static k j(OutputConfiguration outputConfiguration) {
        return new k(new a(outputConfiguration));
    }

    @Override // s.j.a
    public void c(long j10) {
        ((a) this.f48740a).f48734d = j10;
    }

    @Override // s.j.a
    public void d(String str) {
        ((a) this.f48740a).f48732b = str;
    }

    @Override // s.j.a
    public String e() {
        return ((a) this.f48740a).f48732b;
    }

    @Override // s.j.a
    public void f() {
        ((a) this.f48740a).f48733c = true;
    }

    @Override // s.o, s.j.a
    public Surface getSurface() {
        return ((OutputConfiguration) h()).getSurface();
    }

    @Override // s.j.a
    public Object h() {
        b2.e.a(this.f48740a instanceof a);
        return ((a) this.f48740a).f48731a;
    }

    @Override // s.o
    boolean i() {
        return ((a) this.f48740a).f48733c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj) {
        super(obj);
    }
}
