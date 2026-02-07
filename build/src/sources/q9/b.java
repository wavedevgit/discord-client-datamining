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
    public static final a f46603e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Class f46604f = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final ia.c f46605a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46606b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f46607c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f46608d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final CloseableReference c(CloseableReference closeableReference) {
            f m02 = f.m0(closeableReference, n.f49898d, 0);
            Intrinsics.checkNotNullExpressionValue(m02, "of(...)");
            return CloseableReference.K0(m02);
        }

        public final CloseableReference b(CloseableReference closeableReference) {
            try {
                if (CloseableReference.I0(closeableReference)) {
                    Intrinsics.checkNotNull(closeableReference);
                    if (closeableReference.J() instanceof f) {
                        Object J = closeableReference.J();
                        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type com.facebook.imagepipeline.image.CloseableStaticBitmap");
                        return ((f) J).T();
                    }
                }
                CloseableReference.z(closeableReference);
                return null;
            } finally {
                CloseableReference.z(closeableReference);
            }
        }

        private a() {
        }
    }

    public b(ia.c animatedFrameCache, boolean z10) {
        Intrinsics.checkNotNullParameter(animatedFrameCache, "animatedFrameCache");
        this.f46605a = animatedFrameCache;
        this.f46606b = z10;
        this.f46607c = new SparseArray();
    }

    private final synchronized void f(int i10) {
        CloseableReference closeableReference = (CloseableReference) this.f46607c.get(i10);
        if (closeableReference != null) {
            this.f46607c.delete(i10);
            CloseableReference.z(closeableReference);
            p8.a.A(f46604f, "removePreparedReference(%d) removed. Pending frames: %s", Integer.valueOf(i10), this.f46607c);
        }
    }

    @Override // p9.b
    public synchronized void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        CloseableReference c10 = f46603e.c(bitmapReference);
        if (c10 == null) {
            CloseableReference.z(c10);
            return;
        }
        CloseableReference a10 = this.f46605a.a(i10, c10);
        if (CloseableReference.I0(a10)) {
            CloseableReference.z((CloseableReference) this.f46607c.get(i10));
            this.f46607c.put(i10, a10);
            p8.a.A(f46604f, "cachePreparedFrame(%d) cached. Pending frames: %s", Integer.valueOf(i10), this.f46607c);
        }
        CloseableReference.z(c10);
    }

    @Override // p9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        f(i10);
        CloseableReference c10 = f46603e.c(bitmapReference);
        if (c10 != null) {
            CloseableReference.z(this.f46608d);
            this.f46608d = this.f46605a.a(i10, c10);
        }
        CloseableReference.z(c10);
    }

    @Override // p9.b
    public synchronized CloseableReference c(int i10) {
        return f46603e.b(CloseableReference.n(this.f46608d));
    }

    @Override // p9.b
    public synchronized void clear() {
        try {
            CloseableReference.z(this.f46608d);
            this.f46608d = null;
            int size = this.f46607c.size();
            for (int i10 = 0; i10 < size; i10++) {
                CloseableReference.z((CloseableReference) this.f46607c.valueAt(i10));
            }
            this.f46607c.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // p9.b
    public synchronized boolean contains(int i10) {
        return this.f46605a.b(i10);
    }

    @Override // p9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        if (!this.f46606b) {
            return null;
        }
        return f46603e.b(this.f46605a.d());
    }

    @Override // p9.b
    public synchronized CloseableReference e(int i10) {
        return f46603e.b(this.f46605a.c(i10));
    }
}
