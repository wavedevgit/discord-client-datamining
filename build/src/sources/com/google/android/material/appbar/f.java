package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f14510a;

    /* renamed from: b  reason: collision with root package name */
    private int f14511b;

    /* renamed from: c  reason: collision with root package name */
    private int f14512c;

    /* renamed from: d  reason: collision with root package name */
    private int f14513d;

    /* renamed from: e  reason: collision with root package name */
    private int f14514e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f14515f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f14516g = true;

    public f(View view) {
        this.f14510a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f14510a;
        h0.Y(view, this.f14513d - (view.getTop() - this.f14511b));
        View view2 = this.f14510a;
        h0.X(view2, this.f14514e - (view2.getLeft() - this.f14512c));
    }

    public int b() {
        return this.f14513d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f14511b = this.f14510a.getTop();
        this.f14512c = this.f14510a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f14516g && this.f14514e != i10) {
            this.f14514e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f14515f && this.f14513d != i10) {
            this.f14513d = i10;
            a();
            return true;
        }
        return false;
    }
}
