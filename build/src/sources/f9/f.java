package f9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import ma.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f22500a;

    /* renamed from: b  reason: collision with root package name */
    private i9.a f22501b;

    /* renamed from: c  reason: collision with root package name */
    private sa.a f22502c;

    /* renamed from: d  reason: collision with root package name */
    private sa.a f22503d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f22504e;

    /* renamed from: f  reason: collision with root package name */
    private w f22505f;

    /* renamed from: g  reason: collision with root package name */
    private p8.e f22506g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f22507h;

    public void a(Resources resources, i9.a aVar, sa.a aVar2, sa.a aVar3, Executor executor, w wVar, p8.e eVar, Supplier supplier) {
        this.f22500a = resources;
        this.f22501b = aVar;
        this.f22502c = aVar2;
        this.f22503d = aVar3;
        this.f22504e = executor;
        this.f22505f = wVar;
        this.f22506g = eVar;
        this.f22507h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, i9.a aVar, sa.a aVar2, sa.a aVar3, Executor executor, w wVar, p8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f22500a, this.f22501b, this.f22502c, this.f22503d, this.f22504e, this.f22505f, this.f22506g);
        Supplier supplier = this.f22507h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
