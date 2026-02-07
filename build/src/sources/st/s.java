package st;

import java.text.ParsePosition;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s {

    /* renamed from: a  reason: collision with root package name */
    private final List f50258a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(String[] strArr) {
        this.f50258a = Collections.unmodifiableList(Arrays.asList(strArr));
    }

    private boolean a(char c10, char c11) {
        if (c10 >= 'a' && c10 <= 'z') {
            if (c11 >= 'A' && c11 <= 'Z') {
                c11 = (char) (c11 + ' ');
            }
            if (c10 != c11) {
                return false;
            }
            return true;
        } else if (c10 >= 'A' && c10 <= 'Z') {
            char c12 = (char) (c10 + ' ');
            if (c11 >= 'A' && c11 <= 'Z') {
                c11 = (char) (c11 + ' ');
            }
            if (c12 != c11) {
                return false;
            }
            return true;
        } else if (Character.toUpperCase(c10) != Character.toUpperCase(c11) && Character.toLowerCase(c10) != Character.toLowerCase(c11)) {
            return false;
        } else {
            return true;
        }
    }

    private Enum e(CharSequence charSequence, ParsePosition parsePosition, Class cls, boolean z10, boolean z11, boolean z12) {
        int i10;
        int i11;
        String str;
        boolean z13;
        Enum[] enumArr = (Enum[]) cls.getEnumConstants();
        int size = this.f50258a.size();
        int index = parsePosition.getIndex();
        int length = charSequence.length();
        String str2 = "";
        String str3 = "";
        int i12 = 0;
        Enum r11 = null;
        int i13 = 0;
        while (i12 < enumArr.length) {
            boolean isEmpty = str3.isEmpty();
            if (isEmpty) {
                if (i12 >= size) {
                    str3 = enumArr[i12].name();
                } else {
                    str3 = (String) this.f50258a.get(i12);
                }
            }
            int length2 = str3.length();
            int i14 = index;
            int i15 = 0;
            boolean z14 = true;
            while (z14 && i15 < length2) {
                Enum[] enumArr2 = enumArr;
                int i16 = index + i15;
                if (i16 >= length) {
                    i11 = size;
                    str = str2;
                    z14 = false;
                } else {
                    char charAt = charSequence.charAt(i16);
                    i11 = size;
                    char charAt2 = str3.charAt(i15);
                    if (z12) {
                        str = str2;
                        if (charAt == 160) {
                            charAt = ' ';
                        }
                        if (charAt2 == 160) {
                            charAt2 = ' ';
                        }
                    } else {
                        str = str2;
                    }
                    if (!z10 ? charAt != charAt2 : charAt != charAt2 && !a(charAt, charAt2)) {
                        z13 = false;
                    } else {
                        z13 = true;
                    }
                    if (z13) {
                        i14++;
                    }
                    z14 = z13;
                }
                i15++;
                enumArr = enumArr2;
                size = i11;
                str2 = str;
            }
            Enum[] enumArr3 = enumArr;
            int i17 = size;
            String str4 = str2;
            if (z12 && isEmpty && length2 == 5 && str3.charAt(4) == '.' && i14 == (i10 = index + 3) && i10 < length && charSequence.charAt(i10) == '.') {
                i12--;
                str3 = ((Object) str3.subSequence(index, i10)) + ".";
            } else {
                if (!z11 && length2 != 1) {
                    if (z14) {
                        parsePosition.setIndex(i14);
                        return enumArr3[i12];
                    }
                } else {
                    int i18 = i14 - index;
                    if (i13 < i18) {
                        r11 = enumArr3[i12];
                        i13 = i18;
                    } else if (i13 == i18) {
                        str3 = str4;
                        r11 = null;
                    }
                }
                str3 = str4;
            }
            i12++;
            enumArr = enumArr3;
            size = i17;
            str2 = str4;
        }
        if (r11 == null) {
            parsePosition.setErrorIndex(index);
            return r11;
        }
        parsePosition.setIndex(index + i13);
        return r11;
    }

    public List b() {
        return this.f50258a;
    }

    public Enum c(CharSequence charSequence, ParsePosition parsePosition, Class cls, rt.d dVar) {
        rt.c cVar = a.f50166i;
        Boolean bool = Boolean.TRUE;
        return e(charSequence, parsePosition, cls, ((Boolean) dVar.b(cVar, bool)).booleanValue(), ((Boolean) dVar.b(a.f50167j, Boolean.FALSE)).booleanValue(), ((Boolean) dVar.b(a.f50168k, bool)).booleanValue());
    }

    public Enum d(CharSequence charSequence, ParsePosition parsePosition, Class cls, g gVar) {
        s sVar;
        CharSequence charSequence2;
        ParsePosition parsePosition2;
        Class cls2;
        boolean z10;
        boolean z11;
        boolean z12;
        if (gVar == g.STRICT) {
            sVar = this;
            charSequence2 = charSequence;
            parsePosition2 = parsePosition;
            cls2 = cls;
            z11 = false;
        } else {
            sVar = this;
            charSequence2 = charSequence;
            parsePosition2 = parsePosition;
            cls2 = cls;
            if (gVar == g.LAX) {
                z11 = true;
            } else {
                z10 = false;
                z11 = true;
                z12 = true;
                return sVar.e(charSequence2, parsePosition2, cls2, z11, z10, z12);
            }
        }
        z10 = z11;
        z12 = z10;
        return sVar.e(charSequence2, parsePosition2, cls2, z11, z10, z12);
    }

    public String f(Enum r32) {
        int ordinal = r32.ordinal();
        if (this.f50258a.size() <= ordinal) {
            return r32.name();
        }
        return (String) this.f50258a.get(ordinal);
    }

    public String toString() {
        int size = this.f50258a.size();
        StringBuilder sb2 = new StringBuilder((size * 16) + 2);
        sb2.append('{');
        boolean z10 = true;
        for (int i10 = 0; i10 < size; i10++) {
            if (z10) {
                z10 = false;
            } else {
                sb2.append(',');
            }
            sb2.append((String) this.f50258a.get(i10));
        }
        sb2.append('}');
        return sb2.toString();
    }
}
