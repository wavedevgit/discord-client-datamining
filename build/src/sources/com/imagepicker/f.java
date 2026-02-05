package com.imagepicker;

import android.util.Log;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class f {

    /* renamed from: a  reason: collision with root package name */
    protected String f17135a;

    /* renamed from: b  reason: collision with root package name */
    protected int f17136b;

    /* renamed from: c  reason: collision with root package name */
    protected int f17137c;

    /* JADX INFO: Access modifiers changed from: protected */
    public String a(String str, String str2) {
        try {
            Locale locale = Locale.US;
            Date parse = new SimpleDateFormat(str2, locale).parse(str);
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ", locale);
            if (parse == null) {
                return null;
            }
            return simpleDateFormat.format(parse);
        } catch (Exception e10) {
            Log.e("RNIP", "Could not parse image datetime to UTC: " + e10.getMessage());
            return null;
        }
    }
}
