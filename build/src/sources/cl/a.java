package cl;

import android.view.accessibility.AccessibilityManager;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final AccessibilityManager f8304a = (AccessibilityManager) com.henninghall.date_picker.c.f17237a.getApplicationContext().getSystemService("accessibility");

    /* renamed from: b  reason: collision with root package name */
    private static Locale f8305b = Locale.getDefault();

    public static void a(Locale locale) {
        f8305b = locale;
    }
}
