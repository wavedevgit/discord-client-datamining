package org.webrtc;

import android.view.Choreographer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final /* synthetic */ class o0 implements Choreographer.FrameCallback {

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ RenderSynchronizer f44464d;

    public /* synthetic */ o0(RenderSynchronizer renderSynchronizer) {
        this.f44464d = renderSynchronizer;
    }

    @Override // android.view.Choreographer.FrameCallback
    public final void doFrame(long j10) {
        RenderSynchronizer.b(this.f44464d, j10);
    }
}
