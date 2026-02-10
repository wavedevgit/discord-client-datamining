package l0;

import android.opengl.EGLSurface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends g {

    /* renamed from: a  reason: collision with root package name */
    private final EGLSurface f35483a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35484b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35485c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(EGLSurface eGLSurface, int i10, int i11) {
        if (eGLSurface != null) {
            this.f35483a = eGLSurface;
            this.f35484b = i10;
            this.f35485c = i11;
            return;
        }
        throw new NullPointerException("Null eglSurface");
    }

    @Override // l0.g
    public EGLSurface a() {
        return this.f35483a;
    }

    @Override // l0.g
    public int b() {
        return this.f35485c;
    }

    @Override // l0.g
    public int c() {
        return this.f35484b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f35483a.equals(gVar.a()) && this.f35484b == gVar.c() && this.f35485c == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f35483a.hashCode() ^ 1000003) * 1000003) ^ this.f35484b) * 1000003) ^ this.f35485c;
    }

    public String toString() {
        return "OutputSurface{eglSurface=" + this.f35483a + ", width=" + this.f35484b + ", height=" + this.f35485c + "}";
    }
}
