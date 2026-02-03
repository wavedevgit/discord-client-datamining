package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f14136a;

    /* renamed from: b  reason: collision with root package name */
    private int f14137b;

    /* renamed from: c  reason: collision with root package name */
    private int f14138c;

    /* renamed from: d  reason: collision with root package name */
    private int f14139d;

    /* renamed from: e  reason: collision with root package name */
    private int f14140e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f14141f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f14142g = true;

    public f(View view) {
        this.f14136a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f14136a;
        h0.Y(view, this.f14139d - (view.getTop() - this.f14137b));
        View view2 = this.f14136a;
        h0.X(view2, this.f14140e - (view2.getLeft() - this.f14138c));
    }

    public int b() {
        return this.f14139d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f14137b = this.f14136a.getTop();
        this.f14138c = this.f14136a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f14142g && this.f14140e != i10) {
            this.f14140e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f14141f && this.f14139d != i10) {
            this.f14139d = i10;
            a();
            return true;
        }
        return false;
    }
}
