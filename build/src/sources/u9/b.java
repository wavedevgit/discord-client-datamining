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
    public static final a f51214f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final Class f51215g = b.class;

    /* renamed from: a  reason: collision with root package name */
    private final p9.b f51216a;

    /* renamed from: b  reason: collision with root package name */
    private ga.a f51217b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51218c;

    /* renamed from: d  reason: collision with root package name */
    private d f51219d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f51220e;

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
    public static final class C0663b implements d.b {
        C0663b() {
        }

        @Override // ia.d.b
        public void a(int i10, Bitmap bitmap) {
            Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        }

        @Override // ia.d.b
        public CloseableReference b(int i10) {
            return b.this.f51216a.e(i10);
        }
    }

    public b(p9.b bitmapFrameCache, ga.a animatedDrawableBackend, boolean z10) {
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animatedDrawableBackend, "animatedDrawableBackend");
        this.f51216a = bitmapFrameCache;
        this.f51217b = animatedDrawableBackend;
        this.f51218c = z10;
        C0663b c0663b = new C0663b();
        this.f51220e = c0663b;
        this.f51219d = new d(this.f51217b, z10, c0663b);
    }

    @Override // p9.c
    public boolean a(int i10, Bitmap targetBitmap) {
        Intrinsics.checkNotNullParameter(targetBitmap, "targetBitmap");
        try {
            this.f51219d.h(i10, targetBitmap);
            return true;
        } catch (IllegalStateException e10) {
            p8.a.l(f51215g, e10, "Rendering of frame unsuccessful. Frame number: %d", Integer.valueOf(i10));
            return false;
        }
    }

    @Override // p9.c
    public int c() {
        return this.f51217b.getHeight();
    }

    @Override // p9.c
    public void d(Rect rect) {
        ga.a f10 = this.f51217b.f(rect);
        Intrinsics.checkNotNullExpressionValue(f10, "forNewBounds(...)");
        if (f10 != this.f51217b) {
            this.f51217b = f10;
            this.f51219d = new d(f10, this.f51218c, this.f51220e);
        }
    }

    @Override // p9.c
    public int e() {
        return this.f51217b.getWidth();
    }
}
