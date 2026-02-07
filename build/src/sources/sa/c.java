package sa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends h {

    /* renamed from: o  reason: collision with root package name */
    private ga.e f49875o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f49876p;

    public c(ga.e eVar, boolean z10) {
        this.f49875o = eVar;
        this.f49876p = z10;
    }

    public synchronized ga.c F0() {
        ga.c d10;
        ga.e eVar = this.f49875o;
        if (eVar == null) {
            d10 = null;
        } else {
            d10 = eVar.d();
        }
        return d10;
    }

    public synchronized ga.e I0() {
        return this.f49875o;
    }

    @Override // sa.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                ga.e eVar = this.f49875o;
                if (eVar == null) {
                    return;
                }
                this.f49875o = null;
                eVar.a();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public synchronized int getHeight() {
        int height;
        ga.e eVar = this.f49875o;
        if (eVar == null) {
            height = 0;
        } else {
            height = eVar.d().getHeight();
        }
        return height;
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public synchronized int getWidth() {
        int width;
        ga.e eVar = this.f49875o;
        if (eVar == null) {
            width = 0;
        } else {
            width = eVar.d().getWidth();
        }
        return width;
    }

    @Override // sa.e
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f49875o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.a, sa.e
    public boolean l2() {
        return this.f49876p;
    }

    @Override // sa.e
    public synchronized int w() {
        int w10;
        ga.e eVar = this.f49875o;
        if (eVar == null) {
            w10 = 0;
        } else {
            w10 = eVar.d().w();
        }
        return w10;
    }
}
