package nv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f41252d;

    /* renamed from: e  reason: collision with root package name */
    private String f41253e;

    /* renamed from: f  reason: collision with root package name */
    private String f41254f;

    /* renamed from: g  reason: collision with root package name */
    private char f41255g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f41256h;

    /* renamed from: a  reason: collision with root package name */
    private b f41249a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f41250b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f41251c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f41257i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f41258a;

        static {
            int[] iArr = new int[b.values().length];
            f41258a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f41258a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f41258a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f41258a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f41258a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f41258a[b.TITLE.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum b {
        START_DEFINITION,
        LABEL,
        DESTINATION,
        START_TITLE,
        TITLE,
        PARAGRAPH
    }

    private int a(CharSequence charSequence, int i10) {
        String charSequence2;
        int m10 = pv.d.m(charSequence, i10, charSequence.length());
        int a10 = pv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f41254f = charSequence2;
        int m11 = pv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f41257i = true;
            this.f41250b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f41249a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f41257i) {
            return;
        }
        String e10 = pv.a.e(this.f41254f);
        StringBuilder sb2 = this.f41256h;
        if (sb2 != null) {
            str = pv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f41251c.add(new qv.o(this.f41253e, e10, str));
        this.f41252d = null;
        this.f41257i = false;
        this.f41253e = null;
        this.f41254f = null;
        this.f41256h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = pv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f41252d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f41252d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f41252d.length() > 999) {
            return -1;
        } else {
            String b10 = pv.a.b(this.f41252d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f41253e = b10;
            this.f41249a = b.DESTINATION;
            return pv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = pv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f41249a = b.LABEL;
            this.f41252d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f41252d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = pv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f41249a = b.START_DEFINITION;
            return m10;
        }
        this.f41255g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f41255g = ')';
            }
        } else {
            this.f41255g = charAt;
        }
        if (this.f41255g != 0) {
            this.f41249a = b.TITLE;
            this.f41256h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f41256h.append('\n');
            }
            return i11;
        }
        b();
        this.f41249a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = pv.c.e(charSequence, i10, this.f41255g);
        if (e10 == -1) {
            return -1;
        }
        this.f41256h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f41256h.append('\n');
            return e10;
        }
        int m10 = pv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f41257i = true;
        b();
        this.f41250b.setLength(0);
        this.f41249a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f41251c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f41250b;
    }

    public void f(CharSequence charSequence) {
        if (this.f41250b.length() != 0) {
            this.f41250b.append('\n');
        }
        this.f41250b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f41258a[this.f41249a.ordinal()]) {
                case 1:
                    return;
                case 2:
                    i10 = g(charSequence, i10);
                    break;
                case 3:
                    i10 = e(charSequence, i10);
                    break;
                case 4:
                    i10 = a(charSequence, i10);
                    break;
                case 5:
                    i10 = h(charSequence, i10);
                    break;
                case 6:
                    i10 = i(charSequence, i10);
                    break;
            }
            if (i10 == -1) {
                this.f41249a = b.PARAGRAPH;
                return;
            }
        }
    }
}
