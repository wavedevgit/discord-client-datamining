package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37647a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37648b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37649c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37650d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37651e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37652f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37653g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37654h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37655i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f37656j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37657k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37658l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37654h = config;
        this.f37655i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37655i;
    }

    public Bitmap.Config c() {
        return this.f37654h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37657k;
    }

    public qa.c f() {
        return this.f37656j;
    }

    public boolean g() {
        return this.f37652f;
    }

    public boolean h() {
        return this.f37649c;
    }

    public boolean i() {
        return this.f37658l;
    }

    public boolean j() {
        return this.f37653g;
    }

    public int k() {
        return this.f37648b;
    }

    public int l() {
        return this.f37647a;
    }

    public boolean m() {
        return this.f37651e;
    }

    public boolean n() {
        return this.f37650d;
    }
}
