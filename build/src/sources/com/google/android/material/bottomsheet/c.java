package com.google.android.material.bottomsheet;

import android.view.View;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.x0;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c extends x0.b {

    /* renamed from: d  reason: collision with root package name */
    private final View f15662d;

    /* renamed from: e  reason: collision with root package name */
    private int f15663e;

    /* renamed from: i  reason: collision with root package name */
    private int f15664i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f15665o;

    public c(View view) {
        super(0);
        this.f15665o = new int[2];
        this.f15662d = view;
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(x0 x0Var) {
        this.f15662d.setTranslationY(0.0f);
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 x0Var) {
        this.f15662d.getLocationOnScreen(this.f15665o);
        this.f15663e = this.f15665o[1];
    }

    @Override // androidx.core.view.x0.b
    public WindowInsetsCompat onProgress(WindowInsetsCompat windowInsetsCompat, List list) {
        Iterator it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                break;
            }
            x0 x0Var = (x0) it.next();
            if ((x0Var.c() & WindowInsetsCompat.p.c()) != 0) {
                this.f15662d.setTranslationY(zg.a.c(this.f15664i, 0, x0Var.b()));
                break;
            }
        }
        return windowInsetsCompat;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 x0Var, x0.a aVar) {
        this.f15662d.getLocationOnScreen(this.f15665o);
        int i10 = this.f15663e - this.f15665o[1];
        this.f15664i = i10;
        this.f15662d.setTranslationY(i10);
        return aVar;
    }
}
