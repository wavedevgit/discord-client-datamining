package wa;

import android.graphics.Bitmap;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Set f52985a;

    public n() {
        Set b10 = p8.l.b();
        Intrinsics.checkNotNullExpressionValue(b10, "newIdentityHashSet(...)");
        this.f52985a = b10;
    }

    @Override // s8.f
    /* renamed from: g */
    public Bitmap get(int i10) {
        Bitmap createBitmap = Bitmap.createBitmap(1, (int) Math.ceil(i10 / 2.0d), Bitmap.Config.RGB_565);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        this.f52985a.add(createBitmap);
        return createBitmap;
    }

    @Override // s8.f, t8.c
    /* renamed from: h */
    public void release(Bitmap value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f52985a.remove(value);
        value.recycle();
    }
}
