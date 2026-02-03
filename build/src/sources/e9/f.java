package e9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f21387a;

    /* renamed from: b  reason: collision with root package name */
    private h9.a f21388b;

    /* renamed from: c  reason: collision with root package name */
    private ra.a f21389c;

    /* renamed from: d  reason: collision with root package name */
    private ra.a f21390d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f21391e;

    /* renamed from: f  reason: collision with root package name */
    private w f21392f;

    /* renamed from: g  reason: collision with root package name */
    private o8.e f21393g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f21394h;

    public void a(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar, Supplier supplier) {
        this.f21387a = resources;
        this.f21388b = aVar;
        this.f21389c = aVar2;
        this.f21390d = aVar3;
        this.f21391e = executor;
        this.f21392f = wVar;
        this.f21393g = eVar;
        this.f21394h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f21387a, this.f21388b, this.f21389c, this.f21390d, this.f21391e, this.f21392f, this.f21393g);
        Supplier supplier = this.f21394h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
