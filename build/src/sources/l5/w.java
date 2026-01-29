package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f36971a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36972b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36973c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36974d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36975e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f36976f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f36971a = i10;
        this.f36972b = i11;
        this.f36973c = str;
        this.f36974d = str2;
        this.f36975e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f36971a * f10), (int) (this.f36972b * f10), this.f36973c, this.f36974d, this.f36975e);
        Bitmap bitmap = this.f36976f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f36971a, wVar.f36972b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f36976f;
    }

    public String c() {
        return this.f36974d;
    }

    public int d() {
        return this.f36972b;
    }

    public String e() {
        return this.f36973c;
    }

    public int f() {
        return this.f36971a;
    }

    public void g(Bitmap bitmap) {
        this.f36976f = bitmap;
    }
}
