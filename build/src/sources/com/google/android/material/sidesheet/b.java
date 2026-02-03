package com.google.android.material.sidesheet;

import android.view.View;
import android.view.ViewGroup;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: a  reason: collision with root package name */
    final SideSheetBehavior f14930a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(SideSheetBehavior sideSheetBehavior) {
        this.f14930a = sideSheetBehavior;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int a(ViewGroup.MarginLayoutParams marginLayoutParams) {
        return marginLayoutParams.rightMargin;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public float b(int i10) {
        float e10 = e();
        return (e10 - i10) / (e10 - d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int c(ViewGroup.MarginLayoutParams marginLayoutParams) {
        return marginLayoutParams.rightMargin;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int d() {
        return Math.max(0, (e() - this.f14930a.d0()) - this.f14930a.k0());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int e() {
        return this.f14930a.n0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int f() {
        return this.f14930a.n0();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int g() {
        return d();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int h(View view) {
        return view.getLeft() - this.f14930a.k0();
    }

    @Override // com.google.android.material.sidesheet.c
    public int i(CoordinatorLayout coordinatorLayout) {
        return coordinatorLayout.getRight();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public int j() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public boolean k(float f10) {
        return f10 < 0.0f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public boolean l(View view) {
        if (view.getLeft() > (e() + d()) / 2) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public boolean m(float f10, float f11) {
        if (d.a(f10, f11) && Math.abs(f10) > this.f14930a.o0()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public boolean n(View view, float f10) {
        if (Math.abs(view.getRight() + (f10 * this.f14930a.i0())) > this.f14930a.j0()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public void o(ViewGroup.MarginLayoutParams marginLayoutParams, int i10) {
        marginLayoutParams.rightMargin = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.sidesheet.c
    public void p(ViewGroup.MarginLayoutParams marginLayoutParams, int i10, int i11) {
        int n02 = this.f14930a.n0();
        if (i10 <= n02) {
            marginLayoutParams.rightMargin = n02 - i10;
        }
    }
}
