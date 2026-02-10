package com.swmansion.worklets;

import com.facebook.jni.HybridData;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.JSExceptionHandler;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.UiThreadUtil;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AndroidUIScheduler {

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f18538a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicBoolean f18539b = new AtomicBoolean(true);

    /* renamed from: c  reason: collision with root package name */
    private final Runnable f18540c = new Runnable() { // from class: com.swmansion.worklets.a
        @Override // java.lang.Runnable
        public final void run() {
            AndroidUIScheduler.this.d();
        }
    };
    @gb.a
    private final HybridData mHybridData = initHybrid();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends GuardedRunnable {
        a(JSExceptionHandler jSExceptionHandler) {
            super(jSExceptionHandler);
        }

        @Override // com.facebook.react.bridge.GuardedRunnable
        public void runGuarded() {
            AndroidUIScheduler.this.f18540c.run();
        }
    }

    public AndroidUIScheduler(ReactApplicationContext reactApplicationContext) {
        this.f18538a = reactApplicationContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void d() {
        synchronized (this.f18539b) {
            try {
                if (this.f18539b.get()) {
                    triggerUI();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private native HybridData initHybrid();

    @gb.a
    private void scheduleTriggerOnUI() {
        UiThreadUtil.runOnUiThread(new a(this.f18538a.getExceptionHandler()));
    }

    public void c() {
        synchronized (this.f18539b) {
            this.f18539b.set(false);
            invalidate();
        }
    }

    public native void invalidate();

    public native void triggerUI();
}
