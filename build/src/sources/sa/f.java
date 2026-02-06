package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface f extends d {
    static f M0(CloseableReference closeableReference, o oVar, int i10, int i11) {
        if (b.K0()) {
            return new b(closeableReference, oVar, i10, i11);
        }
        return new i(closeableReference, oVar, i10, i11);
    }

    static f m0(CloseableReference closeableReference, o oVar, int i10) {
        return M0(closeableReference, oVar, i10, 0);
    }

    static f o1(Bitmap bitmap, s8.c cVar, o oVar, int i10) {
        return r1(bitmap, cVar, oVar, i10, 0);
    }

    static f r1(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        if (b.K0()) {
            return new b(bitmap, cVar, oVar, i10, i11);
        }
        return new i(bitmap, cVar, oVar, i10, i11);
    }

    CloseableReference T();

    int a1();

    int p1();
}
