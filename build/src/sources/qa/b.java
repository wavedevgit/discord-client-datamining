package qa;

import android.graphics.ColorSpace;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import java.io.InputStream;
import java.util.Map;
import o8.j;
import o8.m;
import sa.k;
import sa.n;
import sa.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f47517a;

    /* renamed from: b  reason: collision with root package name */
    private final c f47518b;

    /* renamed from: c  reason: collision with root package name */
    private final c f47519c;

    /* renamed from: d  reason: collision with root package name */
    private final wa.d f47520d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f47521e;

    /* renamed from: f  reason: collision with root package name */
    private final c f47522f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f47523g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements c {
        a() {
        }

        @Override // qa.c
        public sa.e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            ColorSpace colorSpace;
            fa.c L = kVar.L();
            if (((Boolean) b.this.f47521e.get()).booleanValue()) {
                colorSpace = imageDecodeOptions.f10438k;
                if (colorSpace == null) {
                    colorSpace = kVar.E();
                }
            } else {
                colorSpace = imageDecodeOptions.f10438k;
            }
            ColorSpace colorSpace2 = colorSpace;
            if (L == fa.b.f22696b) {
                return b.this.f(kVar, i10, oVar, imageDecodeOptions, colorSpace2);
            }
            if (L == fa.b.f22698d) {
                return b.this.e(kVar, i10, oVar, imageDecodeOptions);
            }
            if (L == fa.b.f22705k) {
                return b.this.d(kVar, i10, oVar, imageDecodeOptions);
            }
            if (L == fa.b.f22708n) {
                return b.this.h(kVar, i10, oVar, imageDecodeOptions);
            }
            if (L != fa.c.f22712d) {
                return b.this.g(kVar, imageDecodeOptions);
            }
            throw new qa.a("unknown image format", kVar);
        }
    }

    public b(c cVar, c cVar2, c cVar3, wa.d dVar) {
        this(cVar, cVar2, cVar3, dVar, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public sa.e h(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar = this.f47519c;
        if (cVar != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return null;
    }

    @Override // qa.c
    public sa.e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        InputStream N;
        c cVar;
        c cVar2 = imageDecodeOptions.f10437j;
        if (cVar2 != null) {
            return cVar2.a(kVar, i10, oVar, imageDecodeOptions);
        }
        fa.c L = kVar.L();
        if ((L == null || L == fa.c.f22712d) && (N = kVar.N()) != null) {
            L = fa.e.d(N);
            kVar.B1(L);
        }
        Map map = this.f47523g;
        if (map != null && (cVar = (c) map.get(L)) != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return this.f47522f.a(kVar, i10, oVar, imageDecodeOptions);
    }

    public sa.e d(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar;
        if (!imageDecodeOptions.f10434g && (cVar = this.f47518b) != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return g(kVar, imageDecodeOptions);
    }

    public sa.e e(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar;
        if (kVar.getWidth() != -1 && kVar.getHeight() != -1) {
            if (!imageDecodeOptions.f10434g && (cVar = this.f47517a) != null) {
                return cVar.a(kVar, i10, oVar, imageDecodeOptions);
            }
            return g(kVar, imageDecodeOptions);
        }
        throw new qa.a("image width or height is incorrect", kVar);
    }

    public sa.f f(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions, ColorSpace colorSpace) {
        CloseableReference b10 = this.f47520d.b(kVar, imageDecodeOptions.f10435h, null, i10, colorSpace);
        try {
            ab.b.a(null, b10);
            j.g(b10);
            sa.f L0 = sa.f.L0(b10, oVar, kVar.q1(), kVar.b1());
            L0.y("is_rounded", false);
            return L0;
        } finally {
            CloseableReference.N(b10);
        }
    }

    public sa.f g(k kVar, ImageDecodeOptions imageDecodeOptions) {
        CloseableReference a10 = this.f47520d.a(kVar, imageDecodeOptions.f10435h, null, imageDecodeOptions.f10438k);
        try {
            ab.b.a(null, a10);
            j.g(a10);
            sa.f L0 = sa.f.L0(a10, n.f49515d, kVar.q1(), kVar.b1());
            L0.y("is_rounded", false);
            return L0;
        } finally {
            CloseableReference.N(a10);
        }
    }

    public b(c cVar, c cVar2, c cVar3, wa.d dVar, Map map) {
        this(cVar, cVar2, cVar3, dVar, map, m.f42334b);
    }

    public b(c cVar, c cVar2, c cVar3, wa.d dVar, Map map, Supplier supplier) {
        this.f47522f = new a();
        this.f47517a = cVar;
        this.f47518b = cVar2;
        this.f47519c = cVar3;
        this.f47520d = dVar;
        this.f47523g = map;
        this.f47521e = supplier;
    }
}
