package com.google.android.flexbox;

import android.view.View;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FlexLine {

    /* renamed from: e  reason: collision with root package name */
    int f13671e;

    /* renamed from: f  reason: collision with root package name */
    int f13672f;

    /* renamed from: g  reason: collision with root package name */
    int f13673g;

    /* renamed from: h  reason: collision with root package name */
    int f13674h;

    /* renamed from: i  reason: collision with root package name */
    int f13675i;

    /* renamed from: j  reason: collision with root package name */
    float f13676j;

    /* renamed from: k  reason: collision with root package name */
    float f13677k;

    /* renamed from: l  reason: collision with root package name */
    int f13678l;

    /* renamed from: m  reason: collision with root package name */
    int f13679m;

    /* renamed from: o  reason: collision with root package name */
    int f13681o;

    /* renamed from: p  reason: collision with root package name */
    int f13682p;

    /* renamed from: q  reason: collision with root package name */
    boolean f13683q;

    /* renamed from: r  reason: collision with root package name */
    boolean f13684r;

    /* renamed from: a  reason: collision with root package name */
    int f13667a = Integer.MAX_VALUE;

    /* renamed from: b  reason: collision with root package name */
    int f13668b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    int f13669c = Integer.MIN_VALUE;

    /* renamed from: d  reason: collision with root package name */
    int f13670d = Integer.MIN_VALUE;

    /* renamed from: n  reason: collision with root package name */
    List f13680n = new ArrayList();

    public int a() {
        return this.f13673g;
    }

    public int b() {
        return this.f13674h;
    }

    public int c() {
        return this.f13674h - this.f13675i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(View view, int i10, int i11, int i12, int i13) {
        b bVar = (b) view.getLayoutParams();
        this.f13667a = Math.min(this.f13667a, (view.getLeft() - bVar.z1()) - i10);
        this.f13668b = Math.min(this.f13668b, (view.getTop() - bVar.C()) - i11);
        this.f13669c = Math.max(this.f13669c, view.getRight() + bVar.W1() + i12);
        this.f13670d = Math.max(this.f13670d, view.getBottom() + bVar.w1() + i13);
    }
}
