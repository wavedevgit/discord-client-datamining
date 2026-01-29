package vm;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface g {

    /* renamed from: a  reason: collision with root package name */
    public static final a f51229a = a.f51230a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ a f51230a = new a();

        private a() {
        }

        public static /* synthetic */ String b(a aVar, Object obj, String str, int i10, Object obj2) {
            if ((i10 & 2) != 0) {
                str = "";
            }
            return aVar.a(obj, str);
        }

        public final String a(Object value, String name) {
            g gVar;
            String stringPlus;
            Intrinsics.checkNotNullParameter(value, "value");
            Intrinsics.checkNotNullParameter(name, "name");
            String str = null;
            if (value instanceof g) {
                gVar = (g) value;
            } else {
                gVar = null;
            }
            if (gVar != null) {
                str = gVar.c();
            }
            if (str == null) {
                str = value.getClass().getName();
            }
            if (name.length() == 0) {
                stringPlus = "";
            } else {
                stringPlus = Intrinsics.stringPlus("+", name);
            }
            return Intrinsics.stringPlus(str, stringPlus);
        }
    }

    String c();
}
