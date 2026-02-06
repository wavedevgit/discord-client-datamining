package q4;

import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import com.facebook.react.uimanager.ViewProps;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final String f46457a = k4.m.i("PackageManagerHelper");

    private static int a(Context context, String str) {
        return context.getPackageManager().getComponentEnabledSetting(new ComponentName(context, str));
    }

    private static boolean b(int i10, boolean z10) {
        if (i10 == 0) {
            return z10;
        }
        if (i10 == 1) {
            return true;
        }
        return false;
    }

    public static void c(Context context, Class cls, boolean z10) {
        int i10;
        String str;
        String str2 = "disabled";
        try {
            if (z10 == b(a(context, cls.getName()), false)) {
                k4.m.e().a(f46457a, "Skipping component enablement for " + cls.getName());
                return;
            }
            PackageManager packageManager = context.getPackageManager();
            ComponentName componentName = new ComponentName(context, cls.getName());
            if (z10) {
                i10 = 1;
            } else {
                i10 = 2;
            }
            packageManager.setComponentEnabledSetting(componentName, i10, 1);
            k4.m e10 = k4.m.e();
            String str3 = f46457a;
            StringBuilder sb2 = new StringBuilder();
            sb2.append(cls.getName());
            sb2.append(" ");
            if (!z10) {
                str = "disabled";
            } else {
                str = ViewProps.ENABLED;
            }
            sb2.append(str);
            e10.a(str3, sb2.toString());
        } catch (Exception e11) {
            k4.m e12 = k4.m.e();
            String str4 = f46457a;
            StringBuilder sb3 = new StringBuilder();
            sb3.append(cls.getName());
            sb3.append("could not be ");
            if (z10) {
                str2 = ViewProps.ENABLED;
            }
            sb3.append(str2);
            e12.b(str4, sb3.toString(), e11);
        }
    }
}
