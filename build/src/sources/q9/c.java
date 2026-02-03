package q9;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements p9.b {

    /* renamed from: c  reason: collision with root package name */
    public static final a f47299c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private int f47300a = -1;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f47301b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final synchronized void f() {
        CloseableReference.N(this.f47301b);
        this.f47301b = null;
        this.f47300a = -1;
    }

    @Override // p9.b
    public void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
    }

    @Override // p9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Bitmap bitmap;
        try {
            Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
            if (this.f47301b != null) {
                Object F0 = bitmapReference.F0();
                CloseableReference closeableReference = this.f47301b;
                if (closeableReference != null) {
                    bitmap = (Bitmap) closeableReference.F0();
                } else {
                    bitmap = null;
                }
                if (Intrinsics.areEqual(F0, bitmap)) {
                    return;
                }
            }
            CloseableReference.N(this.f47301b);
            this.f47301b = CloseableReference.E(bitmapReference);
            this.f47300a = i10;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // p9.b
    public synchronized CloseableReference c(int i10) {
        return CloseableReference.E(this.f47301b);
    }

    @Override // p9.b
    public synchronized void clear() {
        f();
    }

    @Override // p9.b
    public synchronized boolean contains(int i10) {
        boolean z10;
        if (i10 == this.f47300a) {
            if (CloseableReference.K0(this.f47301b)) {
                z10 = true;
            }
        }
        z10 = false;
        return z10;
    }

    @Override // p9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        CloseableReference E;
        E = CloseableReference.E(this.f47301b);
        f();
        return E;
    }

    @Override // p9.b
    public synchronized CloseableReference e(int i10) {
        CloseableReference closeableReference;
        if (this.f47300a == i10) {
            closeableReference = CloseableReference.E(this.f47301b);
        } else {
            closeableReference = null;
        }
        return closeableReference;
    }
}
