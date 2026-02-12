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
    public static final b f48441e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f48442a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f48443b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f48444c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f48445d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0658a f48446h = new C0658a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f48447a;

        /* renamed from: b  reason: collision with root package name */
        public final String f48448b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f48449c;

        /* renamed from: d  reason: collision with root package name */
        public final int f48450d;

        /* renamed from: e  reason: collision with root package name */
        public final String f48451e;

        /* renamed from: f  reason: collision with root package name */
        public final int f48452f;

        /* renamed from: g  reason: collision with root package name */
        public final int f48453g;

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
            this.f48447a = name;
            this.f48448b = type;
            this.f48449c = z10;
            this.f48450d = i10;
            this.f48451e = str;
            this.f48452f = i11;
            this.f48453g = a(type);
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
            if (!(obj instanceof a) || this.f48450d != ((a) obj).f48450d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f48447a, aVar.f48447a) || this.f48449c != aVar.f48449c) {
                return false;
            }
            if (this.f48452f == 1 && aVar.f48452f == 2 && (str3 = this.f48451e) != null && !f48446h.b(str3, aVar.f48451e)) {
                return false;
            }
            if (this.f48452f == 2 && aVar.f48452f == 1 && (str2 = aVar.f48451e) != null && !f48446h.b(str2, this.f48451e)) {
                return false;
            }
            int i10 = this.f48452f;
            if ((i10 == 0 || i10 != aVar.f48452f || ((str = this.f48451e) == null ? aVar.f48451e == null : f48446h.b(str, aVar.f48451e))) && this.f48453g == aVar.f48453g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f48447a.hashCode() * 31) + this.f48453g) * 31;
            if (this.f48449c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f48450d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f48447a);
            sb2.append("', type='");
            sb2.append(this.f48448b);
            sb2.append("', affinity='");
            sb2.append(this.f48453g);
            sb2.append("', notNull=");
            sb2.append(this.f48449c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f48450d);
            sb2.append(", defaultValue='");
            String str = this.f48451e;
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
        public final String f48454a;

        /* renamed from: b  reason: collision with root package name */
        public final String f48455b;

        /* renamed from: c  reason: collision with root package name */
        public final String f48456c;

        /* renamed from: d  reason: collision with root package name */
        public final List f48457d;

        /* renamed from: e  reason: collision with root package name */
        public final List f48458e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f48454a = referenceTable;
            this.f48455b = onDelete;
            this.f48456c = onUpdate;
            this.f48457d = columnNames;
            this.f48458e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f48454a, cVar.f48454a) || !Intrinsics.areEqual(this.f48455b, cVar.f48455b) || !Intrinsics.areEqual(this.f48456c, cVar.f48456c) || !Intrinsics.areEqual(this.f48457d, cVar.f48457d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f48458e, cVar.f48458e);
        }

        public int hashCode() {
            return (((((((this.f48454a.hashCode() * 31) + this.f48455b.hashCode()) * 31) + this.f48456c.hashCode()) * 31) + this.f48457d.hashCode()) * 31) + this.f48458e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f48454a + "', onDelete='" + this.f48455b + " +', onUpdate='" + this.f48456c + "', columnNames=" + this.f48457d + ", referenceColumnNames=" + this.f48458e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0659d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f48459d;

        /* renamed from: e  reason: collision with root package name */
        private final int f48460e;

        /* renamed from: i  reason: collision with root package name */
        private final String f48461i;

        /* renamed from: o  reason: collision with root package name */
        private final String f48462o;

        public C0659d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f48459d = i10;
            this.f48460e = i11;
            this.f48461i = from;
            this.f48462o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0659d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f48459d - other.f48459d;
            if (i10 == 0) {
                return this.f48460e - other.f48460e;
            }
            return i10;
        }

        public final String d() {
            return this.f48461i;
        }

        public final int e() {
            return this.f48459d;
        }

        public final String f() {
            return this.f48462o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f48463e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f48464a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f48465b;

        /* renamed from: c  reason: collision with root package name */
        public final List f48466c;

        /* renamed from: d  reason: collision with root package name */
        public List f48467d;

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
            this.f48464a = name;
            this.f48465b = z10;
            this.f48466c = columns;
            this.f48467d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f48467d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f48465b != eVar.f48465b || !Intrinsics.areEqual(this.f48466c, eVar.f48466c) || !Intrinsics.areEqual(this.f48467d, eVar.f48467d)) {
                return false;
            }
            if (StringsKt.P(this.f48464a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f48464a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f48464a, eVar.f48464a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f48464a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f48464a.hashCode();
            }
            return (((((hashCode * 31) + (this.f48465b ? 1 : 0)) * 31) + this.f48466c.hashCode()) * 31) + this.f48467d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f48464a + "', unique=" + this.f48465b + ", columns=" + this.f48466c + ", orders=" + this.f48467d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f48442a = name;
        this.f48443b = columns;
        this.f48444c = foreignKeys;
        this.f48445d = set;
    }

    public static final d a(g gVar, String str) {
        return f48441e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f48442a, dVar.f48442a) || !Intrinsics.areEqual(this.f48443b, dVar.f48443b) || !Intrinsics.areEqual(this.f48444c, dVar.f48444c)) {
            return false;
        }
        Set set2 = this.f48445d;
        if (set2 == null || (set = dVar.f48445d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f48442a.hashCode() * 31) + this.f48443b.hashCode()) * 31) + this.f48444c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f48442a + "', columns=" + this.f48443b + ", foreignKeys=" + this.f48444c + ", indices=" + this.f48445d + '}';
    }
}
