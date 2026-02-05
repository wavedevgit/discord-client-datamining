package ho;

import android.graphics.Bitmap;
import java.io.File;
import java.io.FileOutputStream;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r0 {
    public static final File a(Bitmap bitmap, up.c sdkFilesManager) {
        Intrinsics.checkNotNullParameter(bitmap, "<this>");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        File c10 = sdkFilesManager.c("jpg");
        FileOutputStream fileOutputStream = new FileOutputStream(c10);
        try {
            bitmap.compress(Bitmap.CompressFormat.JPEG, 80, fileOutputStream);
            zr.c.a(fileOutputStream, null);
            return c10;
        } finally {
        }
    }
}
