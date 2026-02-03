package fv;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f24823a = b();

    /* renamed from: b  reason: collision with root package name */
    private static final Pattern f24824b = Pattern.compile("^&#[Xx]?");

    public static String a(String str) {
        int i10;
        Matcher matcher = f24824b.matcher(str);
        if (matcher.find()) {
            if (matcher.end() == 2) {
                i10 = 10;
            } else {
                i10 = 16;
            }
            try {
                int parseInt = Integer.parseInt(str.substring(matcher.end(), str.length() - 1), i10);
                if (parseInt == 0) {
                    return "�";
                }
                return new String(Character.toChars(parseInt));
            } catch (IllegalArgumentException unused) {
                return "�";
            }
        }
        String str2 = (String) f24823a.get(str.substring(1, str.length() - 1));
        if (str2 != null) {
            return str2;
        }
        return str;
    }

    private static Map b() {
        HashMap hashMap = new HashMap();
        try {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(b.class.getResourceAsStream("/org/commonmark/internal/util/entities.properties"), Charset.forName("UTF-8")));
            while (true) {
                String readLine = bufferedReader.readLine();
                if (readLine != null) {
                    if (readLine.length() != 0) {
                        int indexOf = readLine.indexOf("=");
                        hashMap.put(readLine.substring(0, indexOf), readLine.substring(indexOf + 1));
                    }
                } else {
                    bufferedReader.close();
                    hashMap.put("NewLine", ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                    return hashMap;
                }
            }
        } catch (IOException e10) {
            throw new IllegalStateException("Failed reading data for HTML named character references", e10);
        }
    }
}
