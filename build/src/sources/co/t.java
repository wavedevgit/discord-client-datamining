package co;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.NoSuchElementException;
import java.util.Scanner;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.CharsKt;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class t {

    /* renamed from: a  reason: collision with root package name */
    private static final List f7661a = CollectionsKt.o("com.noshufou.android.su", "com.noshufou.android.su.elite", "eu.chainfire.supersu", "com.koushikdutta.superuser", "com.thirdparty.superuser", "com.yellowes.su", "com.topjohnwu.magisk", "com.kingroot.kinguser", "com.kingo.root", "com.smedialink.oneclickroot", "com.zhiqupk.root.global", "com.alephzain.framaroot");

    /* renamed from: b  reason: collision with root package name */
    private static final List f7662b = CollectionsKt.o("com.koushikdutta.rommanager", "com.koushikdutta.rommanager.license", "com.dimonvideo.luckypatcher", "com.chelpus.lackypatch", "com.ramdroid.appquarantine", "com.ramdroid.appquarantinepro", "com.android.vending.billing.InAppBillingService.COIN", "com.android.vending.billing.InAppBillingService.LUCK", "com.chelpus.luckypatcher", "com.blackmartalpha", "org.blackmart.market", "com.allinone.free", "com.repodroid.app", "org.creeplays.hack", "com.baseappfull.fwd", "com.zmapp", "com.dv.marketmod.installer", "org.mobilism.android", "com.android.wp.net.log", "com.android.camera.update", "cc.madkite.freedom", "com.solohsu.android.edxp.manager", "org.meowcat.edxposed.manager", "com.xmodgame", "com.cih.game_cih", "com.charles.lpoqasert", "catch_.me_.if_.you_.can_");

    /* renamed from: c  reason: collision with root package name */
    private static final List f7663c = CollectionsKt.o("com.devadvance.rootcloak", "com.devadvance.rootcloakplus", "de.robv.android.xposed.installer", "com.saurik.substrate", "com.zachspong.temprootremovejb", "com.amphoras.hidemyroot", "com.amphoras.hidemyrootadfree", "com.formyhm.hiderootPremium", "com.formyhm.hideroot");

    /* renamed from: d  reason: collision with root package name */
    private static final List f7664d = CollectionsKt.o("/data/local/", "/data/local/bin/", "/data/local/xbin/", "/sbin/", "/su/bin/", "/system/bin/", "/system/bin/.ext/", "/system/bin/failsafe/", "/system/sd/xbin/", "/system/usr/we-need-root/", "/system/xbin/", "/cache/", "/data/", "/dev/");

    /* renamed from: e  reason: collision with root package name */
    private static final List f7665e = CollectionsKt.o("/system", "/system/bin", "/system/sbin", "/system/xbin", "/vendor/bin", "/sbin", "/etc");

    /* renamed from: f  reason: collision with root package name */
    private static Boolean f7666f;

    private static final boolean a(Context context) {
        return i(context, f7662b);
    }

    private static final boolean b(Context context) {
        return i(context, f7661a);
    }

    private static final boolean c(String str) {
        for (String str2 : f7664d) {
            if (new File(str2, str).exists()) {
                return true;
            }
        }
        return false;
    }

    private static final boolean d() {
        boolean z10 = false;
        Process process = null;
        try {
            process = Runtime.getRuntime().exec((String[]) StringsKt.split$default("which su", new String[]{" "}, false, 0, 6, null).toArray(new String[0]));
            if (new BufferedReader(new InputStreamReader(process.getInputStream())).readLine() != null) {
                z10 = true;
            }
            process.destroy();
            return z10;
        } catch (Exception unused) {
            if (process != null) {
                process.destroy();
            }
            return false;
        } catch (Throwable th2) {
            if (process != null) {
                process.destroy();
            }
            throw th2;
        }
    }

    private static final List e(String str) {
        InputStream inputStream;
        String str2;
        try {
            inputStream = Runtime.getRuntime().exec(str).getInputStream();
        } catch (IOException unused) {
            inputStream = null;
        }
        try {
            str2 = new Scanner(inputStream).useDelimiter("\\A").next();
        } catch (NoSuchElementException unused2) {
            str2 = "";
        }
        String str3 = str2;
        Intrinsics.checkNotNull(str3);
        List split$default = StringsKt.split$default(str3, new String[]{ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE}, false, 0, 6, null);
        if (!split$default.isEmpty()) {
            ListIterator listIterator = split$default.listIterator(split$default.size());
            while (listIterator.hasPrevious()) {
                if (((String) listIterator.previous()).length() != 0) {
                    return CollectionsKt.a1(split$default, listIterator.nextIndex() + 1);
                }
            }
        }
        return CollectionsKt.l();
    }

    private static final boolean f() {
        boolean z10 = false;
        boolean z11 = true;
        for (String str : l()) {
            if (StringsKt.V(str, "[ro.debuggable]", false, 2, null) && StringsKt.V(str, "[1]", false, 2, null)) {
                z10 = true;
            } else if (StringsKt.V(str, "[ro.secure]", false, 2, null) && StringsKt.V(str, "[0]", false, 2, null)) {
                z11 = false;
            }
        }
        if (!z10 || z11) {
            return false;
        }
        return true;
    }

    private static final boolean g() {
        String str;
        String str2;
        int i10;
        boolean z10;
        for (String str3 : k()) {
            List split$default = StringsKt.split$default(str3, new String[]{" "}, false, 0, 6, null);
            if (split$default.size() == 6) {
                str = (String) split$default.get(2);
                str2 = (String) split$default.get(5);
            } else if (split$default.size() == 4) {
                str = (String) split$default.get(1);
                str2 = (String) split$default.get(3);
            } else {
                continue;
            }
            for (String str4 : f7665e) {
                if (StringsKt.A(str, str4, true)) {
                    int length = str2.length() - 1;
                    int i11 = 0;
                    boolean z11 = false;
                    while (i11 <= length) {
                        if (!z11) {
                            i10 = i11;
                        } else {
                            i10 = length;
                        }
                        char charAt = str2.charAt(i10);
                        if (!CharsKt.b(charAt) && charAt != '(' && charAt != ')') {
                            z10 = false;
                        } else {
                            z10 = true;
                        }
                        if (!z11) {
                            if (!z10) {
                                z11 = true;
                            } else {
                                i11++;
                            }
                        } else if (!z10) {
                            break;
                        } else {
                            length--;
                        }
                    }
                    for (String str5 : StringsKt.split$default(str2.subSequence(i11, length + 1).toString(), new String[]{","}, false, 0, 6, null)) {
                        if (StringsKt.A(str5, "rw", true)) {
                            return true;
                        }
                    }
                    continue;
                }
            }
            continue;
        }
        return false;
    }

    private static final boolean h() {
        String str = Build.TAGS;
        String str2 = Build.FINGERPRINT;
        String str3 = Build.PRODUCT;
        String str4 = Build.HARDWARE;
        String str5 = Build.DISPLAY;
        if (str != null) {
            if (!StringsKt.V(str, "test-keys", false, 2, null)) {
                Intrinsics.checkNotNull(str2);
                if (!StringsKt.V(str2, "genric.*test-keys", false, 2, null)) {
                    Intrinsics.checkNotNull(str3);
                    if (!StringsKt.V(str3, "generic", false, 2, null) && !StringsKt.V(str3, "sdk", false, 2, null)) {
                        Intrinsics.checkNotNull(str4);
                        if (!StringsKt.V(str4, "goldfish", false, 2, null)) {
                            Intrinsics.checkNotNull(str5);
                            if (StringsKt.V(str5, ".*test-keys", false, 2, null)) {
                                return true;
                            }
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
        return false;
    }

    private static final boolean i(Context context, List list) {
        PackageManager packageManager = context.getPackageManager();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            String str = (String) it.next();
            try {
                if (Build.VERSION.SDK_INT >= 33) {
                    packageManager.getPackageInfo(str, PackageManager.PackageInfoFlags.of(0L));
                    return true;
                }
                packageManager.getPackageInfo(str, 0);
                return true;
            } catch (PackageManager.NameNotFoundException unused) {
            }
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:24:0x0047, code lost:
        if (d() != false) goto L29;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final boolean j(android.content.Context r2) {
        /*
            java.lang.String r0 = "<this>"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r2, r0)
            java.lang.Boolean r0 = co.t.f7666f
            if (r0 == 0) goto Le
            boolean r2 = r0.booleanValue()
            return r2
        Le:
            r0 = 0
            boolean r1 = b(r2)     // Catch: java.lang.Exception -> L4a
            if (r1 != 0) goto L49
            boolean r2 = a(r2)     // Catch: java.lang.Exception -> L4a
            if (r2 != 0) goto L49
            java.lang.String r2 = "su"
            boolean r2 = c(r2)     // Catch: java.lang.Exception -> L4a
            if (r2 != 0) goto L49
            java.lang.String r2 = "magisk"
            boolean r2 = c(r2)     // Catch: java.lang.Exception -> L4a
            if (r2 != 0) goto L49
            boolean r2 = f()     // Catch: java.lang.Exception -> L4a
            if (r2 != 0) goto L49
            boolean r2 = g()     // Catch: java.lang.Exception -> L4a
            if (r2 != 0) goto L49
            boolean r2 = h()     // Catch: java.lang.Exception -> L4a
            if (r2 == 0) goto L43
            boolean r2 = co.h.a()     // Catch: java.lang.Exception -> L4a
            if (r2 == 0) goto L49
        L43:
            boolean r2 = d()     // Catch: java.lang.Exception -> L4a
            if (r2 == 0) goto L4a
        L49:
            r0 = 1
        L4a:
            java.lang.Boolean r2 = java.lang.Boolean.valueOf(r0)
            co.t.f7666f = r2
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: co.t.j(android.content.Context):boolean");
    }

    private static final List k() {
        return e("mount");
    }

    private static final List l() {
        return e("getprop");
    }
}
