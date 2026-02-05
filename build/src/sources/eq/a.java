package eq;

import android.graphics.Bitmap;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ps.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f21749a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f21750b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f21749a = a10;
        this.f21750b = ps.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f21750b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f21749a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f21749a.setValue(bitmap);
    }
}
