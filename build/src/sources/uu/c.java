package uu;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.SpreadBuilder;
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f51040a;

    /* renamed from: b  reason: collision with root package name */
    private static final Map f51041b;

    static {
        c cVar = new c();
        f51040a = cVar;
        Boolean bool = Boolean.TRUE;
        SpreadBuilder spreadBuilder = new SpreadBuilder(2);
        spreadBuilder.add(bool);
        spreadBuilder.addSpread(cVar.c(1));
        Pair a10 = v.a(bool, CollectionsKt.o(spreadBuilder.toArray(new Object[spreadBuilder.size()])));
        Boolean bool2 = Boolean.FALSE;
        SpreadBuilder spreadBuilder2 = new SpreadBuilder(7);
        spreadBuilder2.add(bool2);
        spreadBuilder2.addSpread(cVar.c(0));
        spreadBuilder2.add("");
        spreadBuilder2.add(CollectionsKt.l());
        spreadBuilder2.add(new wu.b(CollectionsKt.l()));
        spreadBuilder2.add(new wu.b(""));
        spreadBuilder2.add(new wu.b(null));
        Pair a11 = v.a(bool2, CollectionsKt.o(spreadBuilder2.toArray(new Object[spreadBuilder2.size()])));
        SpreadBuilder spreadBuilder3 = new SpreadBuilder(2);
        spreadBuilder3.add(bool);
        spreadBuilder3.addSpread(cVar.c(1));
        Pair a12 = v.a(1, CollectionsKt.o(spreadBuilder3.toArray(new Object[spreadBuilder3.size()])));
        SpreadBuilder spreadBuilder4 = new SpreadBuilder(7);
        spreadBuilder4.add(bool2);
        spreadBuilder4.addSpread(cVar.c(0));
        spreadBuilder4.add("");
        spreadBuilder4.add(CollectionsKt.l());
        spreadBuilder4.add(new wu.b(CollectionsKt.l()));
        spreadBuilder4.add(new wu.b(""));
        spreadBuilder4.add(new wu.b(null));
        Pair a13 = v.a(0, CollectionsKt.o(spreadBuilder4.toArray(new Object[spreadBuilder4.size()])));
        Pair a14 = v.a("true", CollectionsKt.e("true"));
        Pair a15 = v.a("false", CollectionsKt.e("false"));
        Double valueOf = Double.valueOf(1.0d);
        Pair a16 = v.a("1", CollectionsKt.o(bool, 1, valueOf, "1", new wu.b(1), new wu.b(valueOf), new wu.b("1")));
        Double valueOf2 = Double.valueOf(0.0d);
        Pair a17 = v.a("0", CollectionsKt.o(bool2, 0, valueOf2, "0", new wu.b(0), new wu.b(valueOf2), new wu.b("0")));
        Pair a18 = v.a("", CollectionsKt.o(bool2, 0, "", CollectionsKt.l(), new wu.b(CollectionsKt.l()), new wu.b(""), new wu.b(null)));
        Pair a19 = v.a(null, CollectionsKt.e(null));
        Pair a20 = v.a(CollectionsKt.l(), CollectionsKt.o(bool2, 0, valueOf2, ""));
        Pair a21 = v.a(new wu.b(null), CollectionsKt.o(bool2, 0, valueOf2, ""));
        Pair a22 = v.a(new wu.b(""), CollectionsKt.o(bool2, 0, valueOf2, ""));
        Pair a23 = v.a(new wu.b(CollectionsKt.l()), CollectionsKt.o(bool2, 0, valueOf2, ""));
        Pair a24 = v.a(new wu.b(0), CollectionsKt.o(bool2, 0, valueOf2, "0"));
        Pair a25 = v.a(new wu.b(1), CollectionsKt.o(bool, 1, valueOf, "1"));
        Pair a26 = v.a(new wu.b("1"), CollectionsKt.o(bool, 1, valueOf, "1"));
        Pair a27 = v.a(new wu.b("0"), CollectionsKt.o(bool2, 0, valueOf2, "0"));
        Pair a28 = v.a(new wu.b(valueOf2), CollectionsKt.o(bool2, 0, valueOf2, "0"));
        Pair a29 = v.a(new wu.b(valueOf), CollectionsKt.o(bool, 1, valueOf, "1"));
        Pair a30 = v.a(new wu.b("1.0"), CollectionsKt.o(bool, 1, valueOf));
        Pair a31 = v.a(new wu.b("0.0"), CollectionsKt.o(bool2, 0, valueOf2));
        Pair a32 = v.a(valueOf, CollectionsKt.o(valueOf, new wu.b(valueOf), new wu.b(1), new wu.b("1.0"), "1", 1, bool, "1.0"));
        Pair a33 = v.a("1.0", CollectionsKt.o("1.0", valueOf, 1, bool));
        SpreadBuilder spreadBuilder5 = new SpreadBuilder(4);
        spreadBuilder5.addSpread(cVar.b(0.0d));
        spreadBuilder5.add(bool2);
        spreadBuilder5.add(CollectionsKt.l());
        spreadBuilder5.add(new wu.b(CollectionsKt.l()));
        f51041b = o0.m(a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, v.a(valueOf2, CollectionsKt.o(spreadBuilder5.toArray(new Object[spreadBuilder5.size()]))), v.a("0.0", CollectionsKt.o("0.0", valueOf2, 0, bool2)));
    }

    private c() {
    }

    private final Object[] b(double d10) {
        return f(g(e(CollectionsKt.e(Double.valueOf(d10))))).toArray(new Object[0]);
    }

    private final Object[] c(int i10) {
        return f(g(d(CollectionsKt.e(Integer.valueOf(i10))))).toArray(new Object[0]);
    }

    private final List d(List list) {
        List list2 = list;
        List<Number> list3 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list3, 10));
        for (Number number : list3) {
            arrayList.add(Double.valueOf(number.doubleValue()));
        }
        return CollectionsKt.L0(list2, arrayList);
    }

    private final List e(List list) {
        List list2 = list;
        List<Number> list3 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list3, 10));
        for (Number number : list3) {
            arrayList.add(Integer.valueOf(number.intValue()));
        }
        return CollectionsKt.L0(list2, arrayList);
    }

    private final List f(List list) {
        List list2 = list;
        List<Object> list3 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list3, 10));
        for (Object obj : list3) {
            arrayList.add(new wu.b(obj));
        }
        return CollectionsKt.L0(list2, arrayList);
    }

    private final List g(List list) {
        List list2 = list;
        List<Number> list3 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list3, 10));
        for (Number number : list3) {
            arrayList.add(number.toString());
        }
        return CollectionsKt.L0(list2, arrayList);
    }

    public final List a(Object obj) {
        return (List) f51041b.get(obj);
    }
}
