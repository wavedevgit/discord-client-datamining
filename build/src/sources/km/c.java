package km;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import pm.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final a f33285a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public c(ReactApplicationContext mReactContext) {
        Intrinsics.checkNotNullParameter(mReactContext, "mReactContext");
    }

    public final e a(ThemedReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        return new e(reactContext);
    }

    public final void b(e view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (z10) {
            view.d();
        } else {
            view.c();
        }
    }
}
