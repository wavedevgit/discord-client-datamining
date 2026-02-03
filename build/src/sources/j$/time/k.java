package j$.time;

import java.io.Serializable;
import java.util.Collections;
import java.util.HashMap;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public abstract class k implements Serializable {
    public abstract String r();

    public abstract j$.time.zone.c t();

    static {
        HashMap hashMap = new HashMap(64);
        hashMap.put("ACT", "Australia/Darwin");
        hashMap.put("AET", "Australia/Sydney");
        hashMap.put("AGT", "America/Argentina/Buenos_Aires");
        hashMap.put("ART", "Africa/Cairo");
        hashMap.put("AST", "America/Anchorage");
        hashMap.put("BET", "America/Sao_Paulo");
        hashMap.put("BST", "Asia/Dhaka");
        hashMap.put("CAT", "Africa/Harare");
        hashMap.put("CNT", "America/St_Johns");
        hashMap.put("CST", "America/Chicago");
        hashMap.put("CTT", "Asia/Shanghai");
        hashMap.put("EAT", "Africa/Addis_Ababa");
        hashMap.put("ECT", "Europe/Paris");
        hashMap.put("IET", "America/Indiana/Indianapolis");
        hashMap.put("IST", "Asia/Kolkata");
        hashMap.put("JST", "Asia/Tokyo");
        hashMap.put("MIT", "Pacific/Apia");
        hashMap.put("NET", "Asia/Yerevan");
        hashMap.put("NST", "Pacific/Auckland");
        hashMap.put("PLT", "Asia/Karachi");
        hashMap.put("PNT", "America/Phoenix");
        hashMap.put("PRT", "America/Puerto_Rico");
        hashMap.put("PST", "America/Los_Angeles");
        hashMap.put("SST", "Pacific/Guadalcanal");
        hashMap.put("VST", "Asia/Ho_Chi_Minh");
        hashMap.put("EST", "-05:00");
        hashMap.put("MST", "-07:00");
        hashMap.put("HST", "-10:00");
        Collections.unmodifiableMap(hashMap);
    }

    public static k x(String str, ZoneOffset zoneOffset) {
        Objects.requireNonNull(str, "prefix");
        Objects.requireNonNull(zoneOffset, "offset");
        if (str.length() == 0) {
            return zoneOffset;
        }
        if (!str.equals("GMT") && !str.equals("UTC") && !str.equals("UT")) {
            throw new IllegalArgumentException("prefix should be GMT, UTC or UT, is: ".concat(str));
        }
        if (zoneOffset.getTotalSeconds() != 0) {
            str = str.concat(zoneOffset.f31077b);
        }
        return new l(str, new j$.time.zone.c(zoneOffset));
    }

    public static k w(String str) {
        Objects.requireNonNull(str, "zoneId");
        if (str.length() <= 1 || str.startsWith("+") || str.startsWith("-")) {
            return ZoneOffset.C(str);
        }
        if (str.startsWith("UTC") || str.startsWith("GMT")) {
            return B(str, 3);
        }
        if (str.startsWith("UT")) {
            return B(str, 2);
        }
        return l.C(str);
    }

    public static k B(String str, int i10) {
        String substring = str.substring(0, i10);
        if (str.length() == i10) {
            return x(substring, ZoneOffset.UTC);
        }
        if (str.charAt(i10) != '+' && str.charAt(i10) != '-') {
            return l.C(str);
        }
        try {
            ZoneOffset C = ZoneOffset.C(str.substring(i10));
            if (C == ZoneOffset.UTC) {
                return x(substring, C);
            }
            return x(substring, C);
        } catch (DateTimeException e10) {
            throw new RuntimeException("Invalid ID for offset-based ZoneId: ".concat(str), e10);
        }
    }

    public k() {
        if (getClass() != ZoneOffset.class && getClass() != l.class) {
            throw new AssertionError("Invalid subclass");
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof k) {
            return r().equals(((k) obj).r());
        }
        return false;
    }

    public int hashCode() {
        return r().hashCode();
    }

    public String toString() {
        return r();
    }
}
