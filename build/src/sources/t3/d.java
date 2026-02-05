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
    public static final b f50284e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f50285a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f50286b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f50287c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f50288d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0643a f50289h = new C0643a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50290a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50291b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f50292c;

        /* renamed from: d  reason: collision with root package name */
        public final int f50293d;

        /* renamed from: e  reason: collision with root package name */
        public final String f50294e;

        /* renamed from: f  reason: collision with root package name */
        public final int f50295f;

        /* renamed from: g  reason: collision with root package name */
        public final int f50296g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0643a {
            public /* synthetic */ C0643a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0643a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f50290a = name;
            this.f50291b = type;
            this.f50292c = z10;
            this.f50293d = i10;
            this.f50294e = str;
            this.f50295f = i11;
            this.f50296g = a(type);
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
            if (!(obj instanceof a) || this.f50293d != ((a) obj).f50293d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f50290a, aVar.f50290a) || this.f50292c != aVar.f50292c) {
                return false;
            }
            if (this.f50295f == 1 && aVar.f50295f == 2 && (str3 = this.f50294e) != null && !f50289h.b(str3, aVar.f50294e)) {
                return false;
            }
            if (this.f50295f == 2 && aVar.f50295f == 1 && (str2 = aVar.f50294e) != null && !f50289h.b(str2, this.f50294e)) {
                return false;
            }
            int i10 = this.f50295f;
            if ((i10 == 0 || i10 != aVar.f50295f || ((str = this.f50294e) == null ? aVar.f50294e == null : f50289h.b(str, aVar.f50294e))) && this.f50296g == aVar.f50296g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f50290a.hashCode() * 31) + this.f50296g) * 31;
            if (this.f50292c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f50293d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f50290a);
            sb2.append("', type='");
            sb2.append(this.f50291b);
            sb2.append("', affinity='");
            sb2.append(this.f50296g);
            sb2.append("', notNull=");
            sb2.append(this.f50292c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f50293d);
            sb2.append(", defaultValue='");
            String str = this.f50294e;
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
        public final String f50297a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50298b;

        /* renamed from: c  reason: collision with root package name */
        public final String f50299c;

        /* renamed from: d  reason: collision with root package name */
        public final List f50300d;

        /* renamed from: e  reason: collision with root package name */
        public final List f50301e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f50297a = referenceTable;
            this.f50298b = onDelete;
            this.f50299c = onUpdate;
            this.f50300d = columnNames;
            this.f50301e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f50297a, cVar.f50297a) || !Intrinsics.areEqual(this.f50298b, cVar.f50298b) || !Intrinsics.areEqual(this.f50299c, cVar.f50299c) || !Intrinsics.areEqual(this.f50300d, cVar.f50300d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f50301e, cVar.f50301e);
        }

        public int hashCode() {
            return (((((((this.f50297a.hashCode() * 31) + this.f50298b.hashCode()) * 31) + this.f50299c.hashCode()) * 31) + this.f50300d.hashCode()) * 31) + this.f50301e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f50297a + "', onDelete='" + this.f50298b + " +', onUpdate='" + this.f50299c + "', columnNames=" + this.f50300d + ", referenceColumnNames=" + this.f50301e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0644d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f50302d;

        /* renamed from: e  reason: collision with root package name */
        private final int f50303e;

        /* renamed from: i  reason: collision with root package name */
        private final String f50304i;

        /* renamed from: o  reason: collision with root package name */
        private final String f50305o;

        public C0644d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f50302d = i10;
            this.f50303e = i11;
            this.f50304i = from;
            this.f50305o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0644d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f50302d - other.f50302d;
            if (i10 == 0) {
                return this.f50303e - other.f50303e;
            }
            return i10;
        }

        public final String d() {
            return this.f50304i;
        }

        public final int e() {
            return this.f50302d;
        }

        public final String f() {
            return this.f50305o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f50306e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50307a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f50308b;

        /* renamed from: c  reason: collision with root package name */
        public final List f50309c;

        /* renamed from: d  reason: collision with root package name */
        public List f50310d;

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
            this.f50307a = name;
            this.f50308b = z10;
            this.f50309c = columns;
            this.f50310d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f50310d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f50308b != eVar.f50308b || !Intrinsics.areEqual(this.f50309c, eVar.f50309c) || !Intrinsics.areEqual(this.f50310d, eVar.f50310d)) {
                return false;
            }
            if (StringsKt.P(this.f50307a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f50307a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f50307a, eVar.f50307a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f50307a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f50307a.hashCode();
            }
            return (((((hashCode * 31) + (this.f50308b ? 1 : 0)) * 31) + this.f50309c.hashCode()) * 31) + this.f50310d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f50307a + "', unique=" + this.f50308b + ", columns=" + this.f50309c + ", orders=" + this.f50310d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f50285a = name;
        this.f50286b = columns;
        this.f50287c = foreignKeys;
        this.f50288d = set;
    }

    public static final d a(g gVar, String str) {
        return f50284e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f50285a, dVar.f50285a) || !Intrinsics.areEqual(this.f50286b, dVar.f50286b) || !Intrinsics.areEqual(this.f50287c, dVar.f50287c)) {
            return false;
        }
        Set set2 = this.f50288d;
        if (set2 == null || (set = dVar.f50288d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f50285a.hashCode() * 31) + this.f50286b.hashCode()) * 31) + this.f50287c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f50285a + "', columns=" + this.f50286b + ", foreignKeys=" + this.f50287c + ", indices=" + this.f50288d + '}';
    }
}
