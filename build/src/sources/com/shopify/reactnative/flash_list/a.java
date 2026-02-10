package com.shopify.reactnative.flash_list;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f18724a;

    /* renamed from: b  reason: collision with root package name */
    private int f18725b;

    /* renamed from: c  reason: collision with root package name */
    private int f18726c;

    /* renamed from: d  reason: collision with root package name */
    private int f18727d;

    /* renamed from: e  reason: collision with root package name */
    private int f18728e;

    /* renamed from: f  reason: collision with root package name */
    private int f18729f;

    /* renamed from: g  reason: collision with root package name */
    private int f18730g;

    /* renamed from: h  reason: collision with root package name */
    private int f18731h;

    /* renamed from: i  reason: collision with root package name */
    private int f18732i;

    /* renamed from: j  reason: collision with root package name */
    private int f18733j;

    private final boolean g(d dVar) {
        int i10 = this.f18725b - this.f18726c;
        if (!this.f18724a) {
            if ((dVar.getTop() >= i10 - this.f18728e || dVar.getBottom() >= i10 - this.f18728e) && (dVar.getTop() <= this.f18727d + i10 || dVar.getBottom() <= i10 + this.f18727d)) {
                return true;
            }
            return false;
        } else if ((dVar.getLeft() >= i10 - this.f18728e || dVar.getRight() >= i10 - this.f18728e) && (dVar.getLeft() <= this.f18727d + i10 || dVar.getRight() <= i10 + this.f18727d)) {
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
        this.f18731h = 0;
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
                if (!this.f18724a) {
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
            int i15 = this.f18731h;
            if (this.f18724a) {
                bottom = dVar.getRight();
            } else {
                bottom = dVar.getBottom();
            }
            int max2 = Math.max(i15, bottom);
            this.f18731h = max2;
            if (this.f18724a) {
                bottom2 = dVar2.getRight();
            } else {
                bottom2 = dVar2.getBottom();
            }
            this.f18731h = Math.max(max2, bottom2);
        }
        this.f18732i = i12;
        this.f18733j = i10;
    }

    public final int b(int i10, int i11, int i12) {
        int i13 = i10 - this.f18726c;
        int i14 = (this.f18733j - i13) - i11;
        this.f18729f = i14;
        int i15 = (((i13 + this.f18727d) - this.f18728e) - this.f18732i) - i12;
        this.f18730g = i15;
        return Math.max(i14, i15);
    }

    public final int c() {
        return this.f18730g;
    }

    public final int d() {
        return this.f18729f;
    }

    public final boolean e() {
        return this.f18724a;
    }

    public final int f() {
        return this.f18731h;
    }

    public final void h(boolean z10) {
        this.f18724a = z10;
    }

    public final void i(int i10) {
        this.f18731h = i10;
    }

    public final void j(int i10) {
        this.f18726c = i10;
    }

    public final void k(int i10) {
        this.f18728e = i10;
    }

    public final void l(int i10) {
        this.f18725b = i10;
    }

    public final void m(int i10) {
        this.f18727d = i10;
    }
}
