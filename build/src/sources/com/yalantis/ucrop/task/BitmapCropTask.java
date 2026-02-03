package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import java.io.File;
import pq.a;
import qq.b;
import qq.c;
import qq.d;
import sq.e;
import sq.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f20516a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f20517b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f20518c;

    /* renamed from: d  reason: collision with root package name */
    private float f20519d;

    /* renamed from: e  reason: collision with root package name */
    private float f20520e;

    /* renamed from: f  reason: collision with root package name */
    private final int f20521f;

    /* renamed from: g  reason: collision with root package name */
    private final int f20522g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f20523h;

    /* renamed from: i  reason: collision with root package name */
    private final int f20524i;

    /* renamed from: j  reason: collision with root package name */
    private final String f20525j;

    /* renamed from: k  reason: collision with root package name */
    private final String f20526k;

    /* renamed from: l  reason: collision with root package name */
    private final c f20527l;

    /* renamed from: m  reason: collision with root package name */
    private final a f20528m;

    /* renamed from: n  reason: collision with root package name */
    private int f20529n;

    /* renamed from: o  reason: collision with root package name */
    private int f20530o;

    /* renamed from: p  reason: collision with root package name */
    private int f20531p;

    /* renamed from: q  reason: collision with root package name */
    private int f20532q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f20516a = bitmap;
        this.f20517b = dVar.a();
        this.f20518c = dVar.c();
        this.f20519d = dVar.d();
        this.f20520e = dVar.b();
        this.f20521f = bVar.f();
        this.f20522g = bVar.g();
        this.f20523h = bVar.a();
        this.f20524i = bVar.b();
        this.f20525j = bVar.d();
        this.f20526k = bVar.e();
        this.f20527l = bVar.c();
        this.f20528m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f20525j);
        this.f20531p = Math.round((this.f20517b.left - this.f20518c.left) / this.f20519d);
        this.f20532q = Math.round((this.f20517b.top - this.f20518c.top) / this.f20519d);
        this.f20529n = Math.round(this.f20517b.width() / this.f20519d);
        int round = Math.round(this.f20517b.height() / this.f20519d);
        this.f20530o = round;
        boolean e10 = e(this.f20529n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f20525j, this.f20526k, this.f20531p, this.f20532q, this.f20529n, this.f20530o, this.f20520e, f10, this.f20523h.ordinal(), this.f20524i, this.f20527l.a(), this.f20527l.b());
            if (cropCImg && this.f20523h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f20529n, this.f20530o, this.f20526k);
            }
            return cropCImg;
        }
        e.a(this.f20525j, this.f20526k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f20525j, options);
        if (this.f20527l.a() != 90 && this.f20527l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f20516a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f20519d /= Math.min(width, i11 / this.f20516a.getHeight());
        if (this.f20521f > 0 && this.f20522g > 0) {
            float width2 = this.f20517b.width() / this.f20519d;
            float height = this.f20517b.height() / this.f20519d;
            int i12 = this.f20521f;
            if (width2 > i12 || height > this.f20522g) {
                float min = Math.min(i12 / width2, this.f20522g / height);
                this.f20519d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f20521f <= 0 || this.f20522g <= 0) {
            float f10 = round;
            if (Math.abs(this.f20517b.left - this.f20518c.left) <= f10 && Math.abs(this.f20517b.top - this.f20518c.top) <= f10 && Math.abs(this.f20517b.bottom - this.f20518c.bottom) <= f10 && Math.abs(this.f20517b.right - this.f20518c.right) <= f10 && this.f20520e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f20516a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f20518c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f20516a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f20528m;
        if (aVar != null) {
            if (th2 == null) {
                this.f20528m.a(Uri.fromFile(new File(this.f20526k)), this.f20531p, this.f20532q, this.f20529n, this.f20530o);
                return;
            }
            aVar.b(th2);
        }
    }
}
