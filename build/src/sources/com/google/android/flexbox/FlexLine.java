package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f14217e;

    /* renamed from: f  reason: collision with root package name */
    int f14218f;

    /* renamed from: g  reason: collision with root package name */
    int f14219g;

    /* renamed from: h  reason: collision with root package name */
    int f14220h;

    /* renamed from: i  reason: collision with root package name */
    int f14221i;

    /* renamed from: j  reason: collision with root package name */
    float f14222j;

    /* renamed from: k  reason: collision with root package name */
    float f14223k;

    /* renamed from: l  reason: collision with root package name */
    int f14224l;

    /* renamed from: m  reason: collision with root package name */
    int f14225m;

    /* renamed from: o  reason: collision with root package name */
    int f14227o;

    /* renamed from: p  reason: collision with root package name */
    int f14228p;

    /* renamed from: q  reason: collision with root package name */
    boolean f14229q;

    /* renamed from: r  reason: collision with root package name */
    boolean f14230r;

    /* renamed from: a  reason: collision with root package name */
    int f14213a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f14214b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f14215c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f14216d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f14226n = new ArrayList();

    public int a() {
        return this.f14219g;
    }

    public int b() {
        return this.f14220h;
    }

    public int c() {
        return this.f14220h - this.f14221i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f14213a = Math.min(this.f14213a, (view.getLeft() - bVar.E1()) - i10);
        this.f14214b = Math.min(this.f14214b, (view.getTop() - bVar.N()) - i11);
        this.f14215c = Math.max(this.f14215c, view.getRight() + bVar.Y1() + i12);
        this.f14216d = Math.max(this.f14216d, view.getBottom() + bVar.B1() + i13);
    }
}
