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
        final OutputConfiguration f49141a;

        /* renamed from: b  reason: collision with root package name */
        String f49142b;

        /* renamed from: c  reason: collision with root package name */
        boolean f49143c;

        /* renamed from: d  reason: collision with root package name */
        long f49144d = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f49141a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f49141a, aVar.f49141a) || this.f49143c != aVar.f49143c || this.f49144d != aVar.f49144d || !Objects.equals(this.f49142b, aVar.f49142b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49141a.hashCode() ^ 31;
            int i10 = (this.f49143c ? 1 : 0) ^ ((hashCode2 << 5) - hashCode2);
            int i11 = (i10 << 5) - i10;
            String str = this.f49142b;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = hashCode ^ i11;
            return Long.hashCode(this.f49144d) ^ ((i12 << 5) - i12);
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
        ((a) this.f49150a).f49144d = j10;
    }

    @Override // s.j.a
    public void d(String str) {
        ((a) this.f49150a).f49142b = str;
    }

    @Override // s.j.a
    public String e() {
        return ((a) this.f49150a).f49142b;
    }

    @Override // s.j.a
    public void f() {
        ((a) this.f49150a).f49143c = true;
    }

    @Override // s.o, s.j.a
    public Surface getSurface() {
        return ((OutputConfiguration) h()).getSurface();
    }

    @Override // s.j.a
    public Object h() {
        b2.e.a(this.f49150a instanceof a);
        return ((a) this.f49150a).f49141a;
    }

    @Override // s.o
    boolean i() {
        return ((a) this.f49150a).f49143c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj) {
        super(obj);
    }
}
