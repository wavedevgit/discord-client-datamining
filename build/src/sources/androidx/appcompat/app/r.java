package androidx.appcompat.app;

import android.content.res.Resources;
import android.os.Build;
import android.util.Log;
import android.util.LongSparseArray;
import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private static Field f1087a;

    /* renamed from: b  reason: collision with root package name */
    private static boolean f1088b;

    /* renamed from: c  reason: collision with root package name */
    private static Class f1089c;

    /* renamed from: d  reason: collision with root package name */
    private static boolean f1090d;

    /* renamed from: e  reason: collision with root package name */
    private static Field f1091e;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f1092f;

    /* renamed from: g  reason: collision with root package name */
    private static Field f1093g;

    /* renamed from: h  reason: collision with root package name */
    private static boolean f1094h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(Resources resources) {
        if (Build.VERSION.SDK_INT >= 28) {
            return;
        }
        b(resources);
    }

    private static void b(Resources resources) {
        Object obj;
        if (!f1094h) {
            try {
                Field declaredField = Resources.class.getDeclaredField("mResourcesImpl");
                f1093g = declaredField;
                declaredField.setAccessible(true);
            } catch (NoSuchFieldException e10) {
                Log.e("ResourcesFlusher", "Could not retrieve Resources#mResourcesImpl field", e10);
            }
            f1094h = true;
        }
        Field field = f1093g;
        if (field != null) {
            Object obj2 = null;
            try {
                obj = field.get(resources);
            } catch (IllegalAccessException e11) {
                Log.e("ResourcesFlusher", "Could not retrieve value from Resources#mResourcesImpl", e11);
                obj = null;
            }
            if (obj != null) {
                if (!f1088b) {
                    try {
                        Field declaredField2 = obj.getClass().getDeclaredField("mDrawableCache");
                        f1087a = declaredField2;
                        declaredField2.setAccessible(true);
                    } catch (NoSuchFieldException e12) {
                        Log.e("ResourcesFlusher", "Could not retrieve ResourcesImpl#mDrawableCache field", e12);
                    }
                    f1088b = true;
                }
                Field field2 = f1087a;
                if (field2 != null) {
                    try {
                        obj2 = field2.get(obj);
                    } catch (IllegalAccessException e13) {
                        Log.e("ResourcesFlusher", "Could not retrieve value from ResourcesImpl#mDrawableCache", e13);
                    }
                }
                if (obj2 != null) {
                    c(obj2);
                }
            }
        }
    }

    private static void c(Object obj) {
        LongSparseArray longSparseArray;
        if (!f1090d) {
            try {
                f1089c = Class.forName("android.content.res.ThemedResourceCache");
            } catch (ClassNotFoundException e10) {
                Log.e("ResourcesFlusher", "Could not find ThemedResourceCache class", e10);
            }
            f1090d = true;
        }
        Class cls = f1089c;
        if (cls != null) {
            if (!f1092f) {
                try {
                    Field declaredField = cls.getDeclaredField("mUnthemedEntries");
                    f1091e = declaredField;
                    declaredField.setAccessible(true);
                } catch (NoSuchFieldException e11) {
                    Log.e("ResourcesFlusher", "Could not retrieve ThemedResourceCache#mUnthemedEntries field", e11);
                }
                f1092f = true;
            }
            Field field = f1091e;
            if (field != null) {
                try {
                    longSparseArray = (LongSparseArray) field.get(obj);
                } catch (IllegalAccessException e12) {
                    Log.e("ResourcesFlusher", "Could not retrieve value from ThemedResourceCache#mUnthemedEntries", e12);
                    longSparseArray = null;
                }
                if (longSparseArray != null) {
                    longSparseArray.clear();
                }
            }
        }
    }
}
