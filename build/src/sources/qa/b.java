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
    private final c f46613a;

    /* renamed from: b  reason: collision with root package name */
    private final c f46614b;

    /* renamed from: c  reason: collision with root package name */
    private final c f46615c;

    /* renamed from: d  reason: collision with root package name */
    private final wa.d f46616d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f46617e;

    /* renamed from: f  reason: collision with root package name */
    private final c f46618f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f46619g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements c {
        a() {
        }

        @Override // qa.c
        public sa.e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            ColorSpace colorSpace;
            fa.c z10 = kVar.z();
            if (((Boolean) b.this.f46617e.get()).booleanValue()) {
                colorSpace = imageDecodeOptions.f10337k;
                if (colorSpace == null) {
                    colorSpace = kVar.s();
                }
            } else {
                colorSpace = imageDecodeOptions.f10337k;
            }
            ColorSpace colorSpace2 = colorSpace;
            if (z10 == fa.b.f22997b) {
                return b.this.f(kVar, i10, oVar, imageDecodeOptions, colorSpace2);
            }
            if (z10 == fa.b.f22999d) {
                return b.this.e(kVar, i10, oVar, imageDecodeOptions);
            }
            if (z10 == fa.b.f23006k) {
                return b.this.d(kVar, i10, oVar, imageDecodeOptions);
            }
            if (z10 == fa.b.f23009n) {
                return b.this.h(kVar, i10, oVar, imageDecodeOptions);
            }
            if (z10 != fa.c.f23013d) {
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
        c cVar = this.f46615c;
        if (cVar != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return null;
    }

    @Override // qa.c
    public sa.e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        InputStream C;
        c cVar;
        c cVar2 = imageDecodeOptions.f10336j;
        if (cVar2 != null) {
            return cVar2.a(kVar, i10, oVar, imageDecodeOptions);
        }
        fa.c z10 = kVar.z();
        if ((z10 == null || z10 == fa.c.f23013d) && (C = kVar.C()) != null) {
            z10 = fa.e.d(C);
            kVar.A1(z10);
        }
        Map map = this.f46619g;
        if (map != null && (cVar = (c) map.get(z10)) != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return this.f46618f.a(kVar, i10, oVar, imageDecodeOptions);
    }

    public sa.e d(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar;
        if (!imageDecodeOptions.f10333g && (cVar = this.f46614b) != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return g(kVar, imageDecodeOptions);
    }

    public sa.e e(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar;
        if (kVar.getWidth() != -1 && kVar.getHeight() != -1) {
            if (!imageDecodeOptions.f10333g && (cVar = this.f46613a) != null) {
                return cVar.a(kVar, i10, oVar, imageDecodeOptions);
            }
            return g(kVar, imageDecodeOptions);
        }
        throw new qa.a("image width or height is incorrect", kVar);
    }

    public sa.f f(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions, ColorSpace colorSpace) {
        CloseableReference b10 = this.f46616d.b(kVar, imageDecodeOptions.f10334h, null, i10, colorSpace);
        try {
            ab.b.a(null, b10);
            j.g(b10);
            sa.f M0 = sa.f.M0(b10, oVar, kVar.p1(), kVar.a1());
            M0.p("is_rounded", false);
            return M0;
        } finally {
            CloseableReference.z(b10);
        }
    }

    public sa.f g(k kVar, ImageDecodeOptions imageDecodeOptions) {
        CloseableReference a10 = this.f46616d.a(kVar, imageDecodeOptions.f10334h, null, imageDecodeOptions.f10337k);
        try {
            ab.b.a(null, a10);
            j.g(a10);
            sa.f M0 = sa.f.M0(a10, n.f49898d, kVar.p1(), kVar.a1());
            M0.p("is_rounded", false);
            return M0;
        } finally {
            CloseableReference.z(a10);
        }
    }

    public b(c cVar, c cVar2, c cVar3, wa.d dVar, Map map) {
        this(cVar, cVar2, cVar3, dVar, map, m.f41605b);
    }

    public b(c cVar, c cVar2, c cVar3, wa.d dVar, Map map, Supplier supplier) {
        this.f46618f = new a();
        this.f46613a = cVar;
        this.f46614b = cVar2;
        this.f46615c = cVar3;
        this.f46616d = dVar;
        this.f46619g = map;
        this.f46617e = supplier;
    }
}
