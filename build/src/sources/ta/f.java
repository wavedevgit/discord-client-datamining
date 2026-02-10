package ta;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface f extends d {
    static f N(Bitmap bitmap, t8.c cVar, o oVar, int i10) {
        return h2(bitmap, cVar, oVar, i10, 0);
    }

    static f Y0(CloseableReference closeableReference, o oVar, int i10) {
        return b2(closeableReference, oVar, i10, 0);
    }

    static f b2(CloseableReference closeableReference, o oVar, int i10, int i11) {
        if (b.G0()) {
            return new b(closeableReference, oVar, i10, i11);
        }
        return new i(closeableReference, oVar, i10, i11);
    }

    static f h2(Bitmap bitmap, t8.c cVar, o oVar, int i10, int i11) {
        if (b.G0()) {
            return new b(bitmap, cVar, oVar, i10, i11);
        }
        return new i(bitmap, cVar, oVar, i10, i11);
    }

    CloseableReference U();

    int c1();

    int q1();
}
