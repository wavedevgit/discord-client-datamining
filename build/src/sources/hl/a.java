package hl;

import android.view.accessibility.AccessibilityManager;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final AccessibilityManager f26130a = (AccessibilityManager) com.henninghall.date_picker.c.f16579a.getApplicationContext().getSystemService("accessibility");

    /* renamed from: b  reason: collision with root package name */
    private static Locale f26131b = Locale.getDefault();

    public static void a(Locale locale) {
        f26131b = locale;
    }
}
