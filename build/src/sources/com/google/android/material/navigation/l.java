package com.google.android.material.navigation;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import androidx.appcompat.view.menu.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private final e f16045d;

    /* renamed from: e  reason: collision with root package name */
    private final h f16046e;

    /* renamed from: i  reason: collision with root package name */
    private final i f16047i;

    /* renamed from: o  reason: collision with root package name */
    private MenuInflater f16048o;

    /* renamed from: p  reason: collision with root package name */
    private c f16049p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements e.a {
        a() {
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            l.a(l.this);
            if (l.this.f16049p != null && !l.this.f16049p.a(menuItem)) {
                return true;
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        boolean a(MenuItem menuItem);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class d extends u2.a {
        public static final Parcelable.Creator<d> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        Bundle f16051i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public d createFromParcel(Parcel parcel) {
                return new d(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public d createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new d(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public d[] newArray(int i10) {
                return new d[i10];
            }
        }

        public d(Parcelable parcelable) {
            super(parcelable);
        }

        private void b(Parcel parcel, ClassLoader classLoader) {
            this.f16051i = parcel.readBundle(classLoader);
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeBundle(this.f16051i);
        }

        public d(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            b(parcel, classLoader == null ? getClass().getClassLoader() : classLoader);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:60:0x0248  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x024a  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x0258  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public l(android.content.Context r10, android.util.AttributeSet r11, int r12, int r13) {
        /*
            Method dump skipped, instructions count: 677
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.navigation.l.<init>(android.content.Context, android.util.AttributeSet, int, int):void");
    }

    static /* synthetic */ b a(l lVar) {
        lVar.getClass();
        return null;
    }

    private MenuInflater getMenuInflater() {
        if (this.f16048o == null) {
            this.f16048o = new androidx.appcompat.view.e(getContext());
        }
        return this.f16048o;
    }

    private void setMeasureBottomPaddingFromLabelBaseline(boolean z10) {
        this.f16046e.setMeasurePaddingFromLabelBaseline(z10);
    }

    protected abstract h c(Context context);

    public dh.a d(int i10) {
        return this.f16046e.j(i10);
    }

    public dh.a e(int i10) {
        return this.f16046e.k(i10);
    }

    public void f(int i10) {
        this.f16047i.m(true);
        getMenuInflater().inflate(i10, this.f16045d);
        this.f16047i.m(false);
        this.f16047i.g(true);
    }

    protected boolean g() {
        return false;
    }

    public int getActiveIndicatorLabelPadding() {
        return this.f16046e.getActiveIndicatorLabelPadding();
    }

    public int getCollapsedMaxItemCount() {
        return getMaxItemCount();
    }

    public int getHorizontalItemTextAppearanceActive() {
        return this.f16046e.getHorizontalItemTextAppearanceActive();
    }

    public int getHorizontalItemTextAppearanceInactive() {
        return this.f16046e.getHorizontalItemTextAppearanceInactive();
    }

    public int getIconLabelHorizontalSpacing() {
        return this.f16046e.getIconLabelHorizontalSpacing();
    }

    public ColorStateList getItemActiveIndicatorColor() {
        return this.f16046e.getItemActiveIndicatorColor();
    }

    public int getItemActiveIndicatorExpandedHeight() {
        return this.f16046e.getItemActiveIndicatorExpandedHeight();
    }

    public int getItemActiveIndicatorExpandedMarginHorizontal() {
        return this.f16046e.getItemActiveIndicatorExpandedMarginHorizontal();
    }

    public int getItemActiveIndicatorExpandedWidth() {
        return this.f16046e.getItemActiveIndicatorExpandedWidth();
    }

    public int getItemActiveIndicatorHeight() {
        return this.f16046e.getItemActiveIndicatorHeight();
    }

    public int getItemActiveIndicatorMarginHorizontal() {
        return this.f16046e.getItemActiveIndicatorMarginHorizontal();
    }

    public th.l getItemActiveIndicatorShapeAppearance() {
        return this.f16046e.getItemActiveIndicatorShapeAppearance();
    }

    public int getItemActiveIndicatorWidth() {
        return this.f16046e.getItemActiveIndicatorWidth();
    }

    public Drawable getItemBackground() {
        return this.f16046e.getItemBackground();
    }

    @Deprecated
    public int getItemBackgroundResource() {
        return this.f16046e.getItemBackgroundRes();
    }

    public int getItemGravity() {
        return this.f16046e.getItemGravity();
    }

    public int getItemIconGravity() {
        return this.f16046e.getItemIconGravity();
    }

    public int getItemIconSize() {
        return this.f16046e.getItemIconSize();
    }

    public ColorStateList getItemIconTintList() {
        return this.f16046e.getIconTintList();
    }

    public int getItemPaddingBottom() {
        return this.f16046e.getItemPaddingBottom();
    }

    public int getItemPaddingTop() {
        return this.f16046e.getItemPaddingTop();
    }

    public ColorStateList getItemRippleColor() {
        return this.f16046e.getItemRippleColor();
    }

    public int getItemTextAppearanceActive() {
        return this.f16046e.getItemTextAppearanceActive();
    }

    public int getItemTextAppearanceInactive() {
        return this.f16046e.getItemTextAppearanceInactive();
    }

    public ColorStateList getItemTextColor() {
        return this.f16046e.getItemTextColor();
    }

    public int getLabelVisibilityMode() {
        return this.f16046e.getLabelVisibilityMode();
    }

    public abstract int getMaxItemCount();

    @NonNull
    public Menu getMenu() {
        return this.f16045d;
    }

    @NonNull
    public androidx.appcompat.view.menu.k getMenuView() {
        return this.f16046e;
    }

    @NonNull
    public ViewGroup getMenuViewGroup() {
        return this.f16046e;
    }

    @NonNull
    public i getPresenter() {
        return this.f16047i;
    }

    public boolean getScaleLabelTextWithFont() {
        return this.f16046e.getScaleLabelTextWithFont();
    }

    public int getSelectedItemId() {
        return this.f16046e.getSelectedItemId();
    }

    public void h(int i10, int i11, int i12, int i13) {
        this.f16046e.r(i10, i11, i12, i13);
    }

    public boolean i() {
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        th.i.e(this);
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof d)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        d dVar = (d) parcelable;
        super.onRestoreInstanceState(dVar.a());
        this.f16045d.T(dVar.f16051i);
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        d dVar = new d(super.onSaveInstanceState());
        Bundle bundle = new Bundle();
        dVar.f16051i = bundle;
        this.f16045d.V(bundle);
        return dVar;
    }

    public void setActiveIndicatorLabelPadding(int i10) {
        this.f16046e.setActiveIndicatorLabelPadding(i10);
    }

    @Override // android.view.View
    public void setElevation(float f10) {
        super.setElevation(f10);
        th.i.d(this, f10);
    }

    public void setHorizontalItemTextAppearanceActive(int i10) {
        this.f16046e.setHorizontalItemTextAppearanceActive(i10);
    }

    public void setHorizontalItemTextAppearanceInactive(int i10) {
        this.f16046e.setHorizontalItemTextAppearanceInactive(i10);
    }

    public void setIconLabelHorizontalSpacing(int i10) {
        this.f16046e.setIconLabelHorizontalSpacing(i10);
    }

    public void setItemActiveIndicatorColor(ColorStateList colorStateList) {
        this.f16046e.setItemActiveIndicatorColor(colorStateList);
    }

    public void setItemActiveIndicatorEnabled(boolean z10) {
        this.f16046e.setItemActiveIndicatorEnabled(z10);
    }

    public void setItemActiveIndicatorExpandedHeight(int i10) {
        this.f16046e.setItemActiveIndicatorExpandedHeight(i10);
    }

    public void setItemActiveIndicatorExpandedMarginHorizontal(int i10) {
        this.f16046e.setItemActiveIndicatorExpandedMarginHorizontal(i10);
    }

    public void setItemActiveIndicatorExpandedWidth(int i10) {
        this.f16046e.setItemActiveIndicatorExpandedWidth(i10);
    }

    public void setItemActiveIndicatorHeight(int i10) {
        this.f16046e.setItemActiveIndicatorHeight(i10);
    }

    public void setItemActiveIndicatorMarginHorizontal(int i10) {
        this.f16046e.setItemActiveIndicatorMarginHorizontal(i10);
    }

    public void setItemActiveIndicatorShapeAppearance(th.l lVar) {
        this.f16046e.setItemActiveIndicatorShapeAppearance(lVar);
    }

    public void setItemActiveIndicatorWidth(int i10) {
        this.f16046e.setItemActiveIndicatorWidth(i10);
    }

    public void setItemBackground(Drawable drawable) {
        this.f16046e.setItemBackground(drawable);
    }

    public void setItemBackgroundResource(int i10) {
        this.f16046e.setItemBackgroundRes(i10);
    }

    public void setItemGravity(int i10) {
        if (this.f16046e.getItemGravity() != i10) {
            this.f16046e.setItemGravity(i10);
            this.f16047i.g(false);
        }
    }

    public void setItemIconGravity(int i10) {
        if (this.f16046e.getItemIconGravity() != i10) {
            this.f16046e.setItemIconGravity(i10);
            this.f16047i.g(false);
        }
    }

    public void setItemIconSize(int i10) {
        this.f16046e.setItemIconSize(i10);
    }

    public void setItemIconSizeRes(int i10) {
        setItemIconSize(getResources().getDimensionPixelSize(i10));
    }

    public void setItemIconTintList(ColorStateList colorStateList) {
        this.f16046e.setIconTintList(colorStateList);
    }

    public void setItemPaddingBottom(int i10) {
        this.f16046e.setItemPaddingBottom(i10);
    }

    public void setItemPaddingTop(int i10) {
        this.f16046e.setItemPaddingTop(i10);
    }

    public void setItemRippleColor(ColorStateList colorStateList) {
        this.f16046e.setItemRippleColor(colorStateList);
    }

    public void setItemTextAppearanceActive(int i10) {
        this.f16046e.setItemTextAppearanceActive(i10);
    }

    public void setItemTextAppearanceActiveBoldEnabled(boolean z10) {
        this.f16046e.setItemTextAppearanceActiveBoldEnabled(z10);
    }

    public void setItemTextAppearanceInactive(int i10) {
        this.f16046e.setItemTextAppearanceInactive(i10);
    }

    public void setItemTextColor(ColorStateList colorStateList) {
        this.f16046e.setItemTextColor(colorStateList);
    }

    public void setLabelFontScalingEnabled(boolean z10) {
        this.f16046e.setLabelFontScalingEnabled(z10);
    }

    public void setLabelMaxLines(int i10) {
        this.f16046e.setLabelMaxLines(i10);
    }

    public void setLabelVisibilityMode(int i10) {
        if (this.f16046e.getLabelVisibilityMode() != i10) {
            this.f16046e.setLabelVisibilityMode(i10);
            this.f16047i.g(false);
        }
    }

    public void setOnItemReselectedListener(b bVar) {
    }

    public void setOnItemSelectedListener(c cVar) {
        this.f16049p = cVar;
    }

    public void setSelectedItemId(int i10) {
        MenuItem findItem = this.f16045d.findItem(i10);
        if (findItem != null) {
            boolean P = this.f16045d.P(findItem, this.f16047i, 0);
            if (findItem.isCheckable()) {
                if (!P || findItem.isChecked()) {
                    this.f16046e.setCheckedItem(findItem);
                }
            }
        }
    }
}
