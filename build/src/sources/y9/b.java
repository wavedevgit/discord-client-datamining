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
    public static final b f54532a = new b();

    private b() {
    }

    public static final b.a a(Map componentAttribution, Map shortcutAttribution, Map map, Map map2, Rect rect, String str, PointF pointF, Map map3, Object obj, boolean z10, Uri uri) {
        Intrinsics.checkNotNullParameter(componentAttribution, "componentAttribution");
        Intrinsics.checkNotNullParameter(shortcutAttribution, "shortcutAttribution");
        b.a aVar = new b.a();
        if (rect != null) {
            aVar.f55192h = rect.width();
            aVar.f55193i = rect.height();
        }
        aVar.f55194j = str;
        if (pointF != null) {
            aVar.f55195k = Float.valueOf(pointF.x);
            aVar.f55196l = Float.valueOf(pointF.y);
        }
        aVar.f55190f = obj;
        aVar.f55197m = z10;
        aVar.f55191g = uri;
        aVar.f55187c = map;
        aVar.f55188d = map3;
        aVar.f55186b = shortcutAttribution;
        aVar.f55185a = componentAttribution;
        aVar.f55189e = map2;
        return aVar;
    }
}
