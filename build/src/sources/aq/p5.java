package aq;

import android.content.Context;
import android.graphics.Typeface;
import kotlin.jvm.internal.Intrinsics;
import wp.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p5 {
    public static final Typeface a(Context context, String fontName) {
        Typeface typeface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fontName, "fontName");
        String str = fontName + ".ttf";
        c.a aVar = wp.c.f52613a;
        if (aVar.a().containsKey(str)) {
            typeface = (Typeface) aVar.a().get(str);
        } else {
            String[] list = context.getAssets().list("fonts");
            if (list != null && kotlin.collections.i.N(list, str)) {
                typeface = Typeface.createFromAsset(context.getAssets(), "fonts/" + str);
            } else {
                Integer g10 = mp.s.g(context, fontName, mp.t.f39038d);
                if (g10 != null) {
                    typeface = q1.j.i(context, g10.intValue());
                }
                typeface = null;
            }
        }
        wp.c.f52613a.a().put(str, typeface);
        return typeface;
    }
}
