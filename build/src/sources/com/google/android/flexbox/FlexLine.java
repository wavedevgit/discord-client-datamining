package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f14588e;

    /* renamed from: f  reason: collision with root package name */
    int f14589f;

    /* renamed from: g  reason: collision with root package name */
    int f14590g;

    /* renamed from: h  reason: collision with root package name */
    int f14591h;

    /* renamed from: i  reason: collision with root package name */
    int f14592i;

    /* renamed from: j  reason: collision with root package name */
    float f14593j;

    /* renamed from: k  reason: collision with root package name */
    float f14594k;

    /* renamed from: l  reason: collision with root package name */
    int f14595l;

    /* renamed from: m  reason: collision with root package name */
    int f14596m;

    /* renamed from: o  reason: collision with root package name */
    int f14598o;

    /* renamed from: p  reason: collision with root package name */
    int f14599p;

    /* renamed from: q  reason: collision with root package name */
    boolean f14600q;

    /* renamed from: r  reason: collision with root package name */
    boolean f14601r;

    /* renamed from: a  reason: collision with root package name */
    int f14584a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f14585b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f14586c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f14587d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f14597n = new ArrayList();

    public int a() {
        return this.f14590g;
    }

    public int b() {
        return this.f14591h;
    }

    public int c() {
        return this.f14591h - this.f14592i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f14584a = Math.min(this.f14584a, (view.getLeft() - bVar.E1()) - i10);
        this.f14585b = Math.min(this.f14585b, (view.getTop() - bVar.N()) - i11);
        this.f14586c = Math.max(this.f14586c, view.getRight() + bVar.Y1() + i12);
        this.f14587d = Math.max(this.f14587d, view.getBottom() + bVar.B1() + i13);
    }
}
