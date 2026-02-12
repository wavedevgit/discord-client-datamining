package com.swmansion.rnscreens.gamma.tabs;

import android.util.TypedValue;
import android.view.Menu;
import android.view.MenuItem;
import androidx.appcompat.view.ContextThemeWrapper;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final ContextThemeWrapper f19278a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.material.bottomnavigation.c f19279b;

    public o(ContextThemeWrapper context, com.google.android.material.bottomnavigation.c bottomNavigationView) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(bottomNavigationView, "bottomNavigationView");
        this.f19278a = context;
        this.f19279b = bottomNavigationView;
    }

    private final int a(int i10) {
        TypedValue typedValue = new TypedValue();
        this.f19278a.getTheme().resolveAttribute(i10, typedValue, true);
        return typedValue.data;
    }

    public final void b(MenuItem menuItem, a tabScreen) {
        int a10;
        int a11;
        Intrinsics.checkNotNullParameter(menuItem, "menuItem");
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        Menu menu = this.f19279b.getMenu();
        Intrinsics.checkNotNullExpressionValue(menu, "getMenu(...)");
        int M = kotlin.sequences.k.M(androidx.core.view.r.a(menu), menuItem);
        String badgeValue = tabScreen.getBadgeValue();
        if (badgeValue == null) {
            dh.a d10 = this.f19279b.d(M);
            if (d10 != null) {
                d10.X(false);
                return;
            }
            return;
        }
        Integer intOrNull = StringsKt.toIntOrNull(badgeValue);
        dh.a e10 = this.f19279b.e(M);
        Intrinsics.checkNotNullExpressionValue(e10, "getOrCreateBadge(...)");
        e10.X(true);
        e10.f();
        e10.e();
        if (intOrNull != null) {
            e10.V(intOrNull.intValue());
        } else if (!Intrinsics.areEqual(badgeValue, "")) {
            e10.W(badgeValue);
        }
        Integer tabBarItemBadgeTextColor = tabScreen.getTabBarItemBadgeTextColor();
        if (tabBarItemBadgeTextColor != null) {
            a10 = tabBarItemBadgeTextColor.intValue();
        } else {
            a10 = a(bh.b.f6737h);
        }
        e10.U(a10);
        Integer tabBarItemBadgeBackgroundColor = tabScreen.getTabBarItemBadgeBackgroundColor();
        if (tabBarItemBadgeBackgroundColor != null) {
            a11 = tabBarItemBadgeBackgroundColor.intValue();
        } else {
            a11 = a(f.a.f23298v);
        }
        e10.S(a11);
    }

    /* JADX WARN: Removed duplicated region for block: B:28:0x00b0  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void c(com.swmansion.rnscreens.gamma.tabs.l r12) {
        /*
            r11 = this;
            java.lang.String r0 = "tabsHost"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r12, r0)
            com.google.android.material.bottomnavigation.c r0 = r11.f19279b
            r1 = 0
            android.view.View r0 = r0.getChildAt(r1)
            java.lang.String r2 = "null cannot be cast to non-null type android.view.ViewGroup"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0, r2)
            android.view.ViewGroup r0 = (android.view.ViewGroup) r0
            kotlin.sequences.Sequence r0 = androidx.core.view.o0.a(r0)
            java.util.Iterator r0 = r0.iterator()
        L1b:
            boolean r2 = r0.hasNext()
            if (r2 == 0) goto Ldf
            java.lang.Object r2 = r0.next()
            android.view.View r2 = (android.view.View) r2
            int r3 = bh.f.P
            android.view.View r3 = r2.findViewById(r3)
            android.widget.TextView r3 = (android.widget.TextView) r3
            int r4 = bh.f.Q
            android.view.View r2 = r2.findViewById(r4)
            android.widget.TextView r2 = (android.widget.TextView) r2
            java.lang.String r4 = r12.getTabBarItemTitleFontStyle()
            java.lang.String r5 = "italic"
            boolean r4 = kotlin.jvm.internal.Intrinsics.areEqual(r4, r5)
            java.lang.String r5 = r12.getTabBarItemTitleFontWeight()
            java.lang.String r6 = "bold"
            boolean r5 = kotlin.jvm.internal.Intrinsics.areEqual(r5, r6)
            if (r5 == 0) goto L50
            r5 = 700(0x2bc, float:9.81E-43)
            goto L63
        L50:
            java.lang.String r5 = r12.getTabBarItemTitleFontWeight()
            if (r5 == 0) goto L61
            java.lang.Integer r5 = kotlin.text.StringsKt.toIntOrNull(r5)
            if (r5 == 0) goto L61
            int r5 = r5.intValue()
            goto L63
        L61:
            r5 = 400(0x190, float:5.6E-43)
        L63:
            com.facebook.react.views.text.ReactFontManager$Companion r6 = com.facebook.react.views.text.ReactFontManager.Companion
            com.facebook.react.views.text.ReactFontManager r6 = r6.getInstance()
            java.lang.String r7 = r12.getTabBarItemTitleFontFamily()
            if (r7 != 0) goto L71
            java.lang.String r7 = ""
        L71:
            androidx.appcompat.view.ContextThemeWrapper r8 = r11.f19278a
            android.content.res.AssetManager r8 = r8.getAssets()
            java.lang.String r9 = "getAssets(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r8, r9)
            android.graphics.Typeface r4 = r6.getTypeface(r7, r5, r4, r8)
            java.lang.Float r5 = r12.getTabBarItemTitleFontSize()
            r6 = 2
            r7 = 0
            r8 = 0
            if (r5 == 0) goto L9e
            float r9 = r5.floatValue()
            int r9 = (r9 > r8 ? 1 : (r9 == r8 ? 0 : -1))
            if (r9 <= 0) goto L92
            goto L93
        L92:
            r5 = r7
        L93:
            if (r5 == 0) goto L9e
            float r5 = r5.floatValue()
            float r5 = com.facebook.react.uimanager.PixelUtil.toPixelFromSP$default(r5, r8, r6, r7)
            goto Laa
        L9e:
            androidx.appcompat.view.ContextThemeWrapper r5 = r11.f19278a
            android.content.res.Resources r5 = r5.getResources()
            int r9 = bh.d.f6790i
            float r5 = r5.getDimension(r9)
        Laa:
            java.lang.Float r9 = r12.getTabBarItemTitleFontSizeActive()
            if (r9 == 0) goto Lc5
            float r10 = r9.floatValue()
            int r10 = (r10 > r8 ? 1 : (r10 == r8 ? 0 : -1))
            if (r10 <= 0) goto Lb9
            goto Lba
        Lb9:
            r9 = r7
        Lba:
            if (r9 == 0) goto Lc5
            float r9 = r9.floatValue()
            float r6 = com.facebook.react.uimanager.PixelUtil.toPixelFromSP$default(r9, r8, r6, r7)
            goto Ld1
        Lc5:
            androidx.appcompat.view.ContextThemeWrapper r6 = r11.f19278a
            android.content.res.Resources r6 = r6.getResources()
            int r7 = bh.d.f6790i
            float r6 = r6.getDimension(r7)
        Ld1:
            r2.setTextSize(r1, r5)
            r2.setTypeface(r4)
            r3.setTextSize(r1, r6)
            r3.setTypeface(r4)
            goto L1b
        Ldf:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.gamma.tabs.o.c(com.swmansion.rnscreens.gamma.tabs.l):void");
    }

    public final void d(MenuItem menuItem, a tabScreen) {
        Intrinsics.checkNotNullParameter(menuItem, "menuItem");
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        if (!Intrinsics.areEqual(menuItem.getTitle(), tabScreen.getTabTitle())) {
            menuItem.setTitle(tabScreen.getTabTitle());
        }
        if (!Intrinsics.areEqual(menuItem.getIcon(), tabScreen.getIcon())) {
            menuItem.setIcon(tabScreen.getIcon());
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:46:0x00d6, code lost:
        if (r0.equals("selected") != false) goto L30;
     */
    /* JADX WARN: Removed duplicated region for block: B:55:0x00f0  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x00f5  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x010a  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x010f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void e(com.swmansion.rnscreens.gamma.tabs.l r6) {
        /*
            Method dump skipped, instructions count: 296
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.swmansion.rnscreens.gamma.tabs.o.e(com.swmansion.rnscreens.gamma.tabs.l):void");
    }
}
