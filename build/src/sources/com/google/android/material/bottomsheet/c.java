package com.google.android.material.bottomsheet;

import android.view.View;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.x0;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class c extends x0.b {

    /* renamed from: d  reason: collision with root package name */
    private final View f14773d;

    /* renamed from: e  reason: collision with root package name */
    private int f14774e;

    /* renamed from: i  reason: collision with root package name */
    private int f14775i;

    /* renamed from: o  reason: collision with root package name */
    private final int[] f14776o;

    public c(View view) {
        super(0);
        this.f14776o = new int[2];
        this.f14773d = view;
    }

    @Override // androidx.core.view.x0.b
    public void onEnd(x0 x0Var) {
        this.f14773d.setTranslationY(0.0f);
    }

    @Override // androidx.core.view.x0.b
    public void onPrepare(x0 x0Var) {
        this.f14773d.getLocationOnScreen(this.f14776o);
        this.f14774e = this.f14776o[1];
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
                this.f14773d.setTranslationY(ch.a.c(this.f14775i, 0, x0Var.b()));
                break;
            }
        }
        return windowInsetsCompat;
    }

    @Override // androidx.core.view.x0.b
    public x0.a onStart(x0 x0Var, x0.a aVar) {
        this.f14773d.getLocationOnScreen(this.f14776o);
        int i10 = this.f14774e - this.f14776o[1];
        this.f14775i = i10;
        this.f14773d.setTranslationY(i10);
        return aVar;
    }
}
