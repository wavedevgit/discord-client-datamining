package androidx.core.content.pm;

import android.content.Context;
import android.content.pm.ShortcutInfo;
import android.content.pm.ShortcutManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Build;
import androidx.core.content.pm.a;
import androidx.core.graphics.drawable.IconCompat;
import b2.e;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import p1.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static volatile androidx.core.content.pm.a f3160a;

    /* renamed from: b  reason: collision with root package name */
    private static volatile List f3161b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        static String a(List list) {
            Iterator it = list.iterator();
            int i10 = -1;
            String str = null;
            while (it.hasNext()) {
                ShortcutInfo shortcutInfo = (ShortcutInfo) it.next();
                if (shortcutInfo.getRank() > i10) {
                    str = shortcutInfo.getId();
                    i10 = shortcutInfo.getRank();
                }
            }
            return str;
        }
    }

    static boolean a(Context context, ShortcutInfoCompat shortcutInfoCompat) {
        Bitmap decodeStream;
        IconCompat h10;
        IconCompat iconCompat = shortcutInfoCompat.f3137i;
        if (iconCompat == null) {
            return false;
        }
        int i10 = iconCompat.f3168a;
        if (i10 != 6 && i10 != 4) {
            return true;
        }
        InputStream r10 = iconCompat.r(context);
        if (r10 == null || (decodeStream = BitmapFactory.decodeStream(r10)) == null) {
            return false;
        }
        if (i10 == 6) {
            h10 = IconCompat.e(decodeStream);
        } else {
            h10 = IconCompat.h(decodeStream);
        }
        shortcutInfoCompat.f3137i = h10;
        return true;
    }

    public static int b(Context context) {
        e.g(context);
        if (Build.VERSION.SDK_INT >= 25) {
            return p1.e.a(context.getSystemService(d.a())).getMaxShortcutCountPerActivity();
        }
        return 5;
    }

    private static String c(List list) {
        Iterator it = list.iterator();
        int i10 = -1;
        String str = null;
        while (it.hasNext()) {
            ShortcutInfoCompat shortcutInfoCompat = (ShortcutInfoCompat) it.next();
            if (shortcutInfoCompat.n() > i10) {
                str = shortcutInfoCompat.g();
                i10 = shortcutInfoCompat.n();
            }
        }
        return str;
    }

    /* JADX WARN: Removed duplicated region for block: B:7:0x002b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.util.List d(android.content.Context r5) {
        /*
            java.util.List r0 = androidx.core.content.pm.b.f3161b
            if (r0 != 0) goto L71
            java.util.ArrayList r0 = new java.util.ArrayList
            r0.<init>()
            android.content.pm.PackageManager r1 = r5.getPackageManager()
            android.content.Intent r2 = new android.content.Intent
            java.lang.String r3 = "androidx.core.content.pm.SHORTCUT_LISTENER"
            r2.<init>(r3)
            java.lang.String r3 = r5.getPackageName()
            r2.setPackage(r3)
            r3 = 128(0x80, float:1.794E-43)
            java.util.List r1 = r1.queryIntentActivities(r2, r3)
            java.util.Iterator r1 = r1.iterator()
        L25:
            boolean r2 = r1.hasNext()
            if (r2 == 0) goto L6b
            java.lang.Object r2 = r1.next()
            android.content.pm.ResolveInfo r2 = (android.content.pm.ResolveInfo) r2
            android.content.pm.ActivityInfo r2 = r2.activityInfo
            if (r2 != 0) goto L36
            goto L25
        L36:
            android.os.Bundle r2 = r2.metaData
            if (r2 != 0) goto L3b
            goto L25
        L3b:
            java.lang.String r3 = "androidx.core.content.pm.shortcut_listener_impl"
            java.lang.String r2 = r2.getString(r3)
            if (r2 != 0) goto L44
            goto L25
        L44:
            java.lang.Class<androidx.core.content.pm.b> r3 = androidx.core.content.pm.b.class
            java.lang.ClassLoader r3 = r3.getClassLoader()     // Catch: java.lang.Exception -> L25
            r4 = 0
            java.lang.Class r2 = java.lang.Class.forName(r2, r4, r3)     // Catch: java.lang.Exception -> L25
            java.lang.String r3 = "getInstance"
            java.lang.Class<android.content.Context> r4 = android.content.Context.class
            java.lang.Class[] r4 = new java.lang.Class[]{r4}     // Catch: java.lang.Exception -> L25
            java.lang.reflect.Method r2 = r2.getMethod(r3, r4)     // Catch: java.lang.Exception -> L25
            java.lang.Object[] r3 = new java.lang.Object[]{r5}     // Catch: java.lang.Exception -> L25
            r4 = 0
            java.lang.Object r2 = r2.invoke(r4, r3)     // Catch: java.lang.Exception -> L25
            android.support.v4.media.session.b.a(r2)     // Catch: java.lang.Exception -> L25
            r0.add(r4)     // Catch: java.lang.Exception -> L25
            goto L25
        L6b:
            java.util.List r5 = androidx.core.content.pm.b.f3161b
            if (r5 != 0) goto L71
            androidx.core.content.pm.b.f3161b = r0
        L71:
            java.util.List r5 = androidx.core.content.pm.b.f3161b
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.core.content.pm.b.d(android.content.Context):java.util.List");
    }

    private static androidx.core.content.pm.a e(Context context) {
        if (f3160a == null) {
            try {
                f3160a = (androidx.core.content.pm.a) Class.forName("w3.a", false, b.class.getClassLoader()).getMethod("getInstance", Context.class).invoke(null, context);
            } catch (Exception unused) {
            }
            if (f3160a == null) {
                f3160a = new a.C0035a();
            }
        }
        return f3160a;
    }

    public static List f(Context context, int i10) {
        int i11 = Build.VERSION.SDK_INT;
        if (i11 >= 30) {
            return ShortcutInfoCompat.b(context, p1.e.a(context.getSystemService(d.a())).getShortcuts(i10));
        }
        if (i11 >= 25) {
            ShortcutManager a10 = p1.e.a(context.getSystemService(d.a()));
            ArrayList arrayList = new ArrayList();
            if ((i10 & 1) != 0) {
                arrayList.addAll(a10.getManifestShortcuts());
            }
            if ((i10 & 2) != 0) {
                arrayList.addAll(a10.getDynamicShortcuts());
            }
            if ((i10 & 4) != 0) {
                arrayList.addAll(a10.getPinnedShortcuts());
            }
            return ShortcutInfoCompat.b(context, arrayList);
        }
        if ((i10 & 2) != 0) {
            try {
                return e(context).b();
            } catch (Exception unused) {
            }
        }
        return Collections.EMPTY_LIST;
    }

    public static boolean g(Context context, ShortcutInfoCompat shortcutInfoCompat) {
        e.g(context);
        e.g(shortcutInfoCompat);
        int i10 = Build.VERSION.SDK_INT;
        if (i10 <= 32 && shortcutInfoCompat.p(1)) {
            Iterator it = d(context).iterator();
            if (!it.hasNext()) {
                return true;
            }
            android.support.v4.media.session.b.a(it.next());
            Collections.singletonList(shortcutInfoCompat);
            throw null;
        }
        int b10 = b(context);
        if (b10 == 0) {
            return false;
        }
        if (i10 <= 29) {
            a(context, shortcutInfoCompat);
        }
        if (i10 >= 30) {
            p1.e.a(context.getSystemService(d.a())).pushDynamicShortcut(shortcutInfoCompat.q());
        } else if (i10 >= 25) {
            ShortcutManager a10 = p1.e.a(context.getSystemService(d.a()));
            if (a10.isRateLimitingActive()) {
                return false;
            }
            List<ShortcutInfo> dynamicShortcuts = a10.getDynamicShortcuts();
            if (dynamicShortcuts.size() >= b10) {
                a10.removeDynamicShortcuts(Arrays.asList(a.a(dynamicShortcuts)));
            }
            a10.addDynamicShortcuts(Arrays.asList(shortcutInfoCompat.q()));
        }
        androidx.core.content.pm.a e10 = e(context);
        try {
            List b11 = e10.b();
            if (b11.size() >= b10) {
                e10.d(Arrays.asList(c(b11)));
            }
            e10.a(Arrays.asList(shortcutInfoCompat));
            Iterator it2 = d(context).iterator();
            if (!it2.hasNext()) {
                i(context, shortcutInfoCompat.g());
                return true;
            }
            android.support.v4.media.session.b.a(it2.next());
            Collections.singletonList(shortcutInfoCompat);
            throw null;
        } catch (Exception unused) {
            Iterator it3 = d(context).iterator();
            if (!it3.hasNext()) {
                i(context, shortcutInfoCompat.g());
                return false;
            }
            android.support.v4.media.session.b.a(it3.next());
            Collections.singletonList(shortcutInfoCompat);
            throw null;
        } catch (Throwable th2) {
            Iterator it4 = d(context).iterator();
            if (it4.hasNext()) {
                android.support.v4.media.session.b.a(it4.next());
                Collections.singletonList(shortcutInfoCompat);
                throw null;
            }
            i(context, shortcutInfoCompat.g());
            throw th2;
        }
    }

    public static void h(Context context) {
        if (Build.VERSION.SDK_INT >= 25) {
            p1.e.a(context.getSystemService(d.a())).removeAllDynamicShortcuts();
        }
        e(context).c();
        Iterator it = d(context).iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public static void i(Context context, String str) {
        e.g(context);
        e.g(str);
        if (Build.VERSION.SDK_INT >= 25) {
            p1.e.a(context.getSystemService(d.a())).reportShortcutUsed(str);
        }
        Iterator it = d(context).iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        Collections.singletonList(str);
        throw null;
    }
}
