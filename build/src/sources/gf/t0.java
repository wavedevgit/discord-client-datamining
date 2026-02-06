package gf;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f25148a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static boolean f25149b;

    /* renamed from: c  reason: collision with root package name */
    private static String f25150c;

    /* renamed from: d  reason: collision with root package name */
    private static int f25151d;

    public static int a(Context context) {
        b(context);
        return f25151d;
    }

    private static void b(Context context) {
        Bundle bundle;
        synchronized (f25148a) {
            try {
                if (f25149b) {
                    return;
                }
                f25149b = true;
                try {
                    bundle = pf.c.a(context).c(context.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).metaData;
                } catch (PackageManager.NameNotFoundException e10) {
                    Log.wtf("MetadataValueReader", "This should never happen.", e10);
                }
                if (bundle == null) {
                    return;
                }
                f25150c = bundle.getString("com.google.app.id");
                f25151d = bundle.getInt("com.google.android.gms.version");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
