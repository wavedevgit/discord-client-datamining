package l0;

import android.opengl.EGLSurface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends g {

    /* renamed from: a  reason: collision with root package name */
    private final EGLSurface f35380a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35381b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35382c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(EGLSurface eGLSurface, int i10, int i11) {
        if (eGLSurface != null) {
            this.f35380a = eGLSurface;
            this.f35381b = i10;
            this.f35382c = i11;
            return;
        }
        throw new NullPointerException("Null eglSurface");
    }

    @Override // l0.g
    public EGLSurface a() {
        return this.f35380a;
    }

    @Override // l0.g
    public int b() {
        return this.f35382c;
    }

    @Override // l0.g
    public int c() {
        return this.f35381b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f35380a.equals(gVar.a()) && this.f35381b == gVar.c() && this.f35382c == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f35380a.hashCode() ^ 1000003) * 1000003) ^ this.f35381b) * 1000003) ^ this.f35382c;
    }

    public String toString() {
        return "OutputSurface{eglSurface=" + this.f35380a + ", width=" + this.f35381b + ", height=" + this.f35382c + "}";
    }
}
