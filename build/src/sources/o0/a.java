package o0;

import androidx.lifecycle.LifecycleOwner;
import e0.f;
import o0.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a extends c.a {

    /* renamed from: a  reason: collision with root package name */
    private final LifecycleOwner f41282a;

    /* renamed from: b  reason: collision with root package name */
    private final f.b f41283b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(LifecycleOwner lifecycleOwner, f.b bVar) {
        if (lifecycleOwner != null) {
            this.f41282a = lifecycleOwner;
            if (bVar != null) {
                this.f41283b = bVar;
                return;
            }
            throw new NullPointerException("Null cameraId");
        }
        throw new NullPointerException("Null lifecycleOwner");
    }

    @Override // o0.c.a
    public f.b b() {
        return this.f41283b;
    }

    @Override // o0.c.a
    public LifecycleOwner c() {
        return this.f41282a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof c.a) {
            c.a aVar = (c.a) obj;
            if (this.f41282a.equals(aVar.c()) && this.f41283b.equals(aVar.b())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f41282a.hashCode() ^ 1000003) * 1000003) ^ this.f41283b.hashCode();
    }

    public String toString() {
        return "Key{lifecycleOwner=" + this.f41282a + ", cameraId=" + this.f41283b + "}";
    }
}
