package gq;

import android.graphics.Bitmap;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import rs.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f25504a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f25505b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f25504a = a10;
        this.f25505b = rs.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f25505b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f25504a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f25504a.setValue(bitmap);
    }
}
