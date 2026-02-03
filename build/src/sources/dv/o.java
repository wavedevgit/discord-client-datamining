package dv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f21169d;

    /* renamed from: e  reason: collision with root package name */
    private String f21170e;

    /* renamed from: f  reason: collision with root package name */
    private String f21171f;

    /* renamed from: g  reason: collision with root package name */
    private char f21172g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f21173h;

    /* renamed from: a  reason: collision with root package name */
    private b f21166a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f21167b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f21168c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f21174i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f21175a;

        static {
            int[] iArr = new int[b.values().length];
            f21175a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f21175a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f21175a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f21175a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f21175a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f21175a[b.TITLE.ordinal()] = 6;
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
        int m10 = fv.d.m(charSequence, i10, charSequence.length());
        int a10 = fv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f21171f = charSequence2;
        int m11 = fv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f21174i = true;
            this.f21167b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f21166a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f21174i) {
            return;
        }
        String e10 = fv.a.e(this.f21171f);
        StringBuilder sb2 = this.f21173h;
        if (sb2 != null) {
            str = fv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f21168c.add(new gv.o(this.f21170e, e10, str));
        this.f21169d = null;
        this.f21174i = false;
        this.f21170e = null;
        this.f21171f = null;
        this.f21173h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = fv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f21169d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f21169d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f21169d.length() > 999) {
            return -1;
        } else {
            String b10 = fv.a.b(this.f21169d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f21170e = b10;
            this.f21166a = b.DESTINATION;
            return fv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = fv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f21166a = b.LABEL;
            this.f21169d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f21169d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = fv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f21166a = b.START_DEFINITION;
            return m10;
        }
        this.f21172g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f21172g = ')';
            }
        } else {
            this.f21172g = charAt;
        }
        if (this.f21172g != 0) {
            this.f21166a = b.TITLE;
            this.f21173h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f21173h.append('\n');
            }
            return i11;
        }
        b();
        this.f21166a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = fv.c.e(charSequence, i10, this.f21172g);
        if (e10 == -1) {
            return -1;
        }
        this.f21173h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f21173h.append('\n');
            return e10;
        }
        int m10 = fv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f21174i = true;
        b();
        this.f21167b.setLength(0);
        this.f21166a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f21168c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f21167b;
    }

    public void f(CharSequence charSequence) {
        if (this.f21167b.length() != 0) {
            this.f21167b.append('\n');
        }
        this.f21167b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f21175a[this.f21166a.ordinal()]) {
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
                this.f21166a = b.PARAGRAPH;
                return;
            }
        }
    }
}
