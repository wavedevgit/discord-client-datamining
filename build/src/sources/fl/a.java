package fl;

import android.view.accessibility.AccessibilityManager;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final AccessibilityManager f23105a = (AccessibilityManager) com.henninghall.date_picker.c.f16599a.getApplicationContext().getSystemService("accessibility");

    /* renamed from: b  reason: collision with root package name */
    private static Locale f23106b = Locale.getDefault();

    public static void a(Locale locale) {
        f23106b = locale;
    }
}
