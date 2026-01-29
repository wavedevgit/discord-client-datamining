package com.facebook.soloader;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class d0 {
    private static boolean a(String str) {
        Matcher matcher = Pattern.compile("\\P{ASCII}+").matcher(str);
        if (matcher.find()) {
            String group = matcher.group();
            p.g("SoLoader", "Library name is corrupted, contains non-ASCII characters " + group);
            return true;
        }
        return false;
    }

    public static c0 b(String str, UnsatisfiedLinkError unsatisfiedLinkError) {
        c0 c0Var;
        if (unsatisfiedLinkError.getMessage() != null && unsatisfiedLinkError.getMessage().contains("ELF")) {
            p.a("SoLoader", "Corrupted lib file detected");
            c0Var = new z(str, unsatisfiedLinkError.toString());
        } else if (a(str)) {
            p.a("SoLoader", "Corrupted lib name detected");
            c0Var = new a0(str, "corrupted lib name: " + unsatisfiedLinkError.toString());
        } else {
            c0Var = new c0(str, unsatisfiedLinkError.toString());
        }
        c0Var.initCause(unsatisfiedLinkError);
        return c0Var;
    }
}
