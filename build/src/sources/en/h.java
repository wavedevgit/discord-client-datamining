package en;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.events.Event;
import com.swmansion.reanimated.NodesManager;
import com.swmansion.reanimated.ReanimatedModule;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private ReanimatedModule f21649a;

    public final void a(Event event, ReactContext reactApplicationContext) {
        NodesManager nodesManager;
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(reactApplicationContext, "reactApplicationContext");
        if (this.f21649a == null) {
            this.f21649a = (ReanimatedModule) reactApplicationContext.getNativeModule(ReanimatedModule.class);
        }
        ReanimatedModule reanimatedModule = this.f21649a;
        if (reanimatedModule != null && (nodesManager = reanimatedModule.getNodesManager()) != null) {
            nodesManager.onEventDispatch(event);
        }
    }
}
