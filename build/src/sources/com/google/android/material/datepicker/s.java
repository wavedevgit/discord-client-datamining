package com.google.android.material.datepicker;

import java.util.Calendar;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class s {

    /* renamed from: c  reason: collision with root package name */
    private static final s f15106c = new s(null, null);

    /* renamed from: a  reason: collision with root package name */
    private final Long f15107a;

    /* renamed from: b  reason: collision with root package name */
    private final TimeZone f15108b;

    private s(Long l10, TimeZone timeZone) {
        this.f15107a = l10;
        this.f15108b = timeZone;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s c() {
        return f15106c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Calendar a() {
        return b(this.f15108b);
    }

    Calendar b(TimeZone timeZone) {
        Calendar calendar;
        if (timeZone == null) {
            calendar = Calendar.getInstance();
        } else {
            calendar = Calendar.getInstance(timeZone);
        }
        Long l10 = this.f15107a;
        if (l10 != null) {
            calendar.setTimeInMillis(l10.longValue());
        }
        return calendar;
    }
}
