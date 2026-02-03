package l0;

import android.opengl.EGLSurface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends g {

    /* renamed from: a  reason: collision with root package name */
    private final EGLSurface f36280a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36281b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36282c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(EGLSurface eGLSurface, int i10, int i11) {
        if (eGLSurface != null) {
            this.f36280a = eGLSurface;
            this.f36281b = i10;
            this.f36282c = i11;
            return;
        }
        throw new NullPointerException("Null eglSurface");
    }

    @Override // l0.g
    public EGLSurface a() {
        return this.f36280a;
    }

    @Override // l0.g
    public int b() {
        return this.f36282c;
    }

    @Override // l0.g
    public int c() {
        return this.f36281b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f36280a.equals(gVar.a()) && this.f36281b == gVar.c() && this.f36282c == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f36280a.hashCode() ^ 1000003) * 1000003) ^ this.f36281b) * 1000003) ^ this.f36282c;
    }

    public String toString() {
        return "OutputSurface{eglSurface=" + this.f36280a + ", width=" + this.f36281b + ", height=" + this.f36282c + "}";
    }
}
