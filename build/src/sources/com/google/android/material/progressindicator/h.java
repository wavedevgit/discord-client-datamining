package com.google.android.material.progressindicator;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class h {

    /* renamed from: a  reason: collision with root package name */
    b f15289a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected static class a {

        /* renamed from: a  reason: collision with root package name */
        float f15290a;

        /* renamed from: b  reason: collision with root package name */
        float f15291b;

        /* renamed from: c  reason: collision with root package name */
        int f15292c;

        /* renamed from: d  reason: collision with root package name */
        int f15293d;
    }

    public h(b bVar) {
        this.f15289a = bVar;
    }

    abstract void a(Canvas canvas, Rect rect, float f10, boolean z10, boolean z11);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void b(Canvas canvas, Paint paint, int i10, int i11);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void c(Canvas canvas, Paint paint, a aVar, int i10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void d(Canvas canvas, Paint paint, float f10, float f11, int i10, int i11, int i12);

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int f();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(Canvas canvas, Rect rect, float f10, boolean z10, boolean z11) {
        this.f15289a.e();
        a(canvas, rect, f10, z10, z11);
    }
}
