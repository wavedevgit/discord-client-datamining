package f9;

import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import java.util.concurrent.Executor;
import ma.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private Resources f23626a;

    /* renamed from: b  reason: collision with root package name */
    private i9.a f23627b;

    /* renamed from: c  reason: collision with root package name */
    private sa.a f23628c;

    /* renamed from: d  reason: collision with root package name */
    private sa.a f23629d;

    /* renamed from: e  reason: collision with root package name */
    private Executor f23630e;

    /* renamed from: f  reason: collision with root package name */
    private w f23631f;

    /* renamed from: g  reason: collision with root package name */
    private p8.e f23632g;

    /* renamed from: h  reason: collision with root package name */
    private Supplier f23633h;

    public void a(Resources resources, i9.a aVar, sa.a aVar2, sa.a aVar3, Executor executor, w wVar, p8.e eVar, Supplier supplier) {
        this.f23626a = resources;
        this.f23627b = aVar;
        this.f23628c = aVar2;
        this.f23629d = aVar3;
        this.f23630e = executor;
        this.f23631f = wVar;
        this.f23632g = eVar;
        this.f23633h = supplier;
    }

    protected com.facebook.drawee.backends.pipeline.a b(Resources resources, i9.a aVar, sa.a aVar2, sa.a aVar3, Executor executor, w wVar, p8.e eVar) {
        return new com.facebook.drawee.backends.pipeline.a(resources, aVar, aVar2, aVar3, executor, wVar, eVar);
    }

    public com.facebook.drawee.backends.pipeline.a c() {
        com.facebook.drawee.backends.pipeline.a b10 = b(this.f23626a, this.f23627b, this.f23628c, this.f23629d, this.f23630e, this.f23631f, this.f23632g);
        Supplier supplier = this.f23633h;
        if (supplier != null) {
            b10.v0(((Boolean) supplier.get()).booleanValue());
        }
        return b10;
    }
}
