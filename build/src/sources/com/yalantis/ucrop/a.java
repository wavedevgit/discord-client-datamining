package com.yalantis.ucrop;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private Intent f20513a = new Intent();

    /* renamed from: b  reason: collision with root package name */
    private Bundle f20514b;

    /* renamed from: com.yalantis.ucrop.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0268a {

        /* renamed from: a  reason: collision with root package name */
        private final Bundle f20515a = new Bundle();

        public Bundle a() {
            return this.f20515a;
        }

        public void b(int i10) {
            this.f20515a.putInt("com.yalantis.ucrop.UcropColorControlsWidgetActive", i10);
        }

        public void c(int i10, int i11, int i12) {
            this.f20515a.putIntArray("com.yalantis.ucrop.AllowedGestures", new int[]{i10, i11, i12});
        }

        public void d(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.CircleDimmedLayer", z10);
        }

        public void e(Bitmap.CompressFormat compressFormat) {
            this.f20515a.putString("com.yalantis.ucrop.CompressionFormatName", compressFormat.name());
        }

        public void f(int i10) {
            this.f20515a.putInt("com.yalantis.ucrop.CompressionQuality", i10);
        }

        public void g(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.FreeStyleCrop", z10);
        }

        public void h(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.HideBottomControls", z10);
        }

        public void i(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.NavigationBarLight", z10);
        }

        public void j(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.ShowCropFrame", z10);
        }

        public void k(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.ShowCropGrid", z10);
        }

        public void l(boolean z10) {
            this.f20515a.putBoolean("com.yalantis.ucrop.StatusBarLight", z10);
        }

        public void m(int i10) {
            this.f20515a.putInt("com.yalantis.ucrop.ToolbarColor", i10);
        }

        public void n(String str) {
            this.f20515a.putString("com.yalantis.ucrop.UcropToolbarTitleText", str);
        }

        public void o(int i10) {
            this.f20515a.putInt("com.yalantis.ucrop.UcropToolbarWidgetColor", i10);
        }
    }

    private a(Uri uri, Uri uri2) {
        Bundle bundle = new Bundle();
        this.f20514b = bundle;
        bundle.putParcelable("com.yalantis.ucrop.InputUri", uri);
        this.f20514b.putParcelable("com.yalantis.ucrop.OutputUri", uri2);
    }

    public static Uri b(Intent intent) {
        return (Uri) intent.getParcelableExtra("com.yalantis.ucrop.OutputUri");
    }

    public static a c(Uri uri, Uri uri2) {
        return new a(uri, uri2);
    }

    public Intent a(Context context) {
        this.f20513a.setClass(context, UCropActivity.class);
        this.f20513a.putExtras(this.f20514b);
        return this.f20513a;
    }

    public void d(Activity activity) {
        e(activity, 69);
    }

    public void e(Activity activity, int i10) {
        activity.startActivityForResult(a(activity), i10);
    }

    public a f(float f10, float f11) {
        this.f20514b.putFloat("com.yalantis.ucrop.AspectRatioX", f10);
        this.f20514b.putFloat("com.yalantis.ucrop.AspectRatioY", f11);
        return this;
    }

    public a g(C0268a c0268a) {
        this.f20514b.putAll(c0268a.a());
        return this;
    }
}
