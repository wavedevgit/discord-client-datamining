package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements s {

    /* renamed from: a  reason: collision with root package name */
    private final String f52711a;

    public j(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        this.f52711a = string;
    }

    @Override // ws.o
    public xs.e a() {
        return new xs.c(this.f52711a);
    }

    @Override // ws.o
    public ys.q b() {
        String str;
        List a10;
        if (this.f52711a.length() == 0) {
            a10 = CollectionsKt.l();
        } else {
            List c10 = CollectionsKt.c();
            String str2 = "";
            if (vs.d.b(this.f52711a.charAt(0))) {
                String str3 = this.f52711a;
                int length = str3.length();
                int i10 = 0;
                while (true) {
                    if (i10 >= length) {
                        break;
                    } else if (!vs.d.b(str3.charAt(i10))) {
                        str3 = str3.substring(0, i10);
                        Intrinsics.checkNotNullExpressionValue(str3, "substring(...)");
                        break;
                    } else {
                        i10++;
                    }
                }
                c10.add(new ys.h(CollectionsKt.e(new ys.b(str3))));
                String str4 = this.f52711a;
                int length2 = str4.length();
                int i11 = 0;
                while (true) {
                    if (i11 >= length2) {
                        str = "";
                        break;
                    } else if (!vs.d.b(str4.charAt(i11))) {
                        str = str4.substring(i11);
                        Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                        break;
                    } else {
                        i11++;
                    }
                }
            } else {
                str = this.f52711a;
            }
            if (str.length() > 0) {
                if (vs.d.b(str.charAt(str.length() - 1))) {
                    int c02 = StringsKt.c0(str);
                    while (true) {
                        if (-1 >= c02) {
                            break;
                        } else if (!vs.d.b(str.charAt(c02))) {
                            str2 = str.substring(0, c02 + 1);
                            Intrinsics.checkNotNullExpressionValue(str2, "substring(...)");
                            break;
                        } else {
                            c02--;
                        }
                    }
                    c10.add(new ys.r(str2));
                    int c03 = StringsKt.c0(str);
                    while (true) {
                        if (-1 >= c03) {
                            break;
                        } else if (!vs.d.b(str.charAt(c03))) {
                            str = str.substring(c03 + 1);
                            Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                            break;
                        } else {
                            c03--;
                        }
                    }
                    c10.add(new ys.h(CollectionsKt.e(new ys.b(str))));
                } else {
                    c10.add(new ys.r(str));
                }
            }
            a10 = CollectionsKt.a(c10);
        }
        return new ys.q(a10, CollectionsKt.l());
    }

    public boolean equals(Object obj) {
        if ((obj instanceof j) && Intrinsics.areEqual(this.f52711a, ((j) obj).f52711a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f52711a.hashCode();
    }

    public String toString() {
        return "ConstantFormatStructure(" + this.f52711a + ')';
    }
}
