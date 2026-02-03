package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f37101a;

    /* renamed from: b  reason: collision with root package name */
    private final int f37102b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37103c;

    /* renamed from: d  reason: collision with root package name */
    private final String f37104d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37105e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f37106f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f37101a = i10;
        this.f37102b = i11;
        this.f37103c = str;
        this.f37104d = str2;
        this.f37105e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f37101a * f10), (int) (this.f37102b * f10), this.f37103c, this.f37104d, this.f37105e);
        Bitmap bitmap = this.f37106f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f37101a, wVar.f37102b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f37106f;
    }

    public String c() {
        return this.f37104d;
    }

    public int d() {
        return this.f37102b;
    }

    public String e() {
        return this.f37103c;
    }

    public int f() {
        return this.f37101a;
    }

    public void g(Bitmap bitmap) {
        this.f37106f = bitmap;
    }
}
