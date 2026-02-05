package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import java.io.File;
import uq.a;
import vq.b;
import vq.c;
import vq.d;
import xq.e;
import xq.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f19904a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f19905b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f19906c;

    /* renamed from: d  reason: collision with root package name */
    private float f19907d;

    /* renamed from: e  reason: collision with root package name */
    private float f19908e;

    /* renamed from: f  reason: collision with root package name */
    private final int f19909f;

    /* renamed from: g  reason: collision with root package name */
    private final int f19910g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f19911h;

    /* renamed from: i  reason: collision with root package name */
    private final int f19912i;

    /* renamed from: j  reason: collision with root package name */
    private final String f19913j;

    /* renamed from: k  reason: collision with root package name */
    private final String f19914k;

    /* renamed from: l  reason: collision with root package name */
    private final c f19915l;

    /* renamed from: m  reason: collision with root package name */
    private final a f19916m;

    /* renamed from: n  reason: collision with root package name */
    private int f19917n;

    /* renamed from: o  reason: collision with root package name */
    private int f19918o;

    /* renamed from: p  reason: collision with root package name */
    private int f19919p;

    /* renamed from: q  reason: collision with root package name */
    private int f19920q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f19904a = bitmap;
        this.f19905b = dVar.a();
        this.f19906c = dVar.c();
        this.f19907d = dVar.d();
        this.f19908e = dVar.b();
        this.f19909f = bVar.f();
        this.f19910g = bVar.g();
        this.f19911h = bVar.a();
        this.f19912i = bVar.b();
        this.f19913j = bVar.d();
        this.f19914k = bVar.e();
        this.f19915l = bVar.c();
        this.f19916m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f19913j);
        this.f19919p = Math.round((this.f19905b.left - this.f19906c.left) / this.f19907d);
        this.f19920q = Math.round((this.f19905b.top - this.f19906c.top) / this.f19907d);
        this.f19917n = Math.round(this.f19905b.width() / this.f19907d);
        int round = Math.round(this.f19905b.height() / this.f19907d);
        this.f19918o = round;
        boolean e10 = e(this.f19917n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f19913j, this.f19914k, this.f19919p, this.f19920q, this.f19917n, this.f19918o, this.f19908e, f10, this.f19911h.ordinal(), this.f19912i, this.f19915l.a(), this.f19915l.b());
            if (cropCImg && this.f19911h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f19917n, this.f19918o, this.f19914k);
            }
            return cropCImg;
        }
        e.a(this.f19913j, this.f19914k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f19913j, options);
        if (this.f19915l.a() != 90 && this.f19915l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f19904a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f19907d /= Math.min(width, i11 / this.f19904a.getHeight());
        if (this.f19909f > 0 && this.f19910g > 0) {
            float width2 = this.f19905b.width() / this.f19907d;
            float height = this.f19905b.height() / this.f19907d;
            int i12 = this.f19909f;
            if (width2 > i12 || height > this.f19910g) {
                float min = Math.min(i12 / width2, this.f19910g / height);
                this.f19907d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f19909f <= 0 || this.f19910g <= 0) {
            float f10 = round;
            if (Math.abs(this.f19905b.left - this.f19906c.left) <= f10 && Math.abs(this.f19905b.top - this.f19906c.top) <= f10 && Math.abs(this.f19905b.bottom - this.f19906c.bottom) <= f10 && Math.abs(this.f19905b.right - this.f19906c.right) <= f10 && this.f19908e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f19904a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f19906c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f19904a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f19916m;
        if (aVar != null) {
            if (th2 == null) {
                this.f19916m.a(Uri.fromFile(new File(this.f19914k)), this.f19919p, this.f19920q, this.f19917n, this.f19918o);
                return;
            }
            aVar.b(th2);
        }
    }
}
