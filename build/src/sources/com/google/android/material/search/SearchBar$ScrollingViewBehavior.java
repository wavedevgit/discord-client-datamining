package com.google.android.material.search;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import androidx.annotation.NonNull;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.appbar.AppBarLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SearchBar$ScrollingViewBehavior extends AppBarLayout.ScrollingViewBehavior {

    /* renamed from: s  reason: collision with root package name */
    private boolean f16309s;

    public SearchBar$ScrollingViewBehavior() {
        this.f16309s = false;
    }

    private void Y(AppBarLayout appBarLayout) {
        appBarLayout.setBackgroundColor(0);
        appBarLayout.setTargetElevation(0.0f);
    }

    @Override // com.google.android.material.appbar.d
    protected boolean T() {
        return true;
    }

    @Override // com.google.android.material.appbar.AppBarLayout.ScrollingViewBehavior, androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean l(CoordinatorLayout coordinatorLayout, View view, View view2) {
        boolean l10 = super.l(coordinatorLayout, view, view2);
        if (!this.f16309s && (view2 instanceof AppBarLayout)) {
            this.f16309s = true;
            Y((AppBarLayout) view2);
        }
        return l10;
    }

    public SearchBar$ScrollingViewBehavior(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f16309s = false;
    }
}
