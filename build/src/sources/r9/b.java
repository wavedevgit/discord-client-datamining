package r9;

import android.util.SparseArray;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ta.f;
import ta.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements q9.b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f46176e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Class f46177f = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final ja.c f46178a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46179b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f46180c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f46181d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final CloseableReference c(CloseableReference closeableReference) {
            f Y0 = f.Y0(closeableReference, n.f48672d, 0);
            Intrinsics.checkNotNullExpressionValue(Y0, "of(...)");
            return CloseableReference.E0(Y0);
        }

        public final CloseableReference b(CloseableReference closeableReference) {
            try {
                if (CloseableReference.C0(closeableReference)) {
                    Intrinsics.checkNotNull(closeableReference);
                    if (closeableReference.J() instanceof f) {
                        Object J = closeableReference.J();
                        Intrinsics.checkNotNull(J, "null cannot be cast to non-null type com.facebook.imagepipeline.image.CloseableStaticBitmap");
                        return ((f) J).U();
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

    public b(ja.c animatedFrameCache, boolean z10) {
        Intrinsics.checkNotNullParameter(animatedFrameCache, "animatedFrameCache");
        this.f46178a = animatedFrameCache;
        this.f46179b = z10;
        this.f46180c = new SparseArray();
    }

    private final synchronized void f(int i10) {
        CloseableReference closeableReference = (CloseableReference) this.f46180c.get(i10);
        if (closeableReference != null) {
            this.f46180c.delete(i10);
            CloseableReference.z(closeableReference);
            q8.a.A(f46177f, "removePreparedReference(%d) removed. Pending frames: %s", Integer.valueOf(i10), this.f46180c);
        }
    }

    @Override // q9.b
    public synchronized void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        CloseableReference c10 = f46176e.c(bitmapReference);
        if (c10 == null) {
            CloseableReference.z(c10);
            return;
        }
        CloseableReference a10 = this.f46178a.a(i10, c10);
        if (CloseableReference.C0(a10)) {
            CloseableReference.z((CloseableReference) this.f46180c.get(i10));
            this.f46180c.put(i10, a10);
            q8.a.A(f46177f, "cachePreparedFrame(%d) cached. Pending frames: %s", Integer.valueOf(i10), this.f46180c);
        }
        CloseableReference.z(c10);
    }

    @Override // q9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        f(i10);
        CloseableReference c10 = f46176e.c(bitmapReference);
        if (c10 != null) {
            CloseableReference.z(this.f46181d);
            this.f46181d = this.f46178a.a(i10, c10);
        }
        CloseableReference.z(c10);
    }

    @Override // q9.b
    public synchronized CloseableReference c(int i10) {
        return f46176e.b(CloseableReference.n(this.f46181d));
    }

    @Override // q9.b
    public synchronized void clear() {
        try {
            CloseableReference.z(this.f46181d);
            this.f46181d = null;
            int size = this.f46180c.size();
            for (int i10 = 0; i10 < size; i10++) {
                CloseableReference.z((CloseableReference) this.f46180c.valueAt(i10));
            }
            this.f46180c.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // q9.b
    public synchronized boolean contains(int i10) {
        return this.f46178a.b(i10);
    }

    @Override // q9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        if (!this.f46179b) {
            return null;
        }
        return f46176e.b(this.f46178a.d());
    }

    @Override // q9.b
    public synchronized CloseableReference e(int i10) {
        return f46176e.b(this.f46178a.c(i10));
    }
}
