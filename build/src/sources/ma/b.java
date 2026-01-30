package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37870a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37871b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37872c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37873d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37874e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37875f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37876g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37877h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37878i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f37879j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37880k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37881l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37877h = config;
        this.f37878i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37878i;
    }

    public Bitmap.Config c() {
        return this.f37877h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37880k;
    }

    public qa.c f() {
        return this.f37879j;
    }

    public boolean g() {
        return this.f37875f;
    }

    public boolean h() {
        return this.f37872c;
    }

    public boolean i() {
        return this.f37881l;
    }

    public boolean j() {
        return this.f37876g;
    }

    public int k() {
        return this.f37871b;
    }

    public int l() {
        return this.f37870a;
    }

    public boolean m() {
        return this.f37874e;
    }

    public boolean n() {
        return this.f37873d;
    }
}
