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
    public static final b f50308e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    public final String f50309a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f50310b;

    /* renamed from: c  reason: collision with root package name */
    public final Set f50311c;

    /* renamed from: d  reason: collision with root package name */
    public final Set f50312d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: h  reason: collision with root package name */
        public static final C0660a f50313h = new C0660a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50314a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50315b;

        /* renamed from: c  reason: collision with root package name */
        public final boolean f50316c;

        /* renamed from: d  reason: collision with root package name */
        public final int f50317d;

        /* renamed from: e  reason: collision with root package name */
        public final String f50318e;

        /* renamed from: f  reason: collision with root package name */
        public final int f50319f;

        /* renamed from: g  reason: collision with root package name */
        public final int f50320g;

        /* renamed from: t3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0660a {
            public /* synthetic */ C0660a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0660a() {
            }
        }

        public a(String name, String type, boolean z10, int i10, String str, int i11) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(type, "type");
            this.f50314a = name;
            this.f50315b = type;
            this.f50316c = z10;
            this.f50317d = i10;
            this.f50318e = str;
            this.f50319f = i11;
            this.f50320g = a(type);
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
            if (!(obj instanceof a) || this.f50317d != ((a) obj).f50317d) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(this.f50314a, aVar.f50314a) || this.f50316c != aVar.f50316c) {
                return false;
            }
            if (this.f50319f == 1 && aVar.f50319f == 2 && (str3 = this.f50318e) != null && !f50313h.b(str3, aVar.f50318e)) {
                return false;
            }
            if (this.f50319f == 2 && aVar.f50319f == 1 && (str2 = aVar.f50318e) != null && !f50313h.b(str2, this.f50318e)) {
                return false;
            }
            int i10 = this.f50319f;
            if ((i10 == 0 || i10 != aVar.f50319f || ((str = this.f50318e) == null ? aVar.f50318e == null : f50313h.b(str, aVar.f50318e))) && this.f50320g == aVar.f50320g) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            int i10;
            int hashCode = ((this.f50314a.hashCode() * 31) + this.f50320g) * 31;
            if (this.f50316c) {
                i10 = 1231;
            } else {
                i10 = 1237;
            }
            return ((hashCode + i10) * 31) + this.f50317d;
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Column{name='");
            sb2.append(this.f50314a);
            sb2.append("', type='");
            sb2.append(this.f50315b);
            sb2.append("', affinity='");
            sb2.append(this.f50320g);
            sb2.append("', notNull=");
            sb2.append(this.f50316c);
            sb2.append(", primaryKeyPosition=");
            sb2.append(this.f50317d);
            sb2.append(", defaultValue='");
            String str = this.f50318e;
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
        public final String f50321a;

        /* renamed from: b  reason: collision with root package name */
        public final String f50322b;

        /* renamed from: c  reason: collision with root package name */
        public final String f50323c;

        /* renamed from: d  reason: collision with root package name */
        public final List f50324d;

        /* renamed from: e  reason: collision with root package name */
        public final List f50325e;

        public c(String referenceTable, String onDelete, String onUpdate, List columnNames, List referenceColumnNames) {
            Intrinsics.checkNotNullParameter(referenceTable, "referenceTable");
            Intrinsics.checkNotNullParameter(onDelete, "onDelete");
            Intrinsics.checkNotNullParameter(onUpdate, "onUpdate");
            Intrinsics.checkNotNullParameter(columnNames, "columnNames");
            Intrinsics.checkNotNullParameter(referenceColumnNames, "referenceColumnNames");
            this.f50321a = referenceTable;
            this.f50322b = onDelete;
            this.f50323c = onUpdate;
            this.f50324d = columnNames;
            this.f50325e = referenceColumnNames;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (!Intrinsics.areEqual(this.f50321a, cVar.f50321a) || !Intrinsics.areEqual(this.f50322b, cVar.f50322b) || !Intrinsics.areEqual(this.f50323c, cVar.f50323c) || !Intrinsics.areEqual(this.f50324d, cVar.f50324d)) {
                return false;
            }
            return Intrinsics.areEqual(this.f50325e, cVar.f50325e);
        }

        public int hashCode() {
            return (((((((this.f50321a.hashCode() * 31) + this.f50322b.hashCode()) * 31) + this.f50323c.hashCode()) * 31) + this.f50324d.hashCode()) * 31) + this.f50325e.hashCode();
        }

        public String toString() {
            return "ForeignKey{referenceTable='" + this.f50321a + "', onDelete='" + this.f50322b + " +', onUpdate='" + this.f50323c + "', columnNames=" + this.f50324d + ", referenceColumnNames=" + this.f50325e + '}';
        }
    }

    /* renamed from: t3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0661d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final int f50326d;

        /* renamed from: e  reason: collision with root package name */
        private final int f50327e;

        /* renamed from: i  reason: collision with root package name */
        private final String f50328i;

        /* renamed from: o  reason: collision with root package name */
        private final String f50329o;

        public C0661d(int i10, int i11, String from, String to2) {
            Intrinsics.checkNotNullParameter(from, "from");
            Intrinsics.checkNotNullParameter(to2, "to");
            this.f50326d = i10;
            this.f50327e = i11;
            this.f50328i = from;
            this.f50329o = to2;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(C0661d other) {
            Intrinsics.checkNotNullParameter(other, "other");
            int i10 = this.f50326d - other.f50326d;
            if (i10 == 0) {
                return this.f50327e - other.f50327e;
            }
            return i10;
        }

        public final String d() {
            return this.f50328i;
        }

        public final int e() {
            return this.f50326d;
        }

        public final String f() {
            return this.f50329o;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e {

        /* renamed from: e  reason: collision with root package name */
        public static final a f50330e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        public final String f50331a;

        /* renamed from: b  reason: collision with root package name */
        public final boolean f50332b;

        /* renamed from: c  reason: collision with root package name */
        public final List f50333c;

        /* renamed from: d  reason: collision with root package name */
        public List f50334d;

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
            this.f50331a = name;
            this.f50332b = z10;
            this.f50333c = columns;
            this.f50334d = orders;
            List list = orders;
            if (list.isEmpty()) {
                int size = columns.size();
                list = new ArrayList(size);
                for (int i10 = 0; i10 < size; i10++) {
                    list.add(l.ASC.name());
                }
            }
            this.f50334d = (List) list;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof e)) {
                return false;
            }
            e eVar = (e) obj;
            if (this.f50332b != eVar.f50332b || !Intrinsics.areEqual(this.f50333c, eVar.f50333c) || !Intrinsics.areEqual(this.f50334d, eVar.f50334d)) {
                return false;
            }
            if (StringsKt.P(this.f50331a, "index_", false, 2, null)) {
                return StringsKt.P(eVar.f50331a, "index_", false, 2, null);
            }
            return Intrinsics.areEqual(this.f50331a, eVar.f50331a);
        }

        public int hashCode() {
            int hashCode;
            if (StringsKt.P(this.f50331a, "index_", false, 2, null)) {
                hashCode = -1184239155;
            } else {
                hashCode = this.f50331a.hashCode();
            }
            return (((((hashCode * 31) + (this.f50332b ? 1 : 0)) * 31) + this.f50333c.hashCode()) * 31) + this.f50334d.hashCode();
        }

        public String toString() {
            return "Index{name='" + this.f50331a + "', unique=" + this.f50332b + ", columns=" + this.f50333c + ", orders=" + this.f50334d + "'}";
        }
    }

    public d(String name, Map columns, Set foreignKeys, Set set) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(columns, "columns");
        Intrinsics.checkNotNullParameter(foreignKeys, "foreignKeys");
        this.f50309a = name;
        this.f50310b = columns;
        this.f50311c = foreignKeys;
        this.f50312d = set;
    }

    public static final d a(g gVar, String str) {
        return f50308e.a(gVar, str);
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
        if (!Intrinsics.areEqual(this.f50309a, dVar.f50309a) || !Intrinsics.areEqual(this.f50310b, dVar.f50310b) || !Intrinsics.areEqual(this.f50311c, dVar.f50311c)) {
            return false;
        }
        Set set2 = this.f50312d;
        if (set2 == null || (set = dVar.f50312d) == null) {
            return true;
        }
        return Intrinsics.areEqual(set2, set);
    }

    public int hashCode() {
        return (((this.f50309a.hashCode() * 31) + this.f50310b.hashCode()) * 31) + this.f50311c.hashCode();
    }

    public String toString() {
        return "TableInfo{name='" + this.f50309a + "', columns=" + this.f50310b + ", foreignKeys=" + this.f50311c + ", indices=" + this.f50312d + '}';
    }
}
