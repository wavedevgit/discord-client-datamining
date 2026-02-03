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
    public static final a f47293e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Class f47294f = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final ia.c f47295a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f47296b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f47297c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f47298d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final CloseableReference c(CloseableReference closeableReference) {
            f k02 = f.k0(closeableReference, n.f48959d, 0);
            Intrinsics.checkNotNullExpressionValue(k02, "of(...)");
            return CloseableReference.L0(k02);
        }

        public final CloseableReference b(CloseableReference closeableReference) {
            try {
                if (CloseableReference.K0(closeableReference)) {
                    Intrinsics.checkNotNull(closeableReference);
                    if (closeableReference.F0() instanceof f) {
                        Object F0 = closeableReference.F0();
                        Intrinsics.checkNotNull(F0, "null cannot be cast to non-null type com.facebook.imagepipeline.image.CloseableStaticBitmap");
                        return ((f) F0).Q();
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
        this.f47295a = animatedFrameCache;
        this.f47296b = z10;
        this.f47297c = new SparseArray();
    }

    private final synchronized void f(int i10) {
        CloseableReference closeableReference = (CloseableReference) this.f47297c.get(i10);
        if (closeableReference != null) {
            this.f47297c.delete(i10);
            CloseableReference.N(closeableReference);
            p8.a.A(f47294f, "removePreparedReference(%d) removed. Pending frames: %s", Integer.valueOf(i10), this.f47297c);
        }
    }

    @Override // p9.b
    public synchronized void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        CloseableReference c10 = f47293e.c(bitmapReference);
        if (c10 == null) {
            CloseableReference.N(c10);
            return;
        }
        CloseableReference a10 = this.f47295a.a(i10, c10);
        if (CloseableReference.K0(a10)) {
            CloseableReference.N((CloseableReference) this.f47297c.get(i10));
            this.f47297c.put(i10, a10);
            p8.a.A(f47294f, "cachePreparedFrame(%d) cached. Pending frames: %s", Integer.valueOf(i10), this.f47297c);
        }
        CloseableReference.N(c10);
    }

    @Override // p9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        f(i10);
        CloseableReference c10 = f47293e.c(bitmapReference);
        if (c10 != null) {
            CloseableReference.N(this.f47298d);
            this.f47298d = this.f47295a.a(i10, c10);
        }
        CloseableReference.N(c10);
    }

    @Override // p9.b
    public synchronized CloseableReference c(int i10) {
        return f47293e.b(CloseableReference.E(this.f47298d));
    }

    @Override // p9.b
    public synchronized void clear() {
        try {
            CloseableReference.N(this.f47298d);
            this.f47298d = null;
            int size = this.f47297c.size();
            for (int i10 = 0; i10 < size; i10++) {
                CloseableReference.N((CloseableReference) this.f47297c.valueAt(i10));
            }
            this.f47297c.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // p9.b
    public synchronized boolean contains(int i10) {
        return this.f47295a.b(i10);
    }

    @Override // p9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        if (!this.f47296b) {
            return null;
        }
        return f47293e.b(this.f47295a.d());
    }

    @Override // p9.b
    public synchronized CloseableReference e(int i10) {
        return f47293e.b(this.f47295a.c(i10));
    }
}
