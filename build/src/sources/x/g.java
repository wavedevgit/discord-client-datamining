package x;

import android.view.Surface;
import x.w1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g extends w1.g {

    /* renamed from: a  reason: collision with root package name */
    private final int f52811a;

    /* renamed from: b  reason: collision with root package name */
    private final Surface f52812b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(int i10, Surface surface) {
        this.f52811a = i10;
        if (surface != null) {
            this.f52812b = surface;
            return;
        }
        throw new NullPointerException("Null surface");
    }

    @Override // x.w1.g
    public int a() {
        return this.f52811a;
    }

    @Override // x.w1.g
    public Surface b() {
        return this.f52812b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof w1.g) {
            w1.g gVar = (w1.g) obj;
            if (this.f52811a == gVar.a() && this.f52812b.equals(gVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f52811a ^ 1000003) * 1000003) ^ this.f52812b.hashCode();
    }

    public String toString() {
        return "Result{resultCode=" + this.f52811a + ", surface=" + this.f52812b + "}";
    }
}
