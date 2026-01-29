package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f15539a;

    /* renamed from: b  reason: collision with root package name */
    private int f15540b;

    /* renamed from: c  reason: collision with root package name */
    private int f15541c;

    /* renamed from: d  reason: collision with root package name */
    private int f15542d;

    /* renamed from: e  reason: collision with root package name */
    private int f15543e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f15544f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f15545g = true;

    public f(View view) {
        this.f15539a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f15539a;
        h0.Y(view, this.f15542d - (view.getTop() - this.f15540b));
        View view2 = this.f15539a;
        h0.X(view2, this.f15543e - (view2.getLeft() - this.f15541c));
    }

    public int b() {
        return this.f15542d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f15540b = this.f15539a.getTop();
        this.f15541c = this.f15539a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f15545g && this.f15543e != i10) {
            this.f15543e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f15544f && this.f15542d != i10) {
            this.f15542d = i10;
            a();
            return true;
        }
        return false;
    }
}
