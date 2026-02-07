package okhttp3;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlin.text.StringsKt;
import qr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Headers implements Iterable, KMappedMarker {

    /* renamed from: e  reason: collision with root package name */
    public static final b f42896e = new b(null);

    /* renamed from: d  reason: collision with root package name */
    private final String[] f42897d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f42898a = new ArrayList(20);

        public final a a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            b bVar = Headers.f42896e;
            bVar.e(name);
            bVar.f(value, name);
            d(name, value);
            return this;
        }

        public final a b(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                d(headers.e(i10), headers.j(i10));
            }
            return this;
        }

        public final a c(String line) {
            Intrinsics.checkNotNullParameter(line, "line");
            int h02 = StringsKt.h0(line, ':', 1, false, 4, null);
            if (h02 != -1) {
                String substring = line.substring(0, h02);
                Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
                String substring2 = line.substring(h02 + 1);
                Intrinsics.checkNotNullExpressionValue(substring2, "this as java.lang.String).substring(startIndex)");
                d(substring, substring2);
                return this;
            } else if (line.charAt(0) == ':') {
                String substring3 = line.substring(1);
                Intrinsics.checkNotNullExpressionValue(substring3, "this as java.lang.String).substring(startIndex)");
                d("", substring3);
                return this;
            } else {
                d("", line);
                return this;
            }
        }

        public final a d(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f42898a.add(name);
            this.f42898a.add(StringsKt.k1(value).toString());
            return this;
        }

        public final a e(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            Headers.f42896e.e(name);
            d(name, value);
            return this;
        }

        public final Headers f() {
            return new Headers((String[]) this.f42898a.toArray(new String[0]), null);
        }

        public final String g(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            int size = this.f42898a.size() - 2;
            int c10 = yr.c.c(size, 0, -2);
            if (c10 <= size) {
                while (!StringsKt.A(name, (String) this.f42898a.get(size), true)) {
                    if (size != c10) {
                        size -= 2;
                    } else {
                        return null;
                    }
                }
                return (String) this.f42898a.get(size + 1);
            }
            return null;
        }

        public final List h() {
            return this.f42898a;
        }

        public final a i(String name) {
            Intrinsics.checkNotNullParameter(name, "name");
            int i10 = 0;
            while (i10 < this.f42898a.size()) {
                if (StringsKt.A(name, (String) this.f42898a.get(i10), true)) {
                    this.f42898a.remove(i10);
                    this.f42898a.remove(i10);
                    i10 -= 2;
                }
                i10 += 2;
            }
            return this;
        }

        public final a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            b bVar = Headers.f42896e;
            bVar.e(name);
            bVar.f(value, name);
            i(name);
            d(name, value);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void e(String str) {
            if (str.length() > 0) {
                int length = str.length();
                for (int i10 = 0; i10 < length; i10++) {
                    char charAt = str.charAt(i10);
                    if ('!' > charAt || charAt >= 127) {
                        throw new IllegalArgumentException(cu.e.t("Unexpected char %#04x at %d in header name: %s", Integer.valueOf(charAt), Integer.valueOf(i10), str).toString());
                    }
                }
                return;
            }
            throw new IllegalArgumentException("name is empty");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void f(String str, String str2) {
            String str3;
            int length = str.length();
            for (int i10 = 0; i10 < length; i10++) {
                char charAt = str.charAt(i10);
                if (charAt != '\t' && (' ' > charAt || charAt >= 127)) {
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append(cu.e.t("Unexpected char %#04x at %d in %s value", Integer.valueOf(charAt), Integer.valueOf(i10), str2));
                    if (cu.e.H(str2)) {
                        str3 = "";
                    } else {
                        str3 = ": " + str;
                    }
                    sb2.append(str3);
                    throw new IllegalArgumentException(sb2.toString().toString());
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String g(String[] strArr, String str) {
            int length = strArr.length - 2;
            int c10 = yr.c.c(length, 0, -2);
            if (c10 <= length) {
                while (!StringsKt.A(str, strArr[length], true)) {
                    if (length != c10) {
                        length -= 2;
                    } else {
                        return null;
                    }
                }
                return strArr[length + 1];
            }
            return null;
        }

        public final Headers a(Map headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            return h(headers);
        }

        public final Headers h(Map map) {
            Intrinsics.checkNotNullParameter(map, "<this>");
            String[] strArr = new String[map.size() * 2];
            int i10 = 0;
            for (Map.Entry entry : map.entrySet()) {
                String obj = StringsKt.k1((String) entry.getKey()).toString();
                String obj2 = StringsKt.k1((String) entry.getValue()).toString();
                e(obj);
                f(obj2, obj);
                strArr[i10] = obj;
                strArr[i10 + 1] = obj2;
                i10 += 2;
            }
            return new Headers(strArr, null);
        }

        public final Headers i(String... namesAndValues) {
            Intrinsics.checkNotNullParameter(namesAndValues, "namesAndValues");
            if (namesAndValues.length % 2 == 0) {
                String[] strArr = (String[]) namesAndValues.clone();
                int length = strArr.length;
                int i10 = 0;
                for (int i11 = 0; i11 < length; i11++) {
                    String str = strArr[i11];
                    if (str != null) {
                        strArr[i11] = StringsKt.k1(str).toString();
                    } else {
                        throw new IllegalArgumentException("Headers cannot be null");
                    }
                }
                int c10 = yr.c.c(0, strArr.length - 1, 2);
                if (c10 >= 0) {
                    while (true) {
                        String str2 = strArr[i10];
                        String str3 = strArr[i10 + 1];
                        e(str2);
                        f(str3, str2);
                        if (i10 == c10) {
                            break;
                        }
                        i10 += 2;
                    }
                }
                return new Headers(strArr, null);
            }
            throw new IllegalArgumentException("Expected alternating header names and values");
        }

        private b() {
        }
    }

    public /* synthetic */ Headers(String[] strArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(strArr);
    }

    public static final Headers h(String... strArr) {
        return f42896e.i(strArr);
    }

    public final int b() {
        return size();
    }

    public final String c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return f42896e.g(this.f42897d, name);
    }

    public final Date d(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = c(name);
        if (c10 != null) {
            return hu.c.a(c10);
        }
        return null;
    }

    public final String e(int i10) {
        return this.f42897d[i10 * 2];
    }

    public boolean equals(Object obj) {
        if ((obj instanceof Headers) && Arrays.equals(this.f42897d, ((Headers) obj).f42897d)) {
            return true;
        }
        return false;
    }

    public final Set f() {
        TreeSet treeSet = new TreeSet(StringsKt.C(StringCompanionObject.INSTANCE));
        int size = size();
        for (int i10 = 0; i10 < size; i10++) {
            treeSet.add(e(i10));
        }
        Set unmodifiableSet = Collections.unmodifiableSet(treeSet);
        Intrinsics.checkNotNullExpressionValue(unmodifiableSet, "unmodifiableSet(result)");
        return unmodifiableSet;
    }

    public final a g() {
        a aVar = new a();
        CollectionsKt.D(aVar.h(), this.f42897d);
        return aVar;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f42897d);
    }

    public final Map i() {
        TreeMap treeMap = new TreeMap(StringsKt.C(StringCompanionObject.INSTANCE));
        int size = size();
        for (int i10 = 0; i10 < size; i10++) {
            String e10 = e(i10);
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = e10.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
            List list = (List) treeMap.get(lowerCase);
            if (list == null) {
                list = new ArrayList(2);
                treeMap.put(lowerCase, list);
            }
            list.add(j(i10));
        }
        return treeMap;
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        int size = size();
        Pair[] pairArr = new Pair[size];
        for (int i10 = 0; i10 < size; i10++) {
            pairArr[i10] = v.a(e(i10), j(i10));
        }
        return ArrayIteratorKt.iterator(pairArr);
    }

    public final String j(int i10) {
        return this.f42897d[(i10 * 2) + 1];
    }

    public final List l(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        int size = size();
        ArrayList arrayList = null;
        for (int i10 = 0; i10 < size; i10++) {
            if (StringsKt.A(name, e(i10), true)) {
                if (arrayList == null) {
                    arrayList = new ArrayList(2);
                }
                arrayList.add(j(i10));
            }
        }
        if (arrayList != null) {
            List unmodifiableList = Collections.unmodifiableList(arrayList);
            Intrinsics.checkNotNullExpressionValue(unmodifiableList, "{\n      Collections.unmodifiableList(result)\n    }");
            return unmodifiableList;
        }
        return CollectionsKt.l();
    }

    public final int size() {
        return this.f42897d.length / 2;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        int size = size();
        for (int i10 = 0; i10 < size; i10++) {
            String e10 = e(i10);
            String j10 = j(i10);
            sb2.append(e10);
            sb2.append(": ");
            if (cu.e.H(e10)) {
                j10 = "██";
            }
            sb2.append(j10);
            sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
        return sb3;
    }

    private Headers(String[] strArr) {
        this.f42897d = strArr;
    }
}
