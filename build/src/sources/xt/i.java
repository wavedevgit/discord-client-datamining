package xt;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.util.Collections;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import net.time4j.y0;
import st.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements y {

    /* renamed from: a  reason: collision with root package name */
    private final String f54819a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f54820b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f54821c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f54822d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f54823e;

    public i() {
        String substring;
        y0 y0Var;
        HashMap hashMap;
        URI f10 = pt.d.c().f("i18n", i.class, "data/week.data");
        InputStream e10 = pt.d.c().e(f10, true);
        if (e10 == null) {
            try {
                e10 = pt.d.c().d(i.class, "data/week.data", true);
            } catch (IOException unused) {
            }
        }
        if (e10 != null) {
            this.f54819a = "@" + f10;
            HashSet hashSet = new HashSet();
            HashMap hashMap2 = new HashMap();
            HashMap hashMap3 = new HashMap();
            HashMap hashMap4 = new HashMap();
            try {
                try {
                    try {
                        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(e10, "US-ASCII"));
                        while (true) {
                            String readLine = bufferedReader.readLine();
                            if (readLine != null) {
                                if (!readLine.startsWith("#")) {
                                    int indexOf = readLine.indexOf(61);
                                    int i10 = 0;
                                    String trim = readLine.substring(0, indexOf).trim();
                                    String[] split = readLine.substring(indexOf + 1).split(" ");
                                    if (trim.equals("minDays-4")) {
                                        int length = split.length;
                                        while (i10 < length) {
                                            String upperCase = split[i10].trim().toUpperCase(Locale.US);
                                            if (!upperCase.isEmpty()) {
                                                hashSet.add(upperCase);
                                            }
                                            i10++;
                                        }
                                    } else {
                                        if (trim.startsWith("start-")) {
                                            substring = trim.substring(6);
                                            y0Var = y0.SATURDAY;
                                            hashMap = hashMap3;
                                        } else if (trim.startsWith("end-")) {
                                            substring = trim.substring(4);
                                            y0Var = y0.SUNDAY;
                                            hashMap = hashMap4;
                                        } else if (trim.startsWith("first-")) {
                                            substring = trim.substring(6);
                                            y0Var = y0.MONDAY;
                                            hashMap = hashMap2;
                                        } else {
                                            throw new IllegalStateException("Unexpected format: " + this.f54819a);
                                        }
                                        if (substring.equals("sun")) {
                                            y0Var = y0.SUNDAY;
                                        } else if (substring.equals("sat")) {
                                            y0Var = y0.SATURDAY;
                                        } else if (substring.equals("fri")) {
                                            y0Var = y0.FRIDAY;
                                        } else if (substring.equals("thu")) {
                                            y0Var = y0.THURSDAY;
                                        } else if (substring.equals("wed")) {
                                            y0Var = y0.WEDNESDAY;
                                        } else if (substring.equals("tue")) {
                                            y0Var = y0.TUESDAY;
                                        } else if (substring.equals("mon")) {
                                            y0Var = y0.MONDAY;
                                        }
                                        int length2 = split.length;
                                        while (i10 < length2) {
                                            String upperCase2 = split[i10].trim().toUpperCase(Locale.US);
                                            if (!upperCase2.isEmpty()) {
                                                hashMap.put(upperCase2, y0Var);
                                            }
                                            i10++;
                                        }
                                    }
                                }
                            } else {
                                this.f54820b = Collections.unmodifiableSet(hashSet);
                                this.f54821c = Collections.unmodifiableMap(hashMap2);
                                this.f54822d = Collections.unmodifiableMap(hashMap3);
                                this.f54823e = Collections.unmodifiableMap(hashMap4);
                                try {
                                    e10.close();
                                    return;
                                } catch (IOException e11) {
                                    e11.printStackTrace(System.err);
                                    return;
                                }
                            }
                        }
                    } catch (Exception e12) {
                        throw new IllegalStateException("Unexpected format: " + this.f54819a, e12);
                    }
                } catch (UnsupportedEncodingException e13) {
                    throw new AssertionError(e13);
                }
            } catch (Throwable th2) {
                try {
                    e10.close();
                } catch (IOException e14) {
                    e14.printStackTrace(System.err);
                }
                throw th2;
            }
        } else {
            this.f54819a = "@STATIC";
            this.f54820b = Collections.EMPTY_SET;
            Map map = Collections.EMPTY_MAP;
            this.f54821c = map;
            this.f54822d = map;
            this.f54823e = map;
            PrintStream printStream = System.err;
            printStream.println("Warning: File \"data/week.data\" not found.");
        }
    }

    @Override // st.y
    public int a(Locale locale) {
        String country = locale.getCountry();
        y0 y0Var = y0.SUNDAY;
        if (this.f54823e.containsKey(country)) {
            y0Var = (y0) this.f54823e.get(country);
        }
        return y0Var.d();
    }

    @Override // st.y
    public int b(Locale locale) {
        if (this.f54820b.isEmpty()) {
            return new GregorianCalendar(locale).getMinimalDaysInFirstWeek();
        }
        String country = locale.getCountry();
        if ((country.isEmpty() && locale.getLanguage().isEmpty()) || this.f54820b.contains(country)) {
            return 4;
        }
        return 1;
    }

    @Override // st.y
    public int c(Locale locale) {
        String country = locale.getCountry();
        y0 y0Var = y0.SATURDAY;
        if (this.f54822d.containsKey(country)) {
            y0Var = (y0) this.f54822d.get(country);
        }
        return y0Var.d();
    }

    @Override // st.y
    public int d(Locale locale) {
        if (this.f54821c.isEmpty()) {
            int firstDayOfWeek = new GregorianCalendar(locale).getFirstDayOfWeek();
            if (firstDayOfWeek == 1) {
                return 7;
            }
            return firstDayOfWeek - 1;
        }
        String country = locale.getCountry();
        y0 y0Var = y0.MONDAY;
        if (this.f54821c.containsKey(country)) {
            y0Var = (y0) this.f54821c.get(country);
        }
        return y0Var.d();
    }

    public String toString() {
        return getClass().getName() + this.f54819a;
    }
}
