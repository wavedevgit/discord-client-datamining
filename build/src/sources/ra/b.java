package ra;

import android.graphics.ColorSpace;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import java.io.InputStream;
import java.util.Map;
import p8.j;
import p8.m;
import ta.k;
import ta.n;
import ta.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final c f46185a;

    /* renamed from: b  reason: collision with root package name */
    private final c f46186b;

    /* renamed from: c  reason: collision with root package name */
    private final c f46187c;

    /* renamed from: d  reason: collision with root package name */
    private final xa.d f46188d;

    /* renamed from: e  reason: collision with root package name */
    private final Supplier f46189e;

    /* renamed from: f  reason: collision with root package name */
    private final c f46190f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f46191g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements c {
        a() {
        }

        @Override // ra.c
        public ta.e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
            ColorSpace colorSpace;
            ga.c z10 = kVar.z();
            if (((Boolean) b.this.f46189e.get()).booleanValue()) {
                colorSpace = imageDecodeOptions.f11054k;
                if (colorSpace == null) {
                    colorSpace = kVar.s();
                }
            } else {
                colorSpace = imageDecodeOptions.f11054k;
            }
            ColorSpace colorSpace2 = colorSpace;
            if (z10 == ga.b.f25382b) {
                return b.this.f(kVar, i10, oVar, imageDecodeOptions, colorSpace2);
            }
            if (z10 == ga.b.f25384d) {
                return b.this.e(kVar, i10, oVar, imageDecodeOptions);
            }
            if (z10 == ga.b.f25391k) {
                return b.this.d(kVar, i10, oVar, imageDecodeOptions);
            }
            if (z10 == ga.b.f25394n) {
                return b.this.h(kVar, i10, oVar, imageDecodeOptions);
            }
            if (z10 != ga.c.f25398d) {
                return b.this.g(kVar, imageDecodeOptions);
            }
            throw new ra.a("unknown image format", kVar);
        }
    }

    public b(c cVar, c cVar2, c cVar3, xa.d dVar) {
        this(cVar, cVar2, cVar3, dVar, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public ta.e h(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar = this.f46187c;
        if (cVar != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return null;
    }

    @Override // ra.c
    public ta.e a(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        InputStream C;
        c cVar;
        c cVar2 = imageDecodeOptions.f11053j;
        if (cVar2 != null) {
            return cVar2.a(kVar, i10, oVar, imageDecodeOptions);
        }
        ga.c z10 = kVar.z();
        if ((z10 == null || z10 == ga.c.f25398d) && (C = kVar.C()) != null) {
            z10 = ga.e.d(C);
            kVar.b1(z10);
        }
        Map map = this.f46191g;
        if (map != null && (cVar = (c) map.get(z10)) != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return this.f46190f.a(kVar, i10, oVar, imageDecodeOptions);
    }

    public ta.e d(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar;
        if (!imageDecodeOptions.f11050g && (cVar = this.f46186b) != null) {
            return cVar.a(kVar, i10, oVar, imageDecodeOptions);
        }
        return g(kVar, imageDecodeOptions);
    }

    public ta.e e(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions) {
        c cVar;
        if (kVar.getWidth() != -1 && kVar.getHeight() != -1) {
            if (!imageDecodeOptions.f11050g && (cVar = this.f46185a) != null) {
                return cVar.a(kVar, i10, oVar, imageDecodeOptions);
            }
            return g(kVar, imageDecodeOptions);
        }
        throw new ra.a("image width or height is incorrect", kVar);
    }

    public ta.f f(k kVar, int i10, o oVar, ImageDecodeOptions imageDecodeOptions, ColorSpace colorSpace) {
        CloseableReference b10 = this.f46188d.b(kVar, imageDecodeOptions.f11051h, null, i10, colorSpace);
        try {
            bb.b.a(null, b10);
            j.g(b10);
            ta.f b22 = ta.f.b2(b10, oVar, kVar.q1(), kVar.c1());
            b22.p("is_rounded", false);
            return b22;
        } finally {
            CloseableReference.z(b10);
        }
    }

    public ta.f g(k kVar, ImageDecodeOptions imageDecodeOptions) {
        CloseableReference a10 = this.f46188d.a(kVar, imageDecodeOptions.f11051h, null, imageDecodeOptions.f11054k);
        try {
            bb.b.a(null, a10);
            j.g(a10);
            ta.f b22 = ta.f.b2(a10, n.f48671d, kVar.q1(), kVar.c1());
            b22.p("is_rounded", false);
            return b22;
        } finally {
            CloseableReference.z(a10);
        }
    }

    public b(c cVar, c cVar2, c cVar3, xa.d dVar, Map map) {
        this(cVar, cVar2, cVar3, dVar, map, m.f41523b);
    }

    public b(c cVar, c cVar2, c cVar3, xa.d dVar, Map map, Supplier supplier) {
        this.f46190f = new a();
        this.f46185a = cVar;
        this.f46186b = cVar2;
        this.f46187c = cVar3;
        this.f46188d = dVar;
        this.f46191g = map;
        this.f46189e = supplier;
    }
}
