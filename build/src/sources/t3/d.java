package t3;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import r3.l;
import x3.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: e  reason: collision with root package name */
    public static final b f50260e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f50261a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f50262b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f50263c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f50264d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0660a f50265h = new C0660a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50266a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50267b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f50268c;

        /* renamed from: d  reason: collision with root package name */
        public final int f50269d;

        /* renamed from: e  reason: collision with root package name */
        public final String f50270e;

        /* renamed from: f  reason: collision with root package name */
        public final int f50271f;

        /* renamed from: g  reason: collision with root package name */
        public final int f50272g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0660a {
            public /* synthetic */ C0660a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private final boolean a(String str) {
                if (str.length() == 0) {
                    return false;
                }
                int i10 = 0;
                int i11 = 0;
                int i12 = 0;
                while (i10 < str.length()) {
                    char charAt = str.charAt(i10);
                    int i13 = i12 + 1;
                    if (i12 == 0 && charAt != '(') {
                        return false;
                    }
                    if (charAt == '(') {
                        i11++;
                    } else if (charAt == ')' && i11 - 1 == 0 && i12 != str.length() - 1) {
                        return false;
                    }
                    i10++;
                    i12 = i13;
                }
                if (i11 != 0) {
                    return false;
                }
                return true;
            }

            public final boolean b(String current, String str) {
                Intrinsics.checkNotNullParameter(current, "current");
                if (Intrinsics.areEqual(current, str)) {
                    return true;
                }
                if (a(current)) {
                    String substring = current.substring(1, current.length() - 1);
                    Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
                    return Intrinsics.areEqual(StringsKt.k1(substring).toString(), str);
                }
                return false;
            }

            private C0660a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f50266a = name;
            this.f50267b = type;
            this.f50268c = z10;
            this.f50269d = i10;
            this.f50270e = str;
            this.f50271f = i11;
            this.f50272g = a(type);
        }

        private final int a(String str) {
            if (str == null) {
                return 5;
            }
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String upperCase = str.toUpperCase(US);
            Intrinsics.checkNotNullExpressionValue(upperCase, "this as java.lang.String).toUpperCase(locale)");
            if (StringsKt.V(upperCase, "INT", false, 2, null)) {
                return 3;
            }
            if (StringsKt.V(upperCase, "CHAR", false, 2, null) || StringsKt.V(upperCase, "CLOB", false, 2, null) || StringsKt.V(upperCase, "TEXT", false, 2, null)) {
                return 2;
            }
            if (StringsKt.V(upperCase, "BLOB", false, 2, null)) {
                return 5;
            }
            if (!StringsKt.V(upperCase, "REAL", false, 2, null) && !StringsKt.V(upperCase, "FLOA", false, 2, null) && !StringsKt.V(upperCase, "DOUB", false, 2, null)) {
                return 1;
            }
            return 4;
        }

        public boolean equals(Object obj) {
            String str;
            String str2;
            String str3;
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a) || this.f50269d != ((a) obj).f50269d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f50266a, aVar.f50266a) || this.f50268c != aVar.f50268c) {
                return false;
            }
            if (this.f50271f == 1 && aVar.f50271f == 2 && (str3 = this.f50270e) != null && !f50265h.b(str3, aVar.f50270e)) {
                return false;
            }
            if (this.f50271f == 2 && aVar.f50271f == 1 && (str2 = aVar.f50270e) != null && !f50265h.b(str2, this.f50270e)) {
                return false;
            }
            int i10 = this.f50271f;
            if ((i10 == 0 || i10 != aVar.f50271f || ((str = this.f50270e) == null ? aVar.f50270e == null : f50265h.b(str, aVar.f50270e))) && this.f50272g == aVar.f50272g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f50266a.hashCode() * 31) + this.f50272g) * 31;
            if (this.f50268c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f50269d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f50266a);
            sb2.append("', type='");
            sb2.append(this.f50267b);
            sb2.append("', affinity='");
            sb2.append(this.f50272g);
            sb2.append("', notNull=");
            sb2.append(this.f50268c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f50269d);
            sb2.append(", defaultValue='");
            String str = this.f50270e;
            if (str == null) {
                str = "undefined";
            }
            sb2.append(str);
            sb2.append("'}");
            return sb2.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final d a(g database, String tableName) {
            Intrinsics.checkNotNullParameter(database, "database");
            Intrinsics.checkNotNullParameter(tableName, "tableName");
            return t3.e.f(database, tableName);
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final String f50273a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50274b;

        /* renamed from: c  reason: collision with root package name */
        public final String f50275c;

        /* renamed from: d  reason: collision with root package name */
        public final List f50276d;

        /* renamed from: e  reason: collision with root package name */
        public final List f50277e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f50273a = referenceTable;
            this.f50274b = onDelete;
            this.f50275c = onUpdate;
            this.f50276d = columnNames;
            this.f50277e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f50273a, cVar.f50273a) || !Intrinsics.areEqual(this.f50274b, cVar.f50274b) || !Intrinsics.areEqual(this.f50275c, cVar.f50275c) || !Intrinsics.areEqual(this.f50276d, cVar.f50276d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f50277e, cVar.f50277e);
        }

        public int hashCode() {
            return (((((((this.f50273a.hashCode() * 31) + this.f50274b.hashCode()) * 31) + this.f50275c.hashCode()) * 31) + this.f50276d.hashCode()) * 31) + this.f50277e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f50273a + "', onDelete='" + this.f50274b + " +', onUpdate='" + this.f50275c + "', columnNames=" + this.f50276d + ", referenceColumnNames=" + this.f50277e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0661d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f50278d;

        /* renamed from: e  reason: collision with root package name */
        private final int f50279e;

        /* renamed from: i  reason: collision with root package name */
        private final String f50280i;

        /* renamed from: o  reason: collision with root package name */
        private final String f50281o;

        public C0661d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f50278d = i10;
            this.f50279e = i11;
            this.f50280i = from;
            this.f50281o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0661d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f50278d - other.f50278d;
            if (i10 == 0) {
                return this.f50279e - other.f50279e;
            }
            return i10;
        }

        public final String d() {
            return this.f50280i;
        }

        public final int e() {
            return this.f50278d;
        }

        public final String f() {
            return this.f50281o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f50282e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50283a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f50284b;

        /* renamed from: c  reason: collision with root package name */
        public final List f50285c;

        /* renamed from: d  reason: collision with root package name */
        public List f50286d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v1, types: [java.util.Collection] */
        /* JADX WARN: Type inference failed for: r5v2 */
        /* JADX WARN: Type inference failed for: r5v4, types: [java.util.ArrayList] */
        public e(String name, boolean z10, List columns, List orders) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(columns, "columns");
            Intrinsics.checkNotNullParameter(orders, "orders");
            this.f50283a = name;
            this.f50284b = z10;
            this.f50285c = columns;
            this.f50286d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f50286d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f50284b != eVar.f50284b || !Intrinsics.areEqual(this.f50285c, eVar.f50285c) || !Intrinsics.areEqual(this.f50286d, eVar.f50286d)) {
                return false;
            }
            if (StringsKt.P(this.f50283a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f50283a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f50283a, eVar.f50283a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f50283a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f50283a.hashCode();
            }
            return (((((hashCode * 31) + (this.f50284b ? 1 : 0)) * 31) + this.f50285c.hashCode()) * 31) + this.f50286d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f50283a + "', unique=" + this.f50284b + ", columns=" + this.f50285c + ", orders=" + this.f50286d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f50261a = name;
        this.f50262b = columns;
        this.f50263c = foreignKeys;
        this.f50264d = set;
    }

    public static final d a(g gVar, String str) {
        return f50260e.a(gVar, str);
    }

    public boolean equals(Object obj) {
        Set set;
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!Intrinsics.areEqual(this.f50261a, dVar.f50261a) || !Intrinsics.areEqual(this.f50262b, dVar.f50262b) || !Intrinsics.areEqual(this.f50263c, dVar.f50263c)) {
            return false;
        }
        Set set2 = this.f50264d;
        if (set2 == null || (set = dVar.f50264d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f50261a.hashCode() * 31) + this.f50262b.hashCode()) * 31) + this.f50263c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f50261a + "', columns=" + this.f50262b + ", foreignKeys=" + this.f50263c + ", indices=" + this.f50264d + '}';
    }
}
