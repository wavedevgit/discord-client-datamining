package j$.time.format;

import java.text.ParsePosition;
import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    public String f29759a;

    /* renamed from: b  reason: collision with root package name */
    public String f29760b;

    /* renamed from: c  reason: collision with root package name */
    public final char f29761c;

    /* renamed from: d  reason: collision with root package name */
    public k f29762d;

    /* renamed from: e  reason: collision with root package name */
    public k f29763e;

    public boolean b(char c10, char c11) {
        return c10 == c11;
    }

    public k(String str, String str2, k kVar) {
        this.f29759a = str;
        this.f29760b = str2;
        this.f29762d = kVar;
        if (str.length() == 0) {
            this.f29761c = CharCompanionObject.MAX_VALUE;
        } else {
            this.f29761c = this.f29759a.charAt(0);
        }
    }

    public final String c(CharSequence charSequence, ParsePosition parsePosition) {
        int index = parsePosition.getIndex();
        int length = charSequence.length();
        if (e(charSequence, index, length)) {
            int length2 = this.f29759a.length() + index;
            k kVar = this.f29762d;
            if (kVar != null && length2 != length) {
                while (true) {
                    if (b(kVar.f29761c, charSequence.charAt(length2))) {
                        parsePosition.setIndex(length2);
                        String c10 = kVar.c(charSequence, parsePosition);
                        if (c10 != null) {
                            return c10;
                        }
                    } else {
                        kVar = kVar.f29763e;
                        if (kVar == null) {
                            break;
                        }
                    }
                }
            }
            parsePosition.setIndex(length2);
            return this.f29760b;
        }
        return null;
    }

    public k d(String str, String str2, k kVar) {
        return new k(str, str2, kVar);
    }

    public boolean e(CharSequence charSequence, int i10, int i11) {
        if (charSequence instanceof String) {
            return ((String) charSequence).startsWith(this.f29759a, i10);
        }
        int length = this.f29759a.length();
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
            if (!b(this.f29759a.charAt(i12), charSequence.charAt(i10))) {
                return false;
            }
            i10 = i15;
            length = i13;
            i12 = i14;
        }
    }

    public final boolean a(String str, String str2) {
        int i10 = 0;
        while (i10 < str.length() && i10 < this.f29759a.length() && b(str.charAt(i10), this.f29759a.charAt(i10))) {
            i10++;
        }
        if (i10 == this.f29759a.length()) {
            if (i10 < str.length()) {
                String substring = str.substring(i10);
                for (k kVar = this.f29762d; kVar != null; kVar = kVar.f29763e) {
                    if (b(kVar.f29761c, substring.charAt(0))) {
                        return kVar.a(substring, str2);
                    }
                }
                k d10 = d(substring, str2, null);
                d10.f29763e = this.f29762d;
                this.f29762d = d10;
                return true;
            }
            this.f29760b = str2;
            return true;
        }
        k d11 = d(this.f29759a.substring(i10), this.f29760b, this.f29762d);
        this.f29759a = str.substring(0, i10);
        this.f29762d = d11;
        if (i10 < str.length()) {
            this.f29762d.f29763e = d(str.substring(i10), str2, null);
            this.f29760b = null;
            return true;
        }
        this.f29760b = str2;
        return true;
    }
}
