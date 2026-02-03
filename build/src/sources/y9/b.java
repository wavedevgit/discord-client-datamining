package y9;

import android.graphics.PointF;
import android.graphics.Rect;
import android.net.Uri;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import z9.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f53839a = new b();

    private b() {
    }

    public static final b.a a(Map componentAttribution, Map shortcutAttribution, Map map, Map map2, Rect rect, String str, PointF pointF, Map map3, Object obj, boolean z10, Uri uri) {
        Intrinsics.checkNotNullParameter(componentAttribution, "componentAttribution");
        Intrinsics.checkNotNullParameter(shortcutAttribution, "shortcutAttribution");
        b.a aVar = new b.a();
        if (rect != null) {
            aVar.f55606h = rect.width();
            aVar.f55607i = rect.height();
        }
        aVar.f55608j = str;
        if (pointF != null) {
            aVar.f55609k = Float.valueOf(pointF.x);
            aVar.f55610l = Float.valueOf(pointF.y);
        }
        aVar.f55604f = obj;
        aVar.f55611m = z10;
        aVar.f55605g = uri;
        aVar.f55601c = map;
        aVar.f55602d = map3;
        aVar.f55600b = shortcutAttribution;
        aVar.f55599a = componentAttribution;
        aVar.f55603e = map2;
        return aVar;
    }
}
