package com.swmansion.worklets;

import com.facebook.react.bridge.queue.MessageQueueThread;
import com.facebook.react.bridge.queue.MessageQueueThreadImpl;
import com.facebook.react.bridge.queue.MessageQueueThreadPerfStats;
import com.facebook.react.bridge.queue.MessageQueueThreadSpec;
import com.facebook.react.bridge.queue.QueueThreadExceptionHandler;
import java.lang.reflect.Field;
import java.util.concurrent.Callable;
import java.util.concurrent.Future;
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class WorkletsMessageQueueThreadBase implements MessageQueueThread {

    /* renamed from: a  reason: collision with root package name */
    protected final MessageQueueThreadImpl f18016a = MessageQueueThreadImpl.create(MessageQueueThreadSpec.mainThreadSpec(), new QueueThreadExceptionHandler() { // from class: com.swmansion.worklets.c
        @Override // com.facebook.react.bridge.queue.QueueThreadExceptionHandler
        public final void handleException(Exception exc) {
            WorkletsMessageQueueThreadBase.a(exc);
        }
    });

    public static /* synthetic */ void a(Exception exc) {
        throw new RuntimeException(exc);
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public void assertIsOnThread() {
        this.f18016a.assertIsOnThread();
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public Future callOnQueue(Callable callable) {
        return this.f18016a.callOnQueue(callable);
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public MessageQueueThreadPerfStats getPerfStats() {
        return this.f18016a.getPerfStats();
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public boolean isOnThread() {
        return this.f18016a.isOnThread();
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public void quitSynchronous() {
        try {
            Field declaredField = this.f18016a.getClass().getDeclaredField("mIsFinished");
            declaredField.setAccessible(true);
            declaredField.set(this.f18016a, Boolean.TRUE);
            declaredField.setAccessible(false);
        } catch (IllegalAccessException | NoSuchFieldException e10) {
            e10.printStackTrace();
        }
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public void resetPerfStats() {
        this.f18016a.resetPerfStats();
    }

    @Override // com.facebook.react.bridge.queue.MessageQueueThread
    public void assertIsOnThread(String str) {
        this.f18016a.assertIsOnThread(str);
    }
}
