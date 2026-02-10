package na;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37002a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37003b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37004c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37005d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37006e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37007f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37008g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37009h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37010i;

    /* renamed from: j  reason: collision with root package name */
    private ra.c f37011j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37012k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37013l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37009h = config;
        this.f37010i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37010i;
    }

    public Bitmap.Config c() {
        return this.f37009h;
    }

    public bb.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37012k;
    }

    public ra.c f() {
        return this.f37011j;
    }

    public boolean g() {
        return this.f37007f;
    }

    public boolean h() {
        return this.f37004c;
    }

    public boolean i() {
        return this.f37013l;
    }

    public boolean j() {
        return this.f37008g;
    }

    public int k() {
        return this.f37003b;
    }

    public int l() {
        return this.f37002a;
    }

    public boolean m() {
        return this.f37006e;
    }

    public boolean n() {
        return this.f37005d;
    }
}
