package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37850a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37851b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37852c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37853d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37854e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37855f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37856g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37857h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37858i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f37859j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37860k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37861l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37857h = config;
        this.f37858i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37858i;
    }

    public Bitmap.Config c() {
        return this.f37857h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37860k;
    }

    public qa.c f() {
        return this.f37859j;
    }

    public boolean g() {
        return this.f37855f;
    }

    public boolean h() {
        return this.f37852c;
    }

    public boolean i() {
        return this.f37861l;
    }

    public boolean j() {
        return this.f37856g;
    }

    public int k() {
        return this.f37851b;
    }

    public int l() {
        return this.f37850a;
    }

    public boolean m() {
        return this.f37854e;
    }

    public boolean n() {
        return this.f37853d;
    }
}
