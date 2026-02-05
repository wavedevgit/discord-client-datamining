package com.shopify.reactnative.flash_list;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f17855a;

    /* renamed from: b  reason: collision with root package name */
    private int f17856b;

    /* renamed from: c  reason: collision with root package name */
    private int f17857c;

    /* renamed from: d  reason: collision with root package name */
    private int f17858d;

    /* renamed from: e  reason: collision with root package name */
    private int f17859e;

    /* renamed from: f  reason: collision with root package name */
    private int f17860f;

    /* renamed from: g  reason: collision with root package name */
    private int f17861g;

    /* renamed from: h  reason: collision with root package name */
    private int f17862h;

    /* renamed from: i  reason: collision with root package name */
    private int f17863i;

    /* renamed from: j  reason: collision with root package name */
    private int f17864j;

    private final boolean g(d dVar) {
        int i10 = this.f17856b - this.f17857c;
        if (!this.f17855a) {
            if ((dVar.getTop() >= i10 - this.f17859e || dVar.getBottom() >= i10 - this.f17859e) && (dVar.getTop() <= this.f17858d + i10 || dVar.getBottom() <= i10 + this.f17858d)) {
                return true;
            }
            return false;
        } else if ((dVar.getLeft() >= i10 - this.f17859e || dVar.getRight() >= i10 - this.f17859e) && (dVar.getLeft() <= this.f17858d + i10 || dVar.getRight() <= i10 + this.f17858d)) {
            return true;
        } else {
            return false;
        }
    }

    public final void a(d[] sortedItems) {
        boolean z10;
        int max;
        int bottom;
        int bottom2;
        Intrinsics.checkNotNullParameter(sortedItems, "sortedItems");
        this.f17862h = 0;
        int length = sortedItems.length - 1;
        int i10 = Integer.MAX_VALUE;
        int i11 = 0;
        int i12 = 0;
        int i13 = 0;
        while (i11 < length) {
            d dVar = sortedItems[i11];
            i11++;
            d dVar2 = sortedItems[i11];
            if (dVar2.getIndex() == dVar.getIndex() + 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (g(dVar) || g(dVar2)) {
                if (!this.f17855a) {
                    i12 = Math.max(i13, dVar.getBottom());
                    i10 = Math.min(i10, dVar.getTop());
                    if (z10) {
                        if (dVar.getLeft() < dVar2.getLeft()) {
                            if (dVar.getRight() != dVar2.getLeft()) {
                                dVar2.setRight(dVar.getRight() + dVar2.getWidth());
                                dVar2.setLeft(dVar.getRight());
                            }
                            if (dVar.getTop() != dVar2.getTop()) {
                                dVar2.setBottom(dVar.getTop() + dVar2.getHeight());
                                dVar2.setTop(dVar.getTop());
                            }
                        } else {
                            dVar2.setBottom(dVar2.getHeight() + i12);
                            dVar2.setTop(i12);
                        }
                    }
                    if (g(dVar2)) {
                        max = Math.max(i12, dVar2.getBottom());
                        int i14 = max;
                        i13 = i12;
                        i12 = i14;
                    }
                    i13 = i12;
                } else {
                    i12 = Math.max(i13, dVar.getRight());
                    i10 = Math.min(i10, dVar.getLeft());
                    if (z10) {
                        if (dVar.getTop() < dVar2.getTop()) {
                            if (dVar.getBottom() != dVar2.getTop()) {
                                dVar2.setBottom(dVar.getBottom() + dVar2.getHeight());
                                dVar2.setTop(dVar.getBottom());
                            }
                            if (dVar.getLeft() != dVar2.getLeft()) {
                                dVar2.setRight(dVar.getLeft() + dVar2.getWidth());
                                dVar2.setLeft(dVar.getLeft());
                            }
                        } else {
                            dVar2.setRight(dVar2.getWidth() + i12);
                            dVar2.setLeft(i12);
                        }
                    }
                    if (g(dVar2)) {
                        max = Math.max(i12, dVar2.getRight());
                        int i142 = max;
                        i13 = i12;
                        i12 = i142;
                    }
                    i13 = i12;
                }
            }
            int i15 = this.f17862h;
            if (this.f17855a) {
                bottom = dVar.getRight();
            } else {
                bottom = dVar.getBottom();
            }
            int max2 = Math.max(i15, bottom);
            this.f17862h = max2;
            if (this.f17855a) {
                bottom2 = dVar2.getRight();
            } else {
                bottom2 = dVar2.getBottom();
            }
            this.f17862h = Math.max(max2, bottom2);
        }
        this.f17863i = i12;
        this.f17864j = i10;
    }

    public final int b(int i10, int i11, int i12) {
        int i13 = i10 - this.f17857c;
        int i14 = (this.f17864j - i13) - i11;
        this.f17860f = i14;
        int i15 = (((i13 + this.f17858d) - this.f17859e) - this.f17863i) - i12;
        this.f17861g = i15;
        return Math.max(i14, i15);
    }

    public final int c() {
        return this.f17861g;
    }

    public final int d() {
        return this.f17860f;
    }

    public final boolean e() {
        return this.f17855a;
    }

    public final int f() {
        return this.f17862h;
    }

    public final void h(boolean z10) {
        this.f17855a = z10;
    }

    public final void i(int i10) {
        this.f17862h = i10;
    }

    public final void j(int i10) {
        this.f17857c = i10;
    }

    public final void k(int i10) {
        this.f17859e = i10;
    }

    public final void l(int i10) {
        this.f17856b = i10;
    }

    public final void m(int i10) {
        this.f17858d = i10;
    }
}
