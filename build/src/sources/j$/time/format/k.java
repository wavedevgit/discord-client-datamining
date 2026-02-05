package j$.time.format;

import java.text.ParsePosition;
import kotlin.jvm.internal.CharCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    public String f30483a;

    /* renamed from: b  reason: collision with root package name */
    public String f30484b;

    /* renamed from: c  reason: collision with root package name */
    public final char f30485c;

    /* renamed from: d  reason: collision with root package name */
    public k f30486d;

    /* renamed from: e  reason: collision with root package name */
    public k f30487e;

    public boolean b(char c10, char c11) {
        return c10 == c11;
    }

    public k(String str, String str2, k kVar) {
        this.f30483a = str;
        this.f30484b = str2;
        this.f30486d = kVar;
        if (str.length() == 0) {
            this.f30485c = CharCompanionObject.MAX_VALUE;
        } else {
            this.f30485c = this.f30483a.charAt(0);
        }
    }

    public final String c(CharSequence charSequence, ParsePosition parsePosition) {
        int index = parsePosition.getIndex();
        int length = charSequence.length();
        if (e(charSequence, index, length)) {
            int length2 = this.f30483a.length() + index;
            k kVar = this.f30486d;
            if (kVar != null && length2 != length) {
                while (true) {
                    if (b(kVar.f30485c, charSequence.charAt(length2))) {
                        parsePosition.setIndex(length2);
                        String c10 = kVar.c(charSequence, parsePosition);
                        if (c10 != null) {
                            return c10;
                        }
                    } else {
                        kVar = kVar.f30487e;
                        if (kVar == null) {
                            break;
                        }
                    }
                }
            }
            parsePosition.setIndex(length2);
            return this.f30484b;
        }
        return null;
    }

    public k d(String str, String str2, k kVar) {
        return new k(str, str2, kVar);
    }

    public boolean e(CharSequence charSequence, int i10, int i11) {
        if (charSequence instanceof String) {
            return ((String) charSequence).startsWith(this.f30483a, i10);
        }
        int length = this.f30483a.length();
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
            if (!b(this.f30483a.charAt(i12), charSequence.charAt(i10))) {
                return false;
            }
            i10 = i15;
            length = i13;
            i12 = i14;
        }
    }

    public final boolean a(String str, String str2) {
        int i10 = 0;
        while (i10 < str.length() && i10 < this.f30483a.length() && b(str.charAt(i10), this.f30483a.charAt(i10))) {
            i10++;
        }
        if (i10 == this.f30483a.length()) {
            if (i10 < str.length()) {
                String substring = str.substring(i10);
                for (k kVar = this.f30486d; kVar != null; kVar = kVar.f30487e) {
                    if (b(kVar.f30485c, substring.charAt(0))) {
                        return kVar.a(substring, str2);
                    }
                }
                k d10 = d(substring, str2, null);
                d10.f30487e = this.f30486d;
                this.f30486d = d10;
                return true;
            }
            this.f30484b = str2;
            return true;
        }
        k d11 = d(this.f30483a.substring(i10), this.f30484b, this.f30486d);
        this.f30483a = str.substring(0, i10);
        this.f30486d = d11;
        if (i10 < str.length()) {
            this.f30486d.f30487e = d(str.substring(i10), str2, null);
            this.f30484b = null;
            return true;
        }
        this.f30484b = str2;
        return true;
    }
}
