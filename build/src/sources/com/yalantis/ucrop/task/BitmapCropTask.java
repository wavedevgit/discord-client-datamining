package com.yalantis.ucrop.task;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.RectF;
import android.net.Uri;
import android.os.AsyncTask;
import android.util.Log;
import java.io.File;
import wq.a;
import xq.b;
import xq.c;
import xq.d;
import zq.e;
import zq.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BitmapCropTask extends AsyncTask<Void, Void, Throwable> {

    /* renamed from: a  reason: collision with root package name */
    private Bitmap f19884a;

    /* renamed from: b  reason: collision with root package name */
    private final RectF f19885b;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f19886c;

    /* renamed from: d  reason: collision with root package name */
    private float f19887d;

    /* renamed from: e  reason: collision with root package name */
    private float f19888e;

    /* renamed from: f  reason: collision with root package name */
    private final int f19889f;

    /* renamed from: g  reason: collision with root package name */
    private final int f19890g;

    /* renamed from: h  reason: collision with root package name */
    private final Bitmap.CompressFormat f19891h;

    /* renamed from: i  reason: collision with root package name */
    private final int f19892i;

    /* renamed from: j  reason: collision with root package name */
    private final String f19893j;

    /* renamed from: k  reason: collision with root package name */
    private final String f19894k;

    /* renamed from: l  reason: collision with root package name */
    private final c f19895l;

    /* renamed from: m  reason: collision with root package name */
    private final a f19896m;

    /* renamed from: n  reason: collision with root package name */
    private int f19897n;

    /* renamed from: o  reason: collision with root package name */
    private int f19898o;

    /* renamed from: p  reason: collision with root package name */
    private int f19899p;

    /* renamed from: q  reason: collision with root package name */
    private int f19900q;

    static {
        System.loadLibrary("ucrop");
    }

    public BitmapCropTask(Bitmap bitmap, d dVar, b bVar, a aVar) {
        this.f19884a = bitmap;
        this.f19885b = dVar.a();
        this.f19886c = dVar.c();
        this.f19887d = dVar.d();
        this.f19888e = dVar.b();
        this.f19889f = bVar.f();
        this.f19890g = bVar.g();
        this.f19891h = bVar.a();
        this.f19892i = bVar.b();
        this.f19893j = bVar.d();
        this.f19894k = bVar.e();
        this.f19895l = bVar.c();
        this.f19896m = aVar;
    }

    private boolean a(float f10) {
        e3.a aVar = new e3.a(this.f19893j);
        this.f19899p = Math.round((this.f19885b.left - this.f19886c.left) / this.f19887d);
        this.f19900q = Math.round((this.f19885b.top - this.f19886c.top) / this.f19887d);
        this.f19897n = Math.round(this.f19885b.width() / this.f19887d);
        int round = Math.round(this.f19885b.height() / this.f19887d);
        this.f19898o = round;
        boolean e10 = e(this.f19897n, round);
        Log.i("BitmapCropTask", "Should crop: " + e10);
        if (e10) {
            boolean cropCImg = cropCImg(this.f19893j, this.f19894k, this.f19899p, this.f19900q, this.f19897n, this.f19898o, this.f19888e, f10, this.f19891h.ordinal(), this.f19892i, this.f19895l.a(), this.f19895l.b());
            if (cropCImg && this.f19891h.equals(Bitmap.CompressFormat.JPEG)) {
                f.b(aVar, this.f19897n, this.f19898o, this.f19894k);
            }
            return cropCImg;
        }
        e.a(this.f19893j, this.f19894k);
        return false;
    }

    public static native boolean cropCImg(String str, String str2, int i10, int i11, int i12, int i13, float f10, float f11, int i14, int i15, int i16, int i17);

    private float d() {
        int i10;
        int i11;
        BitmapFactory.Options options = new BitmapFactory.Options();
        boolean z10 = true;
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(this.f19893j, options);
        if (this.f19895l.a() != 90 && this.f19895l.a() != 270) {
            z10 = false;
        }
        if (z10) {
            i10 = options.outHeight;
        } else {
            i10 = options.outWidth;
        }
        float width = i10 / this.f19884a.getWidth();
        if (z10) {
            i11 = options.outWidth;
        } else {
            i11 = options.outHeight;
        }
        this.f19887d /= Math.min(width, i11 / this.f19884a.getHeight());
        if (this.f19889f > 0 && this.f19890g > 0) {
            float width2 = this.f19885b.width() / this.f19887d;
            float height = this.f19885b.height() / this.f19887d;
            int i12 = this.f19889f;
            if (width2 > i12 || height > this.f19890g) {
                float min = Math.min(i12 / width2, this.f19890g / height);
                this.f19887d /= min;
                return min;
            }
            return 1.0f;
        }
        return 1.0f;
    }

    private boolean e(int i10, int i11) {
        int round = Math.round(Math.max(i10, i11) / 1000.0f) + 1;
        if (this.f19889f <= 0 || this.f19890g <= 0) {
            float f10 = round;
            if (Math.abs(this.f19885b.left - this.f19886c.left) <= f10 && Math.abs(this.f19885b.top - this.f19886c.top) <= f10 && Math.abs(this.f19885b.bottom - this.f19886c.bottom) <= f10 && Math.abs(this.f19885b.right - this.f19886c.right) <= f10 && this.f19888e == 0.0f) {
                return false;
            }
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: b */
    public Throwable doInBackground(Void... voidArr) {
        Bitmap bitmap = this.f19884a;
        if (bitmap == null) {
            return new NullPointerException("ViewBitmap is null");
        }
        if (bitmap.isRecycled()) {
            return new NullPointerException("ViewBitmap is recycled");
        }
        if (this.f19886c.isEmpty()) {
            return new NullPointerException("CurrentImageRect is empty");
        }
        try {
            a(d());
            this.f19884a = null;
            return null;
        } catch (Throwable th2) {
            return th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public void onPostExecute(Throwable th2) {
        a aVar = this.f19896m;
        if (aVar != null) {
            if (th2 == null) {
                this.f19896m.a(Uri.fromFile(new File(this.f19894k)), this.f19899p, this.f19900q, this.f19897n, this.f19898o);
                return;
            }
            aVar.b(th2);
        }
    }
}
