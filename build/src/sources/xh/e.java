package xh;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final k0 f54653c = new k0("SplitInstallInfoProvider");

    /* renamed from: a  reason: collision with root package name */
    private final Context f54654a;

    /* renamed from: b  reason: collision with root package name */
    private final String f54655b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Context context) {
        this.f54654a = context;
        this.f54655b = context.getPackageName();
    }

    public final Set a() {
        PackageInfo packageInfo;
        try {
            packageInfo = this.f54654a.getPackageManager().getPackageInfo(this.f54655b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        } catch (PackageManager.NameNotFoundException unused) {
            f54653c.b("App is not found in PackageManager", new Object[0]);
            packageInfo = null;
        }
        if (packageInfo != null && packageInfo.applicationInfo != null) {
            HashSet hashSet = new HashSet();
            Bundle bundle = packageInfo.applicationInfo.metaData;
            HashSet<String> hashSet2 = new HashSet();
            if (bundle != null) {
                String string = bundle.getString("com.android.dynamic.apk.fused.modules");
                if (string != null && !string.isEmpty()) {
                    Collections.addAll(hashSet2, string.split(",", -1));
                    hashSet2.remove("");
                    hashSet2.remove("base");
                } else {
                    f54653c.a("App has no fused modules.", new Object[0]);
                }
            }
            String[] strArr = packageInfo.splitNames;
            if (strArr != null) {
                f54653c.a("Adding splits from package manager: %s", Arrays.toString(strArr));
                Collections.addAll(hashSet2, strArr);
            } else {
                f54653c.a("No splits are found or app cannot be found in package manager.", new Object[0]);
            }
            d.a();
            for (String str : hashSet2) {
                if (!str.startsWith("config.") && !str.contains(".config.")) {
                    hashSet.add(str);
                }
            }
            return hashSet;
        }
        return new HashSet();
    }
}
