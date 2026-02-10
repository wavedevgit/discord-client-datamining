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
        final OutputConfiguration f49473a;

        /* renamed from: b  reason: collision with root package name */
        String f49474b;

        /* renamed from: c  reason: collision with root package name */
        boolean f49475c;

        /* renamed from: d  reason: collision with root package name */
        long f49476d = 1;

        a(OutputConfiguration outputConfiguration) {
            this.f49473a = outputConfiguration;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Objects.equals(this.f49473a, aVar.f49473a) || this.f49475c != aVar.f49475c || this.f49476d != aVar.f49476d || !Objects.equals(this.f49474b, aVar.f49474b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode;
            int hashCode2 = this.f49473a.hashCode() ^ 31;
            int i10 = (this.f49475c ? 1 : 0) ^ ((hashCode2 << 5) - hashCode2);
            int i11 = (i10 << 5) - i10;
            String str = this.f49474b;
            if (str == null) {
                hashCode = 0;
            } else {
                hashCode = str.hashCode();
            }
            int i12 = hashCode ^ i11;
            return Long.hashCode(this.f49476d) ^ ((i12 << 5) - i12);
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
        ((a) this.f49482a).f49476d = j10;
    }

    @Override // s.j.a
    public void d(String str) {
        ((a) this.f49482a).f49474b = str;
    }

    @Override // s.j.a
    public String e() {
        return ((a) this.f49482a).f49474b;
    }

    @Override // s.j.a
    public void f() {
        ((a) this.f49482a).f49475c = true;
    }

    @Override // s.o, s.j.a
    public Surface getSurface() {
        return ((OutputConfiguration) h()).getSurface();
    }

    @Override // s.j.a
    public Object h() {
        b2.e.a(this.f49482a instanceof a);
        return ((a) this.f49482a).f49473a;
    }

    @Override // s.o
    boolean i() {
        return ((a) this.f49482a).f49475c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Object obj) {
        super(obj);
    }
}
