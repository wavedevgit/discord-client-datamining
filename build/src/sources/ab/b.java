package ab;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f446a = new b();

    private b() {
    }

    public static final boolean a(a aVar, CloseableReference closeableReference) {
        if (aVar != null && closeableReference != null) {
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            Bitmap bitmap = (Bitmap) J;
            if (aVar.a()) {
                bitmap.setHasAlpha(true);
            }
            aVar.b(bitmap);
            return true;
        }
        return false;
    }
}
