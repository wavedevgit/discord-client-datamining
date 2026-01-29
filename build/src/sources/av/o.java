package av;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f7039d;

    /* renamed from: e  reason: collision with root package name */
    private String f7040e;

    /* renamed from: f  reason: collision with root package name */
    private String f7041f;

    /* renamed from: g  reason: collision with root package name */
    private char f7042g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f7043h;

    /* renamed from: a  reason: collision with root package name */
    private b f7036a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f7037b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f7038c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f7044i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f7045a;

        static {
            int[] iArr = new int[b.values().length];
            f7045a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f7045a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f7045a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f7045a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f7045a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f7045a[b.TITLE.ordinal()] = 6;
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
        int m10 = cv.d.m(charSequence, i10, charSequence.length());
        int a10 = cv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f7041f = charSequence2;
        int m11 = cv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f7044i = true;
            this.f7037b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f7036a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f7044i) {
            return;
        }
        String e10 = cv.a.e(this.f7041f);
        StringBuilder sb2 = this.f7043h;
        if (sb2 != null) {
            str = cv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f7038c.add(new dv.o(this.f7040e, e10, str));
        this.f7039d = null;
        this.f7044i = false;
        this.f7040e = null;
        this.f7041f = null;
        this.f7043h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = cv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f7039d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f7039d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f7039d.length() > 999) {
            return -1;
        } else {
            String b10 = cv.a.b(this.f7039d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f7040e = b10;
            this.f7036a = b.DESTINATION;
            return cv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = cv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f7036a = b.LABEL;
            this.f7039d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f7039d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = cv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f7036a = b.START_DEFINITION;
            return m10;
        }
        this.f7042g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f7042g = ')';
            }
        } else {
            this.f7042g = charAt;
        }
        if (this.f7042g != 0) {
            this.f7036a = b.TITLE;
            this.f7043h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f7043h.append('\n');
            }
            return i11;
        }
        b();
        this.f7036a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = cv.c.e(charSequence, i10, this.f7042g);
        if (e10 == -1) {
            return -1;
        }
        this.f7043h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f7043h.append('\n');
            return e10;
        }
        int m10 = cv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f7044i = true;
        b();
        this.f7037b.setLength(0);
        this.f7036a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f7038c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f7037b;
    }

    public void f(CharSequence charSequence) {
        if (this.f7037b.length() != 0) {
            this.f7037b.append('\n');
        }
        this.f7037b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f7045a[this.f7036a.ordinal()]) {
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
                this.f7036a = b.PARAGRAPH;
                return;
            }
        }
    }
}
