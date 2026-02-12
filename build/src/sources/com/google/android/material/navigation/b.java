package com.google.android.material.navigation;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends FrameLayout implements g {

    /* renamed from: d  reason: collision with root package name */
    private boolean f15956d;

    /* renamed from: e  reason: collision with root package name */
    boolean f15957e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f15958i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context) {
        super(context);
        LayoutInflater.from(context).inflate(bh.h.f6880h, (ViewGroup) this, true);
        a();
    }

    public void a() {
        int i10;
        if (this.f15958i && (this.f15956d || !this.f15957e)) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        setVisibility(i10);
    }

    @Override // androidx.appcompat.view.menu.k.a
    public void c(androidx.appcompat.view.menu.g gVar, int i10) {
        a();
    }

    @Override // androidx.appcompat.view.menu.k.a
    public boolean d() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.k.a
    public androidx.appcompat.view.menu.g getItemData() {
        return null;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
    }

    public void setCheckable(boolean z10) {
    }

    public void setChecked(boolean z10) {
    }

    public void setDividersEnabled(boolean z10) {
        this.f15958i = z10;
        a();
    }

    @Override // android.view.View
    public void setEnabled(boolean z10) {
    }

    @Override // com.google.android.material.navigation.g
    public void setExpanded(boolean z10) {
        this.f15956d = z10;
        a();
    }

    public void setIcon(Drawable drawable) {
    }

    @Override // com.google.android.material.navigation.g
    public void setOnlyShowWhenExpanded(boolean z10) {
        this.f15957e = z10;
        a();
    }

    public void setTitle(CharSequence charSequence) {
    }
}
