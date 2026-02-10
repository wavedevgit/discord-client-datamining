package xa;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import android.graphics.Rect;
import com.facebook.common.references.CloseableReference;
import ta.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {
    CloseableReference a(k kVar, Bitmap.Config config, Rect rect, ColorSpace colorSpace);

    CloseableReference b(k kVar, Bitmap.Config config, Rect rect, int i10, ColorSpace colorSpace);
}
