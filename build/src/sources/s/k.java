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
        final OutputConfiguration f48677a;

        /* renamed from: b  reason: collision with root package name */
        String f48678b;

        /* renamed from: c  reason: collision with root package name */
        boolean f48679c;

        /* renamed from: d  reason: collision with root package name */
        long f48680d = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f48677a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f48677a, aVar.f48677a) || this.f48679c != aVar.f48679c || this.f48680d != aVar.f48680d || !Objects.equals(this.f48678b, aVar.f48678b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f48677a.hashCode() ^ 31;
            int i10 = (this.f48679c ? 1 : 0) ^ ((hashCode2 << 5) - hashCode2);
            int i11 = (i10 << 5) - i10;
            String str = this.f48678b;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = hashCode ^ i11;
            return Long.hashCode(this.f48680d) ^ ((i12 << 5) - i12);
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
        ((a) this.f48686a).f48680d = j10;
    }

    @Override // s.j.a
    public void d(String str) {
        ((a) this.f48686a).f48678b = str;
    }

    @Override // s.j.a
    public String e() {
        return ((a) this.f48686a).f48678b;
    }

    @Override // s.j.a
    public void f() {
        ((a) this.f48686a).f48679c = true;
    }

    @Override // s.o, s.j.a
    public Surface getSurface() {
        return ((OutputConfiguration) h()).getSurface();
    }

    @Override // s.j.a
    public Object h() {
        b2.e.a(this.f48686a instanceof a);
        return ((a) this.f48686a).f48677a;
    }

    @Override // s.o
    boolean i() {
        return ((a) this.f48686a).f48679c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj) {
        super(obj);
    }
}
