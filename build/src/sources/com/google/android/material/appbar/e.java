package com.google.android.material.appbar;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e extends CoordinatorLayout.c {

    /* renamed from: d  reason: collision with root package name */
    private f f14647d;

    /* renamed from: e  reason: collision with root package name */
    private int f14648e;

    /* renamed from: i  reason: collision with root package name */
    private int f14649i;

    public e() {
        this.f14648e = 0;
        this.f14649i = 0;
    }

    public int I() {
        f fVar = this.f14647d;
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
        f fVar = this.f14647d;
        if (fVar != null) {
            return fVar.e(i10);
        }
        this.f14648e = i10;
        return false;
    }

    @Override // androidx.coordinatorlayout.widget.CoordinatorLayout.c
    public boolean p(CoordinatorLayout coordinatorLayout, View view, int i10) {
        J(coordinatorLayout, view, i10);
        if (this.f14647d == null) {
            this.f14647d = new f(view);
        }
        this.f14647d.c();
        this.f14647d.a();
        int i11 = this.f14648e;
        if (i11 != 0) {
            this.f14647d.e(i11);
            this.f14648e = 0;
        }
        int i12 = this.f14649i;
        if (i12 != 0) {
            this.f14647d.d(i12);
            this.f14649i = 0;
            return true;
        }
        return true;
    }

    public e(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14648e = 0;
        this.f14649i = 0;
    }
}
