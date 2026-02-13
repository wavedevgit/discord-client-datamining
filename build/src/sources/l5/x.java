package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x {

    /* renamed from: a  reason: collision with root package name */
    private final int f36245a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36246b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36247c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36248d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36249e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f36250f;

    public x(int i10, int i11, String str, String str2, String str3) {
        this.f36245a = i10;
        this.f36246b = i11;
        this.f36247c = str;
        this.f36248d = str2;
        this.f36249e = str3;
    }

    public x a(float f10) {
        x xVar = new x((int) (this.f36245a * f10), (int) (this.f36246b * f10), this.f36247c, this.f36248d, this.f36249e);
        Bitmap bitmap = this.f36250f;
        if (bitmap != null) {
            xVar.g(Bitmap.createScaledBitmap(bitmap, xVar.f36245a, xVar.f36246b, true));
        }
        return xVar;
    }

    public Bitmap b() {
        return this.f36250f;
    }

    public String c() {
        return this.f36248d;
    }

    public int d() {
        return this.f36246b;
    }

    public String e() {
        return this.f36247c;
    }

    public int f() {
        return this.f36245a;
    }

    public void g(Bitmap bitmap) {
        this.f36250f = bitmap;
    }
}
