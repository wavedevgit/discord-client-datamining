package l5;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w {

    /* renamed from: a  reason: collision with root package name */
    private final int f36497a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36498b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36499c;

    /* renamed from: d  reason: collision with root package name */
    private final String f36500d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36501e;

    /* renamed from: f  reason: collision with root package name */
    private Bitmap f36502f;

    public w(int i10, int i11, String str, String str2, String str3) {
        this.f36497a = i10;
        this.f36498b = i11;
        this.f36499c = str;
        this.f36500d = str2;
        this.f36501e = str3;
    }

    public w a(float f10) {
        w wVar = new w((int) (this.f36497a * f10), (int) (this.f36498b * f10), this.f36499c, this.f36500d, this.f36501e);
        Bitmap bitmap = this.f36502f;
        if (bitmap != null) {
            wVar.g(Bitmap.createScaledBitmap(bitmap, wVar.f36497a, wVar.f36498b, true));
        }
        return wVar;
    }

    public Bitmap b() {
        return this.f36502f;
    }

    public String c() {
        return this.f36500d;
    }

    public int d() {
        return this.f36498b;
    }

    public String e() {
        return this.f36499c;
    }

    public int f() {
        return this.f36497a;
    }

    public void g(Bitmap bitmap) {
        this.f36502f = bitmap;
    }
}
