package s;

import android.hardware.camera2.params.OutputConfiguration;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends m {
    /* JADX INFO: Access modifiers changed from: package-private */
    public n(int i10, Surface surface) {
        this(new OutputConfiguration(i10, surface));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n m(OutputConfiguration outputConfiguration) {
        return new n(outputConfiguration);
    }

    @Override // s.o, s.j.a
    public void a(long j10) {
        if (j10 == -1) {
            return;
        }
        ((OutputConfiguration) h()).setStreamUseCase(j10);
    }

    @Override // s.l, s.o, s.j.a
    public /* bridge */ /* synthetic */ void b(Surface surface) {
        super.b(surface);
    }

    @Override // s.m, s.l, s.k, s.j.a
    public void c(long j10) {
        ((OutputConfiguration) h()).setDynamicRangeProfile(j10);
    }

    @Override // s.m, s.l, s.k, s.j.a
    public /* bridge */ /* synthetic */ void d(String str) {
        super.d(str);
    }

    @Override // s.m, s.l, s.k, s.j.a
    public /* bridge */ /* synthetic */ String e() {
        return super.e();
    }

    @Override // s.o
    public /* bridge */ /* synthetic */ boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override // s.l, s.k, s.j.a
    public /* bridge */ /* synthetic */ void f() {
        super.f();
    }

    @Override // s.o, s.j.a
    public void g(int i10) {
        ((OutputConfiguration) h()).setMirrorMode(i10);
    }

    @Override // s.k, s.o, s.j.a
    public /* bridge */ /* synthetic */ Surface getSurface() {
        return super.getSurface();
    }

    @Override // s.m, s.l, s.k, s.j.a
    public Object h() {
        b2.e.a(this.f49147a instanceof OutputConfiguration);
        return this.f49147a;
    }

    @Override // s.o
    public /* bridge */ /* synthetic */ int hashCode() {
        return super.hashCode();
    }

    n(Object obj) {
        super(obj);
    }
}
