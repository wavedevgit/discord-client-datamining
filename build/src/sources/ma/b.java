package ma;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f36891a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f36892b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36893c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f36894d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f36895e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f36896f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36897g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f36898h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f36899i;

    /* renamed from: j  reason: collision with root package name */
    private qa.c f36900j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f36901k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36902l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f36898h = config;
        this.f36899i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f36899i;
    }

    public Bitmap.Config c() {
        return this.f36898h;
    }

    public ab.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f36901k;
    }

    public qa.c f() {
        return this.f36900j;
    }

    public boolean g() {
        return this.f36896f;
    }

    public boolean h() {
        return this.f36893c;
    }

    public boolean i() {
        return this.f36902l;
    }

    public boolean j() {
        return this.f36897g;
    }

    public int k() {
        return this.f36892b;
    }

    public int l() {
        return this.f36891a;
    }

    public boolean m() {
        return this.f36895e;
    }

    public boolean n() {
        return this.f36894d;
    }
}
