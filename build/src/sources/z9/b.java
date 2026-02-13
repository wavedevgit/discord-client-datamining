package z9;

import aa.b;
import android.graphics.PointF;
import android.graphics.Rect;
import android.net.Uri;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f56757a = new b();

    private b() {
    }

    public static final b.a a(Map componentAttribution, Map shortcutAttribution, Map map, Map map2, Rect rect, String str, PointF pointF, Map map3, Object obj, boolean z10, Uri uri) {
        Intrinsics.checkNotNullParameter(componentAttribution, "componentAttribution");
        Intrinsics.checkNotNullParameter(shortcutAttribution, "shortcutAttribution");
        b.a aVar = new b.a();
        if (rect != null) {
            aVar.f439h = rect.width();
            aVar.f440i = rect.height();
        }
        aVar.f441j = str;
        if (pointF != null) {
            aVar.f442k = Float.valueOf(pointF.x);
            aVar.f443l = Float.valueOf(pointF.y);
        }
        aVar.f437f = obj;
        aVar.f444m = z10;
        aVar.f438g = uri;
        aVar.f434c = map;
        aVar.f435d = map3;
        aVar.f433b = shortcutAttribution;
        aVar.f432a = componentAttribution;
        aVar.f436e = map2;
        return aVar;
    }
}
