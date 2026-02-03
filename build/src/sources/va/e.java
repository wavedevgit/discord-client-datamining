package va;

import android.graphics.Bitmap;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends p {

    /* renamed from: c  reason: collision with root package name */
    public static final a f50916c = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    @Override // va.p, va.v
    /* renamed from: c */
    public Bitmap get(int i10) {
        Bitmap bitmap = (Bitmap) super.get(i10);
        if (bitmap != null && e(bitmap)) {
            bitmap.eraseColor(0);
            return bitmap;
        }
        return null;
    }

    @Override // va.v
    /* renamed from: d */
    public int a(Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        return cb.d.j(bitmap);
    }

    protected final boolean e(Bitmap bitmap) {
        if (bitmap == null) {
            return false;
        }
        if (bitmap.isRecycled()) {
            p8.a.O("BitmapPoolBackend", "Cannot reuse a recycled bitmap: %s", bitmap);
            return false;
        } else if (!bitmap.isMutable()) {
            p8.a.O("BitmapPoolBackend", "Cannot reuse an immutable bitmap: %s", bitmap);
            return false;
        } else {
            return true;
        }
    }

    @Override // va.p, va.v
    /* renamed from: f */
    public void put(Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "bitmap");
        if (e(bitmap)) {
            super.put(bitmap);
        }
    }
}
