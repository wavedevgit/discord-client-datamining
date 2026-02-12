package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x {

    /* renamed from: a  reason: collision with root package name */
    private final int f35677a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35678b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35679c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35680d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35681e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f35682f;

    public x(int i10, int i11, String str, String str2, String str3) {
        this.f35677a = i10;
        this.f35678b = i11;
        this.f35679c = str;
        this.f35680d = str2;
        this.f35681e = str3;
    }

    public x a(float f10) {
        x xVar = new x((int) (this.f35677a * f10), (int) (this.f35678b * f10), this.f35679c, this.f35680d, this.f35681e);
        Bitmap bitmap = this.f35682f;
        if (bitmap != null) {
            xVar.g(Bitmap.createScaledBitmap(bitmap, xVar.f35677a, xVar.f35678b, true));
        }
        return xVar;
    }

    public Bitmap b() {
        return this.f35682f;
    }

    public String c() {
        return this.f35680d;
    }

    public int d() {
        return this.f35678b;
    }

    public String e() {
        return this.f35679c;
    }

    public int f() {
        return this.f35677a;
    }

    public void g(Bitmap bitmap) {
        this.f35682f = bitmap;
    }
}
