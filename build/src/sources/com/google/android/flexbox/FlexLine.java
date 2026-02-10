package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f14248e;

    /* renamed from: f  reason: collision with root package name */
    int f14249f;

    /* renamed from: g  reason: collision with root package name */
    int f14250g;

    /* renamed from: h  reason: collision with root package name */
    int f14251h;

    /* renamed from: i  reason: collision with root package name */
    int f14252i;

    /* renamed from: j  reason: collision with root package name */
    float f14253j;

    /* renamed from: k  reason: collision with root package name */
    float f14254k;

    /* renamed from: l  reason: collision with root package name */
    int f14255l;

    /* renamed from: m  reason: collision with root package name */
    int f14256m;

    /* renamed from: o  reason: collision with root package name */
    int f14258o;

    /* renamed from: p  reason: collision with root package name */
    int f14259p;

    /* renamed from: q  reason: collision with root package name */
    boolean f14260q;

    /* renamed from: r  reason: collision with root package name */
    boolean f14261r;

    /* renamed from: a  reason: collision with root package name */
    int f14244a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f14245b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f14246c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f14247d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f14257n = new ArrayList();

    public int a() {
        return this.f14250g;
    }

    public int b() {
        return this.f14251h;
    }

    public int c() {
        return this.f14251h - this.f14252i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f14244a = Math.min(this.f14244a, (view.getLeft() - bVar.E1()) - i10);
        this.f14245b = Math.min(this.f14245b, (view.getTop() - bVar.Z()) - i11);
        this.f14246c = Math.max(this.f14246c, view.getRight() + bVar.c2() + i12);
        this.f14247d = Math.max(this.f14247d, view.getBottom() + bVar.B1() + i13);
    }
}
