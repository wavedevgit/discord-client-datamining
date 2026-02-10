package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f46129a;

    /* renamed from: b  reason: collision with root package name */
    public String f46130b;

    /* renamed from: c  reason: collision with root package name */
    public float f46131c;

    /* renamed from: d  reason: collision with root package name */
    public a f46132d;

    /* renamed from: e  reason: collision with root package name */
    public int f46133e;

    /* renamed from: f  reason: collision with root package name */
    public float f46134f;

    /* renamed from: g  reason: collision with root package name */
    public float f46135g;

    /* renamed from: h  reason: collision with root package name */
    public int f46136h;

    /* renamed from: i  reason: collision with root package name */
    public int f46137i;

    /* renamed from: j  reason: collision with root package name */
    public float f46138j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f46139k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f46140l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f46141m;

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
        this.f46129a = str;
        this.f46130b = str2;
        this.f46131c = f10;
        this.f46132d = aVar;
        this.f46133e = i10;
        this.f46134f = f11;
        this.f46135g = f12;
        this.f46136h = i11;
        this.f46137i = i12;
        this.f46138j = f13;
        this.f46139k = z10;
        this.f46140l = pointF;
        this.f46141m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f46129a.hashCode() * 31) + this.f46130b.hashCode()) * 31) + this.f46131c)) * 31) + this.f46132d.ordinal()) * 31) + this.f46133e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f46134f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f46136h;
    }

    public b() {
    }
}
