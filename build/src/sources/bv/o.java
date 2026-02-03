package bv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f7853d;

    /* renamed from: e  reason: collision with root package name */
    private String f7854e;

    /* renamed from: f  reason: collision with root package name */
    private String f7855f;

    /* renamed from: g  reason: collision with root package name */
    private char f7856g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f7857h;

    /* renamed from: a  reason: collision with root package name */
    private b f7850a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f7851b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f7852c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f7858i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f7859a;

        static {
            int[] iArr = new int[b.values().length];
            f7859a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f7859a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f7859a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f7859a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f7859a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f7859a[b.TITLE.ordinal()] = 6;
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
        int m10 = dv.d.m(charSequence, i10, charSequence.length());
        int a10 = dv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f7855f = charSequence2;
        int m11 = dv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f7858i = true;
            this.f7851b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f7850a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f7858i) {
            return;
        }
        String e10 = dv.a.e(this.f7855f);
        StringBuilder sb2 = this.f7857h;
        if (sb2 != null) {
            str = dv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f7852c.add(new ev.o(this.f7854e, e10, str));
        this.f7853d = null;
        this.f7858i = false;
        this.f7854e = null;
        this.f7855f = null;
        this.f7857h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = dv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f7853d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f7853d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f7853d.length() > 999) {
            return -1;
        } else {
            String b10 = dv.a.b(this.f7853d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f7854e = b10;
            this.f7850a = b.DESTINATION;
            return dv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = dv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f7850a = b.LABEL;
            this.f7853d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f7853d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = dv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f7850a = b.START_DEFINITION;
            return m10;
        }
        this.f7856g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f7856g = ')';
            }
        } else {
            this.f7856g = charAt;
        }
        if (this.f7856g != 0) {
            this.f7850a = b.TITLE;
            this.f7857h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f7857h.append('\n');
            }
            return i11;
        }
        b();
        this.f7850a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = dv.c.e(charSequence, i10, this.f7856g);
        if (e10 == -1) {
            return -1;
        }
        this.f7857h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f7857h.append('\n');
            return e10;
        }
        int m10 = dv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f7858i = true;
        b();
        this.f7851b.setLength(0);
        this.f7850a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f7852c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f7851b;
    }

    public void f(CharSequence charSequence) {
        if (this.f7851b.length() != 0) {
            this.f7851b.append('\n');
        }
        this.f7851b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f7859a[this.f7850a.ordinal()]) {
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
                this.f7850a = b.PARAGRAPH;
                return;
            }
        }
    }
}
