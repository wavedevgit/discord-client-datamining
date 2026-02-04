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
    private final PlatformBitmapFactory f48595a;

    /* renamed from: b  reason: collision with root package name */
    private final p9.c f48596b;

    /* renamed from: c  reason: collision with root package name */
    private final Bitmap.Config f48597c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f48598d;

    /* renamed from: e  reason: collision with root package name */
    private final Class f48599e;

    /* renamed from: f  reason: collision with root package name */
    private final SparseArray f48600f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final o9.a f48601d;

        /* renamed from: e  reason: collision with root package name */
        private final p9.b f48602e;

        /* renamed from: i  reason: collision with root package name */
        private final int f48603i;

        /* renamed from: o  reason: collision with root package name */
        private final int f48604o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ c f48605p;

        public a(c cVar, o9.a animationBackend, p9.b bitmapFrameCache, int i10, int i11) {
            Intrinsics.checkNotNullParameter(animationBackend, "animationBackend");
            Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
            this.f48605p = cVar;
            this.f48601d = animationBackend;
            this.f48602e = bitmapFrameCache;
            this.f48603i = i10;
            this.f48604o = i11;
        }

        private final boolean a(int i10, int i11) {
            CloseableReference d10;
            int i12 = 2;
            try {
                if (i11 != 1) {
                    if (i11 != 2) {
                        return false;
                    }
                    d10 = this.f48605p.f48595a.b(this.f48601d.e(), this.f48601d.c(), this.f48605p.f48597c);
                    i12 = -1;
                } else {
                    d10 = this.f48602e.d(i10, this.f48601d.e(), this.f48601d.c());
                }
                CloseableReference closeableReference = d10;
                boolean b10 = b(i10, closeableReference, i11);
                CloseableReference.N(closeableReference);
                if (!b10 && i12 != -1) {
                    return a(i10, i12);
                }
                return b10;
            } catch (RuntimeException e10) {
                p8.a.G(this.f48605p.f48599e, "Failed to create frame bitmap", e10);
                return false;
            } finally {
                CloseableReference.N(null);
            }
        }

        private final boolean b(int i10, CloseableReference closeableReference, int i11) {
            if (CloseableReference.F0(closeableReference) && closeableReference != null) {
                p9.c cVar = this.f48605p.f48596b;
                Object C0 = closeableReference.C0();
                Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
                if (cVar.a(i10, (Bitmap) C0)) {
                    p8.a.z(this.f48605p.f48599e, "Frame %d ready.", Integer.valueOf(i10));
                    synchronized (this.f48605p.f48600f) {
                        this.f48602e.a(i10, closeableReference, i11);
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
                if (this.f48602e.contains(this.f48603i)) {
                    p8.a.z(this.f48605p.f48599e, "Frame %d is cached already.", Integer.valueOf(this.f48603i));
                    SparseArray sparseArray = this.f48605p.f48600f;
                    c cVar = this.f48605p;
                    synchronized (sparseArray) {
                        cVar.f48600f.remove(this.f48604o);
                        Unit unit = Unit.f32464a;
                    }
                    return;
                }
                if (a(this.f48603i, 1)) {
                    p8.a.z(this.f48605p.f48599e, "Prepared frame %d.", Integer.valueOf(this.f48603i));
                } else {
                    p8.a.k(this.f48605p.f48599e, "Could not prepare frame %d.", Integer.valueOf(this.f48603i));
                }
                SparseArray sparseArray2 = this.f48605p.f48600f;
                c cVar2 = this.f48605p;
                synchronized (sparseArray2) {
                    cVar2.f48600f.remove(this.f48604o);
                    Unit unit2 = Unit.f32464a;
                }
            } catch (Throwable th2) {
                SparseArray sparseArray3 = this.f48605p.f48600f;
                c cVar3 = this.f48605p;
                synchronized (sparseArray3) {
                    cVar3.f48600f.remove(this.f48604o);
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
        this.f48595a = platformBitmapFactory;
        this.f48596b = bitmapFrameRenderer;
        this.f48597c = bitmapConfig;
        this.f48598d = executorService;
        this.f48599e = c.class;
        this.f48600f = new SparseArray();
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
        synchronized (this.f48600f) {
            try {
                try {
                    if (this.f48600f.get(g10) != null) {
                        p8.a.z(this.f48599e, "Already scheduled decode job for frame %d", Integer.valueOf(i10));
                        return true;
                    } else if (bitmapFrameCache.contains(i10)) {
                        p8.a.z(this.f48599e, "Frame %d is cached already.", Integer.valueOf(i10));
                        return true;
                    } else {
                        try {
                            a aVar = new a(this, animationBackend, bitmapFrameCache, i10, g10);
                            this.f48600f.put(g10, aVar);
                            this.f48598d.execute(aVar);
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
