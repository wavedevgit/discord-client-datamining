package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import ar.e;
import ar.f;
import java.io.File;
import xq.a;
import yq.b;
import yq.c;
import yq.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f20024a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f20025b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f20026c;

    /* renamed from: d  reason: collision with root package name */
    private float f20027d;

    /* renamed from: e  reason: collision with root package name */
    private float f20028e;

    /* renamed from: f  reason: collision with root package name */
    private final int f20029f;

    /* renamed from: g  reason: collision with root package name */
    private final int f20030g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f20031h;

    /* renamed from: i  reason: collision with root package name */
    private final int f20032i;

    /* renamed from: j  reason: collision with root package name */
    private final String f20033j;

    /* renamed from: k  reason: collision with root package name */
    private final String f20034k;

    /* renamed from: l  reason: collision with root package name */
    private final c f20035l;

    /* renamed from: m  reason: collision with root package name */
    private final a f20036m;

    /* renamed from: n  reason: collision with root package name */
    private int f20037n;

    /* renamed from: o  reason: collision with root package name */
    private int f20038o;

    /* renamed from: p  reason: collision with root package name */
    private int f20039p;

    /* renamed from: q  reason: collision with root package name */
    private int f20040q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f20024a = bitmap;
        this.f20025b = dVar.a();
        this.f20026c = dVar.c();
        this.f20027d = dVar.d();
        this.f20028e = dVar.b();
        this.f20029f = bVar.f();
        this.f20030g = bVar.g();
        this.f20031h = bVar.a();
        this.f20032i = bVar.b();
        this.f20033j = bVar.d();
        this.f20034k = bVar.e();
        this.f20035l = bVar.c();
        this.f20036m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f20033j);
        this.f20039p = Math.round((this.f20025b.left - this.f20026c.left) / this.f20027d);
        this.f20040q = Math.round((this.f20025b.top - this.f20026c.top) / this.f20027d);
        this.f20037n = Math.round(this.f20025b.width() / this.f20027d);
        int round = Math.round(this.f20025b.height() / this.f20027d);
        this.f20038o = round;
        boolean e10 = e(this.f20037n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f20033j, this.f20034k, this.f20039p, this.f20040q, this.f20037n, this.f20038o, this.f20028e, f10, this.f20031h.ordinal(), this.f20032i, this.f20035l.a(), this.f20035l.b());
            if (cropCImg && this.f20031h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f20037n, this.f20038o, this.f20034k);
            }
            return cropCImg;
        }
        e.a(this.f20033j, this.f20034k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f20033j, options);
        if (this.f20035l.a() != 90 && this.f20035l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f20024a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f20027d /= Math.min(width, i11 / this.f20024a.getHeight());
        if (this.f20029f > 0 && this.f20030g > 0) {
            float width2 = this.f20025b.width() / this.f20027d;
            float height = this.f20025b.height() / this.f20027d;
            int i12 = this.f20029f;
            if (width2 > i12 || height > this.f20030g) {
                float min = Math.min(i12 / width2, this.f20030g / height);
                this.f20027d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f20029f <= 0 || this.f20030g <= 0) {
            float f10 = round;
            if (Math.abs(this.f20025b.left - this.f20026c.left) <= f10 && Math.abs(this.f20025b.top - this.f20026c.top) <= f10 && Math.abs(this.f20025b.bottom - this.f20026c.bottom) <= f10 && Math.abs(this.f20025b.right - this.f20026c.right) <= f10 && this.f20028e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f20024a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f20026c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f20024a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f20036m;
        if (aVar != null) {
            if (th2 == null) {
                this.f20036m.a(Uri.fromFile(new File(this.f20034k)), this.f20039p, this.f20040q, this.f20037n, this.f20038o);
                return;
            }
            aVar.b(th2);
        }
    }
}
