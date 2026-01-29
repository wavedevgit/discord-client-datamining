package l0;

import android.opengl.EGLSurface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends g {

    /* renamed from: a  reason: collision with root package name */
    private final EGLSurface f36681a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36682b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36683c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(EGLSurface eGLSurface, int i10, int i11) {
        if (eGLSurface != null) {
            this.f36681a = eGLSurface;
            this.f36682b = i10;
            this.f36683c = i11;
            return;
        }
        throw new NullPointerException("Null eglSurface");
    }

    @Override // l0.g
    public EGLSurface a() {
        return this.f36681a;
    }

    @Override // l0.g
    public int b() {
        return this.f36683c;
    }

    @Override // l0.g
    public int c() {
        return this.f36682b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f36681a.equals(gVar.a()) && this.f36682b == gVar.c() && this.f36683c == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f36681a.hashCode() ^ 1000003) * 1000003) ^ this.f36682b) * 1000003) ^ this.f36683c;
    }

    public String toString() {
        return "OutputSurface{eglSurface=" + this.f36681a + ", width=" + this.f36682b + ", height=" + this.f36683c + "}";
    }
}
