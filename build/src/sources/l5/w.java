package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f36987a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36988b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36989c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36990d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36991e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f36992f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f36987a = i10;
        this.f36988b = i11;
        this.f36989c = str;
        this.f36990d = str2;
        this.f36991e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f36987a * f10), (int) (this.f36988b * f10), this.f36989c, this.f36990d, this.f36991e);
        Bitmap bitmap = this.f36992f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f36987a, wVar.f36988b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f36992f;
    }

    public String c() {
        return this.f36990d;
    }

    public int d() {
        return this.f36988b;
    }

    public String e() {
        return this.f36989c;
    }

    public int f() {
        return this.f36987a;
    }

    public void g(Bitmap bitmap) {
        this.f36992f = bitmap;
    }
}
