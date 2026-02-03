package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import java.io.File;
import rq.a;
import sq.b;
import sq.c;
import sq.d;
import uq.e;
import uq.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f19498a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f19499b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f19500c;

    /* renamed from: d  reason: collision with root package name */
    private float f19501d;

    /* renamed from: e  reason: collision with root package name */
    private float f19502e;

    /* renamed from: f  reason: collision with root package name */
    private final int f19503f;

    /* renamed from: g  reason: collision with root package name */
    private final int f19504g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f19505h;

    /* renamed from: i  reason: collision with root package name */
    private final int f19506i;

    /* renamed from: j  reason: collision with root package name */
    private final String f19507j;

    /* renamed from: k  reason: collision with root package name */
    private final String f19508k;

    /* renamed from: l  reason: collision with root package name */
    private final c f19509l;

    /* renamed from: m  reason: collision with root package name */
    private final a f19510m;

    /* renamed from: n  reason: collision with root package name */
    private int f19511n;

    /* renamed from: o  reason: collision with root package name */
    private int f19512o;

    /* renamed from: p  reason: collision with root package name */
    private int f19513p;

    /* renamed from: q  reason: collision with root package name */
    private int f19514q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f19498a = bitmap;
        this.f19499b = dVar.a();
        this.f19500c = dVar.c();
        this.f19501d = dVar.d();
        this.f19502e = dVar.b();
        this.f19503f = bVar.f();
        this.f19504g = bVar.g();
        this.f19505h = bVar.a();
        this.f19506i = bVar.b();
        this.f19507j = bVar.d();
        this.f19508k = bVar.e();
        this.f19509l = bVar.c();
        this.f19510m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f19507j);
        this.f19513p = Math.round((this.f19499b.left - this.f19500c.left) / this.f19501d);
        this.f19514q = Math.round((this.f19499b.top - this.f19500c.top) / this.f19501d);
        this.f19511n = Math.round(this.f19499b.width() / this.f19501d);
        int round = Math.round(this.f19499b.height() / this.f19501d);
        this.f19512o = round;
        boolean e10 = e(this.f19511n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f19507j, this.f19508k, this.f19513p, this.f19514q, this.f19511n, this.f19512o, this.f19502e, f10, this.f19505h.ordinal(), this.f19506i, this.f19509l.a(), this.f19509l.b());
            if (cropCImg && this.f19505h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f19511n, this.f19512o, this.f19508k);
            }
            return cropCImg;
        }
        e.a(this.f19507j, this.f19508k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f19507j, options);
        if (this.f19509l.a() != 90 && this.f19509l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f19498a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f19501d /= Math.min(width, i11 / this.f19498a.getHeight());
        if (this.f19503f > 0 && this.f19504g > 0) {
            float width2 = this.f19499b.width() / this.f19501d;
            float height = this.f19499b.height() / this.f19501d;
            int i12 = this.f19503f;
            if (width2 > i12 || height > this.f19504g) {
                float min = Math.min(i12 / width2, this.f19504g / height);
                this.f19501d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f19503f <= 0 || this.f19504g <= 0) {
            float f10 = round;
            if (Math.abs(this.f19499b.left - this.f19500c.left) <= f10 && Math.abs(this.f19499b.top - this.f19500c.top) <= f10 && Math.abs(this.f19499b.bottom - this.f19500c.bottom) <= f10 && Math.abs(this.f19499b.right - this.f19500c.right) <= f10 && this.f19502e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f19498a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f19500c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f19498a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f19510m;
        if (aVar != null) {
            if (th2 == null) {
                this.f19510m.a(Uri.fromFile(new File(this.f19508k)), this.f19513p, this.f19514q, this.f19511n, this.f19512o);
                return;
            }
            aVar.b(th2);
        }
    }
}
