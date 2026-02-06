package j$.time.format;

import java.text.ParsePosition;
import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    public String f29457a;

    /* renamed from: b  reason: collision with root package name */
    public String f29458b;

    /* renamed from: c  reason: collision with root package name */
    public final char f29459c;

    /* renamed from: d  reason: collision with root package name */
    public k f29460d;

    /* renamed from: e  reason: collision with root package name */
    public k f29461e;

    public boolean b(char c10, char c11) {
        return c10 == c11;
    }

    public k(String str, String str2, k kVar) {
        this.f29457a = str;
        this.f29458b = str2;
        this.f29460d = kVar;
        if (str.length() == 0) {
            this.f29459c = CharCompanionObject.MAX_VALUE;
        } else {
            this.f29459c = this.f29457a.charAt(0);
        }
    }

    public final String c(CharSequence charSequence, ParsePosition parsePosition) {
        int index = parsePosition.getIndex();
        int length = charSequence.length();
        if (e(charSequence, index, length)) {
            int length2 = this.f29457a.length() + index;
            k kVar = this.f29460d;
            if (kVar != null && length2 != length) {
                while (true) {
                    if (b(kVar.f29459c, charSequence.charAt(length2))) {
                        parsePosition.setIndex(length2);
                        String c10 = kVar.c(charSequence, parsePosition);
                        if (c10 != null) {
                            return c10;
                        }
                    } else {
                        kVar = kVar.f29461e;
                        if (kVar == null) {
                            break;
                        }
                    }
                }
            }
            parsePosition.setIndex(length2);
            return this.f29458b;
        }
        return null;
    }

    public k d(String str, String str2, k kVar) {
        return new k(str, str2, kVar);
    }

    public boolean e(CharSequence charSequence, int i10, int i11) {
        if (charSequence instanceof String) {
            return ((String) charSequence).startsWith(this.f29457a, i10);
        }
        int length = this.f29457a.length();
        if (length > i11 - i10) {
            return false;
        }
        int i12 = 0;
        while (true) {
            int i13 = length - 1;
            if (length <= 0) {
                return true;
            }
            int i14 = i12 + 1;
            int i15 = i10 + 1;
            if (!b(this.f29457a.charAt(i12), charSequence.charAt(i10))) {
                return false;
            }
            i10 = i15;
            length = i13;
            i12 = i14;
        }
    }

    public final boolean a(String str, String str2) {
        int i10 = 0;
        while (i10 < str.length() && i10 < this.f29457a.length() && b(str.charAt(i10), this.f29457a.charAt(i10))) {
            i10++;
        }
        if (i10 == this.f29457a.length()) {
            if (i10 < str.length()) {
                String substring = str.substring(i10);
                for (k kVar = this.f29460d; kVar != null; kVar = kVar.f29461e) {
                    if (b(kVar.f29459c, substring.charAt(0))) {
                        return kVar.a(substring, str2);
                    }
                }
                k d10 = d(substring, str2, null);
                d10.f29461e = this.f29460d;
                this.f29460d = d10;
                return true;
            }
            this.f29458b = str2;
            return true;
        }
        k d11 = d(this.f29457a.substring(i10), this.f29458b, this.f29460d);
        this.f29457a = str.substring(0, i10);
        this.f29460d = d11;
        if (i10 < str.length()) {
            this.f29460d.f29461e = d(str.substring(i10), str2, null);
            this.f29458b = null;
            return true;
        }
        this.f29458b = str2;
        return true;
    }
}
