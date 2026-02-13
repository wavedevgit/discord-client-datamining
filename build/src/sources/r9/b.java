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
    public static final a f46744e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final Class f46745f = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final ja.c f46746a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f46747b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseArray f46748c;

    /* renamed from: d  reason: collision with root package name */
    private CloseableReference f46749d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final CloseableReference c(CloseableReference closeableReference) {
            f Y0 = f.Y0(closeableReference, n.f49240d, 0);
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
        this.f46746a = animatedFrameCache;
        this.f46747b = z10;
        this.f46748c = new SparseArray();
    }

    private final synchronized void f(int i10) {
        CloseableReference closeableReference = (CloseableReference) this.f46748c.get(i10);
        if (closeableReference != null) {
            this.f46748c.delete(i10);
            CloseableReference.z(closeableReference);
            q8.a.A(f46745f, "removePreparedReference(%d) removed. Pending frames: %s", Integer.valueOf(i10), this.f46748c);
        }
    }

    @Override // q9.b
    public synchronized void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        CloseableReference c10 = f46744e.c(bitmapReference);
        if (c10 == null) {
            CloseableReference.z(c10);
            return;
        }
        CloseableReference a10 = this.f46746a.a(i10, c10);
        if (CloseableReference.C0(a10)) {
            CloseableReference.z((CloseableReference) this.f46748c.get(i10));
            this.f46748c.put(i10, a10);
            q8.a.A(f46745f, "cachePreparedFrame(%d) cached. Pending frames: %s", Integer.valueOf(i10), this.f46748c);
        }
        CloseableReference.z(c10);
    }

    @Override // q9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
        f(i10);
        CloseableReference c10 = f46744e.c(bitmapReference);
        if (c10 != null) {
            CloseableReference.z(this.f46749d);
            this.f46749d = this.f46746a.a(i10, c10);
        }
        CloseableReference.z(c10);
    }

    @Override // q9.b
    public synchronized CloseableReference c(int i10) {
        return f46744e.b(CloseableReference.n(this.f46749d));
    }

    @Override // q9.b
    public synchronized void clear() {
        try {
            CloseableReference.z(this.f46749d);
            this.f46749d = null;
            int size = this.f46748c.size();
            for (int i10 = 0; i10 < size; i10++) {
                CloseableReference.z((CloseableReference) this.f46748c.valueAt(i10));
            }
            this.f46748c.clear();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // q9.b
    public synchronized boolean contains(int i10) {
        return this.f46746a.b(i10);
    }

    @Override // q9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        if (!this.f46747b) {
            return null;
        }
        return f46744e.b(this.f46746a.d());
    }

    @Override // q9.b
    public synchronized CloseableReference e(int i10) {
        return f46744e.b(this.f46746a.c(i10));
    }
}
