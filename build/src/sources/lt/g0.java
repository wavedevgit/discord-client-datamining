package lt;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f37610a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final char f37611a;

        /* renamed from: b  reason: collision with root package name */
        private final b f37612b;

        /* renamed from: c  reason: collision with root package name */
        private final b f37613c;

        /* renamed from: d  reason: collision with root package name */
        private final b f37614d;

        /* renamed from: e  reason: collision with root package name */
        private final List f37615e;

        /* JADX INFO: Access modifiers changed from: private */
        public b j(net.time4j.tz.k kVar) {
            ArrayList arrayList = new ArrayList();
            List list = this.f37615e;
            if (list != null) {
                arrayList.addAll(list);
            }
            arrayList.add(kVar);
            return new b(this.f37611a, this.f37612b, this.f37613c, this.f37614d, arrayList);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b k(b bVar) {
            return new b(this.f37611a, bVar, this.f37613c, this.f37614d, this.f37615e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b l(b bVar) {
            return new b(this.f37611a, this.f37612b, bVar, this.f37614d, this.f37615e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b m(b bVar) {
            return new b(this.f37611a, this.f37612b, this.f37613c, bVar, this.f37615e);
        }

        private b(char c10) {
            this(c10, null, null, null, null);
        }

        private b(char c10, b bVar, b bVar2, b bVar3, List list) {
            this.f37611a = c10;
            this.f37612b = bVar;
            this.f37613c = bVar2;
            this.f37614d = bVar3;
            this.f37615e = list;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g0(b bVar) {
        this.f37610a = bVar;
    }

    private void a(b bVar, StringBuilder sb2, List list) {
        if (bVar == null) {
            return;
        }
        a(bVar.f37612b, sb2, list);
        if (bVar.f37615e != null) {
            list.add(sb2.toString() + bVar.f37611a);
        }
        b bVar2 = bVar.f37613c;
        sb2.append(bVar.f37611a);
        a(bVar2, sb2, list);
        sb2.deleteCharAt(sb2.length() - 1);
        a(bVar.f37614d, sb2, list);
    }

    private static b c(b bVar, String str, int i10) {
        if (bVar == null) {
            return null;
        }
        char charAt = str.charAt(i10);
        if (charAt < bVar.f37611a) {
            return c(bVar.f37612b, str, i10);
        }
        if (charAt > bVar.f37611a) {
            return c(bVar.f37614d, str, i10);
        }
        if (i10 < str.length() - 1) {
            return c(bVar.f37613c, str, i10 + 1);
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
        if (charAt < bVar.f37611a) {
            return bVar.k(e(bVar.f37612b, str, kVar, i10));
        }
        if (charAt > bVar.f37611a) {
            return bVar.m(e(bVar.f37614d, str, kVar, i10));
        }
        return i10 < str.length() + (-1) ? bVar.l(e(bVar.f37613c, str, kVar, i10 + 1)) : bVar.j(kVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b(String str) {
        if (str.isEmpty()) {
            return Collections.EMPTY_LIST;
        }
        b c10 = c(this.f37610a, str, 0);
        if (c10 == null) {
            return Collections.EMPTY_LIST;
        }
        return Collections.unmodifiableList(c10.f37615e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String f(CharSequence charSequence, int i10) {
        b bVar = this.f37610a;
        int length = charSequence.length();
        int i11 = i10;
        int i12 = i11;
        while (bVar != null && i11 < length) {
            char charAt = charSequence.charAt(i11);
            if (charAt < bVar.f37611a) {
                bVar = bVar.f37612b;
            } else if (charAt > bVar.f37611a) {
                bVar = bVar.f37614d;
            } else {
                i11++;
                if (bVar.f37615e != null) {
                    i12 = i11;
                }
                bVar = bVar.f37613c;
            }
        }
        if (i10 >= i12) {
            return "";
        }
        return charSequence.subSequence(i10, i12).toString();
    }

    public String toString() {
        ArrayList<String> arrayList = new ArrayList();
        a(this.f37610a, new StringBuilder(), arrayList);
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
