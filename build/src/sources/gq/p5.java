package gq;

import android.content.Context;
import android.graphics.Typeface;
import cq.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p5 {
    public static final Typeface a(Context context, String fontName) {
        Typeface typeface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fontName, "fontName");
        String str = fontName + ".ttf";
        c.a aVar = cq.c.f20126a;
        if (aVar.a().containsKey(str)) {
            typeface = (Typeface) aVar.a().get(str);
        } else {
            String[] list = context.getAssets().list("fonts");
            if (list != null && kotlin.collections.i.N(list, str)) {
                typeface = Typeface.createFromAsset(context.getAssets(), "fonts/" + str);
            } else {
                Integer g10 = sp.s.g(context, fontName, sp.t.f50009d);
                if (g10 != null) {
                    typeface = q1.j.i(context, g10.intValue());
                }
                typeface = null;
            }
        }
        cq.c.f20126a.a().put(str, typeface);
        return typeface;
    }
}
