package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37854a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37855b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37856c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37857d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37858e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37859f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37860g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37861h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37862i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f37863j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37864k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37865l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37861h = config;
        this.f37862i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37862i;
    }

    public Bitmap.Config c() {
        return this.f37861h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37864k;
    }

    public qa.c f() {
        return this.f37863j;
    }

    public boolean g() {
        return this.f37859f;
    }

    public boolean h() {
        return this.f37856c;
    }

    public boolean i() {
        return this.f37865l;
    }

    public boolean j() {
        return this.f37860g;
    }

    public int k() {
        return this.f37855b;
    }

    public int l() {
        return this.f37854a;
    }

    public boolean m() {
        return this.f37858e;
    }

    public boolean n() {
        return this.f37857d;
    }
}
