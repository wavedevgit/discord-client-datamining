package a0;

import a0.z1;
import android.app.Service;
import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.os.Bundle;
import androidx.arch.core.util.Function;
import com.discord.media.utils.DiscordVideoMediaSource;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b2 implements Function {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends Service {
    }

    private static z1 b(Context context, Bundle bundle) {
        boolean z10 = bundle.getBoolean("androidx.camera.core.quirks.DEFAULT_QUIRK_ENABLED", true);
        String[] c10 = c(context, bundle, "androidx.camera.core.quirks.FORCE_ENABLED");
        String[] c11 = c(context, bundle, "androidx.camera.core.quirks.FORCE_DISABLED");
        x.y0.a("QuirkSettingsLoader", "Loaded quirk settings from metadata:");
        x.y0.a("QuirkSettingsLoader", "  KEY_DEFAULT_QUIRK_ENABLED = " + z10);
        x.y0.a("QuirkSettingsLoader", "  KEY_QUIRK_FORCE_ENABLED = " + Arrays.toString(c10));
        x.y0.a("QuirkSettingsLoader", "  KEY_QUIRK_FORCE_DISABLED = " + Arrays.toString(c11));
        return new z1.b().d(z10).c(e(c10)).b(e(c11)).a();
    }

    private static String[] c(Context context, Bundle bundle, String str) {
        if (!bundle.containsKey(str)) {
            return new String[0];
        }
        int i10 = bundle.getInt(str, -1);
        if (i10 == -1) {
            x.y0.l("QuirkSettingsLoader", "Resource ID not found for key: " + str);
            return new String[0];
        }
        try {
            return context.getResources().getStringArray(i10);
        } catch (Resources.NotFoundException e10) {
            x.y0.m("QuirkSettingsLoader", "Quirk class names resource not found: " + i10, e10);
            return new String[0];
        }
    }

    private static Class d(String str) {
        try {
            Class<?> cls = Class.forName(str);
            if (y1.class.isAssignableFrom(cls)) {
                return cls;
            }
            x.y0.l("QuirkSettingsLoader", str + " does not implement the Quirk interface.");
            return null;
        } catch (ClassNotFoundException e10) {
            x.y0.m("QuirkSettingsLoader", "Class not found: " + str, e10);
            return null;
        }
    }

    private static Set e(String[] strArr) {
        HashSet hashSet = new HashSet();
        for (String str : strArr) {
            Class d10 = d(str);
            if (d10 != null) {
                hashSet.add(d10);
            }
        }
        return hashSet;
    }

    @Override // androidx.arch.core.util.Function
    /* renamed from: a */
    public z1 apply(Context context) {
        try {
            Bundle bundle = context.getPackageManager().getServiceInfo(new ComponentName(context, a.class), DiscordVideoMediaSource.DEFAULT_WIDTH).metaData;
            if (bundle == null) {
                x.y0.l("QuirkSettingsLoader", "No metadata in MetadataHolderService.");
                return null;
            }
            return b(context, bundle);
        } catch (PackageManager.NameNotFoundException unused) {
            x.y0.a("QuirkSettingsLoader", "QuirkSettings$MetadataHolderService is not found.");
            return null;
        }
    }
}
