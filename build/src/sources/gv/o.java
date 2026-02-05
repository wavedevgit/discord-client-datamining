package gv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f25493d;

    /* renamed from: e  reason: collision with root package name */
    private String f25494e;

    /* renamed from: f  reason: collision with root package name */
    private String f25495f;

    /* renamed from: g  reason: collision with root package name */
    private char f25496g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f25497h;

    /* renamed from: a  reason: collision with root package name */
    private b f25490a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f25491b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f25492c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f25498i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f25499a;

        static {
            int[] iArr = new int[b.values().length];
            f25499a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f25499a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f25499a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f25499a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f25499a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f25499a[b.TITLE.ordinal()] = 6;
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
        int m10 = iv.d.m(charSequence, i10, charSequence.length());
        int a10 = iv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f25495f = charSequence2;
        int m11 = iv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f25498i = true;
            this.f25491b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f25490a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f25498i) {
            return;
        }
        String e10 = iv.a.e(this.f25495f);
        StringBuilder sb2 = this.f25497h;
        if (sb2 != null) {
            str = iv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f25492c.add(new jv.o(this.f25494e, e10, str));
        this.f25493d = null;
        this.f25498i = false;
        this.f25494e = null;
        this.f25495f = null;
        this.f25497h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = iv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f25493d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f25493d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f25493d.length() > 999) {
            return -1;
        } else {
            String b10 = iv.a.b(this.f25493d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f25494e = b10;
            this.f25490a = b.DESTINATION;
            return iv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = iv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f25490a = b.LABEL;
            this.f25493d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f25493d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = iv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f25490a = b.START_DEFINITION;
            return m10;
        }
        this.f25496g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f25496g = ')';
            }
        } else {
            this.f25496g = charAt;
        }
        if (this.f25496g != 0) {
            this.f25490a = b.TITLE;
            this.f25497h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f25497h.append('\n');
            }
            return i11;
        }
        b();
        this.f25490a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = iv.c.e(charSequence, i10, this.f25496g);
        if (e10 == -1) {
            return -1;
        }
        this.f25497h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f25497h.append('\n');
            return e10;
        }
        int m10 = iv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f25498i = true;
        b();
        this.f25491b.setLength(0);
        this.f25490a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f25492c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f25491b;
    }

    public void f(CharSequence charSequence) {
        if (this.f25491b.length() != 0) {
            this.f25491b.append('\n');
        }
        this.f25491b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f25499a[this.f25490a.ordinal()]) {
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
                this.f25490a = b.PARAGRAPH;
                return;
            }
        }
    }
}
