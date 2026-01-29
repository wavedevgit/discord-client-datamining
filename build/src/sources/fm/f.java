package fm;

import android.app.Activity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import com.facebook.react.bridge.ReactContext;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {
    public static final ViewGroup a(ReactContext reactContext) {
        Window window;
        View decorView;
        View rootView;
        Intrinsics.checkNotNullParameter(reactContext, "<this>");
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null && (decorView = window.getDecorView()) != null && (rootView = decorView.getRootView()) != null) {
            return (ViewGroup) rootView.findViewById(f.f.f24146d);
        }
        return null;
    }

    public static final View b(ReactContext reactContext) {
        Window window;
        View decorView;
        Intrinsics.checkNotNullParameter(reactContext, "<this>");
        Activity currentActivity = reactContext.getCurrentActivity();
        if (currentActivity != null && (window = currentActivity.getWindow()) != null && (decorView = window.getDecorView()) != null) {
            return decorView.getRootView();
        }
        return null;
    }
}
