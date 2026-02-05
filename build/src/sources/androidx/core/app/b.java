package androidx.core.app;

import android.app.Activity;
import android.app.SharedElementCallback;
import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.content.pm.PackageManager;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Parcelable;
import android.text.TextUtils;
import android.view.View;
import androidx.core.app.SharedElementCallback;
import androidx.core.app.b;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b extends androidx.core.content.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static void a(Activity activity) {
            activity.finishAfterTransition();
        }

        static void b(Activity activity) {
            activity.postponeEnterTransition();
        }

        static void c(Activity activity, android.app.SharedElementCallback sharedElementCallback) {
            activity.setEnterSharedElementCallback(sharedElementCallback);
        }

        static void d(Activity activity, android.app.SharedElementCallback sharedElementCallback) {
            activity.setExitSharedElementCallback(sharedElementCallback);
        }

        static void e(Activity activity) {
            activity.startPostponedEnterTransition();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.core.app.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0034b {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static void a(Object obj) {
            ((SharedElementCallback.OnSharedElementsReadyListener) obj).onSharedElementsReady();
        }

        static void b(Activity activity, String[] strArr, int i10) {
            activity.requestPermissions(strArr, i10);
        }

        static boolean c(Activity activity, String str) {
            return activity.shouldShowRequestPermissionRationale(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {
        static boolean a(Activity activity, String str) {
            try {
                return ((Boolean) PackageManager.class.getMethod("shouldShowRequestPermissionRationale", String.class).invoke(activity.getApplication().getPackageManager(), str)).booleanValue();
            } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException unused) {
                return activity.shouldShowRequestPermissionRationale(str);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d {
        static boolean a(Activity activity, String str) {
            return activity.shouldShowRequestPermissionRationale(str);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface e {
        void validateRequestPermissionsRequestCode(int i10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class f extends android.app.SharedElementCallback {

        /* renamed from: a  reason: collision with root package name */
        private final SharedElementCallback f3193a;

        f(SharedElementCallback sharedElementCallback) {
            this.f3193a = sharedElementCallback;
        }

        @Override // android.app.SharedElementCallback
        public Parcelable onCaptureSharedElementSnapshot(View view, Matrix matrix, RectF rectF) {
            return this.f3193a.b(view, matrix, rectF);
        }

        @Override // android.app.SharedElementCallback
        public View onCreateSnapshotView(Context context, Parcelable parcelable) {
            return this.f3193a.c(context, parcelable);
        }

        @Override // android.app.SharedElementCallback
        public void onMapSharedElements(List list, Map map) {
            this.f3193a.d(list, map);
        }

        @Override // android.app.SharedElementCallback
        public void onRejectSharedElements(List list) {
            this.f3193a.e(list);
        }

        @Override // android.app.SharedElementCallback
        public void onSharedElementEnd(List list, List list2, List list3) {
            this.f3193a.f(list, list2, list3);
        }

        @Override // android.app.SharedElementCallback
        public void onSharedElementStart(List list, List list2, List list3) {
            this.f3193a.g(list, list2, list3);
        }

        @Override // android.app.SharedElementCallback
        public void onSharedElementsArrived(List list, List list2, final SharedElementCallback.OnSharedElementsReadyListener onSharedElementsReadyListener) {
            this.f3193a.h(list, list2, new SharedElementCallback.a() { // from class: androidx.core.app.c
                @Override // androidx.core.app.SharedElementCallback.a
                public final void onSharedElementsReady() {
                    b.C0034b.a(onSharedElementsReadyListener);
                }
            });
        }
    }

    public static void A(Activity activity, IntentSender intentSender, int i10, Intent intent, int i11, int i12, int i13, Bundle bundle) {
        activity.startIntentSenderForResult(intentSender, i10, intent, i11, i12, i13, bundle);
    }

    public static void B(Activity activity) {
        a.e(activity);
    }

    public static /* synthetic */ void q(Activity activity) {
        if (!activity.isFinishing() && !androidx.core.app.e.i(activity)) {
            activity.recreate();
        }
    }

    public static void r(Activity activity) {
        activity.finishAffinity();
    }

    public static void s(Activity activity) {
        a.a(activity);
    }

    public static void t(Activity activity) {
        a.b(activity);
    }

    public static void u(final Activity activity) {
        if (Build.VERSION.SDK_INT >= 28) {
            activity.recreate();
        } else {
            new Handler(activity.getMainLooper()).post(new Runnable() { // from class: androidx.core.app.a
                @Override // java.lang.Runnable
                public final void run() {
                    b.q(activity);
                }
            });
        }
    }

    public static void v(Activity activity, String[] strArr, int i10) {
        String[] strArr2;
        HashSet hashSet = new HashSet();
        for (int i11 = 0; i11 < strArr.length; i11++) {
            if (!TextUtils.isEmpty(strArr[i11])) {
                if (Build.VERSION.SDK_INT < 33 && TextUtils.equals(strArr[i11], "android.permission.POST_NOTIFICATIONS")) {
                    hashSet.add(Integer.valueOf(i11));
                }
            } else {
                throw new IllegalArgumentException("Permission request for permissions " + Arrays.toString(strArr) + " must not contain null or empty values");
            }
        }
        int size = hashSet.size();
        if (size > 0) {
            strArr2 = new String[strArr.length - size];
        } else {
            strArr2 = strArr;
        }
        if (size > 0) {
            if (size == strArr.length) {
                return;
            }
            int i12 = 0;
            for (int i13 = 0; i13 < strArr.length; i13++) {
                if (!hashSet.contains(Integer.valueOf(i13))) {
                    strArr2[i12] = strArr[i13];
                    i12++;
                }
            }
        }
        if (activity instanceof e) {
            ((e) activity).validateRequestPermissionsRequestCode(i10);
        }
        C0034b.b(activity, strArr, i10);
    }

    public static void w(Activity activity, SharedElementCallback sharedElementCallback) {
        f fVar;
        if (sharedElementCallback != null) {
            fVar = new f(sharedElementCallback);
        } else {
            fVar = null;
        }
        a.c(activity, fVar);
    }

    public static void x(Activity activity, SharedElementCallback sharedElementCallback) {
        f fVar;
        if (sharedElementCallback != null) {
            fVar = new f(sharedElementCallback);
        } else {
            fVar = null;
        }
        a.d(activity, fVar);
    }

    public static boolean y(Activity activity, String str) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 < 33 && TextUtils.equals("android.permission.POST_NOTIFICATIONS", str)) {
            return false;
        }
        if (i10 >= 32) {
            return d.a(activity, str);
        }
        if (i10 == 31) {
            return c.a(activity, str);
        }
        return C0034b.c(activity, str);
    }

    public static void z(Activity activity, Intent intent, int i10, Bundle bundle) {
        activity.startActivityForResult(intent, i10, bundle);
    }
}
