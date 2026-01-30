package r9;

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
    private final PlatformBitmapFactory f48087a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f48088b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f48089c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f48090d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f48091e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f48092f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final o9.a f48093d;

        /* renamed from: e  reason: collision with root package name */
        private final p9.b f48094e;

        /* renamed from: i  reason: collision with root package name */
        private final int f48095i;

        /* renamed from: o  reason: collision with root package name */
        private final int f48096o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f48097p;

        public a(c cVar, o9.a animationBackend, p9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f48097p = cVar;
            this.f48093d = animationBackend;
            this.f48094e = bitmapFrameCache;
            this.f48095i = i10;
            this.f48096o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f48097p.f48087a.b(this.f48093d.e(), this.f48093d.c(), this.f48097p.f48089c);
                    i12 = -1;
                } else {
                    d10 = this.f48094e.d(i10, this.f48093d.e(), this.f48093d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.N(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                p8.a.G(this.f48097p.f48091e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.N(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.I0(closeableReference) && closeableReference != null) {
                p9.c cVar = this.f48097p.f48088b;
                Object D0 = closeableReference.D0();
                Intrinsics.checkNotNullExpressionValue(D0, "get(...)");
                if (cVar.a(i10, (Bitmap) D0)) {
                    p8.a.z(this.f48097p.f48091e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f48097p.f48092f) {
                        this.f48094e.a(i10, closeableReference, i11);
                        Unit unit = Unit.f33298a;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (this.f48094e.contains(this.f48095i)) {
                    p8.a.z(this.f48097p.f48091e, "Frame %d is cached already.", Integer.valueOf(this.f48095i));
                    SparseArray sparseArray = this.f48097p.f48092f;
                    c cVar = this.f48097p;
                    synchronized (sparseArray) {
                        cVar.f48092f.remove(this.f48096o);
                        Unit unit = Unit.f33298a;
                    }
                    return;
                }
                if (a(this.f48095i, 1)) {
                    p8.a.z(this.f48097p.f48091e, "Prepared frame %d.", Integer.valueOf(this.f48095i));
                } else {
                    p8.a.k(this.f48097p.f48091e, "Could not prepare frame %d.", Integer.valueOf(this.f48095i));
                }
                SparseArray sparseArray2 = this.f48097p.f48092f;
                c cVar2 = this.f48097p;
                synchronized (sparseArray2) {
                    cVar2.f48092f.remove(this.f48096o);
                    Unit unit2 = Unit.f33298a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f48097p.f48092f;
                c cVar3 = this.f48097p;
                synchronized (sparseArray3) {
                    cVar3.f48092f.remove(this.f48096o);
                    Unit unit3 = Unit.f33298a;
                    throw th2;
                }
            }
        }
    }

    public c(PlatformBitmapFactory platformBitmapFactory, p9.c bitmapFrameRenderer, Bitmap.Config bitmapConfig, ExecutorService executorService) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        Intrinsics.checkNotNullParameter(bitmapConfig, "bitmapConfig");
        Intrinsics.checkNotNullParameter(executorService, "executorService");
        this.f48087a = platformBitmapFactory;
        this.f48088b = bitmapFrameRenderer;
        this.f48089c = bitmapConfig;
        this.f48090d = executorService;
        this.f48091e = c.class;
        this.f48092f = new SparseArray();
    }

    private final int g(o9.a aVar, int i10) {
        return (aVar.hashCode() * 31) + i10;
    }

    @Override // r9.b
    public boolean a(p9.b bitmapFrameCache, o9.a animationBackend, int i10) {
        Throwable th2;
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
        int g10 = g(animationBackend, i10);
        synchronized (this.f48092f) {
            try {
                try {
                    if (this.f48092f.get(g10) != null) {
                        p8.a.z(this.f48091e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        p8.a.z(this.f48091e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f48092f.put(g10, aVar);
                            this.f48090d.execute(aVar);
                            Unit unit = Unit.f33298a;
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
