package hf;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f27326a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static boolean f27327b;

    /* renamed from: c  reason: collision with root package name */
    private static String f27328c;

    /* renamed from: d  reason: collision with root package name */
    private static int f27329d;

    public static int a(Context context) {
        b(context);
        return f27329d;
    }

    private static void b(Context context) {
        Bundle bundle;
        synchronized (f27326a) {
            try {
                if (f27327b) {
                    return;
                }
                f27327b = true;
                try {
                    bundle = qf.c.a(context).c(context.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).metaData;
                } catch (PackageManager.NameNotFoundException e10) {
                    Log.wtf("MetadataValueReader", "This should never happen.", e10);
                }
                if (bundle == null) {
                    return;
                }
                f27328c = bundle.getString("com.google.app.id");
                f27329d = bundle.getInt("com.google.android.gms.version");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
