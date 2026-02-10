package ia;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import ja.d;
import java.util.ArrayList;
import java.util.List;
import p8.j;
import s8.h;
import ta.f;
import ta.k;
import ta.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements d {

    /* renamed from: e  reason: collision with root package name */
    static c f26706e = g("com.facebook.animated.gif.GifImage");

    /* renamed from: f  reason: collision with root package name */
    static c f26707f = g("com.facebook.animated.webp.WebPImage");

    /* renamed from: a  reason: collision with root package name */
    private final ja.b f26708a;

    /* renamed from: b  reason: collision with root package name */
    private final PlatformBitmapFactory f26709b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f26710c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f26711d;

    public e(ja.b bVar, PlatformBitmapFactory platformBitmapFactory, boolean z10) {
        this(bVar, platformBitmapFactory, z10, true);
    }

    private CloseableReference c(int i10, int i11, Bitmap.Config config) {
        CloseableReference d10 = this.f26709b.d(i10, i11, config);
        ((Bitmap) d10.J()).eraseColor(0);
        ((Bitmap) d10.J()).setHasAlpha(true);
        return d10;
    }

    private CloseableReference d(ha.c cVar, Bitmap.Config config, int i10) {
        CloseableReference c10 = c(cVar.getWidth(), cVar.getHeight(), config);
        new ja.d(this.f26708a.a(ha.e.b(cVar), null), this.f26710c, new a()).h(i10, (Bitmap) c10.J());
        return c10;
    }

    private List e(ha.c cVar, Bitmap.Config config) {
        ha.a a10 = this.f26708a.a(ha.e.b(cVar), null);
        ArrayList arrayList = new ArrayList(a10.a());
        ja.d dVar = new ja.d(a10, this.f26710c, new b(arrayList));
        for (int i10 = 0; i10 < a10.a(); i10++) {
            CloseableReference c10 = c(a10.getWidth(), a10.getHeight(), config);
            dVar.h(i10, (Bitmap) c10.J());
            arrayList.add(c10);
        }
        return arrayList;
    }

    private ta.e f(String str, ImageDecodeOptions imageDecodeOptions, ha.c cVar, Bitmap.Config config) {
        List list;
        int i10;
        CloseableReference closeableReference;
        CloseableReference closeableReference2 = null;
        try {
            if (imageDecodeOptions.f10470d) {
                i10 = cVar.a() - 1;
            } else {
                i10 = 0;
            }
            if (imageDecodeOptions.f10473g) {
                f U0 = f.U0(d(cVar, config, i10), n.f50739d, 0);
                CloseableReference.z(null);
                CloseableReference.I(null);
                return U0;
            }
            if (imageDecodeOptions.f10472f) {
                list = e(cVar, config);
                try {
                    closeableReference = CloseableReference.n((CloseableReference) list.get(i10));
                } catch (Throwable th2) {
                    th = th2;
                    CloseableReference.z(closeableReference2);
                    CloseableReference.I(list);
                    throw th;
                }
            } else {
                list = null;
                closeableReference = null;
            }
            try {
                if (imageDecodeOptions.f10469c && closeableReference == null) {
                    closeableReference = d(cVar, config, i10);
                }
                ta.c cVar2 = new ta.c(ha.e.f(cVar).k(closeableReference).j(i10).i(list).h(null).l(str).a(), this.f26711d);
                CloseableReference.z(closeableReference);
                CloseableReference.I(list);
                return cVar2;
            } catch (Throwable th3) {
                th = th3;
                closeableReference2 = closeableReference;
                CloseableReference.z(closeableReference2);
                CloseableReference.I(list);
                throw th;
            }
        } catch (Throwable th4) {
            th = th4;
            list = null;
        }
    }

    private static c g(String str) {
        try {
            return (c) Class.forName(str).newInstance();
        } catch (Throwable unused) {
            return null;
        }
    }

    @Override // ia.d
    public ta.e a(k kVar, ImageDecodeOptions imageDecodeOptions, Bitmap.Config config) {
        ha.c e10;
        if (f26706e != null) {
            CloseableReference n10 = kVar.n();
            j.g(n10);
            try {
                h hVar = (h) n10.J();
                if (hVar.r() != null) {
                    e10 = f26706e.d(hVar.r(), imageDecodeOptions);
                } else {
                    e10 = f26706e.e(hVar.G(), hVar.size(), imageDecodeOptions);
                }
                ta.e f10 = f(kVar.Z(), imageDecodeOptions, e10, config);
                CloseableReference.z(n10);
                return f10;
            } catch (Throwable th2) {
                CloseableReference.z(n10);
                throw th2;
            }
        }
        throw new UnsupportedOperationException("To encode animated gif please add the dependency to the animated-gif module");
    }

    @Override // ia.d
    public ta.e b(k kVar, ImageDecodeOptions imageDecodeOptions, Bitmap.Config config) {
        ha.c e10;
        if (f26707f != null) {
            CloseableReference n10 = kVar.n();
            j.g(n10);
            try {
                h hVar = (h) n10.J();
                if (hVar.r() != null) {
                    e10 = f26707f.d(hVar.r(), imageDecodeOptions);
                } else {
                    e10 = f26707f.e(hVar.G(), hVar.size(), imageDecodeOptions);
                }
                ta.e f10 = f(kVar.Z(), imageDecodeOptions, e10, config);
                CloseableReference.z(n10);
                return f10;
            } catch (Throwable th2) {
                CloseableReference.z(n10);
                throw th2;
            }
        }
        throw new UnsupportedOperationException("To encode animated webp please add the dependency to the animated-webp module");
    }

    public e(ja.b bVar, PlatformBitmapFactory platformBitmapFactory, boolean z10, boolean z11) {
        this.f26708a = bVar;
        this.f26709b = platformBitmapFactory;
        this.f26710c = z10;
        this.f26711d = z11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements d.b {
        a() {
        }

        @Override // ja.d.b
        public CloseableReference b(int i10) {
            return null;
        }

        @Override // ja.d.b
        public void a(int i10, Bitmap bitmap) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements d.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f26713a;

        b(List list) {
            this.f26713a = list;
        }

        @Override // ja.d.b
        public CloseableReference b(int i10) {
            return CloseableReference.n((CloseableReference) this.f26713a.get(i10));
        }

        @Override // ja.d.b
        public void a(int i10, Bitmap bitmap) {
        }
    }
}
