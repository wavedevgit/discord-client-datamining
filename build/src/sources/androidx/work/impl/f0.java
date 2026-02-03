package androidx.work.impl;

import android.content.Context;
import java.io.File;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    public static final f0 f5620a = new f0();

    private f0() {
    }

    private final File c(Context context) {
        return new File(a.f5529a.a(context), "androidx.work.workdb");
    }

    public static final void d(Context context) {
        String str;
        String str2;
        String str3;
        String str4;
        Intrinsics.checkNotNullParameter(context, "context");
        f0 f0Var = f5620a;
        if (f0Var.b(context).exists()) {
            k4.m e10 = k4.m.e();
            str = g0.f5650a;
            e10.a(str, "Migrating WorkDatabase to the no-backup directory");
            for (Map.Entry entry : f0Var.e(context).entrySet()) {
                File file = (File) entry.getKey();
                File file2 = (File) entry.getValue();
                if (file.exists()) {
                    if (file2.exists()) {
                        k4.m e11 = k4.m.e();
                        str4 = g0.f5650a;
                        e11.k(str4, "Over-writing contents of " + file2);
                    }
                    if (file.renameTo(file2)) {
                        str2 = "Migrated " + file + "to " + file2;
                    } else {
                        str2 = "Renaming " + file + " to " + file2 + " failed";
                    }
                    k4.m e12 = k4.m.e();
                    str3 = g0.f5650a;
                    e12.a(str3, str2);
                }
            }
        }
    }

    public final File a(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return c(context);
    }

    public final File b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        File databasePath = context.getDatabasePath("androidx.work.workdb");
        Intrinsics.checkNotNullExpressionValue(databasePath, "context.getDatabasePath(WORK_DATABASE_NAME)");
        return databasePath;
    }

    public final Map e(Context context) {
        String[] strArr;
        Intrinsics.checkNotNullParameter(context, "context");
        File b10 = b(context);
        File a10 = a(context);
        strArr = g0.f5651b;
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(strArr.length), 16));
        for (String str : strArr) {
            Pair a11 = lr.v.a(new File(b10.getPath() + str), new File(a10.getPath() + str));
            linkedHashMap.put(a11.c(), a11.d());
        }
        return kotlin.collections.o0.r(linkedHashMap, lr.v.a(b10, a10));
    }
}
