package qq;

import android.graphics.Bitmap;
import bt.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f45604a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f45605b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f45604a = a10;
        this.f45605b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f45605b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f45604a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f45604a.setValue(bitmap);
    }
}
