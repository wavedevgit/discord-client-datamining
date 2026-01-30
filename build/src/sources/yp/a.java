package yp;

import android.graphics.Bitmap;
import js.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54929a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54930b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f54929a = a10;
        this.f54930b = js.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f54930b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f54929a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f54929a.setValue(bitmap);
    }
}
