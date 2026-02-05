package q5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f47461a;

    /* renamed from: b  reason: collision with root package name */
    public String f47462b;

    /* renamed from: c  reason: collision with root package name */
    public float f47463c;

    /* renamed from: d  reason: collision with root package name */
    public a f47464d;

    /* renamed from: e  reason: collision with root package name */
    public int f47465e;

    /* renamed from: f  reason: collision with root package name */
    public float f47466f;

    /* renamed from: g  reason: collision with root package name */
    public float f47467g;

    /* renamed from: h  reason: collision with root package name */
    public int f47468h;

    /* renamed from: i  reason: collision with root package name */
    public int f47469i;

    /* renamed from: j  reason: collision with root package name */
    public float f47470j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f47471k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f47472l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f47473m;

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
        this.f47461a = str;
        this.f47462b = str2;
        this.f47463c = f10;
        this.f47464d = aVar;
        this.f47465e = i10;
        this.f47466f = f11;
        this.f47467g = f12;
        this.f47468h = i11;
        this.f47469i = i12;
        this.f47470j = f13;
        this.f47471k = z10;
        this.f47472l = pointF;
        this.f47473m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f47461a.hashCode() * 31) + this.f47462b.hashCode()) * 31) + this.f47463c)) * 31) + this.f47464d.ordinal()) * 31) + this.f47465e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f47466f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f47468h;
    }

    public b() {
    }
}
