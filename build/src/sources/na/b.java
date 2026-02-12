package na;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37003a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37004b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37005c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37006d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37007e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37008f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37009g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37010h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37011i;

    /* renamed from: j  reason: collision with root package name */
    private ra.c f37012j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37013k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37014l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37010h = config;
        this.f37011i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37011i;
    }

    public Bitmap.Config c() {
        return this.f37010h;
    }

    public bb.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37013k;
    }

    public ra.c f() {
        return this.f37012j;
    }

    public boolean g() {
        return this.f37008f;
    }

    public boolean h() {
        return this.f37005c;
    }

    public boolean i() {
        return this.f37014l;
    }

    public boolean j() {
        return this.f37009g;
    }

    public int k() {
        return this.f37004b;
    }

    public int l() {
        return this.f37003a;
    }

    public boolean m() {
        return this.f37007e;
    }

    public boolean n() {
        return this.f37006d;
    }
}
