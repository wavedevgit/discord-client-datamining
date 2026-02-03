package com.google.android.material.datepicker;

import android.content.Context;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static String a(Context context, long j10, boolean z10, boolean z11, boolean z12) {
        String d10 = d(j10);
        if (z10) {
            d10 = String.format(context.getString(yg.i.f54482q), d10);
        }
        if (z11) {
            return String.format(context.getString(yg.i.f54481p), d10);
        }
        if (z12) {
            return String.format(context.getString(yg.i.f54478m), d10);
        }
        return d10;
    }

    static String b(long j10) {
        return c(j10, Locale.getDefault());
    }

    static String c(long j10, Locale locale) {
        return t.d(locale).format(new Date(j10));
    }

    static String d(long j10) {
        if (i(j10)) {
            return b(j10);
        }
        return g(j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String e(Context context, int i10) {
        if (t.g().get(1) == i10) {
            return String.format(context.getString(yg.i.f54479n), Integer.valueOf(i10));
        }
        return String.format(context.getString(yg.i.f54480o), Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String f(long j10) {
        return t.k(Locale.getDefault()).format(new Date(j10));
    }

    static String g(long j10) {
        return h(j10, Locale.getDefault());
    }

    static String h(long j10, Locale locale) {
        return t.l(locale).format(new Date(j10));
    }

    private static boolean i(long j10) {
        Calendar g10 = t.g();
        Calendar i10 = t.i();
        i10.setTimeInMillis(j10);
        if (g10.get(1) == i10.get(1)) {
            return true;
        }
        return false;
    }
}
