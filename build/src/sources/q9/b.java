package q9;

import android.util.SparseArray;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import sa.f;
import sa.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements p9.b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f47507e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Class f47508f = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final ia.c f47509a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f47510b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f47511c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f47512d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final CloseableReference c(CloseableReference closeableReference) {
            f k02 = f.k0(closeableReference, n.f49515d, 0);
            Intrinsics.checkNotNullExpressionValue(k02, "of(...)");
            return CloseableReference.N0(k02);
        }

        public final CloseableReference b(CloseableReference closeableReference) {
            try {
                if (CloseableReference.K0(closeableReference)) {
                    Intrinsics.checkNotNull(closeableReference);
                    if (closeableReference.E0() instanceof f) {
                        Object E0 = closeableReference.E0();
                        Intrinsics.checkNotNull(E0, "null cannot be cast to non-null type com.facebook.imagepipeline.image.CloseableStaticBitmap");
                        return ((f) E0).Q();
                    }
                }
                CloseableReference.N(closeableReference);
                return null;
            } finally {
                CloseableReference.N(closeableReference);
            }
        }

        private a() {
        }
    }

    public b(ia.c animatedFrameCache, boolean z10) {
        Intrinsics.checkNotNullParameter(animatedFrameCache, "animatedFrameCache");
        this.f47509a = animatedFrameCache;
        this.f47510b = z10;
        this.f47511c = new SparseArray();
    }

    private final synchronized void f(int i10) {
        CloseableReference closeableReference = (CloseableReference) this.f47511c.get(i10);
        if (closeableReference != null) {
            this.f47511c.delete(i10);
            CloseableReference.N(closeableReference);
            p8.a.A(f47508f, "removePreparedReference(%d) removed. Pending frames: %s", Integer.valueOf(i10), this.f47511c);
        }
    }

    @Override // p9.b
    public synchronized void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        CloseableReference c10 = f47507e.c(bitmapReference);
        if (c10 == null) {
            CloseableReference.N(c10);
            return;
        }
        CloseableReference a10 = this.f47509a.a(i10, c10);
        if (CloseableReference.K0(a10)) {
            CloseableReference.N((CloseableReference) this.f47511c.get(i10));
            this.f47511c.put(i10, a10);
            p8.a.A(f47508f, "cachePreparedFrame(%d) cached. Pending frames: %s", Integer.valueOf(i10), this.f47511c);
        }
        CloseableReference.N(c10);
    }

    @Override // p9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        f(i10);
        CloseableReference c10 = f47507e.c(bitmapReference);
        if (c10 != null) {
            CloseableReference.N(this.f47512d);
            this.f47512d = this.f47509a.a(i10, c10);
        }
        CloseableReference.N(c10);
    }

    @Override // p9.b
    public synchronized CloseableReference c(int i10) {
        return f47507e.b(CloseableReference.E(this.f47512d));
    }

    @Override // p9.b
    public synchronized void clear() {
        try {
            CloseableReference.N(this.f47512d);
            this.f47512d = null;
            int size = this.f47511c.size();
            for (int i10 = 0; i10 < size; i10++) {
                CloseableReference.N((CloseableReference) this.f47511c.valueAt(i10));
            }
            this.f47511c.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // p9.b
    public synchronized boolean contains(int i10) {
        return this.f47509a.b(i10);
    }

    @Override // p9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        if (!this.f47510b) {
            return null;
        }
        return f47507e.b(this.f47509a.d());
    }

    @Override // p9.b
    public synchronized CloseableReference e(int i10) {
        return f47507e.b(this.f47509a.c(i10));
    }
}
