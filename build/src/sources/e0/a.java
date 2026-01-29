package e0;

import a0.e1;
import e0.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f22481a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f22482b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, e1 e1Var) {
        if (str != null) {
            this.f22481a = str;
            if (e1Var != null) {
                this.f22482b = e1Var;
                return;
            }
            throw new NullPointerException("Null cameraConfigId");
        }
        throw new NullPointerException("Null cameraIdString");
    }

    @Override // e0.f.b
    public e1 b() {
        return this.f22482b;
    }

    @Override // e0.f.b
    public String c() {
        return this.f22481a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f22481a.equals(bVar.c()) && this.f22482b.equals(bVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f22481a.hashCode() ^ 1000003) * 1000003) ^ this.f22482b.hashCode();
    }

    public String toString() {
        return "CameraId{cameraIdString=" + this.f22481a + ", cameraConfigId=" + this.f22482b + "}";
    }
}
