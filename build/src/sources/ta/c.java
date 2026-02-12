package ta;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends h {

    /* renamed from: o  reason: collision with root package name */
    private ha.e f48649o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f48650p;

    public c(ha.e eVar, boolean z10) {
        this.f48649o = eVar;
        this.f48650p = z10;
    }

    public synchronized ha.c C0() {
        ha.c d10;
        ha.e eVar = this.f48649o;
        if (eVar == null) {
            d10 = null;
        } else {
            d10 = eVar.d();
        }
        return d10;
    }

    public synchronized ha.e E0() {
        return this.f48649o;
    }

    @Override // ta.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                ha.e eVar = this.f48649o;
                if (eVar == null) {
                    return;
                }
                this.f48649o = null;
                eVar.a();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public synchronized int getHeight() {
        int height;
        ha.e eVar = this.f48649o;
        if (eVar == null) {
            height = 0;
        } else {
            height = eVar.d().getHeight();
        }
        return height;
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public synchronized int getWidth() {
        int width;
        ha.e eVar = this.f48649o;
        if (eVar == null) {
            width = 0;
        } else {
            width = eVar.d().getWidth();
        }
        return width;
    }

    @Override // ta.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f48649o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // ta.a, ta.e
    public boolean q2() {
        return this.f48650p;
    }

    @Override // ta.e
    public synchronized int w() {
        int w10;
        ha.e eVar = this.f48649o;
        if (eVar == null) {
            w10 = 0;
        } else {
            w10 = eVar.d().w();
        }
        return w10;
    }
}
