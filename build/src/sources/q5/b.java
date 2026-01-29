package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f46976a;

    /* renamed from: b  reason: collision with root package name */
    public String f46977b;

    /* renamed from: c  reason: collision with root package name */
    public float f46978c;

    /* renamed from: d  reason: collision with root package name */
    public a f46979d;

    /* renamed from: e  reason: collision with root package name */
    public int f46980e;

    /* renamed from: f  reason: collision with root package name */
    public float f46981f;

    /* renamed from: g  reason: collision with root package name */
    public float f46982g;

    /* renamed from: h  reason: collision with root package name */
    public int f46983h;

    /* renamed from: i  reason: collision with root package name */
    public int f46984i;

    /* renamed from: j  reason: collision with root package name */
    public float f46985j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f46986k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f46987l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f46988m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        LEFT_ALIGN,
        RIGHT_ALIGN,
        CENTER
    }

    public b(String str, String str2, float f10, a aVar, int i10, float f11, float f12, int i11, int i12, float f13, boolean z10, PointF pointF, PointF pointF2) {
        a(str, str2, f10, aVar, i10, f11, f12, i11, i12, f13, z10, pointF, pointF2);
    }

    public void a(String str, String str2, float f10, a aVar, int i10, float f11, float f12, int i11, int i12, float f13, boolean z10, PointF pointF, PointF pointF2) {
        this.f46976a = str;
        this.f46977b = str2;
        this.f46978c = f10;
        this.f46979d = aVar;
        this.f46980e = i10;
        this.f46981f = f11;
        this.f46982g = f12;
        this.f46983h = i11;
        this.f46984i = i12;
        this.f46985j = f13;
        this.f46986k = z10;
        this.f46987l = pointF;
        this.f46988m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f46976a.hashCode() * 31) + this.f46977b.hashCode()) * 31) + this.f46978c)) * 31) + this.f46979d.ordinal()) * 31) + this.f46980e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f46981f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f46983h;
    }

    public b() {
    }
}
