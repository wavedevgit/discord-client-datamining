package ut;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f51930a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final char f51931a;

        /* renamed from: b  reason: collision with root package name */
        private final b f51932b;

        /* renamed from: c  reason: collision with root package name */
        private final b f51933c;

        /* renamed from: d  reason: collision with root package name */
        private final b f51934d;

        /* renamed from: e  reason: collision with root package name */
        private final List f51935e;

        /* JADX INFO: Access modifiers changed from: private */
        public b j(net.time4j.tz.k kVar) {
            ArrayList arrayList = new ArrayList();
            List list = this.f51935e;
            if (list != null) {
                arrayList.addAll(list);
            }
            arrayList.add(kVar);
            return new b(this.f51931a, this.f51932b, this.f51933c, this.f51934d, arrayList);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b k(b bVar) {
            return new b(this.f51931a, bVar, this.f51933c, this.f51934d, this.f51935e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b l(b bVar) {
            return new b(this.f51931a, this.f51932b, bVar, this.f51934d, this.f51935e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b m(b bVar) {
            return new b(this.f51931a, this.f51932b, this.f51933c, bVar, this.f51935e);
        }

        private b(char c10) {
            this(c10, null, null, null, null);
        }

        private b(char c10, b bVar, b bVar2, b bVar3, List list) {
            this.f51931a = c10;
            this.f51932b = bVar;
            this.f51933c = bVar2;
            this.f51934d = bVar3;
            this.f51935e = list;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g0(b bVar) {
        this.f51930a = bVar;
    }

    private void a(b bVar, StringBuilder sb2, List list) {
        if (bVar == null) {
            return;
        }
        a(bVar.f51932b, sb2, list);
        if (bVar.f51935e != null) {
            list.add(sb2.toString() + bVar.f51931a);
        }
        b bVar2 = bVar.f51933c;
        sb2.append(bVar.f51931a);
        a(bVar2, sb2, list);
        sb2.deleteCharAt(sb2.length() - 1);
        a(bVar.f51934d, sb2, list);
    }

    private static b c(b bVar, String str, int i10) {
        if (bVar == null) {
            return null;
        }
        char charAt = str.charAt(i10);
        if (charAt < bVar.f51931a) {
            return c(bVar.f51932b, str, i10);
        }
        if (charAt > bVar.f51931a) {
            return c(bVar.f51934d, str, i10);
        }
        if (i10 < str.length() - 1) {
            return c(bVar.f51933c, str, i10 + 1);
        }
        return bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b d(b bVar, String str, net.time4j.tz.k kVar) {
        if (!str.isEmpty()) {
            if (kVar != null) {
                return e(bVar, str, kVar, 0);
            }
            throw new NullPointerException("Missing timezone id.");
        }
        throw new IllegalArgumentException("Empty key cannot be inserted.");
    }

    private static b e(b bVar, String str, net.time4j.tz.k kVar, int i10) {
        char charAt = str.charAt(i10);
        if (bVar == null) {
            bVar = new b(charAt);
        }
        if (charAt < bVar.f51931a) {
            return bVar.k(e(bVar.f51932b, str, kVar, i10));
        }
        if (charAt > bVar.f51931a) {
            return bVar.m(e(bVar.f51934d, str, kVar, i10));
        }
        return i10 < str.length() + (-1) ? bVar.l(e(bVar.f51933c, str, kVar, i10 + 1)) : bVar.j(kVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b(String str) {
        if (str.isEmpty()) {
            return Collections.EMPTY_LIST;
        }
        b c10 = c(this.f51930a, str, 0);
        if (c10 == null) {
            return Collections.EMPTY_LIST;
        }
        return Collections.unmodifiableList(c10.f51935e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String f(CharSequence charSequence, int i10) {
        b bVar = this.f51930a;
        int length = charSequence.length();
        int i11 = i10;
        int i12 = i11;
        while (bVar != null && i11 < length) {
            char charAt = charSequence.charAt(i11);
            if (charAt < bVar.f51931a) {
                bVar = bVar.f51932b;
            } else if (charAt > bVar.f51931a) {
                bVar = bVar.f51934d;
            } else {
                i11++;
                if (bVar.f51935e != null) {
                    i12 = i11;
                }
                bVar = bVar.f51933c;
            }
        }
        if (i10 >= i12) {
            return "";
        }
        return charSequence.subSequence(i10, i12).toString();
    }

    public String toString() {
        ArrayList<String> arrayList = new ArrayList();
        a(this.f51930a, new StringBuilder(), arrayList);
        StringBuilder sb2 = new StringBuilder();
        sb2.append("count=");
        sb2.append(arrayList.size());
        sb2.append(",labels={");
        for (String str : arrayList) {
            sb2.append(str);
            sb2.append("=>");
            sb2.append(b(str));
            sb2.append(',');
        }
        sb2.deleteCharAt(sb2.length() - 1).append('}');
        return sb2.toString();
    }
}
