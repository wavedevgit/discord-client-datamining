package com.swmansion.rnscreens;

import android.util.Log;
import com.facebook.jni.HybridData;
import com.facebook.react.fabric.FabricUIManager;
import java.lang.ref.WeakReference;
import java.util.concurrent.ConcurrentHashMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\b\u0018\u0000 \u00132\u00020\u0001:\u0001\u0013B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0005\u001a\u00020\u0004H\u0082 ¢\u0006\u0004\b\u0005\u0010\u0006J\u0018\u0010\n\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\u0007H\u0086 ¢\u0006\u0004\b\n\u0010\u000bJ\u0017\u0010\u000e\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\fH\u0007¢\u0006\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0010\u001a\u00020\u00048\u0002X\u0083\u0004¢\u0006\f\n\u0004\b\u0010\u0010\u0011\u0012\u0004\b\u0012\u0010\u0003¨\u0006\u0014"}, d2 = {"Lcom/swmansion/rnscreens/NativeProxy;", "", "<init>", "()V", "Lcom/facebook/jni/HybridData;", "initHybrid", "()Lcom/facebook/jni/HybridData;", "Lcom/facebook/react/fabric/FabricUIManager;", "fabricUIManager", "", "nativeAddMutationsListener", "(Lcom/facebook/react/fabric/FabricUIManager;)V", "", "screenTag", "notifyScreenRemoved", "(I)V", "mHybridData", "Lcom/facebook/jni/HybridData;", "getMHybridData$annotations", "a", "react-native-screens_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NativeProxy {

    /* renamed from: a  reason: collision with root package name */
    public static final a f19140a = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private static final ConcurrentHashMap f19141b = new ConcurrentHashMap();
    @fb.a
    @NotNull
    private final HybridData mHybridData = initHybrid();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(int i10, Screen view) {
            Intrinsics.checkNotNullParameter(view, "view");
            NativeProxy.f19141b.put(Integer.valueOf(i10), new WeakReference(view));
        }

        public final void b() {
            NativeProxy.f19141b.clear();
        }

        public final void c(int i10) {
            NativeProxy.f19141b.remove(Integer.valueOf(i10));
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(Screen screen) {
        screen.startRemovalTransition();
    }

    private final native HybridData initHybrid();

    public final native void nativeAddMutationsListener(@NotNull FabricUIManager fabricUIManager);

    @fb.a
    public final void notifyScreenRemoved(int i10) {
        WeakReference weakReference = (WeakReference) f19141b.get(Integer.valueOf(i10));
        if (weakReference != null) {
            final Screen screen = (Screen) weakReference.get();
            if (screen != null) {
                if (!screen.post(new Runnable() { // from class: com.swmansion.rnscreens.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        NativeProxy.c(Screen.this);
                    }
                })) {
                    Log.w("[RNScreens]", "Failed to schedule removal transition start for screen with tag " + i10);
                    return;
                }
                return;
            }
            Log.w("[RNScreens]", "Reference stored in NativeProxy for tag " + i10 + " no longer points to valid object.");
        }
    }
}
