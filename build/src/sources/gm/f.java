package gm;

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
            return (ViewGroup) rootView.findViewById(f.f.f23357d);
        }
        return null;
    }

    public static final ViewGroup b(ReactContext reactContext) {
        Intrinsics.checkNotNullParameter(reactContext, "<this>");
        km.a aVar = km.a.f33029a;
        Activity currentActivity = reactContext.getCurrentActivity();
        km.a.c(aVar, "ReactContext", "contentWithLogging: Current activity: " + currentActivity, null, 4, null);
        Activity currentActivity2 = reactContext.getCurrentActivity();
        if (currentActivity2 == null) {
            km.a.c(aVar, "ReactContext", "contentWithLogging: Activity is null, cant get content view.", null, 4, null);
            return null;
        }
        Window window = currentActivity2.getWindow();
        if (window == null) {
            km.a.c(aVar, "ReactContext", "contentWithLogging: Window is null.", null, 4, null);
            return null;
        }
        View rootView = window.getDecorView().getRootView();
        if (rootView == null) {
            km.a.c(aVar, "ReactContext", "contentWithLogging: Root view is null.", null, 4, null);
            return null;
        }
        ViewGroup viewGroup = (ViewGroup) rootView.findViewById(f.f.f23357d);
        if (viewGroup == null) {
            km.a.c(aVar, "ReactContext", "contentWithLogging: Can't find action bar root", null, 4, null);
            if (((ViewGroup) rootView.findViewById(16908290)) != null) {
                km.a.c(aVar, "ReactContext", "contentWithLogging: Able to find R.id.content instead (maybe use this instead", null, 4, null);
            }
            return null;
        }
        km.a.c(aVar, "ReactContext", "contentWithLogging: Found action bar root (nominal)", null, 4, null);
        return viewGroup;
    }

    public static final View c(ReactContext reactContext) {
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
