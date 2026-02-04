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
    public static final b f49679e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f49680a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f49681b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f49682c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f49683d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0616a f49684h = new C0616a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49685a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49686b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f49687c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49688d;

        /* renamed from: e  reason: collision with root package name */
        public final String f49689e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49690f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49691g;

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
            this.f49685a = name;
            this.f49686b = type;
            this.f49687c = z10;
            this.f49688d = i10;
            this.f49689e = str;
            this.f49690f = i11;
            this.f49691g = a(type);
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
            if (!(obj instanceof a) || this.f49688d != ((a) obj).f49688d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f49685a, aVar.f49685a) || this.f49687c != aVar.f49687c) {
                return false;
            }
            if (this.f49690f == 1 && aVar.f49690f == 2 && (str3 = this.f49689e) != null && !f49684h.b(str3, aVar.f49689e)) {
                return false;
            }
            if (this.f49690f == 2 && aVar.f49690f == 1 && (str2 = aVar.f49689e) != null && !f49684h.b(str2, this.f49689e)) {
                return false;
            }
            int i10 = this.f49690f;
            if ((i10 == 0 || i10 != aVar.f49690f || ((str = this.f49689e) == null ? aVar.f49689e == null : f49684h.b(str, aVar.f49689e))) && this.f49691g == aVar.f49691g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f49685a.hashCode() * 31) + this.f49691g) * 31;
            if (this.f49687c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f49688d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f49685a);
            sb2.append("', type='");
            sb2.append(this.f49686b);
            sb2.append("', affinity='");
            sb2.append(this.f49691g);
            sb2.append("', notNull=");
            sb2.append(this.f49687c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f49688d);
            sb2.append(", defaultValue='");
            String str = this.f49689e;
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
        public final String f49692a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49693b;

        /* renamed from: c  reason: collision with root package name */
        public final String f49694c;

        /* renamed from: d  reason: collision with root package name */
        public final List f49695d;

        /* renamed from: e  reason: collision with root package name */
        public final List f49696e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f49692a = referenceTable;
            this.f49693b = onDelete;
            this.f49694c = onUpdate;
            this.f49695d = columnNames;
            this.f49696e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f49692a, cVar.f49692a) || !Intrinsics.areEqual(this.f49693b, cVar.f49693b) || !Intrinsics.areEqual(this.f49694c, cVar.f49694c) || !Intrinsics.areEqual(this.f49695d, cVar.f49695d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f49696e, cVar.f49696e);
        }

        public int hashCode() {
            return (((((((this.f49692a.hashCode() * 31) + this.f49693b.hashCode()) * 31) + this.f49694c.hashCode()) * 31) + this.f49695d.hashCode()) * 31) + this.f49696e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f49692a + "', onDelete='" + this.f49693b + " +', onUpdate='" + this.f49694c + "', columnNames=" + this.f49695d + ", referenceColumnNames=" + this.f49696e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0617d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f49697d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49698e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49699i;

        /* renamed from: o  reason: collision with root package name */
        private final String f49700o;

        public C0617d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f49697d = i10;
            this.f49698e = i11;
            this.f49699i = from;
            this.f49700o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0617d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f49697d - other.f49697d;
            if (i10 == 0) {
                return this.f49698e - other.f49698e;
            }
            return i10;
        }

        public final String d() {
            return this.f49699i;
        }

        public final int e() {
            return this.f49697d;
        }

        public final String f() {
            return this.f49700o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49701e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49702a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49703b;

        /* renamed from: c  reason: collision with root package name */
        public final List f49704c;

        /* renamed from: d  reason: collision with root package name */
        public List f49705d;

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
            this.f49702a = name;
            this.f49703b = z10;
            this.f49704c = columns;
            this.f49705d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f49705d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f49703b != eVar.f49703b || !Intrinsics.areEqual(this.f49704c, eVar.f49704c) || !Intrinsics.areEqual(this.f49705d, eVar.f49705d)) {
                return false;
            }
            if (StringsKt.P(this.f49702a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f49702a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f49702a, eVar.f49702a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f49702a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f49702a.hashCode();
            }
            return (((((hashCode * 31) + (this.f49703b ? 1 : 0)) * 31) + this.f49704c.hashCode()) * 31) + this.f49705d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f49702a + "', unique=" + this.f49703b + ", columns=" + this.f49704c + ", orders=" + this.f49705d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f49680a = name;
        this.f49681b = columns;
        this.f49682c = foreignKeys;
        this.f49683d = set;
    }

    public static final d a(g gVar, String str) {
        return f49679e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f49680a, dVar.f49680a) || !Intrinsics.areEqual(this.f49681b, dVar.f49681b) || !Intrinsics.areEqual(this.f49682c, dVar.f49682c)) {
            return false;
        }
        Set set2 = this.f49683d;
        if (set2 == null || (set = dVar.f49683d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f49680a.hashCode() * 31) + this.f49681b.hashCode()) * 31) + this.f49682c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f49680a + "', columns=" + this.f49681b + ", foreignKeys=" + this.f49682c + ", indices=" + this.f49683d + '}';
    }
}
