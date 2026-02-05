package com.google.android.gms.common.util;

import hg.e0;
import hg.x;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLDecoder;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f13836a = Pattern.compile("^(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}$");

    /* renamed from: b  reason: collision with root package name */
    private static final Pattern f13837b = Pattern.compile("^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$");

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f13838c = Pattern.compile("^((?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4})*)?)::((?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4})*)?)$");

    public static Map a(URI uri, String str) {
        String str2;
        Map map = Collections.EMPTY_MAP;
        String rawQuery = uri.getRawQuery();
        if (rawQuery != null && rawQuery.length() > 0) {
            map = new HashMap();
            e0 a10 = e0.a(x.b('='));
            for (String str3 : e0.a(x.b('&')).b().c(rawQuery)) {
                List d10 = a10.d(str3);
                if (!d10.isEmpty() && d10.size() <= 2) {
                    String b10 = b((String) d10.get(0), str);
                    if (d10.size() == 2) {
                        str2 = b((String) d10.get(1), str);
                    } else {
                        str2 = null;
                    }
                    map.put(b10, str2);
                } else {
                    throw new IllegalArgumentException("bad parameter");
                }
            }
        }
        return map;
    }

    private static String b(String str, String str2) {
        if (str2 == null) {
            str2 = "ISO-8859-1";
        }
        try {
            return URLDecoder.decode(str, str2);
        } catch (UnsupportedEncodingException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
