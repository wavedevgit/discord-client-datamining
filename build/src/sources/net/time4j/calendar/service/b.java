package net.time4j.calendar.service;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.Set;
import kt.m;
import kt.u;
import kt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b implements u {

    /* renamed from: a  reason: collision with root package name */
    private static final String[] f40547a = new String[0];

    /* renamed from: b  reason: collision with root package name */
    private static final Set f40548b;

    /* renamed from: c  reason: collision with root package name */
    private static final Set f40549c;

    /* renamed from: d  reason: collision with root package name */
    private static final Set f40550d;

    static {
        String[] split = pt.e.h("calendar/names/generic/generic", Locale.ROOT).f("languages").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        hashSet.add("");
        Set<String> unmodifiableSet = Collections.unmodifiableSet(hashSet);
        f40549c = unmodifiableSet;
        HashSet hashSet2 = new HashSet();
        for (String str : unmodifiableSet) {
            if (str.isEmpty()) {
                hashSet2.add(Locale.ROOT);
            } else {
                hashSet2.add(new Locale(str));
            }
        }
        f40550d = Collections.unmodifiableSet(hashSet2);
        HashSet hashSet3 = new HashSet();
        hashSet3.add("buddhist");
        hashSet3.add("chinese");
        hashSet3.add("coptic");
        hashSet3.add("dangi");
        hashSet3.add("ethiopic");
        hashSet3.add("frenchrev");
        hashSet3.add("hindu");
        hashSet3.add("generic");
        hashSet3.add("hebrew");
        hashSet3.add("indian");
        hashSet3.add("islamic");
        hashSet3.add("japanese");
        hashSet3.add("juche");
        hashSet3.add("persian");
        hashSet3.add("roc");
        hashSet3.add("vietnam");
        f40548b = Collections.unmodifiableSet(hashSet3);
    }

    private static int c(String str) {
        if (str.equals("hindu")) {
            return 6;
        }
        if (!str.equals("ethiopic") && !str.equals("generic") && !str.equals("roc") && !str.equals("buddhist") && !str.equals("korean")) {
            return 1;
        }
        return 2;
    }

    private static int d(String str) {
        if (!str.equals("coptic") && !str.equals("ethiopic") && !str.equals("generic") && !str.equals("hebrew")) {
            return 12;
        }
        return 13;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static pt.e f(String str, Locale locale) {
        String str2 = "calendar/names/" + str + "/" + str;
        if (!f40549c.contains(pt.d.a(locale))) {
            locale = Locale.ROOT;
        }
        return pt.e.h(str2, locale);
    }

    private static String i(pt.e eVar, String str) {
        if (eVar.b("useShortKeys") && "true".equals(eVar.f("useShortKeys"))) {
            return str.substring(0, 1);
        }
        return str;
    }

    private static String[] l(pt.e eVar, String str, String str2, int i10, String str3, v vVar, m mVar, boolean z10, int i11) {
        String[] strArr = new String[i10];
        boolean z11 = true;
        if (str3.length() != 1) {
            z11 = false;
        }
        for (int i12 = 0; i12 < i10; i12++) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(str3);
            sb2.append('(');
            if (z11) {
                char charAt = vVar.name().charAt(0);
                if (mVar != m.STANDALONE) {
                    charAt = Character.toLowerCase(charAt);
                }
                sb2.append(charAt);
            } else {
                sb2.append(vVar.name());
                if (mVar == m.STANDALONE) {
                    sb2.append('|');
                    sb2.append(mVar.name());
                }
                if (z10) {
                    sb2.append('|');
                    sb2.append("LEAP");
                }
            }
            sb2.append(')');
            sb2.append('_');
            sb2.append(i12 + i11);
            if (z10 && i12 == 6 && str.equals("hebrew")) {
                sb2.append('L');
            }
            String sb3 = sb2.toString();
            if (eVar.b(sb3)) {
                String f10 = eVar.f(sb3);
                if (z10 && str.equals("chinese")) {
                    f10 = m(f10, str2, vVar, mVar);
                }
                strArr[i12] = f10;
            } else {
                return null;
            }
        }
        return strArr;
    }

    private static String m(String str, String str2, v vVar, m mVar) {
        String str3;
        if (str2.equals("en")) {
            if (vVar == v.NARROW) {
                return "i" + str;
            }
            return "(leap) " + str;
        } else if (!str2.equals("de") && !str2.equals("es") && !str2.equals("fr") && !str2.equals("it") && !str2.equals("pt") && !str2.equals("ro")) {
            if (str2.equals("ja")) {
                return "閏" + str;
            } else if (str2.equals("ko")) {
                return "윤" + str;
            } else if (str2.equals("zh")) {
                return "閏" + str;
            } else if (str2.equals("vi")) {
                if (vVar == v.NARROW) {
                    return str + "n";
                }
                StringBuilder sb2 = new StringBuilder();
                sb2.append(str);
                if (mVar == m.STANDALONE) {
                    str3 = " Nhuận";
                } else {
                    str3 = " nhuận";
                }
                sb2.append(str3);
                return sb2.toString();
            } else {
                return "*" + str;
            }
        } else if (vVar == v.NARROW) {
            return "i" + str;
        } else {
            return "(i) " + str;
        }
    }

    @Override // kt.u
    public String[] a(String str, Locale locale, v vVar) {
        String str2;
        v vVar2;
        if (!str.equals("chinese") && !str.equals("vietnam")) {
            if (str.equals("japanese")) {
                if (vVar == v.NARROW) {
                    return new String[]{"M", "T", "S", "H"};
                }
                return new String[]{"Meiji", "Taishō", "Shōwa", "Heisei"};
            } else if (!str.equals("dangi") && !str.equals("juche")) {
                pt.e f10 = f(str, locale);
                if (vVar == v.SHORT) {
                    vVar = v.ABBREVIATED;
                }
                v vVar3 = vVar;
                String[] l10 = l(f10, str, locale.getLanguage(), c(str), i(f10, "ERA"), vVar3, m.FORMAT, false, 0);
                if (l10 == null && vVar3 != (vVar2 = v.ABBREVIATED)) {
                    l10 = a(str, locale, vVar2);
                }
                if (l10 != null) {
                    return l10;
                }
                throw new MissingResourceException("Cannot find calendar resource for era.", b.class.getName(), locale.toString());
            } else {
                String[] a10 = a("korean", locale, vVar);
                if (str.equals("dangi")) {
                    str2 = a10[0];
                } else {
                    str2 = a10[1];
                }
                return new String[]{str2};
            }
        }
        return f40547a;
    }

    @Override // kt.u
    public boolean b(Locale locale) {
        return true;
    }

    @Override // kt.u
    public String[] e(String str, Locale locale, v vVar, m mVar) {
        return f40547a;
    }

    @Override // kt.u
    public String[] g(String str, Locale locale, v vVar, m mVar, boolean z10) {
        String str2 = str;
        v vVar2 = vVar;
        if (!str2.equals("roc") && !str2.equals("buddhist")) {
            if (str2.equals("japanese")) {
                return new String[]{"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"};
            }
            if (!str2.equals("dangi") && !str2.equals("vietnam")) {
                if (str2.equals("hindu")) {
                    str2 = "indian";
                } else if (str2.equals("juche")) {
                    return (String[]) kt.b.d(locale).l(vVar2, mVar).b().toArray(new String[12]);
                }
            } else {
                str2 = "chinese";
            }
            String str3 = str2;
            pt.e f10 = f(str3, locale);
            if (vVar2 == v.SHORT) {
                vVar2 = v.ABBREVIATED;
            }
            v vVar3 = vVar2;
            String[] l10 = l(f10, str3, locale.getLanguage(), d(str3), i(f10, "MONTH_OF_YEAR"), vVar3, mVar, z10, 1);
            if (l10 == null) {
                m mVar2 = m.STANDALONE;
                if (mVar == mVar2) {
                    if (vVar3 != v.NARROW) {
                        l10 = g(str3, locale, vVar3, m.FORMAT, z10);
                    }
                } else if (vVar3 == v.ABBREVIATED) {
                    l10 = g(str3, locale, v.WIDE, m.FORMAT, z10);
                } else if (vVar3 == v.NARROW) {
                    l10 = g(str3, locale, vVar3, mVar2, z10);
                }
            }
            if (l10 != null) {
                return l10;
            }
            throw new MissingResourceException("Cannot find calendar month.", b.class.getName(), locale.toString());
        }
        List b10 = kt.b.d(locale).l(vVar2, mVar).b();
        return (String[]) b10.toArray(new String[b10.size()]);
    }

    @Override // kt.u
    public boolean h(String str) {
        return f40548b.contains(str);
    }

    @Override // kt.u
    public String[] j(String str, Locale locale, v vVar, m mVar) {
        return f40547a;
    }

    @Override // kt.u
    public String[] k(String str, Locale locale, v vVar, m mVar) {
        return f40547a;
    }

    public String toString() {
        return "GenericTextProviderSPI";
    }
}
