package ke;

import android.content.res.Resources;
import android.text.TextUtils;
import com.google.android.exoplayer2.Format;
import java.util.Locale;
import ne.c0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Resources f33109a;

    public e(Resources resources) {
        this.f33109a = (Resources) ne.a.e(resources);
    }

    private String b(Format format) {
        int i10 = format.J;
        if (i10 != -1 && i10 >= 1) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 6 && i10 != 7) {
                        if (i10 != 8) {
                            return this.f33109a.getString(m.f33165s);
                        }
                        return this.f33109a.getString(m.f33167u);
                    }
                    return this.f33109a.getString(m.f33166t);
                }
                return this.f33109a.getString(m.f33164r);
            }
            return this.f33109a.getString(m.f33156j);
        }
        return "";
    }

    private String c(Format format) {
        int i10 = format.f12702s;
        if (i10 == -1) {
            return "";
        }
        return this.f33109a.getString(m.f33155i, Float.valueOf(i10 / 1000000.0f));
    }

    private String d(Format format) {
        if (TextUtils.isEmpty(format.f12696e)) {
            return "";
        }
        return format.f12696e;
    }

    private String e(Format format) {
        String j10 = j(f(format), h(format));
        if (TextUtils.isEmpty(j10)) {
            return d(format);
        }
        return j10;
    }

    private String f(Format format) {
        Locale locale;
        String str = format.f12697i;
        if (TextUtils.isEmpty(str) || "und".equals(str)) {
            return "";
        }
        if (w0.f40295a >= 21) {
            locale = Locale.forLanguageTag(str);
        } else {
            locale = new Locale(str);
        }
        Locale S = w0.S();
        String displayName = locale.getDisplayName(S);
        if (TextUtils.isEmpty(displayName)) {
            return "";
        }
        try {
            int offsetByCodePoints = displayName.offsetByCodePoints(0, 1);
            return displayName.substring(0, offsetByCodePoints).toUpperCase(S) + displayName.substring(offsetByCodePoints);
        } catch (IndexOutOfBoundsException unused) {
            return displayName;
        }
    }

    private String g(Format format) {
        int i10 = format.B;
        int i11 = format.C;
        if (i10 != -1 && i11 != -1) {
            return this.f33109a.getString(m.f33157k, Integer.valueOf(i10), Integer.valueOf(i11));
        }
        return "";
    }

    private String h(Format format) {
        String str;
        if ((format.f12699p & 2) != 0) {
            str = this.f33109a.getString(m.f33158l);
        } else {
            str = "";
        }
        if ((format.f12699p & 4) != 0) {
            str = j(str, this.f33109a.getString(m.f33161o));
        }
        if ((format.f12699p & 8) != 0) {
            str = j(str, this.f33109a.getString(m.f33160n));
        }
        if ((format.f12699p & 1088) != 0) {
            return j(str, this.f33109a.getString(m.f33159m));
        }
        return str;
    }

    private static int i(Format format) {
        int k10 = c0.k(format.f12706w);
        if (k10 != -1) {
            return k10;
        }
        if (c0.n(format.f12703t) != null) {
            return 2;
        }
        if (c0.c(format.f12703t) != null) {
            return 1;
        }
        if (format.B != -1 || format.C != -1) {
            return 2;
        }
        if (format.J == -1 && format.K == -1) {
            return -1;
        }
        return 1;
    }

    private String j(String... strArr) {
        String str = "";
        for (String str2 : strArr) {
            if (str2.length() > 0) {
                if (TextUtils.isEmpty(str)) {
                    str = str2;
                } else {
                    str = this.f33109a.getString(m.f33154h, str, str2);
                }
            }
        }
        return str;
    }

    @Override // ke.o
    public String a(Format format) {
        String e10;
        int i10 = i(format);
        if (i10 == 2) {
            e10 = j(h(format), g(format), c(format));
        } else if (i10 == 1) {
            e10 = j(e(format), b(format), c(format));
        } else {
            e10 = e(format);
        }
        if (e10.length() == 0) {
            return this.f33109a.getString(m.f33168v);
        }
        return e10;
    }
}
