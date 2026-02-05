package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37309a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37310b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37311c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37312d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37313e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37314f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37315g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37316h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37317i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f37318j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37319k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37320l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37316h = config;
        this.f37317i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37317i;
    }

    public Bitmap.Config c() {
        return this.f37316h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37319k;
    }

    public qa.c f() {
        return this.f37318j;
    }

    public boolean g() {
        return this.f37314f;
    }

    public boolean h() {
        return this.f37311c;
    }

    public boolean i() {
        return this.f37320l;
    }

    public boolean j() {
        return this.f37315g;
    }

    public int k() {
        return this.f37310b;
    }

    public int l() {
        return this.f37309a;
    }

    public boolean m() {
        return this.f37313e;
    }

    public boolean n() {
        return this.f37312d;
    }
}
