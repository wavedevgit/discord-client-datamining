package r9;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements q9.b {

    /* renamed from: c  reason: collision with root package name */
    public static final a f46182c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private int f46183a = -1;

    /* renamed from: b  reason: collision with root package name */
    private CloseableReference f46184b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    private final synchronized void f() {
        CloseableReference.z(this.f46184b);
        this.f46184b = null;
        this.f46183a = -1;
    }

    @Override // q9.b
    public void a(int i10, CloseableReference bitmapReference, int i11) {
        Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
    }

    @Override // q9.b
    public synchronized void b(int i10, CloseableReference bitmapReference, int i11) {
        Bitmap bitmap;
        try {
            Intrinsics.checkNotNullParameter(bitmapReference, "bitmapReference");
            if (this.f46184b != null) {
                Object J = bitmapReference.J();
                CloseableReference closeableReference = this.f46184b;
                if (closeableReference != null) {
                    bitmap = (Bitmap) closeableReference.J();
                } else {
                    bitmap = null;
                }
                if (Intrinsics.areEqual(J, bitmap)) {
                    return;
                }
            }
            CloseableReference.z(this.f46184b);
            this.f46184b = CloseableReference.n(bitmapReference);
            this.f46183a = i10;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // q9.b
    public synchronized CloseableReference c(int i10) {
        return CloseableReference.n(this.f46184b);
    }

    @Override // q9.b
    public synchronized void clear() {
        f();
    }

    @Override // q9.b
    public synchronized boolean contains(int i10) {
        boolean z10;
        if (i10 == this.f46183a) {
            if (CloseableReference.C0(this.f46184b)) {
                z10 = true;
            }
        }
        z10 = false;
        return z10;
    }

    @Override // q9.b
    public synchronized CloseableReference d(int i10, int i11, int i12) {
        CloseableReference n10;
        n10 = CloseableReference.n(this.f46184b);
        f();
        return n10;
    }

    @Override // q9.b
    public synchronized CloseableReference e(int i10) {
        CloseableReference closeableReference;
        if (this.f46183a == i10) {
            closeableReference = CloseableReference.n(this.f46184b);
        } else {
            closeableReference = null;
        }
        return closeableReference;
    }
}
