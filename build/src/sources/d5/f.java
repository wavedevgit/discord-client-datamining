package d5;

import android.content.res.Resources;
import android.net.Uri;
import g5.m;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f implements d {
    private final boolean b(Uri uri) {
        String authority;
        if (Intrinsics.areEqual(uri.getScheme(), "android.resource") && (authority = uri.getAuthority()) != null && !StringsKt.k0(authority) && uri.getPathSegments().size() == 2) {
            return true;
        }
        return false;
    }

    @Override // d5.d
    /* renamed from: c */
    public Uri a(Uri uri, m mVar) {
        if (!b(uri)) {
            return null;
        }
        String authority = uri.getAuthority();
        if (authority == null) {
            authority = "";
        }
        Resources resourcesForApplication = mVar.g().getPackageManager().getResourcesForApplication(authority);
        List<String> pathSegments = uri.getPathSegments();
        int identifier = resourcesForApplication.getIdentifier(pathSegments.get(1), pathSegments.get(0), authority);
        if (identifier != 0) {
            return Uri.parse("android.resource://" + authority + '/' + identifier);
        }
        throw new IllegalStateException(("Invalid android.resource URI: " + uri).toString());
    }
}
