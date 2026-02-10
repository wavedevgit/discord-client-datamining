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
    private final PlatformBitmapFactory f47878a;

    /* renamed from: b  reason: collision with root package name */
    private final q9.c f47879b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f47880c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f47881d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f47882e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f47883f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final p9.a f47884d;

        /* renamed from: e  reason: collision with root package name */
        private final q9.b f47885e;

        /* renamed from: i  reason: collision with root package name */
        private final int f47886i;

        /* renamed from: o  reason: collision with root package name */
        private final int f47887o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f47888p;

        public a(c cVar, p9.a animationBackend, q9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f47888p = cVar;
            this.f47884d = animationBackend;
            this.f47885e = bitmapFrameCache;
            this.f47886i = i10;
            this.f47887o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f47888p.f47878a.b(this.f47884d.e(), this.f47884d.c(), this.f47888p.f47880c);
                    i12 = -1;
                } else {
                    d10 = this.f47885e.d(i10, this.f47884d.e(), this.f47884d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.z(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                q8.a.G(this.f47888p.f47882e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.z(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.C0(closeableReference) && closeableReference != null) {
                q9.c cVar = this.f47888p.f47879b;
                Object J = closeableReference.J();
                Intrinsics.checkNotNullExpressionValue(J, "get(...)");
                if (cVar.a(i10, (Bitmap) J)) {
                    q8.a.z(this.f47888p.f47882e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f47888p.f47883f) {
                        this.f47885e.a(i10, closeableReference, i11);
                        Unit unit = Unit.f31987a;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (this.f47885e.contains(this.f47886i)) {
                    q8.a.z(this.f47888p.f47882e, "Frame %d is cached already.", Integer.valueOf(this.f47886i));
                    SparseArray sparseArray = this.f47888p.f47883f;
                    c cVar = this.f47888p;
                    synchronized (sparseArray) {
                        cVar.f47883f.remove(this.f47887o);
                        Unit unit = Unit.f31987a;
                    }
                    return;
                }
                if (a(this.f47886i, 1)) {
                    q8.a.z(this.f47888p.f47882e, "Prepared frame %d.", Integer.valueOf(this.f47886i));
                } else {
                    q8.a.k(this.f47888p.f47882e, "Could not prepare frame %d.", Integer.valueOf(this.f47886i));
                }
                SparseArray sparseArray2 = this.f47888p.f47883f;
                c cVar2 = this.f47888p;
                synchronized (sparseArray2) {
                    cVar2.f47883f.remove(this.f47887o);
                    Unit unit2 = Unit.f31987a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f47888p.f47883f;
                c cVar3 = this.f47888p;
                synchronized (sparseArray3) {
                    cVar3.f47883f.remove(this.f47887o);
                    Unit unit3 = Unit.f31987a;
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
        this.f47878a = platformBitmapFactory;
        this.f47879b = bitmapFrameRenderer;
        this.f47880c = bitmapConfig;
        this.f47881d = executorService;
        this.f47882e = c.class;
        this.f47883f = new SparseArray();
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
        synchronized (this.f47883f) {
            try {
                try {
                    if (this.f47883f.get(g10) != null) {
                        q8.a.z(this.f47882e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        q8.a.z(this.f47882e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f47883f.put(g10, aVar);
                            this.f47881d.execute(aVar);
                            Unit unit = Unit.f31987a;
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
