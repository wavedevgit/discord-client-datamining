package sa;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class i extends b {
    /* JADX INFO: Access modifiers changed from: protected */
    public i(CloseableReference closeableReference, o oVar, int i10, int i11) {
        super(closeableReference, oVar, i10, i11);
    }

    protected void finalize() {
        if (isClosed()) {
            return;
        }
        p8.a.L("DefaultCloseableStaticBitmap", "finalize: %s %x still open.", getClass().getSimpleName(), Integer.valueOf(System.identityHashCode(this)));
        try {
            close();
        } finally {
            super.finalize();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public i(Bitmap bitmap, s8.c cVar, o oVar, int i10, int i11) {
        super(bitmap, cVar, oVar, i10, i11);
    }
}
