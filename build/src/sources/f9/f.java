package f9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import ma.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f23625a;

    /* renamed from: b  reason: collision with root package name */
    private i9.a f23626b;

    /* renamed from: c  reason: collision with root package name */
    private sa.a f23627c;

    /* renamed from: d  reason: collision with root package name */
    private sa.a f23628d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f23629e;

    /* renamed from: f  reason: collision with root package name */
    private w f23630f;

    /* renamed from: g  reason: collision with root package name */
    private p8.e f23631g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f23632h;

    public void a(Resources resources, i9.a aVar, sa.a aVar2, sa.a aVar3, Executor executor, w wVar, p8.e eVar, Supplier supplier) {
        this.f23625a = resources;
        this.f23626b = aVar;
        this.f23627c = aVar2;
        this.f23628d = aVar3;
        this.f23629e = executor;
        this.f23630f = wVar;
        this.f23631g = eVar;
        this.f23632h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, i9.a aVar, sa.a aVar2, sa.a aVar3, Executor executor, w wVar, p8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f23625a, this.f23626b, this.f23627c, this.f23628d, this.f23629e, this.f23630f, this.f23631g);
        Supplier supplier = this.f23632h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
