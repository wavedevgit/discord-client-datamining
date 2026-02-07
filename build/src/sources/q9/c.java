package q9;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements p9.b {

    /* renamed from: c  reason: collision with root package name */
    public static final a f46609c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private int f46610a = -1;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f46611b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final synchronized void f() {
        CloseableReference.z(this.f46611b);
        this.f46611b = null;
        this.f46610a = -1;
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
            if (this.f46611b != null) {
                Object J = bitmapReference.J();
                CloseableReference closeableReference = this.f46611b;
                if (closeableReference != null) {
                    bitmap = (Bitmap) closeableReference.J();
                } else {
                    bitmap = null;
                }
                if (Intrinsics.areEqual(J, bitmap)) {
                    return;
                }
            }
            CloseableReference.z(this.f46611b);
            this.f46611b = CloseableReference.n(bitmapReference);
            this.f46610a = i10;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // p9.b
    public synchronized CloseableReference c(int i10) {
        return CloseableReference.n(this.f46611b);
    }

    @Override // p9.b
    public synchronized void clear() {
        f();
    }

    @Override // p9.b
    public synchronized boolean contains(int i10) {
        boolean z10;
        if (i10 == this.f46610a) {
            if (CloseableReference.I0(this.f46611b)) {
                z10 = true;
            }
        }
        z10 = false;
        return z10;
    }

    @Override // p9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        CloseableReference n10;
        n10 = CloseableReference.n(this.f46611b);
        f();
        return n10;
    }

    @Override // p9.b
    public synchronized CloseableReference e(int i10) {
        CloseableReference closeableReference;
        if (this.f46610a == i10) {
            closeableReference = CloseableReference.n(this.f46611b);
        } else {
            closeableReference = null;
        }
        return closeableReference;
    }
}
