package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f14650a;

    /* renamed from: b  reason: collision with root package name */
    private int f14651b;

    /* renamed from: c  reason: collision with root package name */
    private int f14652c;

    /* renamed from: d  reason: collision with root package name */
    private int f14653d;

    /* renamed from: e  reason: collision with root package name */
    private int f14654e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f14655f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f14656g = true;

    public f(View view) {
        this.f14650a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f14650a;
        h0.Y(view, this.f14653d - (view.getTop() - this.f14651b));
        View view2 = this.f14650a;
        h0.X(view2, this.f14654e - (view2.getLeft() - this.f14652c));
    }

    public int b() {
        return this.f14653d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f14651b = this.f14650a.getTop();
        this.f14652c = this.f14650a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f14656g && this.f14654e != i10) {
            this.f14654e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f14655f && this.f14653d != i10) {
            this.f14653d = i10;
            a();
            return true;
        }
        return false;
    }
}
