package qq;

import android.graphics.Bitmap;
import bt.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f46173a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f46174b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f46173a = a10;
        this.f46174b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f46174b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f46173a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f46173a.setValue(bitmap);
    }
}
