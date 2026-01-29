package kotlin.text;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends n {
    private static final Function1 d(final String str) {
        if (str.length() == 0) {
            return new Function1() { // from class: kotlin.text.o
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    String e10;
                    e10 = q.e((String) obj);
                    return e10;
                }
            };
        }
        return new Function1() { // from class: kotlin.text.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                String f10;
                f10 = q.f(str, (String) obj);
                return f10;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String e(String line) {
        Intrinsics.checkNotNullParameter(line, "line");
        return line;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String f(String str, String line) {
        Intrinsics.checkNotNullParameter(line, "line");
        return str + line;
    }

    private static final int g(String str) {
        int length = str.length();
        int i10 = 0;
        while (true) {
            if (i10 < length) {
                if (!CharsKt__CharJVMKt.b(str.charAt(i10))) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 == -1) {
            return str.length();
        }
        return i10;
    }

    public static final String h(String str, String newIndent) {
        int i10;
        String str2;
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(newIndent, "newIndent");
        List r02 = StringsKt__StringsKt.r0(str);
        ArrayList<String> arrayList = new ArrayList();
        for (Object obj : r02) {
            if (!StringsKt__StringsKt.k0((String) obj)) {
                arrayList.add(obj);
            }
        }
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (String str3 : arrayList) {
            arrayList2.add(Integer.valueOf(g(str3)));
        }
        Integer num = (Integer) CollectionsKt.F0(arrayList2);
        int i11 = 0;
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = 0;
        }
        int length = str.length() + (newIndent.length() * r02.size());
        Function1 d10 = d(newIndent);
        int n10 = CollectionsKt.n(r02);
        ArrayList arrayList3 = new ArrayList();
        for (Object obj2 : r02) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            String str4 = (String) obj2;
            if ((i11 == 0 || i11 == n10) && StringsKt__StringsKt.k0(str4)) {
                str4 = null;
            } else {
                String p12 = a0.p1(str4, i10);
                if (p12 != null && (str2 = (String) d10.invoke(p12)) != null) {
                    str4 = str2;
                }
            }
            if (str4 != null) {
                arrayList3.add(str4);
            }
            i11 = i12;
        }
        return ((StringBuilder) CollectionsKt.v0(arrayList3, new StringBuilder(length), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, null, 124, null)).toString();
    }

    public static final String i(String str, String newIndent, String marginPrefix) {
        String str2;
        String str3;
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(newIndent, "newIndent");
        Intrinsics.checkNotNullParameter(marginPrefix, "marginPrefix");
        if (!StringsKt__StringsKt.k0(marginPrefix)) {
            List r02 = StringsKt__StringsKt.r0(str);
            int length = str.length() + (newIndent.length() * r02.size());
            Function1 d10 = d(newIndent);
            int n10 = CollectionsKt.n(r02);
            ArrayList arrayList = new ArrayList();
            int i10 = 0;
            for (Object obj : r02) {
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                String str4 = (String) obj;
                String str5 = null;
                if ((i10 == 0 || i10 == n10) && StringsKt__StringsKt.k0(str4)) {
                    str2 = marginPrefix;
                    str4 = null;
                } else {
                    int length2 = str4.length();
                    int i12 = 0;
                    while (true) {
                        if (i12 < length2) {
                            if (!CharsKt__CharJVMKt.b(str4.charAt(i12))) {
                                break;
                            }
                            i12++;
                        } else {
                            i12 = -1;
                            break;
                        }
                    }
                    if (i12 == -1) {
                        str2 = marginPrefix;
                    } else {
                        int i13 = i12;
                        str2 = marginPrefix;
                        if (w.O(str4, str2, i13, false, 4, null)) {
                            Intrinsics.checkNotNull(str4, "null cannot be cast to non-null type java.lang.String");
                            str5 = str4.substring(str2.length() + i13);
                            Intrinsics.checkNotNullExpressionValue(str5, "substring(...)");
                        }
                    }
                    if (str5 != null && (str3 = (String) d10.invoke(str5)) != null) {
                        str4 = str3;
                    }
                }
                if (str4 != null) {
                    arrayList.add(str4);
                }
                i10 = i11;
                marginPrefix = str2;
            }
            return ((StringBuilder) CollectionsKt.v0(arrayList, new StringBuilder(length), ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, null, 124, null)).toString();
        }
        throw new IllegalArgumentException("marginPrefix must be non-blank string.");
    }

    public static String j(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return h(str, "");
    }

    public static final String k(String str, String marginPrefix) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(marginPrefix, "marginPrefix");
        return i(str, "", marginPrefix);
    }

    public static /* synthetic */ String l(String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str2 = "|";
        }
        return k(str, str2);
    }
}
