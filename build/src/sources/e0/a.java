package e0;

import a0.e1;
import e0.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final String f21276a;

    /* renamed from: b  reason: collision with root package name */
    private final e1 f21277b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(String str, e1 e1Var) {
        if (str != null) {
            this.f21276a = str;
            if (e1Var != null) {
                this.f21277b = e1Var;
                return;
            }
            throw new NullPointerException("Null cameraConfigId");
        }
        throw new NullPointerException("Null cameraIdString");
    }

    @Override // e0.f.b
    public e1 b() {
        return this.f21277b;
    }

    @Override // e0.f.b
    public String c() {
        return this.f21276a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f21276a.equals(bVar.c()) && this.f21277b.equals(bVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f21276a.hashCode() ^ 1000003) * 1000003) ^ this.f21277b.hashCode();
    }

    public String toString() {
        return "CameraId{cameraIdString=" + this.f21276a + ", cameraConfigId=" + this.f21277b + "}";
    }
}
