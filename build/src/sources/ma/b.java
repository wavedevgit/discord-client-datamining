package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f36939a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f36940b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36941c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36942d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36943e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f36944f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36945g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f36946h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f36947i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f36948j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f36949k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36950l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f36946h = config;
        this.f36947i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f36947i;
    }

    public Bitmap.Config c() {
        return this.f36946h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f36949k;
    }

    public qa.c f() {
        return this.f36948j;
    }

    public boolean g() {
        return this.f36944f;
    }

    public boolean h() {
        return this.f36941c;
    }

    public boolean i() {
        return this.f36950l;
    }

    public boolean j() {
        return this.f36945g;
    }

    public int k() {
        return this.f36940b;
    }

    public int l() {
        return this.f36939a;
    }

    public boolean m() {
        return this.f36943e;
    }

    public boolean n() {
        return this.f36942d;
    }
}
