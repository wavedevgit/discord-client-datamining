package yp;

import android.content.Context;
import android.graphics.Typeface;
import kotlin.jvm.internal.Intrinsics;
import up.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p5 {
    public static final Typeface a(Context context, String fontName) {
        Typeface typeface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fontName, "fontName");
        String str = fontName + ".ttf";
        c.a aVar = up.c.f50554a;
        if (aVar.a().containsKey(str)) {
            typeface = (Typeface) aVar.a().get(str);
        } else {
            String[] list = context.getAssets().list("fonts");
            if (list != null && kotlin.collections.i.N(list, str)) {
                typeface = Typeface.createFromAsset(context.getAssets(), "fonts/" + str);
            } else {
                Integer g10 = kp.s.g(context, fontName, kp.t.f36311d);
                if (g10 != null) {
                    typeface = q1.j.i(context, g10.intValue());
                }
                typeface = null;
            }
        }
        up.c.f50554a.a().put(str, typeface);
        return typeface;
    }
}
