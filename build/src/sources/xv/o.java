package xv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f55250d;

    /* renamed from: e  reason: collision with root package name */
    private String f55251e;

    /* renamed from: f  reason: collision with root package name */
    private String f55252f;

    /* renamed from: g  reason: collision with root package name */
    private char f55253g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f55254h;

    /* renamed from: a  reason: collision with root package name */
    private b f55247a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f55248b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f55249c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f55255i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f55256a;

        static {
            int[] iArr = new int[b.values().length];
            f55256a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f55256a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f55256a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f55256a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f55256a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f55256a[b.TITLE.ordinal()] = 6;
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
        int m10 = zv.d.m(charSequence, i10, charSequence.length());
        int a10 = zv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f55252f = charSequence2;
        int m11 = zv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f55255i = true;
            this.f55248b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f55247a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f55255i) {
            return;
        }
        String e10 = zv.a.e(this.f55252f);
        StringBuilder sb2 = this.f55254h;
        if (sb2 != null) {
            str = zv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f55249c.add(new aw.o(this.f55251e, e10, str));
        this.f55250d = null;
        this.f55255i = false;
        this.f55251e = null;
        this.f55252f = null;
        this.f55254h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = zv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f55250d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f55250d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f55250d.length() > 999) {
            return -1;
        } else {
            String b10 = zv.a.b(this.f55250d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f55251e = b10;
            this.f55247a = b.DESTINATION;
            return zv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = zv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f55247a = b.LABEL;
            this.f55250d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f55250d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = zv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f55247a = b.START_DEFINITION;
            return m10;
        }
        this.f55253g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f55253g = ')';
            }
        } else {
            this.f55253g = charAt;
        }
        if (this.f55253g != 0) {
            this.f55247a = b.TITLE;
            this.f55254h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f55254h.append('\n');
            }
            return i11;
        }
        b();
        this.f55247a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = zv.c.e(charSequence, i10, this.f55253g);
        if (e10 == -1) {
            return -1;
        }
        this.f55254h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f55254h.append('\n');
            return e10;
        }
        int m10 = zv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f55255i = true;
        b();
        this.f55248b.setLength(0);
        this.f55247a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f55249c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f55248b;
    }

    public void f(CharSequence charSequence) {
        if (this.f55248b.length() != 0) {
            this.f55248b.append('\n');
        }
        this.f55248b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f55256a[this.f55247a.ordinal()]) {
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
                this.f55247a = b.PARAGRAPH;
                return;
            }
        }
    }
}
