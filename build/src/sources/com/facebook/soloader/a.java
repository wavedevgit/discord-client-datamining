package com.facebook.soloader;

import android.content.Context;
import android.os.StrictMode;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends e0 implements w {

    /* renamed from: a  reason: collision with root package name */
    private final int f12432a;

    /* renamed from: b  reason: collision with root package name */
    private f f12433b;

    public a(Context context, int i10) {
        this.f12432a = i10;
        this.f12433b = new f(f(context), i10);
    }

    private static File f(Context context) {
        return new File(context.getApplicationInfo().nativeLibraryDir);
    }

    @Override // com.facebook.soloader.w
    public e0 b(Context context) {
        this.f12433b = new f(f(context), this.f12432a | 1);
        return this;
    }

    @Override // com.facebook.soloader.e0
    public String c() {
        return "ApplicationSoSource";
    }

    @Override // com.facebook.soloader.e0
    public int d(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        return this.f12433b.d(str, i10, threadPolicy);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.soloader.e0
    public void e(int i10) {
        this.f12433b.e(i10);
    }

    @Override // com.facebook.soloader.e0
    public String toString() {
        return c() + "[" + this.f12433b.toString() + "]";
    }
}
