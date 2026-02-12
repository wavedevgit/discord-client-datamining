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
    public static final a f51406f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Class f51407g = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final q9.b f51408a;

    /* renamed from: b  reason: collision with root package name */
    private ha.a f51409b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51410c;

    /* renamed from: d  reason: collision with root package name */
    private d f51411d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f51412e;

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
            return b.this.f51408a.e(i10);
        }
    }

    public b(q9.b bitmapFrameCache, ha.a animatedDrawableBackend, boolean z10) {
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51408a = bitmapFrameCache;
        this.f51409b = animatedDrawableBackend;
        this.f51410c = z10;
        C0709b c0709b = new C0709b();
        this.f51412e = c0709b;
        this.f51411d = new d(this.f51409b, z10, c0709b);
    }

    @Override // q9.c
    public boolean a(int i10, Bitmap targetBitmap) {
        Intrinsics.checkNotNullParameter(targetBitmap, "targetBitmap");
        try {
            this.f51411d.h(i10, targetBitmap);
            return true;
        } catch (IllegalStateException e10) {
            q8.a.l(f51407g, e10, "Rendering of frame unsuccessful. Frame number: %d", Integer.valueOf(i10));
            return false;
        }
    }

    @Override // q9.c
    public int c() {
        return this.f51409b.getHeight();
    }

    @Override // q9.c
    public void d(Rect rect) {
        ha.a f10 = this.f51409b.f(rect);
        Intrinsics.checkNotNullExpressionValue(f10, "forNewBounds(...)");
        if (f10 != this.f51409b) {
            this.f51409b = f10;
            this.f51411d = new d(f10, this.f51410c, this.f51412e);
        }
    }

    @Override // q9.c
    public int e() {
        return this.f51409b.getWidth();
    }
}
