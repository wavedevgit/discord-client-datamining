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
    public static final b f54106a = new b();

    private b() {
    }

    public static final b.a a(Map componentAttribution, Map shortcutAttribution, Map map, Map map2, Rect rect, String str, PointF pointF, Map map3, Object obj, boolean z10, Uri uri) {
        Intrinsics.checkNotNullParameter(componentAttribution, "componentAttribution");
        Intrinsics.checkNotNullParameter(shortcutAttribution, "shortcutAttribution");
        b.a aVar = new b.a();
        if (rect != null) {
            aVar.f55336h = rect.width();
            aVar.f55337i = rect.height();
        }
        aVar.f55338j = str;
        if (pointF != null) {
            aVar.f55339k = Float.valueOf(pointF.x);
            aVar.f55340l = Float.valueOf(pointF.y);
        }
        aVar.f55334f = obj;
        aVar.f55341m = z10;
        aVar.f55335g = uri;
        aVar.f55331c = map;
        aVar.f55332d = map3;
        aVar.f55330b = shortcutAttribution;
        aVar.f55329a = componentAttribution;
        aVar.f55333e = map2;
        return aVar;
    }
}
