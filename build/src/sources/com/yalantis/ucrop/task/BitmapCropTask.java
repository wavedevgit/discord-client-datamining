package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import java.io.File;
import oq.a;
import pq.b;
import pq.c;
import pq.d;
import rq.e;
import rq.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f20883a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f20884b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f20885c;

    /* renamed from: d  reason: collision with root package name */
    private float f20886d;

    /* renamed from: e  reason: collision with root package name */
    private float f20887e;

    /* renamed from: f  reason: collision with root package name */
    private final int f20888f;

    /* renamed from: g  reason: collision with root package name */
    private final int f20889g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f20890h;

    /* renamed from: i  reason: collision with root package name */
    private final int f20891i;

    /* renamed from: j  reason: collision with root package name */
    private final String f20892j;

    /* renamed from: k  reason: collision with root package name */
    private final String f20893k;

    /* renamed from: l  reason: collision with root package name */
    private final c f20894l;

    /* renamed from: m  reason: collision with root package name */
    private final a f20895m;

    /* renamed from: n  reason: collision with root package name */
    private int f20896n;

    /* renamed from: o  reason: collision with root package name */
    private int f20897o;

    /* renamed from: p  reason: collision with root package name */
    private int f20898p;

    /* renamed from: q  reason: collision with root package name */
    private int f20899q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f20883a = bitmap;
        this.f20884b = dVar.a();
        this.f20885c = dVar.c();
        this.f20886d = dVar.d();
        this.f20887e = dVar.b();
        this.f20888f = bVar.f();
        this.f20889g = bVar.g();
        this.f20890h = bVar.a();
        this.f20891i = bVar.b();
        this.f20892j = bVar.d();
        this.f20893k = bVar.e();
        this.f20894l = bVar.c();
        this.f20895m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f20892j);
        this.f20898p = Math.round((this.f20884b.left - this.f20885c.left) / this.f20886d);
        this.f20899q = Math.round((this.f20884b.top - this.f20885c.top) / this.f20886d);
        this.f20896n = Math.round(this.f20884b.width() / this.f20886d);
        int round = Math.round(this.f20884b.height() / this.f20886d);
        this.f20897o = round;
        boolean e10 = e(this.f20896n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f20892j, this.f20893k, this.f20898p, this.f20899q, this.f20896n, this.f20897o, this.f20887e, f10, this.f20890h.ordinal(), this.f20891i, this.f20894l.a(), this.f20894l.b());
            if (cropCImg && this.f20890h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f20896n, this.f20897o, this.f20893k);
            }
            return cropCImg;
        }
        e.a(this.f20892j, this.f20893k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f20892j, options);
        if (this.f20894l.a() != 90 && this.f20894l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f20883a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f20886d /= Math.min(width, i11 / this.f20883a.getHeight());
        if (this.f20888f > 0 && this.f20889g > 0) {
            float width2 = this.f20884b.width() / this.f20886d;
            float height = this.f20884b.height() / this.f20886d;
            int i12 = this.f20888f;
            if (width2 > i12 || height > this.f20889g) {
                float min = Math.min(i12 / width2, this.f20889g / height);
                this.f20886d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f20888f <= 0 || this.f20889g <= 0) {
            float f10 = round;
            if (Math.abs(this.f20884b.left - this.f20885c.left) <= f10 && Math.abs(this.f20884b.top - this.f20885c.top) <= f10 && Math.abs(this.f20884b.bottom - this.f20885c.bottom) <= f10 && Math.abs(this.f20884b.right - this.f20885c.right) <= f10 && this.f20887e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f20883a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f20885c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f20883a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f20895m;
        if (aVar != null) {
            if (th2 == null) {
                this.f20895m.a(Uri.fromFile(new File(this.f20893k)), this.f20898p, this.f20899q, this.f20896n, this.f20897o);
                return;
            }
            aVar.b(th2);
        }
    }
}
