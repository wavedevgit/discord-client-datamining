package com.google.android.material.progressindicator;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.Rect;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class i {

    /* renamed from: a  reason: collision with root package name */
    com.google.android.material.progressindicator.b f16149a;

    /* renamed from: b  reason: collision with root package name */
    final Path f16150b;

    /* renamed from: c  reason: collision with root package name */
    final Path f16151c;

    /* renamed from: d  reason: collision with root package name */
    final PathMeasure f16152d;

    /* renamed from: e  reason: collision with root package name */
    final Matrix f16153e;

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        float f16154a;

        /* renamed from: b  reason: collision with root package name */
        float f16155b;

        /* renamed from: c  reason: collision with root package name */
        int f16156c;

        /* renamed from: d  reason: collision with root package name */
        int f16157d;

        /* renamed from: e  reason: collision with root package name */
        float f16158e = 1.0f;

        /* renamed from: f  reason: collision with root package name */
        float f16159f;

        /* renamed from: g  reason: collision with root package name */
        float f16160g;

        /* renamed from: h  reason: collision with root package name */
        boolean f16161h;
    }

    public i(com.google.android.material.progressindicator.b bVar) {
        Path path = new Path();
        this.f16150b = path;
        this.f16151c = new Path();
        this.f16152d = new PathMeasure(path, false);
        this.f16149a = bVar;
        this.f16153e = new Matrix();
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
    public abstract void g();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Canvas canvas, Rect rect, float f10, boolean z10, boolean z11) {
        this.f16149a.h();
        a(canvas, rect, f10, z10, z11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float i(float[] fArr) {
        return (float) Math.toDegrees(Math.atan2(fArr[1], fArr[0]));
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    protected class b {

        /* renamed from: a  reason: collision with root package name */
        float[] f16162a;

        /* renamed from: b  reason: collision with root package name */
        float[] f16163b;

        /* renamed from: c  reason: collision with root package name */
        final Matrix f16164c;

        public b() {
            this.f16162a = new float[2];
            this.f16163b = r3;
            float[] fArr = {1.0f};
            this.f16164c = new Matrix();
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void a(float f10) {
            float[] fArr;
            float[] fArr2;
            float[] fArr3 = this.f16163b;
            float atan2 = (float) (Math.atan2(fArr3[1], fArr3[0]) + 1.5707963267948966d);
            double d10 = f10;
            double d11 = atan2;
            this.f16162a[0] = (float) (fArr[0] + (Math.cos(d11) * d10));
            this.f16162a[1] = (float) (fArr2[1] + (d10 * Math.sin(d11)));
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b(float f10) {
            float[] fArr;
            float[] fArr2;
            float[] fArr3 = this.f16163b;
            float atan2 = (float) Math.atan2(fArr3[1], fArr3[0]);
            double d10 = f10;
            double d11 = atan2;
            this.f16162a[0] = (float) (fArr[0] + (Math.cos(d11) * d10));
            this.f16162a[1] = (float) (fArr2[1] + (d10 * Math.sin(d11)));
        }

        public void c() {
            Arrays.fill(this.f16162a, 0.0f);
            Arrays.fill(this.f16163b, 0.0f);
            this.f16163b[0] = 1.0f;
            this.f16164c.reset();
        }

        public void d(float f10) {
            this.f16164c.reset();
            this.f16164c.setRotate(f10);
            this.f16164c.mapPoints(this.f16162a);
            this.f16164c.mapPoints(this.f16163b);
        }

        public b(i iVar, b bVar) {
            this(bVar.f16162a, bVar.f16163b);
        }

        public b(float[] fArr, float[] fArr2) {
            float[] fArr3 = new float[2];
            this.f16162a = fArr3;
            this.f16163b = new float[2];
            System.arraycopy(fArr, 0, fArr3, 0, 2);
            System.arraycopy(fArr2, 0, this.f16163b, 0, 2);
            this.f16164c = new Matrix();
        }
    }
}
