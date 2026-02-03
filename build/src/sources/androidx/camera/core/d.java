package androidx.camera.core;

import a0.j1;
import android.media.Image;
import android.media.ImageReader;
import android.view.Surface;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements j1 {

    /* renamed from: a  reason: collision with root package name */
    private final ImageReader f1985a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f1986b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private boolean f1987c = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(ImageReader imageReader) {
        this.f1985a = imageReader;
    }

    public static /* synthetic */ void a(final d dVar, Executor executor, final j1.a aVar, ImageReader imageReader) {
        synchronized (dVar.f1986b) {
            try {
                if (!dVar.f1987c) {
                    executor.execute(new Runnable() { // from class: androidx.camera.core.c
                        @Override // java.lang.Runnable
                        public final void run() {
                            d.h(d.this, aVar);
                        }
                    });
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static /* synthetic */ void h(d dVar, j1.a aVar) {
        dVar.getClass();
        aVar.a(dVar);
    }

    private boolean i(RuntimeException runtimeException) {
        return "ImageReaderContext is not initialized".equals(runtimeException.getMessage());
    }

    @Override // a0.j1
    public n b() {
        Image image;
        synchronized (this.f1986b) {
            try {
                image = this.f1985a.acquireLatestImage();
            } catch (RuntimeException e10) {
                if (i(e10)) {
                    image = null;
                } else {
                    throw e10;
                }
            }
            if (image == null) {
                return null;
            }
            return new a(image);
        }
    }

    @Override // a0.j1
    public int c() {
        int imageFormat;
        synchronized (this.f1986b) {
            imageFormat = this.f1985a.getImageFormat();
        }
        return imageFormat;
    }

    @Override // a0.j1
    public void close() {
        synchronized (this.f1986b) {
            this.f1985a.close();
        }
    }

    @Override // a0.j1
    public void d() {
        synchronized (this.f1986b) {
            this.f1987c = true;
            this.f1985a.setOnImageAvailableListener(null, null);
        }
    }

    @Override // a0.j1
    public void e(final j1.a aVar, final Executor executor) {
        synchronized (this.f1986b) {
            this.f1987c = false;
            this.f1985a.setOnImageAvailableListener(new ImageReader.OnImageAvailableListener() { // from class: androidx.camera.core.b
                @Override // android.media.ImageReader.OnImageAvailableListener
                public final void onImageAvailable(ImageReader imageReader) {
                    d.a(d.this, executor, aVar, imageReader);
                }
            }, b0.l.a());
        }
    }

    @Override // a0.j1
    public int f() {
        int maxImages;
        synchronized (this.f1986b) {
            maxImages = this.f1985a.getMaxImages();
        }
        return maxImages;
    }

    @Override // a0.j1
    public n g() {
        Image image;
        synchronized (this.f1986b) {
            try {
                image = this.f1985a.acquireNextImage();
            } catch (RuntimeException e10) {
                if (i(e10)) {
                    image = null;
                } else {
                    throw e10;
                }
            }
            if (image == null) {
                return null;
            }
            return new a(image);
        }
    }

    @Override // a0.j1
    public int getHeight() {
        int height;
        synchronized (this.f1986b) {
            height = this.f1985a.getHeight();
        }
        return height;
    }

    @Override // a0.j1
    public Surface getSurface() {
        Surface surface;
        synchronized (this.f1986b) {
            surface = this.f1985a.getSurface();
        }
        return surface;
    }

    @Override // a0.j1
    public int getWidth() {
        int width;
        synchronized (this.f1986b) {
            width = this.f1985a.getWidth();
        }
        return width;
    }
}
