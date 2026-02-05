package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f13570e;

    /* renamed from: f  reason: collision with root package name */
    int f13571f;

    /* renamed from: g  reason: collision with root package name */
    int f13572g;

    /* renamed from: h  reason: collision with root package name */
    int f13573h;

    /* renamed from: i  reason: collision with root package name */
    int f13574i;

    /* renamed from: j  reason: collision with root package name */
    float f13575j;

    /* renamed from: k  reason: collision with root package name */
    float f13576k;

    /* renamed from: l  reason: collision with root package name */
    int f13577l;

    /* renamed from: m  reason: collision with root package name */
    int f13578m;

    /* renamed from: o  reason: collision with root package name */
    int f13580o;

    /* renamed from: p  reason: collision with root package name */
    int f13581p;

    /* renamed from: q  reason: collision with root package name */
    boolean f13582q;

    /* renamed from: r  reason: collision with root package name */
    boolean f13583r;

    /* renamed from: a  reason: collision with root package name */
    int f13566a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f13567b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f13568c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f13569d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f13579n = new ArrayList();

    public int a() {
        return this.f13572g;
    }

    public int b() {
        return this.f13573h;
    }

    public int c() {
        return this.f13573h - this.f13574i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f13566a = Math.min(this.f13566a, (view.getLeft() - bVar.E1()) - i10);
        this.f13567b = Math.min(this.f13567b, (view.getTop() - bVar.N()) - i11);
        this.f13568c = Math.max(this.f13568c, view.getRight() + bVar.Y1() + i12);
        this.f13569d = Math.max(this.f13569d, view.getBottom() + bVar.B1() + i13);
    }
}
