package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface f extends d {
    static f K0(CloseableReference closeableReference, o oVar, int i10, int i11) {
        if (b.M0()) {
            return new b(closeableReference, oVar, i10, i11);
        }
        return new i(closeableReference, oVar, i10, i11);
    }

    static f j0(CloseableReference closeableReference, o oVar, int i10) {
        return K0(closeableReference, oVar, i10, 0);
    }

    static f p1(Bitmap bitmap, s8.c cVar, o oVar, int i10) {
        return s1(bitmap, cVar, oVar, i10, 0);
    }

    static f s1(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        if (b.M0()) {
            return new b(bitmap, cVar, oVar, i10, i11);
        }
        return new i(bitmap, cVar, oVar, i10, i11);
    }

    CloseableReference Q();

    int a1();

    int q1();
}
