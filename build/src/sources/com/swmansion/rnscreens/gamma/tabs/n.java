package com.swmansion.rnscreens.gamma.tabs;

import android.os.Build;
import android.view.Menu;
import android.view.MenuItem;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.material.bottomnavigation.c f19275a;

    /* renamed from: b  reason: collision with root package name */
    private final List f19276b;

    public n(com.google.android.material.bottomnavigation.c bottomNavigationView, List tabScreenFragments) {
        Intrinsics.checkNotNullParameter(bottomNavigationView, "bottomNavigationView");
        Intrinsics.checkNotNullParameter(tabScreenFragments, "tabScreenFragments");
        this.f19275a = bottomNavigationView;
        this.f19276b = tabScreenFragments;
    }

    public final void a() {
        int i10 = 0;
        for (Object obj : this.f19276b) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            Menu menu = this.f19275a.getMenu();
            Intrinsics.checkNotNullExpressionValue(menu, "getMenu(...)");
            b(menu.getItem(i10), ((e) obj).x());
            i10 = i11;
        }
    }

    public final void b(MenuItem menuItem, a tabScreen) {
        Intrinsics.checkNotNullParameter(menuItem, "menuItem");
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        com.google.android.material.navigation.d dVar = (com.google.android.material.navigation.d) this.f19275a.findViewById(menuItem.getItemId());
        if (Build.VERSION.SDK_INT >= 26) {
            menuItem.setContentDescription(tabScreen.getTabBarItemAccessibilityLabel());
        }
        dVar.setTag(tabScreen.getTabBarItemTestID());
    }
}
