package v9;

import android.graphics.Bitmap;
import android.graphics.Rect;
import com.facebook.common.references.CloseableReference;
import ja.d;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import q9.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements c {

    /* renamed from: f  reason: collision with root package name */
    public static final a f51405f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Class f51406g = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final q9.b f51407a;

    /* renamed from: b  reason: collision with root package name */
    private ha.a f51408b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51409c;

    /* renamed from: d  reason: collision with root package name */
    private d f51410d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f51411e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* renamed from: v9.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0709b implements d.b {
        C0709b() {
        }

        @Override // ja.d.b
        public void a(int i10, Bitmap bitmap) {
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }

        @Override // ja.d.b
        public CloseableReference b(int i10) {
            return b.this.f51407a.e(i10);
        }
    }

    public b(q9.b bitmapFrameCache, ha.a animatedDrawableBackend, boolean z10) {
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51407a = bitmapFrameCache;
        this.f51408b = animatedDrawableBackend;
        this.f51409c = z10;
        C0709b c0709b = new C0709b();
        this.f51411e = c0709b;
        this.f51410d = new d(this.f51408b, z10, c0709b);
    }

    @Override // q9.c
    public boolean a(int i10, Bitmap targetBitmap) {
        Intrinsics.checkNotNullParameter(targetBitmap, "targetBitmap");
        try {
            this.f51410d.h(i10, targetBitmap);
            return true;
        } catch (IllegalStateException e10) {
            q8.a.l(f51406g, e10, "Rendering of frame unsuccessful. Frame number: %d", Integer.valueOf(i10));
            return false;
        }
    }

    @Override // q9.c
    public int c() {
        return this.f51408b.getHeight();
    }

    @Override // q9.c
    public void d(Rect rect) {
        ha.a f10 = this.f51408b.f(rect);
        Intrinsics.checkNotNullExpressionValue(f10, "forNewBounds(...)");
        if (f10 != this.f51408b) {
            this.f51408b = f10;
            this.f51410d = new d(f10, this.f51409c, this.f51411e);
        }
    }

    @Override // q9.c
    public int e() {
        return this.f51408b.getWidth();
    }
}
