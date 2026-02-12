package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import gr.a;
import hr.b;
import hr.c;
import hr.d;
import java.io.File;
import jr.e;
import jr.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f20905a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f20906b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f20907c;

    /* renamed from: d  reason: collision with root package name */
    private float f20908d;

    /* renamed from: e  reason: collision with root package name */
    private float f20909e;

    /* renamed from: f  reason: collision with root package name */
    private final int f20910f;

    /* renamed from: g  reason: collision with root package name */
    private final int f20911g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f20912h;

    /* renamed from: i  reason: collision with root package name */
    private final int f20913i;

    /* renamed from: j  reason: collision with root package name */
    private final String f20914j;

    /* renamed from: k  reason: collision with root package name */
    private final String f20915k;

    /* renamed from: l  reason: collision with root package name */
    private final c f20916l;

    /* renamed from: m  reason: collision with root package name */
    private final a f20917m;

    /* renamed from: n  reason: collision with root package name */
    private int f20918n;

    /* renamed from: o  reason: collision with root package name */
    private int f20919o;

    /* renamed from: p  reason: collision with root package name */
    private int f20920p;

    /* renamed from: q  reason: collision with root package name */
    private int f20921q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f20905a = bitmap;
        this.f20906b = dVar.a();
        this.f20907c = dVar.c();
        this.f20908d = dVar.d();
        this.f20909e = dVar.b();
        this.f20910f = bVar.f();
        this.f20911g = bVar.g();
        this.f20912h = bVar.a();
        this.f20913i = bVar.b();
        this.f20914j = bVar.d();
        this.f20915k = bVar.e();
        this.f20916l = bVar.c();
        this.f20917m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f20914j);
        this.f20920p = Math.round((this.f20906b.left - this.f20907c.left) / this.f20908d);
        this.f20921q = Math.round((this.f20906b.top - this.f20907c.top) / this.f20908d);
        this.f20918n = Math.round(this.f20906b.width() / this.f20908d);
        int round = Math.round(this.f20906b.height() / this.f20908d);
        this.f20919o = round;
        boolean e10 = e(this.f20918n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f20914j, this.f20915k, this.f20920p, this.f20921q, this.f20918n, this.f20919o, this.f20909e, f10, this.f20912h.ordinal(), this.f20913i, this.f20916l.a(), this.f20916l.b());
            if (cropCImg && this.f20912h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f20918n, this.f20919o, this.f20915k);
            }
            return cropCImg;
        }
        e.a(this.f20914j, this.f20915k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f20914j, options);
        if (this.f20916l.a() != 90 && this.f20916l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f20905a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f20908d /= Math.min(width, i11 / this.f20905a.getHeight());
        if (this.f20910f > 0 && this.f20911g > 0) {
            float width2 = this.f20906b.width() / this.f20908d;
            float height = this.f20906b.height() / this.f20908d;
            int i12 = this.f20910f;
            if (width2 > i12 || height > this.f20911g) {
                float min = Math.min(i12 / width2, this.f20911g / height);
                this.f20908d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f20910f <= 0 || this.f20911g <= 0) {
            float f10 = round;
            if (Math.abs(this.f20906b.left - this.f20907c.left) <= f10 && Math.abs(this.f20906b.top - this.f20907c.top) <= f10 && Math.abs(this.f20906b.bottom - this.f20907c.bottom) <= f10 && Math.abs(this.f20906b.right - this.f20907c.right) <= f10 && this.f20909e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f20905a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f20907c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f20905a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f20917m;
        if (aVar != null) {
            if (th2 == null) {
                this.f20917m.a(Uri.fromFile(new File(this.f20915k)), this.f20920p, this.f20921q, this.f20918n, this.f20919o);
                return;
            }
            aVar.b(th2);
        }
    }
}
