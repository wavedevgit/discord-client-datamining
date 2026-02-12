package du;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class g0 {

    /* renamed from: a  reason: collision with root package name */
    private final b f22033a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final char f22034a;

        /* renamed from: b  reason: collision with root package name */
        private final b f22035b;

        /* renamed from: c  reason: collision with root package name */
        private final b f22036c;

        /* renamed from: d  reason: collision with root package name */
        private final b f22037d;

        /* renamed from: e  reason: collision with root package name */
        private final List f22038e;

        /* JADX INFO: Access modifiers changed from: private */
        public b j(net.time4j.tz.k kVar) {
            ArrayList arrayList = new ArrayList();
            List list = this.f22038e;
            if (list != null) {
                arrayList.addAll(list);
            }
            arrayList.add(kVar);
            return new b(this.f22034a, this.f22035b, this.f22036c, this.f22037d, arrayList);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b k(b bVar) {
            return new b(this.f22034a, bVar, this.f22036c, this.f22037d, this.f22038e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b l(b bVar) {
            return new b(this.f22034a, this.f22035b, bVar, this.f22037d, this.f22038e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b m(b bVar) {
            return new b(this.f22034a, this.f22035b, this.f22036c, bVar, this.f22038e);
        }

        private b(char c10) {
            this(c10, null, null, null, null);
        }

        private b(char c10, b bVar, b bVar2, b bVar3, List list) {
            this.f22034a = c10;
            this.f22035b = bVar;
            this.f22036c = bVar2;
            this.f22037d = bVar3;
            this.f22038e = list;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g0(b bVar) {
        this.f22033a = bVar;
    }

    private void a(b bVar, StringBuilder sb2, List list) {
        if (bVar == null) {
            return;
        }
        a(bVar.f22035b, sb2, list);
        if (bVar.f22038e != null) {
            list.add(sb2.toString() + bVar.f22034a);
        }
        b bVar2 = bVar.f22036c;
        sb2.append(bVar.f22034a);
        a(bVar2, sb2, list);
        sb2.deleteCharAt(sb2.length() - 1);
        a(bVar.f22037d, sb2, list);
    }

    private static b b(b bVar, String str, int i10) {
        if (bVar == null) {
            return null;
        }
        char charAt = str.charAt(i10);
        if (charAt < bVar.f22034a) {
            return b(bVar.f22035b, str, i10);
        }
        if (charAt > bVar.f22034a) {
            return b(bVar.f22037d, str, i10);
        }
        if (i10 < str.length() - 1) {
            return b(bVar.f22036c, str, i10 + 1);
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
        if (charAt < bVar.f22034a) {
            return bVar.k(e(bVar.f22035b, str, kVar, i10));
        }
        if (charAt > bVar.f22034a) {
            return bVar.m(e(bVar.f22037d, str, kVar, i10));
        }
        return i10 < str.length() + (-1) ? bVar.l(e(bVar.f22036c, str, kVar, i10 + 1)) : bVar.j(kVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c(String str) {
        if (str.isEmpty()) {
            return Collections.EMPTY_LIST;
        }
        b b10 = b(this.f22033a, str, 0);
        if (b10 == null) {
            return Collections.EMPTY_LIST;
        }
        return Collections.unmodifiableList(b10.f22038e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String f(CharSequence charSequence, int i10) {
        b bVar = this.f22033a;
        int length = charSequence.length();
        int i11 = i10;
        int i12 = i11;
        while (bVar != null && i11 < length) {
            char charAt = charSequence.charAt(i11);
            if (charAt < bVar.f22034a) {
                bVar = bVar.f22035b;
            } else if (charAt > bVar.f22034a) {
                bVar = bVar.f22037d;
            } else {
                i11++;
                if (bVar.f22038e != null) {
                    i12 = i11;
                }
                bVar = bVar.f22036c;
            }
        }
        if (i10 >= i12) {
            return "";
        }
        return charSequence.subSequence(i10, i12).toString();
    }

    public String toString() {
        ArrayList<String> arrayList = new ArrayList();
        a(this.f22033a, new StringBuilder(), arrayList);
        StringBuilder sb2 = new StringBuilder();
        sb2.append("count=");
        sb2.append(arrayList.size());
        sb2.append(",labels={");
        for (String str : arrayList) {
            sb2.append(str);
            sb2.append("=>");
            sb2.append(c(str));
            sb2.append(',');
        }
        sb2.deleteCharAt(sb2.length() - 1).append('}');
        return sb2.toString();
    }
}
