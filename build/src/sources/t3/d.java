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
    public static final b f49199e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f49200a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f49201b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f49202c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f49203d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0632a f49204h = new C0632a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49205a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49206b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f49207c;

        /* renamed from: d  reason: collision with root package name */
        public final int f49208d;

        /* renamed from: e  reason: collision with root package name */
        public final String f49209e;

        /* renamed from: f  reason: collision with root package name */
        public final int f49210f;

        /* renamed from: g  reason: collision with root package name */
        public final int f49211g;

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
            this.f49205a = name;
            this.f49206b = type;
            this.f49207c = z10;
            this.f49208d = i10;
            this.f49209e = str;
            this.f49210f = i11;
            this.f49211g = a(type);
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
            if (!(obj instanceof a) || this.f49208d != ((a) obj).f49208d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f49205a, aVar.f49205a) || this.f49207c != aVar.f49207c) {
                return false;
            }
            if (this.f49210f == 1 && aVar.f49210f == 2 && (str3 = this.f49209e) != null && !f49204h.b(str3, aVar.f49209e)) {
                return false;
            }
            if (this.f49210f == 2 && aVar.f49210f == 1 && (str2 = aVar.f49209e) != null && !f49204h.b(str2, this.f49209e)) {
                return false;
            }
            int i10 = this.f49210f;
            if ((i10 == 0 || i10 != aVar.f49210f || ((str = this.f49209e) == null ? aVar.f49209e == null : f49204h.b(str, aVar.f49209e))) && this.f49211g == aVar.f49211g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f49205a.hashCode() * 31) + this.f49211g) * 31;
            if (this.f49207c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f49208d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f49205a);
            sb2.append("', type='");
            sb2.append(this.f49206b);
            sb2.append("', affinity='");
            sb2.append(this.f49211g);
            sb2.append("', notNull=");
            sb2.append(this.f49207c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f49208d);
            sb2.append(", defaultValue='");
            String str = this.f49209e;
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
        public final String f49212a;

        /* renamed from: b  reason: collision with root package name */
        public final String f49213b;

        /* renamed from: c  reason: collision with root package name */
        public final String f49214c;

        /* renamed from: d  reason: collision with root package name */
        public final List f49215d;

        /* renamed from: e  reason: collision with root package name */
        public final List f49216e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f49212a = referenceTable;
            this.f49213b = onDelete;
            this.f49214c = onUpdate;
            this.f49215d = columnNames;
            this.f49216e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f49212a, cVar.f49212a) || !Intrinsics.areEqual(this.f49213b, cVar.f49213b) || !Intrinsics.areEqual(this.f49214c, cVar.f49214c) || !Intrinsics.areEqual(this.f49215d, cVar.f49215d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f49216e, cVar.f49216e);
        }

        public int hashCode() {
            return (((((((this.f49212a.hashCode() * 31) + this.f49213b.hashCode()) * 31) + this.f49214c.hashCode()) * 31) + this.f49215d.hashCode()) * 31) + this.f49216e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f49212a + "', onDelete='" + this.f49213b + " +', onUpdate='" + this.f49214c + "', columnNames=" + this.f49215d + ", referenceColumnNames=" + this.f49216e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0633d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f49217d;

        /* renamed from: e  reason: collision with root package name */
        private final int f49218e;

        /* renamed from: i  reason: collision with root package name */
        private final String f49219i;

        /* renamed from: o  reason: collision with root package name */
        private final String f49220o;

        public C0633d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f49217d = i10;
            this.f49218e = i11;
            this.f49219i = from;
            this.f49220o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0633d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f49217d - other.f49217d;
            if (i10 == 0) {
                return this.f49218e - other.f49218e;
            }
            return i10;
        }

        public final String d() {
            return this.f49219i;
        }

        public final int e() {
            return this.f49217d;
        }

        public final String f() {
            return this.f49220o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f49221e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f49222a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f49223b;

        /* renamed from: c  reason: collision with root package name */
        public final List f49224c;

        /* renamed from: d  reason: collision with root package name */
        public List f49225d;

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
            this.f49222a = name;
            this.f49223b = z10;
            this.f49224c = columns;
            this.f49225d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f49225d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f49223b != eVar.f49223b || !Intrinsics.areEqual(this.f49224c, eVar.f49224c) || !Intrinsics.areEqual(this.f49225d, eVar.f49225d)) {
                return false;
            }
            if (StringsKt.P(this.f49222a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f49222a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f49222a, eVar.f49222a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f49222a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f49222a.hashCode();
            }
            return (((((hashCode * 31) + (this.f49223b ? 1 : 0)) * 31) + this.f49224c.hashCode()) * 31) + this.f49225d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f49222a + "', unique=" + this.f49223b + ", columns=" + this.f49224c + ", orders=" + this.f49225d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f49200a = name;
        this.f49201b = columns;
        this.f49202c = foreignKeys;
        this.f49203d = set;
    }

    public static final d a(g gVar, String str) {
        return f49199e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f49200a, dVar.f49200a) || !Intrinsics.areEqual(this.f49201b, dVar.f49201b) || !Intrinsics.areEqual(this.f49202c, dVar.f49202c)) {
            return false;
        }
        Set set2 = this.f49203d;
        if (set2 == null || (set = dVar.f49203d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f49200a.hashCode() * 31) + this.f49201b.hashCode()) * 31) + this.f49202c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f49200a + "', columns=" + this.f49201b + ", foreignKeys=" + this.f49202c + ", indices=" + this.f49203d + '}';
    }
}
