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
    public static final b f49471e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f49472a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f49473b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f49474c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f49475d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0643a f49476h = new C0643a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49477a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49478b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f49479c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49480d;

        /* renamed from: e  reason: collision with root package name */
        public final String f49481e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49482f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49483g;

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
            this.f49477a = name;
            this.f49478b = type;
            this.f49479c = z10;
            this.f49480d = i10;
            this.f49481e = str;
            this.f49482f = i11;
            this.f49483g = a(type);
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
            if (!(obj instanceof a) || this.f49480d != ((a) obj).f49480d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f49477a, aVar.f49477a) || this.f49479c != aVar.f49479c) {
                return false;
            }
            if (this.f49482f == 1 && aVar.f49482f == 2 && (str3 = this.f49481e) != null && !f49476h.b(str3, aVar.f49481e)) {
                return false;
            }
            if (this.f49482f == 2 && aVar.f49482f == 1 && (str2 = aVar.f49481e) != null && !f49476h.b(str2, this.f49481e)) {
                return false;
            }
            int i10 = this.f49482f;
            if ((i10 == 0 || i10 != aVar.f49482f || ((str = this.f49481e) == null ? aVar.f49481e == null : f49476h.b(str, aVar.f49481e))) && this.f49483g == aVar.f49483g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f49477a.hashCode() * 31) + this.f49483g) * 31;
            if (this.f49479c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f49480d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f49477a);
            sb2.append("', type='");
            sb2.append(this.f49478b);
            sb2.append("', affinity='");
            sb2.append(this.f49483g);
            sb2.append("', notNull=");
            sb2.append(this.f49479c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f49480d);
            sb2.append(", defaultValue='");
            String str = this.f49481e;
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
        public final String f49484a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49485b;

        /* renamed from: c  reason: collision with root package name */
        public final String f49486c;

        /* renamed from: d  reason: collision with root package name */
        public final List f49487d;

        /* renamed from: e  reason: collision with root package name */
        public final List f49488e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f49484a = referenceTable;
            this.f49485b = onDelete;
            this.f49486c = onUpdate;
            this.f49487d = columnNames;
            this.f49488e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f49484a, cVar.f49484a) || !Intrinsics.areEqual(this.f49485b, cVar.f49485b) || !Intrinsics.areEqual(this.f49486c, cVar.f49486c) || !Intrinsics.areEqual(this.f49487d, cVar.f49487d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f49488e, cVar.f49488e);
        }

        public int hashCode() {
            return (((((((this.f49484a.hashCode() * 31) + this.f49485b.hashCode()) * 31) + this.f49486c.hashCode()) * 31) + this.f49487d.hashCode()) * 31) + this.f49488e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f49484a + "', onDelete='" + this.f49485b + " +', onUpdate='" + this.f49486c + "', columnNames=" + this.f49487d + ", referenceColumnNames=" + this.f49488e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0644d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f49489d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49490e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49491i;

        /* renamed from: o  reason: collision with root package name */
        private final String f49492o;

        public C0644d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f49489d = i10;
            this.f49490e = i11;
            this.f49491i = from;
            this.f49492o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0644d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f49489d - other.f49489d;
            if (i10 == 0) {
                return this.f49490e - other.f49490e;
            }
            return i10;
        }

        public final String d() {
            return this.f49491i;
        }

        public final int e() {
            return this.f49489d;
        }

        public final String f() {
            return this.f49492o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49493e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49494a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49495b;

        /* renamed from: c  reason: collision with root package name */
        public final List f49496c;

        /* renamed from: d  reason: collision with root package name */
        public List f49497d;

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
            this.f49494a = name;
            this.f49495b = z10;
            this.f49496c = columns;
            this.f49497d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f49497d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f49495b != eVar.f49495b || !Intrinsics.areEqual(this.f49496c, eVar.f49496c) || !Intrinsics.areEqual(this.f49497d, eVar.f49497d)) {
                return false;
            }
            if (StringsKt.P(this.f49494a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f49494a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f49494a, eVar.f49494a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f49494a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f49494a.hashCode();
            }
            return (((((hashCode * 31) + (this.f49495b ? 1 : 0)) * 31) + this.f49496c.hashCode()) * 31) + this.f49497d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f49494a + "', unique=" + this.f49495b + ", columns=" + this.f49496c + ", orders=" + this.f49497d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f49472a = name;
        this.f49473b = columns;
        this.f49474c = foreignKeys;
        this.f49475d = set;
    }

    public static final d a(g gVar, String str) {
        return f49471e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f49472a, dVar.f49472a) || !Intrinsics.areEqual(this.f49473b, dVar.f49473b) || !Intrinsics.areEqual(this.f49474c, dVar.f49474c)) {
            return false;
        }
        Set set2 = this.f49475d;
        if (set2 == null || (set = dVar.f49475d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f49472a.hashCode() * 31) + this.f49473b.hashCode()) * 31) + this.f49474c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f49472a + "', columns=" + this.f49473b + ", foreignKeys=" + this.f49474c + ", indices=" + this.f49475d + '}';
    }
}
