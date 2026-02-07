package org.webrtc;

import android.view.Choreographer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final /* synthetic */ class o0 implements Choreographer.FrameCallback {

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ RenderSynchronizer f43492d;

    public /* synthetic */ o0(RenderSynchronizer renderSynchronizer) {
        this.f43492d = renderSynchronizer;
    }

    @Override // android.view.Choreographer.FrameCallback
    public final void doFrame(long j10) {
        RenderSynchronizer.b(this.f43492d, j10);
    }
}
