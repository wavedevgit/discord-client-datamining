package kp;

import android.webkit.MimeTypeMap;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements i {
    @Override // kp.i
    public String a(String path) {
        String mimeTypeFromExtension;
        Intrinsics.checkNotNullParameter(path, "path");
        String fileExtensionFromUrl = MimeTypeMap.getFileExtensionFromUrl(path);
        if (fileExtensionFromUrl != null && (mimeTypeFromExtension = MimeTypeMap.getSingleton().getMimeTypeFromExtension(fileExtensionFromUrl)) != null) {
            return mimeTypeFromExtension;
        }
        return "image/*";
    }
}
