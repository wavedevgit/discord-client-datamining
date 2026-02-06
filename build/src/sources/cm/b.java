package cm;

import android.graphics.Bitmap;
import com.reactnativecommunity.clipboard.ClipboardModule;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static Bitmap.CompressFormat a(String str) {
        if (str.equals(ClipboardModule.MIMETYPE_PNG)) {
            return Bitmap.CompressFormat.PNG;
        }
        return Bitmap.CompressFormat.JPEG;
    }
}
