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
    private final PlatformBitmapFactory f48598a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f48599b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f48600c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f48601d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f48602e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f48603f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final o9.a f48604d;

        /* renamed from: e  reason: collision with root package name */
        private final p9.b f48605e;

        /* renamed from: i  reason: collision with root package name */
        private final int f48606i;

        /* renamed from: o  reason: collision with root package name */
        private final int f48607o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f48608p;

        public a(c cVar, o9.a animationBackend, p9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f48608p = cVar;
            this.f48604d = animationBackend;
            this.f48605e = bitmapFrameCache;
            this.f48606i = i10;
            this.f48607o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f48608p.f48598a.b(this.f48604d.e(), this.f48604d.c(), this.f48608p.f48600c);
                    i12 = -1;
                } else {
                    d10 = this.f48605e.d(i10, this.f48604d.e(), this.f48604d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.N(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                p8.a.G(this.f48608p.f48602e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.N(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.F0(closeableReference) && closeableReference != null) {
                p9.c cVar = this.f48608p.f48599b;
                Object C0 = closeableReference.C0();
                Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
                if (cVar.a(i10, (Bitmap) C0)) {
                    p8.a.z(this.f48608p.f48602e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f48608p.f48603f) {
                        this.f48605e.a(i10, closeableReference, i11);
                        Unit unit = Unit.f32464a;
                    }
                    return true;
                }
            }
            return false;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                if (this.f48605e.contains(this.f48606i)) {
                    p8.a.z(this.f48608p.f48602e, "Frame %d is cached already.", Integer.valueOf(this.f48606i));
                    SparseArray sparseArray = this.f48608p.f48603f;
                    c cVar = this.f48608p;
                    synchronized (sparseArray) {
                        cVar.f48603f.remove(this.f48607o);
                        Unit unit = Unit.f32464a;
                    }
                    return;
                }
                if (a(this.f48606i, 1)) {
                    p8.a.z(this.f48608p.f48602e, "Prepared frame %d.", Integer.valueOf(this.f48606i));
                } else {
                    p8.a.k(this.f48608p.f48602e, "Could not prepare frame %d.", Integer.valueOf(this.f48606i));
                }
                SparseArray sparseArray2 = this.f48608p.f48603f;
                c cVar2 = this.f48608p;
                synchronized (sparseArray2) {
                    cVar2.f48603f.remove(this.f48607o);
                    Unit unit2 = Unit.f32464a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f48608p.f48603f;
                c cVar3 = this.f48608p;
                synchronized (sparseArray3) {
                    cVar3.f48603f.remove(this.f48607o);
                    Unit unit3 = Unit.f32464a;
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
        this.f48598a = platformBitmapFactory;
        this.f48599b = bitmapFrameRenderer;
        this.f48600c = bitmapConfig;
        this.f48601d = executorService;
        this.f48602e = c.class;
        this.f48603f = new SparseArray();
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
        synchronized (this.f48603f) {
            try {
                try {
                    if (this.f48603f.get(g10) != null) {
                        p8.a.z(this.f48602e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        p8.a.z(this.f48602e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f48603f.put(g10, aVar);
                            this.f48601d.execute(aVar);
                            Unit unit = Unit.f32464a;
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
