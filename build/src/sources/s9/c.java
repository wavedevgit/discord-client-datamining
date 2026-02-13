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
    private final PlatformBitmapFactory f48447a;

    /* renamed from: b  reason: collision with root package name */
    private final q9.c f48448b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f48449c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f48450d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f48451e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f48452f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final p9.a f48453d;

        /* renamed from: e  reason: collision with root package name */
        private final q9.b f48454e;

        /* renamed from: i  reason: collision with root package name */
        private final int f48455i;

        /* renamed from: o  reason: collision with root package name */
        private final int f48456o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f48457p;

        public a(c cVar, p9.a animationBackend, q9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f48457p = cVar;
            this.f48453d = animationBackend;
            this.f48454e = bitmapFrameCache;
            this.f48455i = i10;
            this.f48456o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f48457p.f48447a.b(this.f48453d.e(), this.f48453d.c(), this.f48457p.f48449c);
                    i12 = -1;
                } else {
                    d10 = this.f48454e.d(i10, this.f48453d.e(), this.f48453d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.z(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                q8.a.G(this.f48457p.f48451e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.z(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.C0(closeableReference) && closeableReference != null) {
                q9.c cVar = this.f48457p.f48448b;
                Object J = closeableReference.J();
                Intrinsics.checkNotNullExpressionValue(J, "get(...)");
                if (cVar.a(i10, (Bitmap) J)) {
                    q8.a.z(this.f48457p.f48451e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f48457p.f48452f) {
                        this.f48454e.a(i10, closeableReference, i11);
                        Unit unit = Unit.f32556a;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (this.f48454e.contains(this.f48455i)) {
                    q8.a.z(this.f48457p.f48451e, "Frame %d is cached already.", Integer.valueOf(this.f48455i));
                    SparseArray sparseArray = this.f48457p.f48452f;
                    c cVar = this.f48457p;
                    synchronized (sparseArray) {
                        cVar.f48452f.remove(this.f48456o);
                        Unit unit = Unit.f32556a;
                    }
                    return;
                }
                if (a(this.f48455i, 1)) {
                    q8.a.z(this.f48457p.f48451e, "Prepared frame %d.", Integer.valueOf(this.f48455i));
                } else {
                    q8.a.k(this.f48457p.f48451e, "Could not prepare frame %d.", Integer.valueOf(this.f48455i));
                }
                SparseArray sparseArray2 = this.f48457p.f48452f;
                c cVar2 = this.f48457p;
                synchronized (sparseArray2) {
                    cVar2.f48452f.remove(this.f48456o);
                    Unit unit2 = Unit.f32556a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f48457p.f48452f;
                c cVar3 = this.f48457p;
                synchronized (sparseArray3) {
                    cVar3.f48452f.remove(this.f48456o);
                    Unit unit3 = Unit.f32556a;
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
        this.f48447a = platformBitmapFactory;
        this.f48448b = bitmapFrameRenderer;
        this.f48449c = bitmapConfig;
        this.f48450d = executorService;
        this.f48451e = c.class;
        this.f48452f = new SparseArray();
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
        synchronized (this.f48452f) {
            try {
                try {
                    if (this.f48452f.get(g10) != null) {
                        q8.a.z(this.f48451e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        q8.a.z(this.f48451e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f48452f.put(g10, aVar);
                            this.f48450d.execute(aVar);
                            Unit unit = Unit.f32556a;
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
