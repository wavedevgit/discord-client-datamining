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
    public static final b f53836a = new b();

    private b() {
    }

    public static final b.a a(Map componentAttribution, Map shortcutAttribution, Map map, Map map2, Rect rect, String str, PointF pointF, Map map3, Object obj, boolean z10, Uri uri) {
        Intrinsics.checkNotNullParameter(componentAttribution, "componentAttribution");
        Intrinsics.checkNotNullParameter(shortcutAttribution, "shortcutAttribution");
        b.a aVar = new b.a();
        if (rect != null) {
            aVar.f55603h = rect.width();
            aVar.f55604i = rect.height();
        }
        aVar.f55605j = str;
        if (pointF != null) {
            aVar.f55606k = Float.valueOf(pointF.x);
            aVar.f55607l = Float.valueOf(pointF.y);
        }
        aVar.f55601f = obj;
        aVar.f55608m = z10;
        aVar.f55602g = uri;
        aVar.f55598c = map;
        aVar.f55599d = map3;
        aVar.f55597b = shortcutAttribution;
        aVar.f55596a = componentAttribution;
        aVar.f55600e = map2;
        return aVar;
    }
}
