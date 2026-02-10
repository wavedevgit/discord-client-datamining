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
    public static final b f48440e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f48441a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f48442b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f48443c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f48444d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0658a f48445h = new C0658a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f48446a;

        /* renamed from: b  reason: collision with root package name */
        public final String f48447b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f48448c;

        /* renamed from: d  reason: collision with root package name */
        public final int f48449d;

        /* renamed from: e  reason: collision with root package name */
        public final String f48450e;

        /* renamed from: f  reason: collision with root package name */
        public final int f48451f;

        /* renamed from: g  reason: collision with root package name */
        public final int f48452g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0658a {
            public /* synthetic */ C0658a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0658a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f48446a = name;
            this.f48447b = type;
            this.f48448c = z10;
            this.f48449d = i10;
            this.f48450e = str;
            this.f48451f = i11;
            this.f48452g = a(type);
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
            if (!(obj instanceof a) || this.f48449d != ((a) obj).f48449d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f48446a, aVar.f48446a) || this.f48448c != aVar.f48448c) {
                return false;
            }
            if (this.f48451f == 1 && aVar.f48451f == 2 && (str3 = this.f48450e) != null && !f48445h.b(str3, aVar.f48450e)) {
                return false;
            }
            if (this.f48451f == 2 && aVar.f48451f == 1 && (str2 = aVar.f48450e) != null && !f48445h.b(str2, this.f48450e)) {
                return false;
            }
            int i10 = this.f48451f;
            if ((i10 == 0 || i10 != aVar.f48451f || ((str = this.f48450e) == null ? aVar.f48450e == null : f48445h.b(str, aVar.f48450e))) && this.f48452g == aVar.f48452g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f48446a.hashCode() * 31) + this.f48452g) * 31;
            if (this.f48448c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f48449d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f48446a);
            sb2.append("', type='");
            sb2.append(this.f48447b);
            sb2.append("', affinity='");
            sb2.append(this.f48452g);
            sb2.append("', notNull=");
            sb2.append(this.f48448c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f48449d);
            sb2.append(", defaultValue='");
            String str = this.f48450e;
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
        public final String f48453a;

        /* renamed from: b  reason: collision with root package name */
        public final String f48454b;

        /* renamed from: c  reason: collision with root package name */
        public final String f48455c;

        /* renamed from: d  reason: collision with root package name */
        public final List f48456d;

        /* renamed from: e  reason: collision with root package name */
        public final List f48457e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f48453a = referenceTable;
            this.f48454b = onDelete;
            this.f48455c = onUpdate;
            this.f48456d = columnNames;
            this.f48457e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f48453a, cVar.f48453a) || !Intrinsics.areEqual(this.f48454b, cVar.f48454b) || !Intrinsics.areEqual(this.f48455c, cVar.f48455c) || !Intrinsics.areEqual(this.f48456d, cVar.f48456d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f48457e, cVar.f48457e);
        }

        public int hashCode() {
            return (((((((this.f48453a.hashCode() * 31) + this.f48454b.hashCode()) * 31) + this.f48455c.hashCode()) * 31) + this.f48456d.hashCode()) * 31) + this.f48457e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f48453a + "', onDelete='" + this.f48454b + " +', onUpdate='" + this.f48455c + "', columnNames=" + this.f48456d + ", referenceColumnNames=" + this.f48457e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0659d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f48458d;

        /* renamed from: e  reason: collision with root package name */
        private final int f48459e;

        /* renamed from: i  reason: collision with root package name */
        private final String f48460i;

        /* renamed from: o  reason: collision with root package name */
        private final String f48461o;

        public C0659d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f48458d = i10;
            this.f48459e = i11;
            this.f48460i = from;
            this.f48461o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0659d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f48458d - other.f48458d;
            if (i10 == 0) {
                return this.f48459e - other.f48459e;
            }
            return i10;
        }

        public final String d() {
            return this.f48460i;
        }

        public final int e() {
            return this.f48458d;
        }

        public final String f() {
            return this.f48461o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f48462e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f48463a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f48464b;

        /* renamed from: c  reason: collision with root package name */
        public final List f48465c;

        /* renamed from: d  reason: collision with root package name */
        public List f48466d;

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
            this.f48463a = name;
            this.f48464b = z10;
            this.f48465c = columns;
            this.f48466d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f48466d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f48464b != eVar.f48464b || !Intrinsics.areEqual(this.f48465c, eVar.f48465c) || !Intrinsics.areEqual(this.f48466d, eVar.f48466d)) {
                return false;
            }
            if (StringsKt.P(this.f48463a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f48463a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f48463a, eVar.f48463a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f48463a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f48463a.hashCode();
            }
            return (((((hashCode * 31) + (this.f48464b ? 1 : 0)) * 31) + this.f48465c.hashCode()) * 31) + this.f48466d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f48463a + "', unique=" + this.f48464b + ", columns=" + this.f48465c + ", orders=" + this.f48466d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f48441a = name;
        this.f48442b = columns;
        this.f48443c = foreignKeys;
        this.f48444d = set;
    }

    public static final d a(g gVar, String str) {
        return f48440e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f48441a, dVar.f48441a) || !Intrinsics.areEqual(this.f48442b, dVar.f48442b) || !Intrinsics.areEqual(this.f48443c, dVar.f48443c)) {
            return false;
        }
        Set set2 = this.f48444d;
        if (set2 == null || (set = dVar.f48444d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f48441a.hashCode() * 31) + this.f48442b.hashCode()) * 31) + this.f48443c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f48441a + "', columns=" + this.f48442b + ", foreignKeys=" + this.f48443c + ", indices=" + this.f48444d + '}';
    }
}
