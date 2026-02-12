package com.swmansion.worklets;
@gb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class WorkletsMessageQueueThread extends WorkletsMessageQueueThreadBase {
    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public boolean isIdle() {
        return this.f19423a.isIdle();
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public boolean runOnQueue(Runnable runnable) {
        return this.f19423a.runOnQueue(runnable);
    }
}
