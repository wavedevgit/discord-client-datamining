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
    public static final b f49682e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f49683a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f49684b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f49685c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f49686d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0616a f49687h = new C0616a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49688a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49689b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f49690c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49691d;

        /* renamed from: e  reason: collision with root package name */
        public final String f49692e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49693f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49694g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0616a {
            public /* synthetic */ C0616a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0616a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f49688a = name;
            this.f49689b = type;
            this.f49690c = z10;
            this.f49691d = i10;
            this.f49692e = str;
            this.f49693f = i11;
            this.f49694g = a(type);
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
            if (!(obj instanceof a) || this.f49691d != ((a) obj).f49691d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f49688a, aVar.f49688a) || this.f49690c != aVar.f49690c) {
                return false;
            }
            if (this.f49693f == 1 && aVar.f49693f == 2 && (str3 = this.f49692e) != null && !f49687h.b(str3, aVar.f49692e)) {
                return false;
            }
            if (this.f49693f == 2 && aVar.f49693f == 1 && (str2 = aVar.f49692e) != null && !f49687h.b(str2, this.f49692e)) {
                return false;
            }
            int i10 = this.f49693f;
            if ((i10 == 0 || i10 != aVar.f49693f || ((str = this.f49692e) == null ? aVar.f49692e == null : f49687h.b(str, aVar.f49692e))) && this.f49694g == aVar.f49694g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f49688a.hashCode() * 31) + this.f49694g) * 31;
            if (this.f49690c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f49691d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f49688a);
            sb2.append("', type='");
            sb2.append(this.f49689b);
            sb2.append("', affinity='");
            sb2.append(this.f49694g);
            sb2.append("', notNull=");
            sb2.append(this.f49690c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f49691d);
            sb2.append(", defaultValue='");
            String str = this.f49692e;
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
        public final String f49695a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49696b;

        /* renamed from: c  reason: collision with root package name */
        public final String f49697c;

        /* renamed from: d  reason: collision with root package name */
        public final List f49698d;

        /* renamed from: e  reason: collision with root package name */
        public final List f49699e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f49695a = referenceTable;
            this.f49696b = onDelete;
            this.f49697c = onUpdate;
            this.f49698d = columnNames;
            this.f49699e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f49695a, cVar.f49695a) || !Intrinsics.areEqual(this.f49696b, cVar.f49696b) || !Intrinsics.areEqual(this.f49697c, cVar.f49697c) || !Intrinsics.areEqual(this.f49698d, cVar.f49698d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f49699e, cVar.f49699e);
        }

        public int hashCode() {
            return (((((((this.f49695a.hashCode() * 31) + this.f49696b.hashCode()) * 31) + this.f49697c.hashCode()) * 31) + this.f49698d.hashCode()) * 31) + this.f49699e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f49695a + "', onDelete='" + this.f49696b + " +', onUpdate='" + this.f49697c + "', columnNames=" + this.f49698d + ", referenceColumnNames=" + this.f49699e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0617d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f49700d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49701e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49702i;

        /* renamed from: o  reason: collision with root package name */
        private final String f49703o;

        public C0617d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f49700d = i10;
            this.f49701e = i11;
            this.f49702i = from;
            this.f49703o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0617d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f49700d - other.f49700d;
            if (i10 == 0) {
                return this.f49701e - other.f49701e;
            }
            return i10;
        }

        public final String d() {
            return this.f49702i;
        }

        public final int e() {
            return this.f49700d;
        }

        public final String f() {
            return this.f49703o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49704e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49705a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49706b;

        /* renamed from: c  reason: collision with root package name */
        public final List f49707c;

        /* renamed from: d  reason: collision with root package name */
        public List f49708d;

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
            this.f49705a = name;
            this.f49706b = z10;
            this.f49707c = columns;
            this.f49708d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f49708d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f49706b != eVar.f49706b || !Intrinsics.areEqual(this.f49707c, eVar.f49707c) || !Intrinsics.areEqual(this.f49708d, eVar.f49708d)) {
                return false;
            }
            if (StringsKt.P(this.f49705a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f49705a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f49705a, eVar.f49705a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f49705a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f49705a.hashCode();
            }
            return (((((hashCode * 31) + (this.f49706b ? 1 : 0)) * 31) + this.f49707c.hashCode()) * 31) + this.f49708d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f49705a + "', unique=" + this.f49706b + ", columns=" + this.f49707c + ", orders=" + this.f49708d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f49683a = name;
        this.f49684b = columns;
        this.f49685c = foreignKeys;
        this.f49686d = set;
    }

    public static final d a(g gVar, String str) {
        return f49682e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f49683a, dVar.f49683a) || !Intrinsics.areEqual(this.f49684b, dVar.f49684b) || !Intrinsics.areEqual(this.f49685c, dVar.f49685c)) {
            return false;
        }
        Set set2 = this.f49686d;
        if (set2 == null || (set = dVar.f49686d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f49683a.hashCode() * 31) + this.f49684b.hashCode()) * 31) + this.f49685c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f49683a + "', columns=" + this.f49684b + ", foreignKeys=" + this.f49685c + ", indices=" + this.f49686d + '}';
    }
}
