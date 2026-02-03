package j$.time.format;

import java.text.ParsePosition;
import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    public String f31338a;

    /* renamed from: b  reason: collision with root package name */
    public String f31339b;

    /* renamed from: c  reason: collision with root package name */
    public final char f31340c;

    /* renamed from: d  reason: collision with root package name */
    public k f31341d;

    /* renamed from: e  reason: collision with root package name */
    public k f31342e;

    public boolean b(char c10, char c11) {
        return c10 == c11;
    }

    public k(String str, String str2, k kVar) {
        this.f31338a = str;
        this.f31339b = str2;
        this.f31341d = kVar;
        if (str.length() == 0) {
            this.f31340c = CharCompanionObject.MAX_VALUE;
        } else {
            this.f31340c = this.f31338a.charAt(0);
        }
    }

    public final String c(CharSequence charSequence, ParsePosition parsePosition) {
        int index = parsePosition.getIndex();
        int length = charSequence.length();
        if (e(charSequence, index, length)) {
            int length2 = this.f31338a.length() + index;
            k kVar = this.f31341d;
            if (kVar != null && length2 != length) {
                while (true) {
                    if (b(kVar.f31340c, charSequence.charAt(length2))) {
                        parsePosition.setIndex(length2);
                        String c10 = kVar.c(charSequence, parsePosition);
                        if (c10 != null) {
                            return c10;
                        }
                    } else {
                        kVar = kVar.f31342e;
                        if (kVar == null) {
                            break;
                        }
                    }
                }
            }
            parsePosition.setIndex(length2);
            return this.f31339b;
        }
        return null;
    }

    public k d(String str, String str2, k kVar) {
        return new k(str, str2, kVar);
    }

    public boolean e(CharSequence charSequence, int i10, int i11) {
        if (charSequence instanceof String) {
            return ((String) charSequence).startsWith(this.f31338a, i10);
        }
        int length = this.f31338a.length();
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
            if (!b(this.f31338a.charAt(i12), charSequence.charAt(i10))) {
                return false;
            }
            i10 = i15;
            length = i13;
            i12 = i14;
        }
    }

    public final boolean a(String str, String str2) {
        int i10 = 0;
        while (i10 < str.length() && i10 < this.f31338a.length() && b(str.charAt(i10), this.f31338a.charAt(i10))) {
            i10++;
        }
        if (i10 == this.f31338a.length()) {
            if (i10 < str.length()) {
                String substring = str.substring(i10);
                for (k kVar = this.f31341d; kVar != null; kVar = kVar.f31342e) {
                    if (b(kVar.f31340c, substring.charAt(0))) {
                        return kVar.a(substring, str2);
                    }
                }
                k d10 = d(substring, str2, null);
                d10.f31342e = this.f31341d;
                this.f31341d = d10;
                return true;
            }
            this.f31339b = str2;
            return true;
        }
        k d11 = d(this.f31338a.substring(i10), this.f31339b, this.f31341d);
        this.f31338a = str.substring(0, i10);
        this.f31341d = d11;
        if (i10 < str.length()) {
            this.f31341d.f31342e = d(str.substring(i10), str2, null);
            this.f31339b = null;
            return true;
        }
        this.f31339b = str2;
        return true;
    }
}
