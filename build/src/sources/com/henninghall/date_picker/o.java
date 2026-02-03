package com.henninghall.date_picker;

import android.text.format.DateFormat;
import android.text.format.DateUtils;
import j$.util.DesugarTimeZone;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;
import java.util.TimeZone;
import net.time4j.k0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o {
    public static String a(String str) {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }

    public static String b(Calendar calendar) {
        return d().format(calendar.getTime());
    }

    public static boolean c() {
        return !DateFormat.is24HourFormat(c.f16205a);
    }

    private static SimpleDateFormat d() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
        simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        return simpleDateFormat;
    }

    public static int e(int i10, int i11, int i12, boolean z10) {
        int i13;
        int i14;
        int i15 = i12 + 1;
        int i16 = i11 - i10;
        if (i16 > 0) {
            i13 = i16 - i15;
        } else {
            i13 = i15 + i16;
        }
        if (!z10 ? !((i14 = i10 + i16) <= i12 && i14 >= 0) : Math.abs(i16) >= Math.abs(i13)) {
            return i13;
        }
        return i16;
    }

    public static boolean f(Calendar calendar) {
        return DateUtils.isToday(calendar.getTimeInMillis());
    }

    public static Calendar g(String str, TimeZone timeZone) {
        if (str == null) {
            return null;
        }
        try {
            Calendar calendar = Calendar.getInstance(timeZone);
            calendar.setTime(d().parse(str));
            return calendar;
        } catch (ParseException e10) {
            e10.printStackTrace();
            return null;
        }
    }

    public static al.c h(char c10) {
        if (c10 != 'H') {
            if (c10 != 'M') {
                if (c10 != 'a') {
                    if (c10 != 'd') {
                        if (c10 != 'h') {
                            if (c10 != 'm') {
                                if (c10 == 'y') {
                                    return al.c.YEAR;
                                }
                                throw new Exception("Invalid pattern char: " + c10);
                            }
                            return al.c.MINUTE;
                        }
                    } else {
                        return al.c.DATE;
                    }
                } else {
                    return al.c.AM_PM;
                }
            } else {
                return al.c.MONTH;
            }
        }
        return al.c.HOUR;
    }

    public static String i(Locale locale) {
        return k0.b(locale).c();
    }

    public static int j(int i10) {
        return (int) (i10 * c.f16205a.getResources().getDisplayMetrics().density);
    }

    public static String k(int i10) {
        return new DecimalFormat("00").format(i10);
    }
}
