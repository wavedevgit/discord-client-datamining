package wh;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l {
    public static String a(File file) {
        if (file.getName().endsWith(".apk")) {
            String replaceFirst = file.getName().replaceFirst("(_\\d+)?\\.apk", "");
            if (replaceFirst.equals("base-master") || replaceFirst.equals("base-main")) {
                return "";
            }
            if (replaceFirst.startsWith("base-")) {
                return replaceFirst.replace("base-", "config.");
            }
            return replaceFirst.replace("-", ".config.").replace(".config.master", "").replace(".config.main", "");
        }
        throw new IllegalArgumentException("Non-apk found in splits directory.");
    }
}
