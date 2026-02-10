package r5;

import android.graphics.PointF;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    public String f47675a;

    /* renamed from: b  reason: collision with root package name */
    public String f47676b;

    /* renamed from: c  reason: collision with root package name */
    public float f47677c;

    /* renamed from: d  reason: collision with root package name */
    public a f47678d;

    /* renamed from: e  reason: collision with root package name */
    public int f47679e;

    /* renamed from: f  reason: collision with root package name */
    public float f47680f;

    /* renamed from: g  reason: collision with root package name */
    public float f47681g;

    /* renamed from: h  reason: collision with root package name */
    public int f47682h;

    /* renamed from: i  reason: collision with root package name */
    public int f47683i;

    /* renamed from: j  reason: collision with root package name */
    public float f47684j;

    /* renamed from: k  reason: collision with root package name */
    public boolean f47685k;

    /* renamed from: l  reason: collision with root package name */
    public PointF f47686l;

    /* renamed from: m  reason: collision with root package name */
    public PointF f47687m;

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
        this.f47675a = str;
        this.f47676b = str2;
        this.f47677c = f10;
        this.f47678d = aVar;
        this.f47679e = i10;
        this.f47680f = f11;
        this.f47681g = f12;
        this.f47682h = i11;
        this.f47683i = i12;
        this.f47684j = f13;
        this.f47685k = z10;
        this.f47686l = pointF;
        this.f47687m = pointF2;
    }

    public int hashCode() {
        int hashCode = (((((int) ((((this.f47675a.hashCode() * 31) + this.f47676b.hashCode()) * 31) + this.f47677c)) * 31) + this.f47678d.ordinal()) * 31) + this.f47679e;
        long floatToRawIntBits = Float.floatToRawIntBits(this.f47680f);
        return (((hashCode * 31) + ((int) (floatToRawIntBits ^ (floatToRawIntBits >>> 32)))) * 31) + this.f47682h;
    }

    public b() {
    }
}
