package dq;

import android.content.Context;
import android.graphics.Typeface;
import kotlin.jvm.internal.Intrinsics;
import zp.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p5 {
    public static final Typeface a(Context context, String fontName) {
        Typeface typeface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fontName, "fontName");
        String str = fontName + ".ttf";
        c.a aVar = zp.c.f56142a;
        if (aVar.a().containsKey(str)) {
            typeface = (Typeface) aVar.a().get(str);
        } else {
            String[] list = context.getAssets().list("fonts");
            if (list != null && kotlin.collections.i.N(list, str)) {
                typeface = Typeface.createFromAsset(context.getAssets(), "fonts/" + str);
            } else {
                Integer g10 = pp.s.g(context, fontName, pp.t.f46235d);
                if (g10 != null) {
                    typeface = q1.j.i(context, g10.intValue());
                }
                typeface = null;
            }
        }
        zp.c.f56142a.a().put(str, typeface);
        return typeface;
    }
}
