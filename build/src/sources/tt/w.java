package tt;

import java.util.ArrayList;
import java.util.Collections;
import java.util.EnumMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class w {

    /* renamed from: d  reason: collision with root package name */
    private static final Object f51108d = new Object();

    /* renamed from: a  reason: collision with root package name */
    private final Class f51109a;

    /* renamed from: b  reason: collision with root package name */
    private final List f51110b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51111c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static abstract class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f51112a;

        b(int i10) {
            this.f51112a = i10;
        }

        abstract int a();

        abstract b b(int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class c extends b {

        /* renamed from: b  reason: collision with root package name */
        private final int f51113b;

        /* renamed from: c  reason: collision with root package name */
        private final Object f51114c;

        @Override // tt.w.b
        int a() {
            return this.f51113b;
        }

        @Override // tt.w.b
        b b(int i10) {
            return new c(i10, this.f51113b, this.f51114c);
        }

        private c(int i10, int i11, Object obj) {
            super(i10);
            if (i11 >= 1 && i11 <= 9) {
                this.f51113b = i11;
                this.f51114c = obj;
                return;
            }
            throw new IllegalArgumentException("Fraction width out of bounds: " + i11);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e extends b {

        /* renamed from: b  reason: collision with root package name */
        private final int f51116b;

        /* renamed from: c  reason: collision with root package name */
        private final int f51117c;

        /* renamed from: d  reason: collision with root package name */
        private final Object f51118d;

        @Override // tt.w.b
        int a() {
            return this.f51116b;
        }

        @Override // tt.w.b
        b b(int i10) {
            return new e(i10, this.f51116b, this.f51117c, this.f51118d);
        }

        private e(int i10, int i11, int i12, Object obj) {
            super(i10);
            if (i11 < 1 || i11 > 18) {
                throw new IllegalArgumentException("Min width out of bounds: " + i11);
            } else if (i12 < i11) {
                throw new IllegalArgumentException("Max width smaller than min width.");
            } else {
                if (i12 > 18) {
                    throw new IllegalArgumentException("Max width out of bounds: " + i12);
                } else if (obj != null) {
                    this.f51116b = i11;
                    this.f51117c = i12;
                    this.f51118d = obj;
                } else {
                    throw new NullPointerException("Missing unit.");
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f extends b {

        /* renamed from: b  reason: collision with root package name */
        private final List f51119b;

        @Override // tt.w.b
        int a() {
            return 0;
        }

        @Override // tt.w.b
        b b(int i10) {
            ArrayList arrayList = new ArrayList(this.f51119b);
            for (int size = arrayList.size() - 1; size >= 0; size--) {
                b bVar = (b) arrayList.get(size);
                arrayList.set(size, bVar.b(i10));
                i10 += bVar.a();
            }
            return new f(arrayList);
        }

        private f(List list) {
            super(0);
            if (!list.isEmpty()) {
                Object obj = list.get(0);
                g gVar = g.f51120b;
                if (obj != gVar && list.get(list.size() - 1) != gVar) {
                    this.f51119b = Collections.unmodifiableList(list);
                    return;
                }
                throw new IllegalArgumentException("Optional section must not start or end with an or-operator.");
            }
            throw new IllegalArgumentException("Optional section is empty.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class h extends b {

        /* renamed from: b  reason: collision with root package name */
        private final e f51121b;

        /* renamed from: c  reason: collision with root package name */
        private final b f51122c;

        /* renamed from: d  reason: collision with root package name */
        private final p f51123d;

        /* renamed from: e  reason: collision with root package name */
        private final Map f51124e;

        /* renamed from: f  reason: collision with root package name */
        private final int f51125f;

        @Override // tt.w.b
        int a() {
            return this.f51125f;
        }

        @Override // tt.w.b
        b b(int i10) {
            return new h(i10, this.f51121b, this.f51122c, this.f51123d, this.f51124e, this.f51125f);
        }

        private h(Object obj, String str, p pVar, Map map) {
            super(0);
            this.f51121b = new e(0, 1, 18, obj);
            this.f51122c = new d(str, true);
            this.f51123d = pVar;
            this.f51124e = map;
            int i10 = Integer.MAX_VALUE;
            for (String str2 : map.values()) {
                if (str2.length() < i10) {
                    i10 = str2.length();
                }
            }
            this.f51125f = i10;
        }

        private h(int i10, e eVar, b bVar, p pVar, Map map, int i11) {
            super(i10);
            this.f51121b = eVar;
            this.f51122c = bVar;
            this.f51123d = pVar;
            this.f51124e = map;
            this.f51125f = i11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class i extends b {

        /* renamed from: b  reason: collision with root package name */
        private final char f51126b;

        /* renamed from: c  reason: collision with root package name */
        private final char f51127c;

        @Override // tt.w.b
        int a() {
            return 1;
        }

        @Override // tt.w.b
        b b(int i10) {
            return new i(i10, this.f51126b, this.f51127c);
        }

        private i(char c10, char c11) {
            this(0, c10, c11);
        }

        private i(int i10, char c10, char c11) {
            super(i10);
            this.f51126b = c10;
            this.f51127c = c11;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class j extends b {

        /* renamed from: b  reason: collision with root package name */
        private final boolean f51128b;

        @Override // tt.w.b
        int a() {
            return this.f51128b ? 1 : 0;
        }

        @Override // tt.w.b
        b b(int i10) {
            return new j(i10, this.f51128b);
        }

        private j(boolean z10) {
            super(0);
            this.f51128b = z10;
        }

        private j(int i10, boolean z10) {
            super(i10);
            this.f51128b = z10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public w(Class cls, String str) {
        int i10;
        if (cls != null) {
            int length = str.length();
            ArrayList arrayList = new ArrayList();
            arrayList.add(new ArrayList());
            int i11 = 0;
            int i12 = 0;
            while (i11 < length) {
                char charAt = str.charAt(i11);
                if (charAt == '#') {
                    i12++;
                } else if (g(charAt)) {
                    int i13 = i11 + 1;
                    while (i13 < length && str.charAt(i13) == charAt) {
                        i13++;
                    }
                    d(charAt, i13 - i11, i12, arrayList);
                    i11 = i13 - 1;
                    i12 = 0;
                } else if (i12 > 0) {
                    throw new IllegalArgumentException("Char # must be followed by unit symbol.");
                } else {
                    if (charAt == '\'') {
                        int i14 = i11 + 1;
                        i10 = i14;
                        while (i10 < length) {
                            if (str.charAt(i10) == '\'') {
                                int i15 = i10 + 1;
                                if (i15 >= length || str.charAt(i15) != '\'') {
                                    break;
                                }
                                i10 = i15;
                            }
                            i10++;
                        }
                        if (i10 >= length) {
                            throw new IllegalArgumentException("String literal in pattern not closed: " + str);
                        } else if (i14 == i10) {
                            a('\'', arrayList);
                        } else {
                            b(str.substring(i14, i10).replace("''", "'"), arrayList);
                        }
                    } else if (charAt == '[') {
                        i(arrayList);
                    } else if (charAt == ']') {
                        e(arrayList);
                    } else if (charAt == '.') {
                        h(arrayList).add(new i('.', ','));
                    } else if (charAt == ',') {
                        h(arrayList).add(new i(',', '.'));
                    } else if (charAt == '-') {
                        h(arrayList).add(new j(false));
                    } else if (charAt == '+') {
                        h(arrayList).add(new j(true));
                    } else if (charAt == '{') {
                        int i16 = i11 + 1;
                        i10 = i16;
                        while (i10 < length && str.charAt(i10) != '}') {
                            i10++;
                        }
                        c(str.substring(i16, i10), arrayList);
                    } else if (charAt == '|') {
                        h(arrayList).add(g.c());
                    } else {
                        a(charAt, arrayList);
                    }
                    i11 = i10;
                }
                i11++;
            }
            if (arrayList.size() <= 1) {
                if (!arrayList.isEmpty()) {
                    List list = (List) arrayList.get(0);
                    if (!list.isEmpty()) {
                        Object obj = list.get(0);
                        g gVar = g.f51120b;
                        if (obj != gVar && list.get(list.size() - 1) != gVar) {
                            int size = list.size();
                            int a10 = ((b) list.get(size - 1)).a();
                            for (int i17 = size - 2; i17 >= 0; i17--) {
                                b bVar = (b) list.get(i17);
                                if (bVar == g.f51120b) {
                                    a10 = 0;
                                } else {
                                    list.set(i17, bVar.b(a10));
                                    a10 += bVar.a();
                                }
                            }
                            this.f51109a = cls;
                            this.f51110b = Collections.unmodifiableList(list);
                            this.f51111c = str;
                            return;
                        }
                        throw new IllegalArgumentException("Pattern must not start or end with an or-operator.");
                    }
                    throw new IllegalArgumentException("Missing format pattern.");
                }
                throw new IllegalArgumentException("Empty or invalid pattern.");
            }
            throw new IllegalArgumentException("Open square bracket without closing one.");
        }
        throw new NullPointerException("Missing unit type.");
    }

    private void a(char c10, List list) {
        b(String.valueOf(c10), list);
    }

    private void b(String str, List list) {
        h(list).add(new d(str));
    }

    private void c(String str, List list) {
        Locale locale;
        String[] split = str.split(":");
        if (split.length <= 9 && split.length >= 4) {
            if (split[0].length() == 1) {
                Object f10 = f(split[0].charAt(0));
                String[] split2 = split[2].split("-|_");
                String str2 = split2[0];
                if (split2.length > 1) {
                    String str3 = split2[1];
                    if (split2.length > 2) {
                        String str4 = split2[2];
                        if (split2.length <= 3) {
                            locale = new Locale(str2, str3, str4);
                        } else {
                            throw new IllegalArgumentException("Plural information has wrong locale: " + str);
                        }
                    } else {
                        locale = new Locale(str2, str3);
                    }
                } else {
                    locale = new Locale(str2);
                }
                EnumMap enumMap = new EnumMap(n.class);
                p f11 = p.f(locale, k.CARDINALS);
                for (int i10 = 3; i10 < split.length; i10++) {
                    String[] split3 = split[i10].split("=");
                    if (split3.length == 2) {
                        enumMap.put((EnumMap) n.valueOf(split3[0]), (n) split3[1]);
                    } else {
                        throw new IllegalArgumentException("Plural information has wrong format: " + str);
                    }
                }
                if (!enumMap.isEmpty()) {
                    if (enumMap.containsKey(n.OTHER)) {
                        h(list).add(new h(f10, split[1], f11, enumMap));
                        return;
                    }
                    throw new IllegalArgumentException("Missing plural category OTHER: " + str);
                }
                throw new IllegalArgumentException("Missing plural forms: " + str);
            }
            throw new IllegalArgumentException("Plural information has wrong symbol: " + str);
        }
        throw new IllegalArgumentException("Plural information has wrong format: " + str);
    }

    private void d(char c10, int i10, int i11, List list) {
        Object f10 = f(c10);
        List list2 = (List) list.get(list.size() - 1);
        if (c10 == 'f') {
            if (i11 <= 0) {
                list2.add(new c(0, i10, f(c10)));
                return;
            }
            throw new IllegalArgumentException("Combination of # and f-symbol not allowed.");
        }
        list2.add(new e(0, i10, i10 + i11, f10));
    }

    private static void e(List list) {
        int size = list.size();
        int i10 = size - 1;
        if (i10 >= 1) {
            ((List) list.get(size - 2)).add(new f((List) list.remove(i10)));
            return;
        }
        throw new IllegalArgumentException("Closing square bracket without open one.");
    }

    private static boolean g(char c10) {
        if (c10 < 'A' || c10 > 'Z') {
            if (c10 >= 'a' && c10 <= 'z') {
                return true;
            }
            return false;
        }
        return true;
    }

    private static List h(List list) {
        return (List) list.get(list.size() - 1);
    }

    private static void i(List list) {
        list.add(new ArrayList());
    }

    protected abstract Object f(char c10);

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends b {

        /* renamed from: b  reason: collision with root package name */
        private final String f51115b;

        @Override // tt.w.b
        int a() {
            return this.f51115b.length();
        }

        @Override // tt.w.b
        b b(int i10) {
            return new d(i10, this.f51115b);
        }

        private d(String str) {
            this(str, false);
        }

        private d(String str, boolean z10) {
            super(0);
            if (!z10 && str.isEmpty()) {
                throw new IllegalArgumentException("Literal is empty.");
            }
            this.f51115b = str;
        }

        private d(int i10, String str) {
            super(i10);
            this.f51115b = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class g extends b {

        /* renamed from: b  reason: collision with root package name */
        static final g f51120b = new g();

        private g() {
            super(0);
        }

        static b c() {
            return f51120b;
        }

        @Override // tt.w.b
        int a() {
            return 0;
        }

        @Override // tt.w.b
        b b(int i10) {
            return this;
        }
    }
}
