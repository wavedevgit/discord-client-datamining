package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x {

    /* renamed from: a  reason: collision with root package name */
    private final int f35779a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35780b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35781c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35782d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35783e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f35784f;

    public x(int i10, int i11, String str, String str2, String str3) {
        this.f35779a = i10;
        this.f35780b = i11;
        this.f35781c = str;
        this.f35782d = str2;
        this.f35783e = str3;
    }

    public x a(float f10) {
        x xVar = new x((int) (this.f35779a * f10), (int) (this.f35780b * f10), this.f35781c, this.f35782d, this.f35783e);
        Bitmap bitmap = this.f35784f;
        if (bitmap != null) {
            xVar.g(Bitmap.createScaledBitmap(bitmap, xVar.f35779a, xVar.f35780b, true));
        }
        return xVar;
    }

    public Bitmap b() {
        return this.f35784f;
    }

    public String c() {
        return this.f35782d;
    }

    public int d() {
        return this.f35780b;
    }

    public String e() {
        return this.f35781c;
    }

    public int f() {
        return this.f35779a;
    }

    public void g(Bitmap bitmap) {
        this.f35784f = bitmap;
    }
}
