package ts;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements s {

    /* renamed from: a  reason: collision with root package name */
    private final String f49878a;

    public j(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        this.f49878a = string;
    }

    @Override // ts.o
    public us.e a() {
        return new us.c(this.f49878a);
    }

    @Override // ts.o
    public vs.q b() {
        String str;
        List a10;
        if (this.f49878a.length() == 0) {
            a10 = CollectionsKt.l();
        } else {
            List c10 = CollectionsKt.c();
            String str2 = "";
            if (ss.d.b(this.f49878a.charAt(0))) {
                String str3 = this.f49878a;
                int length = str3.length();
                int i10 = 0;
                while (true) {
                    if (i10 >= length) {
                        break;
                    } else if (!ss.d.b(str3.charAt(i10))) {
                        str3 = str3.substring(0, i10);
                        Intrinsics.checkNotNullExpressionValue(str3, "substring(...)");
                        break;
                    } else {
                        i10++;
                    }
                }
                c10.add(new vs.h(CollectionsKt.e(new vs.b(str3))));
                String str4 = this.f49878a;
                int length2 = str4.length();
                int i11 = 0;
                while (true) {
                    if (i11 >= length2) {
                        str = "";
                        break;
                    } else if (!ss.d.b(str4.charAt(i11))) {
                        str = str4.substring(i11);
                        Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                        break;
                    } else {
                        i11++;
                    }
                }
            } else {
                str = this.f49878a;
            }
            if (str.length() > 0) {
                if (ss.d.b(str.charAt(str.length() - 1))) {
                    int c02 = StringsKt.c0(str);
                    while (true) {
                        if (-1 >= c02) {
                            break;
                        } else if (!ss.d.b(str.charAt(c02))) {
                            str2 = str.substring(0, c02 + 1);
                            Intrinsics.checkNotNullExpressionValue(str2, "substring(...)");
                            break;
                        } else {
                            c02--;
                        }
                    }
                    c10.add(new vs.r(str2));
                    int c03 = StringsKt.c0(str);
                    while (true) {
                        if (-1 >= c03) {
                            break;
                        } else if (!ss.d.b(str.charAt(c03))) {
                            str = str.substring(c03 + 1);
                            Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                            break;
                        } else {
                            c03--;
                        }
                    }
                    c10.add(new vs.h(CollectionsKt.e(new vs.b(str))));
                } else {
                    c10.add(new vs.r(str));
                }
            }
            a10 = CollectionsKt.a(c10);
        }
        return new vs.q(a10, CollectionsKt.l());
    }

    public boolean equals(Object obj) {
        if ((obj instanceof j) && Intrinsics.areEqual(this.f49878a, ((j) obj).f49878a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f49878a.hashCode();
    }

    public String toString() {
        return "ConstantFormatStructure(" + this.f49878a + ')';
    }
}
