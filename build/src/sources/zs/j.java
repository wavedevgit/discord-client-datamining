package zs;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements s {

    /* renamed from: a  reason: collision with root package name */
    private final String f56240a;

    public j(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        this.f56240a = string;
    }

    @Override // zs.o
    public at.e a() {
        return new at.c(this.f56240a);
    }

    @Override // zs.o
    public bt.q b() {
        String str;
        List a10;
        if (this.f56240a.length() == 0) {
            a10 = CollectionsKt.l();
        } else {
            List c10 = CollectionsKt.c();
            String str2 = "";
            if (ys.d.b(this.f56240a.charAt(0))) {
                String str3 = this.f56240a;
                int length = str3.length();
                int i10 = 0;
                while (true) {
                    if (i10 >= length) {
                        break;
                    } else if (!ys.d.b(str3.charAt(i10))) {
                        str3 = str3.substring(0, i10);
                        Intrinsics.checkNotNullExpressionValue(str3, "substring(...)");
                        break;
                    } else {
                        i10++;
                    }
                }
                c10.add(new bt.h(CollectionsKt.e(new bt.b(str3))));
                String str4 = this.f56240a;
                int length2 = str4.length();
                int i11 = 0;
                while (true) {
                    if (i11 >= length2) {
                        str = "";
                        break;
                    } else if (!ys.d.b(str4.charAt(i11))) {
                        str = str4.substring(i11);
                        Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                        break;
                    } else {
                        i11++;
                    }
                }
            } else {
                str = this.f56240a;
            }
            if (str.length() > 0) {
                if (ys.d.b(str.charAt(str.length() - 1))) {
                    int c02 = StringsKt.c0(str);
                    while (true) {
                        if (-1 >= c02) {
                            break;
                        } else if (!ys.d.b(str.charAt(c02))) {
                            str2 = str.substring(0, c02 + 1);
                            Intrinsics.checkNotNullExpressionValue(str2, "substring(...)");
                            break;
                        } else {
                            c02--;
                        }
                    }
                    c10.add(new bt.r(str2));
                    int c03 = StringsKt.c0(str);
                    while (true) {
                        if (-1 >= c03) {
                            break;
                        } else if (!ys.d.b(str.charAt(c03))) {
                            str = str.substring(c03 + 1);
                            Intrinsics.checkNotNullExpressionValue(str, "substring(...)");
                            break;
                        } else {
                            c03--;
                        }
                    }
                    c10.add(new bt.h(CollectionsKt.e(new bt.b(str))));
                } else {
                    c10.add(new bt.r(str));
                }
            }
            a10 = CollectionsKt.a(c10);
        }
        return new bt.q(a10, CollectionsKt.l());
    }

    public boolean equals(Object obj) {
        if ((obj instanceof j) && Intrinsics.areEqual(this.f56240a, ((j) obj).f56240a)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f56240a.hashCode();
    }

    public String toString() {
        return "ConstantFormatStructure(" + this.f56240a + ')';
    }
}
