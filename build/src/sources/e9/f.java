package e9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f21459a;

    /* renamed from: b  reason: collision with root package name */
    private h9.a f21460b;

    /* renamed from: c  reason: collision with root package name */
    private ra.a f21461c;

    /* renamed from: d  reason: collision with root package name */
    private ra.a f21462d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f21463e;

    /* renamed from: f  reason: collision with root package name */
    private w f21464f;

    /* renamed from: g  reason: collision with root package name */
    private o8.e f21465g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f21466h;

    public void a(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar, Supplier supplier) {
        this.f21459a = resources;
        this.f21460b = aVar;
        this.f21461c = aVar2;
        this.f21462d = aVar3;
        this.f21463e = executor;
        this.f21464f = wVar;
        this.f21465g = eVar;
        this.f21466h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f21459a, this.f21460b, this.f21461c, this.f21462d, this.f21463e, this.f21464f, this.f21465g);
        Supplier supplier = this.f21466h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
