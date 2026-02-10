package na;

import android.graphics.Bitmap;
import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f37998a = 100;

    /* renamed from: b  reason: collision with root package name */
    private int f37999b = Integer.MAX_VALUE;

    /* renamed from: c  reason: collision with root package name */
    private boolean f38000c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f38001d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f38002e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f38003f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f38004g;

    /* renamed from: h  reason: collision with root package name */
    private Bitmap.Config f38005h;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap.Config f38006i;

    /* renamed from: j  reason: collision with root package name */
    private ra.c f38007j;

    /* renamed from: k  reason: collision with root package name */
    private ColorSpace f38008k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f38009l;

    public b() {
        Bitmap.Config config = Bitmap.Config.ARGB_8888;
        this.f38005h = config;
        this.f38006i = config;
    }

    public ImageDecodeOptions a() {
        return new ImageDecodeOptions(this);
    }

    public Bitmap.Config b() {
        return this.f38006i;
    }

    public Bitmap.Config c() {
        return this.f38005h;
    }

    public bb.a d() {
        return null;
    }

    public ColorSpace e() {
        return this.f38008k;
    }

    public ra.c f() {
        return this.f38007j;
    }

    public boolean g() {
        return this.f38003f;
    }

    public boolean h() {
        return this.f38000c;
    }

    public boolean i() {
        return this.f38009l;
    }

    public boolean j() {
        return this.f38004g;
    }

    public int k() {
        return this.f37999b;
    }

    public int l() {
        return this.f37998a;
    }

    public boolean m() {
        return this.f38002e;
    }

    public boolean n() {
        return this.f38001d;
    }
}
