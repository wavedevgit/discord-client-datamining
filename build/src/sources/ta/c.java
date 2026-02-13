package ta;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends h {

    /* renamed from: o  reason: collision with root package name */
    private ha.e f49217o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f49218p;

    public c(ha.e eVar, boolean z10) {
        this.f49217o = eVar;
        this.f49218p = z10;
    }

    public synchronized ha.c C0() {
        ha.c d10;
        ha.e eVar = this.f49217o;
        if (eVar == null) {
            d10 = null;
        } else {
            d10 = eVar.d();
        }
        return d10;
    }

    public synchronized ha.e E0() {
        return this.f49217o;
    }

    @Override // ta.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                ha.e eVar = this.f49217o;
                if (eVar == null) {
                    return;
                }
                this.f49217o = null;
                eVar.a();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public synchronized int getHeight() {
        int height;
        ha.e eVar = this.f49217o;
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
        ha.e eVar = this.f49217o;
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
        if (this.f49217o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // ta.a, ta.e
    public boolean q2() {
        return this.f49218p;
    }

    @Override // ta.e
    public synchronized int w() {
        int w10;
        ha.e eVar = this.f49217o;
        if (eVar == null) {
            w10 = 0;
        } else {
            w10 = eVar.d().w();
        }
        return w10;
    }
}
