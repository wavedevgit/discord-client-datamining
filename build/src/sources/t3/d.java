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
    public static final b f49183e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f49184a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f49185b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f49186c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f49187d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0632a f49188h = new C0632a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49189a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49190b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f49191c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49192d;

        /* renamed from: e  reason: collision with root package name */
        public final String f49193e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49194f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49195g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0632a {
            public /* synthetic */ C0632a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0632a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f49189a = name;
            this.f49190b = type;
            this.f49191c = z10;
            this.f49192d = i10;
            this.f49193e = str;
            this.f49194f = i11;
            this.f49195g = a(type);
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
            if (!(obj instanceof a) || this.f49192d != ((a) obj).f49192d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f49189a, aVar.f49189a) || this.f49191c != aVar.f49191c) {
                return false;
            }
            if (this.f49194f == 1 && aVar.f49194f == 2 && (str3 = this.f49193e) != null && !f49188h.b(str3, aVar.f49193e)) {
                return false;
            }
            if (this.f49194f == 2 && aVar.f49194f == 1 && (str2 = aVar.f49193e) != null && !f49188h.b(str2, this.f49193e)) {
                return false;
            }
            int i10 = this.f49194f;
            if ((i10 == 0 || i10 != aVar.f49194f || ((str = this.f49193e) == null ? aVar.f49193e == null : f49188h.b(str, aVar.f49193e))) && this.f49195g == aVar.f49195g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f49189a.hashCode() * 31) + this.f49195g) * 31;
            if (this.f49191c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f49192d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f49189a);
            sb2.append("', type='");
            sb2.append(this.f49190b);
            sb2.append("', affinity='");
            sb2.append(this.f49195g);
            sb2.append("', notNull=");
            sb2.append(this.f49191c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f49192d);
            sb2.append(", defaultValue='");
            String str = this.f49193e;
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
        public final String f49196a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49197b;

        /* renamed from: c  reason: collision with root package name */
        public final String f49198c;

        /* renamed from: d  reason: collision with root package name */
        public final List f49199d;

        /* renamed from: e  reason: collision with root package name */
        public final List f49200e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f49196a = referenceTable;
            this.f49197b = onDelete;
            this.f49198c = onUpdate;
            this.f49199d = columnNames;
            this.f49200e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f49196a, cVar.f49196a) || !Intrinsics.areEqual(this.f49197b, cVar.f49197b) || !Intrinsics.areEqual(this.f49198c, cVar.f49198c) || !Intrinsics.areEqual(this.f49199d, cVar.f49199d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f49200e, cVar.f49200e);
        }

        public int hashCode() {
            return (((((((this.f49196a.hashCode() * 31) + this.f49197b.hashCode()) * 31) + this.f49198c.hashCode()) * 31) + this.f49199d.hashCode()) * 31) + this.f49200e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f49196a + "', onDelete='" + this.f49197b + " +', onUpdate='" + this.f49198c + "', columnNames=" + this.f49199d + ", referenceColumnNames=" + this.f49200e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0633d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f49201d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49202e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49203i;

        /* renamed from: o  reason: collision with root package name */
        private final String f49204o;

        public C0633d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f49201d = i10;
            this.f49202e = i11;
            this.f49203i = from;
            this.f49204o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0633d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f49201d - other.f49201d;
            if (i10 == 0) {
                return this.f49202e - other.f49202e;
            }
            return i10;
        }

        public final String d() {
            return this.f49203i;
        }

        public final int e() {
            return this.f49201d;
        }

        public final String f() {
            return this.f49204o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49205e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49206a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49207b;

        /* renamed from: c  reason: collision with root package name */
        public final List f49208c;

        /* renamed from: d  reason: collision with root package name */
        public List f49209d;

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
            this.f49206a = name;
            this.f49207b = z10;
            this.f49208c = columns;
            this.f49209d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f49209d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f49207b != eVar.f49207b || !Intrinsics.areEqual(this.f49208c, eVar.f49208c) || !Intrinsics.areEqual(this.f49209d, eVar.f49209d)) {
                return false;
            }
            if (StringsKt.P(this.f49206a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f49206a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f49206a, eVar.f49206a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f49206a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f49206a.hashCode();
            }
            return (((((hashCode * 31) + (this.f49207b ? 1 : 0)) * 31) + this.f49208c.hashCode()) * 31) + this.f49209d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f49206a + "', unique=" + this.f49207b + ", columns=" + this.f49208c + ", orders=" + this.f49209d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f49184a = name;
        this.f49185b = columns;
        this.f49186c = foreignKeys;
        this.f49187d = set;
    }

    public static final d a(g gVar, String str) {
        return f49183e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f49184a, dVar.f49184a) || !Intrinsics.areEqual(this.f49185b, dVar.f49185b) || !Intrinsics.areEqual(this.f49186c, dVar.f49186c)) {
            return false;
        }
        Set set2 = this.f49187d;
        if (set2 == null || (set = dVar.f49187d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f49184a.hashCode() * 31) + this.f49185b.hashCode()) * 31) + this.f49186c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f49184a + "', columns=" + this.f49185b + ", foreignKeys=" + this.f49186c + ", indices=" + this.f49187d + '}';
    }
}
