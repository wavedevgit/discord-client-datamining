package com.google.firebase.messaging;

import android.text.TextUtils;
import android.util.Log;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class x0 {

    /* renamed from: d  reason: collision with root package name */
    private static final Pattern f16158d = Pattern.compile("[a-zA-Z0-9-_.~%]{1,900}");

    /* renamed from: a  reason: collision with root package name */
    private final String f16159a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16160b;

    /* renamed from: c  reason: collision with root package name */
    private final String f16161c;

    private x0(String str, String str2) {
        this.f16159a = d(str2, str);
        this.f16160b = str;
        this.f16161c = str + "!" + str2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static x0 a(String str) {
        if (TextUtils.isEmpty(str)) {
            return null;
        }
        String[] split = str.split("!", -1);
        if (split.length != 2) {
            return null;
        }
        return new x0(split[0], split[1]);
    }

    private static String d(String str, String str2) {
        if (str != null && str.startsWith("/topics/")) {
            Log.w("FirebaseMessaging", String.format("Format /topics/topic-name is deprecated. Only 'topic-name' should be used in %s.", str2));
            str = str.substring(8);
        }
        if (str != null && f16158d.matcher(str).matches()) {
            return str;
        }
        throw new IllegalArgumentException(String.format("Invalid topic name: %s does not match the allowed format %s.", str, "[a-zA-Z0-9-_.~%]{1,900}"));
    }

    public String b() {
        return this.f16160b;
    }

    public String c() {
        return this.f16159a;
    }

    public String e() {
        return this.f16161c;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof x0)) {
            return false;
        }
        x0 x0Var = (x0) obj;
        if (!this.f16159a.equals(x0Var.f16159a) || !this.f16160b.equals(x0Var.f16160b)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f16160b, this.f16159a);
    }
}
