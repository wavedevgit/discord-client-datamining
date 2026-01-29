package e9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f22664a;

    /* renamed from: b  reason: collision with root package name */
    private h9.a f22665b;

    /* renamed from: c  reason: collision with root package name */
    private ra.a f22666c;

    /* renamed from: d  reason: collision with root package name */
    private ra.a f22667d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f22668e;

    /* renamed from: f  reason: collision with root package name */
    private w f22669f;

    /* renamed from: g  reason: collision with root package name */
    private o8.e f22670g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f22671h;

    public void a(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar, Supplier supplier) {
        this.f22664a = resources;
        this.f22665b = aVar;
        this.f22666c = aVar2;
        this.f22667d = aVar3;
        this.f22668e = executor;
        this.f22669f = wVar;
        this.f22670g = eVar;
        this.f22671h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, h9.a aVar, ra.a aVar2, ra.a aVar3, Executor executor, w wVar, o8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f22664a, this.f22665b, this.f22666c, this.f22667d, this.f22668e, this.f22669f, this.f22670g);
        Supplier supplier = this.f22671h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
