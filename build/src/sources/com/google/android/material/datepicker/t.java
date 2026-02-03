package com.google.android.material.datepicker;

import android.icu.text.DateFormat;
import android.icu.text.DisplayContext;
import j$.util.DesugarTimeZone;
import java.util.Calendar;
import java.util.Locale;
import java.util.TimeZone;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class t {

    /* renamed from: a  reason: collision with root package name */
    static AtomicReference f14595a = new AtomicReference();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long a(long j10) {
        Calendar i10 = i();
        i10.setTimeInMillis(j10);
        return c(i10).getTimeInMillis();
    }

    private static DateFormat b(String str, Locale locale) {
        DateFormat instanceForSkeleton = DateFormat.getInstanceForSkeleton(str, locale);
        instanceForSkeleton.setTimeZone(h());
        instanceForSkeleton.setContext(DisplayContext.CAPITALIZATION_FOR_STANDALONE);
        return instanceForSkeleton;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Calendar c(Calendar calendar) {
        Calendar j10 = j(calendar);
        Calendar i10 = i();
        i10.set(j10.get(1), j10.get(2), j10.get(5));
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static DateFormat d(Locale locale) {
        return b("MMMMEEEEd", locale);
    }

    static s e() {
        s sVar = (s) f14595a.get();
        if (sVar == null) {
            return s.c();
        }
        return sVar;
    }

    private static TimeZone f() {
        return DesugarTimeZone.getTimeZone("UTC");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Calendar g() {
        Calendar a10 = e().a();
        a10.set(11, 0);
        a10.set(12, 0);
        a10.set(13, 0);
        a10.set(14, 0);
        a10.setTimeZone(f());
        return a10;
    }

    private static android.icu.util.TimeZone h() {
        return android.icu.util.TimeZone.getTimeZone("UTC");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Calendar i() {
        return j(null);
    }

    static Calendar j(Calendar calendar) {
        Calendar calendar2 = Calendar.getInstance(f());
        if (calendar == null) {
            calendar2.clear();
            return calendar2;
        }
        calendar2.setTimeInMillis(calendar.getTimeInMillis());
        return calendar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static DateFormat k(Locale locale) {
        return b("yMMMM", locale);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static DateFormat l(Locale locale) {
        return b("yMMMMEEEEd", locale);
    }
}
