package com.google.android.material.appbar;

import android.view.View;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final View f14530a;

    /* renamed from: b  reason: collision with root package name */
    private int f14531b;

    /* renamed from: c  reason: collision with root package name */
    private int f14532c;

    /* renamed from: d  reason: collision with root package name */
    private int f14533d;

    /* renamed from: e  reason: collision with root package name */
    private int f14534e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f14535f = true;

    /* renamed from: g  reason: collision with root package name */
    private boolean f14536g = true;

    public f(View view) {
        this.f14530a = view;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a() {
        View view = this.f14530a;
        h0.Y(view, this.f14533d - (view.getTop() - this.f14531b));
        View view2 = this.f14530a;
        h0.X(view2, this.f14534e - (view2.getLeft() - this.f14532c));
    }

    public int b() {
        return this.f14533d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        this.f14531b = this.f14530a.getTop();
        this.f14532c = this.f14530a.getLeft();
    }

    public boolean d(int i10) {
        if (this.f14536g && this.f14534e != i10) {
            this.f14534e = i10;
            a();
            return true;
        }
        return false;
    }

    public boolean e(int i10) {
        if (this.f14535f && this.f14533d != i10) {
            this.f14533d = i10;
            a();
            return true;
        }
        return false;
    }
}
