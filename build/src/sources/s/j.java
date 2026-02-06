package s;

import android.hardware.camera2.params.OutputConfiguration;
import android.os.Build;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j {

    /* renamed from: a  reason: collision with root package name */
    private final a f49621a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        void a(long j10);

        void b(Surface surface);

        void c(long j10);

        void d(String str);

        String e();

        void f();

        void g(int i10);

        Surface getSurface();

        Object h();
    }

    public j(int i10, Surface surface) {
        int i11 = Build.VERSION.SDK_INT;
        if (i11 >= 33) {
            this.f49621a = new n(i10, surface);
        } else if (i11 >= 28) {
            this.f49621a = new m(i10, surface);
        } else if (i11 >= 26) {
            this.f49621a = new l(i10, surface);
        } else {
            this.f49621a = new k(i10, surface);
        }
    }

    public static j j(Object obj) {
        a j10;
        if (obj == null) {
            return null;
        }
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 33) {
            j10 = n.m((OutputConfiguration) obj);
        } else if (i10 >= 28) {
            j10 = m.l((OutputConfiguration) obj);
        } else if (i10 >= 26) {
            j10 = l.k((OutputConfiguration) obj);
        } else {
            j10 = k.j((OutputConfiguration) obj);
        }
        if (j10 == null) {
            return null;
        }
        return new j(j10);
    }

    public void a(Surface surface) {
        this.f49621a.b(surface);
    }

    public void b() {
        this.f49621a.f();
    }

    public String c() {
        return this.f49621a.e();
    }

    public Surface d() {
        return this.f49621a.getSurface();
    }

    public void e(long j10) {
        this.f49621a.c(j10);
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof j)) {
            return false;
        }
        return this.f49621a.equals(((j) obj).f49621a);
    }

    public void f(int i10) {
        this.f49621a.g(i10);
    }

    public void g(String str) {
        this.f49621a.d(str);
    }

    public void h(long j10) {
        this.f49621a.a(j10);
    }

    public int hashCode() {
        return this.f49621a.hashCode();
    }

    public Object i() {
        return this.f49621a.h();
    }

    public j(OutputConfiguration outputConfiguration) {
        this.f49621a = n.m(outputConfiguration);
    }

    private j(a aVar) {
        this.f49621a = aVar;
    }
}
