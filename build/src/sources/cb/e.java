package cb;

import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public static final e f7440a = new e();

    private e() {
    }

    public static final int a(InputStream inputStream) {
        if (inputStream == null) {
            p8.a.b("HeifExifUtil", "Trying to read Heif Exif from null inputStream -> ignoring");
            return 0;
        }
        try {
            return new e3.a(inputStream).m("Orientation", 1);
        } catch (IOException e10) {
            p8.a.g("HeifExifUtil", "Failed reading Heif Exif orientation -> ignoring", e10);
            return 0;
        }
    }
}
