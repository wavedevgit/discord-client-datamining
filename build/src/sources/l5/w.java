package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f36570a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36571b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36572c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36573d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36574e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f36575f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f36570a = i10;
        this.f36571b = i11;
        this.f36572c = str;
        this.f36573d = str2;
        this.f36574e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f36570a * f10), (int) (this.f36571b * f10), this.f36572c, this.f36573d, this.f36574e);
        Bitmap bitmap = this.f36575f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f36570a, wVar.f36571b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f36575f;
    }

    public String c() {
        return this.f36573d;
    }

    public int d() {
        return this.f36571b;
    }

    public String e() {
        return this.f36572c;
    }

    public int f() {
        return this.f36570a;
    }

    public void g(Bitmap bitmap) {
        this.f36575f = bitmap;
    }
}
