package ys;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements o {

    /* renamed from: a  reason: collision with root package name */
    private final List f55284a;

    /* renamed from: b  reason: collision with root package name */
    private final int f55285b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f55286c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {
        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Unexpected end of input: yet to parse " + h.this.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f55288d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f55289e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Ref.IntRef intRef, h hVar) {
            super(0);
            this.f55288d = intRef;
            this.f55289e = hVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Only found " + this.f55288d.element + " digits in a row, but need to parse " + this.f55289e.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f55290d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f55291e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f55292i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g f55293o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(String str, h hVar, int i10, g gVar) {
            super(0);
            this.f55290d = str;
            this.f55291e = hVar;
            this.f55292i = i10;
            this.f55293o = gVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Can not interpret the string '" + this.f55290d + "' as " + ((e) this.f55291e.c().get(this.f55292i)).c() + ": " + this.f55293o.a();
        }
    }

    public h(List consumers) {
        boolean z10;
        int i10;
        boolean z11;
        boolean z12;
        int i11;
        boolean z13;
        boolean z14;
        boolean z15;
        Intrinsics.checkNotNullParameter(consumers, "consumers");
        this.f55284a = consumers;
        Iterator it = consumers.iterator();
        int i12 = 0;
        while (true) {
            int i13 = 1;
            if (!it.hasNext()) {
                break;
            }
            Integer b10 = ((e) it.next()).b();
            if (b10 != null) {
                i13 = b10.intValue();
            }
            i12 += i13;
        }
        this.f55285b = i12;
        List<e> list = this.f55284a;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (e eVar : list) {
                if (eVar.b() == null) {
                    z10 = true;
                    break;
                }
            }
        }
        z10 = false;
        this.f55286c = z10;
        List<e> list2 = this.f55284a;
        if (!(list2 instanceof Collection) || !list2.isEmpty()) {
            for (e eVar2 : list2) {
                Integer b11 = eVar2.b();
                if (b11 != null) {
                    i10 = b11.intValue();
                } else {
                    i10 = Integer.MAX_VALUE;
                }
                if (i10 > 0) {
                    z11 = true;
                    continue;
                } else {
                    z11 = false;
                    continue;
                }
                if (!z11) {
                    z12 = false;
                    break;
                }
            }
        }
        z12 = true;
        if (z12) {
            List<e> list3 = this.f55284a;
            if ((list3 instanceof Collection) && list3.isEmpty()) {
                i11 = 0;
            } else {
                i11 = 0;
                for (e eVar3 : list3) {
                    if (eVar3.b() == null) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    if (z13 && (i11 = i11 + 1) < 0) {
                        CollectionsKt.u();
                    }
                }
            }
            if (i11 <= 1) {
                z14 = true;
            } else {
                z14 = false;
            }
            if (!z14) {
                ArrayList<e> arrayList = new ArrayList();
                for (Object obj : this.f55284a) {
                    if (((e) obj).b() == null) {
                        z15 = true;
                    } else {
                        z15 = false;
                    }
                    if (z15) {
                        arrayList.add(obj);
                    }
                }
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
                for (e eVar4 : arrayList) {
                    arrayList2.add(eVar4.c());
                }
                throw new IllegalArgumentException(("At most one variable-length numeric field in a row is allowed, but got several: " + arrayList2 + ". Parsing is undefined: for example, with variable-length month number and variable-length day of month, '111' can be parsed as Jan 11th or Nov 1st.").toString());
            }
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String d() {
        String str;
        List<e> list = this.f55284a;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (e eVar : list) {
            StringBuilder sb2 = new StringBuilder();
            Integer b10 = eVar.b();
            if (b10 == null) {
                str = "at least one digit";
            } else {
                str = b10 + " digits";
            }
            sb2.append(str);
            sb2.append(" for ");
            sb2.append(eVar.c());
            arrayList.add(sb2.toString());
        }
        if (this.f55286c) {
            return "a number with at least " + this.f55285b + " digits: " + arrayList;
        }
        return "a number with exactly " + this.f55285b + " digits: " + arrayList;
    }

    @Override // ys.o
    public Object a(Object obj, CharSequence input, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(input, "input");
        if (this.f55285b + i10 > input.length()) {
            return k.f55296a.a(i10, new a());
        }
        Ref.IntRef intRef = new Ref.IntRef();
        while (intRef.element + i10 < input.length() && vs.d.b(input.charAt(intRef.element + i10))) {
            intRef.element++;
        }
        if (intRef.element < this.f55285b) {
            return k.f55296a.a(i10, new b(intRef, this));
        }
        int size = this.f55284a.size();
        int i12 = 0;
        while (i12 < size) {
            Integer b10 = ((e) this.f55284a.get(i12)).b();
            if (b10 != null) {
                i11 = b10.intValue();
            } else {
                i11 = (intRef.element - this.f55285b) + 1;
            }
            int i13 = i11 + i10;
            g a10 = ((e) this.f55284a.get(i12)).a(obj, input, i10, i13);
            if (a10 != null) {
                return k.f55296a.a(i10, new c(input.subSequence(i10, i13).toString(), this, i12, a10));
            }
            i12++;
            i10 = i13;
        }
        return k.f55296a.b(i10);
    }

    public final List c() {
        return this.f55284a;
    }

    public String toString() {
        return d();
    }
}
