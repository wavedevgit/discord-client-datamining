package sa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends h {

    /* renamed from: o  reason: collision with root package name */
    private ga.e f48936o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f48937p;

    public c(ga.e eVar, boolean z10) {
        this.f48936o = eVar;
        this.f48937p = z10;
    }

    public synchronized ga.c G0() {
        ga.c d10;
        ga.e eVar = this.f48936o;
        if (eVar == null) {
            d10 = null;
        } else {
            d10 = eVar.d();
        }
        return d10;
    }

    public synchronized ga.e J0() {
        return this.f48936o;
    }

    @Override // sa.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                ga.e eVar = this.f48936o;
                if (eVar == null) {
                    return;
                }
                this.f48936o = null;
                eVar.a();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public synchronized int getHeight() {
        int height;
        ga.e eVar = this.f48936o;
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
        ga.e eVar = this.f48936o;
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
        if (this.f48936o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // sa.a, sa.e
    public boolean l2() {
        return this.f48937p;
    }

    @Override // sa.e
    public synchronized int t() {
        int t10;
        ga.e eVar = this.f48936o;
        if (eVar == null) {
            t10 = 0;
        } else {
            t10 = eVar.d().t();
        }
        return t10;
    }
}
