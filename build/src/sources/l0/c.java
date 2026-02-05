package l0;

import android.opengl.EGLSurface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c extends g {

    /* renamed from: a  reason: collision with root package name */
    private final EGLSurface f36207a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36208b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36209c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(EGLSurface eGLSurface, int i10, int i11) {
        if (eGLSurface != null) {
            this.f36207a = eGLSurface;
            this.f36208b = i10;
            this.f36209c = i11;
            return;
        }
        throw new NullPointerException("Null eglSurface");
    }

    @Override // l0.g
    public EGLSurface a() {
        return this.f36207a;
    }

    @Override // l0.g
    public int b() {
        return this.f36209c;
    }

    @Override // l0.g
    public int c() {
        return this.f36208b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f36207a.equals(gVar.a()) && this.f36208b == gVar.c() && this.f36209c == gVar.b()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f36207a.hashCode() ^ 1000003) * 1000003) ^ this.f36208b) * 1000003) ^ this.f36209c;
    }

    public String toString() {
        return "OutputSurface{eglSurface=" + this.f36207a + ", width=" + this.f36208b + ", height=" + this.f36209c + "}";
    }
}
