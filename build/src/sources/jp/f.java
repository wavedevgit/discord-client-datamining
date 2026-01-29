package jp;

import android.content.Context;
import android.content.ContextWrapper;
import android.content.pm.PackageManager;
import android.view.View;
import android.view.accessibility.AccessibilityManager;
import android.view.inputmethod.InputMethodManager;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.LifecycleOwner;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {
    public static final AppCompatActivity a(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        if (context instanceof AppCompatActivity) {
            return (AppCompatActivity) context;
        }
        if (context instanceof ContextWrapper) {
            Context baseContext = ((ContextWrapper) context).getBaseContext();
            Intrinsics.checkNotNullExpressionValue(baseContext, "getBaseContext(...)");
            return a(baseContext);
        }
        return null;
    }

    public static final String b(Context context) {
        String obj;
        Intrinsics.checkNotNullParameter(context, "<this>");
        int i10 = context.getApplicationInfo().labelRes;
        if (i10 == 0) {
            try {
                CharSequence charSequence = context.getApplicationInfo().nonLocalizedLabel;
                if (charSequence == null || (obj = charSequence.toString()) == null) {
                    return context.getApplicationInfo().loadLabel(context.getPackageManager()).toString();
                }
                return obj;
            } catch (PackageManager.NameNotFoundException unused) {
                return "";
            }
        }
        String string = context.getString(i10);
        Intrinsics.checkNotNull(string);
        return string;
    }

    public static final File c(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        return new File(context.getCacheDir(), "pi2");
    }

    public static final void d(Context context) {
        View currentFocus;
        InputMethodManager inputMethodManager;
        Intrinsics.checkNotNullParameter(context, "<this>");
        AppCompatActivity a10 = a(context);
        if (a10 != null && (currentFocus = a10.getCurrentFocus()) != null) {
            Object systemService = context.getSystemService("input_method");
            if (systemService instanceof InputMethodManager) {
                inputMethodManager = (InputMethodManager) systemService;
            } else {
                inputMethodManager = null;
            }
            if (inputMethodManager != null) {
                inputMethodManager.hideSoftInputFromWindow(currentFocus.getWindowToken(), 0);
            }
        }
    }

    public static final boolean e(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        if ((context.getApplicationInfo().flags & 2) != 0) {
            return true;
        }
        return false;
    }

    public static final boolean f(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        try {
            return context.getPackageManager().hasSystemFeature("android.hardware.microphone");
        } catch (Exception unused) {
            return false;
        }
    }

    public static final boolean g(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Object systemService = context.getSystemService("accessibility");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.view.accessibility.AccessibilityManager");
        return ((AccessibilityManager) systemService).isEnabled();
    }

    public static final AppCompatActivity h(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        AppCompatActivity a10 = a(context);
        if (a10 != null) {
            return a10;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public static final LifecycleOwner i(Context context) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        AppCompatActivity a10 = a(context);
        if (a10 != null) {
            return a10;
        }
        throw new IllegalArgumentException("Required value was null.");
    }

    public static final void j(Context context) {
        View currentFocus;
        InputMethodManager inputMethodManager;
        Intrinsics.checkNotNullParameter(context, "<this>");
        AppCompatActivity a10 = a(context);
        if (a10 != null && (currentFocus = a10.getCurrentFocus()) != null) {
            Object systemService = context.getSystemService("input_method");
            if (systemService instanceof InputMethodManager) {
                inputMethodManager = (InputMethodManager) systemService;
            } else {
                inputMethodManager = null;
            }
            if (inputMethodManager != null) {
                inputMethodManager.showSoftInput(currentFocus, 1);
            }
        }
    }
}
