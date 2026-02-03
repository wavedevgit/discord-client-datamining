package com.facebook.drawee.backends.pipeline;

import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.common.time.AwakeTimeSinceBootClock;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.drawable.c;
import com.facebook.drawee.drawable.n;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import com.facebook.imagepipeline.image.ImageInfo;
import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executor;
import la.w;
import o8.e;
import o8.h;
import o8.j;
import ya.b;
import z9.g;
import z9.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends com.facebook.drawee.controller.a {
    private static final Class M = a.class;
    private final ra.a A;
    private final e B;
    private final w C;
    private CacheKey D;
    private Supplier E;
    private boolean F;
    private e G;
    private f9.a H;
    private Set I;
    private ImageRequest J;
    private ImageRequest[] K;
    private ImageRequest L;

    /* renamed from: z  reason: collision with root package name */
    private final Resources f10598z;

    public a(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, e eVar) {
        super(aVar, executor, null, null);
        this.f10598z = resources;
        this.A = new e9.a(resources, aVar2, aVar3);
        this.B = eVar;
        this.C = wVar;
    }

    public static n e0(Drawable drawable) {
        if (drawable == null) {
            return null;
        }
        if (drawable instanceof n) {
            return (n) drawable;
        }
        if (drawable instanceof c) {
            return e0(((c) drawable).getDrawable());
        }
        if (drawable instanceof com.facebook.drawee.drawable.a) {
            com.facebook.drawee.drawable.a aVar = (com.facebook.drawee.drawable.a) drawable;
            int d10 = aVar.d();
            for (int i10 = 0; i10 < d10; i10++) {
                n e02 = e0(aVar.b(i10));
                if (e02 != null) {
                    return e02;
                }
            }
        }
        return null;
    }

    private void l0(Supplier supplier) {
        this.E = supplier;
        p0(null);
    }

    private Drawable o0(e eVar, sa.e eVar2) {
        Drawable a10;
        if (eVar == null) {
            return null;
        }
        Iterator<E> it = eVar.iterator();
        while (it.hasNext()) {
            ra.a aVar = (ra.a) it.next();
            if (aVar.b(eVar2) && (a10 = aVar.a(eVar2)) != null) {
                return a10;
            }
        }
        return null;
    }

    private void p0(sa.e eVar) {
        if (this.F) {
            if (l() == null) {
                j9.a aVar = new j9.a();
                e(new k9.a(aVar));
                U(aVar);
            }
            if (l() instanceof j9.a) {
                w0(eVar, (j9.a) l());
            }
        }
    }

    @Override // com.facebook.drawee.controller.a
    protected void J(Drawable drawable) {
        if (drawable instanceof c9.a) {
            ((c9.a) drawable).a();
        }
    }

    public synchronized void c0(RequestListener requestListener) {
        try {
            if (this.I == null) {
                this.I = new HashSet();
            }
            this.I.add(requestListener);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.a
    /* renamed from: d0 */
    public Drawable g(CloseableReference closeableReference) {
        try {
            if (b.d()) {
                b.a("PipelineDraweeController#createDrawable");
            }
            j.i(CloseableReference.K0(closeableReference));
            sa.e eVar = (sa.e) closeableReference.F0();
            p0(eVar);
            Drawable o02 = o0(this.G, eVar);
            if (o02 != null) {
                if (b.d()) {
                    b.b();
                }
                return o02;
            }
            Drawable o03 = o0(this.B, eVar);
            if (o03 != null) {
                if (b.d()) {
                    b.b();
                }
                return o03;
            }
            Drawable a10 = this.A.a(eVar);
            if (a10 != null) {
                if (b.d()) {
                    b.b();
                }
                return a10;
            }
            throw new UnsupportedOperationException("Unrecognized image class: " + eVar);
        } catch (Throwable th2) {
            if (b.d()) {
                b.b();
            }
            throw th2;
        }
    }

    protected CacheKey f0() {
        return this.D;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.a
    /* renamed from: g0 */
    public CloseableReference h() {
        CacheKey cacheKey;
        if (b.d()) {
            b.a("PipelineDraweeController#getCachedImage");
        }
        try {
            w wVar = this.C;
            if (wVar != null && (cacheKey = this.D) != null) {
                CloseableReference closeableReference = wVar.get(cacheKey);
                if (closeableReference != null && !((sa.e) closeableReference.F0()).J1().a()) {
                    closeableReference.close();
                    return null;
                }
                if (b.d()) {
                    b.b();
                }
                return closeableReference;
            }
            if (b.d()) {
                b.b();
            }
            return null;
        } finally {
            if (b.d()) {
                b.b();
            }
        }
    }

    protected String h0() {
        Object i10 = i();
        if (i10 == null) {
            return null;
        }
        return i10.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.a
    /* renamed from: i0 */
    public int r(CloseableReference closeableReference) {
        if (closeableReference != null) {
            return closeableReference.G0();
        }
        return 0;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public boolean isSameImageRequest(DraweeController draweeController) {
        CacheKey cacheKey = this.D;
        if (cacheKey != null && (draweeController instanceof a)) {
            return h.a(cacheKey, ((a) draweeController).f0());
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.a
    /* renamed from: j0 */
    public ImageInfo s(CloseableReference closeableReference) {
        j.i(CloseableReference.K0(closeableReference));
        return ((sa.e) closeableReference.F0()).z();
    }

    public synchronized RequestListener k0() {
        Set set = this.I;
        if (set != null) {
            return new ua.c(set);
        }
        return null;
    }

    @Override // com.facebook.drawee.controller.a
    protected DataSource m() {
        if (b.d()) {
            b.a("PipelineDraweeController#getDataSource");
        }
        if (p8.a.w(2)) {
            p8.a.z(M, "controller %x: getDataSource", Integer.valueOf(System.identityHashCode(this)));
        }
        DataSource dataSource = (DataSource) this.E.get();
        if (b.d()) {
            b.b();
        }
        return dataSource;
    }

    public void m0(Supplier supplier, String str, CacheKey cacheKey, Object obj, e eVar) {
        if (b.d()) {
            b.a("PipelineDraweeController#initialize");
        }
        super.x(str, obj);
        l0(supplier);
        this.D = cacheKey;
        u0(eVar);
        p0(null);
        if (b.d()) {
            b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public synchronized void n0(g gVar, AbstractDraweeControllerBuilder abstractDraweeControllerBuilder) {
        try {
            f9.a aVar = this.H;
            if (aVar != null) {
                aVar.f();
            }
            if (gVar != null) {
                if (this.H == null) {
                    this.H = new f9.a(AwakeTimeSinceBootClock.get(), this);
                }
                this.H.c(gVar);
                this.H.g(true);
            }
            this.J = (ImageRequest) abstractDraweeControllerBuilder.n();
            this.K = (ImageRequest[]) abstractDraweeControllerBuilder.m();
            this.L = (ImageRequest) abstractDraweeControllerBuilder.o();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.facebook.drawee.controller.a
    /* renamed from: q0 */
    public Map E(ImageInfo imageInfo) {
        if (imageInfo == null) {
            return null;
        }
        return imageInfo.getExtras();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.a
    /* renamed from: r0 */
    public void G(String str, CloseableReference closeableReference) {
        super.G(str, closeableReference);
        synchronized (this) {
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.controller.a
    /* renamed from: s0 */
    public void L(CloseableReference closeableReference) {
        CloseableReference.N(closeableReference);
    }

    @Override // com.facebook.drawee.controller.a, com.facebook.drawee.interfaces.DraweeController
    public void setHierarchy(DraweeHierarchy draweeHierarchy) {
        super.setHierarchy(draweeHierarchy);
        p0(null);
    }

    @Override // com.facebook.drawee.controller.a
    protected Uri t() {
        return l.a(this.J, this.L, this.K, ImageRequest.REQUEST_TO_URI_FN);
    }

    public synchronized void t0(RequestListener requestListener) {
        Set set = this.I;
        if (set == null) {
            return;
        }
        set.remove(requestListener);
    }

    @Override // com.facebook.drawee.controller.a
    public String toString() {
        return h.b(this).b("super", super.toString()).b("dataSourceSupplier", this.E).toString();
    }

    public void u0(e eVar) {
        this.G = eVar;
    }

    public void v0(boolean z10) {
        this.F = z10;
    }

    protected void w0(sa.e eVar, j9.a aVar) {
        n e02;
        aVar.j(p());
        DraweeHierarchy hierarchy = getHierarchy();
        ScalingUtils$ScaleType scalingUtils$ScaleType = null;
        if (hierarchy != null && (e02 = e0(hierarchy.d())) != null) {
            scalingUtils$ScaleType = e02.l();
        }
        aVar.m(scalingUtils$ScaleType);
        String h02 = h0();
        if (h02 != null) {
            aVar.b("cc", h02);
        }
        if (eVar != null) {
            aVar.k(eVar.getWidth(), eVar.getHeight());
            aVar.l(eVar.t());
            return;
        }
        aVar.i();
    }
}
