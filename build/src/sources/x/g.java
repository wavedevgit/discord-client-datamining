package x;

import android.view.Surface;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g extends w1.g {

    /* renamed from: a  reason: collision with root package name */
    private final int f52885a;

    /* renamed from: b  reason: collision with root package name */
    private final Surface f52886b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(int i10, Surface surface) {
        this.f52885a = i10;
        if (surface != null) {
            this.f52886b = surface;
            return;
        }
        throw new NullPointerException("Null surface");
    }

    @Override // x.w1.g
    public int a() {
        return this.f52885a;
    }

    @Override // x.w1.g
    public Surface b() {
        return this.f52886b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.g) {
            w1.g gVar = (w1.g) obj;
            if (this.f52885a == gVar.a() && this.f52886b.equals(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f52885a ^ 1000003) * 1000003) ^ this.f52886b.hashCode();
    }

    public String toString() {
        return "Result{resultCode=" + this.f52885a + ", surface=" + this.f52886b + "}";
    }
}
