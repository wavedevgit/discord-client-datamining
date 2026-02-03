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
    private final PlatformBitmapFactory f48289a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f48290b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f48291c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f48292d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f48293e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f48294f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final o9.a f48295d;

        /* renamed from: e  reason: collision with root package name */
        private final p9.b f48296e;

        /* renamed from: i  reason: collision with root package name */
        private final int f48297i;

        /* renamed from: o  reason: collision with root package name */
        private final int f48298o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f48299p;

        public a(c cVar, o9.a animationBackend, p9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f48299p = cVar;
            this.f48295d = animationBackend;
            this.f48296e = bitmapFrameCache;
            this.f48297i = i10;
            this.f48298o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f48299p.f48289a.b(this.f48295d.e(), this.f48295d.c(), this.f48299p.f48291c);
                    i12 = -1;
                } else {
                    d10 = this.f48296e.d(i10, this.f48295d.e(), this.f48295d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.N(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                p8.a.G(this.f48299p.f48293e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.N(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.K0(closeableReference) && closeableReference != null) {
                p9.c cVar = this.f48299p.f48290b;
                Object F0 = closeableReference.F0();
                Intrinsics.checkNotNullExpressionValue(F0, "get(...)");
                if (cVar.a(i10, (Bitmap) F0)) {
                    p8.a.z(this.f48299p.f48293e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f48299p.f48294f) {
                        this.f48296e.a(i10, closeableReference, i11);
                        Unit unit = Unit.f33074a;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (this.f48296e.contains(this.f48297i)) {
                    p8.a.z(this.f48299p.f48293e, "Frame %d is cached already.", Integer.valueOf(this.f48297i));
                    SparseArray sparseArray = this.f48299p.f48294f;
                    c cVar = this.f48299p;
                    synchronized (sparseArray) {
                        cVar.f48294f.remove(this.f48298o);
                        Unit unit = Unit.f33074a;
                    }
                    return;
                }
                if (a(this.f48297i, 1)) {
                    p8.a.z(this.f48299p.f48293e, "Prepared frame %d.", Integer.valueOf(this.f48297i));
                } else {
                    p8.a.k(this.f48299p.f48293e, "Could not prepare frame %d.", Integer.valueOf(this.f48297i));
                }
                SparseArray sparseArray2 = this.f48299p.f48294f;
                c cVar2 = this.f48299p;
                synchronized (sparseArray2) {
                    cVar2.f48294f.remove(this.f48298o);
                    Unit unit2 = Unit.f33074a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f48299p.f48294f;
                c cVar3 = this.f48299p;
                synchronized (sparseArray3) {
                    cVar3.f48294f.remove(this.f48298o);
                    Unit unit3 = Unit.f33074a;
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
        this.f48289a = platformBitmapFactory;
        this.f48290b = bitmapFrameRenderer;
        this.f48291c = bitmapConfig;
        this.f48292d = executorService;
        this.f48293e = c.class;
        this.f48294f = new SparseArray();
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
        synchronized (this.f48294f) {
            try {
                try {
                    if (this.f48294f.get(g10) != null) {
                        p8.a.z(this.f48293e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        p8.a.z(this.f48293e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f48294f.put(g10, aVar);
                            this.f48292d.execute(aVar);
                            Unit unit = Unit.f33074a;
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
