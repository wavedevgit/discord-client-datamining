package a0;

import android.util.Size;
import android.view.Surface;
import com.google.common.util.concurrent.ListenableFuture;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k1 extends w0 {

    /* renamed from: o  reason: collision with root package name */
    private final Surface f132o;

    public k1(Surface surface, Size size, int i10) {
        super(size, i10);
        this.f132o = surface;
    }

    @Override // a0.w0
    public ListenableFuture o() {
        return d0.n.p(this.f132o);
    }

    public k1(Surface surface) {
        this.f132o = surface;
    }
}
