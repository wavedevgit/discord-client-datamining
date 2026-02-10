package s9;

import android.graphics.Bitmap;
import android.util.SparseArray;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import java.util.concurrent.ExecutorService;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f49562a;

    /* renamed from: b  reason: collision with root package name */
    private final q9.c f49563b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f49564c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f49565d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f49566e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f49567f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final p9.a f49568d;

        /* renamed from: e  reason: collision with root package name */
        private final q9.b f49569e;

        /* renamed from: i  reason: collision with root package name */
        private final int f49570i;

        /* renamed from: o  reason: collision with root package name */
        private final int f49571o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f49572p;

        public a(c cVar, p9.a animationBackend, q9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f49572p = cVar;
            this.f49568d = animationBackend;
            this.f49569e = bitmapFrameCache;
            this.f49570i = i10;
            this.f49571o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f49572p.f49562a.b(this.f49568d.e(), this.f49568d.c(), this.f49572p.f49564c);
                    i12 = -1;
                } else {
                    d10 = this.f49569e.d(i10, this.f49568d.e(), this.f49568d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.z(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                q8.a.G(this.f49572p.f49566e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.z(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.G0(closeableReference) && closeableReference != null) {
                q9.c cVar = this.f49572p.f49563b;
                Object J = closeableReference.J();
                Intrinsics.checkNotNullExpressionValue(J, "get(...)");
                if (cVar.a(i10, (Bitmap) J)) {
                    q8.a.z(this.f49572p.f49566e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f49572p.f49567f) {
                        this.f49569e.a(i10, closeableReference, i11);
                        Unit unit = Unit.f31765a;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (this.f49569e.contains(this.f49570i)) {
                    q8.a.z(this.f49572p.f49566e, "Frame %d is cached already.", Integer.valueOf(this.f49570i));
                    SparseArray sparseArray = this.f49572p.f49567f;
                    c cVar = this.f49572p;
                    synchronized (sparseArray) {
                        cVar.f49567f.remove(this.f49571o);
                        Unit unit = Unit.f31765a;
                    }
                    return;
                }
                if (a(this.f49570i, 1)) {
                    q8.a.z(this.f49572p.f49566e, "Prepared frame %d.", Integer.valueOf(this.f49570i));
                } else {
                    q8.a.k(this.f49572p.f49566e, "Could not prepare frame %d.", Integer.valueOf(this.f49570i));
                }
                SparseArray sparseArray2 = this.f49572p.f49567f;
                c cVar2 = this.f49572p;
                synchronized (sparseArray2) {
                    cVar2.f49567f.remove(this.f49571o);
                    Unit unit2 = Unit.f31765a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f49572p.f49567f;
                c cVar3 = this.f49572p;
                synchronized (sparseArray3) {
                    cVar3.f49567f.remove(this.f49571o);
                    Unit unit3 = Unit.f31765a;
                    throw th2;
                }
            }
        }
    }

    public c(PlatformBitmapFactory platformBitmapFactory, q9.c bitmapFrameRenderer, Bitmap.Config bitmapConfig, ExecutorService executorService) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        Intrinsics.checkNotNullParameter(executorService, "executorService");
        this.f49562a = platformBitmapFactory;
        this.f49563b = bitmapFrameRenderer;
        this.f49564c = bitmapConfig;
        this.f49565d = executorService;
        this.f49566e = c.class;
        this.f49567f = new SparseArray();
    }

    private final int g(p9.a aVar, int i10) {
        return (aVar.hashCode() * 31) + i10;
    }

    @Override // s9.b
    public boolean a(q9.b bitmapFrameCache, p9.a animationBackend, int i10) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
        int g10 = g(animationBackend, i10);
        synchronized (this.f49567f) {
            try {
                try {
                    if (this.f49567f.get(g10) != null) {
                        q8.a.z(this.f49566e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        q8.a.z(this.f49566e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f49567f.put(g10, aVar);
                            this.f49565d.execute(aVar);
                            Unit unit = Unit.f31765a;
                            return true;
                        } catch (Throwable th3) {
                            th = th3;
                            th2 = th;
                            throw th2;
                        }
                    }
                } catch (Throwable th4) {
                    th2 = th4;
                    throw th2;
                }
            } catch (Throwable th5) {
                th = th5;
            }
        }
    }
}
