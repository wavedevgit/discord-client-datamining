package q8;

import android.webkit.MimeTypeMap;
import com.reactnativecommunity.clipboard.ClipboardModule;
import java.util.Map;
import o8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final MimeTypeMap f47501a = MimeTypeMap.getSingleton();

    /* renamed from: b  reason: collision with root package name */
    private static final Map f47502b = f.of(ClipboardModule.MIMETYPE_HEIF, "heif", ClipboardModule.MIMETYPE_HEIC, "heic");

    /* renamed from: c  reason: collision with root package name */
    private static final Map f47503c = f.of("heif", ClipboardModule.MIMETYPE_HEIF, "heic", ClipboardModule.MIMETYPE_HEIC);

    public static String a(String str) {
        String str2 = (String) f47503c.get(str);
        if (str2 != null) {
            return str2;
        }
        return f47501a.getMimeTypeFromExtension(str);
    }
}
