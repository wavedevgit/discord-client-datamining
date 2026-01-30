package pt;

import com.facebook.react.uimanager.ViewProps;
import java.util.Locale;
import java.util.MissingResourceException;
import kt.n;
import kt.r;
import kt.v;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements r {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f46234a;

        static {
            int[] iArr = new int[v.values().length];
            f46234a = iArr;
            try {
                iArr[v.WIDE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f46234a[v.ABBREVIATED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f46234a[v.SHORT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f46234a[v.NARROW.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
        }
    }

    private static String F(char c10, v vVar, n nVar) {
        StringBuilder sb2 = new StringBuilder(3);
        sb2.append(c10);
        int i10 = a.f46234a[vVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                if (i10 == 4) {
                    sb2.append('n');
                } else {
                    throw new UnsupportedOperationException(vVar.name());
                }
            } else {
                sb2.append('s');
            }
        } else {
            sb2.append('w');
        }
        sb2.append(nVar.ordinal());
        return sb2.toString();
    }

    private static String G(char c10, boolean z10, n nVar) {
        char c11;
        StringBuilder sb2 = new StringBuilder(3);
        sb2.append(c10);
        if (z10) {
            c11 = '+';
        } else {
            c11 = '-';
        }
        sb2.append(c11);
        sb2.append(nVar.ordinal());
        return sb2.toString();
    }

    private static String H(v vVar, String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('L');
        int i10 = a.f46234a[vVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2 && i10 != 3) {
                if (i10 == 4) {
                    sb2.append('n');
                } else {
                    throw new UnsupportedOperationException(vVar.name());
                }
            } else {
                sb2.append('s');
            }
        } else {
            sb2.append('w');
        }
        sb2.append('-');
        sb2.append(str);
        return sb2.toString();
    }

    private String I(Locale locale, String str) {
        e h10;
        boolean z10 = true;
        e eVar = null;
        for (Locale locale2 : e.c(locale)) {
            if (z10 && eVar != null) {
                h10 = eVar;
            } else {
                h10 = e.h("i18n/reltime/relpattern", locale2);
            }
            if (z10) {
                if (locale2.equals(h10.e())) {
                    z10 = false;
                } else {
                    eVar = h10;
                }
            }
            if (h10.d().contains(str)) {
                return h10.f(str);
            }
        }
        return "";
    }

    private String J(Locale locale, String str, String str2, String str3, n nVar) {
        e h10;
        boolean z10 = true;
        e eVar = null;
        for (Locale locale2 : e.c(locale)) {
            if (z10 && eVar != null) {
                h10 = eVar;
            } else {
                h10 = e.h("i18n/" + str, locale2);
            }
            if (z10) {
                if (locale2.equals(h10.e())) {
                    z10 = false;
                } else {
                    eVar = h10;
                }
            }
            if (h10.d().contains(str2)) {
                return h10.f(str2);
            }
            if (nVar != n.OTHER && h10.d().contains(str3)) {
                return h10.f(str3);
            }
        }
        throw new MissingResourceException("Can't find resource for bundle " + str + ".properties, key " + str2, str + ".properties", str2);
    }

    private String K(Locale locale, char c10, boolean z10, n nVar) {
        return J(locale, "reltime/relpattern", G(c10, z10, nVar), G(c10, z10, n.OTHER), nVar);
    }

    private String L(Locale locale, char c10, v vVar, n nVar) {
        return J(locale, "units/upattern", F(c10, vVar, nVar), F(c10, vVar, n.OTHER), nVar);
    }

    private static String M(String str, char c10, int i10) {
        int length = str.length();
        int i11 = length - 2;
        for (int i12 = 0; i12 < i11; i12++) {
            if (str.charAt(i12) == '{') {
                int i13 = i12 + 1;
                if (str.charAt(i13) == c10) {
                    int i14 = i12 + 2;
                    if (str.charAt(i14) == '}') {
                        StringBuilder sb2 = new StringBuilder(length + 8);
                        sb2.append(str);
                        sb2.replace(i13, i14, String.valueOf(i10));
                        return sb2.toString();
                    }
                } else {
                    continue;
                }
            }
        }
        return str;
    }

    @Override // kt.x
    public String A(Locale locale, v vVar, n nVar) {
        return L(locale, 'Y', vVar, nVar);
    }

    @Override // kt.r
    public String B(Locale locale, boolean z10, n nVar) {
        return K(locale, 'h', z10, nVar);
    }

    @Override // kt.x
    public String C(Locale locale, v vVar, n nVar) {
        return L(locale, 'H', vVar, nVar);
    }

    @Override // kt.r
    public String D(y0 y0Var, Locale locale) {
        return I(locale, y0Var.name().substring(0, 3).toLowerCase() + "+");
    }

    @Override // kt.x
    public String E(Locale locale, v vVar, n nVar) {
        return L(locale, 'S', vVar, nVar);
    }

    @Override // kt.x
    public String a(Locale locale, v vVar, n nVar) {
        return L(locale, '9', vVar, nVar);
    }

    @Override // kt.x
    public String b(Locale locale, v vVar, int i10) {
        String str;
        int i11;
        if (i10 >= 2) {
            e h10 = e.h("i18n/units/upattern", locale);
            String H = H(vVar, String.valueOf(i10));
            if (h10.b(H)) {
                return h10.f(H);
            }
            String f10 = h10.f(H(vVar, ViewProps.END));
            if (i10 == 2) {
                return f10;
            }
            String f11 = h10.f(H(vVar, ViewProps.START));
            String f12 = h10.f(H(vVar, "middle"));
            String M = M(M(f10, '1', i10 - 1), '0', i10 - 2);
            String str2 = M;
            for (int i12 = i10 - 3; i12 >= 0; i12--) {
                if (i12 == 0) {
                    str = f11;
                } else {
                    str = f12;
                }
                int length = str.length();
                int i13 = length - 1;
                while (true) {
                    if (i13 >= 0) {
                        if (i13 >= 2 && str.charAt(i13) == '}' && str.charAt(i13 - 1) == '1') {
                            i11 = i13 - 2;
                            if (str.charAt(i11) == '{') {
                                break;
                            }
                        }
                        i13--;
                    } else {
                        i11 = -1;
                        break;
                    }
                }
                if (i11 > -1) {
                    M = str.substring(0, i11) + str2;
                    if (i11 < length - 3) {
                        M = M + str.substring(i11 + 3);
                    }
                }
                if (i12 > 0) {
                    str2 = M(M, '0', i12);
                }
            }
            return M;
        }
        throw new IllegalArgumentException("Size must be greater than 1.");
    }

    @Override // kt.r
    public String c(Locale locale) {
        return J(locale, "reltime/relpattern", "yesterday", null, n.OTHER);
    }

    @Override // kt.x
    public String d(Locale locale) {
        return J(locale, "reltime/relpattern", "now", null, n.OTHER);
    }

    @Override // kt.x
    public String e(Locale locale, v vVar, n nVar) {
        return L(locale, 'D', vVar, nVar);
    }

    @Override // kt.x
    public String f(Locale locale, boolean z10, n nVar) {
        return K(locale, 'Y', z10, nVar);
    }

    @Override // kt.x
    public String g(Locale locale, boolean z10, n nVar) {
        return K(locale, 'N', z10, nVar);
    }

    @Override // kt.r
    public String h(Locale locale, boolean z10, n nVar) {
        return K(locale, 'w', z10, nVar);
    }

    @Override // kt.r
    public String i(Locale locale) {
        return J(locale, "reltime/relpattern", "tomorrow", null, n.OTHER);
    }

    @Override // kt.r
    public String j(Locale locale, boolean z10, n nVar) {
        return K(locale, 'n', z10, nVar);
    }

    @Override // kt.r
    public String k(Locale locale, boolean z10, n nVar) {
        return K(locale, 'd', z10, nVar);
    }

    @Override // kt.x
    public String l(Locale locale, v vVar, n nVar) {
        return L(locale, 'M', vVar, nVar);
    }

    @Override // kt.x
    public String m(Locale locale, boolean z10, n nVar) {
        return K(locale, 'S', z10, nVar);
    }

    @Override // kt.x
    public String n(Locale locale, v vVar, n nVar) {
        return L(locale, '6', vVar, nVar);
    }

    @Override // kt.r
    public String o(Locale locale, boolean z10, n nVar) {
        return K(locale, 'y', z10, nVar);
    }

    @Override // kt.x
    public String p(Locale locale, boolean z10, n nVar) {
        return K(locale, 'M', z10, nVar);
    }

    @Override // kt.x
    public String q(Locale locale, boolean z10, n nVar) {
        return K(locale, 'D', z10, nVar);
    }

    @Override // kt.r
    public String r(y0 y0Var, Locale locale) {
        return I(locale, y0Var.name().substring(0, 3).toLowerCase() + "-");
    }

    @Override // kt.x
    public String s(Locale locale, v vVar, n nVar) {
        return L(locale, 'W', vVar, nVar);
    }

    @Override // kt.x
    public String t(Locale locale, boolean z10, n nVar) {
        return K(locale, 'H', z10, nVar);
    }

    @Override // kt.x
    public String u(Locale locale, v vVar, n nVar) {
        return L(locale, '3', vVar, nVar);
    }

    @Override // kt.x
    public String v(Locale locale, v vVar, n nVar) {
        return L(locale, 'N', vVar, nVar);
    }

    @Override // kt.x
    public String w(Locale locale, boolean z10, n nVar) {
        return K(locale, 'W', z10, nVar);
    }

    @Override // kt.r
    public String x(Locale locale) {
        return J(locale, "reltime/relpattern", "today", null, n.OTHER);
    }

    @Override // kt.r
    public String y(Locale locale, boolean z10, n nVar) {
        return K(locale, 'm', z10, nVar);
    }

    @Override // kt.r
    public String z(Locale locale, boolean z10, n nVar) {
        return K(locale, 's', z10, nVar);
    }
}
