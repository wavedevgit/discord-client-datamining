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
    public static final a f46555e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Class f46556f = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final ia.c f46557a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46558b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f46559c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f46560d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final CloseableReference c(CloseableReference closeableReference) {
            f m02 = f.m0(closeableReference, n.f49850d, 0);
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
        this.f46557a = animatedFrameCache;
        this.f46558b = z10;
        this.f46559c = new SparseArray();
    }

    private final synchronized void f(int i10) {
        CloseableReference closeableReference = (CloseableReference) this.f46559c.get(i10);
        if (closeableReference != null) {
            this.f46559c.delete(i10);
            CloseableReference.z(closeableReference);
            p8.a.A(f46556f, "removePreparedReference(%d) removed. Pending frames: %s", Integer.valueOf(i10), this.f46559c);
        }
    }

    @Override // p9.b
    public synchronized void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        CloseableReference c10 = f46555e.c(bitmapReference);
        if (c10 == null) {
            CloseableReference.z(c10);
            return;
        }
        CloseableReference a10 = this.f46557a.a(i10, c10);
        if (CloseableReference.I0(a10)) {
            CloseableReference.z((CloseableReference) this.f46559c.get(i10));
            this.f46559c.put(i10, a10);
            p8.a.A(f46556f, "cachePreparedFrame(%d) cached. Pending frames: %s", Integer.valueOf(i10), this.f46559c);
        }
        CloseableReference.z(c10);
    }

    @Override // p9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        f(i10);
        CloseableReference c10 = f46555e.c(bitmapReference);
        if (c10 != null) {
            CloseableReference.z(this.f46560d);
            this.f46560d = this.f46557a.a(i10, c10);
        }
        CloseableReference.z(c10);
    }

    @Override // p9.b
    public synchronized CloseableReference c(int i10) {
        return f46555e.b(CloseableReference.n(this.f46560d));
    }

    @Override // p9.b
    public synchronized void clear() {
        try {
            CloseableReference.z(this.f46560d);
            this.f46560d = null;
            int size = this.f46559c.size();
            for (int i10 = 0; i10 < size; i10++) {
                CloseableReference.z((CloseableReference) this.f46559c.valueAt(i10));
            }
            this.f46559c.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // p9.b
    public synchronized boolean contains(int i10) {
        return this.f46557a.b(i10);
    }

    @Override // p9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        if (!this.f46558b) {
            return null;
        }
        return f46555e.b(this.f46557a.d());
    }

    @Override // p9.b
    public synchronized CloseableReference e(int i10) {
        return f46555e.b(this.f46557a.c(i10));
    }
}
