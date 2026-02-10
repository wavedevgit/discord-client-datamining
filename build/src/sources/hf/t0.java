package hf;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f27325a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static boolean f27326b;

    /* renamed from: c  reason: collision with root package name */
    private static String f27327c;

    /* renamed from: d  reason: collision with root package name */
    private static int f27328d;

    public static int a(Context context) {
        b(context);
        return f27328d;
    }

    private static void b(Context context) {
        Bundle bundle;
        synchronized (f27325a) {
            try {
                if (f27326b) {
                    return;
                }
                f27326b = true;
                try {
                    bundle = qf.c.a(context).c(context.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT).metaData;
                } catch (PackageManager.NameNotFoundException e10) {
                    Log.wtf("MetadataValueReader", "This should never happen.", e10);
                }
                if (bundle == null) {
                    return;
                }
                f27327c = bundle.getString("com.google.app.id");
                f27328d = bundle.getInt("com.google.android.gms.version");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
