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
    public static final b f49009e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f49010a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f49011b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f49012c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f49013d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0658a f49014h = new C0658a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49015a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49016b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f49017c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49018d;

        /* renamed from: e  reason: collision with root package name */
        public final String f49019e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49020f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49021g;

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
            this.f49015a = name;
            this.f49016b = type;
            this.f49017c = z10;
            this.f49018d = i10;
            this.f49019e = str;
            this.f49020f = i11;
            this.f49021g = a(type);
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
            if (!(obj instanceof a) || this.f49018d != ((a) obj).f49018d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f49015a, aVar.f49015a) || this.f49017c != aVar.f49017c) {
                return false;
            }
            if (this.f49020f == 1 && aVar.f49020f == 2 && (str3 = this.f49019e) != null && !f49014h.b(str3, aVar.f49019e)) {
                return false;
            }
            if (this.f49020f == 2 && aVar.f49020f == 1 && (str2 = aVar.f49019e) != null && !f49014h.b(str2, this.f49019e)) {
                return false;
            }
            int i10 = this.f49020f;
            if ((i10 == 0 || i10 != aVar.f49020f || ((str = this.f49019e) == null ? aVar.f49019e == null : f49014h.b(str, aVar.f49019e))) && this.f49021g == aVar.f49021g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f49015a.hashCode() * 31) + this.f49021g) * 31;
            if (this.f49017c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f49018d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f49015a);
            sb2.append("', type='");
            sb2.append(this.f49016b);
            sb2.append("', affinity='");
            sb2.append(this.f49021g);
            sb2.append("', notNull=");
            sb2.append(this.f49017c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f49018d);
            sb2.append(", defaultValue='");
            String str = this.f49019e;
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
        public final String f49022a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49023b;

        /* renamed from: c  reason: collision with root package name */
        public final String f49024c;

        /* renamed from: d  reason: collision with root package name */
        public final List f49025d;

        /* renamed from: e  reason: collision with root package name */
        public final List f49026e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f49022a = referenceTable;
            this.f49023b = onDelete;
            this.f49024c = onUpdate;
            this.f49025d = columnNames;
            this.f49026e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f49022a, cVar.f49022a) || !Intrinsics.areEqual(this.f49023b, cVar.f49023b) || !Intrinsics.areEqual(this.f49024c, cVar.f49024c) || !Intrinsics.areEqual(this.f49025d, cVar.f49025d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f49026e, cVar.f49026e);
        }

        public int hashCode() {
            return (((((((this.f49022a.hashCode() * 31) + this.f49023b.hashCode()) * 31) + this.f49024c.hashCode()) * 31) + this.f49025d.hashCode()) * 31) + this.f49026e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f49022a + "', onDelete='" + this.f49023b + " +', onUpdate='" + this.f49024c + "', columnNames=" + this.f49025d + ", referenceColumnNames=" + this.f49026e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0659d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f49027d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49028e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49029i;

        /* renamed from: o  reason: collision with root package name */
        private final String f49030o;

        public C0659d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f49027d = i10;
            this.f49028e = i11;
            this.f49029i = from;
            this.f49030o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0659d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f49027d - other.f49027d;
            if (i10 == 0) {
                return this.f49028e - other.f49028e;
            }
            return i10;
        }

        public final String d() {
            return this.f49029i;
        }

        public final int e() {
            return this.f49027d;
        }

        public final String f() {
            return this.f49030o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49031e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49032a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49033b;

        /* renamed from: c  reason: collision with root package name */
        public final List f49034c;

        /* renamed from: d  reason: collision with root package name */
        public List f49035d;

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
            this.f49032a = name;
            this.f49033b = z10;
            this.f49034c = columns;
            this.f49035d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f49035d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f49033b != eVar.f49033b || !Intrinsics.areEqual(this.f49034c, eVar.f49034c) || !Intrinsics.areEqual(this.f49035d, eVar.f49035d)) {
                return false;
            }
            if (StringsKt.P(this.f49032a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f49032a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f49032a, eVar.f49032a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f49032a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f49032a.hashCode();
            }
            return (((((hashCode * 31) + (this.f49033b ? 1 : 0)) * 31) + this.f49034c.hashCode()) * 31) + this.f49035d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f49032a + "', unique=" + this.f49033b + ", columns=" + this.f49034c + ", orders=" + this.f49035d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f49010a = name;
        this.f49011b = columns;
        this.f49012c = foreignKeys;
        this.f49013d = set;
    }

    public static final d a(g gVar, String str) {
        return f49009e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f49010a, dVar.f49010a) || !Intrinsics.areEqual(this.f49011b, dVar.f49011b) || !Intrinsics.areEqual(this.f49012c, dVar.f49012c)) {
            return false;
        }
        Set set2 = this.f49013d;
        if (set2 == null || (set = dVar.f49013d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f49010a.hashCode() * 31) + this.f49011b.hashCode()) * 31) + this.f49012c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f49010a + "', columns=" + this.f49011b + ", foreignKeys=" + this.f49012c + ", indices=" + this.f49013d + '}';
    }
}
