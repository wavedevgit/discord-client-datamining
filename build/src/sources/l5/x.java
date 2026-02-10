package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class x {

    /* renamed from: a  reason: collision with root package name */
    private final int f35676a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35677b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35678c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35679d;

    /* renamed from: e  reason: collision with root package name */
    private final String f35680e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f35681f;

    public x(int i10, int i11, String str, String str2, String str3) {
        this.f35676a = i10;
        this.f35677b = i11;
        this.f35678c = str;
        this.f35679d = str2;
        this.f35680e = str3;
    }

    public x a(float f10) {
        x xVar = new x((int) (this.f35676a * f10), (int) (this.f35677b * f10), this.f35678c, this.f35679d, this.f35680e);
        Bitmap bitmap = this.f35681f;
        if (bitmap != null) {
            xVar.g(Bitmap.createScaledBitmap(bitmap, xVar.f35676a, xVar.f35677b, true));
        }
        return xVar;
    }

    public Bitmap b() {
        return this.f35681f;
    }

    public String c() {
        return this.f35679d;
    }

    public int d() {
        return this.f35677b;
    }

    public String e() {
        return this.f35678c;
    }

    public int f() {
        return this.f35676a;
    }

    public void g(Bitmap bitmap) {
        this.f35681f = bitmap;
    }
}
