package com.swmansion.rnscreens.gamma.tabs;

import android.view.Menu;
import android.view.MenuItem;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {
    /* JADX INFO: Access modifiers changed from: private */
    public static final MenuItem b(Menu menu, int i10, a aVar) {
        MenuItem findItem = menu.findItem(i10);
        if (findItem == null) {
            MenuItem add = menu.add(0, i10, 0, aVar.getTabTitle());
            Intrinsics.checkNotNullExpressionValue(add, "add(...)");
            return add;
        }
        return findItem;
    }
}
