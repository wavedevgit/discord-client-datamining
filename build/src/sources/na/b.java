package na;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37571a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37572b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f37573c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f37574d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f37575e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f37576f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37577g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f37578h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f37579i;

    /* renamed from: j  reason: collision with root package name */
    private ra.c f37580j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f37581k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37582l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f37578h = config;
        this.f37579i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f37579i;
    }

    public Bitmap.Config c() {
        return this.f37578h;
    }

    public bb.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f37581k;
    }

    public ra.c f() {
        return this.f37580j;
    }

    public boolean g() {
        return this.f37576f;
    }

    public boolean h() {
        return this.f37573c;
    }

    public boolean i() {
        return this.f37582l;
    }

    public boolean j() {
        return this.f37577g;
    }

    public int k() {
        return this.f37572b;
    }

    public int l() {
        return this.f37571a;
    }

    public boolean m() {
        return this.f37575e;
    }

    public boolean n() {
        return this.f37574d;
    }
}
