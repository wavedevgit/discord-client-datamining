package com.google.android.material.navigation;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k extends FrameLayout implements g {

    /* renamed from: d  reason: collision with root package name */
    private final TextView f16039d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f16040e;

    /* renamed from: i  reason: collision with root package name */
    boolean f16041i;

    /* renamed from: o  reason: collision with root package name */
    private androidx.appcompat.view.menu.g f16042o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f16043p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(Context context) {
        super(context);
        LayoutInflater.from(context).inflate(bh.h.f6881i, (ViewGroup) this, true);
        this.f16039d = (TextView) findViewById(bh.f.R);
    }

    private void a() {
        int i10;
        androidx.appcompat.view.menu.g gVar = this.f16042o;
        if (gVar != null) {
            if (gVar.isVisible() && (this.f16040e || !this.f16041i)) {
                i10 = 0;
            } else {
                i10 = 8;
            }
            setVisibility(i10);
        }
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(androidx.appcompat.view.menu.g gVar, int i10) {
        this.f16042o = gVar;
        gVar.setCheckable(false);
        this.f16039d.setText(gVar.getTitle());
        a();
    }

    @Override // androidx.appcompat.view.menu.k.a
    public boolean d() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public androidx.appcompat.view.menu.g getItemData() {
        return this.f16042o;
    }

    public void setCheckable(boolean z10) {
    }

    public void setChecked(boolean z10) {
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
    }

    @Override // com.google.android.material.navigation.g
    public void setExpanded(boolean z10) {
        this.f16040e = z10;
        a();
    }

    public void setIcon(Drawable drawable) {
    }

    @Override // com.google.android.material.navigation.g
    public void setOnlyShowWhenExpanded(boolean z10) {
        this.f16041i = z10;
        a();
    }

    public void setTextAppearance(int i10) {
        androidx.core.widget.j.q(this.f16039d, i10);
        ColorStateList colorStateList = this.f16043p;
        if (colorStateList != null) {
            this.f16039d.setTextColor(colorStateList);
        }
    }

    public void setTextColor(ColorStateList colorStateList) {
        this.f16043p = colorStateList;
        if (colorStateList != null) {
            this.f16039d.setTextColor(colorStateList);
        }
    }

    public void setTitle(CharSequence charSequence) {
    }
}
