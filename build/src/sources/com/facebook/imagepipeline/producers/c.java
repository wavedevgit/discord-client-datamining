package com.facebook.imagepipeline.producers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Consumer {

    /* renamed from: a  reason: collision with root package name */
    private boolean f10306a = false;

    public static boolean d(int i10) {
        return (i10 & 1) == 1;
    }

    public static boolean e(int i10) {
        return !d(i10);
    }

    public static int k(boolean z10) {
        return z10 ? 1 : 0;
    }

    public static boolean l(int i10, int i11) {
        return (i10 & i11) != 0;
    }

    public static boolean m(int i10, int i11) {
        return (i10 & i11) == i11;
    }

    public static int n(int i10, int i11) {
        return i10 & (~i11);
    }

    @Override // com.facebook.imagepipeline.producers.Consumer
    public synchronized void a() {
        if (this.f10306a) {
            return;
        }
        this.f10306a = true;
        try {
            f();
        } catch (Exception e10) {
            j(e10);
        }
    }

    @Override // com.facebook.imagepipeline.producers.Consumer
    public synchronized void b(Object obj, int i10) {
        if (this.f10306a) {
            return;
        }
        this.f10306a = d(i10);
        try {
            h(obj, i10);
        } catch (Exception e10) {
            j(e10);
        }
    }

    @Override // com.facebook.imagepipeline.producers.Consumer
    public synchronized void c(float f10) {
        if (this.f10306a) {
            return;
        }
        try {
            i(f10);
        } catch (Exception e10) {
            j(e10);
        }
    }

    protected abstract void f();

    protected abstract void g(Throwable th2);

    protected abstract void h(Object obj, int i10);

    protected abstract void i(float f10);

    protected void j(Exception exc) {
        p8.a.N(getClass(), "unhandled exception", exc);
    }

    @Override // com.facebook.imagepipeline.producers.Consumer
    public synchronized void onFailure(Throwable th2) {
        if (this.f10306a) {
            return;
        }
        this.f10306a = true;
        try {
            g(th2);
        } catch (Exception e10) {
            j(e10);
        }
    }
}
