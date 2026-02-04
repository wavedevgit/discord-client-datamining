package st;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.Set;
import nt.m;
import nt.u;
import nt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements u, pt.c {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f49627a;

    /* renamed from: b  reason: collision with root package name */
    private static final Set f49628b;

    static {
        String[] split = e.h("calendar/names/iso8601/iso8601", Locale.ROOT).f("languages").split(" ");
        HashSet hashSet = new HashSet();
        Collections.addAll(hashSet, split);
        Set<String> unmodifiableSet = Collections.unmodifiableSet(hashSet);
        f49627a = unmodifiableSet;
        HashSet hashSet2 = new HashSet();
        for (String str : unmodifiableSet) {
            hashSet2.add(new Locale(str));
        }
        for (d dVar : d.values()) {
            hashSet2.add(new Locale(dVar.name()));
        }
        f49628b = Collections.unmodifiableSet(hashSet2);
    }

    private static String[] l(Locale locale, v vVar) {
        v vVar2;
        e m10 = m(locale);
        String[] strArr = null;
        v vVar3 = null;
        if (m10 != null) {
            if (vVar == v.SHORT) {
                vVar = v.ABBREVIATED;
            }
            v vVar4 = vVar;
            String n10 = n(m10, "ERA");
            if (vVar4 == v.NARROW) {
                vVar3 = v.ABBREVIATED;
            }
            strArr = o(m10, 5, n10, vVar4, vVar3, m.FORMAT, 0);
            if (strArr == null && vVar4 != (vVar2 = v.ABBREVIATED)) {
                strArr = l(locale, vVar2);
            }
        }
        if (strArr != null) {
            return strArr;
        }
        throw new MissingResourceException("Cannot find ISO-8601-resource for era and locale: " + locale, c.class.getName(), locale.toString());
    }

    private static e m(Locale locale) {
        return e.h("calendar/names/iso8601/iso8601", locale);
    }

    private static String n(e eVar, String str) {
        if (eVar.b("useShortKeys") && "true".equals(eVar.f("useShortKeys"))) {
            return str.substring(0, 1);
        }
        return str;
    }

    private static String[] o(e eVar, int i10, String str, v vVar, v vVar2, m mVar, int i11) {
        boolean z10;
        String[] o10;
        m mVar2 = mVar;
        String[] strArr = new String[i10];
        if (str.length() == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        int i12 = 0;
        while (i12 < i10) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append(str);
            sb2.append('(');
            if (z10) {
                char charAt = vVar.name().charAt(0);
                if (mVar2 != m.STANDALONE) {
                    charAt = Character.toLowerCase(charAt);
                }
                sb2.append(charAt);
            } else {
                sb2.append(vVar.name());
                if (mVar2 == m.STANDALONE) {
                    sb2.append('|');
                    sb2.append(mVar2.name());
                }
            }
            sb2.append(')');
            sb2.append('_');
            sb2.append(i12 + i11);
            String sb3 = sb2.toString();
            if (eVar.b(sb3)) {
                strArr[i12] = eVar.f(sb3);
            } else if (vVar2 == null || (o10 = o(eVar, i10, str, vVar2, null, mVar2, i11)) == null) {
                return null;
            } else {
                strArr[i12] = o10[i12];
            }
            i12++;
            mVar2 = mVar;
        }
        return strArr;
    }

    private static String p(String str, v vVar, m mVar) {
        char charAt = vVar.name().charAt(0);
        if (mVar == m.FORMAT) {
            charAt = Character.toLowerCase(charAt);
        }
        return "P(" + String.valueOf(charAt) + ")_" + str;
    }

    private static String[] q(Locale locale, v vVar, m mVar) {
        e m10 = m(locale);
        if (m10 != null) {
            if (vVar == v.SHORT) {
                vVar = v.ABBREVIATED;
            }
            String p10 = p("am", vVar, mVar);
            String p11 = p("pm", vVar, mVar);
            if (m10.b(p10) && m10.b(p11)) {
                return new String[]{m10.f(p10), m10.f(p11)};
            }
            if (mVar == m.STANDALONE) {
                v vVar2 = v.ABBREVIATED;
                if (vVar == vVar2) {
                    return q(locale, vVar, m.FORMAT);
                }
                return q(locale, vVar2, mVar);
            }
            v vVar3 = v.ABBREVIATED;
            if (vVar != vVar3) {
                return q(locale, vVar3, mVar);
            }
        }
        throw new MissingResourceException("Cannot find ISO-8601-resource for am/pm and locale: " + locale, c.class.getName(), locale.toString());
    }

    private static String[] r(Locale locale, v vVar, m mVar) {
        String[] strArr;
        e m10 = m(locale);
        if (m10 != null) {
            if (vVar == v.SHORT) {
                vVar = v.ABBREVIATED;
            }
            v vVar2 = vVar;
            strArr = o(m10, 12, n(m10, "MONTH_OF_YEAR"), vVar2, null, mVar, 1);
            if (strArr == null) {
                m mVar2 = m.STANDALONE;
                if (mVar == mVar2) {
                    if (vVar2 != v.NARROW) {
                        strArr = r(locale, vVar2, m.FORMAT);
                    }
                } else if (vVar2 == v.ABBREVIATED) {
                    strArr = r(locale, v.WIDE, m.FORMAT);
                } else if (vVar2 == v.NARROW) {
                    strArr = r(locale, vVar2, mVar2);
                }
            }
        } else {
            strArr = null;
        }
        if (strArr != null) {
            return strArr;
        }
        throw new MissingResourceException("Cannot find ISO-8601-month for locale: " + locale, c.class.getName(), locale.toString());
    }

    private static String[] s(Locale locale, v vVar, m mVar) {
        String[] strArr;
        e m10 = m(locale);
        if (m10 != null) {
            if (vVar == v.SHORT) {
                vVar = v.ABBREVIATED;
            }
            v vVar2 = vVar;
            strArr = o(m10, 4, n(m10, "QUARTER_OF_YEAR"), vVar2, null, mVar, 1);
            if (strArr == null) {
                m mVar2 = m.STANDALONE;
                if (mVar == mVar2) {
                    if (vVar2 != v.NARROW) {
                        strArr = s(locale, vVar2, m.FORMAT);
                    }
                } else if (vVar2 == v.ABBREVIATED) {
                    strArr = s(locale, v.WIDE, m.FORMAT);
                } else if (vVar2 == v.NARROW) {
                    strArr = s(locale, vVar2, mVar2);
                }
            }
        } else {
            strArr = null;
        }
        if (strArr != null) {
            return strArr;
        }
        throw new MissingResourceException("Cannot find ISO-8601-quarter-of-year for locale: " + locale, c.class.getName(), locale.toString());
    }

    private static char t(nt.e eVar) {
        return Character.toLowerCase(eVar.name().charAt(0));
    }

    private static String[] u(Locale locale, v vVar, m mVar) {
        String[] strArr;
        e m10 = m(locale);
        if (m10 != null) {
            strArr = o(m10, 7, n(m10, "DAY_OF_WEEK"), vVar, null, mVar, 1);
            if (strArr == null) {
                m mVar2 = m.STANDALONE;
                if (mVar == mVar2) {
                    if (vVar != v.NARROW) {
                        strArr = u(locale, vVar, m.FORMAT);
                    }
                } else {
                    v vVar2 = v.ABBREVIATED;
                    if (vVar == vVar2) {
                        strArr = u(locale, v.WIDE, m.FORMAT);
                    } else if (vVar == v.SHORT) {
                        strArr = u(locale, vVar2, m.FORMAT);
                    } else if (vVar == v.NARROW) {
                        strArr = u(locale, vVar, mVar2);
                    }
                }
            }
        } else {
            strArr = null;
        }
        if (strArr != null) {
            return strArr;
        }
        throw new MissingResourceException("Cannot find ISO-8601-day-of-week for locale: " + locale, c.class.getName(), locale.toString());
    }

    @Override // nt.u
    public String[] a(String str, Locale locale, v vVar) {
        return l(locale, vVar);
    }

    @Override // nt.f
    public String b(nt.e eVar, Locale locale) {
        return m(locale).f("F(" + t(eVar) + ")_d");
    }

    @Override // nt.u
    public boolean c(Locale locale) {
        return f49627a.contains(d.a(locale));
    }

    @Override // nt.u
    public String[] d(String str, Locale locale, v vVar, m mVar) {
        return u(locale, vVar, mVar);
    }

    @Override // nt.f
    public String e(nt.e eVar, nt.e eVar2, Locale locale) {
        if (eVar.compareTo(eVar2) < 0) {
            eVar = eVar2;
        }
        return m(locale).f("F(" + t(eVar) + ")_dt");
    }

    @Override // nt.f
    public String f(nt.e eVar, Locale locale) {
        return h(eVar, locale, false);
    }

    @Override // nt.u
    public boolean g(String str) {
        return "iso8601".equals(str);
    }

    @Override // pt.c
    public String h(nt.e eVar, Locale locale, boolean z10) {
        String str;
        if (z10 && eVar == nt.e.FULL) {
            str = "F(alt)";
        } else {
            str = "F(" + t(eVar) + ")_t";
        }
        return m(locale).f(str);
    }

    @Override // nt.u
    public String[] i(String str, Locale locale, v vVar, m mVar) {
        return s(locale, vVar, mVar);
    }

    @Override // nt.u
    public String[] j(String str, Locale locale, v vVar, m mVar, boolean z10) {
        return r(locale, vVar, mVar);
    }

    @Override // nt.u
    public String[] k(String str, Locale locale, v vVar, m mVar) {
        return q(locale, vVar, mVar);
    }

    public String toString() {
        return "IsoTextProviderSPI";
    }
}
