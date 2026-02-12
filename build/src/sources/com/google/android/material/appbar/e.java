package com.google.android.material.appbar;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    private f f15224d;

    /* renamed from: e  reason: collision with root package name */
    private int f15225e;

    /* renamed from: i  reason: collision with root package name */
    private int f15226i;

    public e() {
        this.f15225e = 0;
        this.f15226i = 0;
    }

    public int I() {
        f fVar = this.f15224d;
        if (fVar != null) {
            return fVar.b();
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void J(CoordinatorLayout coordinatorLayout, View view, int i10) {
        coordinatorLayout.I(view, i10);
    }

    public boolean K(int i10) {
        f fVar = this.f15224d;
        if (fVar != null) {
            return fVar.e(i10);
        }
        this.f15225e = i10;
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        J(coordinatorLayout, view, i10);
        if (this.f15224d == null) {
            this.f15224d = new f(view);
        }
        this.f15224d.c();
        this.f15224d.a();
        int i11 = this.f15225e;
        if (i11 != 0) {
            this.f15224d.e(i11);
            this.f15225e = 0;
        }
        int i12 = this.f15226i;
        if (i12 != 0) {
            this.f15224d.d(i12);
            this.f15226i = 0;
            return true;
        }
        return true;
    }

    public e(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15225e = 0;
        this.f15226i = 0;
    }
}
