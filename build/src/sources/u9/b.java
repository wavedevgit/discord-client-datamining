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
    public static final a f51255f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Class f51256g = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final p9.b f51257a;

    /* renamed from: b  reason: collision with root package name */
    private ga.a f51258b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51259c;

    /* renamed from: d  reason: collision with root package name */
    private d f51260d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f51261e;

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
            return b.this.f51257a.e(i10);
        }
    }

    public b(p9.b bitmapFrameCache, ga.a animatedDrawableBackend, boolean z10) {
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51257a = bitmapFrameCache;
        this.f51258b = animatedDrawableBackend;
        this.f51259c = z10;
        C0677b c0677b = new C0677b();
        this.f51261e = c0677b;
        this.f51260d = new d(this.f51258b, z10, c0677b);
    }

    @Override // p9.c
    public boolean a(int i10, Bitmap targetBitmap) {
        Intrinsics.checkNotNullParameter(targetBitmap, "targetBitmap");
        try {
            this.f51260d.h(i10, targetBitmap);
            return true;
        } catch (IllegalStateException e10) {
            p8.a.l(f51256g, e10, "Rendering of frame unsuccessful. Frame number: %d", Integer.valueOf(i10));
            return false;
        }
    }

    @Override // p9.c
    public int c() {
        return this.f51258b.getHeight();
    }

    @Override // p9.c
    public void d(Rect rect) {
        ga.a f10 = this.f51258b.f(rect);
        Intrinsics.checkNotNullExpressionValue(f10, "forNewBounds(...)");
        if (f10 != this.f51258b) {
            this.f51258b = f10;
            this.f51260d = new d(f10, this.f51259c, this.f51261e);
        }
    }

    @Override // p9.c
    public int e() {
        return this.f51258b.getWidth();
    }
}
