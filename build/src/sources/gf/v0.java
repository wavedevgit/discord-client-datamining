package gf;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class v0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f26994a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static boolean f26995b;

    /* renamed from: c  reason: collision with root package name */
    private static String f26996c;

    /* renamed from: d  reason: collision with root package name */
    private static int f26997d;

    public static int a(Context context) {
        b(context);
        return f26997d;
    }

    private static void b(Context context) {
        Bundle bundle;
        synchronized (f26994a) {
            try {
                if (f26995b) {
                    return;
                }
                f26995b = true;
                try {
                    bundle = pf.c.a(context).c(context.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).metaData;
                } catch (PackageManager.NameNotFoundException e10) {
                    Log.wtf("MetadataValueReader", "This should never happen.", e10);
                }
                if (bundle == null) {
                    return;
                }
                f26996c = bundle.getString("com.google.app.id");
                f26997d = bundle.getInt("com.google.android.gms.version");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
