package pe;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends gd.m {

    /* renamed from: i  reason: collision with root package name */
    public final int f43141i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f43142o;

    public g(Throwable th2, gd.q qVar, Surface surface) {
        super(th2, qVar);
        boolean z10;
        this.f43141i = System.identityHashCode(surface);
        if (surface != null && !surface.isValid()) {
            z10 = false;
        } else {
            z10 = true;
        }
        this.f43142o = z10;
    }
}
