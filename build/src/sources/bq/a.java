package bq;

import android.graphics.Bitmap;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f6723a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f6724b;

    public a(Bitmap bitmap) {
        MutableStateFlow a10 = l0.a(bitmap);
        this.f6723a = a10;
        this.f6724b = ms.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f6724b;
    }

    public final Bitmap b() {
        return (Bitmap) this.f6723a.getValue();
    }

    public final void c(Bitmap bitmap) {
        this.f6723a.setValue(bitmap);
    }
}
