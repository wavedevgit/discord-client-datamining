package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f35890a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35891b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35892c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35893d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35894e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f35895f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f35890a = i10;
        this.f35891b = i11;
        this.f35892c = str;
        this.f35893d = str2;
        this.f35894e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f35890a * f10), (int) (this.f35891b * f10), this.f35892c, this.f35893d, this.f35894e);
        Bitmap bitmap = this.f35895f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f35890a, wVar.f35891b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f35895f;
    }

    public String c() {
        return this.f35893d;
    }

    public int d() {
        return this.f35891b;
    }

    public String e() {
        return this.f35892c;
    }

    public int f() {
        return this.f35890a;
    }

    public void g(Bitmap bitmap) {
        this.f35895f = bitmap;
    }
}
