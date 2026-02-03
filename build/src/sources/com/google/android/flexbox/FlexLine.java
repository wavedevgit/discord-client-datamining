package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f13185e;

    /* renamed from: f  reason: collision with root package name */
    int f13186f;

    /* renamed from: g  reason: collision with root package name */
    int f13187g;

    /* renamed from: h  reason: collision with root package name */
    int f13188h;

    /* renamed from: i  reason: collision with root package name */
    int f13189i;

    /* renamed from: j  reason: collision with root package name */
    float f13190j;

    /* renamed from: k  reason: collision with root package name */
    float f13191k;

    /* renamed from: l  reason: collision with root package name */
    int f13192l;

    /* renamed from: m  reason: collision with root package name */
    int f13193m;

    /* renamed from: o  reason: collision with root package name */
    int f13195o;

    /* renamed from: p  reason: collision with root package name */
    int f13196p;

    /* renamed from: q  reason: collision with root package name */
    boolean f13197q;

    /* renamed from: r  reason: collision with root package name */
    boolean f13198r;

    /* renamed from: a  reason: collision with root package name */
    int f13181a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f13182b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f13183c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f13184d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f13194n = new ArrayList();

    public int a() {
        return this.f13187g;
    }

    public int b() {
        return this.f13188h;
    }

    public int c() {
        return this.f13188h - this.f13189i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f13181a = Math.min(this.f13181a, (view.getLeft() - bVar.E1()) - i10);
        this.f13182b = Math.min(this.f13182b, (view.getTop() - bVar.N()) - i11);
        this.f13183c = Math.max(this.f13183c, view.getRight() + bVar.Y1() + i12);
        this.f13184d = Math.max(this.f13184d, view.getBottom() + bVar.B1() + i13);
    }
}
