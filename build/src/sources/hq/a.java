package hq;

import android.graphics.Bitmap;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ss.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f26463a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f26464b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f26463a = a10;
        this.f26464b = ss.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f26464b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f26463a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f26463a.setValue(bitmap);
    }
}
