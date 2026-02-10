package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.i0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f15226a;

    /* renamed from: b  reason: collision with root package name */
    private int f15227b;

    /* renamed from: c  reason: collision with root package name */
    private int f15228c;

    /* renamed from: d  reason: collision with root package name */
    private int f15229d;

    /* renamed from: e  reason: collision with root package name */
    private int f15230e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f15231f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f15232g = true;

    public f(View view) {
        this.f15226a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f15226a;
        i0.V(view, this.f15229d - (view.getTop() - this.f15227b));
        View view2 = this.f15226a;
        i0.U(view2, this.f15230e - (view2.getLeft() - this.f15228c));
    }

    public int b() {
        return this.f15229d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f15227b = this.f15226a.getTop();
        this.f15228c = this.f15226a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f15232g && this.f15230e != i10) {
            this.f15230e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f15231f && this.f15229d != i10) {
            this.f15229d = i10;
            a();
            return true;
        }
        return false;
    }
}
