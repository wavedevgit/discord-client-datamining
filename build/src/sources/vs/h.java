package vs;

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
    private final List f51906a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51907b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51908c;

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
        final /* synthetic */ Ref.IntRef f51910d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f51911e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Ref.IntRef intRef, h hVar) {
            super(0);
            this.f51910d = intRef;
            this.f51911e = hVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Only found " + this.f51910d.element + " digits in a row, but need to parse " + this.f51911e.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f51912d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ h f51913e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f51914i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ g f51915o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(String str, h hVar, int i10, g gVar) {
            super(0);
            this.f51912d = str;
            this.f51913e = hVar;
            this.f51914i = i10;
            this.f51915o = gVar;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Can not interpret the string '" + this.f51912d + "' as " + ((e) this.f51913e.c().get(this.f51914i)).c() + ": " + this.f51915o.a();
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
        this.f51906a = consumers;
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
        this.f51907b = i12;
        List<e> list = this.f51906a;
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (e eVar : list) {
                if (eVar.b() == null) {
                    z10 = true;
                    break;
                }
            }
        }
        z10 = false;
        this.f51908c = z10;
        List<e> list2 = this.f51906a;
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
            List<e> list3 = this.f51906a;
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
                for (Object obj : this.f51906a) {
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
        List<e> list = this.f51906a;
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
        if (this.f51908c) {
            return "a number with at least " + this.f51907b + " digits: " + arrayList;
        }
        return "a number with exactly " + this.f51907b + " digits: " + arrayList;
    }

    @Override // vs.o
    public Object a(Object obj, CharSequence input, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(input, "input");
        if (this.f51907b + i10 > input.length()) {
            return k.f51918a.a(i10, new a());
        }
        Ref.IntRef intRef = new Ref.IntRef();
        while (intRef.element + i10 < input.length() && ss.d.b(input.charAt(intRef.element + i10))) {
            intRef.element++;
        }
        if (intRef.element < this.f51907b) {
            return k.f51918a.a(i10, new b(intRef, this));
        }
        int size = this.f51906a.size();
        int i12 = 0;
        while (i12 < size) {
            Integer b10 = ((e) this.f51906a.get(i12)).b();
            if (b10 != null) {
                i11 = b10.intValue();
            } else {
                i11 = (intRef.element - this.f51907b) + 1;
            }
            int i13 = i11 + i10;
            g a10 = ((e) this.f51906a.get(i12)).a(obj, input, i10, i13);
            if (a10 != null) {
                return k.f51918a.a(i10, new c(input.subSequence(i10, i13).toString(), this, i12, a10));
            }
            i12++;
            i10 = i13;
        }
        return k.f51918a.b(i10);
    }

    public final List c() {
        return this.f51906a;
    }

    public String toString() {
        return d();
    }
}
