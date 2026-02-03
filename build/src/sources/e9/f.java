package e9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f22696a;

    /* renamed from: b  reason: collision with root package name */
    private h9.a f22697b;

    /* renamed from: c  reason: collision with root package name */
    private ra.a f22698c;

    /* renamed from: d  reason: collision with root package name */
    private ra.a f22699d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f22700e;

    /* renamed from: f  reason: collision with root package name */
    private w f22701f;

    /* renamed from: g  reason: collision with root package name */
    private o8.e f22702g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f22703h;

    public void a(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar, Supplier supplier) {
        this.f22696a = resources;
        this.f22697b = aVar;
        this.f22698c = aVar2;
        this.f22699d = aVar3;
        this.f22700e = executor;
        this.f22701f = wVar;
        this.f22702g = eVar;
        this.f22703h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f22696a, this.f22697b, this.f22698c, this.f22699d, this.f22700e, this.f22701f, this.f22702g);
        Supplier supplier = this.f22703h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
