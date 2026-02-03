package zp;

import android.graphics.Bitmap;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f56009a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f56010b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f56009a = a10;
        this.f56010b = ks.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f56010b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f56009a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f56009a.setValue(bitmap);
    }
}
