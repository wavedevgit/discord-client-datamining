package e9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f21392a;

    /* renamed from: b  reason: collision with root package name */
    private h9.a f21393b;

    /* renamed from: c  reason: collision with root package name */
    private ra.a f21394c;

    /* renamed from: d  reason: collision with root package name */
    private ra.a f21395d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f21396e;

    /* renamed from: f  reason: collision with root package name */
    private w f21397f;

    /* renamed from: g  reason: collision with root package name */
    private o8.e f21398g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f21399h;

    public void a(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar, Supplier supplier) {
        this.f21392a = resources;
        this.f21393b = aVar;
        this.f21394c = aVar2;
        this.f21395d = aVar3;
        this.f21396e = executor;
        this.f21397f = wVar;
        this.f21398g = eVar;
        this.f21399h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f21392a, this.f21393b, this.f21394c, this.f21395d, this.f21396e, this.f21397f, this.f21398g);
        Supplier supplier = this.f21399h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
