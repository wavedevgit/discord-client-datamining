package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f35938a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35939b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35940c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35941d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35942e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f35943f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f35938a = i10;
        this.f35939b = i11;
        this.f35940c = str;
        this.f35941d = str2;
        this.f35942e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f35938a * f10), (int) (this.f35939b * f10), this.f35940c, this.f35941d, this.f35942e);
        Bitmap bitmap = this.f35943f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f35938a, wVar.f35939b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f35943f;
    }

    public String c() {
        return this.f35941d;
    }

    public int d() {
        return this.f35939b;
    }

    public String e() {
        return this.f35940c;
    }

    public int f() {
        return this.f35938a;
    }

    public void g(Bitmap bitmap) {
        this.f35943f = bitmap;
    }
}
