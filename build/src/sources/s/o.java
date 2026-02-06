package s;

import android.view.Surface;
import java.util.Objects;
import s.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class o implements j.a {

    /* renamed from: a  reason: collision with root package name */
    final Object f49631a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Object obj) {
        this.f49631a = obj;
    }

    @Override // s.j.a
    public void b(Surface surface) {
        b2.e.h(surface, "Surface must not be null");
        if (getSurface() != surface) {
            if (!i()) {
                throw new IllegalStateException("Cannot have 2 surfaces for a non-sharing configuration");
            }
            throw new IllegalArgumentException("Exceeds maximum number of surfaces");
        }
        throw new IllegalStateException("Surface is already added!");
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof o)) {
            return false;
        }
        return Objects.equals(this.f49631a, ((o) obj).f49631a);
    }

    @Override // s.j.a
    public abstract Surface getSurface();

    public int hashCode() {
        return this.f49631a.hashCode();
    }

    abstract boolean i();

    @Override // s.j.a
    public void a(long j10) {
    }

    @Override // s.j.a
    public void g(int i10) {
    }
}
