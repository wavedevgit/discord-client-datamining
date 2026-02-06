package fq;

import android.content.Context;
import android.graphics.Typeface;
import bq.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p5 {
    public static final Typeface a(Context context, String fontName) {
        Typeface typeface;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fontName, "fontName");
        String str = fontName + ".ttf";
        c.a aVar = bq.c.f6971a;
        if (aVar.a().containsKey(str)) {
            typeface = (Typeface) aVar.a().get(str);
        } else {
            String[] list = context.getAssets().list("fonts");
            if (list != null && kotlin.collections.i.N(list, str)) {
                typeface = Typeface.createFromAsset(context.getAssets(), "fonts/" + str);
            } else {
                Integer g10 = rp.s.g(context, fontName, rp.t.f49136d);
                if (g10 != null) {
                    typeface = q1.j.i(context, g10.intValue());
                }
                typeface = null;
            }
        }
        bq.c.f6971a.a().put(str, typeface);
        return typeface;
    }
}
