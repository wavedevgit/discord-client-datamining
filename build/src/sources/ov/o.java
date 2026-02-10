package ov;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o {

    /* renamed from: d  reason: collision with root package name */
    private StringBuilder f42828d;

    /* renamed from: e  reason: collision with root package name */
    private String f42829e;

    /* renamed from: f  reason: collision with root package name */
    private String f42830f;

    /* renamed from: g  reason: collision with root package name */
    private char f42831g;

    /* renamed from: h  reason: collision with root package name */
    private StringBuilder f42832h;

    /* renamed from: a  reason: collision with root package name */
    private b f42825a = b.START_DEFINITION;

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f42826b = new StringBuilder();

    /* renamed from: c  reason: collision with root package name */
    private final List f42827c = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private boolean f42833i = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f42834a;

        static {
            int[] iArr = new int[b.values().length];
            f42834a = iArr;
            try {
                iArr[b.PARAGRAPH.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f42834a[b.START_DEFINITION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f42834a[b.LABEL.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f42834a[b.DESTINATION.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f42834a[b.START_TITLE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f42834a[b.TITLE.ordinal()] = 6;
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
        int m10 = qv.d.m(charSequence, i10, charSequence.length());
        int a10 = qv.c.a(charSequence, m10);
        if (a10 == -1) {
            return -1;
        }
        if (charSequence.charAt(m10) == '<') {
            charSequence2 = charSequence.subSequence(m10 + 1, a10 - 1).toString();
        } else {
            charSequence2 = charSequence.subSequence(m10, a10).toString();
        }
        this.f42830f = charSequence2;
        int m11 = qv.d.m(charSequence, a10, charSequence.length());
        if (m11 >= charSequence.length()) {
            this.f42833i = true;
            this.f42826b.setLength(0);
        } else if (m11 == a10) {
            return -1;
        }
        this.f42825a = b.START_TITLE;
        return m11;
    }

    private void b() {
        String str;
        if (!this.f42833i) {
            return;
        }
        String e10 = qv.a.e(this.f42830f);
        StringBuilder sb2 = this.f42832h;
        if (sb2 != null) {
            str = qv.a.e(sb2.toString());
        } else {
            str = null;
        }
        this.f42827c.add(new rv.o(this.f42829e, e10, str));
        this.f42828d = null;
        this.f42833i = false;
        this.f42829e = null;
        this.f42830f = null;
        this.f42832h = null;
    }

    private int e(CharSequence charSequence, int i10) {
        int i11;
        int c10 = qv.c.c(charSequence, i10);
        if (c10 == -1) {
            return -1;
        }
        this.f42828d.append(charSequence, i10, c10);
        if (c10 >= charSequence.length()) {
            this.f42828d.append('\n');
            return c10;
        } else if (charSequence.charAt(c10) != ']' || (i11 = c10 + 1) >= charSequence.length() || charSequence.charAt(i11) != ':' || this.f42828d.length() > 999) {
            return -1;
        } else {
            String b10 = qv.a.b(this.f42828d.toString());
            if (b10.isEmpty()) {
                return -1;
            }
            this.f42829e = b10;
            this.f42825a = b.DESTINATION;
            return qv.d.m(charSequence, c10 + 2, charSequence.length());
        }
    }

    private int g(CharSequence charSequence, int i10) {
        int m10 = qv.d.m(charSequence, i10, charSequence.length());
        if (m10 < charSequence.length() && charSequence.charAt(m10) == '[') {
            this.f42825a = b.LABEL;
            this.f42828d = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 >= charSequence.length()) {
                this.f42828d.append('\n');
            }
            return i11;
        }
        return -1;
    }

    private int h(CharSequence charSequence, int i10) {
        int m10 = qv.d.m(charSequence, i10, charSequence.length());
        if (m10 >= charSequence.length()) {
            this.f42825a = b.START_DEFINITION;
            return m10;
        }
        this.f42831g = (char) 0;
        char charAt = charSequence.charAt(m10);
        if (charAt != '\"' && charAt != '\'') {
            if (charAt == '(') {
                this.f42831g = ')';
            }
        } else {
            this.f42831g = charAt;
        }
        if (this.f42831g != 0) {
            this.f42825a = b.TITLE;
            this.f42832h = new StringBuilder();
            int i11 = m10 + 1;
            if (i11 == charSequence.length()) {
                this.f42832h.append('\n');
            }
            return i11;
        }
        b();
        this.f42825a = b.START_DEFINITION;
        return m10;
    }

    private int i(CharSequence charSequence, int i10) {
        int e10 = qv.c.e(charSequence, i10, this.f42831g);
        if (e10 == -1) {
            return -1;
        }
        this.f42832h.append(charSequence.subSequence(i10, e10));
        if (e10 >= charSequence.length()) {
            this.f42832h.append('\n');
            return e10;
        }
        int m10 = qv.d.m(charSequence, e10 + 1, charSequence.length());
        if (m10 != charSequence.length()) {
            return -1;
        }
        this.f42833i = true;
        b();
        this.f42826b.setLength(0);
        this.f42825a = b.START_DEFINITION;
        return m10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List c() {
        b();
        return this.f42827c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence d() {
        return this.f42826b;
    }

    public void f(CharSequence charSequence) {
        if (this.f42826b.length() != 0) {
            this.f42826b.append('\n');
        }
        this.f42826b.append(charSequence);
        int i10 = 0;
        while (i10 < charSequence.length()) {
            switch (a.f42834a[this.f42825a.ordinal()]) {
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
                this.f42825a = b.PARAGRAPH;
                return;
            }
        }
    }
}
