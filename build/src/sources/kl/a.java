package kl;

import android.view.accessibility.AccessibilityManager;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final AccessibilityManager f32450a = (AccessibilityManager) com.henninghall.date_picker.c.f17469a.getApplicationContext().getSystemService("accessibility");

    /* renamed from: b  reason: collision with root package name */
    private static Locale f32451b = Locale.getDefault();

    public static void a(Locale locale) {
        f32451b = locale;
    }
}
