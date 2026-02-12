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
        final OutputConfiguration f47790a;

        /* renamed from: b  reason: collision with root package name */
        String f47791b;

        /* renamed from: c  reason: collision with root package name */
        boolean f47792c;

        /* renamed from: d  reason: collision with root package name */
        long f47793d = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f47790a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f47790a, aVar.f47790a) || this.f47792c != aVar.f47792c || this.f47793d != aVar.f47793d || !Objects.equals(this.f47791b, aVar.f47791b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f47790a.hashCode() ^ 31;
            int i10 = (this.f47792c ? 1 : 0) ^ ((hashCode2 << 5) - hashCode2);
            int i11 = (i10 << 5) - i10;
            String str = this.f47791b;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = hashCode ^ i11;
            return Long.hashCode(this.f47793d) ^ ((i12 << 5) - i12);
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
        ((a) this.f47799a).f47793d = j10;
    }

    @Override // s.j.a
    public void d(String str) {
        ((a) this.f47799a).f47791b = str;
    }

    @Override // s.j.a
    public String e() {
        return ((a) this.f47799a).f47791b;
    }

    @Override // s.j.a
    public void f() {
        ((a) this.f47799a).f47792c = true;
    }

    @Override // s.o, s.j.a
    public Surface getSurface() {
        return ((OutputConfiguration) h()).getSurface();
    }

    @Override // s.j.a
    public Object h() {
        b2.e.a(this.f47799a instanceof a);
        return ((a) this.f47799a).f47790a;
    }

    @Override // s.o
    boolean i() {
        return ((a) this.f47799a).f47792c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj) {
        super(obj);
    }
}
