package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f13531e;

    /* renamed from: f  reason: collision with root package name */
    int f13532f;

    /* renamed from: g  reason: collision with root package name */
    int f13533g;

    /* renamed from: h  reason: collision with root package name */
    int f13534h;

    /* renamed from: i  reason: collision with root package name */
    int f13535i;

    /* renamed from: j  reason: collision with root package name */
    float f13536j;

    /* renamed from: k  reason: collision with root package name */
    float f13537k;

    /* renamed from: l  reason: collision with root package name */
    int f13538l;

    /* renamed from: m  reason: collision with root package name */
    int f13539m;

    /* renamed from: o  reason: collision with root package name */
    int f13541o;

    /* renamed from: p  reason: collision with root package name */
    int f13542p;

    /* renamed from: q  reason: collision with root package name */
    boolean f13543q;

    /* renamed from: r  reason: collision with root package name */
    boolean f13544r;

    /* renamed from: a  reason: collision with root package name */
    int f13527a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f13528b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f13529c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f13530d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f13540n = new ArrayList();

    public int a() {
        return this.f13533g;
    }

    public int b() {
        return this.f13534h;
    }

    public int c() {
        return this.f13534h - this.f13535i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f13527a = Math.min(this.f13527a, (view.getLeft() - bVar.D1()) - i10);
        this.f13528b = Math.min(this.f13528b, (view.getTop() - bVar.C()) - i11);
        this.f13529c = Math.max(this.f13529c, view.getRight() + bVar.X1() + i12);
        this.f13530d = Math.max(this.f13530d, view.getBottom() + bVar.A1() + i13);
    }
}
