package st;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {
    public static String a(String str) {
        int i10;
        StringBuilder sb2 = new StringBuilder();
        int length = str.length();
        int i11 = 0;
        boolean z10 = false;
        while (i11 < length) {
            char charAt = str.charAt(i11);
            if (charAt == '\'') {
                int i12 = i11 + 1;
                if (i12 < length && str.charAt(i12) == '\'') {
                    sb2.append(charAt);
                    i11 = i12;
                } else {
                    z10 = !z10;
                }
                sb2.append(charAt);
            } else if (z10) {
                sb2.append(charAt);
            } else if (charAt != 'z' && charAt != 'Z' && charAt != 'v' && charAt != 'V' && charAt != 'x' && charAt != 'X') {
                sb2.append(charAt);
            }
            i11++;
        }
        int i13 = 0;
        while (i13 < sb2.length()) {
            char charAt2 = sb2.charAt(i13);
            if (charAt2 == ' ' && (i10 = i13 + 1) < sb2.length() && sb2.charAt(i10) == ' ') {
                sb2.deleteCharAt(i13);
            } else if (charAt2 == '[' || charAt2 == ']' || charAt2 == '(' || charAt2 == ')') {
                sb2.deleteCharAt(i13);
            } else {
                i13++;
            }
            i13--;
            i13++;
        }
        String trim = sb2.toString().trim();
        if (trim.endsWith(" '")) {
            return trim.substring(0, trim.length() - 2) + "'";
        } else if (trim.endsWith(",")) {
            return trim.substring(0, trim.length() - 1);
        } else {
            return trim;
        }
    }
}
