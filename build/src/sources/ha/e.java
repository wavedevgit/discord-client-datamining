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
    static c f27417e = g("com.facebook.animated.gif.GifImage");

    /* renamed from: f  reason: collision with root package name */
    static c f27418f = g("com.facebook.animated.webp.WebPImage");

    /* renamed from: a  reason: collision with root package name */
    private final ia.b f27419a;

    /* renamed from: b  reason: collision with root package name */
    private final PlatformBitmapFactory f27420b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f27421c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f27422d;

    public e(ia.b bVar, PlatformBitmapFactory platformBitmapFactory, boolean z10) {
        this(bVar, platformBitmapFactory, z10, true);
    }

    private CloseableReference c(int i10, int i11, Bitmap.Config config) {
        CloseableReference d10 = this.f27420b.d(i10, i11, config);
        ((Bitmap) d10.D0()).eraseColor(0);
        ((Bitmap) d10.D0()).setHasAlpha(true);
        return d10;
    }

    private CloseableReference d(ga.c cVar, Bitmap.Config config, int i10) {
        CloseableReference c10 = c(cVar.getWidth(), cVar.getHeight(), config);
        new ia.d(this.f27419a.a(ga.e.b(cVar), null), this.f27421c, new a()).h(i10, (Bitmap) c10.D0());
        return c10;
    }

    private List e(ga.c cVar, Bitmap.Config config) {
        ga.a a10 = this.f27419a.a(ga.e.b(cVar), null);
        ArrayList arrayList = new ArrayList(a10.a());
        ia.d dVar = new ia.d(a10, this.f27421c, new b(arrayList));
        for (int i10 = 0; i10 < a10.a(); i10++) {
            CloseableReference c10 = c(a10.getWidth(), a10.getHeight(), config);
            dVar.h(i10, (Bitmap) c10.D0());
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
            if (imageDecodeOptions.f11449d) {
                i10 = cVar.a() - 1;
            } else {
                i10 = 0;
            }
            if (imageDecodeOptions.f11452g) {
                f j02 = f.j0(d(cVar, config, i10), n.f48905d, 0);
                CloseableReference.N(null);
                CloseableReference.V(null);
                return j02;
            }
            if (imageDecodeOptions.f11451f) {
                list = e(cVar, config);
                try {
                    closeableReference = CloseableReference.E((CloseableReference) list.get(i10));
                } catch (Throwable th2) {
                    th = th2;
                    CloseableReference.N(closeableReference2);
                    CloseableReference.V(list);
                    throw th;
                }
            } else {
                list = null;
                closeableReference = null;
            }
            try {
                if (imageDecodeOptions.f11448c && closeableReference == null) {
                    closeableReference = d(cVar, config, i10);
                }
                sa.c cVar2 = new sa.c(ga.e.f(cVar).k(closeableReference).j(i10).i(list).h(null).l(str).a(), this.f27422d);
                CloseableReference.N(closeableReference);
                CloseableReference.V(list);
                return cVar2;
            } catch (Throwable th3) {
                th = th3;
                closeableReference2 = closeableReference;
                CloseableReference.N(closeableReference2);
                CloseableReference.V(list);
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
        if (f27417e != null) {
            CloseableReference x10 = kVar.x();
            j.g(x10);
            try {
                h hVar = (h) x10.D0();
                if (hVar.p() != null) {
                    e10 = f27417e.d(hVar.p(), imageDecodeOptions);
                } else {
                    e10 = f27417e.e(hVar.C(), hVar.size(), imageDecodeOptions);
                }
                sa.e f10 = f(kVar.D0(), imageDecodeOptions, e10, config);
                CloseableReference.N(x10);
                return f10;
            } catch (Throwable th2) {
                CloseableReference.N(x10);
                throw th2;
            }
        }
        throw new UnsupportedOperationException("To encode animated gif please add the dependency to the animated-gif module");
    }

    @Override // ha.d
    public sa.e b(k kVar, ImageDecodeOptions imageDecodeOptions, Bitmap.Config config) {
        ga.c e10;
        if (f27418f != null) {
            CloseableReference x10 = kVar.x();
            j.g(x10);
            try {
                h hVar = (h) x10.D0();
                if (hVar.p() != null) {
                    e10 = f27418f.d(hVar.p(), imageDecodeOptions);
                } else {
                    e10 = f27418f.e(hVar.C(), hVar.size(), imageDecodeOptions);
                }
                sa.e f10 = f(kVar.D0(), imageDecodeOptions, e10, config);
                CloseableReference.N(x10);
                return f10;
            } catch (Throwable th2) {
                CloseableReference.N(x10);
                throw th2;
            }
        }
        throw new UnsupportedOperationException("To encode animated webp please add the dependency to the animated-webp module");
    }

    public e(ia.b bVar, PlatformBitmapFactory platformBitmapFactory, boolean z10, boolean z11) {
        this.f27419a = bVar;
        this.f27420b = platformBitmapFactory;
        this.f27421c = z10;
        this.f27422d = z11;
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
        final /* synthetic */ List f27424a;

        b(List list) {
            this.f27424a = list;
        }

        @Override // ia.d.b
        public CloseableReference b(int i10) {
            return CloseableReference.E((CloseableReference) this.f27424a.get(i10));
        }

        @Override // ia.d.b
        public void a(int i10, Bitmap bitmap) {
        }
    }
}
