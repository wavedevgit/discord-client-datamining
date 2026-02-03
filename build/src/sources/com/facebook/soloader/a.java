package com.facebook.soloader;

import android.content.Context;
import android.os.StrictMode;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends e0 implements w {

    /* renamed from: a  reason: collision with root package name */
    private final int f11029a;

    /* renamed from: b  reason: collision with root package name */
    private f f11030b;

    public a(Context context, int i10) {
        this.f11029a = i10;
        this.f11030b = new f(f(context), i10);
    }

    private static File f(Context context) {
        return new File(context.getApplicationInfo().nativeLibraryDir);
    }

    @Override // com.facebook.soloader.w
    public e0 b(Context context) {
        this.f11030b = new f(f(context), this.f11029a | 1);
        return this;
    }

    @Override // com.facebook.soloader.e0
    public String c() {
        return "ApplicationSoSource";
    }

    @Override // com.facebook.soloader.e0
    public int d(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        return this.f11030b.d(str, i10, threadPolicy);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.soloader.e0
    public void e(int i10) {
        this.f11030b.e(i10);
    }

    @Override // com.facebook.soloader.e0
    public String toString() {
        return c() + "[" + this.f11030b.toString() + "]";
    }
}
