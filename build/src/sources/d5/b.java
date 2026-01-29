package d5;

import android.net.Uri;
import g5.m;
import java.io.File;
import k5.k;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements d {
    private final boolean b(Uri uri) {
        String scheme;
        if (!k.q(uri) && ((scheme = uri.getScheme()) == null || Intrinsics.areEqual(scheme, "file"))) {
            String path = uri.getPath();
            if (path == null) {
                path = "";
            }
            if (StringsKt.P0(path, '/', false, 2, null) && k.h(uri) != null) {
                return true;
            }
        }
        return false;
    }

    @Override // d5.d
    /* renamed from: c */
    public File a(Uri uri, m mVar) {
        if (!b(uri)) {
            return null;
        }
        if (Intrinsics.areEqual(uri.getScheme(), "file")) {
            String path = uri.getPath();
            if (path == null) {
                return null;
            }
            return new File(path);
        }
        return new File(uri.toString());
    }
}
