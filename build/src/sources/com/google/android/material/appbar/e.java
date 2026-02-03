package com.google.android.material.appbar;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    private f f15165d;

    /* renamed from: e  reason: collision with root package name */
    private int f15166e;

    /* renamed from: i  reason: collision with root package name */
    private int f15167i;

    public e() {
        this.f15166e = 0;
        this.f15167i = 0;
    }

    public int I() {
        f fVar = this.f15165d;
        if (fVar != null) {
            return fVar.b();
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void J(CoordinatorLayout coordinatorLayout, View view, int i10) {
        coordinatorLayout.E(view, i10);
    }

    public boolean K(int i10) {
        f fVar = this.f15165d;
        if (fVar != null) {
            return fVar.e(i10);
        }
        this.f15166e = i10;
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        J(coordinatorLayout, view, i10);
        if (this.f15165d == null) {
            this.f15165d = new f(view);
        }
        this.f15165d.c();
        this.f15165d.a();
        int i11 = this.f15166e;
        if (i11 != 0) {
            this.f15165d.e(i11);
            this.f15166e = 0;
        }
        int i12 = this.f15167i;
        if (i12 != 0) {
            this.f15165d.d(i12);
            this.f15167i = 0;
            return true;
        }
        return true;
    }

    public e(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15166e = 0;
        this.f15167i = 0;
    }
}
