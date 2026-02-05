package oe;

import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends fd.m {

    /* renamed from: i  reason: collision with root package name */
    public final int f42410i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f42411o;

    public g(Throwable th2, fd.q qVar, Surface surface) {
        super(th2, qVar);
        boolean z10;
        this.f42410i = System.identityHashCode(surface);
        if (surface != null && !surface.isValid()) {
            z10 = false;
        } else {
            z10 = true;
        }
        this.f42411o = z10;
    }
}
