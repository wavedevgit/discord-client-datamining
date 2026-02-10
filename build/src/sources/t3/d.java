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
    public static final b f50508e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f50509a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f50510b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f50511c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f50512d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0692a f50513h = new C0692a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50514a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50515b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f50516c;

        /* renamed from: d  reason: collision with root package name */
        public final int f50517d;

        /* renamed from: e  reason: collision with root package name */
        public final String f50518e;

        /* renamed from: f  reason: collision with root package name */
        public final int f50519f;

        /* renamed from: g  reason: collision with root package name */
        public final int f50520g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0692a {
            public /* synthetic */ C0692a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0692a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f50514a = name;
            this.f50515b = type;
            this.f50516c = z10;
            this.f50517d = i10;
            this.f50518e = str;
            this.f50519f = i11;
            this.f50520g = a(type);
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
            if (!(obj instanceof a) || this.f50517d != ((a) obj).f50517d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f50514a, aVar.f50514a) || this.f50516c != aVar.f50516c) {
                return false;
            }
            if (this.f50519f == 1 && aVar.f50519f == 2 && (str3 = this.f50518e) != null && !f50513h.b(str3, aVar.f50518e)) {
                return false;
            }
            if (this.f50519f == 2 && aVar.f50519f == 1 && (str2 = aVar.f50518e) != null && !f50513h.b(str2, this.f50518e)) {
                return false;
            }
            int i10 = this.f50519f;
            if ((i10 == 0 || i10 != aVar.f50519f || ((str = this.f50518e) == null ? aVar.f50518e == null : f50513h.b(str, aVar.f50518e))) && this.f50520g == aVar.f50520g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f50514a.hashCode() * 31) + this.f50520g) * 31;
            if (this.f50516c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f50517d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f50514a);
            sb2.append("', type='");
            sb2.append(this.f50515b);
            sb2.append("', affinity='");
            sb2.append(this.f50520g);
            sb2.append("', notNull=");
            sb2.append(this.f50516c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f50517d);
            sb2.append(", defaultValue='");
            String str = this.f50518e;
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
        public final String f50521a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50522b;

        /* renamed from: c  reason: collision with root package name */
        public final String f50523c;

        /* renamed from: d  reason: collision with root package name */
        public final List f50524d;

        /* renamed from: e  reason: collision with root package name */
        public final List f50525e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f50521a = referenceTable;
            this.f50522b = onDelete;
            this.f50523c = onUpdate;
            this.f50524d = columnNames;
            this.f50525e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f50521a, cVar.f50521a) || !Intrinsics.areEqual(this.f50522b, cVar.f50522b) || !Intrinsics.areEqual(this.f50523c, cVar.f50523c) || !Intrinsics.areEqual(this.f50524d, cVar.f50524d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f50525e, cVar.f50525e);
        }

        public int hashCode() {
            return (((((((this.f50521a.hashCode() * 31) + this.f50522b.hashCode()) * 31) + this.f50523c.hashCode()) * 31) + this.f50524d.hashCode()) * 31) + this.f50525e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f50521a + "', onDelete='" + this.f50522b + " +', onUpdate='" + this.f50523c + "', columnNames=" + this.f50524d + ", referenceColumnNames=" + this.f50525e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0693d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f50526d;

        /* renamed from: e  reason: collision with root package name */
        private final int f50527e;

        /* renamed from: i  reason: collision with root package name */
        private final String f50528i;

        /* renamed from: o  reason: collision with root package name */
        private final String f50529o;

        public C0693d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f50526d = i10;
            this.f50527e = i11;
            this.f50528i = from;
            this.f50529o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0693d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f50526d - other.f50526d;
            if (i10 == 0) {
                return this.f50527e - other.f50527e;
            }
            return i10;
        }

        public final String d() {
            return this.f50528i;
        }

        public final int e() {
            return this.f50526d;
        }

        public final String f() {
            return this.f50529o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f50530e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50531a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f50532b;

        /* renamed from: c  reason: collision with root package name */
        public final List f50533c;

        /* renamed from: d  reason: collision with root package name */
        public List f50534d;

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
            this.f50531a = name;
            this.f50532b = z10;
            this.f50533c = columns;
            this.f50534d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f50534d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f50532b != eVar.f50532b || !Intrinsics.areEqual(this.f50533c, eVar.f50533c) || !Intrinsics.areEqual(this.f50534d, eVar.f50534d)) {
                return false;
            }
            if (StringsKt.P(this.f50531a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f50531a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f50531a, eVar.f50531a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f50531a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f50531a.hashCode();
            }
            return (((((hashCode * 31) + (this.f50532b ? 1 : 0)) * 31) + this.f50533c.hashCode()) * 31) + this.f50534d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f50531a + "', unique=" + this.f50532b + ", columns=" + this.f50533c + ", orders=" + this.f50534d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f50509a = name;
        this.f50510b = columns;
        this.f50511c = foreignKeys;
        this.f50512d = set;
    }

    public static final d a(g gVar, String str) {
        return f50508e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f50509a, dVar.f50509a) || !Intrinsics.areEqual(this.f50510b, dVar.f50510b) || !Intrinsics.areEqual(this.f50511c, dVar.f50511c)) {
            return false;
        }
        Set set2 = this.f50512d;
        if (set2 == null || (set = dVar.f50512d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f50509a.hashCode() * 31) + this.f50510b.hashCode()) * 31) + this.f50511c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f50509a + "', columns=" + this.f50510b + ", foreignKeys=" + this.f50511c + ", indices=" + this.f50512d + '}';
    }
}
