package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f14249e;

    /* renamed from: f  reason: collision with root package name */
    int f14250f;

    /* renamed from: g  reason: collision with root package name */
    int f14251g;

    /* renamed from: h  reason: collision with root package name */
    int f14252h;

    /* renamed from: i  reason: collision with root package name */
    int f14253i;

    /* renamed from: j  reason: collision with root package name */
    float f14254j;

    /* renamed from: k  reason: collision with root package name */
    float f14255k;

    /* renamed from: l  reason: collision with root package name */
    int f14256l;

    /* renamed from: m  reason: collision with root package name */
    int f14257m;

    /* renamed from: o  reason: collision with root package name */
    int f14259o;

    /* renamed from: p  reason: collision with root package name */
    int f14260p;

    /* renamed from: q  reason: collision with root package name */
    boolean f14261q;

    /* renamed from: r  reason: collision with root package name */
    boolean f14262r;

    /* renamed from: a  reason: collision with root package name */
    int f14245a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f14246b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f14247c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f14248d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f14258n = new ArrayList();

    public int a() {
        return this.f14251g;
    }

    public int b() {
        return this.f14252h;
    }

    public int c() {
        return this.f14252h - this.f14253i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f14245a = Math.min(this.f14245a, (view.getLeft() - bVar.E1()) - i10);
        this.f14246b = Math.min(this.f14246b, (view.getTop() - bVar.Z()) - i11);
        this.f14247c = Math.max(this.f14247c, view.getRight() + bVar.c2() + i12);
        this.f14248d = Math.max(this.f14248d, view.getBottom() + bVar.B1() + i13);
    }
}
