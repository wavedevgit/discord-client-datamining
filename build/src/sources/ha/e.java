package ha;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import ia.d;
import java.util.ArrayList;
import java.util.List;
import o8.j;
import r8.h;
import sa.f;
import sa.k;
import sa.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements d {

    /* renamed from: e  reason: collision with root package name */
    static c f25716e = g("com.facebook.animated.gif.GifImage");

    /* renamed from: f  reason: collision with root package name */
    static c f25717f = g("com.facebook.animated.webp.WebPImage");

    /* renamed from: a  reason: collision with root package name */
    private final ia.b f25718a;

    /* renamed from: b  reason: collision with root package name */
    private final PlatformBitmapFactory f25719b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f25720c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25721d;

    public e(ia.b bVar, PlatformBitmapFactory platformBitmapFactory, boolean z10) {
        this(bVar, platformBitmapFactory, z10, true);
    }

    private CloseableReference c(int i10, int i11, Bitmap.Config config) {
        CloseableReference d10 = this.f25719b.d(i10, i11, config);
        ((Bitmap) d10.E0()).eraseColor(0);
        ((Bitmap) d10.E0()).setHasAlpha(true);
        return d10;
    }

    private CloseableReference d(ga.c cVar, Bitmap.Config config, int i10) {
        CloseableReference c10 = c(cVar.getWidth(), cVar.getHeight(), config);
        new ia.d(this.f25718a.a(ga.e.b(cVar), null), this.f25720c, new a()).h(i10, (Bitmap) c10.E0());
        return c10;
    }

    private List e(ga.c cVar, Bitmap.Config config) {
        ga.a a10 = this.f25718a.a(ga.e.b(cVar), null);
        ArrayList arrayList = new ArrayList(a10.a());
        ia.d dVar = new ia.d(a10, this.f25720c, new b(arrayList));
        for (int i10 = 0; i10 < a10.a(); i10++) {
            CloseableReference c10 = c(a10.getWidth(), a10.getHeight(), config);
            dVar.h(i10, (Bitmap) c10.E0());
            arrayList.add(c10);
        }
        return arrayList;
    }

    private sa.e f(String str, ImageDecodeOptions imageDecodeOptions, ga.c cVar, Bitmap.Config config) {
        List list;
        int i10;
        CloseableReference closeableReference;
        CloseableReference closeableReference2 = null;
        try {
            if (imageDecodeOptions.f10431d) {
                i10 = cVar.a() - 1;
            } else {
                i10 = 0;
            }
            if (imageDecodeOptions.f10434g) {
                f k02 = f.k0(d(cVar, config, i10), n.f49515d, 0);
                CloseableReference.N(null);
                CloseableReference.W(null);
                return k02;
            }
            if (imageDecodeOptions.f10433f) {
                list = e(cVar, config);
                try {
                    closeableReference = CloseableReference.E((CloseableReference) list.get(i10));
                } catch (Throwable th2) {
                    th = th2;
                    CloseableReference.N(closeableReference2);
                    CloseableReference.W(list);
                    throw th;
                }
            } else {
                list = null;
                closeableReference = null;
            }
            try {
                if (imageDecodeOptions.f10430c && closeableReference == null) {
                    closeableReference = d(cVar, config, i10);
                }
                sa.c cVar2 = new sa.c(ga.e.f(cVar).k(closeableReference).j(i10).i(list).h(null).l(str).a(), this.f25721d);
                CloseableReference.N(closeableReference);
                CloseableReference.W(list);
                return cVar2;
            } catch (Throwable th3) {
                th = th3;
                closeableReference2 = closeableReference;
                CloseableReference.N(closeableReference2);
                CloseableReference.W(list);
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

    @Override // ha.d
    public sa.e a(k kVar, ImageDecodeOptions imageDecodeOptions, Bitmap.Config config) {
        ga.c e10;
        if (f25716e != null) {
            CloseableReference o10 = kVar.o();
            j.g(o10);
            try {
                h hVar = (h) o10.E0();
                if (hVar.q() != null) {
                    e10 = f25716e.d(hVar.q(), imageDecodeOptions);
                } else {
                    e10 = f25716e.e(hVar.C(), hVar.size(), imageDecodeOptions);
                }
                sa.e f10 = f(kVar.D0(), imageDecodeOptions, e10, config);
                CloseableReference.N(o10);
                return f10;
            } catch (Throwable th2) {
                CloseableReference.N(o10);
                throw th2;
            }
        }
        throw new UnsupportedOperationException("To encode animated gif please add the dependency to the animated-gif module");
    }

    @Override // ha.d
    public sa.e b(k kVar, ImageDecodeOptions imageDecodeOptions, Bitmap.Config config) {
        ga.c e10;
        if (f25717f != null) {
            CloseableReference o10 = kVar.o();
            j.g(o10);
            try {
                h hVar = (h) o10.E0();
                if (hVar.q() != null) {
                    e10 = f25717f.d(hVar.q(), imageDecodeOptions);
                } else {
                    e10 = f25717f.e(hVar.C(), hVar.size(), imageDecodeOptions);
                }
                sa.e f10 = f(kVar.D0(), imageDecodeOptions, e10, config);
                CloseableReference.N(o10);
                return f10;
            } catch (Throwable th2) {
                CloseableReference.N(o10);
                throw th2;
            }
        }
        throw new UnsupportedOperationException("To encode animated webp please add the dependency to the animated-webp module");
    }

    public e(ia.b bVar, PlatformBitmapFactory platformBitmapFactory, boolean z10, boolean z11) {
        this.f25718a = bVar;
        this.f25719b = platformBitmapFactory;
        this.f25720c = z10;
        this.f25721d = z11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements d.b {
        a() {
        }

        @Override // ia.d.b
        public CloseableReference b(int i10) {
            return null;
        }

        @Override // ia.d.b
        public void a(int i10, Bitmap bitmap) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements d.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f25723a;

        b(List list) {
            this.f25723a = list;
        }

        @Override // ia.d.b
        public CloseableReference b(int i10) {
            return CloseableReference.E((CloseableReference) this.f25723a.get(i10));
        }

        @Override // ia.d.b
        public void a(int i10, Bitmap bitmap) {
        }
    }
}
