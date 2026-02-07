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
    public static final a f51303f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Class f51304g = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final p9.b f51305a;

    /* renamed from: b  reason: collision with root package name */
    private ga.a f51306b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51307c;

    /* renamed from: d  reason: collision with root package name */
    private d f51308d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f51309e;

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
    public static final class C0677b implements d.b {
        C0677b() {
        }

        @Override // ia.d.b
        public void a(int i10, Bitmap bitmap) {
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }

        @Override // ia.d.b
        public CloseableReference b(int i10) {
            return b.this.f51305a.e(i10);
        }
    }

    public b(p9.b bitmapFrameCache, ga.a animatedDrawableBackend, boolean z10) {
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51305a = bitmapFrameCache;
        this.f51306b = animatedDrawableBackend;
        this.f51307c = z10;
        C0677b c0677b = new C0677b();
        this.f51309e = c0677b;
        this.f51308d = new d(this.f51306b, z10, c0677b);
    }

    @Override // p9.c
    public boolean a(int i10, Bitmap targetBitmap) {
        Intrinsics.checkNotNullParameter(targetBitmap, "targetBitmap");
        try {
            this.f51308d.h(i10, targetBitmap);
            return true;
        } catch (IllegalStateException e10) {
            p8.a.l(f51304g, e10, "Rendering of frame unsuccessful. Frame number: %d", Integer.valueOf(i10));
            return false;
        }
    }

    @Override // p9.c
    public int c() {
        return this.f51306b.getHeight();
    }

    @Override // p9.c
    public void d(Rect rect) {
        ga.a f10 = this.f51306b.f(rect);
        Intrinsics.checkNotNullExpressionValue(f10, "forNewBounds(...)");
        if (f10 != this.f51306b) {
            this.f51306b = f10;
            this.f51308d = new d(f10, this.f51307c, this.f51309e);
        }
    }

    @Override // p9.c
    public int e() {
        return this.f51306b.getWidth();
    }
}
