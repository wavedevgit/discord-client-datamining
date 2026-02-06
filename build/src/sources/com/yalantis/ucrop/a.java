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
    private Intent f19881a = new Intent();

    /* renamed from: b  reason: collision with root package name */
    private Bundle f19882b;

    /* renamed from: com.yalantis.ucrop.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0259a {

        /* renamed from: a  reason: collision with root package name */
        private final Bundle f19883a = new Bundle();

        public Bundle a() {
            return this.f19883a;
        }

        public void b(int i10) {
            this.f19883a.putInt("com.yalantis.ucrop.UcropColorControlsWidgetActive", i10);
        }

        public void c(int i10, int i11, int i12) {
            this.f19883a.putIntArray("com.yalantis.ucrop.AllowedGestures", new int[]{i10, i11, i12});
        }

        public void d(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.CircleDimmedLayer", z10);
        }

        public void e(Bitmap.CompressFormat compressFormat) {
            this.f19883a.putString("com.yalantis.ucrop.CompressionFormatName", compressFormat.name());
        }

        public void f(int i10) {
            this.f19883a.putInt("com.yalantis.ucrop.CompressionQuality", i10);
        }

        public void g(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.FreeStyleCrop", z10);
        }

        public void h(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.HideBottomControls", z10);
        }

        public void i(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.NavigationBarLight", z10);
        }

        public void j(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.ShowCropFrame", z10);
        }

        public void k(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.ShowCropGrid", z10);
        }

        public void l(boolean z10) {
            this.f19883a.putBoolean("com.yalantis.ucrop.StatusBarLight", z10);
        }

        public void m(int i10) {
            this.f19883a.putInt("com.yalantis.ucrop.ToolbarColor", i10);
        }

        public void n(String str) {
            this.f19883a.putString("com.yalantis.ucrop.UcropToolbarTitleText", str);
        }

        public void o(int i10) {
            this.f19883a.putInt("com.yalantis.ucrop.UcropToolbarWidgetColor", i10);
        }
    }

    private a(Uri uri, Uri uri2) {
        Bundle bundle = new Bundle();
        this.f19882b = bundle;
        bundle.putParcelable("com.yalantis.ucrop.InputUri", uri);
        this.f19882b.putParcelable("com.yalantis.ucrop.OutputUri", uri2);
    }

    public static Uri b(Intent intent) {
        return (Uri) intent.getParcelableExtra("com.yalantis.ucrop.OutputUri");
    }

    public static a c(Uri uri, Uri uri2) {
        return new a(uri, uri2);
    }

    public Intent a(Context context) {
        this.f19881a.setClass(context, UCropActivity.class);
        this.f19881a.putExtras(this.f19882b);
        return this.f19881a;
    }

    public void d(Activity activity) {
        e(activity, 69);
    }

    public void e(Activity activity, int i10) {
        activity.startActivityForResult(a(activity), i10);
    }

    public a f(float f10, float f11) {
        this.f19882b.putFloat("com.yalantis.ucrop.AspectRatioX", f10);
        this.f19882b.putFloat("com.yalantis.ucrop.AspectRatioY", f11);
        return this;
    }

    public a g(C0259a c0259a) {
        this.f19882b.putAll(c0259a.a());
        return this;
    }
}
