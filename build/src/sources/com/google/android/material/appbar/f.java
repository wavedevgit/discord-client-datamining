package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f15168a;

    /* renamed from: b  reason: collision with root package name */
    private int f15169b;

    /* renamed from: c  reason: collision with root package name */
    private int f15170c;

    /* renamed from: d  reason: collision with root package name */
    private int f15171d;

    /* renamed from: e  reason: collision with root package name */
    private int f15172e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f15173f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f15174g = true;

    public f(View view) {
        this.f15168a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f15168a;
        h0.Y(view, this.f15171d - (view.getTop() - this.f15169b));
        View view2 = this.f15168a;
        h0.X(view2, this.f15172e - (view2.getLeft() - this.f15170c));
    }

    public int b() {
        return this.f15171d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f15169b = this.f15168a.getTop();
        this.f15170c = this.f15168a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f15174g && this.f15172e != i10) {
            this.f15172e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f15173f && this.f15171d != i10) {
            this.f15171d = i10;
            a();
            return true;
        }
        return false;
    }
}
