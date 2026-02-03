package u9;

import android.graphics.Bitmap;
import android.graphics.Rect;
import com.facebook.common.references.CloseableReference;
import ia.d;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import p9.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements c {

    /* renamed from: f  reason: collision with root package name */
    public static final a f50445f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Class f50446g = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final p9.b f50447a;

    /* renamed from: b  reason: collision with root package name */
    private ga.a f50448b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f50449c;

    /* renamed from: d  reason: collision with root package name */
    private d f50450d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f50451e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: u9.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0634b implements d.b {
        C0634b() {
        }

        @Override // ia.d.b
        public void a(int i10, Bitmap bitmap) {
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }

        @Override // ia.d.b
        public CloseableReference b(int i10) {
            return b.this.f50447a.e(i10);
        }
    }

    public b(p9.b bitmapFrameCache, ga.a animatedDrawableBackend, boolean z10) {
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f50447a = bitmapFrameCache;
        this.f50448b = animatedDrawableBackend;
        this.f50449c = z10;
        C0634b c0634b = new C0634b();
        this.f50451e = c0634b;
        this.f50450d = new d(this.f50448b, z10, c0634b);
    }

    @Override // p9.c
    public boolean a(int i10, Bitmap targetBitmap) {
        Intrinsics.checkNotNullParameter(targetBitmap, "targetBitmap");
        try {
            this.f50450d.h(i10, targetBitmap);
            return true;
        } catch (IllegalStateException e10) {
            p8.a.l(f50446g, e10, "Rendering of frame unsuccessful. Frame number: %d", Integer.valueOf(i10));
            return false;
        }
    }

    @Override // p9.c
    public int c() {
        return this.f50448b.getHeight();
    }

    @Override // p9.c
    public void d(Rect rect) {
        ga.a f10 = this.f50448b.f(rect);
        Intrinsics.checkNotNullExpressionValue(f10, "forNewBounds(...)");
        if (f10 != this.f50448b) {
            this.f50448b = f10;
            this.f50450d = new d(f10, this.f50449c, this.f50451e);
        }
    }

    @Override // p9.c
    public int e() {
        return this.f50448b.getWidth();
    }
}
