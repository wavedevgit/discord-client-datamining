package com.google.android.material.bottomsheet;

import android.view.View;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.y0;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c extends y0.b {

    /* renamed from: d  reason: collision with root package name */
    private final View f15377d;

    /* renamed from: e  reason: collision with root package name */
    private int f15378e;

    /* renamed from: i  reason: collision with root package name */
    private int f15379i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f15380o;

    public c(View view) {
        super(0);
        this.f15380o = new int[2];
        this.f15377d = view;
    }

    @Override // androidx.core.view.y0.b
    public void onEnd(y0 y0Var) {
        this.f15377d.setTranslationY(0.0f);
    }

    @Override // androidx.core.view.y0.b
    public void onPrepare(y0 y0Var) {
        this.f15377d.getLocationOnScreen(this.f15380o);
        this.f15378e = this.f15380o[1];
    }

    @Override // androidx.core.view.y0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat windowInsetsCompat, List list) {
        Iterator it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            y0 y0Var = (y0) it.next();
            if ((y0Var.c() & WindowInsetsCompat.p.c()) != 0) {
                this.f15377d.setTranslationY(ch.a.c(this.f15379i, 0, y0Var.b()));
                break;
            }
        }
        return windowInsetsCompat;
    }

    @Override // androidx.core.view.y0.b
    public y0.a onStart(y0 y0Var, y0.a aVar) {
        this.f15377d.getLocationOnScreen(this.f15380o);
        int i10 = this.f15378e - this.f15380o[1];
        this.f15379i = i10;
        this.f15377d.setTranslationY(i10);
        return aVar;
    }
}
