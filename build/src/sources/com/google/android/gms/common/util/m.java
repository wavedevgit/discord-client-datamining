package com.google.android.gms.common.util;

import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final Pattern f13842a = Pattern.compile("\\$\\{(.*?)\\}");

    public static boolean a(String str) {
        if (str != null && !str.trim().isEmpty()) {
            return false;
        }
        return true;
    }
}
