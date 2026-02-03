package e0;

import a0.e1;
import e0.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f22513a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f22514b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, e1 e1Var) {
        if (str != null) {
            this.f22513a = str;
            if (e1Var != null) {
                this.f22514b = e1Var;
                return;
            }
            throw new NullPointerException("Null cameraConfigId");
        }
        throw new NullPointerException("Null cameraIdString");
    }

    @Override // e0.f.b
    public e1 b() {
        return this.f22514b;
    }

    @Override // e0.f.b
    public String c() {
        return this.f22513a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f22513a.equals(bVar.c()) && this.f22514b.equals(bVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f22513a.hashCode() ^ 1000003) * 1000003) ^ this.f22514b.hashCode();
    }

    public String toString() {
        return "CameraId{cameraIdString=" + this.f22513a + ", cameraConfigId=" + this.f22514b + "}";
    }
}
