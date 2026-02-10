package com.swmansion.rnscreens.gamma.tabs;

import android.view.Menu;
import android.view.MenuItem;
import androidx.appcompat.view.ContextThemeWrapper;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.material.bottomnavigation.c f19279a;

    /* renamed from: b  reason: collision with root package name */
    private final List f19280b;

    /* renamed from: c  reason: collision with root package name */
    private final o f19281c;

    public p(ContextThemeWrapper context, com.google.android.material.bottomnavigation.c bottomNavigationView, List tabScreenFragments) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(bottomNavigationView, "bottomNavigationView");
        Intrinsics.checkNotNullParameter(tabScreenFragments, "tabScreenFragments");
        this.f19279a = bottomNavigationView;
        this.f19280b = tabScreenFragments;
        this.f19281c = new o(context, bottomNavigationView);
    }

    private final void b() {
        MenuItem b10;
        Menu menu = this.f19279a.getMenu();
        Intrinsics.checkNotNullExpressionValue(menu, "getMenu(...)");
        if (menu.size() != this.f19280b.size()) {
            this.f19279a.getMenu().clear();
        }
        int i10 = 0;
        for (Object obj : this.f19280b) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            e eVar = (e) obj;
            Menu menu2 = this.f19279a.getMenu();
            Intrinsics.checkNotNullExpressionValue(menu2, "getMenu(...)");
            b10 = q.b(menu2, i10, eVar.x());
            if (b10.getItemId() == i10) {
                a(b10, eVar.x());
                i10 = i11;
            } else {
                throw new IllegalStateException("[RNScreens] Illegal state: menu items are shuffled");
            }
        }
    }

    public final void a(MenuItem menuItem, a tabScreen) {
        Intrinsics.checkNotNullParameter(menuItem, "menuItem");
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        this.f19281c.d(menuItem, tabScreen);
        this.f19281c.b(menuItem, tabScreen);
    }

    public final void c(l tabsHost) {
        Intrinsics.checkNotNullParameter(tabsHost, "tabsHost");
        this.f19281c.e(tabsHost);
        b();
        this.f19281c.c(tabsHost);
    }
}
