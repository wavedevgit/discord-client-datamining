package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface f extends d {
    static f L0(CloseableReference closeableReference, o oVar, int i10, int i11) {
        if (b.N0()) {
            return new b(closeableReference, oVar, i10, i11);
        }
        return new i(closeableReference, oVar, i10, i11);
    }

    static f k0(CloseableReference closeableReference, o oVar, int i10) {
        return L0(closeableReference, oVar, i10, 0);
    }

    static f p1(Bitmap bitmap, s8.c cVar, o oVar, int i10) {
        return s1(bitmap, cVar, oVar, i10, 0);
    }

    static f s1(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        if (b.N0()) {
            return new b(bitmap, cVar, oVar, i10, i11);
        }
        return new i(bitmap, cVar, oVar, i10, i11);
    }

    CloseableReference Q();

    int b1();

    int q1();
}
