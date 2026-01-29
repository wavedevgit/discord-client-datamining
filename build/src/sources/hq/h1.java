package hq;

import android.net.Uri;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h1 {
    public static final String a(String baseUrl, String oneTimeLinkCode, String componentName) {
        Intrinsics.checkNotNullParameter(baseUrl, "baseUrl");
        Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
        Intrinsics.checkNotNullParameter(componentName, "componentName");
        String uri = Uri.parse(baseUrl).buildUpon().appendQueryParameter("code", oneTimeLinkCode).appendQueryParameter("component", componentName).build().toString();
        Intrinsics.checkNotNullExpressionValue(uri, "toString(...)");
        return uri;
    }
}
