package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f15227a;

    /* renamed from: b  reason: collision with root package name */
    private int f15228b;

    /* renamed from: c  reason: collision with root package name */
    private int f15229c;

    /* renamed from: d  reason: collision with root package name */
    private int f15230d;

    /* renamed from: e  reason: collision with root package name */
    private int f15231e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f15232f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f15233g = true;

    public f(View view) {
        this.f15227a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f15227a;
        i0.V(view, this.f15230d - (view.getTop() - this.f15228b));
        View view2 = this.f15227a;
        i0.U(view2, this.f15231e - (view2.getLeft() - this.f15229c));
    }

    public int b() {
        return this.f15230d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f15228b = this.f15227a.getTop();
        this.f15229c = this.f15227a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f15233g && this.f15231e != i10) {
            this.f15231e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f15232f && this.f15230d != i10) {
            this.f15230d = i10;
            a();
            return true;
        }
        return false;
    }
}
