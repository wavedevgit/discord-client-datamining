package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static synchronized AssetPackManager a(Context context) {
        AssetPackManager a10;
        synchronized (c.class) {
            a10 = x1.a(context).a();
        }
        return a10;
    }
}
