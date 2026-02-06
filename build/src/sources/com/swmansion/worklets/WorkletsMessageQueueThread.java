package com.swmansion.worklets;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class WorkletsMessageQueueThread extends WorkletsMessageQueueThreadBase {
    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public boolean isIdle() {
        return this.f18402a.isIdle();
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public boolean runOnQueue(Runnable runnable) {
        return this.f18402a.runOnQueue(runnable);
    }
}
