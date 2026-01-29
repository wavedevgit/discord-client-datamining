package com.shopify.reactnative.flash_list;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f18834a;

    /* renamed from: b  reason: collision with root package name */
    private int f18835b;

    /* renamed from: c  reason: collision with root package name */
    private int f18836c;

    /* renamed from: d  reason: collision with root package name */
    private int f18837d;

    /* renamed from: e  reason: collision with root package name */
    private int f18838e;

    /* renamed from: f  reason: collision with root package name */
    private int f18839f;

    /* renamed from: g  reason: collision with root package name */
    private int f18840g;

    /* renamed from: h  reason: collision with root package name */
    private int f18841h;

    /* renamed from: i  reason: collision with root package name */
    private int f18842i;

    /* renamed from: j  reason: collision with root package name */
    private int f18843j;

    private final boolean g(d dVar) {
        int i10 = this.f18835b - this.f18836c;
        if (!this.f18834a) {
            if ((dVar.getTop() >= i10 - this.f18838e || dVar.getBottom() >= i10 - this.f18838e) && (dVar.getTop() <= this.f18837d + i10 || dVar.getBottom() <= i10 + this.f18837d)) {
                return true;
            }
            return false;
        } else if ((dVar.getLeft() >= i10 - this.f18838e || dVar.getRight() >= i10 - this.f18838e) && (dVar.getLeft() <= this.f18837d + i10 || dVar.getRight() <= i10 + this.f18837d)) {
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
        this.f18841h = 0;
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
                if (!this.f18834a) {
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
            int i15 = this.f18841h;
            if (this.f18834a) {
                bottom = dVar.getRight();
            } else {
                bottom = dVar.getBottom();
            }
            int max2 = Math.max(i15, bottom);
            this.f18841h = max2;
            if (this.f18834a) {
                bottom2 = dVar2.getRight();
            } else {
                bottom2 = dVar2.getBottom();
            }
            this.f18841h = Math.max(max2, bottom2);
        }
        this.f18842i = i12;
        this.f18843j = i10;
    }

    public final int b(int i10, int i11, int i12) {
        int i13 = i10 - this.f18836c;
        int i14 = (this.f18843j - i13) - i11;
        this.f18839f = i14;
        int i15 = (((i13 + this.f18837d) - this.f18838e) - this.f18842i) - i12;
        this.f18840g = i15;
        return Math.max(i14, i15);
    }

    public final int c() {
        return this.f18840g;
    }

    public final int d() {
        return this.f18839f;
    }

    public final boolean e() {
        return this.f18834a;
    }

    public final int f() {
        return this.f18841h;
    }

    public final void h(boolean z10) {
        this.f18834a = z10;
    }

    public final void i(int i10) {
        this.f18841h = i10;
    }

    public final void j(int i10) {
        this.f18836c = i10;
    }

    public final void k(int i10) {
        this.f18838e = i10;
    }

    public final void l(int i10) {
        this.f18835b = i10;
    }

    public final void m(int i10) {
        this.f18837d = i10;
    }
}
